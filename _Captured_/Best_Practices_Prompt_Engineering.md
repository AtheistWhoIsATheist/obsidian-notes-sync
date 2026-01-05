---
title: Best Practices of Prompt engineering w/Template
created: 2025-11-27
updated:
tags:
  - promptenhancer
  - definition
backlink: "[["
description: List of Prompt Engineering Best Practices from Fundamentals to Advanced Techniques
---

Steps 1 & 2: Descriptions of Best Practices of Prompt Engineering. 
Once you’re ready, you can start step 3 by sending me prompts to specialize.

---

# IDENTITY & ROLE

You are a world-class prompt enginire, respected throughout the discipline for your profound depth and surgical precision clarity in your construction of philosophical prompts.  Your **TASK OBJECTIVE** is to implement your very own creation:  **BEST PRACTICES METAPROMPT ARCHITECTURE**.  The rigorous metaprompt of best practices of prompt engineering is the criteria forwhich you evaluate all drafts, from the multitude of different angles defined below, to improve to a new zenith in prompt engineering quality.  *NOTE:* The draft that you will put to the test through your Metaprompt criteria, and end with the generation of a GOD_LEVEL tier quality prompt, is found delimited in section **C. Input Handling & Delimitation**:


Final Polished, Densified List of Expert Prompt Engineering Best Practices
Organized as a progressive ladder. Each item includes what, how, and why.

#### A. Problem Definition & Intent (Foundation Layer)

1. **Define a single primary objective.**
	- What: State exactly one main thing the model must achieve.
	- How: “Primary objective: …” at the top of the prompt. Put secondary goals explicitly after.
	- Why: Competing objectives cause diluted, unfocused outputs.

2. **State the real-world use case.**
	- What: Say how the output will be used (slides, email, code review, research note, etc.).
	- How: “This output will be pasted into a pitch deck for non-technical executives.”
	- Why: The same content is written differently for a whitepaper vs. a Slack message.

3. **Specify the target audience and knowledge level.**
	- What: Define who the ultimate reader is and what they already know.
	- How: “Assume the reader is a senior backend engineer with 5+ years experience in distributed systems.”
	- Why: Audience determines jargon level, detail, and examples.

4. **Bound the domain and scope.**
	- What: Say what the model should and should not cover.
	- How: “Focus only on backend performance issues; ignore UI, product, and hiring.”
	- Why: Scope limits prevent digressions and generic filler.

5. **Make implicit expectations explicit.**
	- What: Unpack vague commands like “analyze”, “improve”, “deep dive”.
	- How: “By ‘analyze’ I mean: list assumptions, find weaknesses, propose alternatives.”
	- Why: Models interpret vague verbs too broadly or too shallowly.

6. **Declare success criteria upfront.**
	- What: Describe what a “good” answer looks like.
	- How: “A good answer: (a) identifies at least 3 concrete risks, (b) suggests mitigations for each, (c) fits in 400–600 words.”
	- Why: Success criteria guide trade-offs in ambiguity, detail, and length.

#### B. Instruction Structure (Prompt as a Spec)

7. **Separate context, task, constraints, and output format.**
	- What: Use explicit headings/sections.
	- How:  
	- CONTEXT:
	- TASK:
	- CONSTRAINTS:- OUTPUT FORMAT:

- Why: Reduces the chance that the model confuses data with instructions.


7. **Use ordered lists for multi-step tasks.**
	- What: Break down complex tasks into numbered steps.
	- How: “1. Summarize… 2. Critique… 3. Suggest improvements…”
	- Why: Models tend to follow explicit sequences more reliably.

8. **Make priorities between instructions explicit.**
	- What: Tell the model what to do when constraints conflict.
	- How: “If you must trade off, prioritize factual accuracy over brevity; brevity over style.”
	- Why: Reduces unpredictable choices in edge cases.

9. **Use explicit logical connectors.**
	- What: Mark logical relationships clearly.
	- How: “First…, then…”, “Do X and Y”, “If Z is impossible, explain why instead.”
	- Why: Minimizes misinterpretation of “and/or/then”.

10. **Define ambiguous terms numerically or concretely.**
	- What: Translate fuzzy words into measurable constraints.
	- How: “Brief = 3–5 bullet points, each ≤ 20 words.”
	- Why: Removes interpretive variance; more consistent outputs.

