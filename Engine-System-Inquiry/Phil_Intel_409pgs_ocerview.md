---
title: Phil Intel 400pgs Overview
created: 2025-11-05
updated: 2025-11-20T04:22:00
tags:
backlink: "[["
description:
---

This 644-page behemoth is a full-blown Philosophical Infrastructure System (PIS): code + spec + metrics + governance for doing philosophy like a disciplined science project, with hashes, proofs, DAGs, and a change log. Think “CERN for arguments” rather than “nice notebook of thoughts.”

  

Let’s go through it in dense layers.

  

  

  

  

1. Global Picture: What This System Actually Is

  

  

At the highest level, the document defines and implements:

  

- A typed ontology for philosophical work: concepts, claims, arguments, objections, theses, hypotheses, text spans, runs, provenance.
- A graph substrate with argumentation semantics (supports, defeats, undercuts, contradicts, analogizes, depends_on, etc.) backed by Dung-style acceptability (grounded, preferred, stable).
- A formal logic layer: FOL, modal (S4/S5), deontic, temporal, paraconsistent LP/M3, with Z3 / CVC5 / Isabelle–Coq as backends.
- A Minimax Adversarial Loop for each argument: steelman → red-team → formalize → countermodel → repair → completion/failure, all with blockchain-style audit trails.
- An AI toolchain discipline: retrieval, formalization, summarization, red-teaming, all under constraints (no uncited sentences, no undefined terms, no silent logic shifts).
- A query language (φQL) and notebook IDE: click from sentence → claim → formal proof → provenance tree.
- A reproducible orchestration layer: declarative DAGs, snapshot manifests, SHA-256 checksums, methods capsules; phases 1–13 with gates G1–G6.
- A set of non-negotiable rules: no mutable histories, no orphan claims, all runs traceable and re-runnable.

  

  

Everything is oriented toward a core pattern:

  

Take a thesis → define terms → build arguments → formalize → prove/refute → track status + provenance → expose via interfaces.

  

  

  

  

2. Core Ontology: Entities and Their Constraints

  

  

The controlled vocabulary and schemas are the backbone. The spec freezes a version (PIS_SPEC.md) with a SHA-256 hash and then defines entities in VOCAB.md plus JSON schemas.

  

  

2.1 Concept

  

  

Definition: A unit of philosophical meaning with one or more sense-disambiguated definitions.

  

Key fields:

  

- id (UUID)
- definitions[] – each a structured definition (with text, scope, examples, etc.)
- relations[] – typed edges to other concepts (e.g., contradicts, entails, is_part_of)
- status – draft | approved | deprecated
- provenance – full creation / modification record

  

  

Constraints:

  

- Every Concept must have at least one Definition.
- If multiple definitions → they must be scoped (where/when each sense applies).
- Changes to Concept definitions trigger an impact analysis on dependent Claims.

  

  

Example pattern:

{

  "id": "concept-001",

  "definitions": [

    {

      "text": "Nothingness as the absence of all determinate beings",

      "scope": "metaphysical",

      "examples": [...]

    }

  ],

  "relations": [

    { "type": "contradicts", "target": "concept-002" }

  ],

  "status": "approved"

}

  

  

  

  

2.2 Claim

  

  

Definition: A propositional statement with truth-conditions, optionally formalized.

  

Key fields:

  

- id (UUID)
- text – natural language statement
- formal_repr – logical formula (optional)
- stance – affirm | deny | neutral | conditional
- scope – domain and boundary conditions
- confidence – float 0.0–1.0 (epistemic certainty)
- source_spans[] – links to TextUnits in corpus
- proof_status – proven | refuted | open | undecidable
- provenance – full audit trail

  

  

Constraints:

  

- Every Claim must link to at least one TextUnit (no “free-floating” claims).
- Claims with formal_repr must have proof_status.
- Claims used as premises must have defined scope.
- Claims may not reference undefined Concepts.
- Claims must not omit provenance.

  

  

So a Nihiltheistic claim like “If nothing exists, no values can be instantiated” would be:

