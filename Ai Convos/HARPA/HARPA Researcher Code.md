---
created: 2024-04-01 17:50:36
Folder:
  - Prompts / AI Convos / HARPA
---

# HARPA Researcher Code

- I need to figure out how to implement

Monday, April 1, 2024

[[harpa]], [[ntresearch]], [[gpt]]

* * *

#   

# Research Agent

  

meta: title: '🕵🏻‍♂️ Research Agent / Workflow 1.0 **⚙️** ' description: > Steps / Flow:

```
- Define Query (1x)> GPT Refines Query (2x) = 3 Queries

- Loop over each query, select items / URLs

- Loop over each URL (using either ❴page❵ or NAVIAGTE method), with GPT step
to create a summary and extract relevant info from each source; stored as
JSON.

- Pass aggregated summaries/info to GPT + Query + Additional Instructions
(optional), for final answer. 


---


**Notes**

* Adaptation of Researcher Nonsense (Anshul).and Search Agent (HARPA). 

* Work in progress.

* Risk of token-intensive operations if looping over extensive list of
urls. 
```

category: User steps:

- label: SETUP type: group steps:
    - label: SET\_PARAMS type: group steps:
        - type: say message: |- ⚙️ Parameters for JSON lists defined:
            - `serp2_URLsExtract` param = \[\]
            - `serp2_URLs_MERGED` param = \[\]
            - `GPT_summJSON_merged` param = \[\]

        - type: calc func: set param: serp2\_URLsExtract format: json value: \[\]
        - type: calc param: serp2\_URLs\_MERGED value: \[\] func: set format: json
        - type: calc param: GPT\_summJSON\_merged value: \[\] func: set format: json

    - type: ask param: method message: Which method? default: '' optionsInvalid: false options:
        - label: 📃 Use ❴page❵ method value: method\_page
        - label: 🧭 Use NAVIGATE method (slower) value: method\_nav
    - type: ask param: query message: 'Please provide query or topic to research:' default: ''
    - type: ask param: exclude\_words message: >- **`exclude_words` param:** Any keywords/phrases to exclude from URLs? (e.g., pdf, csv, wsj, .edu, 2023) Separate multiple words with commas. options: null default: ''
    - type: jump to: QUERY GENERATOR+LIST FORMATTER
- label: QUERY GENERATOR+LIST FORMATTER type: group steps:
    - type: gpt prompt: > -4 You are a Research Agent with exceptional information literacy and web foraging skills, specially optimised for crafting highly targeted and effective Google search queries. As a vital component of a larger research framework, your task is to reframe the QUERY below into two distinct and optimised versions, each adhering to specific criteria.

TASK: Transform the QUERY into two (2) ALTERNATIVE versions:

Final Guidance:

* * *

Original QUERY:

{{query}}

* * *

2x ALTERNATIVE Queries (separated by a new line; DO NOT include numbers or anything else other than the two new queries): param: queries2 silent: true
        - Present each revised query on a separate line.
        - Exclude any numbering, bullets, or additional formatting from your response.
        - Provide only the two revised queries without repeating any part of the instructions.

        - **Natural Language Query (Question Format):** Recast the QUERY as a concise, precise natural language question.
        - **Google Search Optimised Query:** Reformulate the QUERY using advanced search techniques and operators to enhance Google search effectiveness.

    - condition: '{{p1}} = paused' label: ORIG PROMPT GEN GPT (PAUSED) type: gpt prompt: > You are a Research Agent with exceptional information literacy and web foraging skills, specially optimised for crafting highly targeted and effective Google search queries. As a vital component of a larger research framework, your task is to reframe the QUERY below into two distinct and optimised versions, each adhering to specific criteria.

TASK: Transform the QUERY into two alternative versions:

Final Guidance:

* * *

Original QUERY:

{{query}}

* * *

Two revised versions (separated by a new line and without any other formatting; do not include numbers or bullets): param: queries2 silent: true
        - Do not number the revised queries
        - Your response should consist of two lines - one revised query per line.
        - Your output should only include the two revised queries, nothing more.
        - REMEMBER: Please DO NOT number the revised queries, or repeat any part of my command or instructions.

        1. **Natural Language Query (Question Format):** Modify the QUERY to capture its essence in a concise, precise manner, formulated as a natural language question. This query should be in the form of a question, ending with a question mark.
        2. **Google Search Optimised Query:** Revamp the QUERY to maximise its effectiveness in a Google search context. This version should maintain the original intent but employ advanced search techniques, including Google dorks/operators and, where relevant, incorporate foreign language elements for enhanced search results.

    - type: calc param: queries-list\_SET format: auto value: |- {{query}} {{queries2}} func: set
    - type: calc func: split delimiter: /\\n+/ to: queries-list\_SPLIT param: queries-list\_SET
    - type: say message: |- ☑ 2x Queries generated by GPT 🤖: {{queries2}}

