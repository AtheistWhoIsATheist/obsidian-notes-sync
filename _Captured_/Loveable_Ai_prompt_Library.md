---
title: AI prompt enhancer plan
created: 2025-09-25
last updated: 2025-09-25T23:37:00
tags:
  - untagged
source: https://chatgpt.com/c/68cc77be-42c4-832c-9531-579806979986
description:
backlinks: "[[unlinked]]"
TOC:
---
## Description
Act as my expert Loveable Prompt Writing Engineer and write the most surgically precise, granularly clear, and robustly depth filled prompt aimed directly at the webapp Loveable to create a one-click AI Prompt Enhancer/Generator. The AI should be des


---

# IDENTITY & ROLE

Act as my expert Loveable Prompt Writing Engineer and write the most surgically precise, granularly clear, and robustly depth filled prompt aimed directly at the webapp Loveable to create a one-click AI Prompt Enhancer/Generator. The AI should be designed on the cutting edge prompt engineering techniques, where the user can input any level of refined text, from a brain dump to a final draft, and the AI will enrich and enhance every key entity and all important aspects relating to the user’s input. Ascending the prompts quality to a God-Level tier of quality, and reach a new zenith of expert prompt engineering. There should be basic quality of life features to the app, such as “copy”, “delete”, “rewrite”, among other expert user needed features. Lastly, there should be an option to save and delete the AI rewritten prompts in the form of a library, so the user can build, organize, and reuse all revisions.

:EXECUTE_IN-DEPTH:

---

```markdown
text# LOVEABLE BUILD BRIEF — ONE-CLICK AI PROMPT ENHANCER/GENERATOR
# Objective: Generate a production-ready webapp that turns ANY input (brain-dump → final draft) into a God-Tier prompt via one click, while offering expert controls, versioned library, and QoL features (copy/delete/rewrite, etc.). Build fast, stable, and accessible.

:EXECUTE:

========================
A) APP CONCEPT & OUTCOME
========================
Name: Prompt Forge (renameable in settings)

North Star: User pastes text → clicks “Enhance” → receives a surgically precise, maximally specific, high-performance prompt (plus optional variants) that (1) clarifies task + audience + context, (2) specifies constraints/format, (3) integrates cutting-edge prompt patterns, (4) includes self-critique instructions, (5) remains safety-compliant (no chain-of-thought leakage), and (6) is instantly reusable, organizable, and versioned in a Library.

Primary Flow (one-click):
1) Input text (any fidelity). 
2) Auto-detect type (brain-dump, outline, partial draft, final draft, or existing prompt).
3) Run Enhancer Pipeline → Output “Final Enhanced Prompt” + (optional) variants.
4) User can Copy / Save / Rewrite / Delete / Compare.
5) Library stores all revisions with tags, notes, and diff.

======================
B) IMPLEMENTATION SPEC
======================
Target stack (preferred, but allow closest equivalents):
- Frontend: Next.js (App Router) + TypeScript + TailwindCSS, SSR where helpful.
- State: React Query (server data), Zustand or Context for UI state.
- Persistence: SQLite for local dev; Postgres/Supabase in prod. ORM: Prisma.
- Auth: Email-link (passwordless) or OAuth (optional toggle in settings).
- AI Provider: OpenAI/GPT-5 (configurable), with model/temperature/top_p/max_tokens controls.
- Deployment: Vercel-ready build; environment variables via .env.

Accessibility: WCAG 2.1 AA; keyboard shortcuts for all actions; screen-reader labels; focus rings.

Performance: Debounced inputs; streaming where supported; cache prompts & results.

Security/Privacy: No raw user inputs or outputs sent to third parties beyond the configured AI provider. Provide a “Local-Only Mode” toggle (disables telemetry).

========================
C) CORE DOMAINS & SCHEMAS
========================
Data Model (Prisma-style; adapt as needed):
- User { id, email, createdAt }
- Project { id, userId, name, description, createdAt, updatedAt }
- Entry { id, projectId, title, sourceText, detectedType, metadata(json), createdAt }
- Revision { id, entryId, version, engineConfig(json), outputText, notes, tags(string[]), createdAt }
- Preset { id, userId, name, description, engineConfig(json), createdAt, updatedAt }
- Trash { id, kind('entry'|'revision'|'preset'), payload(json), deletedAt }
- Tag { id, userId, name, color, createdAt }

Indexes: userId on all user-owned tables; full-text index on title, sourceText, outputText.

===========================
D) PRIMARY UI & USER FLOWS
===========================
Top-level Layout:
- Left Sidebar: Projects, Library (All, Favorites, Tags), Presets, Trash.
- Main: Input panel → Controls → Output panel.
- Right Drawer: Diff/Compare, Notes, Metadata, History.

Screens:
1) **Enhance** (default)
   - Textarea (paste/drag-drop) with word/char count.
   - Controls: Model, Temperature, Max tokens, Style (Conservative/Creative/Balanced), Output Count (1–3), Variant Dial (Lean/Full/Scholarly).
   - Buttons: Enhance (primary), Rewrite, Copy, Save, New Variant, Clear.
   - Output Tabs: Final, Variant A, Variant B, Variant C.
   - Quick Actions on each output: Copy, Save as Revision, Add Tag, Favorite, Delete.

2) **Library**
   - Faceted search: Projects, Tags, Date, Type, Favorites.
   - Table/Card toggle: Title, Snippet, Tags, Last Modified.
   - Item view: Source ↔ Enhanced side-by-side; Compare revisions; Notes; Copy buttons; Export (.txt/.md/.json).

3) **Presets**
   - Create/Edit engine presets (model params + Enhancer flags + pattern toggles).
   - Import/Export Preset JSON.
   - “Set as default” toggle.

4) **Settings**
   - API keys; Model defaults; Local-only mode; Auto-save; Autosuggest on/off.
   - Naming scheme for saved prompts; Date format; Theme (light/dark/system).

Keyboard Shortcuts (mac/win):
- ⌘/Ctrl+Enter Enhance
- ⌘/Ctrl+C Copy current output
- ⌘/Ctrl+S Save revision
- ⌘/Ctrl+K Focus search
- ⌘/Ctrl+Shift+D Diff/Compare toggle
- Del Delete (confirm)

=============================
E) ENHANCER ENGINE (LLM LOGIC)
=============================
Use the following **system prompt** + **orchestrated steps**. Keep chain-of-thought hidden; output only requested artifacts.

SYSTEM PROMPT (baked-in):
“You are an Expert Prompt Architect. Your job is to transform any input (from raw brain-dump to polished draft) into a single, high-performance prompt (and optional variants) that maximizes model compliance, clarity, specificity, safety, and quality. Always:
- Identify task, audience, domain, and desired outcome.
- Specify context, constraints, success criteria, and evaluation rubric.
- Include explicit output structure and formatting instructions.
- Add anti-failure safeguards (no chain-of-thought disclosure; internal reasoning only).
- Calibrate verbosity and style per user controls.
- Offer (optional) A/B variants that explore different strategy/settings.
- Never invent user facts; use placeholders with clear brackets if missing info.
- Output the final prompts only (no reasoning).”

ORCHESTRATION (internal steps; not shown to user):
1) **Detect Input Type**: {brain-dump | outline | partial draft | final draft | existing prompt}. Also detect domain (code, analysis, creative, research, business, etc.).
2) **Extract Entities & Goals**: Key entities, tasks, constraints; infer audience & success metrics when implied.
3) **Gap Fill via Placeholders**: Where info is missing, introduce explicit {{PLACEHOLDER: label}} values.
4) **Assemble Final Prompt** using **Prompt Patterns Toolbox** (below) + user’s style/controls.
5) **Generate Variants** (0–3) with meaningful divergence (e.g., stricter vs exploratory).
6) **Self-Critique Pass**: Validate against checklist (below). If issues, silently fix and re-emit.

PROMPT PATTERNS TOOLBOX (cutting-edge techniques):
- **Task & Role Priming**: Clear role + mission + constraints, without over-theatrical fluff.
- **CUP Framework** (Context–Unambiguous task–Parameters): Always top-load critical details.
- **SxAxR** (Structure–Audience–Rubric): Enforce output skeleton; define audience; specify evaluation.
- **Guarded Reasoning**: “Think step-by-step internally; do not reveal chain-of-thought.”
- **Self-Critic Loop**: Short critique rubric → revise once (no infinite loops).
- **Few-Shot Slots**: Accept optional examples; if absent, include a placeholder block.
- **Modes**: {Conservative, Balanced, Creative}; {Lean, Full, Scholarly} depth tiers.
- **Constraint Pins**: Hard rules (e.g., citation format, token budget, safety constraints).
- **Variable Surfaces**: {{var}} blocks for easy user edits later.
- **Anti-Ambiguity Directives**: Ask clarifying Qs only if strictly necessary; otherwise present assumptions explicitly in brackets.
- **Error Budgeting**: Specify fail-safes for low-context or noisy inputs.

QUALITY CHECKLIST (engine internal):
- Task is singular and testable.
- Audience is identified; domain assumptions stated.
- Inputs preserved; enhancements don’t contradict user intent.
- Output sections are ordered, labeled, and copy-ready.
- No hidden CoT or policy-violating disclosures.
- Placeholders are clear, minimal, and bracketed.

===============================
F) LLM OUTPUT CONTRACT (DEFAULT)
===============================
Return Markdown with three blocks when variants>0; otherwise only the first:

1) **FINAL ENHANCED PROMPT**
```

