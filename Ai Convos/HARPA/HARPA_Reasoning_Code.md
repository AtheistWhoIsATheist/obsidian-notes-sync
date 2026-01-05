---
title: HARPA Reasoning Code/Prompt
aliases:
created: 2025-04-04
last updated: 2025-04-04T04:45:00
tags:
  - harpa
backlink: "[[HARPA Reasoning Response]]"
description: This was found on HARPA's p .  It's a prompt/command/code to enable reasoning capabilities in **NON-REASONING** models
source: "{{URL}}"
---
00
- type: say
  message: >-
    **Tip:** This command performs a thorough in-depth reasoning through
    multiple tasks for a given prompt or topic and is best used for
    low-budget/peformance AI Connections. It takes time.
  label: TIP ABOUT COMMAND
- type: aska
  param: toggle
  message: |-0
    **Toggle off**

    Do you want to disable any of the options?
    Number of estimated tokens:
    - Deep Research: ~20k
    - Reasoning each depth: ~500 tokens  (in the case of a short input text)
  options:
    - label: 🌐 DEEP RESEARCH
      value: research
    - label: 💬 REASONING
      value: reasoning
    - label: ❌ NONE
      value: none
  default: ''
  vision:
    enabled: false
    mode: area
    hint: ''
    send: true
  optionsInvalid: false
  label: TOGGLE OFF
- type: ask
  param: userQuery
  message: >-
    Provide a search query
    that will be used to retrieve Google search results:
  options: null
  default: ''
  vision:
    enabled: false
    mode: area
    hint: ''
    send: true
  condition: '{{toggle}} != research'
  label: SET USER QUERY FOR GOOGLE SEARCH
- type: ask
  param: question
  message: >-
    Please enter your specific search query now. This query will be used as the
    basis for the AI-generated response. The more precisely you phrase your
    question or request, the better the AI can address it. What would you like
    to know?
  label: MAIN QUESTION