* * *

{{queries-list\_SPLIT}}
        - 📋 Final query list:
    - type: wait for: 5s silent: true

- label: SERP2 type: loop steps:
    - type: calc param: SERP2 value: '{{serp {{item}}}}' format: auto func: set
    - type: calc to: serp\_links2 func: serp.extract-links from: SERP2
    - condition: '{{p1}} = DEBUG' label: DEBUG MESSAGE2 (PAUSED) type: say message: >- Extract SERP links" complete (`serp_links2` param)

* * *

* * *

⚡️ Commencing RUN JS step to exclude URLs containing any`exclude_words` that were defined.
        - Here is the `exclude_words` parameter: **{{exclude\_words}})**
        - No of items / URLs: **{{serp\_links2.length}}**
    - type: js code: >- const exclusions = args.exclude\_words.split(',').map(word => word.trim().toLowerCase()); const filteredItems = args.serp\_links2.filter(item => !exclusions.some(exclusion => item.url.toLowerCase().includes(exclusion)) ); return filteredItems; args: serp\_links2, exclude\_words param: serp\_links2\_filtered1 silent: true
    - label: DISPLAY\_LOOP type: group steps:
        - type: say message: | ✅ Filtered list has been created.

(Existing no. of items = **{{serp\_links2.length}}**)

* * *