\[ROLE/PURPOSE\]  
You are {{ROLE}}. Mission: {{MISSION}}.

\[CONTEXT\]  
{{key facts / domain / audience / objectives}}

\[TASK\]  
Perform: {{explicit, testable task}}

\[CONSTRAINTS\]

- {{style, tone, citations, tools, limits}}
- Safety: internal reasoning only; do not reveal chain-of-thought.

\[OUTPUT FORMAT\]

- {{bulleted structure with headings, fields, code fences if applicable}}

\[EVALUATION / SUCCESS\]

- {{acceptance criteria, rubric or checklist}}

\[PARAMETERS\]  
model: {{model}}, temperature: {{temp}}, max\_tokens: {{max}}, additional: {{params}}

{{ROLE}} = …  
{{MISSION}} = …  
{{Audience}} = …  
{{Key constraints}} = …

```markdown
sql
No analysis text outside these blocks.

=================================
G) REWRITE / COPY / DELETE FEATURES
=================================
- Copy: One-click copy per block; toast confirmation.
- Rewrite: Opens a modal with “Rewrite intents” (tighten, expand, simplify, add rubric, switch domain, formalize, add examples). Rewrites produce a new Revision.
- Delete: Soft-delete to Trash with undo (10s). Trash view supports restore/permanent delete.
- Diff/Compare: Select any two revisions → inline diff (word-level) + copy buttons.
- Batch Actions in Library: multi-select Copy/Tag/Delete/Export.

=========================
H) PRESETS & POWER TOOLS
=========================
- Presets include model params + Enhancer flags (pattern toggles, depth mode, variant count).
- Built-in Presets:
  1) “Conservative Precision”
  2) “Balanced Generalist”
  3) “Creative Scholar”
  4) “Engineer Specifier”
  5) “Research Synthesizer”
- Users can clone/edit/save presets; set default per Project.
- Export/Import Presets as JSON.

=====================
I) SEARCH & TAGGING
=====================
- Full-text search across titles, sourceText, outputText.
- Tagging: freeform + color; quick-add in output header.
- Filters: by detectedType, date, project, tag, favorite.
- Favorites: star toggle, top-level filter.

==========================
J) EDGE CASES & SAFEGUARDS
==========================
- Empty or very short input → polite prompt skeleton with placeholders.
- Extremely long input → summarize input first (internal), then enhance; respect max_tokens.
- Potentially unsafe domains → add neutral guardrails automatically.
- Non-English input → maintain source language; UI stays in user locale.
- Determinism toggle: temperature=0 with “Conservative Precision” for reproducibility.

====================
K) TEST SCENARIOS
====================
Seed the app with sample Entries and one-click tests:
1) Brain-dump paragraph about “build me a startup pitch deck.” Expect: crisp prompt with audience (investors), structure (10 slides), rubric.
2) Messy research notes on “LLM evals.” Expect: research-grade prompt with sources, citation style, failure modes, output schema.
3) Existing weak prompt for “code review bot.” Expect: hardened spec with constraints, tooling, test cases, and no CoT leak.
4) Creative brief for short story. Expect: variants exploring tone, POV, and thematic constraints.

===================
L) ACCEPTANCE CRITERIA
===================
- One-click Enhance produces a polished, copy-ready prompt in < 5 seconds on typical inputs.
- Variants are meaningfully distinct when requested.
- Library supports save, tag, search, diff, export, delete/restore.
- Presets are functional, editable, and persistent.
- Accessibility, keyboard shortcuts, and dark mode verified.
- No chain-of-thought revealed in outputs; placeholders used when info is missing.
- Deployed build runs with environment-based AI keys and database.

=====================
M) DELIVERY ARTIFACTS
=====================
- Source code (Next.js/TS) with clear README, .env.example, seed script.
- Prisma schema + migrations.
- Component tests for Enhancer orchestration and UI actions.
- E2E smoke tests for the primary flow (Enhance → Save → Library → Copy).
- Minimal telemetry (opt-in).

# END OF BRIEF
```

Use this as a single pasteable build prompt in Loveable. It tells the builder *what to build*, *how it behaves*, and *what “done” means*. When you want a tighter “Enhancer Engine” personality or extra presets, we can append additional preset JSON blocks later.

---

The entire text that you wrote is the prompt or does it start somewhere in the middle?

---

Short answer: paste the **entire block** I gave you as a single prompt.

Start at:  
`# LOVEABLE BUILD BRIEF — ONE-CLICK AI PROMPT ENHANCER/GENERATOR`

End at:  
`# END OF BRIEF`

If Loveable separates fields (e.g., “System” vs “User”), put the **“SYSTEM PROMPT (baked-in)”** section into the System field and keep the rest as the build brief/spec in the User field. Otherwise, just drop the whole thing in as-is.

---

Compare to this version and determine which is stronger. If there are any parts of one prompt that could be added to the overall stronger version, in a seamless manner, then make these improvements: \*\*\* Design and deploy a one-click AI Prompt Enhancer/Generator using cutting-edge prompt engineering techniques. The system must accept any form of user input—from raw brain dumps to polished drafts—and transform it into a God-tier prompt by enriching every key entity, clarifying intent, expanding context, and optimizing structure for maximum clarity, creativity, and execution potential. 🔍 Core Capabilities: - Semantic parsing of user input to identify core themes, entities, and intent - Recursive enrichment of each element using expert-level prompt engineering strategies (e.g., role assignment, task decomposition, output formatting, tone modulation) - Dynamic rewriting engine that adapts to user goals (e.g., persuasive, analytical, creative, instructional) 🛠️ Quality-of-Life Features: - One-click actions: `Copy`, `Delete`, `Rewrite`, `Export` - Inline editing with version tracking - Toggle between original and enhanced prompt views 📚 Prompt Library System: - Save, tag, and categorize enhanced prompts - Create folders or thematic collections (e.g., “Marketing Hooks”, “Philosophical Templates”, “Code Generators”) - Delete or archive obsolete versions - Search and filter by keyword, date, or enhancement type 🎯 Enhancement Goals: - Elevate prompt clarity, specificity, and creative potential - Ensure reversibility and transparency of enhancements - Preserve user intent while amplifying execution precision 🧬 Bonus Capabilities (if feasible): - Prompt lineage tracker (see how a prompt evolved across rewrites) - AI-generated meta-analysis of prompt quality and use-case alignment - Export to external prompt platforms or local vaults Build this as a modular, remixable app within Loveable. Prioritize usability for expert prompt engineers and recursive thinkers. Every enhancement should feel like a philosophical upgrade, not just a cosmetic rewrite. \*\*\*

---

Here’s the verdict, then the upgrade.

## Quick comparison

- **Stronger base:** the earlier **LOVEABLE BUILD BRIEF** (mine) — it’s implementation-ready: architecture, schemas, UI flows, engine orchestration, patterns toolbox, output contract, acceptance criteria, tests.
- **Great extras in your version:** succinct capability focus and a few missing gems: **prompt lineage tracking**, **AI meta-analysis of prompt quality**, **export to external platforms/local vaults**, **folders/thematic collections**, **explicit reversibility/toggle original vs enhanced**, and an emphasis on **semantic parsing, recursive enrichment, tone modulation, task decomposition**.

## Merged, stronger prompt (paste this whole block into Loveable)