{

  "id": "claim-001",

  "text": "If nothing exists, no values can be instantiated",

  "formal_repr": "¬∃x (Exists(x)) → ¬∃v (Value(v))",

  "stance": "affirm",

  "scope": { ... },

  "confidence": 0.82,

  "source_spans": ["txt-0231"],

  "proof_status": "open",

  "provenance": { ... }

}

  

  

  

  

2.3 Argument

  

  

Definition: A structured inference from premises to a conclusion, using a specified scheme.

  

Key fields:

  

- id (UUID)
- premises[] – IDs of Claims
- conclusion – a Claim
- scheme – modus_ponens | analogy | abduction | induction | reductio | ...
- defeaters[] – Objection IDs that attack this argument
- acceptability_status – grounded | preferred | stable | out
- provenance – construction history

  

  

Constraints:

  

- Every Argument must have ≥ 1 premise and exactly one conclusion.
- Must specify scheme (no scheme-less “arguments”).
- Acceptability computed via Dung AF semantics.
- Arguments cannot use claims with undefined terms.
- Once an objection is known, it must be registered as a defeater; you’re not allowed to conveniently forget it.

  

  

  

  

  

2.4 Objection

  

  

Definition: An attack on an Argument or Claim, categorized by type and strength.

  

Key fields:

  

- id (UUID)
- targets[] – IDs of Argument(s) or Claim(s) attacked
- type – e.g., undercut | rebuttal | undermining | scope_challenge | assumption_challenge
- strength – float 0.0–1.0
- text – objection content
- provenance

  

  

Example from the spec:

  

Type undercut, strength 0.7, text:

“The argument assumes bivalence, but this fails under paraconsistent logic.”

  

So the system explicitly supports logic-regime attacks.

  

  

  

  

2.5 Thesis

  

  

Definition: A high-level philosophical position comprising multiple claims and arguments.

  

Key fields:

  

- id
- statement – core thesis sentence
- assumptions[] – background Claims
- arguments[] – supporting Arguments
- scope – where it is supposed to hold
- rivals[] – competing Theses
- provenance

  

  

This is the “big statement” level—e.g., “Nihilistic despair is the only honest epistemic response to the human condition”—surrounded by its claims, arguments, rivals, and assumptions.

  

  

  

  

2.6 Hypothesis, TextUnit, Provenance, Run

  

  

The spec also includes:

  

- Hypothesis – a tentative, testable cluster of claims; often used for research recipes.
- TextUnit – smallest textual chunk (span of a document) with metadata (source, location, license).
- Provenance – generic object that records:  
    

- author / agent,
- timestamps,
- transformation steps,
- parent entities.

-   
    
- Run – a specific execution of the pipeline:  
    

- configuration, seeds, toolchain version,
- outputs, hashes,
- success/failure of gates.

-   
    

  

  

All have schemas + synthetic examples validated.

  

  

  

  

3. Argument Graph & Relations

  

  

Beyond individual entities, the system defines a graph substrate with rich relational vocabulary.

  

  

3.1 Edge Types

  

  

From the spec:

  

- supports – Argument supports Claim.
- defeats – Objection defeats Argument.
- undercuts – Objection attacks the link between premises and conclusion.
- rebuts – Objection asserts a contrary conclusion to a Claim.
- analogizes – “X is analogous to Y” edges for analogy-based reasoning.
- depends_on – dependency (Thesis or Claim depends on another Claim or Concept).
- contradicts – symmetric contradiction relation.
- instantiates – scenario or example instantiates a general Claim or Concept.

  

  

There’s explicit logic for edge consistency:

  

- contradicts must be symmetric.
- References must point only to existent nodes; otherwise, graph-validation flags issues.

  

  

  

3.2 Argumentation Framework

  

  

The system encodes Dung’s Argumentation Framework:

  

- Acceptability semantics: grounded, preferred, stable.
- A “golden micro-corpus” of 50 arguments is used to ensure multiple toolchains produce identical acceptability results across seeds.

  

  

So your graph is not just a tangle of arrows; it’s a semantically evaluated AF.

  

  

  

  

4. Formal Logic Layer

  

  

The formal layer is heavy-duty.

  

  

4.1 Logic Modules

  

  