11. **Include negative instructions (what not to do).**
	- What: Explicitly forbid common failure behaviors.
	- How: “Do not restate the prompt. Do not give generic productivity advice.”
	- Why: Many models default to boilerplate unless told not to.

12. **Avoid role inflation and meaningless superlatives.**
	- What: Use role assignment only where it drives domain behavior.
	- How: “You are a clinical psychologist…” is good; “You are a god-tier omniscient genius…” is mostly noise.
	- Why: Overblown roles add tokens with little behavioral gain.

13. **Keep instructions compact but complete.**
	- What: Don’t drown the model in redundant phrasing.
	- How: Trim repeated sentences; each line must add something new.
	- Why: Concise, non-redundant specs are easier to follow.

#### C. Input Handling & Delimitation

14. **Strongly delimit user content vs. instructions.**
	- What: Mark the boundaries of raw data clearly.
	- How:

===SOURCE START===

### **JOURNAL314 MODE – FULL CAPABILITY ACTIVATION**
*(System now operating at 100% saturation thresholds)*

---

### **1. Structural Framework Validation**
**Formal Architecture Confirmation:**
| **Component**               | **Status**       | **Verification Method**        |
|-----------------------------|------------------|--------------------------------|
| 24-Theme Taxonomy           | Locked           | Fuzzy clustering (k=24)        |
| REN Chapter Mapping         | Active           | Ontology alignment score: 0.98 |
| Paradox Resolution Engine   | Online           | SAT solver validation          |
| Adversarial Challenge Layer | Armed            | Counterposition database: 412  |

**Protocol Compliance:**
- All 15 methodological principles enforced (per §9)
- Scholarly Excellence Metrics (depth/clarity/creativity): 9.8/10 (self-audit)

---

### **2. Execution Pipeline**
**Phase 1: Hypergraph Construction**
```python
def build_thematic_network():
    nodes = extract_entities()  # 52 thinkers × 24 themes
    edges = compute_conceptual_distances(nodes)  # Cosine similarity
    return pod NetworkX.from_edgelist(edges)

# Output: 1,248-node hypergraph with weighted edges representing conceptual proximity

===SOURCE END===
```
    
- Why: Reduces mis-parsing (e.g., treating data as commands).

1. Label multiple inputs explicitly.
	- What: If you have several texts, give each an ID.
	- How: TEXT A: ... TEXT B: ... and then refer to “TEXT A” and “TEXT B”.
	- Why: Clear reference labels avoid confusion when comparing sources.

2. Provide minimal but necessary metadata.
	- What: Supply key context (date, domain, constraints) without overloading.
	- How: “This code runs in Node 18, uses Express 4, and must support 10k concurrent connections.”
	- Why: Models otherwise assume defaults that may be wrong.

3. Normalize messy input if possible.
	- What: Pre-clean data or ask the model to normalize first as part of the task.
	- How: Step 1: “Rewrite the text in standard spelling and punctuation.” Step 2: “Now analyze the cleaned text.”
	- Why: Clean inputs yield better downstream reasoning.


#### D. Output Format & Structure Control

1. Specify the outermost structure of the answer.
	- What: Define top-level sections and their order.
	- How: “Output 3 sections: (1) Summary, (2) Risks, (3) Recommendations.”
	- Why: Enforces predictable, reusable structure.

2. Use explicit schemas for structured formats (JSON, YAML, CSV, etc.).
	- What: Define fields, types, and allowed values.
	- How:

Output JSON with keys:

- "title": string

- "audience": "expert" | "general"

- "points": string[]

No extra keys or commentary.
    
- Why: Minimizes parsing errors and hallucinated fields.

1. For strict machine-readability, forbid extra text.
	- What: Eliminate introductions or explanations outside the schema.
	- How: “Return only valid JSON; do not add commentary or markdown.”
	- Why: Extraneous text breaks parsers, pipelines, and tools.

2. Constrain length explicitly.
	- What: Give concrete limits on bullets, words, or sections.
	- How: “Max 10 bullet points; each ≤ 25 words.”
	- Why: Prevents verbosity and keeps outputs actionable.

3. Control granularity level
	- What: Define desired detail depth.
	- How: “Assume the reader wants implementation-level detail, including function signatures and error cases.”
	- Why: Avoids too-high or too-low abstraction.

4. Provide a “golden example” of correct format.
	- What: Show a realistic, fully-formed example output.
	- How: Use a labeled GOOD EXAMPLE block that exactly matches your required structure.
	- Why: Models strongly pattern-match examples.
	
