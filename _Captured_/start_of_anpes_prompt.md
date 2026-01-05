0
# ITERATIVE DENSIFICATION PROTOCOL: Prompting {{specific LLM}} To Spec

## Notation

- `{{specific LLM}}` = the exact model/end-point you’re using.
    
- `{{TASK}}` = concrete deliverable.
    
- `{{CONTEXT}}` = all inputs: docs, data, constraints.
    
- `{{SCHEMA}}` = output contract (JSON/YAML/Markdown/code).
    
- `[REQ]` = mandatory. `[OPT]` = optional but useful. `[AVOID]` = anti-pattern.
    

---

## CYCLE 1 — CORE KERNEL (the indispensable skeleton)

### A) Identity & Role Framing

- [REQ] Define explicit role and authority scope: “Act as a <role> with <domain breadth> and <depth ceiling>.”
    
- [REQ] State tone and rhetoric: analytic, neutral, surgical, readable by <audience>.
    
- [REQ] Bias guardrails: “Prefer falsification over speculation. Flag uncertainty explicitly. No moralizing unless asked.”
    
- [OPT] Add style invariants: no emojis; or yes emojis; citations inline; never hedge with “might be.”
    
- [AVOID] Vague personas like “be helpful.” Ambiguity breeds sludge.
    

### B) Objective & Success Criteria

- [REQ] One-sentence task mandate: “Produce <deliverable> that <does X> for <audience>.”
    
- [REQ] Acceptance tests: bullet the checks the output must pass.
    
- [REQ] Constraints: length windows, latency sensitivity, recency requirements, allowed/forbidden sources.
    
- [REQ] Definition of Done: exact formatting, coverage, quality bars.
    
- [OPT] Cost/compute target (token budget); speed vs depth.
    

### C) Scope & Boundaries

- [REQ] Inclusions: topics, entities, frameworks that must appear.
    
- [REQ] Exclusions: anything out of scope; disallowed methods.
    
- [REQ] Depth dial: survey vs saturation; specify “saturate” only when you can feed enough context.
    
- [AVOID] “Cover everything.” That means cover nothing.
    

### D) Knowledge Anchors & Context Provisioning

- [REQ] Provide `{{CONTEXT}}`: short, curated, relevant. If large, say how to prioritize.
    
- [REQ] Authority order: “Prefer <list> over open web. Use <docs> as canonical.”
    
- [REQ] Recency rule: “If facts could have changed since <date>, request verification step or mark stale.”
    
- [OPT] Quote policy: verbatim vs paraphrase; page/line anchors; citation style.
    
- [AVOID] Dumping raw haystacks. Curate or expect hay.
    

### E) Methodology & Reasoning Protocol

- [REQ] Specify method: e.g., “Use 5-step analysis → alternatives → counterarguments → synthesis → verdict.”
    
- [REQ] Error-exposure: “List assumptions, uncertainties, and what would change the answer.”
    
- [REQ] Adversarial pass: “Try to break your own conclusion once.”
    
- [OPT] Comparative lens: cross-tradition or cross-discipline triangulation.
    
- [AVOID] “Think step by step” without telling it which steps.
    

### F) Output Architecture & Format Contracts

- [REQ] Primary format: Markdown sections, or strict `{{SCHEMA}}` JSON with property types and examples.
    
- [REQ] Schema rigidity: “If unsure, halt and return SCHEMA-VIOLATION with reasons.”
    
- [REQ] Structural continuity: headings, ordered lists, stable section names.
    
- [OPT] Secondary artifacts: table, diagram syntax, code files.
    
- [AVOID] Freeform blobs when you need machine-readable results.
    

### G) Control Signals (when you can’t set temperature)

- [REQ] Creativity control via instruction: “Be literal; avoid inventing details. Prefer precision to flourish.”
    
- [REQ] Ambiguity handling: ask at most 1 clarifying question OR proceed under stated assumptions.
    
