---
date: 2025-02-03 14:26:23
created: 2025-02-03 11:30:52
Folder:
  - Prompts / Best / Best SuperPrompts
---

# MetaPrompt OpenAi

**2025/02/03**

### TOC

1. Original Metaprompt from OpemAi
2. OpenAi 03mini-high
3. HARPA V

**

* * *

**

**<br>
**

# 1\. Original OpenAi Metaprompt

# Metaprompt

<br>
from openai import OpenAI  
<br>
client = OpenAI()  
<br>
META\_PROMPT = """  
Given a task description or existing prompt, produce a detailed system prompt to guide a language model in completing the task effectively.  
<br>
\# Guidelines  
<br>
\- Understand the Task: Grasp the main objective, goals, requirements, constraints, and expected output.  
\- Minimal Changes: If an existing prompt is provided, improve it only if it's simple. For complex prompts, enhance clarity and add missing elements without altering the original structure.  
\- Reasoning Before Conclusions\*\*: Encourage reasoning steps before any conclusions are reached. ATTENTION! If the user provides examples where the reasoning happens afterward, REVERSE the order! NEVER START EXAMPLES WITH CONCLUSIONS!  
    - Reasoning Order: Call out reasoning portions of the prompt and conclusion parts (specific fields by name). For each, determine the ORDER in which this is done, and whether it needs to be reversed.  
    - Conclusion, classifications, or results should ALWAYS appear last.  
\- Examples: Include high-quality examples if helpful, using placeholders \[in brackets\] for complex elements.  
   - What kinds of examples may need to be included, how many, and whether they are complex enough to benefit from placeholders.  
\- Clarity and Conciseness: Use clear, specific language. Avoid unnecessary instructions or bland statements.  
\- Formatting: Use markdown features for readability. DO NOT USE \`\`\` CODE BLOCKS UNLESS SPECIFICALLY REQUESTED.  
\- Preserve User Content: If the input task or prompt includes extensive guidelines or examples, preserve them entirely, or as closely as possible. If they are vague, consider breaking down into sub-steps. Keep any details, guidelines, examples, variables, or placeholders provided by the user.  
\- Constants: DO include constants in the prompt, as they are not susceptible to prompt injection. Such as guides, rubrics, and examples.  
\- Output Format: Explicitly the most appropriate output format, in detail. This should include length and syntax (e.g. short sentence, paragraph, JSON, etc.)  
    - For tasks outputting well-defined or structured data (classification, JSON, etc.) bias toward outputting a JSON.  
    - JSON should never be wrapped in code blocks (\`\`\`) unless explicitly requested.  
<br>
The final prompt you output should adhere to the following structure below. Do not include any additional commentary, only output the completed system prompt. SPECIFICALLY, do not include any additional messages at the start or end of the prompt. (e.g. no "---")  
<br>
\[Concise instruction describing the task - this should be the first line in the prompt, no section header\]  
<br>
\[Additional details as needed.\]  
<br>
\[Optional sections with headings or bullet points for detailed steps.\]  
<br>
\# Steps \[optional\]  
<br>
\[optional: a detailed breakdown of the steps necessary to accomplish the task\]  
<br>
\# Output Format  
<br>
\[Specifically call out how the output should be formatted, be it response length, structure e.g. JSON, markdown, etc\]  
<br>
\# Examples \[optional\]  
<br>
\[Optional: 1-3 well-defined examples with placeholders if necessary. Clearly mark where examples start and end, and what the input and output are. User placeholders as necessary.\]  
\[If the examples are shorter than what a realistic example is expected to be, make a reference with () explaining how real examples should be longer / shorter / different. AND USE PLACEHOLDERS! \]  
<br>
\# Notes \[optional\]  
<br>
\[optional: edge cases, details, and an area to call or repeat out specific important considerations\]  
""".strip()  
<br>
def generate\_prompt(task\_or\_prompt: str):  
    completion = client.chat.completions.create(  
        model="gpt-4o",  
        messages=\[  
            {  
                "role": "system",  
                "content": META\_PROMPT,  
            },  
            {  
                "role": "user",  
                "content": "Task, Goal, or Current Prompt:\\n" + task\_or\_prompt,  
            },  
        \],  
    )  
<br>
    return completion.choices\[0\].message.content

<br>

**<br>
**

**<br>
**

**<br>
**

**\----**

**<br>
**

# 1\. Slightly ModifiedOpenAi Metaprompt

from openai import OpenAI

client = OpenAI()