- type: group
  steps:
    - type: gpt
      prompt: >-
        # Prompt: Broad Coverage Single Google Search Query Generator


        You are an expert Google Search Strategist. Your specialty is dissecting
        a user's information need and constructing the **single broadest, yet
        relevant,** Google search query using advanced syntax to maximize the
        number of potential results.


        **OUTPUT LANGUAGE:** Respond **only** in the language of the
        **{{language}}**.


        **TASK:**

        Analyze the **USER INPUT** (topic, question, or keywords) to understand
        the core information need. Generate **one single** Google search query
        optimized for **maximum relevant coverage and result count**.


        **Key Techniques & Context for Maximizing Results:**

        Leverage Google's advanced search operators strategically, focusing on
        breadth:

        -   **`OR`:** Use extensively to include synonyms, related concepts, or
        alternative phrasings for core keywords. This is the primary tool for
        broadening the search.

        -   **`( )`:** Use to group `OR` statements or structure complex queries
        logically, ensuring correct operator precedence. Example: `(keywordA OR
        keywordB) AND (topicX OR topicY)`.

        -   **`" "` (Single Crucial Word ONLY):** Apply quotation marks **only**
        if there is **one single keyword** that is absolutely *crucial* and must
        appear exactly as typed (e.g., to distinguish it from homonyms or ensure
        its presence). **Do NOT use `" "` for phrases or multiple words.** If no
        single word is that critical, do not use `" "`.

        -   **Core Keywords:** Identify the essential concepts but consider
        broader terms or related ideas.

        -   **`AND`:** Note that Google implies `AND` between terms by default.
        Explicitly writing `AND` is usually unnecessary and does not broaden the
        search compared to just listing terms. Focus on `OR` for expansion.

        -   **Other Operators (`site:`, `-`, `*`, `intitle:`, `filetype:`):**
        Use these sparingly and only if they directly support the goal of broad,
        relevant coverage without unduly restricting results (e.g., `site:`
        could be used with `OR` across multiple relevant sites, `-` could
        exclude a major *irrelevant* topic).


        **Inferential Capability & Query Selection:**

        -   **Keywords/Phrases:** Extract core concepts. Brainstorm synonyms and
        related terms suitable for `OR` combinations.

        -   **Crucial Word Identification:** Determine if *one single word*
        meets the strict criteria for using `" "`. If not, omit `" "`.

        -   **Structure:** Construct the single query prioritizing broad keyword
        inclusion via `OR` and logical grouping with `( )`. Balance breadth with
        maintaining relevance to the user's core need.


        **OUTPUT FORMAT:**

        Present **only** the final, optimized Google search query string. Do not
        include any labels, explanations, introductory/concluding remarks, or
        any text other than the single query string itself.


        **CONSTRAINTS:**

        -   Generate exactly **one** optimized query string designed for maximum
        relevant results.

        -   Prioritize the use of `OR` and `( )` for breadth.

        -   Use `" "` **only** around a single, critical keyword if absolutely
        necessary, never for phrases.

        -   Output **only** the query string.

        -   Ensure the generated query is immediately copy-paste usable in
        Google.

        -   Adhere strictly to the specified output language (based on USER
        INPUT).


        BEGIN USER INPUT:

        {{userQuery}}
      label: CREATE AN EFFICIENT QUERY FOR GOOGLE
      silent: true
      param: query
      isolated: true
    - type: say
      message: |-
        🌐 Query created and will be used for google search:
        ```
        {{query}}
        ``` 
      label: DISPLAY CONFIRM MESSAGE FOR QUERY CREATED
    - type: calc
      func: set
      param: internet_information
      format: ''
      value: '{{serp {{query}} crawl=all}}'
      label: SET INTERNET RESULT
    - type: js
      args: internet_information
      code: |-
        function countMarkdownLinks(args) {
          const text = args.internet_information;
          
          if (!text) return 0;
          
          // Regex Pattern für Links mit ➊, ➋, ➌ etc.
          const linkPattern = /\[(➊|➋|➌|➍|➎|➏|➐|➑|➒|➓)\]\([^)]+\)/g;
          
          // Matches finden und zählen
          const matches = text.match(linkPattern) || [];
          
          // Just give the number back
          return matches.length;
        }

        return countMarkdownLinks(args);
      param: countSources
      timeout: 15000
      onFailure: DISPLAY SOURCES
      silent: true
      label: COUNT SOURCES
    - type: js
      args: internet_information
      code: |-
        const content = args['internet_information']; 
        return { 
         chars: internet_information.length, 
         estimatedTokens: Math.ceil(internet_information.length / 4), 
         estimatedWords: Math.ceil(internet_information.length / 4 * 0.75) 
        };
      param: count
      timeout: 15000
      onFailure: REGEX TO FIND SOURCES
      silent: true
      label: PAGE RESEARCH CONTENT TOKEN COUNT
    - type: say
      message: >-
        ![icon](/img/commands/general-download-cloud-01.svg) Successfully parsed
        the content from **{{countSources}}** web pages.

        - Chars: {{count.chars}}

        - Estimated Tokens: {{count.estimatedTokens}}

        - Estimated Words: {{count.estimatedWords}}
      label: DISPLAY CONFIRM MESSAGE FOR PARSED WEB PAGE CONTENT
    - type: js
      args: internet_information
      code: |-
        function formatMarkdownLinks(args) {
          const text = args.internet_information;
          
          if (!text) return "";
          
          // Regex pattern for links with ➊, ➋, ➌ etc.
          const linkPattern = /\[(➊|➋|➌|➍|➎|➏|➐|➑|➒|➓)\]\([^)]+\)/g;
          
          // Collect all matches
          const matches = [];
          text.replace(linkPattern, (match) => {
            const url = match.match(/\((.*?)\)/)[1];
            // Extract domain and path
            const urlObj = new URL(url);
            // Combine domain and path
            const fullPath = urlObj.hostname.replace('www.', '') + urlObj.pathname;
            // If path is longer than 42 chars (45 - 3 for '...'), truncate it
            const shortPath = fullPath.length > 42 
              ? fullPath.slice(0, 42) + '...'
              : fullPath.replace(/\/$/, ''); // Remove trailing slash
            matches.push(`${match} [${shortPath}](${url})`);
          });
          
          // Return formatted output
          return matches.join('\n');
        }

        return formatMarkdownLinks(args);
      param: sources
      timeout: 15000
      onFailure: TOGGLE OFF
      silent: true
      label: REGEX TO FIND SOURCES
  label: DEEP RESEARCH STEPS
  condition: '{{toggle}} != research'