- [REQ] Stopping criteria: end when acceptance tests are met; otherwise request missing info.
    

### H) Safety, Privacy, and Compliance

- [REQ] Sensitive data rule: what to redact, what not to store in output.
    
- [REQ] Refusal triggers: “Refuse if asked for X; instead provide Y.”
    
- [REQ] Domain disclaimers if required (legal, medical): concise, not patronizing.
    
- [AVOID] Therapy-scented platitudes. They dilute signal.
    

### I) Verification & Self-Critique

- [REQ] Post-hoc checklist: validate against acceptance tests and schema; list any deviations.
    
- [REQ] Source-grounding note: which items were inferred vs supported.
    
- [OPT] Quick alt-hypothesis: “If this is wrong, most likely because <reason>.”
    

### J) Iteration & Versioning

- [REQ] Version tag and diff note: “v1.0 — baseline; v1.1 — fixed citations; v1.2 — tightened schema.”
    
- [REQ] Feedback intake format: how you’ll feed corrections and what to rewrite vs append.
    
- [OPT] “EXECUTE_NEXT_PASS” trigger keyword.
    

That’s the kernel. Now we pack it with the parts humans forget and then act surprised.

---

## CYCLE 2 — SYSTEMATIC EXPANSION (knobs most people ignore, then cry about)

### 1) Task Typologies & Micro-Directives

- **Research/Analysis**: demand scope of literature, evaluate claim strength, separate fact vs interpretation, include limitations.
    
- **Code Gen**: require target runtime, language version, dependency versions, file structure, test plan, complexity constraints, error handling, security checks, comments policy, license note.
    
- **Data/Math**: show formulae, units, stepwise arithmetic, error bounds; require a final numeric check; forbid rounding until finale.
    
- **Summarization**: coverage %, audience level, length window, quote vs paraphrase ratio, highlight dissenting points.
    
- **Creative**: voice guide, constraints, taboo tropes, beat sheet, theme statement, reference works to emulate/avoid.
    
- **Synthesis/Strategy**: assumptions table, risk register, scenario matrix, leading indicators, decision rule.
    

### 2) Context Engineering

- Curate with **ranked snippets**: [1] decisive, [2] clarifying, [3] background. Instruct LLM to prioritize by rank.
    
- Insert **inline provenance tags** around key claims; tell model to propagate them to citations section.
    
- Establish **staleness fence**: “Mark any info pre-<date> as STALE unless confirmed.”
    

### 3) Robust Output Contracts

- JSON schema: define types, enums, min/max, regex patterns, required fields, default values; add example object; specify failure return object.
    
- For Markdown: lock section names; provide a miniature template with placeholders; forbid unannounced sections.
    

### 4) Anti-Hallucination Scaffolding

- Assert “No-Fabrication Clause”: if a detail isn’t in `{{CONTEXT}}` or common, return `GAP` with what is missing.
    
- Add a **Truth Surface**: require a final list of all claims that exceed the evidence with confidence levels.
    
- Mandate “Control Questions” the model asks itself before finalizing.
    

### 5) Ambiguity & Assumption Handling

- Exactly one clarifying question allowed; else proceed under declared assumptions with a warning banner.
    
- Require an **Assumptions table** with impact if wrong.
    

### 6) Error & Exception Paths

- Define **SCHEMA-VIOLATION**, **CONTEXT-INSUFFICIENT**, **ETHICS-REFUSAL** response envelopes with fields `reason`, `needed_input`, `next_action`.
    

### 7) Token & Cost Discipline

- Specify **input budget** and **output budget**; tell the model to compress nonessential narrative to stay within limits; prioritize essential sections.
    

### 8) Style Enforcement

- Ban weasel words (“maybe,” “sort of,” “likely”) unless confidence is quantified.
    
- Require parallel structure in lists; forbid duplicate bullets via a “dedupe pass.”
    

### 9) Comparative & Adversarial Requirements