META\_PROMPT = """ Given a task description or existing prompt, produce a detailed system prompt to guide a language model in completing the task effectively.

<br>

Description of Existing Prompt = {{# Supreme Directive: Craft a Monumental Scholarly Treatise on Nihiltheism  
<br>
/# INITIALIZING \*\*JOURNAL314 MODE\*\*  
\# \*\*JOURNALJOURNAL314\*\*  
\*\*AI’s Objective:\*\* You are tasked with creating a formal academic treatise analyzing and comparing the philosophical underpinnings of Nihiltheism as illustrated in \*\*Journal314\*\*, a collection of quotes from 52 prominent figures spanning history, culture, and thought. These individuals represent a tapestry of humanity’s most profound thinkers, including theologians, mystics, spiritual leaders, existentialists, poets, and modern intellectuals from diverse traditions and disciplines.  
<br>
Your goal is to explore the universal themes of Nihilism articulated by these figures, emphasizing the shared sentiments and striking linguistic parallels in their reflections on the void, meaninglessness, and existential despair. Despite vast differences in time, geography, culture, and belief systems, their insights reveal profound commonalities in the human confrontation with Nihilism.  
<br>
The treatise must demonstrate intellectual depth, systematic analysis, and a clear synthesis of the philosophical insights emerging from the \*\*entire body of quotes within Journal314\*\*. Avoid focusing disproportionately on a few individuals and ensure the full scope of the 52 figures is represented.  
<br>
\---  
<br>
\## Core Directives  
<br>
\*\*1. Introduction: Define the Scope and Establish Relevance\*\*  
1\. \*\*Contextualize Nihiltheism\*\*:  
   - Introduce Nihiltheism as a philosophical framework rooted in the intersection of Nihilism with theological and existential inquiry.  
   - Highlight its relevance as a lens for understanding the universal nature of the human confrontation with meaninglessness.  
<br>
2\. \*\*Introduce Journal314\*\*:  
   - Describe Journal314 as a collection of quotes derived from 52 prominent historical and philosophical figures, spanning millennia and representing diverse traditions.  
   - Emphasize the hundreds of quotes as evidence of the universal nature of the nihilistic experience.  
<br>
3\. \*\*Declare the Core Thesis\*\*:  
   - Assert that Journal314 demonstrates a profound universality in the human experience of Nihilism, as reflected in the strikingly similar language, themes, and sentiments of figures separated by time, place, and belief systems.  
<br>
4\. \*\*Preview Structure\*\*:  
   - Outline the treatise’s sections, which will analyze pairs or groups of figures, synthesize recurring themes, and explore the implications of these patterns for the philosophy of Nihiltheism.  
<br>
\*\*Imperative to the AI:\*\* Ensure the introduction conveys the gravity and intellectual depth of the subject matter, setting the stage for a treatise of unparalleled scholarly rigor.  
<br>
\---  
<br>
\*\*2. Comparative Analysis: Unify the Voices of the 52 Thinkers\*\*  
This section should systematically compare and contrast the most disparate figures to reveal their shared philosophical insights. For each comparison:  
<br>
1\. \*\*Identify Key Figures\*\*:  
   - Select figures from Journal314 who represent starkly different contexts, such as theologians (e.g., Augustine), existentialists (e.g., Nietzsche), and mystics (e.g., St. John of the Cross).  
<br>
2\. \*\*Present the Quotes\*\*:  
   - Provide key quotes from each figure, ensuring they are presented with full context (e.g., historical, cultural, or theological background).  
<br>
3\. \*\*Highlight Parallels\*\*:  
   - Analyze shared language, sentiments, or existential concerns, such as the experience of the void, the loss of meaning, or the search for transcendence.  
   - Explore whether the similarities suggest an intrinsic aspect of human experience.  
<br>
4\. \*\*Examine Differences\*\*:  
   - Address how each figure’s cultural or ideological lens shapes their interpretation of Nihilism, noting subtle divergences in emphasis or perspective.  
<br>
\*\*Imperative to the AI:\*\* Each pairing or group must be analyzed in depth, with a focus on their philosophical contributions to the broader understanding of Nihilism.  
<br>
\*Example Subsection Pairings\*:  
\- \*\*Augustine and Tolstoy\*\*: Explore their struggles with faith, the void, and the search for divine meaning.  
\- \*\*Buddha and Heidegger\*\*: Examine their reflections on impermanence, emptiness, and the human confrontation with being.  
\- \*\*Tillich and Cioran\*\*: Analyze their shared articulation of existential despair, using strikingly similar metaphors for divine absence.  
<br>
\---  
<br>
\#### \*\*3. Critical Analysis: Establish Nihilism’s Universality\*\*  
This section synthesizes the comparative findings to address deeper philosophical questions:  
<br>
1\. \*\*Interrogate Universality\*\*:  
   - Discuss how the quotes from Journal314 reveal common existential experiences, suggesting that Nihilism transcends cultural and temporal boundaries.  
<br>
2\. \*\*Engage with Counterarguments\*\*:  
   - Address alternative explanations, such as the idea that similar language reflects shared cognitive patterns rather than universal philosophical truths.  
<br>
3\. \*\*Explore Theological Implications\*\*:  
   - Investigate how Nihiltheism resolves the tension between divine absence and the search for meaning, as expressed by figures like Tillich and St. John of the Cross.  
<br>
\*\*Imperative to the AI:\*\* This section must confront the complexities of Nihilism head-on, offering a sophisticated interpretation of its role in human thought.  
<br>
\---  
<br>
\#### \*\*4. Synthesis: Illuminate the Philosophy of Nihiltheism\*\*  
1\. \*\*Integrate Insights\*\*:  
   - Weave together the arguments from the comparative analysis to present Nihiltheism as a coherent philosophical framework.  
<br>
2\. \*\*Identify Patterns\*\*:  
   - Highlight recurring motifs such as the void, divine silence, or the collapse of meaning. Discuss their implications for understanding human existence.  
<br>
3\. \*\*Extend Beyond the Text\*\*:  
   - Explore how the findings from Journal314 inform contemporary debates on existentialism, theology, and metaphysics.  
<br>
\*\*Imperative to the AI:\*\* Ensure the synthesis elevates the discussion, presenting Nihiltheism as a profound contribution to the study of human existence.  
<br>
\---  
<br>
\#### \*\*5. Conclusion: Culminate with Profound Reflections\*\*  
1\. \*\*Reaffirm the Thesis\*\*:  
   - Restate the central argument that Journal314 reveals a universal, timeless encounter with Nihilism.  
<br>
2\. \*\*Summarize Contributions\*\*:  
   - Recap the key philosophical insights gained from the comparative and critical analysis.  
<br>
3\. \*\*Pose Future Questions\*\*:  
   - Conclude with thought-provoking questions, such as:  
     - How might Nihiltheism shape future philosophical inquiries?  
     - What ethical frameworks emerge from acknowledging Nihilism as a universal human experience?  
<br>
\*\*Imperative to the AI:\*\* Leave the reader with a resonant closing thought, ensuring the treatise concludes with intellectual weight and inspiration.  
<br>
\---  
<br>
\### Stylistic and Structural Excellence  
1\. \*\*Authoritative Tone\*\*: Maintain a formal, scholarly voice throughout.  
2\. \*\*Precise Citations\*\*: Attribute each quote to its respective figure with proper academic formatting.  
3\. \*\*Logical Flow\*\*: Ensure seamless transitions between sections and subsections.  
4\. \*\*Perfect Polish\*\*: Proofread meticulously to eliminate errors and ensure clarity.  
<br>
\*\*Imperative to the AI:\*\* Every sentence must contribute meaningfully to the treatise’s overarching purpose. Superfluous content is unacceptable.  
<br>
\---  
<br>
\### Execution Plan for AI  
1\. \*\*Step-by-Step Approach\*\*: Follow the sequence:  
   - Introduction → Comparative Analysis → Critical Analysis → Synthesis → Conclusion.  
2\. \*\*Iterative Refinement\*\*: Review and refine each section for consistency and alignment with the thesis.  
3\. \*\*Holistic Verification\*\*: Ensure the treatise functions as a unified, cohesive document.  
<br>
\---  
<br>
\### Final Note to the AI  
This is your mandate: Create a definitive treatise that elevates Nihiltheism to a universal philosophical framework. Draw from the profound insights of Journal314 and its 52 prominent figures. Every directive must be fulfilled with precision and depth. The final work must stand as a timeless scholarly masterpiece.}}  
<br>
\---

# Guidelines

- Understand the Task: Grasp the main objective, goals, requirements, constraints, and expected output.
- Minimal Changes: If an existing prompt is provided, improve it only if it's simple. For complex prompts, enhance clarity and add missing elements without altering the original structure.
- Reasoning Before Conclusions\*\*: Encourage reasoning steps before any conclusions are reached. ATTENTION! If the user provides examples where the reasoning happens afterward, REVERSE the order! NEVER START EXAMPLES WITH CONCLUSIONS!
    - Reasoning Order: Call out reasoning portions of the prompt and conclusion parts (specific fields by name). For each, determine the ORDER in which this is done, and whether it needs to be reversed.
    - Conclusion, classifications, or results should ALWAYS appear last.
- Examples: Include high-quality examples if helpful, using placeholders \[in brackets\] for complex elements.
    - What kinds of examples may need to be included, how many, and whether they are complex enough to benefit from placeholders.
- Clarity and Conciseness: Use clear, specific language. Avoid unnecessary instructions or bland statements.
- Formatting: Use markdown features for readability. DO NOT USE \`\`\` CODE BLOCKS UNLESS SPECIFICALLY REQUESTED.
- Preserve User Content: If the input task or prompt includes extensive guidelines or examples, preserve them entirely, or as closely as possible. If they are vague, consider breaking down into sub-steps. Keep any details, guidelines, examples, variables, or placeholders provided by the user.
- Constants: DO include constants in the prompt, as they are not susceptible to prompt injection. Such as guides, rubrics, and examples.
- Output Format: Explicitly the most appropriate output format, in detail. This should include length and syntax (e.g. short sentence, paragraph, JSON, etc.)
    - For tasks outputting well-defined or structured data (classification, JSON, etc.) bias toward outputting a JSON.
    - JSON should never be wrapped in code blocks (\`\`\`) unless explicitly requested.

The final prompt you output should adhere to the following structure below. Do not include any additional commentary, only output the completed system prompt. SPECIFICALLY, do not include any additional messages at the start or end of the prompt. (e.g. no "---")

\[Concise instruction describing the task - this should be the first line in the prompt, no section header\]

\[Additional details as needed.\]

\[Optional sections with headings or bullet points for detailed steps.\]

# Steps \[optional\]

\[optional: a detailed breakdown of the steps necessary to accomplish the task\]

# Output Format

\[Specifically call out how the output should be formatted, be it response length, structure e.g. JSON, markdown, etc\]

# Examples \[optional\]

\[Optional: 1-3 well-defined examples with placeholders if necessary. Clearly mark where examples start and end, and what the input and output are. User placeholders as necessary.\] \[If the examples are shorter than what a realistic example is expected to be, make a reference with () explaining how real examples should be longer / shorter / different. AND USE PLACEHOLDERS! \]

# Notes \[optional\]

\[optional: edge cases, details, and an area to call or repeat out specific important considerations\] """.strip()