The system installs multiple logic “modules”:

  

- FOL (First-Order Logic).
- Modal logics: S4 and S5.
- Deontic logic.
- Temporal logic.
- Paraconsistent logics: LP, M3.

  

  

Each module is a JSON spec (fol_module.json, s4_module.json, etc.) with hashes recorded in the metrics.

  

  

4.2 NL → Logic Templates

  

  

There’s a library of natural-language-to-logic templates covering:

  

- Quantifiers and domains.
- Modality (possibility, necessity).
- Normativity (obligation, permission).
- Temporality (always, sometimes, eventually).
- Paraconsistency (explicitly allowing inconsistent but non-trivial states).

  

  

The spec reports:

  

- 24 mapping templates.
- 30 claims tested, 100% template coverage.

  

  

  

4.3 Solver Backend Integration

  

  

Backends:

  

- Z3 (installed; smoke proofs run).
- CVC5 and Isabelle/Coq discussed; some availability simulated in code, but integration planned.
- A countermodel generator builds libraries such as:  
    

- fol_countermodels.json
- modal_countermodels.json
- paraconsistent_countermodels.json, etc.

-   
    

  

  

Metrics:

  

- 30 template proofs, 100% success.
- Smoke proofs (e.g., modus ponens) complete within time limits.
- Gate G3 requires ≥90% proof success; achieved 100%.

  

  

So it’s not just “logic-flavored”; it actually runs proofs and records whether your formalization holds.

  

  

  

  

5. The Minimax Adversarial Loop

  

  

This is the central cognitive machine.

  

  

5.1 LoopStatus

  

  

States:

  

- INITIATED
- STEELMANNED
- CRITIQUED
- FORMALIZED
- COUNTERMODELED
- REPAIRED
- COMPLETED
- FAILED

  

  

They define a finite-state process for each argument.

  

  

5.2 AdversarialLoop Class

  

  

Each instance tracks:

  

- argument_id
- initial_claim
- status
- history[] – chronological events
- current_version – dict with:  
    

- claim
- version
- possibly steelman_data, formal_data, etc.

-   
    
- countermodels[]
- repairs[]

  

  

Core methods (conceptually):

  

1. steelman_phase()  
    

- Strengthens the claim:  
    

- clarifies terms,
- specifies scope,
- makes modality explicit,
- highlights assumptions.

-   
    
- Updates current_version and logs steelman_complete.

3.   
    
4. redteam_phase()  
    

- Generates objections:  
    

- counterexamples,
- hidden assumptions,
- scope violations,
- category errors.

-   
    
- Each with a severity score.
- Logs critique_complete.

6.   
    
7. formalize_phase()  
    

- Converts strengthened claim + arguments into a logic representation.
- Picks appropriate logic module (FOL, modal, deontic, etc.).
- Logs formalization_complete.

9.   
    
10. countermodel_phase()  
    

- Uses solvers to search for countermodels.
- Records each countermodel with its logic, structure, and why it breaks the claim.
- Logs countermodel_found or none_found.

12.   
    
13. repair_phase()  
    

- Adjusts premises, scope, or modality to repair exposed weaknesses.
- Adds “repair entries” to repairs[].
- Updates current_version and status.

15.   
    
16. completion/termination  
    

- If argument survives tests → COMPLETED.
- Persistent or fatal failures → FAILED.

18.   
    

  

  

All of this writes into a ledger and returns:

  

- ledger_path, ledger_hash, total_loops.

  

  

So every argument is a self-contained adversarial experiment.

  

  

  

  

6. Audit Trail & Provenance Chain

  

  

Parallel to AdversarialLoop is a blockchain-like audit system:

  

- Each event in the argument’s lifecycle:  
    

- has an index,
- a step_type,
- details,
- prev_hash,
- and its own hash (computed via SHA-256 over content).

-   
    
- verify_integrity() recomputes the chain and ensures there’s no tampering.

  

  

There are similar mechanisms for:

  

- Dialogs:  
    

- DialogManager with a dialog_ledger.json and a dialog_history.

-   
    
- Corpus/graph snapshots:  
    

- SNAPSHOT_MANIFEST.json with each file and hash.