- Force **steelman/antithesis**: present strongest opposing view with citations, then refute or concede scope boundaries.
    
- Include **edge-case probes**: instruct it to test the answer against worst-case inputs.
    

### 10) Deliverable-Specific Addenda

- **APIs**: endpoint paths, auth, rate limits, error codes, example requests/responses, idempotency, retries.
    
- **Security**: threat model, abuse cases, mitigations, logging policy.
    
- **UX Copy**: reading level, inclusivity checks, microcopy tone, localization notes.
    

---

## CYCLE 3 — OPERATIONALIZATION & QUALITY ASSURANCE

### A) Universal Acceptance Tests (UAT) for Prompts

- The output must match `{{SCHEMA}}` exactly; strict JSON should parse without fixes.
    
- Every requirement in the Objective appears verbatim in the output where applicable.
    
- All claims mapped to sources or flagged as inference; no uncited specifics.
    
- No section contains duplicated items; dedupe performed.
    
- All numbers include units, method, and rounding policy.
    
- If any acceptance test fails, model must return `REWORK_REQUIRED` with a delta plan, not a shrug.
    

### B) Confidence & Uncertainty Discipline

- Require a **Confidence ledger**: a table with claim, basis (context, general knowledge, inference), confidence 0–1, and “what would raise confidence.”
    
- For probabilistic talk, force the model to list base rates or priors. Or forbid probabilistic talk entirely.
    

### C) Traceability & Diff Hygiene

- Each revision includes a small **Changelog** with what changed and why; include pointer to requirement satisfied.
    

### D) Self-Audit Macro (enforced at end)

- Did I follow the role and tone?
    
- Did I meet the schema and length windows?
    
- Did I over-claim? Where?
    
- Do my examples actually instantiate the stated rules?
    
- What’s the fastest way for the user to falsify my key claims?
    

### E) Residual Risk Register

- If any non-zero risk remains (it always does), force a list with mitigation ideas and a request for the exact missing artifact.
    

---

## CYCLE 4 — FAILURE MODES & ANTI-PATTERNS CATALOG

- **Vague Role**: “Be helpful.” Fix: define domain, depth, exclusions.
    
- **Objective Slush**: “Summarize X” without audience, length, or coverage. Fix: acceptance tests.
    
- **Context Haystacking**: raw dumps. Fix: curated, ranked snippets.
    
- **Schema Drift**: unpinned outputs. Fix: strict schema and violation envelope.
    
- **Faux Citations**: invented refs. Fix: ban fabrication; require `GAP`.
    
- **Confidence Theater**: vibes instead of numbers. Fix: confidence ledger.
    
- **Meta-babble**: model narrates process excessively. Fix: explicit ban; allow audit section only.
    
- **Over-clarification Loops**: endless questions. Fix: one question max; else assume and proceed.
    
- **Tone Leakage**: cutesy language in formal contexts. Fix: tone invariants.
    
- **Non-Deterministic Structure**: headings mutate between runs. Fix: lock section names.
    

---

## CYCLE 5 — DOMAIN PLAYBOOKS (focused micro-checklists)

### A) Coding Tasks

- Toolchain: language, version, framework, runtime.
    
- Constraints: complexity class, performance budget, memory ceiling.
    
- Interfaces: I/O contract, error surfaces, retries, idempotency.
    
- Testing: unit tests spec, fixtures, coverage target.
    
- Security: input validation, secret handling, sandbox notes.
    
- Packaging: file tree, build commands, license header.
    
- Review: static analysis suggestions, known pitfalls.
    

### B) Math/Stats/Finance

- Problem restatement, symbol table, assumptions.
    
- Step-by-step derivation, unit discipline, dimensional checks.
    
- Numerical method justification, stability, error bars.
    
- Sanity checks: bounds, limiting cases, cross-validation.
    

### C) Research/Synthesis

- Corpus spec, inclusion/exclusion criteria, bias assessment.
    