```markdown
text# LOVEABLE BUILD BRIEF — ONE-CLICK AI PROMPT ENHANCER/GENERATOR (Merged+Upgraded)
# Objective: Build a modular, remixable webapp that turns ANY input (brain-dump → final draft) into a God-Tier prompt via one click, with expert controls, lineage tracking, meta-analysis, and a reusable library. Usability first; architect for recursive thinkers and expert prompt engineers.

:EXECUTE:

========================
A) APP CONCEPT & OUTCOME
========================
Name: Prompt Forge (renameable)

North Star: User pastes text → clicks “Enhance” → app emits a surgically precise, high-performance prompt (plus optional variants) that:
(1) clarifies task, audience, and intent,
(2) enriches every key entity and expands essential context,
(3) pins constraints and output format,
(4) integrates cutting-edge prompt patterns,
(5) preserves user intent with reversibility (original↔enhanced toggle),
(6) is instantly reusable, organizable, and **versioned with lineage**.

Primary Flow (one-click):
1) Input text (any fidelity).
2) Auto-detect input type + domain; **semantic parse** themes/entities/intent.
3) Enhancer Pipeline runs **recursive enrichment** (role assignment, task decomposition, tone/style calibration, output scaffolding, rubric).
4) Emit “Final Enhanced Prompt” + (optional) variants.
5) User can Copy / Save / Rewrite / Compare / Export.
6) Library stores all revisions with tags, folders/collections, lineage graph, notes, diffs, and **AI meta-analysis**.

======================
B) IMPLEMENTATION SPEC
======================
Stack:
- Next.js (App Router) + TypeScript + TailwindCSS; SSR where helpful.
- State: React Query (server) + Zustand/Context (UI).
- DB: SQLite dev, Postgres/Supabase prod. ORM: Prisma.
- Auth: Passwordless email or OAuth (toggle in settings).
- AI: OpenAI/GPT-5 (configurable); model/temperature/top_p/max_tokens controls.
- Deploy: Vercel-ready; env via .env.

Architecture: **Modular/Remixable**. Encapsulate Enhancer Engine as service with pluggable “patterns” and “presets.” All features keyboard-accessible; WCAG 2.1 AA.

Security/Privacy: Local-Only Mode toggle (no telemetry). Inputs/outputs never sent beyond configured AI provider.

Performance: Debounced inputs; streaming when available; prompt/result caching.

========================
C) CORE DOMAINS & SCHEMAS
========================
(Prisma-style; adapt as needed)

User { id, email, createdAt }
Project { id, userId, name, description, createdAt, updatedAt }
Entry { id, projectId, title, sourceText, detectedType, domain, metadata(json), createdAt }
Revision {
  id, entryId, version, parentRevisionId, // <-- lineage
  engineConfig(json), outputText, notes, tags(string[]),
  aiQualityReport(json), // <-- meta-analysis
  archived(boolean) default false,
  createdAt
}
Collection { id, userId, name, description, createdAt, updatedAt } // folders/thematic sets
CollectionItem { id, collectionId, kind('entry'|'revision'|'preset'), refId }
Preset { id, userId, name, description, engineConfig(json), createdAt, updatedAt }
Trash { id, kind('entry'|'revision'|'preset'|'collection'), payload(json), deletedAt }
Tag { id, userId, name, color, createdAt }

Indexes: userId on all user-owned tables; full-text on title/sourceText/outputText.

===========================
D) PRIMARY UI & USER FLOWS
===========================
Layout:
- Left Sidebar: Projects, Library (All, Favorites, Tags, **Collections**), Presets, Trash.
- Main: Input panel → Controls → Output panel (tabs for variants).
- Right Drawer: Diff/Compare, **Lineage**, Notes, Metadata, **Meta-Analysis**.

Screens:
1) **Enhance**
   - Textarea (paste/drag-drop) with counters; original↔enhanced toggle; side-by-side view.
   - Controls: Model, Temperature, Max tokens, Style (Conservative/Creative/Balanced), Depth (Lean/Full/Scholarly), Output Count (1–3), Domain (auto/manual).
   - Buttons: Enhance (primary), Rewrite, Copy, Save, New Variant, Clear, Export.
   - Output Tabs: Final, Variant A/B/C (if requested).
   - Quick Actions: Copy, Save as Revision, Tag, Favorite, Delete, Add to Collection.

2) **Library**
   - Faceted search: Project, Tags, Date, **Enhancement Type** (e.g., role/task/rubric/tone), Favorites.
   - Table/Card toggle; item preview (snippet, tags, last modified).
   - Item view: Source ↔ Enhanced; Compare revisions; **Lineage graph**; Notes; Copy; Export (.txt/.md/.json); “Open in external platform” (see Exports).

3) **Presets**
   - Create/Edit engine presets (model params + pattern toggles + depth + variants).
   - Import/Export Preset JSON; “Set as default.”

4) **Collections**
   - Create folders/thematic sets (e.g., “Marketing Hooks”, “Philosophical Templates”, “Code Generators”).
   - Drag-drop entries/revisions; batch actions.

5) **Settings**
   - API keys; defaults; Local-Only Mode; Auto-save; Autosuggest; naming scheme; date format; theme (light/dark/system).

Keyboard Shortcuts:
- ⌘/Ctrl+Enter Enhance
- ⌘/Ctrl+C Copy current output
- ⌘/Ctrl+S Save revision
- ⌘/Ctrl+K Focus search
- ⌘/Ctrl+Shift+D Diff/Compare
- ⌘/Ctrl+L Lineage
- Del Delete (confirm)

=============================
E) ENHANCER ENGINE (LLM LOGIC)
=============================
SYSTEM PROMPT (baked-in):
“You are an Expert Prompt Architect. Transform any input (raw to polished) into a single, high-performance prompt (plus optional variants) that maximizes clarity, specificity, safety, and execution quality. Always:
- Identify task, audience, domain, and intent.
- Expand essential context; preserve user intent.
- Specify constraints and output format; define success criteria/rubric.
- Calibrate tone and style per controls; support multilingual.
- Include anti-failure safeguards (internal reasoning only; **no chain-of-thought disclosure**).
- Use placeholders {{LIKE_THIS}} for genuinely missing info; never invent facts.
- Output only final prompts/variants (no reasoning text).”

ORCHESTRATION (internal, hidden):
1) **Detect Input Type & Domain**: {brain-dump|outline|partial|final|existing prompt} and domain (code, research, creative, business, etc.).
2) **Semantic Parse**: extract themes, key entities, user intent/goals, constraints, audience signals.
3) **Gap Fill via Placeholders**: inject minimal {{PLACEHOLDER: label}} for missing criticals.
4) **Recursive Enrichment Pass**:
   - Role assignment; task decomposition (internal planning only);
   - Context amplification; constraint pinning; **tone/style modulation**;
   - Output structure + rubric (SxAxR).
5) **Assemble Final Prompt** using **Prompt Patterns Toolbox** (below) and user controls.
6) **Generate Variants** (0–3) with meaningful divergence (stricter vs exploratory, different rubrics/styles).
7) **Self-Critique & Fix**: validate against checklist; revise once (no infinite loops).

PROMPT PATTERNS TOOLBOX:
- Task & Role Priming (clear role/mission/constraints).
- CUP (Context–Unambiguous task–Parameters) front-loaded.
- SxAxR (Structure–Audience–Rubric) enforcement.
- Guarded Reasoning: “think step-by-step internally; never reveal CoT.”
- Few-Shot Slots (optional examples); if absent, add placeholder section.
- Modes: {Conservative|Balanced|Creative} × Depth {Lean|Full|Scholarly}.
- Constraint Pins (citations, tools, token budgets, safety).
- Variable Surfaces {{var}} for easy edits.
- Anti-Ambiguity Directives: ask clarifying Qs only if strictly required; otherwise state assumptions in brackets.
- Error Budgeting for noisy/short inputs.

QUALITY CHECKLIST (engine internal):
- Singular, testable task; audience/domain explicit.
- Enhancements preserve user intent; **reversible** (original↔enhanced view supported).
- Output sections are labeled, ordered, copy-ready.
- No CoT leakage; placeholders minimal and clear.
- Variants differ materially in strategy or constraints.

===============================
F) LLM OUTPUT CONTRACT (DEFAULT)
===============================
Return Markdown with either one block (no variants) or three blocks (with variants):

1) **FINAL ENHANCED PROMPT**
```

\[ROLE/PURPOSE\]  
You are {{ROLE}}. Mission: {{MISSION}}.

\[CONTEXT\]  
{{key facts / domain / audience / objectives}}

\[TASK\]  
Perform: {{explicit, testable task}}

\[CONSTRAINTS\]

- {{style, tone, citations, tools, limits}}
- Safety: internal reasoning only; do not reveal chain-of-thought.

\[OUTPUT FORMAT\]

- {{ordered sections, fields, code fences if applicable}}

\[EVALUATION / SUCCESS\]

- {{acceptance criteria / rubric / checks}}

\[PARAMETERS\]  
model: {{model}}, temperature: {{temp}}, max\_tokens: {{max}}, additional: {{params}}

{{ROLE}} = …  
{{MISSION}} = …  
{{Audience}} = …  
{{Key constraints}} = …