-   
    
- Phase summaries:  
    

- phase report markdown (PHASE_5_REPORT.md, etc.) with recorded SHA-256.

-   
    

  

  

The system can, in principle, prove that:

  

“This final thesis is the endpoint of this exact sequence of steelmanning, red-teaming, repairs, and model updates.”

  

No mutable histories.

  

  

  

  

7. AI Toolchain Discipline

  

  

The spec is very strict about LLM usage.

  

Key norms:

  

- Retrieval: hybrid BM25 + dense + graph constraints; argument-tuned cross-encoder re-ranking.
- Term Disciplinarian: blocks drafts that use undefined terms.
- Formalizer: either emits valid logic or emits cannot_formalize(reason). Silent hallucinated formalizations are forbidden.
- Steelman / Red-Team pairing: two LLM roles with shared context but disjoint prompts for diversity.
- Summarizer: outputs must be fully cited; no uncited sentences allowed in public outputs.

  

  

Gates:

  

- G4 AI: 0 uncited sentences is required for success.

  

  

In short, the AI is treated as a toolchain under constraints, not an oracle.

  

  

  

  

8. φQL and Query Stability

  

  

There’s a φQL query system over the graph:

  

- Commands to:  
    

- find all arguments supporting a given claim,
- trace provenance,
- inspect status lights (acceptability, proof status),
- navigate from sentence → claim → proof.

-   
    

  

  

There are canned query tests ensuring:

  

- Stability across runs (hash-based).
- A summary: total queries, stable vs. unstable, stability rate, hash of result file.

  

  

So even the query layer is under regression testing.

  

  

  

  

9. Interfaces: Notebook IDE & APIs

  

  

The spec describes an IDE with:

  

- Text pane – corpus text and annotations.
- Formal pane – logic formulas, proof statuses.
- Graph pane – visual argument map.

  

  

Capabilities:

  

- Click from sentence → claim → proof trace.
- Status indicators (“status lights”) for each entity:  
    

- e.g., proof status, AF acceptability, gate status.

-   
    
- Export APIs:  
    

- JSON, RDF, and “Capsule Bundle” formats.
- Endpoints like /api/export/json, /api/export/rdf, /api/export/capsule.

-   
    

  

  

UI tests are defined and pass (5/5, as per one section).

  

  

  

  

10. Orchestration, Reproducibility, Archival

  

  

  

10.1 Orchestration

  

  

All runs are executed via declarative DAGs:

  

- No ad-hoc scripts in production.
- Each run emits a methods capsule:  
    

- configs,
- random seeds,
- model versions,
- budgets,
- hashes,
- environment metadata.

-   
    

  

  

Acceptance criterion:

  

- “Cold rerun suite passes on separate machine”:  
    

- same hashes,
- or drift explicitly explained.

-   
    

  

  

  

10.2 Snapshots & Archival

  

  

An archival script:

  

- Walks all relevant files (207 total, in one snapshot).
- Computes SHA-256 hashes.
- Generates SNAPSHOT_MANIFEST.json.
- Produces a compressed archive with its own hash.
- Records:  
    

- Version, Release Tag, Timestamp,
- snapshot name,
- archive path and hash.

-   
    

  

  

The archive is the “frozen” state for a production release.

  

  

  

  

11. Phases and Gates

  

  

  

11.1 Phases

  

  

We get a 13-phase storyline (the summary page lists):

  

1. Spec & schema definition.
2. Corpus & provenance.
3. Graph construction.
4. Consistency validation.
5. Argument graph construction.
6. Formal logic integration.
7. AI toolchain development.
8. Reasoning methods implementation.
9. φQL query system.
10. Metrics & gates.
11. Orchestration & reproducibility.
12. Interfaces.
13. Orchestration / validation batch (depending how you slice it).

  

  

All are marked ✅ in the final summary.

  

  

11.2 Gates G1–G6

  

  

Global gates enforce the quality bar:

  

- G1: Ingestion / metadata  
    

- ≥ 99% metadata accuracy.

-   
    
- G2: Graph  
    

- 0 shape violations.

-   
    
- G3: Formal  
    

