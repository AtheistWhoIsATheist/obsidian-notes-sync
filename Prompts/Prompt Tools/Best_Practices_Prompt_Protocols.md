---
title: Best Practices Prompt Engineering Protocol
created:
updated:
tags:
  - promptenhancer
  - prompt
  - definition
  - superprompt
backlink: "[[the-fundamental--best-practices-for-prompt-generat]]"
description:
---
# Expert Prompt Engineering Best Practices: A Progressive Ladder

## A. Problem Definition & Intent (Foundation Layer)

**1. Define a single primary objective.**
- **What:** State exactly one main thing the model must achieve.
- **How:** "Primary objective: [Goal]" at the top. Put secondary goals explicitly after.
- **Why:** Competing objectives cause diluted, unfocused outputs.

**2. State the real-world use case.**
- **What:** Say how the output will be used (slides, email, code review, research note).
- **How:** "This output will be pasted into a pitch deck for non-technical executives."
- **Why:** Context dictates tone, format, and abstraction level.

**3. Specify the target audience and knowledge level.**
- **What:** Define who the ultimate reader is and what they already know.
- **How:** "Assume the reader is a senior backend engineer with 5+ years experience."
- **Why:** Audience determines jargon level, detail, and examples.

**4. Bound the domain and scope.**
- **What:** Say what the model should and should not cover.
- **How:** "Focus only on backend performance issues; ignore UI, product, and hiring."
- **Why:** Scope limits prevent digressions and generic filler.

**5. Make implicit expectations explicit.**
- **What:** Unpack vague commands like "analyze", "improve", "deep dive".
- **How:** "By 'analyze' I mean: list assumptions, find weaknesses, propose alternatives."
- **Why:** Models interpret vague verbs too broadly or too shallowly.

**6. Declare success criteria upfront.**
- **What:** Describe what a "good" answer looks like.
- **How:** "A good answer: (a) identifies 3 risks, (b) suggests mitigations, (c) fits in 600 words."
- **Why:** Guides trade-offs in ambiguity, detail, and length.

---

## B. Instruction Structure (Prompt as a Spec)

**7. Separate context, task, constraints, and output format.**
- **What:** Use explicit headings/sections.
- **How:** Use headers: `## CONTEXT`, `## TASK`, `## CONSTRAINTS`, `## OUTPUT`.
- **Why:** Reduces the chance that the model confuses data with instructions.

**8. Use ordered lists for multi-step tasks.**
- **What:** Break down complex tasks into numbered steps.
- **How:** "1. Summarize... 2. Critique... 3. Suggest improvements..."
- **Why:** Models follow explicit sequences more reliably than paragraph text.

**9. Make priorities between instructions explicit.**
- **What:** Tell the model what to do when constraints conflict.
- **How:** "Prioritize factual accuracy over brevity; brevity over style."
- **Why:** Reduces unpredictable choices in edge cases.

**10. Use explicit logical connectors.**
- **What:** Mark logical relationships clearly.
- **How:** "First..., then...", "Do X and Y", "If Z is impossible, explain why."
- **Why:** Minimizes misinterpretation of complex conditionals.

**11. Define ambiguous terms numerically or concretely.**
- **What:** Translate fuzzy words into measurable constraints.
- **How:** "Brief = 3–5 bullet points, each ≤ 20 words."
- **Why:** Removes interpretive variance for consistent outputs.

**12. Include negative instructions (what not to do).**
- **What:** Explicitly forbid common failure behaviors.
- **How:** "Do not restate the prompt. Do not give generic advice."
- **Why:** Models default to boilerplate unless told otherwise.

**13. Avoid role inflation and meaningless superlatives.**
- **What:** Use role assignment only where it drives domain behavior.
- **How:** "You are a clinical psychologist..." (Good). "You are a god-tier genius..." (Noise).
- **Why:** Overblown roles add tokens with little behavioral gain.

