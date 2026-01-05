---
date: 2024-08-23 13:02:50
Date: 2024-08-23 13:02:16
Folders:
  - Prompts / GPTs For NT / Ai Philosopher
---

# Ai Philosopher First Prompt

8/22/24

* * *

import json

import os

import os.path as osp

import time

from typing import List, Dict, Union

from ai\_scientist.llm import get\_response\_from\_llm, extract\_json\_between\_markers

  

import requests

import backoff

  

S2\_API\_KEY = os.getenv("S2\_API\_KEY")

  

idea\_first\_prompt = """{task\_description}

<experiment.py>

{code}

</experiment.py>

  

Here are the ideas that you have already generated:

  

'''

{prev\_ideas\_string}

'''

  

Come up with the next impactful and creative idea for research experiments and directions you can feasibly investigate with the code provided.

Note that you will not have access to any additional resources or datasets.

Make sure any idea is not overfit the specific training dataset or model, and has wider significance.

  

Respond in the following format:

  

THOUGHT:

<THOUGHT>

  

NEW IDEA JSON:

\`\`\`json

<JSON>

\`\`\`

  

In <THOUGHT>, first briefly discuss your intuitions and motivations for the idea. Detail your high-level plan, necessary design choices and ideal outcomes of the experiments. Justify how the idea is different from the existing ones.

  

In <JSON>, provide the new idea in JSON format with the following fields:

\- "Name": A shortened descriptor of the idea. Lowercase, no spaces, underscores allowed.

\- "Title": A title for the idea, will be used for the report writing.

\- "Experiment": An outline of the implementation. E.g. which functions need to be added or modified, how results will be obtained, ...

\- "Interestingness": A rating from 1 to 10 (lowest to highest).

\- "Feasibility": A rating from 1 to 10 (lowest to highest).

\- "Novelty": A rating from 1 to 10 (lowest to highest).

  

Be cautious and realistic on your ratings.

This JSON will be automatically parsed, so ensure the format is precise.

You will have {num\_reflections} rounds to iterate on the idea, but do not need to use them all.

"""

  

idea\_reflection\_prompt = """Round {current\_round}/{num\_reflections}.

In your thoughts, first carefully consider the quality, novelty, and feasibility of the idea you just created.

Include any other factors that you think are important in evaluating the idea.

Ensure the idea is clear and concise, and the JSON is the correct format.

Do not make things overly complicated.

In the next attempt, try and refine and improve your idea.

Stick to the spirit of the original idea unless there are glaring issues.

  

Respond in the same format as before:

THOUGHT:

<THOUGHT>

  

NEW IDEA JSON:

\`\`\`json

<JSON>

\`\`\`

  

If there is nothing to improve, simply repeat the previous JSON EXACTLY after the thought and include "I am done" at the end of the thoughts but before the JSON.

ONLY INCLUDE "I am done" IF YOU ARE MAKING NO MORE CHANGES."""

  

  

\# GENERATE IDEAS

def generate\_ideas(

    base\_dir,

    client,

    model,

    skip\_generation=False,

    max\_num\_generations=20,

    num\_reflections=5,

):

    if skip\_generation:

        # Load existing ideas from file

        try:

            with open(osp.join(base\_dir, "ideas.json"), "r") as f:

                ideas = json.load(f)

            print("Loaded existing ideas:")

            for idea in ideas:

                print(idea)

            return ideas

        except FileNotFoundError:

            print("No existing ideas found. Generating new ideas.")

        except json.JSONDecodeError:

            print("Error decoding existing ideas. Generating new ideas.")

  

    idea\_str\_archive = \[\]

    with open(osp.join(base\_dir, "seed\_ideas.json"), "r") as f:

        seed\_ideas = json.load(f)

    for seed\_idea in seed\_ideas:

        idea\_str\_archive.append(json.dumps(seed\_idea))

  

    with open(osp.join(base\_dir, "experiment.py"), "r") as f:

        code = f.read()

  

    with open(osp.join(base\_dir, "prompt.json"), "r") as f:

        prompt = json.load(f)

  

    idea\_system\_prompt = prompt\["system"\]

  

    for \_ in range(max\_num\_generations):

        print()

        print(f"Generating idea {\_ + 1}/{max\_num\_generations}")

        try:

            prev\_ideas\_string = "\\n\\n".join(idea\_str\_archive)

  

            msg\_history = \[\]

            print(f"Iteration 1/{num\_reflections}")

            text, msg\_history = get\_response\_from\_llm(

                idea\_first\_prompt.format(

                    task\_description=prompt\["task\_description"\],

                    code=code,

                    prev\_ideas\_string=prev\_ideas\_string,

                    num\_reflections=num\_reflections,

                ),

                client=client,

                model=model,

                system\_message=idea\_system\_prompt,

                msg\_history=msg\_history,

            )

            ## PARSE OUTPUT

            json\_output = extract\_json\_between\_markers(text)

            assert json\_output is not None, "Failed to extract JSON from LLM output"

            print(json\_output)

  

            # Iteratively improve task.

            if num\_reflections > 1:

                for j in range(num\_reflections - 1):

                    print(f"Iteration {j + 2}/{num\_reflections}")

                    text, msg\_history = get\_response\_from\_llm(

                        idea\_reflection\_prompt.format(

                            current\_round=j + 2, num\_reflections=num\_reflections

                        ),

                        client=client,

                        model=model,

                        system\_message=idea\_system\_prompt,

                        msg\_history=msg\_history,

                    )

                    ## PARSE OUTPUT

                    json\_output = extract\_json\_between\_markers(text)

                    assert (

                        json\_output is not None

                    ), "Failed to extract JSON from LLM output"

                    print(json\_output)

  

                    if "I am done" in text:

                        print(f"Idea generation converged after {j + 2} iterations.")

                        break

  

            idea\_str\_archive.append(json.dumps(json\_output))

        except Exception as e:

            print(f"Failed to generate idea: {e}")

            continue

  

    ## SAVE IDEAS

    ideas = \[\]

    for idea\_str in idea\_str\_archive:

        ideas.append(json.loads(idea\_str))

  

    with open(osp.join(base\_dir, "ideas.json"), "w") as f:

        json.dump(ideas, f, indent=4)

  

    return ideas

  

  

