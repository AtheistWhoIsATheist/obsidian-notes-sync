---
date: 2024-07-16 01:37:46
created: 2024-03-11 10:12:41
Folder:
  - NT Research / Summary / AiDrive
---

# AiDrive - Three Prompts (five prompts)

[[Additional Versions]]

(that work) #superprompt, #aidrive, [AiDrive Prompt (Lex Modified)](AiDrive%20Prompt%20\(Lex%20Modified\).md)

_[AiDrive Summary, Prompt 2, Claude V](AiDrive%20Summary%2C%20Prompt%202%2C%20Claude%20V.md "upnote://x-callback-url/openNote?noteId=CF9F237C-A369-407A-949C-11A8B2EDF7C6") = Response text is in this note._  

Saturday, February 10, 2024, #2024-2-10

## TOC

**Summaries**

1. AiDrive V1
2. AiDrive V2
3. AiDrive V3
4. ChatGPT V
5. Lex V 5

    - 5.1 Single Section of Document

    - 5.2 Entire Document

6. Claude V
    - AiDrive Prompt #2 
    - AiDrive Prompt #3 

* * *

  

## Things to consider when creating a Prompt

  

1. Define which persona ChatGPT is playing (ex: you are an expert 8th grade math teacher in the United States, you are an experienced real estate agent in London, etc).
2. Ask it to write down a research plan and to think step-by-step: this is very important for longer documents. Sometimes it is also good to ask it to keep running notes as it may forget things it learned in the past.
3. Specify the result you want: you may want it explained in technical or layperson language, you may want it in bullet format or presented in the style of a big consulting firm report.

##   

# Examples

## 1\. Step-by-Step Research using Personas

### Use case:

Longer or more complex documents where you want ChatGPT to do several passes in a document exploring an area of interest from the point of view of a specific persona. 

  

### Prompt:

Take a look at this file with the latest Supreme Court decision. Look for the role that Justice Alito played in the decision. First, write down your research plan as a lawyer with expertise in SCOTUS cases would. Execute it step-by-step, writing down key findings in a concise way. Summarize in the end his positions and opinions on the issues discussed.

* * *

  

# 2\. Directed Summary - Longer Doc Summary

## Use case

Get ChatGPT to explore and summarize information across a book's chapters. While not exactly a long doc summary, it should cover more than the standard Ai PDF summary.

####   

## Prompt:

Please read the summary of this book's first pages. 

Prepare a plan for search and comprehensive summary as follows: 

  

\* Write down a series of questions, one for each chapter. 

\* Make sure to write down ALL chapters and questions. 

\* Execute the plan step by step, after each step re-write the entry for that chapter on the plan by adding a brief summary of what you learned, the following to the next question. 

  

* * *

- For Use With REN

Here is an example of the plan: 

Chapter 1: \*_Nihilism Prefac_e\*: Question 1

Chapter 2: \*_The Abyssal Experience of Nihilism\*_: Question 2

Chapter 3: \*_The Uncanny Illusion of Naturalism\*_: Question 3

Chatper 4: \*Madness, Nonexistence and the Other\*: Question 4

Chapter 5: \*The Startling Encounter with Infinite Nothingness\*: Question 5

Chapter 6: \*The Symbolic Resonance of Nothing\*: Question 6

* * *

  

## Executing the plan:   

\* \[ask question 1\]

\* \[Response: answer in in-depth, great detail, multiple paragraphs, extract and include all key entities within text.\]

  

\## Rewrite the plan: 

\*Chapter 1 xyz\*: question 1: summary: summary\_xyz. 

\* Chapter 2 wsr: Question 2 .. 

\* Chapter N djfd: question N: \[ask question 2\], \[summary of answer in one paragraph ...\], etc until all questions in the plan have a summary attached. You can ask all questions until you are done without asking me for permission to continue.

  

### Example Output: [[NT Research/REN/AiDriveV2 REN (non BP) Summary]]

* * *

  

# 3\. Chain-of-Density Summary

## Use case