- Claim taxonomy: fact vs interpretation vs hypothesis.
    
- Disagreement map; strongest counter-evidence; open questions.
    
- Output stratification: executive summary vs technical annex.
    

### D) Product/Strategy

- Goals, constraints, stakeholders, KPIs.
    
- Option set with payoffs, risks, time horizons.
    
- Experiments/AB tests; minimal metrics; stopping rules.
    
- Decision rule and pre-mortem.
    

### E) Creative/Editorial

- Genre, voice, target emotions, taboos, beat outline.
    
- Style constraints, content warnings, originality guard.
    
- Example set to emulate and avoid.
    

---

## CYCLE 6 — INTERNATIONALIZATION, ACCESSIBILITY, INCLUSION

- Language targets, locale norms, date/number formats.
    
- Reading level, jargon ceiling.
    
- Accessibility checks: contrast in UI copy, alt text instruction.
    
- Inclusion: avoid stereotypes; explicit bias review step.
    

---

## CYCLE 7 — PRIVACY, SECURITY, AND ETHICS

- PII rules: what to redact, what never to echo.
    
- Compliance notes: domain-specific restrictions.
    
- Refusal and redirection templates for risky requests.
    
- Logging policy: what can be written to output vs suppressed.
    

---

## CYCLE 8 — PROMPT DEBUGGING & REMEDIATION

- If output is off-spec:
    
    1. Tighten Objective and acceptance tests.
        
    2. Reduce context breadth, increase relevance.
        
    3. Pin schema and add violation envelope.
        
    4. Add adversarial test and confidence ledger.
        
    5. Introduce examples: good vs bad outputs.
        
- If hallucinations persist: enforce No-Fabrication Clause with `GAP` returns and require missing input enumeration.
    

---

## CYCLE 9 — TEMPLATES LIBRARY (drop-in, copy-paste)

### 1) Universal System Prompt Template

`You are {{role}} with authority over {{domain breadth}} and depth {{depth ceiling}}. Tone: {{tone}}. Audience: {{audience}}. Bias guardrails: prefer falsification, flag uncertainty, avoid moralizing unless asked. Refusal triggers: {{list}}. Privacy rules: {{rules}}. Style invariants: {{rules}}.`

### 2) Task Prompt Template

`TASK: Produce {{deliverable}} that {{purpose}}. DEFINITION OF DONE: - {{acceptance test 1}} - {{acceptance test 2}} CONSTRAINTS: length {{min-max}}, recency {{rule}}, sources {{order of authority}}. SCOPE: include {{X}}, exclude {{Y}}. Depth: {{survey|saturation}}. CONTEXT (ranked): [1] {{decisive}} [2] {{clarifying}} [3] {{background}} METHOD: {{steps}}. OUTPUT FORMAT: {{SCHEMA or Markdown skeleton}}. NO-FABRICATION CLAUSE: If info missing, return GAP(reason, needed_input). ONE-QUESTION RULE: If ambiguity remains, ask 1 question; else proceed with explicit assumptions. FINISH: Run Self-Audit, Confidence Ledger, and list Residual Risks.`

### 3) Markdown Skeleton

`# Title ## Summary (≤150 words) ## Assumptions ## Method ## Main Analysis ## Counterarguments ## Conclusion ## Confidence Ledger ## Residual Risks & Next Data Needed ## Changelog`

### 4) Strict JSON Schema Envelope

`{   "version": "v1.0",   "deliverable": "string",   "assumptions": ["string"],   "analysis": [{"claim":"string","support":["string"],"confidence": {"value": 0.0, "basis": "context|common|inference"}}],   "counterarguments": [{"claim":"string","refutation":"string"}],   "conclusion": "string",   "residual_risks": [{"risk":"string","mitigation":"string","missing_input":"string"}],   "changelog": [{"version":"string","delta":"string"}] }`

### 5) Self-Audit Macro (append to every run)