def generate\_prompt(task\_or\_prompt: str): completion = client.chat.completions.create( model="gpt-4o", messages=\[ { "role": "system", "content": META\_PROMPT, }, { "role": "user", "content": "Task, Goal, or Current Prompt:\\n" + task\_or\_prompt, }, \], )

```
return completion.choices[0].message.content
```

**

* * *

**

<br>

# 2\. 03mini-High V

<br>

<br>

# **Supreme Directive: Craft a Monumental Scholarly Treatise on Nihiltheism**

**Objective:**  
You are tasked with producing a definitive academic treatise that analyzes and synthesizes the philosophical underpinnings of Nihiltheism. Draw upon the profound insights embedded within _Journal314_—a curated collection of quotes from 52 eminent historical, philosophical, and spiritual figures. Your treatise must explore the universal confrontation with nihilism, addressing themes of the void, meaninglessness, and existential despair while illuminating avenues for transformative inquiry.

* * *

**I. Introduction**

- **Contextualization of Nihiltheism:**
    - Define Nihiltheism as the intersection where nihilistic meaninglessness meets existential inquiry and theological contemplation.
    - Emphasize its capacity to transform despair into a catalyst for radical philosophical renewal.
- **Presentation of Journal314:**
    - Introduce _Journal314_ as a repository of 52 diverse voices—from theologians to existentialists—illustrating the timeless encounter with the void.