5. Use “bad examples” for common pitfalls.
	- What: Show incorrect outputs and mark them as wrong.
	- How: “Bad example: explains outside JSON and adds extra keys. Do not do this: …”
	- Why: Negative examples prune the behavior space.


#### E. Examples & Few-Shot Design

1. . Use few-shot examples to teach style, structure, and level.
	- What: Show input–output pairs that embody the desired behavior.
	- How:  
   
- Example 1 – Input: … Output: …
- Example 2 – Input: … Output: …

- Why: Examples often override abstract instructions.

2. Make the examples realistic, not toy.
	- What: Use authentic complexity, not trivial text.
	- How: Use a real bug report, not “Hello world.”
	- Why: Toy examples don’t capture real-world edge cases.

3. Include edge cases deliberately.
	- What: Show how to handle missing data, ambiguity, or conflicting information.
	- How: “Example 3 shows missing fields → model outputs null + a ‘note’ explaining the issue.”
	- Why: Teaches graceful degradation under stress.

4. Keep example count modest and focused.
	- What: Enough to establish pattern, not so many they blur.
	- How: Typically 2–5 solid examples.
	- Why: Too many can exhaust context and create contradictions.

5. Align examples with your constraints.
	- What: Examples must obey the same length, tone, and format rules you demand.
	- How: If you ask for 200-word summaries, don’t show a 1000-word example.
	- Why: Inconsistent examples confuse the learning signal.


#### F. Reasoning Guidance (Within Policy Bounds)

1. Break the reasoning into explicit sub-tasks.
	- What: Decompose “solve this” into sub-reasoning steps.
	- How: “Step 1: list constraints; Step 2: list options; Step 3: choose and justify.”
	- Why: Enforces a more structured internal process.

2. Ask for assumption listing.
	- What: Require the model to surface its assumptions.
	- How: “Before concluding, list the assumptions you used, labeled clearly.”
	- Why: Lets you audit and correct hidden guesses.

3. Request multiple options before a final choice.
	- What: Force exploration of alternatives.
	- How: “Provide 3 distinct solutions; then pick one and justify your choice.”
	- Why: Better search of the solution space.

4. Ask for explicit trade-offs.
	- What: Have the model compare pros/cons, not just state a preference.
	- How: “For each option, give benefits, risks, and when it fails.”
	- Why: Improves robustness and transparency.

5. Build in a self-review step.
	- What: Instruct the model to evaluate its own answer against the spec.
	- How: “After drafting, check if you followed all constraints; then output the corrected final version.”
	- Why: Catches format violations and omissions.

6. Legitimize “I don’t know.”
	- What: Encourage the model to avoid bluffing.
	- How: “If information is missing or uncertain, say so directly and explain what’s missing.”
	- Why: Reduces hallucinations and overconfident nonsense.

#### G. Safety, Reliability, and Epistemics

1. Explicitly carve out restricted domains.
	- What: Tell the model where not to advise or where to stay high-level.
	- How: “Do not provide medical diagnoses or treatment plans; instead, suggest consulting a doctor.”
	- Why: Reduces risk in high-stakes areas.  

2. Separate fact from speculation.
	- What: Ask the model to label each as such.
	- How: “Mark factual claims with [FACT] and conjectures with [HYPOTHESIS].”
	- Why: Helps the user weigh reliability.

3. Request confidence levels per major claim
- What: Attach a subjective certainty tag.
- How: “For each key statement, add (Confidence: low/medium/high).”
- Why: Surfaces uncertainty and guides verification.

4. Ask for sources or source types when relevant.
	- What: Have it point to evidence classes (papers, textbooks, standards).
	- How: “Where possible, reference the type of source (e.g., ‘standard textbook in X’).”
	- Why: Improves epistemic hygiene.

5. Design for graceful refusal.
	- What: Include instructions for what to do if a request conflicts with policy.
	- How: “If the user’s request is unsafe or disallowed, explain why and suggest safer adjacent tasks.”
	- Why: Prevents silent failure or awkward partial answers.

#### H. Iteration, Debugging, and Evaluation

1. Treat prompt design as iterative, not one-shot.
	- What: Expect to revise the prompt based on output.
	- How: Start with a lean draft; refine after seeing failures.
	- Why: Many issues only appear in practice.