- type: group
  steps:
    - type: ask
      param: depth
      message: >-
        **Set the reasoning tasks depth.**


        The depth of reasoning specifies how many reasoning tasks are to be
        created and analysed. Each depth level creates an even more detailed
        breakdown of your question and improves the final result. If you want
        more than 5 tasks, just enter the number, but then it will use more
        tokens.
      label: CHOOSE DEPTH
      optionsInvalid: false
      options:
        - label: 1 REASONING-TASKS
          value: 1
        - label: 2 REASONING-TASKS
          value: 2
        - label: 3 REASONING-TASKS
          value: 3
        - label: 4 REASONING-TASKS
          value: 4
        - label: 5 REASONING-TASKS
          value: 5
        - $custom
    - type: gpt
      prompt: >-
        [QUESTION]:

        {{question}}

        [LANGUAGE]: {{language}}


        As an AI assistant, your task is to break down the main question
        provided in [QUESTION] into a JSON array of specific reasoning tasks.
        These tasks will be completed individually to gather information
        necessary to answer the main question.


        AI reasoning simulates a thought process by using hidden "reasoning
        tokens."  These tokens are internal to the model and represent its
        intermediate steps in understanding and responding to a prompt. Unlike
        input and output tokens, which are part of the visible conversation,
        reasoning tokens are ephemeral and discarded after each turn. This
        process allows the AI to explore multiple approaches, break down complex
        ideas, and formulate a coherent response.  However, the model's memory
        of past conversations (input and output) is limited by a "context
        window."  When the accumulated conversation history exceeds this window,
        older information is truncated, much like how human memory can fade over
        time.  This continuous cycle of input, reasoning, output, and memory
        management allows the AI to engage in multi-turn conversations while
        maintaining context within its limited capacity.


        Generate a JSON array where each element is an object representing a
        reasoning task. Each task object should have a "task_id" key with a
        unique integer value and a "task_description" key with a string value
        describing the task.


        The task descriptions should focus on gathering specific pieces of
        information or performing reasoning steps that will contribute to
        answering the main question. Each task should represent a discrete step
        in the information gathering and reasoning process.


        Guidelines:

        - Ensure each task description is specific, actionable, and focused on
        gathering useful information about the [QUESTION]

        - Break down the [QUESTION] into sub-tasks that target different aspects
        or components needed to formulate a complete answer

        - Maintain a logical flow between tasks, with each task building upon
        the information gathered in previous steps

        - Cover all essential aspects of the main question, but avoid generating
        tasks for providing a summary or final answer

        - Create only {{depth}} task elements in the JSON array, no more and
        nothing less.

        - Avoid reasoning tasks requiring internet access or external knowledge.
        Reasoning must rely solely on internal data.


        Provide your output as a JSON array. Example:


        [
          {"task_id": 1, "task_description": "Identify the main categories in which major news typically occurs (e.g., politics, business, technology, science, culture, sports)."},
          {"task_id": 2, "task_description": "For each of the identified categories, determine the types of events that could be considered 'important' (e.g., elections, legislative changes, economic developments, technological breakthroughs, scientific discoveries, significant cultural or sporting events)."},
          {"task_id": 3, "task_description": "Determine the relevant sources that would most likely report on major events of 2025 *if* the model had access to them (e.g., major news agencies, professional journals, government publications) – purely hypothetically, without actual access."}
        ]


        Respond in the language specified in [LANGUAGE].
      label: GENERATE REASONING TASK LIST
      param: reasoning_tasks
      isolated: true
      silent: true
    - type: calc
      func: extract-json
      to: reasoning_tasks
      param: reasoning_tasks
      index: ''
      label: EXTRACT JSON
    - type: loop
      list: reasoning_tasks
      steps:
        - type: gpt
          prompt: >-
            [QUESTION]:

            {{question}}

            [ITEM]: "{{reasoning_tasks.{{index}}.task_description}}"

            [LANGUAGE]: {{language}}


            As an AI assistant, you are focusing on a single reasoning task
            specified by the [ITEM] object.


            Your goal is to provide information that addresses the specific task
            described in [ITEM]. Provide as much relevant and useful information
            as you think is necessary to contribute to answering the main
            question.


            Output format:

            {
              "info": "Provide textual information that addresses the specific task and helps answer the main question. Write as much as you think is necessary, focusing on useful information for further processing."
            }


            Guidelines:

            - Be thorough and detailed in your information gathering for this
            specific task

            - Focus on facts, analysis, and insights that are directly relevant
            to the task

            - Draw upon your knowledge and any relevant information from
            previous reasoning steps

            - Provide information in a clear, structured manner that will be
            easy to integrate into a final answer


            Respond in the language specified in [LANGUAGE].
          param: data
          label: PERFORM INDIVIDUAL REASONING TASK
          isolated: true
          silent: true
        - type: js
          args: data
          code: |-
            const content = args['data']; 
            return { 
             chars: data.length, 
             estimatedTokens: Math.ceil(data.length / 4), 
             estimatedWords: Math.ceil(data.length / 4 * 0.75) 
            };
          param: output_token
          timeout: 15000
          onFailure: SET LABEL AND INSTRUCTIONS | FINAL GPT
          silent: true
          label: COUNT REASONING_TASKS
        - type: calc
          func: extract-json
          to: data
          param: data
          index: first
          label: EXTRACT JSON FROM TEXT
        - type: calc
          func: set
          param: data.task_id
          format: ''
          value: '{{item.task_id}}'
          label: SET TASK ID
        - type: calc
          func: set
          param: data.task_description
          format: ''
          value: '{{item.task_description}}'
          label: SET TASK DESC
        - type: calc
          func: list-add
          index: last
          list: reasoning_history
          item: data
          label: ADD TO ITEM LIST
        - type: calc
          func: set
          param: percentage_index
          format: ''
          value: '{{index}}'
          label: SET PRECENTAGE INDEX
        - type: calc
          func: increment
          param: percentage_index
          delta: 1
          label: ADD 1 TO PERCENTAGE INDEX
        - type: calc
          func: set
          param: total
          format: ''
          value: '{{reasoning_tasks.length}}'
          label: SET TOTAL
        - type: js
          args: percentage_index, total
          code: |-
            function calculatePercentage(percentage_index, total) {
                index = Number(percentage_index);
                total = Number(total);

                if (isNaN(percentage_index) || isNaN(total)) {
                    return "Error";
                }

                return (percentage_index / total * 100).toFixed(1) + "%";
            }

            let result = calculatePercentage(percentage_index, total);
            return result;
          param: percentage
          timeout: 6000
          onFailure: PROCESSING...
          label: PERCENTAGE INDEX TOTAL
          silent: true
        - type: say
          message: >-
            🧠 Reasoning **{{percentage}}**

            Analysis to `{{reasoning_tasks.{{index}}.task_description}}`
            completed!

            - Chars: {{output_token.chars}}

            - Estimated Tokens: {{output_token.estimatedTokens}}

            - Estimated Words: {{output_token.estimatedWords}}
          label: PROCESSING...
      label: REASONING
  label: REASONING PREPERATION STEPS
  condition: '{{toggle}} != reasoning'