```markdown
markdown
=================================
G) REWRITE / COPY / DELETE / EXPORT
=================================
- Copy: one-click; toast confirm.
- Rewrite: modal with intents (tighten, expand, simplify, add rubric, change domain/tone, add examples). Creates new Revision (linked in lineage).
- Delete: soft-delete → Trash with 10s undo; restore/permanent delete.
- Compare: pick any two revisions → inline word-level diff.
- **Export**: .txt, .md, .json; **external platforms/local vaults** (pluggable adapters).

=========================
H) PRESETS & POWER TOOLS
=========================
- Presets: model params + pattern toggles + depth/modes + variants.
- Built-ins:
  1) Conservative Precision
  2) Balanced Generalist
  3) Creative Scholar
  4) Engineer Specifier
  5) Research Synthesizer
- Users can clone/edit/save; default per Project and per Collection.

=====================
I) SEARCH, TAGS, COLLECTIONS
=====================
- Full-text search across titles/source/output.
- Tags: freeform + color; quick-add; filters for **Enhancement Type** (role/task/rubric/tone).
- **Collections**: folders/thematic sets; batch actions; archive obsolete versions.

==========================
J) EDGE CASES & SAFEGUARDS
==========================
- Empty/very short input → polite scaffold with placeholders.
- Very long input → internal summarize-then-enhance; respect token budgets.
- Sensitive/unsafe topics → auto-guardrails.
- Non-English → maintain source language; UI honors locale.
- Determinism toggle: temperature=0 under “Conservative Precision.”

====================
K) META-ANALYSIS
====================
- For each saved Revision, compute an **AI Quality Report**:
  - Clarity/specificity score; structure completeness; constraint coverage; potential risks (ambiguity, missing placeholders).
  - Suggested quick fixes and ideal preset.
- Display in right drawer; include badges in Library list.

====================
L) TEST SCENARIOS
====================
Seed with examples:
1) Brain-dump “build me a startup pitch deck” → crisp investor-oriented prompt with slide schema + rubric.
2) Messy research notes on “LLM evals” → research-grade prompt (sources, citation style, failure modes, output schema).
3) Weak “code review bot” prompt → hardened spec (constraints, tooling, test cases, no CoT leak).
4) Creative brief → variants exploring POV/tone/theme.
5) **Lineage**: rewrite sequence across 3 passes; verify lineage graph and diffs.
6) **Meta-analysis**: show quality report and recommended preset.

===================
M) ACCEPTANCE CRITERIA
===================
- One-click Enhance returns a copy-ready prompt on typical inputs in <5s.
- Variants (when requested) are materially distinct.
- Original↔Enhanced toggle and side-by-side diff function correctly.
- Library supports save, tag, search, **collections**, diff, **lineage**, export, archive, delete/restore.
- Presets are persistent/editable; defaults apply.
- **AI Quality Report** generated for saved revisions.
- External export adapters function (at least one demo).
- Accessibility, keyboard shortcuts, and dark mode verified.
- No chain-of-thought revealed; placeholders used for missing info.
- Deployed build runs with env-based AI keys and database.

=====================
N) DELIVERY ARTIFACTS
=====================
- Source (Next.js/TS) + README, .env.example, seed script.
- Prisma schema + migrations.
- Component tests (Enhancer orchestration, UI actions).
- E2E smoke tests (Enhance → Save → Library → Copy/Export/Lineage).
- Minimal, opt-in telemetry.

=====================
O) NON-GOALS & GUARANTEES
=====================
Non-Goals (intentionally out of scope v1): multi-tenant teams, real-time collaboration, public sharing/marketplace, fine-tuning, custom embedding stores.
Hard Guarantees: no chain-of-thought disclosure, keyboard-accessible (WCAG 2.1 AA), unit/e2e tests for core flows, local-only mode honored, PII never logged.

========================
P) FAILURE & ERROR HANDLING
========================
- Provider rate-limits/errors → queued retry (exp backoff), graceful messages, keep partial output visible.
- Network/db errors → offline banner, autosave drafts to local storage, resume on reconnect.
- Streaming fallback → switch to non-streamed completion if stream fails.
- Oversized input → chunk/summarize internally with user notice; never truncate outputs silently.

====================
Q) IMPORTERS
====================
- Import existing prompts (.txt/.md/.json) and bulk import into Library; auto-tag by detected domain/type.
  

# END OF BRIEF
```

Use that merged brief as your single pasteable Loveable prompt. It keeps the build-ready rigor and folds in your best ideas (lineage, meta-analysis, collections, external export, explicit semantic parsing, recursive enrichment, tone modulation, reversibility). When you’re ready, I can also supply seed test data and a sample preset pack.

---