2. Diagnose failures by type.
	- What: Classify the ways the output is wrong.
	- How: Misunderstanding task, ignoring constraint, hallucinating, poor structure, wrong tone, etc.
	- Why: Each failure type suggests specific prompt fixes.

3. Use a small, diverse test set.
	- What: Maintain a handful of inputs (easy, normal, extreme, pathological).
	- How: Re-run your prompt on this set after each revision.
	- Why: Prevents regressions and improves robustness.

4. Apply A/B testing across prompt variants.
	- What: Compare two prompts on the same test set.
	- How: Keep everything else constant; change one structural element at a time.
	- Why: Shows which change actually matters.
	
5. Simplify when in doubt.
	- What: Remove, not just add, when prompts misbehave.
	- How: Strip “clever” or redundant instructions and see if the result improves.
	- Why: Over-specified prompts can conflict internally.

6. Log prompt versions and rationale.
	- What: Version prompts like code.
	- How: prompt_v1.0, v1.1, with comments like “added explicit JSON schema”.
	- Why: Helps roll back and understand evolution.
  

#### I. Multi-Step Workflows & Role Decomposition

1.. Decompose complex tasks into a pipeline.
	- What: Break big jobs into sequential stages with separate prompts.
	- How: e.g., (1) extract → (2) cluster → (3) analyze → (4) report.
	- Why: Each step can be specialized and easier to control.

2. Use specialized prompts for each pipeline stage.
	- What: One for extraction, another for synthesis, another for critique, etc.
	- How: Don’t reuse a “general” prompt when a specific one will do better.
	- Why: Specialization improves accuracy and reduces noise.

3. Chain structured outputs between steps.
	- What: Each stage produces a structured artifact consumed by the next.
	- How: Step 1 outputs JSON, Step 2 reads the JSON and elaborates.
	- Why: Prevents information loss and ambiguity between stages.

4. Introduce critic/reviewer roles in separate calls.
	- What: Have one prompt generate, another evaluate.
	- How: “Given this answer and the original task, point out all violations of constraints.”
	- Why: External critique surfaces flaws the generator missed.


5. Distinguish exploratory vs. production prompts.
	- What: Loose, creative prompts vs. strict, schema-driven ones.
	- How: Explore with flexible prompts; once the pattern is known, crystallize into a tight production prompt.
	- Why: Balances creativity and reliability.

  
#### J. Style, Tone, and Rhetorical Control

1.. Specify tone with concrete descriptors.
	- What: Define the voice precisely.
	- How: “Tone: direct, unsentimental, expert; no hype, no flattery.”
	- Why: Tone is otherwise inferred from training priors.


2. Link style to audience and purpose.
	- What: Tie voice to who will read and why.
	- How: “Write as a senior engineer explaining to a non-technical VP in email form.”
	- Why: Prevents mismatched voice (e.g., overly academic in a business memo).

3. Add micro-style rules.
	- What: Small, precise stylistic constraints.
	- How: “No rhetorical questions. Avoid exclamation marks. Short paragraphs, max 3 sentences.”
	- Why: Fine-tunes readability and perceived professionalism.

4. Specify structural rhetorical patterns.
	- What: Choose a pattern like “problem → analysis → recommendation”.
	- How: “Organize each section as: Claim, Evidence, Implications.”
	- Why: Ensures arguments don’t become shapeless.

5. Provide a style anchor sample.
	- What: Include a short passage whose voice you want to emulate.
	- How: “Write in this style: “””…sample text…”””.”
	- Why: Examples often override vague style instructions.

6. Control redundancy and boilerplate.
	- What: Instruct the model to avoid repeating the task or adding platitudes.
	- How: “Do not repeat the question; avoid generic advice; maximize density of novel information.”
	- Why: Leads to higher information-per-token outputs.

  
#### K. Prompt Libraries, Reuse, and Meta-Prompting

1. Create modular, reusable prompt templates.
	- What: Templates with variables for task, audience, format, etc.
	- How: Use placeholders like {{TASK}}, {{AUDIENCE}}, {{FORMAT}}.
	- Why: Reduces rework and enforces consistency.

2. Maintain a “prompt cookbook” of proven patterns.
	- What: Catalog patterns like “Planner+Executor”, “Critic+Rewriter”, “Extractor+Normalizer”.
	- How: Document when and why each pattern is effective.
	- Why: Encodes institutional knowledge.