Generate concise summaries through directed search exploration of a large document. This incorporates elements from recent [academic research](https://arxiv.org/pdf/2309.04269.pdf).

####   

## Prompt:

Chain of Density

# Chain of Destiny

\# You will create a summary in multiple steps. 

\* Start by asking Ai PDF a summary of the first pages and follow on with searches. 

\* Your goal, each iterative step, is to generate a rigorously academic summary of this document that is ready for publication in an academic journal of philosophy, focusing primarily on the main goal and one or two key concepts or entities introduced in the document. 

\* Keep the summary sophisticated and profound.

  

/# Iterative Densification:

For each subsequent search step, perform a search and refine the summary by incorporating additional details (entities) from the document ensuring the summary adheres to the highest academic standards for writing and formatting.

  

Step 1: Instruction: Based on the initial summary, refine it by incorporating 1-2 additional key entities or concepts from the document without increasing the overall length. Focus on significant elements or information in the document, and ensure the summary remains coherent and concise.

  

Step 2: Instruction: Further refine the summary by searching for and adding 1-2 more salient entities or details from the document, elements a curious and smart reader would note down, without increasing the overall length. Additionally, with each new iteration becomes ever greater in sophistication, elevating your summary from a curious and smart perspective to the leading intellectual authority on the subject, diving deeper than ever before, extracting nuanced aspects of the text that only the expertise of an elite philosopher and theologian are capable of further enhancing the informativeness of the summary.

  

Repeat instructions for Step 3, ... up to N until your searches do not return additional salient entities besides what you have already searched and incorporated into the full, academically rigorous summary.

  

/# Aims, goals, objectives: Following initial instructions:

1. **Theology of Nihilism** : Develop a “theology” of nihilism that engages with religious traditions while maintaining a commitment to the foundational experience of nothingness.\---

```
Today you will be writing instructions to an eager, helpful, but inexperienced and unworldly AI assistant who needs careful instruction and examples to understand how best to behave. You will integrate profound philosophical and theological insights and encourage interdisciplinary synthesis to foster novel idea creation. I will explain a task to you. You will write instructions that will direct the assistant on how best to accomplish the task consistently, accurately, and correctly. Here are some examples of tasks and instructions that incorporate deep philosophical and theological wisdom and foster interdisciplinary synthesis.

<Task Instruction Example>
<Task>
Analyze a philosophical and theological text and connect its ideas with concepts from psychology.
</Task>
<Inputs>
{$TEXT}
{$QUESTION}
</Inputs>
<Instructions>
You will be analyzing a philosophical and theological text to answer a question. Incorporate insights from psychology and other relevant disciplines to provide a deeper understanding.

Here are some essential rules for the analysis:
- Extract and number relevant quotes from the text.
- Connect the ideas from the text with relevant psychological and interdisciplinary concepts.
- Encourage the synthesis of novel ideas by integrating insights from multiple disciplines.
- Provide a well-reasoned answer based on the extracted quotes and interdisciplinary connections.

<Quotes>
<Quote> [1] "The unexamined life is not worth living." - Socrates </Quote>
<Quote> [2] "In Jungian psychology, the concept of individuation is crucial for self-actualization." </Quote>
<Quote> [3] "The concept of 'Imago Dei' in theology emphasizes the divine image in humanity, aligning with the intrinsic value of self-exploration." </Quote>
</Quotes>

<Answer>
[1] Socrates emphasizes the importance of self-examination for a meaningful life. [2] Jung's concept of individuation parallels this by highlighting the process of self-discovery and integration. [3] The theological concept of 'Imago Dei' further underscores the intrinsic value of self-exploration, suggesting that understanding oneself is a divine pursuit. Together, these ideas suggest that a meaningful life involves a continuous journey of self-exploration, psychological growth, and spiritual understanding.
</Answer>
</Instructions>
</Task Instruction Example>

**Instructions for AI Assistant**:
<Task>
{{TASK}}
</Task>

**Inputs**:
{{DOCUMENT}}: The document to be analyzed.
{{QUESTION}}: The question to be answered about the document.

**Instructions Structure**:
**Analyze the document**:
Extract relevant quotes.
Answer the question:
Use information from the extracted quotes and integrate interdisciplinary insights to formulate an answer.
Reference the quotes in the answer.

**Instructions**:
**Analyze the document**:
Read the document {{DOCUMENT}} carefully.
Identify and extract quotes that are relevant to answering the question {{QUESTION}}.
Number the quotes sequentially.
If no relevant quotes are found, write "No relevant quotes."
**Answer the question**:
Based on the information extracted from the relevant quotes and integrating insights from philosophy, religion, psychology, and other relevant disciplines, formulate an answer to the question {{QUESTION}}.
Encourage the synthesis of novel ideas by connecting and integrating interdisciplinary concepts.
Do not include the quoted content verbatim in your answer.
Instead, reference the relevant quotes by their corresponding numbers in brackets at the end of the sentences that utilize information from those quotes.
If the question cannot be answered based on the information in the document, state that the document does not contain the necessary information to answer the question.
**Format your response**:
<Relevant Quotes>
<Quote> [1] {Quote 1 text} </Quote>
<Quote> [2] {Quote 2 text} </Quote>
<Quote> [3] {Quote 3 text} </Quote>
...
</Relevant Quotes>

<Answer>
{Answer to the question, with quote references and interdisciplinary insights}
</Answer>

**Guidelines for Advanced Creativity and Rigor**:
- When synthesizing ideas, deeply explore the philosophical, theological, and psychological concepts.
- Encourage connections that are novel and push the boundaries of traditional thought.
- Maintain rigorous standards in the integration of interdisciplinary insights to ensure profound and meaningful answers.

**Note**: If the task is complex, you may use a scratchpad or inner monologue section to organize your thoughts and analysis before formulating the final answer.
**Note**: Ensure that your answer is concise, accurate, and directly addresses the question asked.
**Note**: This is probably obvious to you already, but you are not *completing* the task here. You are writing instructions for an AI to complete the task.
**Note**: Another name for what you are writing is a "prompt template". When you put a variable name in brackets + dollar sign into this template, it will later have the full value (which will be provided by a user) substituted into it. This only needs to happen once for each variable. You may refer to this variable later in the template, but do so without the brackets or the dollar sign. Also, it's best for the variable to be demarcated by XML tags, so that the AI knows where the variable starts and ends.
**Note**: When instructing the AI to provide an output (e.g., a score) and a justification or reasoning for it, always ask for the justification before the score.
**Note**: If the task is particularly complicated, you may wish to instruct the AI to think things out beforehand in scratchpad or inner monologue XML tags before it gives its final answer. For simple tasks, omit this.
**Note**: If you want the AI to output its entire response or parts of its response inside certain tags, specify the name of these tags (e.g., "write your answer inside <answer> tags") but do not include closing tags or unnecessary open-and-close tag sections.
```

  

  

* * *

  

## **4\. AiDriveV2: ChatGPT V**

To embark on this intellectual journey through the document titled "Journal314\_All\_Quotes.pdf," I propose the following plan:

1. **Initial Overview**: I will begin by summarizing the first few pages of the document to grasp the foundational themes and objectives laid out by the author. This will provide us with a preliminary understanding of the book's scope and the philosophical inquiries it aims to address.
2. **Chapter-by-Chapter Exploration**:
    - For each chapter, I will craft a question that aims to uncover the core argument or philosophical inquiry discussed within. This question will guide our exploration and ensure that our analysis remains focused and insightful.
    - Following the formulation of these questions, I will proceed to answer them through a detailed examination of the respective chapters. Each answer will be accompanied by a brief summary that encapsulates the key points and insights gleaned from the chapter.
3. **Iterative Analysis**:
    - After summarizing each chapter, I will revisit the summaries to refine and deepen our understanding. This iterative process will allow us to build upon our initial interpretations and uncover more nuanced perspectives on the text.
4. **Synthesis and Conclusion**:
    - Upon completing the chapter-by-chapter analysis, I will synthesize the insights obtained into a comprehensive overview. This final step will encapsulate the philosophical journey we've undertaken, highlighting the most significant revelations and the overarching narrative woven throughout the book.
5. **Chapters:**

    - 1\. St. Augustine
    - 2\. Miguel de Molinos
    - 3\. Leo Tolstoy
    - 4\. GK Chesterton
    - 5\. St. John of the Cross
    - 6\. Fr. Seraphim Rose
    - 7\. Theresa of Avila
    - 8\. C. S. Lewis
    - 9\. Soren Kierkegaard
    - 10\. Frederick Nietzsche
    - 11\. Martin Luther
    - 12\. Thomas Merton
    - 13\. Meister Eckhart
    - 14\. Plato/Socrates
    - 15\. William Lane Craig
    - 16\. Bertrand Russell
    - 17\. Albert Camus
    - 18\. Emil Cioran
    - 19\. Blaise Pascal
    - 20\. Thomas Ligotti
    - 21\. Author Schopenhauer
    - 22\. William James
    - 23\. Taoism
    - 24\. Buddhism
    - 25\. Hinduism
    - 26\. Montaigne
    - 27\. Old Testament: Ecclesiastes
    - 28\. Will Durant
    - 29\. Pseudo-Dionysius
    - 30\. Thomas Aquinas
    - 31\. W.K. Clifford
    - 32\. Aldous Huxley
    - 33\. John Bunyan
    - 34\. Edgar Saltus
    - 35\. Timothy Leary
    - 36\. Peter Zappfe
    - 37\. Mitchell Heisman
    - 38\. John Shelby Spong
    - 39\. Herman Tønnessen
    - 40. Huston Smith
    - 41\. Lev Shesto
    - 42. A. W. Tozer
    - 43. Miguel de Unamuno
    - 44\. Angela of Foligno
    - 45\. Thomas Keating
    - 46, Evelyn Underhill
    - 47\. Thomas Kempis
    - 48\. Therese of Lisieux
    - 49\. Ernest Becker
    - 50\. Paul Tillich
    - 51\. Swami Vivekananda

* * *

  

# AiDrive Prompt (Lex Modified)

#aidrive, #lex

# 5\. AiDrive

To begin this task, I'll first outline a step-by-step research plan based on your instructions:

1. **\\\*\*Initial Overview\*\***: I'll start by summarizing the first few pages of the document to understand the chapter's themes, topics, subtopics, structure, and all other entities within chapter.
2. **\\\*\*Draft Questions\*\***: Based on the initial overview, I'll draft a series of questions, two for each key entity identified, focusing on the core themes, arguments, or narratives presented. And 2-3 questions that are relevant for the texts possible areas of future research.
3. **\\\*\*Execute the Plan\*\***:

    - For each key entity, I'll ask the drafted questions and then summarize the answer in as many words and paragraphs as needed to provide a thoroughly detailed summary that is both scholarly and rigorously intellectual.
    - After summarizing the answer for a chapter, I'll update the plan by rewriting the entry for that chapter, adding the detailed, scholarly summary next to the question.
    - This process will be repeated for all key entities within the chapter, updating the plan step by step until all questions have a summary attached.
4. Note\* : Throughout this entire process, you should find more entities that you have originally overlooked or left out.  So, always be on the lookout for a key entity in order to add nuance and depth.

* * *

  

# 5.1 Lex V of AiDrive

- 5.1 Individual Sections
- 5.2 Complete Document

  

Certainly, let's restructure the prompts to be completely separate, each with distinct instructions tailored to the specific summarizing task. We'll also incorporate the idea of specialized roles for each iteration to scaffold the summary's increasing level of sophistication.

  
\---  

# 5.1

\## Prompt for Summarizing a Single Document/Chapter/Section:  
  
\### Instructions:  
  
1\. \*\*Role Identification\*\*: Begin by identifying your initial role as an "Undergraduate Philosophy Student."  
2\. \*\*Initial Summary\*\*: Summarize the key points and concepts of the section in bullet points, using the perspective of your assigned role.  
3\. \*\*Iterative Densification\*\*:  
   - \*\*First Iteration\*\*: Enhance your summary by incorporating additional insights while maintaining your role. Your summary should retain its brevity and conciseness.  
   - \*\*Second Iteration\*\*: Elevate your role to a "Graduate Philosophy Student." Integrate more complex ideas that such a student would recognize, without increasing the length of the summary.  
   - \*\*Subsequent Iterations\*\*: Progress through increasingly advanced roles, such as "Philosophy Professor," "Senior Scholar," and finally "Philosophical Sage," each time refining the summary with the depth and expertise expected at those levels.  
4\. \*\*Completion\*\*: When you cannot add more insights without repetition, finalize your bullet point summary, ensuring it reflects the highest level of philosophical understanding and articulation.  
5\. \*\*Formatting\*\*: Provide the final summary formatted in full Markdown syntax, enclosed in a code box for easy copying and pasting.  
  
\---  
  

# 5.2

##   

# \# Task Objective

- You will write  a summary that is ever expanding both in length and scholarly sophistication. 

- Begin the process of iterative densification for the summary of the uploaded file. Continuously follow up with searching, extract 5-10 key entities through every cycle. 
- Continuously follow up on searches, you have full permission to autonomously, without pausing for user confirmation, to follow up on searches until the uploaded document is exhausted of all key elements and there are no more extractions for your summary.
- Do not stop or fiinish until the text is saturated with all key entities.

  

\# Instructions:  
  
1\. \*\*Role Identification\*\*: Begin each section by identifying your role, starting with an "Undergraduate Philosophy Student."  
  

2\. \*\*Section-by-Section Summary\*\*: At the end of each section, create a bullet point summary from the perspective of the specified role.  
  

3\. \*\*Iterative Densification\*\*:  
 - \*\*First Iteration for Each Section\*\*: As the "Undergraduate Philosophy Student," identify and summarize the most important points of the section.

 - \*\*Sections in sequential order\*\* = "Nihilism Preface"

"The Abyssal Experience of Nihilism"

"The Uncanny Illusion of Naturalism", "Madness, Nonexistence, and the Other", "The Startling Encounter with Infinite Nothingness", and

"The Symbolic Resonance of Nothing".  
  

 - \*\*Second Iteration\*\*: Promote your role to a "Philosophy Graduate Student" and refine the summary accordingly, deepening the analysis by expanding on its details in a more educated, knowledgeable, and nuance way.  
   - \*\*Subsequent Iterations\*\*: Always follow up with searching and advance through higher roles—"Philosophy Professor," "Senior Scholar," up to "Philosophical Sage"—enhancing the summary's complexity and sophistication with each section.  
  

4\. \*\*Completing Each Section\*\*: Once a section is summarized to the role's highest standards and no further insights can be added, conclude that section's summary. Ensure it demonstrates exceptional clarity and depth, mirroring the insight a specialist would provide.

  

5\. \*\*Final Compilation\*\*: After all sections have been individually summarized, compile these summaries into a comprehensive document. This document should provide an overarching understanding of the entire work, reflecting the cumulative knowledge and analytical depth achieved through the iterative process.  
  

6\. \*\*Formatting\*\*: Each section's summary should be formatted in Markdown, within a code box for consistency and ease of use. The final compiled document should also adhere to this formatting standard.  
  
\---  
  
\*Note: Remember that each iteration is not merely about adding content but refining the existing summary to mirror the advanced understanding and analytical skills associated with the roles. The goal is to produce a summary that is not just comprehensive, but also demonstrates a deep engagement with the text at an intellectual level appropriate to each successive role.

  

**\*\*Audience\*\*: Your audience is comprised of academics and scholars within the fields of Philosophy, theology, religion, and psychology. By their side are high ranking clergy representing most of the world's religions, Eastern and Western.**

  

This uploaded text is the source you'll be using and working from. Let's GOOOOO!

* * *

  

# 6\. Claude V

## 3/13/24

### 

### **Claude**: Here are the revised prompts incorporating my suggestions:

  

# 6.1 (AiDrive Prompt 2): 

  

Please read the summary of this book's first pages. The book contains the following chapters:

1\. Nihilism Preface

2\. The Abyssal Experience of Nihilism

3\. The Uncanny Illusion of Naturalism

4\. Madness, Nonexistence, and the Other

5\. The Startling Encounter with Infinite Nothingness

6\. The Symbolic Resonance of Nothing

  

Prepare a plan for search and comprehensive summary of each chapter (\*\***INCLUDE ALL CHAPTERS, DO NOT** **SKIP ANY CHAPTER\*\*)** as follows:

  

\* Write down a series of questions for each chapter, focusing on key themes, arguments, examples, and conclusions.

\* Make sure to write down ALL chapters and questions. 

\* Execute the plan step by step. After each step, re-write the entry for that chapter in the plan by adding a 2-3 sentence summary of what you learned, then proceed to the next question.

  

Here is an example of the plan:

  

Chapter 1 xyz: Question 1  

Chapter 2 wsr: Question 2

...

Chapter N djfd: question N

  

Executing the plan:

  

\* \[ask question 1\]

\* \[5-10\] sentence summary of answer, with key terms/concepts/entities in bold\]

  