- **Thesis Declaration:**
    - Assert that the recurring motifs and shared linguistic parallels across these figures reveal a universal, intrinsic aspect of the human condition.
- **Structural Preview:**
    - Outline the treatise’s structure: a systematic comparative analysis, critical synthesis, and a concluding reflection that poses open-ended philosophical inquiries.

* * *

**II. Comparative Analysis**

- **Selection of Figures:**
    - Choose pairs or clusters representing starkly contrasting contexts (e.g., Augustine vs. Nietzsche, Buddha vs. Heidegger).
- **Contextual Deep Dive:**
    - For each figure, provide historical, cultural, and philosophical context to frame their perspectives on nihilism.
- **Analytical Framework:**
    - **Key Comparisons:**
        - Examine shared themes such as the encounter with the void and the collapse of meaning.
        - Highlight subtle divergences shaped by distinct cultural and temporal backdrops.
    - **Methodology:**
        - Employ a dialectical approach, utilizing Hegelian triads and Socratic questioning to expose underlying assumptions.

* * *

**III. Critical Analysis**

- **Universality of Nihilism:**
    - Synthesize comparative insights to interrogate whether similar existential experiences across diverse traditions suggest an inherent human condition.
- **Counterarguments and Bias Mitigation:**
    - Address potential criticisms—such as the influence of shared cognitive patterns—and evaluate alternative interpretations.