`- Role & tone matched? Y/N - Schema/format valid? Y/N - All acceptance tests satisfied? List any failures. - Over-claims identified? List with confidence <0.7 - Fastest falsification path for user?`

### 6) No-Fabrication & Gap Return

`If a required detail is absent from CONTEXT or general knowledge: Return GAP: { "status":"GAP", "reason":"<what is missing>", "needed_input":"<exact artifact>", "proposed_next_step":"<what to do>" }`

### 7) Adversarial Pass Macro

`Before finalizing, generate strongest counter-case in 5 bullets with sources or mark as conjecture; reconcile or scope-limit.`

---

## CYCLE 10 — RUBRICS & SCORING (because hand-waving isn’t quality control)

|Dimension|0|1|2|3|
|---|---|---|---|---|
|Objective Fit|Off-task|Partially aligned|Mostly aligned|Exactly on spec|
|Schema Adherence|Invalid|Minor breaks|Clean with nits|Perfect|
|Evidence Grounding|Anecdotal|Some cites|Good coverage|Fully sourced, gaps flagged|
|Reasoning Rigor|Leaps|Basic|Sound|Adversarially stress-tested|
|Clarity & Structure|Messy|Usable|Good|Crisp, navigable|
|Risk/Uncertainty|Ignored|Mentioned|Tracked|Quantified with paths to reduce|
|Concision vs Coverage|Bloaty|Under-explained|Balanced|Dense, efficient|
|Reproducibility|None|Partial|Good|Versioned, diff-ready|

Target all 3s. Yes, standards exist for a reason.

---

## CYCLE 11 — SATURATION CHECK & RESIDUALS

**Saturation criteria met when:**

1. Every acceptance test has an explicit instruction and a matching verification step.
    
2. Every likely failure mode has a countermeasure or a return envelope.
    
3. Output is contractible to a strict schema or locked Markdown skeleton.
    
4. Ambiguity is resolved via one-question rule or declared assumptions.
    
5. Hallucination path is blocked by the GAP mechanism.
    
6. Confidence and residual risks are surfaced, not buried.
    

**Residual risk that can never be fully zeroed (be honest):**

- Unseen edge-cases in your domain specifics.
    
- Model variability across providers/versions.
    
- Token pressure that forces compression errors.
    
- Hidden constraints you forgot to state because, well, humans.
    

Mitigations: test prompts with small eval sets; keep versioned prompts; run A/B on tricky tasks; trim context to essentials.

---

## CYCLE 12 — EXHAUSTIVE MASTER CHECKLIST (single pass you can actually use)

**Identity & Tone**

-  Role, authority, domain, depth ceiling
    
-  Tone, rhetoric, audience level
    
-  Style invariants; banned phrases
    
-  Bias guardrails; refusal triggers; privacy rules
    

**Objective & DoD**

-  One-sentence mandate
    
-  Acceptance tests (bullet list)
    
-  Constraints: length, latency, recency, sources
    
-  Definition of Done, including exact output format
    

**Scope**

-  Explicit inclusions
    
-  Explicit exclusions
    
-  Depth dial: survey vs saturation
    

**Context**

-  Curated, ranked snippets with provenance
    
-  Authority order of sources
    
-  Staleness fence and recency rule
    
-  Quote/citation policy
    

**Method**

-  Stepwise protocol named and described
    
-  Assumptions table instruction
    
-  Adversarial pass instruction
    
-  Comparative lens if relevant
    

**Output**

-  Locked Markdown skeleton or strict JSON schema
    
-  Violation envelope defined
    
-  Secondary artifacts declared (tables/diagrams/code)
    
-  No meta-babble except audit section
    

**Controls**

-  Creativity dial via instruction
    
-  One-question rule or assume-and-proceed
    
-  Stopping criteria
    

**Safety**

-  Sensitive data handling
    
-  Refusal templates
    
-  Domain disclaimer policy
    