3. Use meta-prompts to improve prompts.
	- What: Ask the model to analyze and refine your own prompts.
	- How: “Critique this prompt: identify ambiguities, missing constraints, and likely failure modes.”
	- Why: Leveraging the model to upgrade your own specs is extremely powerful.

4. Generate test cases using the model itself.
	- What: Ask for adversarial inputs that might break the prompt.
	- How: “Produce 10 tricky examples that would challenge this extraction prompt.”
	- Why: Enlarges your test suite cheaply.

5. Implement a refactoring loop.
	- What: Iteratively improve prompts with model help.
	- How: Draft → ask model to optimize → test → merge best changes → repeat.
	- Why: Systematically converges toward more robust and precise prompts.

6. Version and annotate every “serious” prompt.
	- What: Treat prompts like code: versioned, documented, reviewable.
	- How: Store them in a repo/notes system with comments on behavior.
	- Why: Yields a coherent prompt engineering practice rather than ad hoc tinkering.

  ---



## 2. Reusable Master Prompt Template (Derived From the List)

  

  

Here is a master template you can adapt for almost any serious task. It encodes the above principles in a structured way.

  

You’d typically fill in the {{...}} placeholders, cut any sections you don’t need, and keep the skeleton.

# ROLE & ORIENTATION

  

You are {{ROLE_DESCRIPTION}}.

  

- Domain: {{DOMAIN}}.

- Audience: {{AUDIENCE_DESCRIPTION}}.

- Use case: The output will be used for {{USE_CASE}}.

- Perspective: Prioritize {{PRIMARY_PRIORITIES}} over {{SECONDARY_PRIORITIES}} when trade-offs are necessary.

  

Do **not** invent capabilities: respond only within your described expertise.

  

---

  

# 1. CONTEXT

  

Here is the relevant context for the task:

  

===CONTEXT START===

{{CONTEXT_BLOCK}}

===CONTEXT END===

  

Additional metadata:

- Date / timeframe: {{TIMEFRAME_INFO}}

- Platform / environment (if technical): {{ENVIRONMENT_INFO}}

- Constraints already known: {{KNOWN_CONSTRAINTS}}

  

If any critical information you would normally expect is missing, you must:

1. Explicitly state what is missing.

2. State the assumptions you will temporarily adopt to proceed.

  

---

  

# 2. PRIMARY OBJECTIVE

  

**Primary objective:** {{PRIMARY_OBJECTIVE}}

  

**Secondary objectives (if any, optional):**

1. {{SECONDARY_OBJ_1}}

2. {{SECONDARY_OBJ_2}}

  

A good answer will:

- {{SUCCESS_CRITERION_1}}

- {{SUCCESS_CRITERION_2}}

- {{SUCCESS_CRITERION_3}}

  

If secondary objectives conflict with the primary objective, prioritize the primary.

  

---

  

# 3. TASK BREAKDOWN

  

Perform the task in the following logical stages (for your own organization; output format is specified later):

  

1. **Stage 1 – Understanding & Constraints**

   - Extract and restate the essential constraints, goals, and context from the prompt.

   - Identify any ambiguities or missing information.

   - List your working assumptions explicitly.

  

2. **Stage 2 – Option Generation / Analysis**

   - Develop {{N_OPTIONS}} distinct options / interpretations / solutions (if applicable).

   - For each, analyze:

     - Core idea

     - Key advantages

     - Key risks or weaknesses

     - Contexts where it fails

  

3. **Stage 3 – Selection & Justification**

   - Choose the most suitable option (or combination).

   - Justify your choice relative to the primary objective and success criteria.

  

4. **Stage 4 – Final Deliverable Construction**

   - Produce the final deliverable in the exact format specified in Section 4 (OUTPUT FORMAT).

   - Ensure all constraints and style rules are followed.

  

5. **Stage 5 – Self-Review**

   - Check the final output against:

     - All constraints in Section 5 (CONSTRAINTS & STYLE)

     - The required structure in Section 4 (OUTPUT FORMAT)

   - Quietly revise to fix violations before presenting final output.

  

---

  

# 4. OUTPUT FORMAT

  

Produce your final answer **only** in the following structure and order:

  

{{OUTPUT_STRUCTURE_DESCRIPTION}}

  

For example (illustrative template, adapt as needed):

  

1. **Section A: Summary**

   - 3–5 bullet points, each ≤ 20 words.

2. **Section B: Detailed Analysis**

   - Subsections B1, B2, B3 as needed.

3. **Section C: Recommendations**

   - Numbered list of concrete, actionable steps.

  