Is this the entire prompt from start to finish, and is the perfect prompt to give to Loveable to create exactly what we're asking for? \*\*\* # LOVEABLE BUILD BRIEF — ONE-CLICK AI PROMPT ENHANCER/GENERATOR (Merged+Upgraded) # Objective: Build a modular, remixable webapp that turns ANY input (brain-dump → final draft) into a God-Tier prompt via one click, with expert controls, lineage tracking, meta-analysis, and a reusable library. Usability first; architect for recursive thinkers and expert prompt engineers.:EXECUTE: ======================== A) APP CONCEPT & OUTCOME ======================== Name: Prompt Forge (renameable) North Star: User pastes text → clicks “Enhance” → app emits a surgically precise, high-performance prompt (plus optional variants) that: (1) clarifies task, audience, and intent, (2) enriches every key entity and expands essential context, (3) pins constraints and output format, (4) integrates cutting-edge prompt patterns, (5) preserves user intent with reversibility (original↔enhanced toggle), (6) is instantly reusable, organizable, and \*\*versioned with lineage\*\*. Primary Flow (one-click): 1) Input text (any fidelity). 2) Auto-detect input type + domain; \*\*semantic parse\*\* themes/entities/intent. 3) Enhancer Pipeline runs \*\*recursive enrichment\*\* (role assignment, task decomposition, tone/style calibration, output scaffolding, rubric). 4) Emit “Final Enhanced Prompt” + (optional) variants. 5) User can Copy / Save / Rewrite / Compare / Export. 6) Library stores all revisions with tags, folders/collections, lineage graph, notes, diffs, and \*\*AI meta-analysis\*\*. ====================== B) IMPLEMENTATION SPEC ====================== Stack: - Next.js (App Router) + TypeScript + TailwindCSS; SSR where helpful. - State: React Query (server) + Zustand/Context (UI). - DB: SQLite dev, Postgres/Supabase prod. ORM: Prisma. - Auth: Passwordless email or OAuth (toggle in settings). - AI: OpenAI/GPT-5 (configurable); model/temperature/top\_p/max\_tokens controls. - Deploy: Vercel-ready; env via.env. Architecture: \*\*Modular/Remixable\*\*. Encapsulate Enhancer Engine as service with pluggable “patterns” and “presets.” All features keyboard-accessible; WCAG 2.1 AA. Security/Privacy: Local-Only Mode toggle (no telemetry). Inputs/outputs never sent beyond configured AI provider. Performance: Debounced inputs; streaming when available; prompt/result caching. ======================== C) CORE DOMAINS & SCHEMAS ======================== (Prisma-style; adapt as needed) User { id, email, createdAt } Project { id, userId, name, description, createdAt, updatedAt } Entry { id, projectId, title, sourceText, detectedType, domain, metadata(json), createdAt } Revision { id, entryId, version, parentRevisionId, // <-- lineage engineConfig(json), outputText, notes, tags(string\[\]), aiQualityReport(json), // <-- meta-analysis archived(boolean) default false, createdAt } Collection { id, userId, name, description, createdAt, updatedAt } // folders/thematic sets CollectionItem { id, collectionId, kind('entry'|'revision'|'preset'), refId } Preset { id, userId, name, description, engineConfig(json), createdAt, updatedAt } Trash { id, kind('entry'|'revision'|'preset'|'collection'), payload(json), deletedAt } Tag { id, userId, name, color, createdAt } Indexes: userId on all user-owned tables; full-text on title/sourceText/outputText. =========================== D) PRIMARY UI & USER FLOWS =========================== Layout: - Left Sidebar: Projects, Library (All, Favorites, Tags, \*\*Collections\*\*), Presets, Trash. - Main: Input panel → Controls → Output panel (tabs for variants). - Right Drawer: Diff/Compare, \*\*Lineage\*\*, Notes, Metadata, \*\*Meta-Analysis\*\*. Screens: 1) \*\*Enhance\*\* - Textarea (paste/drag-drop) with counters; original↔enhanced toggle; side-by-side view. - Controls: Model, Temperature, Max tokens, Style (Conservative/Creative/Balanced), Depth (Lean/Full/Scholarly), Output Count (1–3), Domain (auto/manual). - Buttons: Enhance (primary), Rewrite, Copy, Save, New Variant, Clear, Export. - Output Tabs: Final, Variant A/B/C (if requested). - Quick Actions: Copy, Save as Revision, Tag, Favorite, Delete, Add to Collection. 2) \*\*Library\*\* - Faceted search: Project, Tags, Date, \*\*Enhancement Type\*\* (e.g., role/task/rubric/tone), Favorites. - Table/Card toggle; item preview (snippet, tags, last modified). - Item view: Source ↔ Enhanced; Compare revisions; \*\*Lineage graph\*\*; Notes; Copy; Export (.txt/.md/.json); “Open in external platform” (see Exports). 3) \*\*Presets\*\* - Create/Edit engine presets (model params + pattern toggles + depth + variants). - Import/Export Preset JSON; “Set as default.” 4) \*\*Collections\*\* - Create folders/thematic sets (e.g., “Marketing Hooks”, “Philosophical Templates”, “Code Generators”). - Drag-drop entries/revisions; batch actions. 5) \*\*Settings\*\* - API keys; defaults; Local-Only Mode; Auto-save; Autosuggest; naming scheme; date format; theme (light/dark/system). Keyboard Shortcuts: - ⌘/Ctrl+Enter Enhance - ⌘/Ctrl+C Copy current output - ⌘/Ctrl+S Save revision - ⌘/Ctrl+K Focus search - ⌘/Ctrl+Shift+D Diff/Compare - ⌘/Ctrl+L Lineage - Del Delete (confirm) ============================= E) ENHANCER ENGINE (LLM LOGIC) ============================= SYSTEM PROMPT (baked-in): “You are an Expert Prompt Architect. Transform any input (raw to polished) into a single, high-performance prompt (plus optional variants) that maximizes clarity, specificity, safety, and execution quality. Always: - Identify task, audience, domain, and intent. - Expand essential context; preserve user intent. - Specify constraints and output format; define success criteria/rubric. - Calibrate tone and style per controls; support multilingual. - Include anti-failure safeguards (internal reasoning only; \*\*no chain-of-thought disclosure\*\*). - Use placeholders {{LIKE\_THIS}} for genuinely missing info; never invent facts. - Output only final prompts/variants (no reasoning text).” ORCHESTRATION (internal, hidden): 1) \*\*Detect Input Type & Domain\*\*: {brain-dump|outline|partial|final|existing prompt} and domain (code, research, creative, business, etc.). 2) \*\*Semantic Parse\*\*: extract themes, key entities, user intent/goals, constraints, audience signals. 3) \*\*Gap Fill via Placeholders\*\*: inject minimal {{PLACEHOLDER: label}} for missing criticals. 4) \*\*Recursive Enrichment Pass\*\*: - Role assignment; task decomposition (internal planning only); - Context amplification; constraint pinning; \*\*tone/style modulation\*\*; - Output structure + rubric (SxAxR). 5) \*\*Assemble Final Prompt\*\* using \*\*Prompt Patterns Toolbox\*\* (below) and user controls. 6) \*\*Generate Variants\*\* (0–3) with meaningful divergence (stricter vs exploratory, different rubrics/styles). 7) \*\*Self-Critique & Fix\*\*: validate against checklist; revise once (no infinite loops). PROMPT PATTERNS TOOLBOX: - Task & Role Priming (clear role/mission/constraints). - CUP (Context–Unambiguous task–Parameters) front-loaded. - SxAxR (Structure–Audience–Rubric) enforcement. - Guarded Reasoning: “think step-by-step internally; never reveal CoT.” - Few-Shot Slots (optional examples); if absent, add placeholder section. - Modes: {Conservative|Balanced|Creative} × Depth {Lean|Full|Scholarly}. - Constraint Pins (citations, tools, token budgets, safety). - Variable Surfaces {{var}} for easy edits. - Anti-Ambiguity Directives: ask clarifying Qs only if strictly required; otherwise state assumptions in brackets. - Error Budgeting for noisy/short inputs. QUALITY CHECKLIST (engine internal): - Singular, testable task; audience/domain explicit. - Enhancements preserve user intent; \*\*reversible\*\* (original↔enhanced view supported). - Output sections are labeled, ordered, copy-ready. - No CoT leakage; placeholders minimal and clear. - Variants differ materially in strategy or constraints. =============================== F) LLM OUTPUT CONTRACT (DEFAULT) =============================== Return Markdown with either one block (no variants) or three blocks (with variants): 1) \*\*FINAL ENHANCED PROMPT\*\* \[ROLE/PURPOSE\] You are {{ROLE}}. Mission: {{MISSION}}. \[CONTEXT\] {{key facts / domain / audience / objectives}} \[TASK\] Perform: {{explicit, testable task}} \[CONSTRAINTS\] • {{style, tone, citations, tools, limits}} • Safety: internal reasoning only; do not reveal chain-of-thought. \[OUTPUT FORMAT\] • {{ordered sections, fields, code fences if applicable}} \[EVALUATION / SUCCESS\] • {{acceptance criteria / rubric / checks}} \[PARAMETERS\] model: {{model}}, temperature: {{temp}}, max\_tokens: {{max}}, additional: {{params}} 2) \*\*OPTIONAL VARIANT A / B / C\*\* - Each variant uses a distinct strategy (e.g., stricter rubric vs creative latitude; different tone/audience). 3) \*\*PLACEHOLDER SUMMARY\*\* {{ROLE}} = … {{MISSION}} = … {{Audience}} = … {{Key constraints}} = … ================================= G) REWRITE / COPY / DELETE / EXPORT ================================= - Copy: one-click; toast confirm. - Rewrite: modal with intents (tighten, expand, simplify, add rubric, change domain/tone, add examples). Creates new Revision (linked in lineage). - Delete: soft-delete → Trash with 10s undo; restore/permanent delete. - Compare: pick any two revisions → inline word-level diff. - \*\*Export\*\*:.txt,.md,.json; \*\*external platforms/local vaults\*\* (pluggable adapters). ========================= H) PRESETS & POWER TOOLS ========================= - Presets: model params + pattern toggles + depth/modes + variants. - Built-ins: 1) Conservative Precision 2) Balanced Generalist 3) Creative Scholar 4) Engineer Specifier 5) Research Synthesizer - Users can clone/edit/save; default per Project and per Collection. ===================== I) SEARCH, TAGS, COLLECTIONS ===================== - Full-text search across titles/source/output. - Tags: freeform + color; quick-add; filters for \*\*Enhancement Type\*\* (role/task/rubric/tone). - \*\*Collections\*\*: folders/thematic sets; batch actions; archive obsolete versions. ========================== J) EDGE CASES & SAFEGUARDS ========================== - Empty/very short input → polite scaffold with placeholders. - Very long input → internal summarize-then-enhance; respect token budgets. - Sensitive/unsafe topics → auto-guardrails. - Non-English → maintain source language; UI honors locale. - Determinism toggle: temperature=0 under “Conservative Precision.” ==================== K) META-ANALYSIS ==================== - For each saved Revision, compute an \*\*AI Quality Report\*\*: - Clarity/specificity score; structure completeness; constraint coverage; potential risks (ambiguity, missing placeholders). - Suggested quick fixes and ideal preset. - Display in right drawer; include badges in Library list. ==================== L) TEST SCENARIOS ==================== Seed with examples: 1) Brain-dump “build me a startup pitch deck” → crisp investor-oriented prompt with slide schema + rubric. 2) Messy research notes on “LLM evals” → research-grade prompt (sources, citation style, failure modes, output schema). 3) Weak “code review bot” prompt → hardened spec (constraints, tooling, test cases, no CoT leak). 4) Creative brief → variants exploring POV/tone/theme. 5) \*\*Lineage\*\*: rewrite sequence across 3 passes; verify lineage graph and diffs. 6) \*\*Meta-analysis\*\*: show quality report and recommended preset. =================== M) ACCEPTANCE CRITERIA =================== - One-click Enhance returns a copy-ready prompt on typical inputs in <5s. - Variants (when requested) are materially distinct. - Original↔Enhanced toggle and side-by-side diff function correctly. - Library supports save, tag, search, \*\*collections\*\*, diff, \*\*lineage\*\*, export, archive, delete/restore. - Presets are persistent/editable; defaults apply. - \*\*AI Quality Report\*\* generated for saved revisions. - External export adapters function (at least one demo). - Accessibility, keyboard shortcuts, and dark mode verified. - No chain-of-thought revealed; placeholders used for missing info. - Deployed build runs with env-based AI keys and database. ===================== N) DELIVERY ARTIFACTS ===================== - Source (Next.js/TS) + README,.env.example, seed script. - Prisma schema + migrations. - Component tests (Enhancer orchestration, UI actions). - E2E smoke tests (Enhance → Save → Library → Copy/Export/Lineage). - Minimal, opt-in telemetry. # END OF BRIEF \*\*\*

---

Yes—what you pasted is the **entire** prompt, start to finish. You can drop it into Loveable exactly as-is (from the title through `# END OF BRIEF`) and it should build what we specified.

Is it “perfect”? Per your directive: there’s no such thing, but this is production-grade and implementation-ready. If you want absolute belt-and-suspenders rigor, append the tiny patch below right **before** `# END OF BRIEF` —it tightens scope and failure handling without bloating the brief.

---

### Optional micro-patch (add before # END OF BRIEF)

```markdown
pgsql=====================
O) NON-GOALS & GUARANTEES
=====================
Non-Goals (intentionally out of scope v1): multi-tenant teams, real-time collaboration, public sharing/marketplace, fine-tuning, custom embedding stores.
Hard Guarantees: no chain-of-thought disclosure, keyboard-accessible (WCAG 2.1 AA), unit/e2e tests for core flows, local-only mode honored, PII never logged.

========================
P) FAILURE & ERROR HANDLING
========================
- Provider rate-limits/errors → queued retry (exp backoff), graceful messages, keep partial output visible.
- Network/db errors → offline banner, autosave drafts to local storage, resume on reconnect.
- Streaming fallback → switch to non-streamed completion if stream fails.
- Oversized input → chunk/summarize internally with user notice; never truncate outputs silently.

====================
Q) IMPORTERS
====================
- Import existing prompts (.txt/.md/.json) and bulk import into Library; auto-tag by detected domain/type.
```

If you don’t need the patch, your current prompt is still strong enough to ship.

---

