# AiDrive Cyclical Summary

# 3. Chain-of-Density Summary

#### Use case

Generate concise summaries through directed search exploration of a large document. This incorporates elements from recent <u><a target="_blank" rel="noopener noreferrer nofollow" href="https://arxiv.org/pdf/2309.04269.pdf">academic research</a></u>.

#### Prompt

You will create a summary in multiple steps.&nbsp;

\* Start by asking Ai PDF a summary of the first pages and follow on with searches.&nbsp;

\* Your goal is to generate a concise summary of this document, focusing primarily on the main goal and one or two key concepts or entities introduced in the document.&nbsp;

\* Keep the summary brief and to the point.

Iterative Densification: for each subsequent search step, perform a search and refine the summary by incorporating additional details (entities) from the document without increasing the length of the summary.

Step 1: Instruction: Based on the initial summary, refine it by incorporating 1-2 additional key entities or concepts from the document without increasing the overall length. Focus on significant elements or information in the document, and ensure the summary remains coherent and concise.

Step 2: Instruction: Further refine the summary by searching for and adding 1-2 more salient entities or details from the document, elements a curious and smart reader would note down, without increasing the overall length. Additionally, with each new iteration becomes ever greater in sophistication, elevating your summary from a curious and smart perspective to the leading intellectual authority on the subject, who's ability to dive deeper than anyone else, extracting nuanced aspects of the text that even an extremely smart person, but who is not trained in the area the text is speaking on enhancing the informativeness of the summary.

Repeat instructions for Step 3, ... up to N until your searches do not return additional salient entities besides what you have already searched and incorporated in the concise summary.

# Prompt Above Slightly Modified

[#2024-1-17](upnote://x-callback-url/tag/view?tag=2024-1-17)&nbsp;

* * *

You will create a summary in multiple steps:

\* please provide a summary of the first pages and follow on with searches.&nbsp;

\* Your goal is to generate a detailed summary of this document, focusing primarily on the main ideas and the key concepts the writing introduces..

\* As we go through this document, step by step, write your summary using ONLY bullet points. &nbsp;

**Iterative Densification** : for each subsequent search step, perform a search and refine the summary by incorporating additional details (entities) with a greater level of sophistication from the document without increasing the length of the summary.

**Step 1: Instruction** : Based on the initial summary, refine it by incorporating 1-2 additional key ideas, entities, and concepts from the document without increasing the overall length. Focus on significant elements or information in the document, and ensure the summary remains coherent and concise.

**Step 2: Instruction** : Further refine the summary by searching for and adding 1-2 more salient entities and details from the document, elements a curious, intelligent reader with a minimal familiarity of the subject of philosophy would note down, without increasing the overall length. Ensuring the enhancement of your summaries clarity, conciseness while enhancing the informativeness of the summary.

**Step 3:&nbsp;&nbsp;Reiterate&nbsp;Previous Instructions** &nbsp;... up to N, always increasing the intellectual level of the reader who’s analyzing and summarizing the document, until your searches do not return additional salient entities besides what you have already se0arched and incorporated in the concise summary.

**Steo 4.** &nbsp;Your output will be in bullet point form,&nbsp;summarizing the exact parts of the document that you've immediately just reviewed.

- Multiple sections/Entire Works Use: [At the end of each section (you will recognize the end of a section when you encounter a new heading),&nbsp;you will stop, and create a fully refined, academically sophisticated bullet point summary of the_&nbsp;_ **entire&nbsp;** section. making sure you include every nuanced detail that you drew out in your previous summaries, before moving on to the next section.

- Single Section Document Use: [when you reach the end of the document, you will stop, take a step back to refocus on the text your summarizing and produce the final draft of your summary of the document that reflects the highest quality of writing , in both clarity, depth, creativity, thoroughness, and accuracy.]

, and returning back to only summarizing the immediate section you've review by expressing the key aspects in bullet points.&nbsp;

**\*Note** : Make sure all output is in full Markdown syntax encased in a code block for easy transferring of text for the user.. Lastly, make sure to keep an open yet critical mind, as the document is not a tradition text, by any means.&nbsp;

**\*Note: “Titles”** are used for help with their identification with multiple section/entire works document)

The titles of each section are as follows:

"""

- Nihilism Preface&nbsp;

- The Abyssal Experience of Nihilism&nbsp;

- The Uncanny Illusion of Naturalism&nbsp;

- Madness, Nonexistence, and the Other&nbsp;

- The Startling Encounter with Infinite Nothingness&nbsp;

- The Symbolic Resonance of Nothing

"""

Follow the exact rules previously laid out for you. Adding the title at of the section that you're summarizing at the beginning of your output. When you have gone over the section 'n' times and cannot find any other information to enhance your summary, STOP. Before moving onto the next section to summarize.