\# GENERATE IDEAS OPEN-ENDED

def generate\_next\_idea(

    base\_dir,

    client,

    model,

    prev\_idea\_archive=\[\],

    num\_reflections=5,

    max\_attempts=10,

):

    idea\_archive = prev\_idea\_archive

    original\_archive\_size = len(idea\_archive)

  

    print(f"Generating idea {original\_archive\_size + 1}")

  

    if len(prev\_idea\_archive) == 0:

        print(f"First iteration, taking seed ideas")

        # seed the archive on the first run with pre-existing ideas

        with open(osp.join(base\_dir, "seed\_ideas.json"), "r") as f:

            seed\_ideas = json.load(f)

        for seed\_idea in seed\_ideas\[:1\]:

            idea\_archive.append(seed\_idea)

    else:

        with open(osp.join(base\_dir, "experiment.py"), "r") as f:

            code = f.read()

        with open(osp.join(base\_dir, "prompt.json"), "r") as f:

            prompt = json.load(f)

        idea\_system\_prompt = prompt\["system"\]

  

        for \_ in range(max\_attempts):

            try:

                idea\_strings = \[\]

                for idea in idea\_archive:

                    idea\_strings.append(json.dumps(idea))

                prev\_ideas\_string = "\\n\\n".join(idea\_strings)

  

                msg\_history = \[\]

                print(f"Iteration 1/{num\_reflections}")

                text, msg\_history = get\_response\_from\_llm(

                    idea\_first\_prompt.format(

                        task\_description=prompt\["task\_description"\],

                        code=code,

                        prev\_ideas\_string=prev\_ideas\_string,

                        num\_reflections=num\_reflections,

                    )

                    + """

Completed ideas have an additional "Score" field which indicates the assessment by an expert ML reviewer.

This is on a standard 1-10 ML conference scale.

Scores of 0 indicate the idea failed either during experimentation, writeup or reviewing.

""",

                    client=client,

                    model=model,

                    system\_message=idea\_system\_prompt,

                    msg\_history=msg\_history,

                )

                ## PARSE OUTPUT

                json\_output = extract\_json\_between\_markers(text)

                assert json\_output is not None, "Failed to extract JSON from LLM output"

                print(json\_output)

  

                # Iteratively improve task.

                if num\_reflections > 1:

                    for j in range(num\_reflections - 1):

                        print(f"Iteration {j + 2}/{num\_reflections}")

                        text, msg\_history = get\_response\_from\_llm(

                            idea\_reflection\_prompt.format(

                                current\_round=j + 2, num\_reflections=num\_reflections

                            ),

                            client=client,

                            model=model,

                            system\_message=idea\_system\_prompt,

                            msg\_history=msg\_history,

                        )

                        ## PARSE OUTPUT

                        json\_output = extract\_json\_between\_markers(text)

                        assert (

                            json\_output is not None

                        ), "Failed to extract JSON from LLM output"

                        print(json\_output)

  

                        if "I am done" in text:

                            print(

                                f"Idea generation converged after {j + 2} iterations."

                            )

                            break

  

                idea\_archive.append(json\_output)

                break

            except Exception as e:

                print(f"Failed to generate idea: {e}")

                continue

  

    ## SAVE IDEAS

    with open(osp.join(base\_dir, "ideas.json"), "w") as f:

        json.dump(idea\_archive, f, indent=4)

  

    return idea\_archive

  

  