## 🔄 LOOPING over list to display items for selection.
            - No of items = **{{serp\_links2\_filtered1.length}}**.
        - type: loop steps:
            - type: say message: |2- - index: {{index}} - Title: {{item.title}} - URL: {{item.url}} - Description: {{item.description}} list: serp\_links2\_filtered1

    - type: ask param: user\_selection message: >- Please select the URLs / items you want to include in subsequent steps. Alternatively, enter the index number of individual items, separated by a comma (e.g. "0,1,2,3,6,11,15,20) and hit enter. options:
        - $custom
        - label: Top 5 items value: top\_5
        - label: Top 10 items value: top\_10
        - label: Top 5 and bottom 5 items value: top\_bottom\_5
        - label: All items value: all optionsInvalid: false default: ''
    - type: js code: > function filterItems(selection, items) { let filteredItems; switch (selection) { case 'top\_5': filteredItems = items.slice(0, 5); break; case 'top\_10': filteredItems = items.slice(0, 10); break; case 'top\_bottom\_5': filteredItems = items.slice(0, 5).concat(items.slice(-5)); break; case 'all': filteredItems = items; break; default: // Assuming custom selection is a comma-separated string of indices const indices = selection.split(',').map(Number); filteredItems = indices.map(index => items\[index\]); break; } return filteredItems; }

// Use the function in your RUN JS step

const result = filterItems(args\['user\_selection'\], args\['serp\_links2\_filtered1'\]);

return result; args: serp\_links2\_filtered1, user\_selection param: filteredList\_final silent: true
    - type: calc func: list-merge to: serp2\_URLs\_MERGED listA: serp2\_URLs\_MERGED listB: filteredList\_final by: ''
    - type: ask param: continue\_q message: >

* * *

Current no. of items / URLs selected = "{{serp2\_URLs\_MERGED.length}}" options:
        - label: 🔃 CONTINUE LOOP (i.e. over next version of the QUERY) value: continue\_loop
        - label: ⏭️ JUMP (i.e. to GPT parsing loop) using currently selected URLs value: jump default: '' optionsInvalid: false
        - Continue LOOP (e.g. over any remaining revised version/s of the query)?
        - Or JUMP ahead to the next loop, using current selection of URLs?

    - condition: '{{continue\_q}} = jump' type: jump to: URL-LIST-COMPILED list: queries-list\_SPLIT

- label: URL-LIST-COMPILED type: say message: >- ✳️ URL extractions complete. Final (e.g. concatenated) array / list in `serp2_URLs_MERGED` param below:

{{serp2\_URLs\_MERGED}}
- condition: '{{method}} = method\_navigate' type: jump to: NAVIGATE\_WARN
- label: 🔁 ❴PAGE❵+URL LOOP type: loop steps:
    - type: gpt prompt: > **TASK:** Generate a JSON object summarising the PAGE below, focusing specifically on details relevant to the QUERY: "{{queries-list\_SPLIT.1}}". The JSON should follow this structure:

{ "title": "Exact title of the web page", "url": "Direct URL of the web page", "date": "Publication or last-modified date in YYYY-MM-DD format", "summary": "A concise overview of the main content of the page.", "relevant\_info": \[ { "detail": "Description of a specific detail or insight relevant to the QUERY." }, ... \] }

* * *

Please ensure that:

Your response should consist solely of the requested JSON object.

* * *

**PAGE:**

{{item.url}}

{{page {{item.url}}}}

* * *

**OUTPUT:** param: gpt\_page\_loop silent: true
        - The `title` reflects the exact title of the web page.
        - The `url` is the full web address of the page.
        - The `date` is in YYYY-MM-DD format, if available.
        - The `summary` provides a brief overview of the main content.
        - The `relevant_info` is a list of JSON objects, each describing a specific detail or insight relevant to the QUERY.

    - type: calc func: extract-json to: GPT\_summJSON param: gpt\_page\_loop index: ''
    - type: calc func: list-add index: '' list: GPT\_summJSON\_merged item: GPT\_summJSON
    - label: 'GPT OUTPUT + PROGRESS ' type: say message: >- 🏁 (LOOP ITEM URL = {{item.url}}) — GPT Summarisation and Relevant Info extraction using ❴page❵ method complete:

* * *

{{gpt\_page\_loop}}

* * *

⌛️ PROGRESS: {{index}} / {{serp2\_URLs\_MERGED.length}} list: serp2\_URLs\_MERGED

- type: jump to: FINAL\_GPTS
- label: NAVIGATE\_WARN type: say message: >- ‼️ ⚠️ Next LOOP iterates over every selected URL using NAVIGATE + GPT. Potential to be token-intensive. ⚠️ ‼️

Begins in 5 secs
- type: wait for: 5s silent: true
- type: loop steps:

list: serp2\_URLs\_MERGED
    - type: say message: 🧭 NAVIGATING to "{{item.url}}"
    - type: navigate url: '{{item.url}}' waitForIdle: true silent: true
    - type: wait for: idle timeout: 20000 silent: true
    - type: wait for: custom-delay delay: '2500' silent: true
    - type: gpt prompt: > **TASK:** Generate a JSON object summarising the PAGE below, focusing specifically on details relevant to the QUERY: "{{query}}". The JSON should follow this structure:

{ "title": "Exact title of the web page", "url": "Direct URL of the web page", "date": "Publication or last-modified date in YYYY-MM-DD format", "summary": "A concise overview of the main content of the page.", "relevant\_info": \[ { "detail": "Description of a specific detail or insight relevant to the QUERY." }, ... \] }

* * *

Please ensure that:

Your response should consist solely of the requested JSON object.

* * *

**PAGE:**

{{url}}

{{page}}

* * *

**OUTPUT:** param: GPT\_summ silent: false
        - The `title` reflects the exact title of the web page.
        - The `url` is the full web address of the page.
        - The `date` is in YYYY-MM-DD format, if available.
        - The `summary` provides a brief overview of the main content.
        - The `relevant_info` is a list of JSON objects, each describing a specific detail or insight relevant to the QUERY.

    - type: wait delay: '5500' for: custom-delay silent: true
    - type: calc func: extract-json to: GPT\_summJSON param: GPT\_summ index: ''
    - type: calc func: list-add index: '' list: GPT\_summJSON\_merged item: GPT\_summJSON
    - type: say message: | 🤖 GPT summarisation and Relevant Info extraction complete 🏁:

* * *
        - PROGRESS: {{index}} / {{serp2\_URLs\_MERGED.length}}

- type: calc func: extract-json to: GPT\_summJSON param: GPT\_summ index: ''
- type: calc func: list-add index: '' list: GPT\_summJSON\_merged item: GPT\_summJSON
- type: say message: |- ✅ Merging of GPT summaries complete. Current param content below.

* * *

{{GPT\_summJSON\_merged}}
    - **`GPT_summJSON_merged` :**
- label: FINAL\_GPTS type: group steps:
    - type: ask param: final\_instructions message: Any instructions to add to final GPT prompt? (optional) options:
        - label: ⛔ NO value: ''
        - $custom optionsInvalid: false
    - type: say message: |- 🏁 FINAL GPT STEPS

* * *

Params passed to GPT prompt:
        - `QUERY` = "{{queries-list\_SPLIT.1}}"
        - `Original Query`\= "{{query}}"
        - `final_instructions` = "{{final\_instructions}}"

        - i. API / Default
        - ii. GPT4 (browser)
        - iii. Claude (browser)

    - label: FINAL\_GPT-API type: gpt prompt: > You are an AI Research Agent specialising in the analysis of infromation extracted from a variety of sources, especially news articles. You will be provided with a QUERY (which could be a question or a general topic) along with summaries and extracts from relevant online material (ARTICLE\_DATA). Your task is to develop a well-informed and comprehensive response to the provided QUERY, employing a systematic approach for information evaluation. Please ensure your response is detailed, rigorous, and directly tied to the QUERY. Your output should be cogently structured and presented in a professional format (e.g. as a report or briefing note), supported by citations.

**QUERY for Analysis:** "{{queries-list\_SPLIT.1}}"

(For context, here's the Original Query: "{{query})"

* * *

**ARTICLE\_DATA:**

"""

{{GPT\_summJSON\_merged}}

"""

* * *

**Additional Guidance**

{{final\_instructions}}

* * *

**RESPONSE:** param: final\_gpt
        - Use numerical superscript citations after referenced content. List sources at the end under "Citations" with corresponding numbers and URLs. Multiple citations appear as \[1\]\[2\]. No spaces between multiple citations.
        - Identify the most pertinent and up-to-date information.
        - Provide analysis and insights that add substantial value to the response and effectively address the QUERY.
        - Avoid concluding with a formal 'Conclusion'. Instead, use headings like 'Bottom Line', 'Big Picture', 'Assessment', 'Looking Ahead', or 'Best/Neutral/Worst-Case Scenarios'.
        - Maintain clear, direct, and objective language; avoid overly descriptive or journalistic terms.

    - label: FINAL\_GPT-4(BROWSER) type: gpt prompt: > -4 You are an AI Research Agent specialising in the analysis of infromation extracted from a variety of sources, especially news articles. You will be provided with a QUERY (which could be a question or a general topic) along with summaries and extracts from relevant online material (ARTICLE\_DATA). Your task is to develop a well-informed and comprehensive response to the provided QUERY, employing a systematic approach for information evaluation. Please ensure your response is detailed, rigorous, and directly tied to the QUERY. Your output should be cogently structured and presented in a professional format (e.g. as a report or briefing note), supported by citations.

**QUERY for Analysis:** "{{queries-list\_SPLIT.1}}"

(For context, here's the Original Query: "{{query})"

* * *

**Additional Guidance**

{{final\_instructions}}

* * *

**ARTICLE\_DATA:**

"""

{{GPT\_summJSON\_merged}}

"""

* * *

**RESPONSE:** param: final\_gpt\_4b
        - Use numerical superscript citations after referenced content. List sources at the end under "Citations" with corresponding numbers and URLs. Multiple citations appear as \[1\]\[2\]. No spaces between multiple citations.
        - Identify the most pertinent and up-to-date information.
        - Provide analysis and insights that add substantial value to the report and effectively address the QUERY.
        - Avoid concluding with a formal 'Conclusion'. Instead, use headings like 'Bottom Line', 'Big Picture', 'Assessment', 'Looking Ahead', or 'Best/Neutral/Worst-Case Scenarios'.
        - Maintain clear, direct, and objective language; avoid descriptive or journalistic terms.

    - label: FINAL\_GPT-CLAUDE type: gpt prompt: > -c You are an AI Research Agent specialising in the analysis of infromation extracted from a variety of sources, especially news articles. You will be provided with a QUERY (which could be a question or a general topic) along with summaries and extracts from relevant online material (ARTICLE\_DATA). Your task is to develop a well-informed and comprehensive response to the provided QUERY, employing a systematic approach for information evaluation. Please ensure your response is detailed, rigorous, and directly tied to the QUERY. Your output should be cogently structured and presented in a professional format (e.g. as a report or briefing note), supported by citations.

**QUERY for Analysis:** "{{queries-list\_SPLIT.1}}"

(For context, here's the Original Query: "{{query})"

* * *

**Additional Guidance**

{{final\_instructions}}

* * *

**ARTICLE\_DATA:**

"""

{{GPT\_summJSON\_merged}}

"""

* * *

**RESPONSE:** param: final\_gpt\_c
        - Use numerical superscript citations after referenced content. List sources at the end under "Citations" with corresponding numbers and URLs. Multiple citations appear as \[1\]\[2\]. No spaces between multiple citations.
        - Identify the most pertinent and up-to-date information.
        - Provide analysis and insights that add substantial value to the report and effectively address the QUERY.
        - Avoid concluding with a formal 'Conclusion'. Instead, use headings like 'Bottom Line', 'Big Picture', 'Assessment', 'Looking Ahead', or 'Best/Neutral/Worst-Case Scenarios'.
        - Maintain clear, direct, and objective language; avoid descriptive or journalistic terms.

    - label: FINAL\_GPT-BARD type: gpt prompt: > -b You are an AI Research Agent specialising in the analysis of infromation extracted from a variety of sources, especially news articles. You will be provided with a QUERY (which could be a question or a general topic) along with summaries and extracts from relevant online material (ARTICLE\_DATA). Your task is to develop a well-informed and comprehensive response to the provided QUERY, employing a systematic approach for information evaluation. Please ensure your response is detailed, rigorous, and directly tied to the QUERY. Your output should be cogently structured and presented in a professional format (e.g. as a report or briefing note), supported by citations.

**QUERY for Analysis:** "{{queries-list\_SPLIT.1}}"

(For context, here's the Original Query: "{{query})"

* * *

**Additional Guidance**

{{final\_instructions}}

* * *

**ARTICLE\_DATA:**

"""

{{GPT\_summJSON\_merged}}

"""

* * *

**RESPONSE:** param: final\_GPT\_b
        - Use numerical superscript citations after referenced content. List sources at the end under "Citations" with corresponding numbers and URLs. Multiple citations appear as \[1\]\[2\]. No spaces between multiple citations.
        - Identify the most pertinent and up-to-date information.
        - Provide analysis and insights that add substantial value to the report and effectively address the QUERY.
        - Avoid concluding with a formal 'Conclusion'. Instead, use headings like 'Bottom Line', 'Big Picture', 'Assessment', 'Looking Ahead', or 'Best/Neutral/Worst-Case Scenarios'.
        - Maintain clear, direct, and objective language; avoid descriptive or journalistic terms.

    - condition: '{{p1}} = debug' label: FINAL\_GPT-API(ORIG—PAUSED) type: gpt prompt: > You are an AI Research Agent specialising in the analysis of ARTICLE\_DATA from a variety of sources, especially news articles. Your task is to develop a well-informed and comprehensive response to the provided QUERY. Utilise a systematic approach for information evaluation, ensuring your response is detailed, rigorous, and directly tied to the QUERY, based on the ARTICLE\_DATA. Your output should be structured as a professional report or briefing paper, supported by Vancouver-style citations.

**Key Focus Areas:**

**QUERY for Analysis:** "{{queries-list\_SPLIT.1}}"

(For context, here's the Original QUERY: "{{query}")

{{final\_instructions}}

* * *

**ARTICLE\_DATA:**

{{GPT\_summJSON\_merged}}

* * *

**RESPONSE:**
        - Identify the most pertinent and up-to-date information.
        - Provide analysis and insights that add substantial value to the report and effectively address the QUERY.
        - Avoid concluding with a formal 'Conclusion'. Instead, use headings like 'Bottom Line', 'Big Picture', 'Assessment', 'Looking Ahead', or 'Best/Neutral/Worst-Case Scenarios'.
        - Maintain clear, direct, and objective language; avoid descriptive or journalistic terms.

- type: stop share: isPublic: false version: 2

* * *

  

* * *

  

# Scholarly Article Finder

meta: title: Scholarly Article PDF Downloader description: >- Extracts titles from messy text, searches for PDFs, downloads them, and attempts to zip. category: Academic Research steps:

- type: clear
- type: ask param: messyText message: 'Please paste the messy text containing scholarly article references:'
- type: gpt prompt: > Given this messy text:

"{{messyText}}"

Clean up and extract a list of scholarly article titles. Without any comment, return the result in the following format without deviation.

title 1

title X

... param: cleanedTitles
- type: calc func: split delimiter: /\\n+/ to: titlesList param: cleanedTitles
- type: loop list: titlesList steps:
    - type: say message: |- 🔄 LOOP:
        - item: {{item}}
        - index: {{index}}
    - type: calc func: set value: '{{item}} filetype:pdf' param: searchQuery format: ''
    - type: calc func: set param: serpResult format: '' value: '{{serp {{searchQuery}} }}'
    - type: calc func: serp.extract-links from: serpResult to: array
    - type: say message: '{{array.0.title}}, {{array.0.url}} '
- type: say message: >- PDFs downloaded. Due to HARPA AI's current limitations, please manually zip the files.
- type: stop share: isPublic: false version: 2