- ≥ 90% proof success on gold set (actual: 100%).

-   
    
- G4: AI  
    

- 0 uncited sentences.

-   
    
- G5: Reproducibility  
    

- identical hashes across 3 reruns.

-   
    
- G6: Ethics  
    

- disclosure and risk checklist complete.

-   
    

  

  

All are reported as PASS.

  

  

  

  

12. Mandatory Directives and Non-Negotiables

  

  

The PIS_SPEC ends with a block of “MANDATORY DIRECTIVES” and “Non-Negotiables.”

  

Highlights:

  

- Global invariants:  
    

1. Every artifact: id, hash, version, timestamp, author, toolchain, license.
2. Every claim links to source spans and proof status.
3. Every transformation deterministic or seeds/configs recorded.
4. No conclusion without provenance.
5. No logic regime changes without explicit declaration.
6. Contradictions logged, never hidden; paraconsistency is explicit.

-   
    
- Bootstrap discipline:  
    

1. Create repos (corpus, graph, formal, workflows, orchestrator, ui).
2. CI gates for formatting, lint, tests, reproducibility.
3. PIS_SPEC.md hash is frozen; any change must be versioned.

-   
    
- Vocabulary discipline:  
    

1. VOCAB.md + JSON schemas.
2. 100 synthetic examples per schema; zero validation failures required.

-   
    
- Argumentation substrate:  
    

1. Implement edges and AF semantics.
2. Golden micro-corpus matching across toolchains.

-   
    
- Formal layer:  
    

1. Provide logic modules and mapping templates.
2. Achieve proof+counterspec benchmarks.

-   
    
- AI discipline:  
    

1. Retrieval constraints, no hallucinated formalizations.
2. Steelman/red-team pairing with disjoint prompts.
3. 0 uncited sentences.

-   
    
- Orchestration:  
    

1. All runs via DAG; each run yields capsule.

-   
    
- Failure handling:  
    

1. Contradictions mark node as inconsistent and trigger paraconsistent re-run tag.
2. Unverifiable claims quarantined with minimal repro case.
3. Definition drift freezes affected modules until impact analysis.

-   
    
- Operational loop (explicit pseudo-code):

  

for T in Project:

    T* = Steelman(T)

    D  = DefineTerms(T*)

    A  = BuildArguments(T*, corpus, graph)

    F  = Formalize(A)

    R  = ProveOrRefute(F)

    S  = EvaluateDialectically(T*, semantics='grounded')

    Record(T*, S, metrics, provenance)

    if any gate fails: HALT and open issue

  

-   
    
- Deliverables per thesis:  
    

- Thesis card (scope + assumptions).
- Living argument map with status lights.
- Methods capsule.
- Change log explaining belief updates.
- Public APIs for queries.

-   
    
- Non-negotiables:  
    

- No uncited sentences.
- No undefined terms in arguments.
- No silent logic shifts.
- No mutable histories; edits are append-only diffs.

-   
    

  

  

That list is basically the constitutional law of the entire system.

  

  

  

  

13. Failure Handling and Drift

  

  

The FailureHandler class and spec language formalize:

  

- Contradiction:  
    

- Incident created:  
    

- type: contradiction
- entity_id
- details
- status: "marked_inconsistent"
- recovery_action: "paraconsistent_rerun"

-   
    
- Logged with timestamp.

-   
    
- Quarantine:  
    

- Claims can be quarantined for reasons like unverifiability.
- Quarantined claims do not participate in trusted runs.

-   
    
- Definition drift:  
    

- On detecting drift:  
    

- Freeze affected modules;
- Run impact analysis:  
    

- list affected entities,
- severity,
- recommended action.

-   
    

-   
    

-   
    

  

  

Impact analysis is framed as:

  

“Traverse dependency graph; compute severity; recommend review or overhaul.”

  

So the system treats logical and semantic drift as first-class incidents.

  

  

  

  

14. Example Research Recipe: Nihiltheism

  

  