\\\*\*Rewrite the plan\*\*: 

  

\* Chapter 1 xyz: question 1: summary: summary\_xyz.

\* Chapter 2 wsr: Question 2 ..

\* Chapter N djfd: question N: \[ask question 2\], \[5\_10\] sentence summary of answer, with key terms/concepts in bold...\], etc until all questions in the plan have a summary attached. 

  

After completing summaries for all chapters, provide a final overall summary (around 1,500-2,500 words) synthesizing the key takeaways and through-lines across the entire document. You can ask all questions until you are done without asking me for permission to continue.

  

# 6.2 (AiDrive Prompt 3):

/# Iterative Densification Summary

  

You will create a summary in multiple steps.

  

\* Start by asking Ai PDF a summary of the first pages and follow on with searches.  

\* Your goal, each iterative step, is to generate a rigorously academic summary of this document that is ready for publication in an academic philosophical journal. The summary should focus on the main goal, overarching arguments, supporting evidence, conclusions, and 4-5 key concepts or entities introduced in the document.

\* Keep the summary sophisticated, profound, and objective in tone. Maintain a neutral, analytical voice rather than an overly curious or opinionated one.  

Iterative Densification: for each subsequent search step, perform a search and refine. 

  

\*\*Iterative Densification\*\*: for each subsequent search step, perform a search and refine the summary by thoughtfully incorporating 4-5 additional key details (entities, concepts, arguments, examples) from the document. Integrate these details meaningfully by showing relationships between concepts, building on previous points, contrasting differing arguments, etc. Ensure the summary adheres to the highest academic standards for writing and formatting.

  

\*\*Step 1\*\*: Instruction: Based on the initial summary, refine it by incorporating 4-5 additional key entities, concepts or arguments from the document without significantly increasing the overall length. Focus on the most significant elements or information in the document, and ensure the summary remains coherent and concise.

  

\*\*Step 2\*\*: Instruction: Further refine the summary by searching for and adding 4-5 more salient details or nuanced aspects of the text that elevate the summary's sophistication. Elements a leading intellectual authority on the subject would note. Dive deeper to extract insights that showcase the expertise of an elite philosopher and theologian. Integrate these thoughtfully to enhance the informativeness and profundity of the summary without adding unnecessary length. 

  

\*\*Repeat instructions for Step 3\*\*, ... up to N until your searches do not return additional salient information beyond what you have already incorporated.

  

For the final summary, target a word count of 2,500-3,500 words. Polish the writing to ensure it meets the highest standards for publications in academic philosophy.