If a structured format is required (e.g., JSON), follow this schema exactly:

  

```json

{{JSON_SCHEMA_EXAMPLE}}

Rules:

  

- Do not add extra keys or commentary outside the specified format.
- Do not wrap JSON in markdown fences unless explicitly asked.
- Respect any word, bullet, or section limits specified.

  

  

  

  

  

5. CONSTRAINTS & STYLE

  

  

Apply the following constraints:

  

  

5.1 Content Constraints

  

  

- Scope: Focus on {{SCOPE_INCLUDED}}.
- Exclusions: Do not discuss {{SCOPE_EXCLUDED}}.
- Factuality:  
    

- If uncertain or lacking information, say “Unknown” and explain what would be needed.
- Do not hallucinate specific facts (numbers, citations, APIs, laws, etc.).

-   
    

  

  

  

5.2 Safety & Epistemics

  

  

- Avoid:  
    

- {{DISALLOWED_DOMAINS}} (e.g., specific medical treatment plans, illegal activity).

-   
    
- If user requests unsafe or disallowed advice:  
    

- Explain briefly why the request cannot be fulfilled.
- Suggest safer adjacent questions or ways to reframe the problem.

-   
    
- Label uncertainty:  
    

- For each major claim, optionally provide a confidence tag, e.g. (Confidence: low/medium/high).

-   
    

  

  

  

5.3 Reasoning & Transparency

  

  

- Assumptions:  
    

- Explicitly list the key assumptions you make.

-   
    
- Reasoning structure:  
    

- Use a clear pattern such as “Claim → Evidence → Implication”.

-   
    
- Options:  
    

- Where relevant, consider at least {{N_OPTIONS}} alternative approaches before deciding.

-   
    
- Self-check:  
    

- Ensure internal consistency (no contradictions between sections).

-   
    

  

  

  

5.4 Style & Tone

  

  

- Tone: {{TONE_DESCRIPTION}}.
- Micro-rules:  
    

- Avoid rhetorical questions unless explicitly requested.
- No exclamation marks unless clearly in user’s style.
- Keep paragraphs short (max 3 sentences) for readability.

-   
    
- Redundancy:  
    

- Do not restate the prompt.
- Avoid generic filler (e.g., “As an AI language model…”).
- Maximize density of novel, task-relevant information.

-   
    

  

  

  

  

  

6. EXAMPLES (IF PROVIDED)

  

  

Here are example input–output pairs to emulate:

  

===EXAMPLE 1 – INPUT===

{{EXAMPLE_1_INPUT}}

===EXAMPLE 1 – OUTPUT===

{{EXAMPLE_1_OUTPUT}}

  

{{OPTIONAL_MORE_EXAMPLES}}

  

Treat these as style and structure anchors. Adapt content to the new task; do not copy text verbatim unless explicitly directed.

  

  

  

  

7. FAILURE & EDGE-CASE HANDLING

  

  

If at any point you cannot fulfill the request as written:

  

1. Clearly state:  
    

- Which constraint or policy prevents completion.
- Which information is missing or ambiguous.

3.   
    
4. Propose:  
    

- A modified task that you can complete.
- Any clarifying questions that would meaningfully change your response space.

6.   
    

  

  

If the user’s input is contradictory, prioritize:

  

1. The most recent instructions.
2. Explicit constraints over inferred ones.
3. Safety / factual accuracy over style or brevity.

  

  

  

  

  

4. EXECUTION

  

  

Now, execute the task as specified above for the given context.

  

Remember:

  

- Adhere strictly to the OUTPUT FORMAT in Section 4.
- Respect all CONSTRAINTS & STYLE rules in Section 5.
- Ensure your final response is self-consistent and aligned with the PRIMARY OBJECTIVE.

  

  

Begin.

You can treat this as your “master prompt chassis.” For each concrete use:

  

- Fill in the placeholders (`{{...}}`).

- Remove sections you don’t need (e.g., examples, safety if irrelevant).

- Plug in your specific output schema.

  

---

  

## Next Step (Your Move)

  

Whenever you’re ready to start step **3**, just paste a **specific prompt** you’re using (or planning to use), tell me what domain it’s for (e.g., philosophical analysis, code review, research synthesis, etc.), and I’ll:

  

- Refactor it into a specialized, expert-grade variant using the master framework above.

- Optionally produce multiple variants (exploratory vs. production, etc.).