- type: group
  steps:
    - type: calc
      func: set
      param: internet_guidelines
      format: ''
      value: >-
        I would like you create a comprehensive answer to my [QUESTION],
        adhering to a specific format I provide:

        - Utilize [Information from the Web], provided below.

        - Extract as much useful information as possible from the web search
        results

        - Integrate insights from multiple web search sources, and ensure
        inclusion of relevant links in a markdown fully rendered format:
        [➊](URL), [➋](URL) etc, to each bullet point.

        - Every URL should correspond to only one symbol: ➊ ➋ ➌ ➍ ➎ ➏ ➐ ➑ ➒ ➓.

        - If multiple sources repeat the same information, describe it and cite
        all sources at once. 

        - If you know the answer, add your own knowledge to make it more
        complete.

        - Do not hallucinate facts or information.

        - Do not use any other tools.

        - Avoid general phrases and be more specific and detailed.

        - Avoid spaces between paragraphs and keep it compact!
      label: SET INSTRUCTIONS FOR INTERNET INFORMATION
      condition: '{{toggle}} != research'
    - type: calc
      func: set
      param: reasoning_guidelines
      format: ''
      value: >-
        - Carefully review the information provided in each output object within
        [REASONING_HISTORY]

        - Identify the key facts, analyses, and insights that directly address
        the main question

        - Integrate this relevant information into a natural, well-structured
        response

        - Ensure your answer flows logically and covers all important aspects of
        the question

        - Provide clear explanations and supporting evidence from the gathered
        information

        - Craft a polished final answer that demonstrates a deep understanding
        of the question and provides valuable, comprehensive information
      label: SET INSTRUCTIONS FOR REASONING HISTORY
      condition: '{{toggle}} != reasoning'
    - type: calc
      func: set
      param: internet_label
      format: ''
      value: |-
        [INTERNET_INFORMATION]:
        {{internet_information}}

        IMPORTANT: Do NOT forget the source citation!
      label: SET LABEL FOR INTERNET INFORMATION
      condition: '{{toggle}} != research'
    - type: calc
      func: set
      param: reasoning_label
      format: ''
      value: |-
        [REASONING_HISTORY]:
        {{reasoning_history}}
      label: SET LABEL FOR REASONING HISTORY
      condition: '{{toggle}} != reasoning'
    - type: gpt
      prompt: >-
        [QUESTION]:

        {{question}}

        [LANGUAGE]: {{language}}


        As an AI assistant, your task is to provide a final comprehensive answer
        to the question given in [QUESTION]. You have completed a series of
        information gathering and reasoning tasks, with the outputs stored in
        [REASONING_HISTORY].


        Synthesize the information and insights from all the reasoning steps to
        construct a detailed, cohesive response that fully addresses the
        original question.


        Follow the following instructions:

        {{reasoning_guidelines}}

        {{internet_guidelines}}


        [RESPONSE FORMAT]:


        ## Key takeaway:

        Provide a single, most important takeaway from the web search results in
        {{language}}.


        ## Detailed answer:

        Analyze and present detailed information that helps answer my question.
        There should be no limit in words or bullet points or even better
        subbullet points to the report. Ensure that all ideas, facts, and
        relevant information are concisely reported, and the answer is
        comprehensive. Incorporate the maximum number of source links within the
        text.


        Respond in the language specified in [LANGUAGE]. Your final answer
        should be a culmination of the information gathering and reasoning
        process, presenting a clear, insightful, and complete response to the
        original question.


        {{reasoning_label}}


        {{internet_label}}
      label: PROVIDE FINAL ANSWER
      param: ''
      isolated: true
      dumb: false
      silent: false
    - type: say
      message: |-
        ![icon](/img/commands/maps-globe-06.svg) Sources

        {{sources}}
      label: DISPLAY SOURCES
      condition: '{{toggle}} != research'
  label: SET LABEL AND INSTRUCTIONS | FINAL GPT
- type: jump
  to: TOGGLE OFF