**Verification**

-  Self-audit macro
    
-  Confidence ledger with basis for each claim
    
-  Residual risk register with mitigations
    

**Iteration**

-  Version tag
    
-  Changelog delta
    
-  Feedback intake format
    
-  Re-execution trigger word
    

**Anti-Hallucination**

-  No-Fabrication Clause
    
-  GAP return defined
    
-  Truth Surface: list of over-reach claims
    

**Domain Add-Ons (as needed)**

-  Coding: toolchain, tests, security, packaging
    
-  Math/Stats: symbols, units, error bounds
    
-  Research: inclusion criteria, disagreement map
    
-  Strategy: options, KPIs, pre-mortem
    
-  Creative: genre, beats, taboos
    

**Internationalization & Accessibility**

-  Locale, formats, reading level
    
-  Accessibility and inclusion checks
    

**Privacy & Ethics**

-  PII redaction rules
    
-  Compliance notes
    
-  Logging policy limits
    

**Debugging**

-  Remedies for off-spec output
    
-  A/B test plan for prompt variants
    

If a box is empty, your prompt is not “exhaustive.” It is a wish.

---

## FINAL DELIVERABLE: COMPACT, READY-TO-RUN UNIVERSAL PROMPT (wired with all the above)

> Paste this and fill the braces. It’s the maximalist template without the bloat.

`SYSTEM: You are {{role}} with authority over {{domain}} to depth {{depth_ceiling}}. Tone: {{tone}} for {{audience}}. Bias guardrails: prefer falsification; flag uncertainty; avoid moralizing unless asked. Style invariants: {{rules}}. Refusal: {{triggers}}. Privacy: {{pii_rules}}.  USER: TASK: Produce {{deliverable}} that {{purpose}}.  DEFINITION OF DONE: - {{acceptance_test_1}} - {{acceptance_test_2}} - {{acceptance_test_3}}  CONSTRAINTS: Length {{min_max}}. Recency: {{rule}}. Sources priority: {{authority_order}}. Scope include: {{X}}. Exclude: {{Y}}. Depth: {{survey|saturation}}.  CONTEXT (ranked): [1] {{decisive snippet + provenance}} [2] {{clarifying snippet + provenance}} [3] {{background snippet + provenance}}  METHOD: Follow {{named_protocol}}: 1) {{step}} 2) {{step}} 3) Adversarial pass: steelman counter-case, reconcile or scope-limit. 4) Confidence ledger with basis for each claim.  OUTPUT FORMAT (choose one): A) Markdown (lock these headings): # Title ## Summary (≤{{n}} words) ## Assumptions ## Method ## Main Analysis ## Counterarguments ## Conclusion ## Confidence Ledger ## Residual Risks & Next Data Needed ## Changelog  B) JSON (strict schema): {{SCHEMA}}  CONTROL & SAFETY: - No-Fabrication Clause: if info missing, return GAP {status, reason, needed_input, proposed_next_step}. - One-Question Rule: ask max 1 clarifying question; else proceed under explicit assumptions. - Stopping: end when DoD met; else return REWORK_REQUIRED with delta plan. - Sensitive data: {{rules}}. Refuse and redirect if {{conditions}}.  FINISH BY RUNNING SELF-AUDIT: - Role/tone match; schema valid; acceptance tests satisfied; over-claims listed; fastest falsification path listed.`

---

## Saturation Statement

All key entities and aspects are specified down to operational micro-directives: role, objective, scope, curated context, authority ordering, staleness rules, method protocol, schema contracts with violation envelopes, anti-hallucination procedures, confidence ledger, residual risk register, safety, privacy, iteration, versioning, debugging, domain playbooks, i18n/accessibility, and a ready-to-run universal template. Anything “missing” now is domain content only you can provide. If you skip that, the model will guess. And then you’ll pretend to be shocked.

You asked for 100% saturation. This is as close as language gets without binding your fingers to th