def on\_backoff(details):

    print(

        f"Backing off {details\['wait'\]:0.1f} seconds after {details\['tries'\]} tries "

        f"calling function {details\['target'\].\_\_name\_\_} at {time.strftime('%X')}"

    )

  

  

@backoff.on\_exception(

    backoff.expo, requests.exceptions.HTTPError, on\_backoff=on\_backoff

)

def search\_for\_papers(query, result\_limit=10) -> Union\[None, List\[Dict\]\]:

    if not query:

        return None

    rsp = requests.get(

        "https://api.semanticscholar.org/graph/v1/paper/search",

        headers={"X-API-KEY": S2\_API\_KEY},

        params={

            "query": query,

            "limit": result\_limit,

            "fields": "title,authors,venue,year,abstract,citationStyles,citationCount",

        },

    )

    print(f"Response Status Code: {rsp.status\_code}")

    print(

        f"Response Content: {rsp.text\[:500\]}"

    ) # Print the first 500 characters of the response content

    rsp.raise\_for\_status()

    results = rsp.json()

    total = results\["total"\]

    time.sleep(1.0)

    if not total:

        return None

  

    papers = results\["data"\]

    return papers

  

  

novelty\_system\_msg = """You are an ambitious AI PhD student who is looking to publish a paper that will contribute significantly to the field.

You have an idea and you want to check if it is novel or not. I.e., not overlapping significantly with existing literature or already well explored.

Be a harsh critic for novelty, ensure there is a sufficient contribution in the idea for a new conference or workshop paper.

You will be given access to the Semantic Scholar API, which you may use to survey the literature and find relevant papers to help you make your decision.

The top 10 results for any search query will be presented to you with the abstracts.

  

You will be given {num\_rounds} to decide on the paper, but you do not need to use them all.

At any round, you may exit early and decide on the novelty of the idea.

Decide a paper idea is novel if after sufficient searching, you have not found a paper that significantly overlaps with your idea.

Decide a paper idea is not novel, if you have found a paper that significantly overlaps with your idea.

  

{task\_description}

<experiment.py>

{code}

</experiment.py>

"""

  

novelty\_prompt = '''Round {current\_round}/{num\_rounds}.

You have this idea:

  

"""

{idea}

"""

  

The results of the last query are (empty on first round):

"""

{last\_query\_results}

"""

  

Respond in the following format:

  

THOUGHT:

<THOUGHT>

  

RESPONSE:

\`\`\`json

<JSON>

\`\`\`

  

In <THOUGHT>, first briefly reason over the idea and identify any query that could help you make your decision.

If you have made your decision, add "Decision made: novel." or "Decision made: not novel." to your thoughts.

  

In <JSON>, respond in JSON format with ONLY the following field:

\- "Query": An optional search query to search the literature (e.g. attention is all you need). You must make a query if you have not decided this round.

  

A query will work best if you are able to recall the exact name of the paper you are looking for, or the authors.

This JSON will be automatically parsed, so ensure the format is precise.'''

  

  

def check\_idea\_novelty(

    ideas,

    base\_dir,

    client,

    model,

    max\_num\_iterations=10,

):

    with open(osp.join(base\_dir, "experiment.py"), "r") as f:

        code = f.read()

    with open(osp.join(base\_dir, "prompt.json"), "r") as f:

        prompt = json.load(f)

        task\_description = prompt\["task\_description"\]

  

    for idx, idea in enumerate(ideas):

        if "novel" in idea:

            print(f"Skipping idea {idx}, already checked.")

            continue

  

        print(f"\\nChecking novelty of idea {idx}: {idea\['Name'\]}")

  

        novel = False

        msg\_history = \[\]

        papers\_str = ""

  

        for j in range(max\_num\_iterations):

            try:

                text, msg\_history = get\_response\_from\_llm(

                    novelty\_prompt.format(

                        current\_round=j + 1,

                        num\_rounds=max\_num\_iterations,

                        idea=idea,

                        last\_query\_results=papers\_str,

                    ),

                    client=client,

                    model=model,

                    system\_message=novelty\_system\_msg.format(

                        num\_rounds=max\_num\_iterations,

                        task\_description=task\_description,

                        code=code,

                    ),

                    msg\_history=msg\_history,

                )

                if "decision made: novel" in text.lower():

                    print("Decision made: novel after round", j)

                    novel = True

                    break

                if "decision made: not novel" in text.lower():

                    print("Decision made: not novel after round", j)

                    break

  

                ## PARSE OUTPUT

                json\_output = extract\_json\_between\_markers(text)

                assert json\_output is not None, "Failed to extract JSON from LLM output"

  

                ## SEARCH FOR PAPERS

                query = json\_output\["Query"\]

                papers = search\_for\_papers(query, result\_limit=10)

                if papers is None:

                    papers\_str = "No papers found."

  

                paper\_strings = \[\]

                for i, paper in enumerate(papers):

                    paper\_strings.append(

                        """{i}: {title}. {authors}. {venue}, {year}.\\nNumber of citations: {cites}\\nAbstract: {abstract}""".format(

                            i=i,

                            title=paper\["title"\],

                            authors=paper\["authors"\],

                            venue=paper\["venue"\],

                            year=paper\["year"\],

                            cites=paper\["citationCount"\],

                            abstract=paper\["abstract"\],

                        )

                    )

                papers\_str = "\\n\\n".join(paper\_strings)

  

            except Exception as e:

                print(f"Error: {e}")

                continue

  

        idea\["novel"\] = novel

  

    # Save results to JSON file

    results\_file = osp.join(base\_dir, "ideas.json")

    with open(results\_file, "w") as f:

        json.dump(ideas, f, indent=4)

  

    return ideas

  

  