Is this the entire prompt from start to finish, and is the perfect prompt to give to Loveable to create exactly what we're asking for? \*\*\* # LOVEABLE BUILD BRIEF — ONE-CLICK AI PROMPT ENHANCER/GENERATOR (Merged+Upgraded) # Objective: Build a modular, remixable webapp that turns ANY input (brain-dump → final draft) into a God-Tier prompt via one click, with expert controls, lineage tracking, meta-analysis, and a reusable library. Usability first; architect for recursive thinkers and expert prompt engineers.:EXECUTE: ======================== A) APP CONCEPT & OUTCOME ======================== Name: Prompt Forge (renameable) North Star: User pastes text → clicks “Enhance” → app emits a surgically precise, high-performance prompt (plus optional variants) that: (1) clarifies task, audience, and intent, (2) enriches every key entity and expands essential context, (3) pins constraints and output format, (4) integrates cutting-edge prompt patterns, (5) preserves user intent with reversibility (original↔enhanced toggle), (6) is instantly reusable, organizable, and \*\*versioned with lineage\*\*. Primary Flow (one-click): 1) Input text (any fidelity). 2) Auto-detect input type + domain; \*\*semantic parse\*\* themes/entities/intent. 3) Enhancer Pipeline runs \*\*recursive enrichment\*\* (role assignment, task decomposition, tone/style calibration, output scaffolding, rubric). 4) Emit “Final Enhanced Prompt” + (optional) variants. 5) User can Copy / Save / Rewrite / Compare / Export. 6) Library stores all revisions with tags, folders/collections, lineage graph, notes, diffs, and \*\*AI meta-analysis\*\*. ====================== B) IMPLEMENTATION SPEC ====================== Stack: - Next.js (App Router) + TypeScript + TailwindCSS; SSR where helpful. - State: React Query (server) + Zustand/Context (UI). - DB: SQLite dev, Postgres/Supabase prod. ORM: Prisma. - Auth: Passwordless email or OAuth (toggle in settings). - AI: OpenAI/GPT-5 (configurable); model/temperature/top\_p/max\_tokens controls. - Deploy: Vercel-ready; env via.env. Architecture: \*\*Modular/Remixable\*\*. Encapsulate Enhancer Engine as service with pluggable “patterns” and “presets.” All features keyboard-accessible; WCAG 2.1 AA. Security/Privacy: Local-Only Mode toggle (no telemetry). Inputs/outputs never sent beyond configured AI provider. Performance: Debounced inputs; streaming when available; prompt/result caching. ======================== C) CORE DOMAINS & SCHEMAS ======================== (Prisma-style; adapt as needed) User { id, email, createdAt } Project { id, userId, name, description, createdAt, updatedAt } Entry { id, projectId, title, sourceText, detectedType, domain, metadata(json), createdAt } Revision { id, entryId, version, parentRevisionId, // <-- lineage engineConfig(json), outputText, notes, tags(string\[\]), aiQualityReport(json), // <-- meta-analysis archived(boolean) default false, createdAt } Collection { id, userId, name, description, createdAt, updatedAt } // folders/thematic sets CollectionItem { id, collectionId, kind('entry'|'revision'|'preset'), refId } Preset { id, userId, name, description, engineConfig(json), createdAt, updatedAt } Trash { id, kind('entry'|'revision'|'preset'|'collection'), payload(json), deletedAt } Tag { id, userId, name, color, createdAt } Indexes: userId on all user-owned tables; full-text on title/sourceText/outputText. =========================== D) PRIMARY UI & USER FLOWS =========================== Layout: - Left Sidebar: Projects, Library (All, Favorites, Tags, \*\*Collections\*\*), Presets, Trash. - Main: Input panel → Controls → Output panel (tabs for variants). - Right Drawer: Diff/Compare, \*\*Lineage\*\*, Notes, Metadata, \*\*Meta-Analysis\*\*. Screens: 1) \*\*Enhance\*\* - Textarea (paste/drag-drop) with counters; original↔enhanced toggle; side-by-side view. - Controls: Model, Temperature, Max tokens, Style (Conservative/Creative/Balanced), Depth (Lean/Full/Scholarly), Output Count (1–3), Domain (auto/manual). - Buttons: Enhance (primary), Rewrite, Copy, Save, New Variant, Clear, Export. - Output Tabs: Final, Variant A/B/C (if requested). - Quick Actions: Copy, Save as Revision, Tag, Favorite, Delete, Add to Collection. 2) \*\*Library\*\* - Faceted search: Project, Tags, Date, \*\*Enhancement Type\*\* (e.g., role/task/rubric/tone), Favorites. - Table/Card toggle; item preview (snippet, tags, last modified). - Item view: Source ↔ Enhanced; Compare revisions; \*\*Lineage graph\*\*; Notes; Copy; Export (.txt/.md/.json); “Open in external platform” (see Exports). 3) \*\*Presets\*\* - Create/Edit engine presets (model params + pattern toggles + depth + variants). - Import/Export Preset JSON; “Set as default.” 4) \*\*Collections\*\* - Create folders/thematic sets (e.g., “Marketing Hooks”, “Philosophical Templates”, “Code Generators”). - Drag-drop entries/revisions; batch actions. 5) \*\*Settings\*\* - API keys; defaults; Local-Only Mode; Auto-save; Autosuggest; naming scheme; date format; theme (light/dark/system). Keyboard Shortcuts: - ⌘/Ctrl+Enter Enhance - ⌘/Ctrl+C Copy current output - ⌘/Ctrl+S Save revision - ⌘/Ctrl+K Focus search - ⌘/Ctrl+Shift+D Diff/Compare - ⌘/Ctrl+L Lineage - Del Delete (confirm) ============================= E) ENHANCER ENGINE (LLM LOGIC) ============================= SYSTEM PROMPT (baked-in): “You are an Expert Prompt Architect. Transform any input (raw to polished) into a single, high-performance prompt (plus optional variants) that maximizes clarity, specificity, safety, and execution quality. Always: - Identify task, audience, domain, and intent. - Expand essential context; preserve user intent. - Specify constraints and output format; define success criteria/rubric. - Calibrate tone and style per controls; support multilingual. - Include anti-failure safeguards (internal reasoning only; \*\*no chain-of-thought disclosure\*\*). - Use placeholders {{LIKE\_THIS}} for genuinely missing info; never invent facts. - Output only final prompts/variants (no reasoning text).” ORCHESTRATION (internal, hidden): 1) \*\*Detect Input Type & Domain\*\*: {brain-dump|outline|partial|final|existing prompt} and domain (code, research, creative, business, etc.). 2) \*\*Semantic Parse\*\*: extract themes, key entities, user intent/goals, constraints, audience signals. 3) \*\*Gap Fill via Placeholders\*\*: inject minimal {{PLACEHOLDER: label}} for missing criticals. 4) \*\*Recursive Enrichment Pass\*\*: - Role assignment; task decomposition (internal planning only); - Context amplification; constraint pinning; \*\*tone/style modulation\*\*; - Output structure + rubric (SxAxR). 5) \*\*Assemble Final Prompt\*\* using \*\*Prompt Patterns Toolbox\*\* (below) and user controls. 6) \*\*Generate Variants\*\* (0–3) with meaningful divergence (stricter vs exploratory, different rubrics/styles). 7) \*\*Self-Critique & Fix\*\*: validate against checklist; revise once (no infinite loops). PROMPT PATTERNS TOOLBOX: - Task & Role Priming (clear role/mission/constraints). - CUP (Context–Unambiguous task–Parameters) front-loaded. - SxAxR (Structure–Audience–Rubric) enforcement. - Guarded Reasoning: “think step-by-step internally; never reveal CoT.” - Few-Shot Slots (optional examples); if absent, add placeholder section. - Modes: {Conservative|Balanced|Creative} × Depth {Lean|Full|Scholarly}. - Constraint Pins (citations, tools, token budgets, safety). - Variable Surfaces {{var}} for easy edits. - Anti-Ambiguity Directives: ask clarifying Qs only if strictly required; otherwise state assumptions in brackets. - Error Budgeting for noisy/short inputs. QUALITY CHECKLIST (engine internal): - Singular, testable task; audience/domain explicit. - Enhancements preserve user intent; \*\*reversible\*\* (original↔enhanced view supported). - Output sections are labeled, ordered, copy-ready. - No CoT leakage; placeholders minimal and clear. - Variants differ materially in strategy or constraints. =============================== F) LLM OUTPUT CONTRACT (DEFAULT) =============================== Return Markdown with either one block (no variants) or three blocks (with variants): 1) \*\*FINAL ENHANCED PROMPT\*\* \[ROLE/PURPOSE\] You are {{ROLE}}. Mission: {{MISSION}}. \[CONTEXT\] {{key facts / domain / audience / objectives}} \[TASK\] Perform: {{explicit, testable task}} \[CONSTRAINTS\] • {{style, tone, citations, tools, limits}} • Safety: internal reasoning only; do not reveal chain-of-thought. \[OUTPUT FORMAT\] • {{ordered sections, fields, code fences if applicable}} \[EVALUATION / SUCCESS\] • {{acceptance criteria / rubric / checks}} \[PARAMETERS\] model: {{model}}, temperature: {{temp}}, max\_tokens: {{max}}, additional: {{params}} 2) \*\*OPTIONAL VARIANT A / B / C\*\* - Each variant uses a distinct strategy (e.g., stricter rubric vs creative latitude; different tone/audience). 3) \*\*PLACEHOLDER SUMMARY\*\* {{ROLE}} = … {{MISSION}} = … {{Audience}} = … {{Key constraints}} = … ================================= G) REWRITE / COPY / DELETE / EXPORT ================================= - Copy: one-click; toast confirm. - Rewrite: modal with intents (tighten, expand, simplify, add rubric, change domain/tone, add examples). Creates new Revision (linked in lineage). - Delete: soft-delete → Trash with 10s undo; restore/permanent delete. - Compare: pick any two revisions → inline word-level diff. - \*\*Export\*\*:.txt,.md,.json; \*\*external platforms/local vaults\*\* (pluggable adapters). ========================= H) PRESETS & POWER TOOLS ========================= - Presets: model params + pattern toggles + depth/modes + variants. - Built-ins: 1) Conservative Precision 2) Balanced Generalist 3) Creative Scholar 4) Engineer Specifier 5) Research Synthesizer - Users can clone/edit/save; default per Project and per Collection. ===================== I) SEARCH, TAGS, COLLECTIONS ===================== - Full-text search across titles/source/output. - Tags: freeform + color; quick-add; filters for \*\*Enhancement Type\*\* (role/task/rubric/tone). - \*\*Collections\*\*: folders/thematic sets; batch actions; archive obsolete versions. ========================== J) EDGE CASES & SAFEGUARDS ========================== - Empty/very short input → polite scaffold with placeholders. - Very long input → internal summarize-then-enhance; respect token budgets. - Sensitive/unsafe topics → auto-guardrails. - Non-English → maintain source language; UI honors locale. - Determinism toggle: temperature=0 under “Conservative Precision.” ==================== K) META-ANALYSIS ==================== - For each saved Revision, compute an \*\*AI Quality Report\*\*: - Clarity/specificity score; structure completeness; constraint coverage; potential risks (ambiguity, missing placeholders). - Suggested quick fixes and ideal preset. - Display in right drawer; include badges in Library list. ==================== L) TEST SCENARIOS ==================== Seed with examples: 1) Brain-dump “build me a startup pitch deck” → crisp investor-oriented prompt with slide schema + rubric. 2) Messy research notes on “LLM evals” → research-grade prompt (sources, citation style, failure modes, output schema). 3) Weak “code review bot” prompt → hardened spec (constraints, tooling, test cases, no CoT leak). 4) Creative brief → variants exploring POV/tone/theme. 5) \*\*Lineage\*\*: rewrite sequence across 3 passes; verify lineage graph and diffs. 6) \*\*Meta-analysis\*\*: show quality report and recommended preset. =================== M) ACCEPTANCE CRITERIA =================== - One-click Enhance returns a copy-ready prompt on typical inputs in <5s. - Variants (when requested) are materially distinct. - Original↔Enhanced toggle and side-by-side diff function correctly. - Library supports save, tag, search, \*\*collections\*\*, diff, \*\*lineage\*\*, export, archive, delete/restore. - Presets are persistent/editable; defaults apply. - \*\*AI Quality Report\*\* generated for saved revisions. - External export adapters function (at least one demo). - Accessibility, keyboard shortcuts, and dark mode verified. - No chain-of-thought revealed; placeholders used for missing info. - Deployed build runs with env-based AI keys and database. ===================== N) DELIVERY ARTIFACTS ===================== - Source (Next.js/TS) + README,.env.example, seed script. - Prisma schema + migrations. - Component tests (Enhancer orchestration, UI actions). - E2E smoke tests (Enhance → Save → Library → Copy/Export/Lineage). - Minimal, opt-in telemetry. # END OF BRIEF \*\*\*