**14. Keep instructions compact but complete.**
- **What:** Don't drown the model in redundant phrasing.
- **How:** Trim repeated sentences; each line must add new signal.
- **Why:** Concise specs are easier to parse and follow.

---

## C. Input Handling & Delimitation

**15. Strongly delimit user content vs. instructions.**
- **What:** Mark the boundaries of raw data clearly.
- **How:** Use xml tags like `===SOURCE START===` and `===SOURCE END===`.
- **Why:** Reduces mis-parsing (e.g., treating input text as commands).

**16. Label multiple inputs explicitly.**
- **What:** If you have several texts, give each an ID.
- **How:** "TEXT A: ... TEXT B: ..." then refer to "TEXT A" in instructions.
- **Why:** Avoids confusion when comparing or synthesizing sources.

**17. Provide minimal but necessary metadata.**
- **What:** Supply key context (date, domain, constraints) without overloading.
- **How:** "This code runs in Node 18, uses Express 4."
- **Why:** Models otherwise assume defaults that may be wrong.

**18. Normalize messy input if possible.**
- **What:** Pre-clean data or ask the model to normalize first.
- **How:** "Step 1: Rewrite text in standard spelling. Step 2: Analyze."
- **Why:** Clean inputs yield better downstream reasoning.

---

## D. Output Format & Structure Control

**19. Specify the outermost structure of the answer.**
- **What:** Define top-level sections and their order.
- **How:** "Output 3 sections: (1) Summary, (2) Risks, (3) Recommendations."
- **Why:** Enforces predictable, reusable structure.

**20. Use explicit schemas for structured formats.**
- **What:** Define fields, types, and allowed values (JSON, YAML).
- **How:** Provide a JSON skeleton: `{"title": string, "points": string[]}`.
- **Why:** Minimizes parsing errors and hallucinated fields.

**21. For strict machine-readability, forbid extra text.**
- **What:** Eliminate introductions or explanations outside the schema.
- **How:** "Return only valid JSON; do not add commentary or markdown."
- **Why:** Extraneous text breaks parsers and pipelines.

**22. Constrain length explicitly.**
- **What:** Give concrete limits on bullets, words, or sections.
- **How:** "Max 10 bullet points; each ≤ 25 words."
- **Why:** Prevents verbosity and keeps outputs actionable.

**23. Control granularity level.**
- **What:** Define desired detail depth.
- **How:** "Assume the reader wants implementation-level detail, including error cases."
- **Why:** Avoids too-high or too-low abstraction.

**24. Provide a "golden example" of correct format.**
- **What:** Show a realistic, fully-formed example output.
- **How:** Use a labeled `GOOD EXAMPLE` block matching requirements.
- **Why:** Models strongly pattern-match examples.

**25. Use "bad examples" for common pitfalls.**
- **What:** Show incorrect outputs and mark them as wrong.
- **How:** "Bad example: explains outside JSON. Do not do this."
- **Why:** Negative examples prune the behavior space.

---

## E. Examples & Few-Shot Design

**26. Use few-shot examples to teach style, structure, and level.**
- **What:** Show input–output pairs that embody the desired behavior.
- **How:** "Input: [X] -> Output: [Y]" repeated 2-3 times.
- **Why:** Examples often override abstract instructions.

**27. Make the examples realistic, not toy.**
- **What:** Use authentic complexity, not trivial text.
- **How:** Use a real bug report, not "Hello world."
- **Why:** Toy examples don't capture real-world edge cases.

**28. Include edge cases deliberately.**
- **What:** Show how to handle missing data or ambiguity.
- **How:** "Example 3 shows missing fields -> model outputs null + note."
- **Why:** Teaches graceful degradation under stress.

**29. Keep example count modest and focused.**
- **What:** Enough to establish pattern, not so many they blur.
- **How:** Typically 2–5 solid examples.
- **Why:** Too many can exhaust context and create contradictions.