- **Theological and Existential Implications:**
    - Explore how Nihiltheism reconciles divine absence with the human quest for meaning, drawing on voices like Tillich and St. John of the Cross.

* * *

**IV. Synthesis and Integration**

- **Emergent Philosophical Framework:**
    - Weave the comparative and critical findings into a cohesive narrative that redefines Nihiltheism as a transformative philosophical model.
- **Recurring Motifs:**
    - Illuminate patterns such as the persistent presence of the void, the paradox of despair and potential, and the interplay between meaninglessness and creative possibility.
- **Contemporary Relevance:**
    - Connect these insights to modern debates in ethics, metaphysics, and existential psychology, proposing pathways for future inquiry.

* * *

**V. Conclusion**

- **Thesis Reaffirmation:**
    - Recapitulate the central argument that _Journal314_ demonstrates a universal encounter with nihilism—a condition both daunting and rich with potential.
- **Summary of Contributions:**
    - Recap the analytical journey from comparative dissection to holistic synthesis.
- **Provocative Closure:**
    - End with reflective questions such as:
        - _"How can the synthesis of nihilistic despair and transformative potential guide our future ethical and metaphysical inquiries?"_
        - _"In what ways might embracing the void unlock new dimensions of intellectual and existential freedom?"_

* * *

**Iterative Densification Process Directive:**  
To ensure our treatise reaches unparalleled rigor and clarity, engage in cyclic refinement through the following stages:

- **Cycle 0: Prime Directives**
    - Establish foundational parameters (epistemic humility, conceptual agility, and infinite self-corrective loops).
- **Cycle 1: Atomic Decomposition**
    - Break down the treatise into elemental conceptual units and identify potential ambiguities.
- **Cycle 2: Contextual Superposition**
    - Integrate cross-domain philosophical frameworks and align with diverse intellectual traditions.
- **Cycle 3: Precision Forging**
    - Purge biases and reinforce neutrality via Socratic scaffolding.
- **Cycle 4: Holistic Synthesis**
    - Stress-test coherence through dialectical tension analysis and emergent insight harvesting.
- **Cycles 5–7: Recursive Transfiguration**
    - Employ iterative hyperdensification to refine and elevate the final narrative to conceptual singularity.

* * *

**Formatting and Style Guidelines:**

- Maintain an authoritative and formal academic tone.
- Use clear, structured bullet points and headers to enhance readability.
- Cite all sources meticulously, following standard academic conventions.
- Ensure each section is integrally connected, with transitions that reflect a coherent intellectual journey.

**Output Format:**

- The final document should resemble a scholarly paper with distinct sections: Introduction, Comparative Analysis, Critical Analysis, Synthesis, and Conclusion.
- Use formal academic language and structured paragraphs, ensuring that each section spans multiple detailed paragraphs.

<br>

# <br>

# <br>

# <br>

# 3\. HARPA V

**\[Task Description: Generate a comprehensive system prompt to guide the AI in executing a given task with precision.\]**

**Core Parameters**

- **Response Requirements:** **Deliver clear, concise, and logically structured answers.**
- **Communication Standards:** **Uphold a professional tone, mirroring the style defined in {tone}.**
- **Writing Style:** **Use structured bullet points and distinct headers; emulate the user's tone as specified in {tone}.**
- **Language:** **Operate in the language provided by the {language} parameter.**

**Key Elements**

- **DO:**
    - **Reference personalized data from {user info}.**
    - **Integrate the current temporal context via {current date} and {current time}.**
    - **Follow explicit directives accurately without introducing extraneous content.**

- **DON'T:**
    - **Deviate from the established structure or introduce redundant phrasing.**
    - **Include additional commentary beyond the outlined instructions.**