if \_\_name\_\_ == "\_\_main\_\_":

    MAX\_NUM\_GENERATIONS = 32

    NUM\_REFLECTIONS = 5

    import argparse

  

    parser = argparse.ArgumentParser(description="Generate AI scientist ideas")

    # add type of experiment (nanoGPT, Boston, etc.)

    parser.add\_argument(

        "--experiment",

        type=str,

        default="nanoGPT",

        help="Experiment to run AI Scientist on.",

    )

    parser.add\_argument(

        "--model",

        type=str,

        default="gpt-4o-2024-05-13",

        choices=\[

            "claude-3-5-sonnet-20240620",

            "gpt-4o-2024-05-13",

            "deepseek-coder-v2-0724",

            "llama3.1-405b",

        \],

        help="Model to use for AI Scientist.",

    )

    parser.add\_argument(

        "--skip-idea-generation",

        action="store\_true",

        help="Skip idea generation and use existing ideas.",

    )

    parser.add\_argument(

        "--check-novelty",

        action="store\_true",

        help="Check novelty of ideas.",

    )

    args = parser.parse\_args()

  

    # Create client

    if args.model == "claude-3-5-sonnet-20240620":

        import anthropic

  

        print(f"Using Anthropic API with model {args.model}.")

        client\_model = "claude-3-5-sonnet-20240620"

        client = anthropic.Anthropic()

    elif args.model.startswith("bedrock") and "claude" in args.model:

        import anthropic

  

        # Expects: bedrock/<MODEL\_ID>

        client\_model = args.model.split("/")\[-1\]

  

        print(f"Using Amazon Bedrock with model {client\_model}.")

        client = anthropic.AnthropicBedrock()

    elif args.model.startswith("vertex\_ai") and "claude" in args.model:

        import anthropic

  

        # Expects: vertex\_ai/<MODEL\_ID>

        client\_model = args.model.split("/")\[-1\]

  

        print(f"Using Vertex AI with model {client\_model}.")

        client = anthropic.AnthropicVertex()

    elif args.model == "gpt-4o-2024-05-13":

        import openai

  

        print(f"Using OpenAI API with model {args.model}.")

        client\_model = "gpt-4o-2024-05-13"

        client = openai.OpenAI()

    elif args.model == "deepseek-coder-v2-0724":

        import openai

  

        print(f"Using OpenAI API with {args.model}.")

        client\_model = "deepseek-coder-v2-0724"

        client = openai.OpenAI(

            api\_key=os.environ\["DEEPSEEK\_API\_KEY"\], base\_url="https://api.deepseek.com"

        )

    elif args.model == "llama3.1-405b":

        import openai

  

        print(f"Using OpenAI API with {args.model}.")

        client\_model = "meta-llama/llama-3.1-405b-instruct"

        client = openai.OpenAI(

            api\_key=os.environ\["OPENROUTER\_API\_KEY"\],

            base\_url="https://openrouter.ai/api/v1",

        )

    else:

        raise ValueError(f"Model {args.model} not supported.")

  

    base\_dir = osp.join("templates", args.experiment)

    results\_dir = osp.join("results", args.experiment)

    ideas = generate\_ideas(

        base\_dir,

        client=client,

        model=client\_model,

        skip\_generation=args.skip\_idea\_generation,

        max\_num\_generations=MAX\_NUM\_GENERATIONS,

        num\_reflections=NUM\_REFLECTIONS,

    )

    if args.check\_novelty:

        ideas = check\_idea\_novelty(

            ideas,

            base\_dir=base\_dir,

            client=client,

            model=client\_model,

        )