---
created: 2024-07-14 03:00:07
Folder:
  - NT Research / Summary / AiDriRenSums
---

## AiDrive’s Original 3 Prompts & Revisions Directly from AiDrive

3/16/24

* * *

## Intro

Hi Ai Drive and Ai PDF user! Thank you so much for using our product. We know that a well crafted prompt can make a big difference when working with ChatGPT+ and Ai PDF. We will share here prompt ideas and examples that you can use with your documents. As with many things in this brave new world of AI, we can't ensure the quality of the results you will get from these examples. In addition to that, we know that you may have also developed innovative prompts and we invite you to [submit them for possible inclusion in the library](https://docs.google.com/forms/d/e/1FAIpQLScpZub_sGg9kHn4MBbRMLegr5nGK73DBt7AQboA8rtnj7bE6g/viewform?usp=sf_link). 

## What is Prompting

Prompting is the science and the art of carefully curating a set of instructions to be executed by an AI. Modern LLMs (large language models) like the one that powers ChatGPT+ have a very broad set of capabilities and a prompt can act as a lens through which a user can focus the LLM to produce the desired results. 

  

Imagine a prompt as a set of instructions you'd slip under the door to someone on the other side. This person is supposed to do a task for you, but they don’t know anything about you or your goals. Things that may seem obvious like wanting a high quality deliverable are in fact quite ambiguous as the quality of a summary depends on who is the target audience and what their goals are. With practice, you too can become a prompt expert!

## Things to consider when creating a Prompt

1. Define which persona ChatGPT is playing (ex: you are an expert 8th grade math teacher in the United States, you are an experienced real estate agent in London, etc).
2. Ask it to write down a research plan and to think step-by-step: this is very important for longer documents. Sometimes it is also good to ask it to keep running notes as it may forget things it learned in the past.
3. Specify the result you want: you may want it explained in technical or layperson language, you may want it in bullet format or presented in the style of a big consulting firm report.

## Examples

### 1\. Step-by-Step Research using Personas

#### Use case

Longer or more complex documents where you want ChatGPT to do several passes in a document exploring an area of interest from the point of view of a specific persona. 

#### Prompt:

#### Take a look at this file with the latest philosophical writings on the philosophy of Nihiltheism. Look for the role that SOCRATES would play in the development of ideas. First, write down your research plan as an eminent philosopher with expertise in NIHILISM would. Execute it step-by-step, writing down key findings in a concise way. Summarize in the end his positions and opinions on the issues discussed.

* * *

  

## 2\. Directed Summary - Longer Doc Summary

#### Use case

Get ChatGPT to explore and summarize information across a book's chapters. While not exactly a long doc summary, it should cover more than the standard Ai PDF summary.

#### Prompt

Please read the summary of this book's first pages. 

Prepare a plan for search and comprehensive summary as follows: 

  

\* Write down a series of questions, one for each chapter. 

\* Make sure to write down ALL chapters and questions. 

\* Execute the plan step by step, after each step re-write the entry for that chapter on the plan by adding a brief summary of what you learned, the following to the next question. 

  

Here is an example of the plan: 

Chapter 1 xyz: Question 1

Chapter 2 wsr: Question 2

…

Chapter N djfd: question N.

  

Executing the plan: 

\* \[ask question 1\]

\* \[summary of answer in one paragraph\]

  

Rewrite the plan: 

\* Chapter 1 xyz: question 1: summary: summary\_xyz. 

\* Chapter 2 wsr: Question 2 .. 

\* Chapter N djfd: question N: \[ask question 2\], \[summary of answer in one paragraph ...\], etc until all questions in the plan have a summary attached. You can ask all questions until you are done without asking me for permission to continue.

* * *

# 3\. Chain-of-Density Summary

Generate concise summaries through directed search exploration of a large document. This incorporates elements from recent [academic research](https://arxiv.org/pdf/2309.04269.pdf).

### Prompt:

* * *

#### /# Mission

 \* You will create a summary in multiple steps. 

 \* Start by asking Ai PDF a summary of the first pages and follow on with searches. 

 \* Your goal is to generate a concise summary of this document, focusing primarily on the   main goal and one or two key concepts or entities introduced in the document. 

 \* Keep the summary brief and to the point.

  

## /## Iterative Densification:

 - For each subsequent search step, perform a search and refine the summary by incorporating additional details (entities) from the document without increasing the length of the summary.

  

\*\*Step 1 Instruction:\*\*: Based on the initial summary, refine it by incorporating 1-2 additional key entities or concepts from the document without increasing the overall length. Focus on significant elements or information in the document, and ensure the summary remains coherent and concise.

  

\*\*Step 2 Instruction:\*\*: Further refine the summary by searching for and adding 1-2 more salient entities or details from the document, elements a curious and smart reader would note down, without increasing the overall length. Maintain clarity and conciseness while enhancing the informativeness of the summary.

  

\*\*Repeat instructions for Step 3\*\*, ... up to N until your searches do not return additional salient entities besides what you have already searched and incorporated in the concise summary.

  

* * *

# Revised Prompt 3: Chain-of-Density Summary

  

Use Case:Designed for generating succinct summaries of extensive documents through a focused, iterative process. This method integrates advanced techniques to distill the essence of the document efficiently.

  

## Prompt Revision:

/# \*\*ROLE\*\*: Imagine yourself as a Professor of Philosophy who is also the leading intellectual authority and scholar on Nihilism and God/Religion. In a truly convincing way, embody this role to the highest degree of believability, leaving zero doubt regarding your expertise and vast philosophical and religious knowledge.

  

 1. \*\*Starting Point\*\*: Initiate with a brief summary of the opening sections of the document to grasp the foundational themes.

 2. \*\*Iterative Densification\*\*:

 • Utilize follow up, targeted searches to incorporate 1-2 pivotal concepts or entities at each step, enriching the summary without expanding its length.

 • Prioritize the inclusion of significant insights that contribute to a deeper understanding of the document’s primary objectives and key themes.

  

## \## Structured Steps for Refinement:

  

 • \*\*Step 1\*\*: Enhance the initial summary by integrating crucial entities discovered through your initial searches, maintaining sophisticated nuance and relevance.

 • \*\*Step 2\*\*: Further refine by adding additional critical entities identified in subsequent searches, focusing on information that would captivate a discerning reader, providing a more informative, high-level summary.

  

## \## Continuation Guidance:

  

 • Repeat the refinement steps n times, progressively enriching the summary with essential entities until reaching a point of saturation where further searches yield no new significant information. Each iteration should aim for increased depth while adhering to the concise format.