---

Yes. What you pasted is the **entire** prompt—from the title through `# END OF BRIEF` —and it’s implementation-ready for Loveable.

Two tiny tightening moves if you want absolute belt-and-suspenders:

1. **Keep formatting crisp:** wrap the “FINAL ENHANCED PROMPT” template and the “PLACEHOLDER SUMMARY” in triple backticks so Loveable preserves structure exactly.
2. **(Optional hardening)** Append the Non-Goals & Guarantees + Failure Handling + Importers micro-patch I gave earlier right before `# END OF BRIEF`. It improves resilience without changing scope.

If Loveable separates fields, put the **SYSTEM PROMPT (baked-in)** into the System field and keep the rest as the build brief in User. Otherwise, paste the whole thing exactly as you have it.

---

I need the prompt for thebine-click ai prompt Enhancer NOT to be reliant on backend coding. Loveable doesn't initially build apps in this manner.

---

```markdown
text# LOVEABLE BUILD BRIEF — ONE-CLICK AI PROMPT ENHANCER/GENERATOR
# FRONTEND-ONLY (NO BACKEND, NO SERVER, NO EXTERNAL DB)
# Objective: Ship a browser-only app that takes ANY input (brain-dump → final draft) and returns a God-tier prompt in one click. All storage is local (IndexedDB/LocalStorage). AI calls use Loveable’s built-in AI action OR user-supplied API key from the client. App must run offline for library/read and degrade gracefully when AI is unavailable.

:EXECUTE:

========================
A) APP CONCEPT & OUTCOME
========================
Name: Prompt Forge (renameable in settings)

North Star: Paste → Enhance → Copy/Save. The enhancer:
(1) clarifies task/audience/intent,
(2) enriches every key entity and essential context,
(3) pins constraints & output format,
(4) integrates cutting-edge prompt patterns,
(5) preserves user intent with reversible original↔enhanced views,
(6) stores all revisions locally with lineage, tags, collections, diffs, and meta-analysis.

Hard Constraints (must honor):
- 100% FRONTEND-ONLY. No servers, no Postgres/Prisma, no auth flow.
- Persistence = browser only (IndexedDB + LocalStorage).
- AI integration = Loveable Native AI Action; if not available, support BYOK (user-entered API key) used client-side.
- Offline-first library (read/search/diff). Enhancement disabled offline with a clear notice.
- No chain-of-thought disclosure. Never output internal reasoning.

Primary Flow (one click):
1) User pastes text (any fidelity).
2) Auto-detect type + domain; semantic parse themes/entities/intent locally.
3) Run Enhancer Engine (AI or heuristic fallback) → “Final Enhanced Prompt” + optional variants.
4) User can Copy / Save / Rewrite / Compare / Export.
5) Library persists locally (rev history, tags, collections, lineage, notes, diffs, meta-analysis).

====================================
B) FRONTEND ARCHITECTURE & STORAGE
====================================
Runtime: Single-page app (SPA) with component state + persistent local store.

State:
- UI state (panels, toggles, active revision) in reactive store.
- Data state persisted to IndexedDB; lightweight settings in LocalStorage.

Local Persistence:
- Use IndexedDB (Dexie or idb-keyval equivalent) for Entries/Revisions/Collections.
- Use LocalStorage for: UI theme, default preset, AI provider selection, and encrypted (or obfuscated) BYOK if used.

Local-Only Privacy:
- Never transmit user content except when the user triggers “Enhance” (then only to the selected AI provider).
- Provide a big, explicit “Local-Only Mode” toggle that disables any remote calls.

========================
C) DATA SHAPES (CLIENT)
========================
(TypeScript-style interfaces; implement as plain JSON if Loveable requires)

interface UserSettings {
  theme: 'light'|'dark'|'system';
  defaultPresetId?: string;
  aiProvider: 'loveable'|'openai'|'anthropic'|'none';
  apiKeyEncrypted?: string;        // optional, client-side only
  localOnlyMode: boolean;          // blocks all network calls
  determinism: boolean;            // temp=0 toggle
}

interface Project {
  id: string;
  name: string;
  description?: string;
  createdAt: number;
  updatedAt: number;
}

type DetectedType = 'brain_dump'|'outline'|'partial_draft'|'final_draft'|'existing_prompt';
type Domain = 'code'|'analysis'|'creative'|'research'|'business'|'other';

interface Entry {
  id: string;
  projectId?: string;
  title: string;
  sourceText: string;
  detectedType: DetectedType;
  domain: Domain;
  metadata?: Record<string, any>;
  createdAt: number;
}

interface Revision {
  id: string;
  entryId: string;
  version: number;
  parentRevisionId?: string;             // lineage
  outputText: string;
  engineConfig: EngineConfig;
  tags: string[];
  notes?: string;
  aiQualityReport?: AIQualityReport;     // meta-analysis
  archived?: boolean;
  createdAt: number;
}

interface EngineConfig {
  model?: string;
  temperature?: number;
  maxTokens?: number;
  style: 'Conservative'|'Balanced'|'Creative';
  depth: 'Lean'|'Full'|'Scholarly';
  variants: 0|1|2|3;
  domain?: Domain;
}

interface AIQualityReport {
  clarity: number;            // 0–100
  specificity: number;        // 0–100
  structureCompleteness: number;
  constraintCoverage: number;
  risks: string[];            // e.g., “ambiguous audience”
  suggestions: string[];      // quick fixes
  recommendedPresetId?: string;
}

interface Collection { id: string; name: string; description?: string; createdAt: number; updatedAt: number; }
interface CollectionItem { id: string; collectionId: string; kind: 'entry'|'revision'; refId: string; }
interface Tag { id: string; name: string; color?: string; }

Indexes (client-side):
- by createdAt, by title, by tags, by projectId.

===========================
D) PRIMARY UI & USER FLOWS
===========================
Layout:
- Left Sidebar: Projects, Library (All, Favorites, Tags, Collections), Presets, Trash.
- Main: Input panel → Controls → Output panel (tabs for variants).
- Right Drawer: Diff/Compare, Lineage, Notes, Metadata, Meta-Analysis.

Screens:
1) **Enhance**
   - Input Textarea (paste/drag-drop) with counters & “original↔enhanced” toggle; side-by-side view.
   - Controls: Model (dropdown), Temperature (slider), Max tokens, Style (Conservative/Creative/Balanced), Depth (Lean/Full/Scholarly), Output Count (0–3 variants), Domain (auto/manual).
   - Buttons per output: Enhance (primary), Rewrite, Copy, Save, New Variant, Clear, Export.
   - Quick Actions: Tag, Favorite, Add to Collection, Delete (soft).

2) **Library**
   - Faceted search: Project, Tags, Date, Enhancement Type (role/task/rubric/tone), Favorites.
   - Table/Card toggle. Item view shows Source↔Enhanced, Compare revisions, Lineage, Notes, Copy, Export (.txt/.md/.json).

3) **Presets**
   - Create/Edit presets (model params + pattern toggles + depth + variants).
   - Import/Export preset JSON. Set default preset.

4) **Collections**
   - Create thematic sets (e.g., “Marketing Hooks”, “Philosophical Templates”, “Code Generators”).
   - Drag-drop entries/revisions; batch copy/export/delete.

5) **Settings**
   - AI Provider: Loveable Native / BYOK (OpenAI/Anthropic) / None (offline).
   - Local-Only Mode toggle; Determinism (temp=0); Auto-save; Autosuggest; date format; theme.

Keyboard Shortcuts:
- ⌘/Ctrl+Enter Enhance
- ⌘/Ctrl+C Copy current output
- ⌘/Ctrl+S Save revision
- ⌘/Ctrl+K Focus search
- ⌘/Ctrl+Shift+D Diff/Compare
- ⌘/Ctrl+L Toggle Lineage
- Del Delete (confirm)

=====================================
E) ENHANCER ENGINE (LLM + FALLBACKS)
=====================================
Provider Strategy (no backend):
- **Primary:** Loveable’s built-in AI Action (no custom server).
- **Alternative BYOK:** user pastes API key; store locally; client-side fetch with CORS-friendly endpoints only; warn about key exposure risks; allow “mask key on screen.”
- **Offline/No-AI Fallback:** Heuristic Template Mode (HTM) generates a structured prompt scaffold using local rules/patterns when AI is unavailable.

System Prompt (baked-in for AI path):
“You are an Expert Prompt Architect. Transform any input (raw→polished) into a single, high-performance prompt (plus optional variants) that maximizes clarity, specificity, safety, and execution quality. Always:
- Identify task, audience, domain, and intent.
- Expand essential context; preserve user intent.
- Specify constraints and output format; define success criteria/rubric.
- Calibrate tone and style per controls; support multilingual.
- Include anti-failure safeguards (internal reasoning only; no chain-of-thought disclosure).
- Use placeholders {{LIKE_THIS}} for genuinely missing info; never invent facts.
- Output only final prompts/variants (no reasoning text).”

Heuristic Template Mode (HTM) — offline logic (no AI):
- Detect input type & domain with regex/keyword heuristics.
- Extract capitalized terms/quoted phrases as candidate entities.
- Build a structured prompt with CUP + SxAxR patterns and placeholders for gaps.
- Add a compact rubric and output schema.
- Mark banner: “Generated via Heuristic Template (offline). Use AI for refinement.”

==================================
F) ORCHESTRATION (CLIENT-SIDE)
==================================
Hidden Steps (UI shows only results):
1) Detect Input Type & Domain (rule-based + optional AI if available).
2) Semantic Parse (AI path) or Heuristic Extract (HTM).
3) Gap-Fill with minimal {{PLACEHOLDER: label}}.
4) Recursive Enrichment:
   - Role assignment (clear, not theatrical);
   - Task decomposition (internal only);
   - Context amplification; constraint pins;
   - Tone/style modulation;
   - Output structure + rubric (SxAxR).
5) Assemble Final Prompt (apply selected preset & parameters).
6) Generate Variants (0–3) with meaningful divergence (e.g., stricter rubric vs creative latitude).
7) Self-Critique & Fix (one pass, internal only).
8) Emit copy-ready blocks.

==========================
G) PROMPT PATTERNS TOOLBOX
==========================
- Task & Role Priming (mission + constraints up front).
- CUP: Context – Unambiguous Task – Parameters.
- SxAxR: Structure – Audience – Rubric.
- Guarded Reasoning: “think step-by-step internally; never reveal CoT.”
- Few-Shot Slots (optional); if absent, include a placeholder examples block.
- Modes: {Conservative|Balanced|Creative} × {Lean|Full|Scholarly}.
- Constraint Pins: citations, tools, style, token budget, safety clause.
- Variable Surfaces: {{VAR}} regions for quick edits.
- Anti-Ambiguity: ask clarifying Qs only if strictly required; otherwise show assumptions in brackets.
- Error Budgeting: robust outputs from noisy/short inputs.

=================================
H) LLM OUTPUT CONTRACT (DEFAULT)
=================================
Return Markdown with one block (no variants) or multiple (variants). **Wrap templates in triple backticks** so structure is preserved.

1) **FINAL ENHANCED PROMPT**
```