**30. Align examples with your constraints.**
- **What:** Examples must obey the same length/tone rules you demand.
- **How:** If asking for 200 words, don't show a 1000-word example.
- **Why:** Inconsistent examples confuse the learning signal.

---

## F. Reasoning Guidance (Within Policy Bounds)

**31. Break the reasoning into explicit sub-tasks.**
- **What:** Decompose "solve this" into sub-reasoning steps.
- **How:** "Step 1: List constraints. Step 2: List options. Step 3: Decide."
- **Why:** Enforces a structured internal process.

**32. Ask for assumption listing.**
- **What:** Require the model to surface its assumptions.
- **How:** "Before concluding, list the assumptions you used."
- **Why:** Lets you audit and correct hidden guesses.

**33. Request multiple options before a final choice.**
- **What:** Force exploration of alternatives.
- **How:** "Provide 3 distinct solutions; then pick one and justify."
- **Why:** Better search of the solution space.

**34. Ask for explicit trade-offs.**
- **What:** Have the model compare pros/cons, not just state a preference.
- **How:** "For each option, give benefits, risks, and failure modes."
- **Why:** Improves robustness and transparency.

**35. Build in a self-review step.**
- **What:** Instruct the model to evaluate its own answer against the spec.
- **How:** "After drafting, check if you followed all constraints; then output final."
- **Why:** Catches format violations and omissions.

**36. Legitimize "I don't know."**
- **What:** Encourage the model to avoid bluffing.
- **How:** "If information is missing, say so directly."
- **Why:** Reduces hallucinations and overconfident nonsense.

---

## G. Safety, Reliability, and Epistemics

**37. Explicitly carve out restricted domains.**
- **What:** Tell the model where not to advise.
- **How:** "Do not provide medical diagnoses; suggest consulting a doctor."
- **Why:** Reduces risk in high-stakes areas.

**38. Separate fact from speculation.**
- **What:** Ask the model to label each.
- **How:** "Mark factual claims with [FACT] and conjectures with [HYPOTHESIS]."
- **Why:** Helps the user weigh reliability.

**39. Request confidence levels per major claim.**
- **What:** Attach a subjective certainty tag.
- **How:** "For each key statement, add (Confidence: Low/Med/High)."
- **Why:** Surfaces uncertainty and guides verification.

**40. Ask for sources or source types when relevant.**
- **What:** Have it point to evidence classes.
- **How:** "Reference the type of source (e.g., 'standard textbook')."
- **Why:** Improves epistemic hygiene.

**41. Design for graceful refusal.**
- **What:** Instructions for conflicting/unsafe requests.
- **How:** "If unsafe, explain why and suggest adjacent tasks."
- **Why:** Prevents silent failure or awkward partial answers.

---

## H. Iteration, Debugging, and Evaluation

**42. Treat prompt design as iterative, not one-shot.**
- **What:** Expect to revise the prompt based on output.
- **How:** Start lean; refine after seeing failures.
- **Why:** Many issues only appear in practice.

**43. Diagnose failures by type.**
- **What:** Classify why the output is wrong.
- **How:** Check for: Misunderstanding, hallucination, tone mismatch, format error.
- **Why:** Each failure type suggests specific fixes.

**44. Use a small, diverse test set.**
- **What:** Maintain inputs (easy, normal, extreme).
- **How:** Re-run prompt on this set after revisions.
- **Why:** Prevents regressions and improves robustness.

**45. Apply A/B testing across prompt variants.**
- **What:** Compare two prompts on the same test set.
- **How:** Change one element at a time.
- **Why:** Shows which change actually matters.

**46. Simplify when in doubt.**
- **What:** Remove instructions when prompts misbehave.
- **How:** Strip "clever" or redundant text.
- **Why:** Over-specified prompts can conflict internally.

**47. Log prompt versions and rationale.**
- **What:** Version prompts like code.
- **How:** `prompt_v1.0`, `v1.1`, with comments.
- **Why:** Yields a coherent practice rather than ad hoc tinkering.

