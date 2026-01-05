---
created: 2024-09-08 06:17:52
Folder:
  - Prompts
---

# Cascade Workflow

  

9/7/24

\_\_\_

  

I don't fully comprehend what this is meant to be because there was a lot of jargon used, but it's meant to be a CoT process, without stopping the LLM or limiting it's creativity. Basically, this method of prompting, called "Cascade, or a cascading workflow" Strictly directs the LLM, without '@abotomiEd"

\`\`\`

<|user|>

A request will be provided. Think out loud about the request. State the arguments before arriving at a conclusion with, 'Therefore, we can conclude:...', and finish with a solution by saying, 'Thus, the solution...'. With no yapping.<|end|>

<|assistant|>

'no yapping' refers to a design principle or behavior where the AI model provides direct, concise responses without unnecessary verbosity or filler content. Therefore, we can conclude: The user would like to get straight to the point. Thus, the solution is to to resolve the request as efficiently as possible.<|end|>

<|user|>

The user's request is: Sally (a girl) has 3 brothers. Each brother has 2 sisters. How many sisters does Sally have?<|end|>

<|assistant|>

Thinking out loud about the users request... The information presented here involves family relations, which suggests a mathematical approach to find a common ground. In this case, we need to understand the sibling relationships to determine the number of sisters Sally has. The user requested a conclusion of a number between 0-9999. Therefore, we can conclude: Let's assume Sally is one of the siblings, which means she counts as one sister. The question states that each brother has 2 sisters. If Sally is one of those sisters, then the other brother also has 2 sisters. This implies there is only one additional sister. The user's original request was 'Sally (a girl) has 3 brothers. Each brother has 2 sisters. How many sisters does Sally have?'. Thus, the number solution to the user's request is: 1<|end|>

<|endoftext|>

\`\`\`