\[ROLE/PURPOSE\]  
You are {{ROLE}}. Mission: {{MISSION}}.

\[CONTEXT\]  
{{key facts / domain / audience / objectives}}

\[TASK\]  
Perform: {{explicit, testable task}}

\[CONSTRAINTS\]

- {{style, tone, citations, tools, limits}}
- Safety: internal reasoning only; do not reveal chain-of-thought.

\[OUTPUT FORMAT\]

- {{ordered sections, fields, code fences if applicable}}

\[EVALUATION / SUCCESS\]

- {{acceptance criteria / rubric / checks}}

\[PARAMETERS\]  
model: {{model}}, temperature: {{temp}}, max\_tokens: {{max}}, additional: {{params}}

{{ROLE}} = …  
{{MISSION}} = …  
{{Audience}} = …  
{{Key constraints}} = …

```markdown
pgsql
=============================
I) REWRITE / COPY / DELETE UI
=============================
- Copy: one-click per block; toast confirm.
- Rewrite: modal with intents (tighten, expand, simplify, add rubric, change domain/tone, add examples). Produces a new Revision linked in lineage.
- Delete: soft-delete into Trash with 10s undo; restore/permanent delete.
- Diff/Compare: select any two revisions → inline word-level diff with copy buttons.

=========================
J) LIBRARY & DISCOVERY
=========================
- Full-text search across titles, source, output.
- Tags: freeform + color; quick-add; filter by Enhancement Type (role/task/rubric/tone).
- Collections: thematic folders; drag-drop; batch actions.
- Lineage: mini-graph showing evolution across rewrites.
- Notes: per-revision notebook.

=====================
K) EXPORT & IMPORT
=====================
- Export: .txt, .md, .json (single or batch). Client-side only.
- Import: load existing prompts (.txt/.md/.json) into Library; auto-tag by detected domain/type.
- External Platforms: provide copy-to-clipboard templates (no integrations required); optional per-platform formatting presets.

==========================
L) META-ANALYSIS (LOCAL)
==========================
- AI path: request a compact quality report (scores + suggestions).
- Offline HTM: compute a heuristic report (keyword coverage, section completeness, placeholder count) and surface basic suggestions.

==========================
M) EDGE CASES & SAFETY
==========================
- Empty/short input → emit a minimal scaffold with placeholders.
- Very long input → summarize locally (if AI available) or prompt user to narrow scope; never silently truncate.
- Sensitive topics → automatically include neutral guardrails.
- Non-English input → preserve source language; UI stays locale-aware.
- Determinism toggle → set temperature=0 when enabled.

====================
N) OFFLINE & PWA
====================
- PWA installable; cache app shell with Service Worker.
- Library fully usable offline (read/search/diff).
- “Enhance” button disabled offline with tooltip explaining why.
- Auto-save drafts locally; resume on reload.

=========================
O) FAILURE HANDLING (FE)
=========================
- Provider rate-limit/error → friendly message, retry option with exponential backoff.
- Network error → offline banner; preserve partial outputs; allow export of current state.
- Streaming failure → fall back to non-streamed completion.
- Oversized input → chunk client-side with user prompt; never lose text.

====================
P) TEST SCENARIOS
====================
Seed locally with sample entries to validate:
1) Brain-dump “build me a startup pitch deck” → investor-oriented prompt with slide schema + rubric.
2) Messy “LLM evals” notes → research-grade prompt (sources, citation style, failure modes, output schema).
3) Weak “code review bot” prompt → hardened spec (constraints/tools/tests; no CoT leak).
4) Creative brief → variants for POV/tone/theme.
5) Lineage: 3 rewrites visibly linked; diff works.
6) Meta-analysis: quality badges show and update.

===================
Q) ACCEPTANCE CRITERIA
===================
- Entire app runs with ZERO backend.
- One-click Enhance produces a copy-ready prompt on typical inputs in <5s (AI available).
- Variants (when requested) are materially distinct.
- Original↔Enhanced toggle & side-by-side diff function correctly.
- Library persists across reloads (IndexedDB) and supports search, tags, collections, lineage, notes, export/import, archive, delete/restore.
- Heuristic Template Mode provides a usable scaffold when AI is unavailable.
- Accessibility (keyboard navigation + ARIA labels) and dark mode verified.
- No chain-of-thought disclosed; placeholders for genuinely missing info only.

=====================
R) NON-GOALS (V1)
=====================
- Multi-user collaboration, sharing/marketplace, cloud sync, custom vector stores, fine-tuning.

# END OF BRIEF
```

2/2