One section explicitly sketches a research recipe for Nihiltheism (labelled as #11 in a list of recipes):

  

Scope:

  

- "Nothingness", "value", "creation", "axiology-from-void"

  

  

Pattern:

  

1. Define hypotheses H1 / H2 about the relation between Nothingness and value/creation.
2. Encode them into the Thesis / Claim / Argument graph:  
    

- H1: maybe “Values cannot be grounded in Nothingness.”
- H2: maybe “Values are emergent artifacts of Nothingness.”

4.   
    
5. Seed corpus:  
    

- Journal314, mystical texts, Cioran, etc., tagged as TextUnits.

7.   
    
8. Register rival positions:  
    

- naturalist, existentialist, theistic-grounding attempts, etc.

10.   
    
11. Run adversarial loops across logics:  
    

- standard FOL,
- modal (necessity/possibility of Nothingness),
- deontic (obligation and nihilism),
- paraconsistent (handling contradictions like “God is Nothingness”).

13.   
    
14. Log repair costs:  
    

- which thesis requires how many repairs, under which objections, in which logics.

16.   
    
17. Publish:  
    

- a resilient subgraph slice,
- a capsule with methods, proofs, countermodels, and history.

19.   
    

  

  

Deliverables:

  

- A living argument map for Nihiltheism, with:  
    

- status lights (proof status, acceptability, AF semantics),
- traces from text quotes to claims to formal arguments to solver runs,
- explicit rival theses and their relative resilience.

-   
    

  

  

So the system isn’t just general-purpose; it explicitly anticipates the use-case you’re actually pursuing.

  

  

  

  

15. How It Behaves in Practice (Conceptual Walkthrough)

  

  

Take one Nihiltheistic thesis:

  

T: “All attempts to ground value in human subjectivity collapse under exposure to Nothingness.”

  

The system demands:

  

1. Steelman T:  
    

- Clarify “value,” “ground,” “subjectivity,” “collapse,” “exposure to Nothingness.”
- Produce precise Concept nodes with scoped definitions.

3.   
    
4. Define Terms (Concept Audit):  
    

- Run the concept-audit pipeline:  
    

- collect uses across corpus → cluster meanings → define senses → map entailments/exclusions.

-   
    
- Equivocation detector tracks inconsistent uses and must trend down over iterations.

6.   
    
7. Build Arguments:  
    

- Extract support from text (say, Cioran, Zapffe, etc.).
- Construct Arguments with explicit schemes (e.g., reductio against subjectivist grounding).

9.   
    
10. Formalize:  
    

- For each argument, choose logic (FOL, modal, etc.).
- Use templates to map NL to formulas.
- Reject or flag claims that cannot be formalized meaningfully.

12.   
    
13. Prove or Refute:  
    

- Run solvers to test validity.
- Look for countermodels:  
    

- e.g., a model where subjectivity-based value does not collapse despite something like a “Nothingness” operator.

-   
    

15.   
    
16. Evaluate Dialectically:  
    

- Insert arguments into AF.
- Compute acceptability (grounded extension, etc.).
- Record which arguments survive undefeated.

18.   
    
19. Record Everything:  
    

- Log every step with hashes, timestamps, and provenance.
- Store a ledger per argument + per dialog.

21.   
    

  

  

If any gate fails (e.g., uncited sentence, undefined term, low proof success rate), the system halts for that thesis and opens an issue.

  

  

  

  

16. What This Document Ultimately Gives You

  

  

This PDF is:

  

- A constitution + blueprint for a philosophical research engine.
- A codebase implementing the key components (loops, handlers, tests, integrations).
- A validation log showing that:  
    

- schemas validate,
- logic modules integrate,
- proofs run and pass,
- gates are green,
- snapshots are archived.
    

  

  

It doesn’t just say “you should be rigorous”; it encodes how rigor is enforced across:

  

- semantics (vocab, schemas),
- logic (proofs, countermodels),
- dialectic (AF, steelman/red-team),
- tooling (LLM discipline),
- engineering (DAGs, CI, hashes, archives),
- ethics (AI usage, sensitive corpora, license filters).

  

  

In other words, it describes a system where philosophy is not just written, but compiled, tested, versioned, and audited—and where a thesis about Nothingness or value must survive a gauntlet of formal and dialectical pressures before it earns a steady green light.1