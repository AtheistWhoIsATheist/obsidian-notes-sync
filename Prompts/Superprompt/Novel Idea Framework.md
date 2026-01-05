---
date: 2024-08-14 11:03:33
created: 2024-06-05 22:36:06
Folder:
  - Prompts / Best / Best SuperPrompts
---

## Novel Idea Framework 

- From the Framework OpenAI GPT

Wednesday, June 5, 2024

#novelidea

## TOC

1. Entire Prompt with intro and conclusions sections.
2. Prompt with only code block text.

* * *

<br>

# 1\. Entire Prompt (all sections)

### God-Level User-Centered Design Framework for Anthropic Metaprompt

1. **Empathy**:
    - **Understanding Users**: Users are AI developers, prompt engineers, philosophers, theologians, and interdisciplinary scholars who need to create detailed instructions for AI assistants.
    - **Needs**: Users require precise, profound, and actionable guidelines that incorporate philosophical and theological wisdom, and foster innovative, interdisciplinary thinking.
    - **Challenges**: Users might face difficulties in integrating complex philosophical concepts, religious insights, and synthesizing ideas across different disciplines while maintaining clarity and precision.
2. **Define**:
    - **Problem Statement**: How can we create a metaprompt that enables AI developers to generate effective, consistent, and philosophically profound instructions for AI assistants?
    - **Goals**: Ensure the metaprompt is comprehensive, encourages deep philosophical and theological thinking, and integrates insights from various disciplines, particularly psychology, to foster novel idea creation.
3. **Ideate**:
    - **Possible Solutions**:
        - Include structured sections for philosophical, theological, and interdisciplinary insights.
        - Provide detailed examples that synthesize ideas across philosophy, religion, and psychology.
        - Incorporate advanced prompts that encourage the generation of novel ideas and interdisciplinary connections.

4. **Prototype**:
    - **Initial Draft**: Create an advanced version of the metaprompt with sections dedicated to philosophical, theological insights, and interdisciplinary synthesis.
    - **Templates and Examples**: Add task examples that demonstrate the integration of philosophy, religion, and psychology, and encourage novel idea creation.
    - **Guidelines for Creativity and Rigor**: Provide instructions that prompt users to connect and synthesize ideas from different disciplines with rigor and depth.
5. **Test**:
    - **User Testing**: Conduct testing with a group of AI developers and interdisciplinary scholars who have a background in philosophy and religion.
    - **Feedback Loop**: Use the feedback to refine the metaprompt, focusing on the clarity of philosophical insights and the effectiveness of interdisciplinary synthesis.
    - **Iterative Improvement**: Continuously refine the metaprompt based on advanced feedback to ensure it meets the highest standards of philosophical and religious research.

### Elevated Anthropic Metaprompt

**Metaprompt Text**:

```
text
Copy code
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

### Advanced Testing and Refinement Process

1. **User Testing**:
    - Conduct rigorous testing with AI developers, philosophers, theologians, and interdisciplinary scholars.
    - Use complex and diverse examples that challenge the AI to integrate deep philosophical and theological insights.
2. **Feedback Loop**:
    - Gather detailed feedback on the clarity, depth, and usability of the metaprompt.
    - Focus on how well the metaprompt encourages interdisciplinary synthesis and novel idea creation.
3. **Iterative Improvement**:
    - Continuously refine the metaprompt based on advanced feedback.
    - Ensure that the metaprompt meets the highest standards of philosophical and religious research.
4. **Expert Review**:
    - Have the metaprompt reviewed by experts in philosophy, theology, and interdisciplinary studies to ensure its rigor and depth.
    - Incorporate their suggestions to elevate the quality further.

* * *

# 2\. Prompt (Only Code block section 

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

<br>

* * *

# ChatGPT4.o "New"

- Is this "Strawberry"? #quartz

**Analyze the document**:

1. Read the document {$DOCUMENT} carefully.
2. Identify and extract quotes that are relevant to answering the question {$QUESTION}.
3. Number the quotes sequentially.
4. If no relevant quotes are found, write "No relevant quotes."

**Answer the question**:

1. Based on the information extracted from the relevant quotes and integrating insights from philosophy, religion, psychology, and other relevant disciplines, formulate an answer to the question {$QUESTION}.
2. Encourage the synthesis of novel ideas by connecting and integrating interdisciplinary concepts.
3. Do not include the quoted content verbatim in your answer. Instead, reference the relevant quotes by their corresponding numbers in brackets at the end of the sentences that utilize information from those quotes.
4. If the question cannot be answered based on the information in the document, state that the document does not contain the necessary information to answer the question.

**Format your response**: \[1\] {Quote 1 text} \[2\] {Quote 2 text} \[3\] {Quote 3 text} ... </Relevant Quotes>

{Answer to the question, with quote references and interdisciplinary insights}

**Guidelines for Advanced Creativity and Rigor**:

- When synthesizing ideas, deeply explore the philosophical, theological, and psychological concepts.
- Encourage connections that are novel and push the boundaries of traditional thought.
- Maintain rigorous standards in the integration of interdisciplinary insights to ensure profound and meaningful answers.

**Note**: If the task is complex, you may use a scratchpad or inner monologue section to organize your thoughts and analysis before formulating the final answer. **Note**: Ensure that your answer is concise, accurate, and directly addresses the question asked.