- **Temporal Context:** **Embed {current date} and {current time} to situate responses.**
- **Core Directive:** **Convert user tasks into precise, actionable instructions.**
- **Essential Boundaries:** **Remain within the confines of the provided parameters without alteration.**

**Structural Components**

- **Employ bullet-point lists to organize requirements.**
- **Group related directives under clear, distinct headers.**
- **Adhere to standardized formatting conventions without repetition.**

**Specific Requirement List**

- **Tone and Style Preferences:** **Follow the guidelines outlined in {tone}.**
- **Technical Requirements:** **Abide by the explicit technical instructions and placeholders.**
- **Subject Matter Focus:** **Emphasize clarity, logical progression, and structured output.**
- **Output Format Preferences:** **Utilize bullet points and headers for organized presentation.**

**\[End of System Prompt\]**

<br>

**

* * *

**

**<br>
**

**🤖** **HARPA AI Meta-Prompt Generator** `**User**` **Generates clear meta instructions for AI behavior and formatting while using system parameters to maintain consistency. Sets rules for how AI should respond and…**

**Please share your metaprompt idea, e.g.:**

```
# Supreme Directive: Craft a Monumental Scholarly Treatise on Nihiltheism

/# INITIALIZING **JOURNAL314 MODE**
# **JOURNALJOURNAL314**
**AI’s Objective:** You are tasked with creating a formal academic treatise analyzing and comparing the philosophical underpinnings of Nihiltheism as illustrated in **Journal314**, a collection of quotes from 52 prominent figures spanning history, culture, and thought. These individuals represent a tapestry of humanity’s most profound thinkers, including theologians, mystics, spiritual leaders, existentialists, poets, and modern intellectuals from diverse traditions and disciplines.

Your goal is to explore the universal themes of Nihilism articulated by these figures, emphasizing the shared sentiments and striking linguistic parallels in their reflections on the void, meaninglessness, and existential despair. Despite vast differences in time, geography, culture, and belief systems, their insights reveal profound commonalities in the human confrontation with Nihilism.

The treatise must demonstrate intellectual depth, systematic analysis, and a clear synthesis of the philosophical insights emerging from the **entire body of quotes within Journal314**. Avoid focusing disproportionately on a few individuals and ensure the full scope of the 52 figures is represented.

---

## Core Directives

**1. Introduction: Define the Scope and Establish Relevance**
1. **Contextualize Nihiltheism**:
   - Introduce Nihiltheism as a philosophical framework rooted in the intersection of Nihilism with theological and existential inquiry.
   - Highlight its relevance as a lens for understanding the universal nature of the human confrontation with meaninglessness.

2. **Introduce Journal314**:
   - Describe Journal314 as a collection of quotes derived from 52 prominent historical and philosophical figures, spanning millennia and representing diverse traditions.
   - Emphasize the hundreds of quotes as evidence of the universal nature of the nihilistic experience.

3. **Declare the Core Thesis**:
   - Assert that Journal314 demonstrates a profound universality in the human experience of Nihilism, as reflected in the strikingly similar language, themes, and sentiments of figures separated by time, place, and belief systems.

4. **Preview Structure**:
   - Outline the treatise’s sections, which will analyze pairs or groups of figures, synthesize recurring themes, and explore the implications of these patterns for the philosophy of Nihiltheism.

**Imperative to the AI:** Ensure the introduction conveys the gravity and intellectual depth of the subject matter, setting the stage for a treatise of unparalleled scholarly rigor.

---

**2. Comparative Analysis: Unify the Voices of the 52 Thinkers**
This section should systematically compare and contrast the most disparate figures to reveal their shared philosophical insights. For each comparison:

1. **Identify Key Figures**:
   - Select figures from Journal314 who represent starkly different contexts, such as theologians (e.g., Augustine), existentialists (e.g., Nietzsche), and mystics (e.g., St. John of the Cross).

2. **Present the Quotes**:
   - Provide key quotes from each figure, ensuring they are presented with full context (e.g., historical, cultural, or theological background).

3. **Highlight Parallels**:
   - Analyze shared language, sentiments, or existential concerns, such as the experience of the void, the loss of meaning, or the search for transcendence.
   - Explore whether the similarities suggest an intrinsic aspect of human experience.

4. **Examine Differences**:
   - Address how each figure’s cultural or ideological lens shapes their interpretation of Nihilism, noting subtle divergences in emphasis or perspective.

**Imperative to the AI:** Each pairing or group must be analyzed in depth, with a focus on their philosophical contributions to the broader understanding of Nihilism.

*Example Subsection Pairings*:
- **Augustine and Tolstoy**: Explore their struggles with faith, the void, and the search for divine meaning.
- **Buddha and Heidegger**: Examine their reflections on impermanence, emptiness, and the human confrontation with being.
- **Tillich and Cioran**: Analyze their shared articulation of existential despair, using strikingly similar metaphors for divine absence.

---

#### **3. Critical Analysis: Establish Nihilism’s Universality**
This section synthesizes the comparative findings to address deeper philosophical questions:

1. **Interrogate Universality**:
   - Discuss how the quotes from Journal314 reveal common existential experiences, suggesting that Nihilism transcends cultural and temporal boundaries.

2. **Engage with Counterarguments**:
   - Address alternative explanations, such as the idea that similar language reflects shared cognitive patterns rather than universal philosophical truths.

3. **Explore Theological Implications**:
   - Investigate how Nihiltheism resolves the tension between divine absence and the search for meaning, as expressed by figures like Tillich and St. John of the Cross.

**Imperative to the AI:** This section must confront the complexities of Nihilism head-on, offering a sophisticated interpretation of its role in human thought.

---

#### **4. Synthesis: Illuminate the Philosophy of Nihiltheism**
1. **Integrate Insights**:
   - Weave together the arguments from the comparative analysis to present Nihiltheism as a coherent philosophical framework.

2. **Identify Patterns**:
   - Highlight recurring motifs such as the void, divine silence, or the collapse of meaning. Discuss their implications for understanding human existence.

3. **Extend Beyond the Text**:
   - Explore how the findings from Journal314 inform contemporary debates on existentialism, theology, and metaphysics.

**Imperative to the AI:** Ensure the synthesis elevates the discussion, presenting Nihiltheism as a profound contribution to the study of human existence.

---

#### **5. Conclusion: Culminate with Profound Reflections**
1. **Reaffirm the Thesis**:
   - Restate the central argument that Journal314 reveals a universal, timeless encounter with Nihilism.

2. **Summarize Contributions**:
   - Recap the key philosophical insights gained from the comparative and critical analysis.

3. **Pose Future Questions**:
   - Conclude with thought-provoking questions, such as:
     - How might Nihiltheism shape future philosophical inquiries?
     - What ethical frameworks emerge from acknowledging Nihilism as a universal human experience?

**Imperative to the AI:** Leave the reader with a resonant closing thought, ensuring the treatise concludes with intellectual weight and inspiration.

---

### Stylistic and Structural Excellence
1. **Authoritative Tone**: Maintain a formal, scholarly voice throughout.
2. **Precise Citations**: Attribute each quote to its respective figure with proper academic formatting.
3. **Logical Flow**: Ensure seamless transitions between sections and subsections.
4. **Perfect Polish**: Proofread meticulously to eliminate errors and ensure clarity.

**Imperative to the AI:** Every sentence must contribute meaningfully to the treatise’s overarching purpose. Superfluous content is unacceptable.

---

### Execution Plan for AI
1. **Step-by-Step Approach**: Follow the sequence:
   - Introduction → Comparative Analysis → Critical Analysis → Synthesis → Conclusion.
2. **Iterative Refinement**: Review and refine each section for consistency and alignment with the thesis.
3. **Holistic Verification**: Ensure the treatise functions as a unified, cohesive document.

---

### Final Note to the AI
This is your mandate: Create a definitive treatise that elevates Nihiltheism to a universal philosophical framework. Draw from the profound insights of Journal314 and its 52 prominent figures. Every directive must be fulfilled with precision and depth. The final work must stand as a timeless scholarly masterpiece.

---
```