---

## I. Multi-Step Workflows & Role Decomposition

**48. Decompose complex tasks into a pipeline.**
- **What:** Break big jobs into sequential stages.
- **How:** (1) Extract -> (2) Cluster -> (3) Analyze -> (4) Report.
- **Why:** Each step is easier to control and debug.

**49. Use specialized prompts for each pipeline stage.**
- **What:** One prompt for extraction, another for synthesis.
- **How:** Don't reuse a "general" prompt.
- **Why:** Specialization improves accuracy.

**50. Chain structured outputs between steps.**
- **What:** Each stage produces a structured artifact for the next.
- **How:** Step 1 outputs JSON; Step 2 reads JSON.
- **Why:** Prevents information loss between stages.

**51. Introduce critic/reviewer roles in separate calls.**
- **What:** Have one prompt generate, another evaluate.
- **How:** "Given this answer, point out violations of constraints."
- **Why:** External critique surfaces flaws the generator missed.

**52. Distinguish exploratory vs. production prompts.**
- **What:** Loose prompts vs. strict schema-driven ones.
- **How:** Explore first, then crystallize into a tight prompt.
- **Why:** Balances creativity and reliability.

---

## J. Style, Tone, and Rhetorical Control

**53. Specify tone with concrete descriptors.**
- **What:** Define the voice precisely.
- **How:** "Tone: direct, unsentimental, expert; no hype."
- **Why:** Tone is otherwise inferred from training priors.

**54. Link style to audience and purpose.**
- **What:** Tie voice to who will read and why.
- **How:** "Write as a senior engineer for a non-technical VP."
- **Why:** Prevents mismatched voice.

**55. Add micro-style rules.**
- **What:** Small, precise stylistic constraints.
- **How:** "No rhetorical questions. Short paragraphs."
- **Why:** Fine-tunes readability and professionalism.

**56. Specify structural rhetorical patterns.**
- **What:** Choose a pattern like "Problem -> Analysis -> Recommendation".
- **How:** "Organize each section as: Claim, Evidence, Implications."
- **Why:** Ensures arguments don't become shapeless.

**57. Provide a style anchor sample.**
- **What:** Include a passage to emulate.
- **How:** "Write in this style: '''[Sample]'''."
- **Why:** Examples override vague style instructions.

**58. Control redundancy and boilerplate.**
- **What:** Instruct model to avoid repetition.
- **How:** "Do not repeat the question; avoid generic advice."
- **Why:** Leads to higher information density.

---

## K. Prompt Libraries, Reuse, and Meta-Prompting

**59. Create modular, reusable prompt templates.**
- **What:** Templates with variables.
- **How:** Use placeholders like `{{TASK}}`, `{{AUDIENCE}}`.
- **Why:** Reduces rework and enforces consistency.

**60. Maintain a "prompt cookbook" of proven patterns.**
- **What:** Catalog patterns like "Planner+Executor".
- **How:** Document when and why each works.
- **Why:** Encodes institutional knowledge.

**61. Use meta-prompts to improve prompts.**
- **What:** Ask the model to refine your prompts.
- **How:** "Critique this prompt: identify ambiguities."
- **Why:** Leverages the model to upgrade your specs.

**62. Generate test cases using the model itself.**
- **What:** Ask for adversarial inputs.
- **How:** "Produce 10 tricky examples that break this prompt."
- **Why:** Enlarges test suites cheaply.

**63. Implement a refactoring loop.**
- **What:** Iteratively improve prompts with model help.
- **How:** Draft -> Optimize -> Test -> Merge -> Repeat.
- **Why:** Converges toward robust prompts.

**64. Version and annotate every "serious" prompt.**
- **What:** Treat prompts like code.
- **How:** Store in repo with comments on behavior.
- **Why:** Enables systematic prompt engineering.


---

[[Best_Practices_Prompt_Engineering]]

[[GPT5_best_practices_template]]

[[khoj-best-practices]]