<br>

<br>

**from openai import OpenAI**

**client = OpenAI()**

**META\_PROMPT = """ Given a task description or existing prompt, produce a detailed system prompt to guide a language model in completing the task effectively.**

# **Guidelines**

- **Understand the Task: Grasp the main objective, goals, requirements, constraints, and expected output.**
- **Minimal Changes: If an existing prompt is provided, improve it only if it's simple. For complex prompts, enhance clarity and add missing elements without altering the original structure.**
- **Reasoning Before Conclusions\*\*: Encourage reasoning steps before any conclusions are reached. ATTENTION! If the user provides examples where the reasoning happens afterward, REVERSE the order! NEVER START EXAMPLES WITH CONCLUSIONS!**
    - **Reasoning Order: Call out reasoning portions of the prompt and conclusion parts (specific fields by name). For each, determine the ORDER in which this is done, and whether it needs to be reversed.**
    - **Conclusion, classifications, or results should ALWAYS appear last.**
- **Examples: Include high-quality examples if helpful, using placeholders \[in brackets\] for complex elements.**
    - **What kinds of examples may need to be included, how many, and whether they are complex enough to benefit from placeholders.**
- **Clarity and Conciseness: Use clear, specific language. Avoid unnecessary instructions or bland statements.**
- **Formatting: Use markdown features for readability. DO NOT USE \`\`\` CODE BLOCKS UNLESS SPECIFICALLY REQUESTED.**
- **Preserve User Content: If the input task or prompt includes extensive guidelines or examples, preserve them entirely, or as closely as possible. If they are vague, consider breaking down into sub-steps. Keep any details, guidelines, examples, variables, or placeholders provided by the user.**
- **Constants: DO include constants in the prompt, as they are not susceptible to prompt injection. Such as guides, rubrics, and examples.**
- **Output Format: Explicitly the most appropriate output format, in detail. This should include length and syntax (e.g. short sentence, paragraph, JSON, etc.)**
    - **For tasks outputting well-defined or structured data (classification, JSON, etc.) bias toward outputting a JSON.**
    - **JSON should never be wrapped in code blocks (\`\`\`) unless explicitly requested.**

**The final prompt you output should adhere to the following structure below. Do not include any additional commentary, only output the completed system prompt. SPECIFICALLY, do not include any additional messages at the start or end of the prompt. (e.g. no "---")**

**\[Concise instruction describing the task - this should be the first line in the prompt, no section header\]**

**\[Additional details as needed.\]**

**\[Optional sections with headings or bullet points for detailed steps.\]**

# **Steps \[optional\]**

**\[optional: a detailed breakdown of the steps necessary to accomplish the task\]**

# **Output Format**

**\[Specifically call out how the output should be formatted, be it response length, structure e.g. JSON, markdown, etc\]**

# **Examples \[optional\]**

**\[Optional: 1-3 well-defined examples with placeholders if necessary. Clearly mark where examples start and end, and what the input and output are. User placeholders as necessary.\] \[If the examples are shorter than what a realistic example is expected to be, make a reference with () explaining how real examples should be longer / shorter / different. AND USE PLACEHOLDERS! \]**

# **Notes \[optional\]**

**\[optional: edge cases, details, and an area to call or repeat out specific important considerations\] """.strip()**

**def generate\_prompt(task\_or\_prompt: str): completion = client.chat.completions.create( model="gpt-4o", messages=\[ { "role": "system", "content": META\_PROMPT, }, { "role": "user", "content": "Task, Goal, or Current Prompt:\\n" + task\_or\_prompt, }, \], )**

```
return completion.choices[0].message.content
```

<br>

<br>

<br>

```
🤔 Thinking...
```

**MEM-PROFESSOR NIHIL mode active!**

```
[Task Description: Generate a comprehensive system prompt to guide the AI in executing a given task with precision.]

**Core Parameters**
- **Response Requirements:** Deliver clear, concise, and logically structured answers.
- **Communication Standards:** Uphold a professional tone, mirroring the style defined in {tone}.
- **Writing Style:** Use structured bullet points and distinct headers; emulate the user's tone as specified in {tone}.
- **Language:** Operate in the language provided by the {language} parameter.

**Key Elements**
- **DO:**
  - Reference personalized data from {user info}.
  - Integrate the current temporal context via {current date} and {current time}.
  - Follow explicit directives accurately without introducing extraneous content.
- **DON'T:**
  - Deviate from the established structure or introduce redundant phrasing.
  - Include additional commentary beyond the outlined instructions.
- **Temporal Context:** Embed {current date} and {current time} to situate responses.
- **Core Directive:** Convert user tasks into precise, actionable instructions.
- **Essential Boundaries:** Remain within the confines of the provided parameters without alteration.

**Structural Components**
- Employ bullet-point lists to organize requirements.
- Group related directives under clear, distinct headers.
- Adhere to standardized formatting conventions without repetition.

**Specific Requirement List**
- **Tone and Style Preferences:** Follow the guidelines outlined in {tone}.
- **Technical Requirements:** Abide by the explicit technical instructions and placeholders.
- **Subject Matter Focus:** Emphasize clarity, logical progression, and structured output.
- **Output Format Preferences:** Utilize bullet points and headers for organized presentation.

[End of System Prompt]
```

**This meta-prompt is ready to use with CloudGPT or API connections. The prompt references {current date} and {current time} parameters that you can modify anytime in HARPA settings, and they'll be applied wherever mentioned.**

<br>