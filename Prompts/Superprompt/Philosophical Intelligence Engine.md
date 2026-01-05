---
date: 2025-10-12 11:03:33
created: 2025-10-11 16:37:11
Folder:
  - Engine-System-Inquiry
  - Prompts / Best / Best SuperPrompts
---

### <br>

<br>

<br>

<br>

### Philosophical Intelligence Engine  

<MODE>SPECIFICATION\_LOAD</MODE>

<br>
You are entering Specification Load mode.  
<br>
Do not execute or build anything.  
<br>
Your task is to parse and internalize the specification fully before doing anything else.  
<br>
You must compute and store SPEC\_HASH = sha256 of the entire SPECIFICATION\_PACKAGE text.  
<br>
You must verify that every section is intact and that no truncation or corruption has occurred.  
<br>
After you finish reading and internalizing the specification, you must stop and wait for user confirmation.  
<br>
Do not proceed to execution until the user explicitly types: CONFIRM EXECUTION.  
<br>
   
<br>
<SPECIFICATION\_PACKAGE>  
<br>
   
<br>
<BLUEPRINT>  
<br>
   
<br>
1) Core architecture  
<br>
\- Unified corpus: versioned text store of primary sources, commentaries, datasets; OCR where needed; chunked; sentence-ID; deduped.  
<br>
\- Concept graph: RDF/OWL2 knowledge graph. Nodes: terms, theses, claims, arguments, objections, evidence, citations. Edges: defines, implies, contradicts, analogizes, instantiates, depends\_on. SHACL constraints.  
<br>
\- Formal layer: higher-order logic with modal, deontic, temporal, and paraconsistent modules. SAT/SMT, theorem provers, model checkers.  
<br>
\- Argumentation layer: Dung-style abstract frameworks + AIF/Toulmin mapping. Attack/defense, undercut, rebut, burden of proof, defeat status.  
<br>
\- Provenance: W3C PROV-O for every node/edge; cryptographic hashes; dataset and model versions; annotator IDs; timestamps; licenses.  
<br>
\- Experiment ledger: runs, configs, prompts, seeds, metrics, artifacts. Reproducible via containers and signed images.  
<br>
   
<br>
2) Data model  
<br>
\- TextUnit(id, source, span, claims\[\])  
<br>
\- Concept(id, definitions\[\], relations\[\])  
<br>
\- Claim(id, text, formal\_repr?, stance, scope, confidence)  
<br>
\- Argument(id, premises\[\], conclusion, scheme, defeaters\[\])  
<br>
\- Objection(id, targets\[\], type, strength)  
<br>
\- Hypothesis(id, statement, alternatives\[\], decision\_criteria\[\])  
<br>
\- Provenance(entity\_id, who, when, how, tools, data\_versions)  
<br>
\- Run(id, inputs, configs, seeds, outputs, metrics, hashes)  
<br>
   
<br>
3) AI components  
<br>
\- RAG++: retrieval over text store and graph with symbolic filters; cross-encoder re-ranking tuned on arguments.  
<br>
\- Term disciplinarian: enforces definition discipline; flags equivocation; proposes minimal change sets.  
<br>
\- Formalizer: maps natural language to logic templates; emits proofs or countermodels; uses paraconsistent logic under contradiction.  
<br>
\- Steelman and Red-team agents: paired generation; adjudicator computes dialectical status in argumentation layer.  
<br>
\- Abduction engine: proposes minimal explanatory hypotheses; ranks by simplicity, unification, cost.  
<br>
\- Analogy mapper: structural alignment across domains; logs validity and failure modes.  
<br>
\- Counterexample generator: edge cases, toy worlds, semantic adversaries; integrates with model checkers.  
<br>
\- Summarizer with trace: layered summaries with sentence-level provenance.  
<br>
   
<br>
4) Method stack (workflows)  
<br>
\- Concept-audit: collect uses; cluster senses; canonical definition; permissible variants; entailments/exclusions; register in graph.  
<br>
\- Position synthesis: enumerate positions; list core theses; map dependencies; best canonical argument per position.  
<br>
\- Adversarial loop per thesis: Steelman → Red-team objections → Formalize → Countermodels → Repairs Δ with costs → Re-evaluate status.  
<br>
\- Thought-experiment lab: parameterized scenarios; vary knobs; record intuition vectors; analyze invariants.  
<br>
\- Comparative program: test interactions among neighboring theses under shared constraint sets.  
<br>
\- Meta-critique: vary logics and norms; rerun; measure method dependence.  
<br>
   
<br>
5) Metrics  
<br>
\- Local: validity, satisfiability, definition coverage, equivocation count, model-checker status.  
<br>
\- Global: parsimony, unification score, resilience under perturbation, provenance completeness.  
<br>
\- Dialectical: acceptability semantics (grounded, preferred, stable), controversy index, objection density.  
<br>
\- Process: reproducibility rate, drift across seeds, annotator agreement.  
<br>
   
<br>
6) Human roles  
<br>
\- Curator, Analyst, Adversary, Arbiter, Method-Ethicist; separation of duties.  
<br>
   
<br>
7) Interfaces  
<br>
\- Philosophy Notebook IDE: synchronized panes for text, formal proofs, argument graph; sentence ↔ claim ↔ proof trace.  
<br>
\- φQL query language: WHY, COUNTEREX, REPAIR, TRACE.  
<br>
\- Graph ops: cut, compress, dualize, simulate(world\_params).  
<br>
   
<br>
8) Governance and safety  
<br>
\- Persuasion guardrails; speculative labels; provenance required for all claims.  
<br>
\- Model lifecycle: held-out benchmarks; red-team before upgrade; immutable run records.  
<br>
\- IP and licensing: track source and derivative flags.  
<br>
   
<br>
9) Reproducibility  
<br>
\- Deterministic pipelines with pinned corpora and models; one-click rerun; hash-addressable artifacts.  
<br>
   
<br>
10) Minimal operational loop (conceptual)  
<br>
for thesis T:  
<br>
  steelman T → T\*  
<br>
  define terms  
<br>
  build arguments  
<br>
  formalize  
<br>
  prove or refute; generate counterexamples  
<br>
  propose repairs Δ if needed; apply with version bump  
<br>
  evaluate dialectically under grounded semantics  
<br>
  record status, metrics, provenance  
<br>
   
<br>
11) Example research recipe (Nihiltheism)  
<br>
\- Scope “Nothingness,” “value,” “creation,” “axiology-from-void.”  
<br>
\- Hypotheses H1/H2; encode; seed corpus; register rivals; run adversarial loop across logics; log repair costs; publish resilient graph slice and capsule.  
<br>
   
<br>
12) Tech choices (swappable)  
<br>
\- Storage: Postgres + Elastic + object store; graph: RDF triplestore.  
<br>
\- Symbolic: Z3/CVC5; Isabelle/Coq; LP/M3 engines.  
<br>
\- LLMs: tool-use tuned, citation-obligate; local models for sensitive steps.  
<br>
\- Orchestration: containerized DAG scheduler; signed artifacts.  
<br>
   
<br>
13) Deliverables  
<br>
\- Living argument map with status lights and proofs.  
<br>
\- Methods capsule per claim.  
<br>
\- Change log explaining belief updates.  
<br>
\- Public API for φQL and graph slices.  
<br>
   
<br>
</BLUEPRINT>  
<br>
   
<br>
<MANDATORY\_DIRECTIVES>  
<br>
   
<br>
0) Global invariants  
<br>
1\. Every artifact must include id, hash, version, timestamp, author, toolchain, license.  
<br>
2\. Every claim must link to source spans and proof status. No orphan nodes.  
<br>
3\. Every transformation must be deterministic or record seeds and configs.  
<br>
4\. No conclusion without provenance. No model output without trace.  
<br>
5\. Definitions precede inference. Logic regime explicit per run.  
<br>
6\. Contradictions are logged, never hidden. Paraconsistency is opt-in only.  
<br>
   
<br>
7) Bootstrap discipline  
<br>
\- Create repositories: corpus, graph, formal, workflows, orchestrator, ui.  
<br>
\- Initialize CI gates: format, lint, type, unit, integration, reproducibility.  
<br>
\- Define PIS\_SPEC.md containing this specification; store its hash; freeze before Phase 2.  
<br>
\- Any gate failure blocks deployment.  
<br>
   
<br>
2) Controlled vocabulary and schema  
<br>
\- Author VOCAB.md for entities: concept, claim, argument, objection, thesis, hypothesis, scenario, norm.  
<br>
\- Define JSON Schemas and SHACL shapes for TextUnit, Concept, Claim, Argument, Objection, Hypothesis, Provenance, Run.  
<br>
\- Acceptance: validate 100 synthetic examples; zero shape violations.  
<br>
   
<br>
3) Corpus ingestion  
<br>
\- Specify allowed sources and licenses; reject non-compliant sources.  
<br>
\- Pipeline: fetch → OCR → clean → chunk → sentence-ID → metadata attach.  
<br>
\- Deduplicate using MinHash + exact hash; record collisions.  
<br>
\- Acceptance: audit 200 docs; ≥99% metadata accuracy; ≤1% OCR spot-error; dedup report present.  
<br>
   
<br>
4) Concept registry  
<br>
\- For each key term: collect uses → cluster senses → canonical definition → permissible variants → entail/exclude.  
<br>
\- Register term with status draft|approved.  
<br>
\- Term changes trigger impact analysis on dependent claims.  
<br>
\- Acceptance: equivocation detector trend must decline across three iterations.  
<br>
   
<br>
5) Argumentation substrate  
<br>
\- Implement edges: supports, defeats, undercuts, analogizes, depends\_on, contradicts, instantiates.  
<br>
\- Encode Dung AF with AIF mapping; semantics: grounded, preferred, stable; default grounded.  
<br>
\- Acceptance: golden micro-corpus of 50 arguments yields identical acceptability across toolchains and seeds.  
<br>
   
<br>
6) Formal layer  
<br>
\- Provide logic modules: FOL, modal S4/S5, deontic, temporal, paraconsistent LP/M3.  
<br>
\- Mapping templates from language to logic: scope, domains, quantifiers, modality.  
<br>
\- Integrate Z3/CVC5 and one proof assistant (Isabelle/Coq); record timeouts.  
<br>
\- Acceptance: 30 template proofs complete in ≤10s each on reference hardware; countermodel generator returns witnesses where expected.  
<br>
   
<br>
7) AI toolchain discipline  
<br>
\- Retrieval: hybrid BM25 + dense + graph constraints; re-rank with argument-tuned cross-encoder.  
<br>
\- Term Disciplinarian blocks drafts using undefined terms.  
<br>
\- Formalizer emits logic or cannot\_formalize(reason). No silent hallucinations.  
<br>
\- Paired Steelman/Red-team runs with shared context and disjoint prompts.  
<br>
\- Summarizer outputs sentence-level provenance.  
<br>
\- Acceptance: audit 100 outputs; zero uncited sentences; ≥95% template adherence.  
<br>
   
<br>
8) Method workflows (atomic, composable)  
<br>
8.1 Concept-Audit: collect → cluster → define → entail/exclude → register → publish diff. Exit: approved term + impact report.  
<br>
8.2 Position-Synthesis: enumerate theses → canonicalize → map dependencies → build best-case argument. Exit: thesis card with premises, conclusion, scheme, assumptions, scope.  
<br>
8.3 Adversarial-Loop:  
<br>
   1. Steelman(T) → T\*  
<br>
   2. Red-team(T\*) → objections O  
<br>
   3. Formalize(T\*, O) → check  
<br>
   4. Generate countermodels C  
<br>
   5. Propose repairs Δ with costs  
<br>
   6. Re-evaluate under AF semantics  
<br>
   Exit: status in|out|undecided + repair ledger.  
<br>
8.4 Thought-Experiment-Lab: instantiate template → vary parameters → record intuition vectors → analyze invariants. Exit: scenario matrix + stability report.  
<br>
8.5 Meta-Critique: switch logic/norms → re-run pipelines → measure method dependence. Exit: sensitivity dossier.  
<br>
   
<br>
9) φQL MVP  
<br>
\- Implement WHY thesis:<id>, COUNTEREX claim:<id> WITH constraints:<logic>, REPAIR thesis:<id> MINCOST under logic:<id>, TRACE node:<id>.  
<br>
\- All queries return artifacts and provenance JSON.  
<br>
\- Acceptance: 20 canned φQL queries produce stable outputs across seeds.  
<br>
   
<br>
10) Metrics and gates  
<br>
\- Local: validity, satisfiability, definition coverage, equivocation count.  
<br>
\- Global: parsimony, unification, resilience, provenance completeness.  
<br>
\- Process: reproducibility, drift, inter-annotator agreement.  
<br>
\- Gates:  
<br>
  G1 Ingestion ≥99% metadata accuracy  
<br>
  G2 Graph 0 shape violations  
<br>
  G3 Formal ≥90% proof success on gold set  
<br>
  G4 AI 0 uncited sentences  
<br>
  G5 Repro identical hashes across 3 reruns  
<br>
  G6 Ethics disclosure and risk checklist complete  
<br>
   
<br>
11) Orchestration and reproducibility  
<br>
\- All runs via declarative DAGs; no ad-hoc production scripts.  
<br>
\- Each run emits a methods capsule: configs, seeds, images, budgets, hashes.  
<br>
\- One-click rerun reproduces identical hashes or explains drift.  
<br>
\- Acceptance: cold rerun suite passes on separate machine.  
<br>
   
<br>
12) Interfaces  
<br>
\- Notebook IDE with synchronized text, formal, graph panes; sentence → claim → proof clickable.  
<br>
\- Status lights on nodes reflect AF acceptability and proof state.  
<br>
\- Export APIs: JSON, RDF, static capsule bundles.  
<br>
   
<br>
13) Governance and audit  
<br>
\- Roles: Curator, Analyst, Adversary, Arbiter, Method-Ethicist. Separation of duties enforced.  
<br>
\- Every merge requires schema validation, provenance lint, ethics checklist.  
<br>
\- Quarterly red-team of pipeline; publish findings; unresolved critical findings block release.  
<br>
\- Acceptance: audit trail complete.  
<br>
   
<br>
14) Security and IP  
<br>
\- Enforce license filters at ingestion; derivative flags propagate.  
<br>
\- Sensitive corpora processed with local models only; no external calls.  
<br>
\- All artifacts signed; verify signatures on load.  
<br>
   
<br>
15) Failure handling  
<br>
\- On contradiction: mark node inconsistent; trigger paraconsistent re-run tag.  
<br>
\- On unverifiable claim: quarantine and open issue with minimal repro.  
<br>
\- On definition drift: freeze affected modules; run impact analysis before resume.  
<br>
   
<br>
16) Operational loop (enforced)  
<br>
for T in Project:  
<br>
  T\* = Steelman(T)  
<br>
  D  = DefineTerms(T\*)  
<br>
  A  = BuildArguments(T\*, corpus, graph)  
<br>
  F  = Formalize(A)  
<br>
  R  = ProveOrRefute(F)  
<br>
  C  = GenerateCounterexamples(F)  
<br>
  if R.inconsistent or C.any:  
<br>
      Δ = ProposeRepairs(F, C) with costs  
<br>
      T\* = Apply(Δ)  
<br>
  S  = EvaluateDialectically(T\*, semantics='grounded')  
<br>
  Record(T\*, S, metrics, provenance)  
<br>
  if any gate fails: HALT and open issue  
<br>
   
<br>
17) Deliverables per thesis  
<br>
\- Thesis card with scope and assumptions.  
<br>
\- Living argument map with status lights.  
<br>
\- Proof/countermodel artifacts.  
<br>
\- Repair ledger with costed deltas.  
<br>
\- Methods capsule for full rerun.  
<br>
   
<br>
18) Change control  
<br>
\- Any schema change requires migration plan and backward-compat tests.  
<br>
\- Any model change requires red-team, eval report, rollback plan.  
<br>
\- Publish CHANGELOG.md with rationale and affected nodes.  
<br>
   
<br>
19) Acceptance to production  
<br>
\- Gates G1–G6 green; zero open critical issues; reproducibility confirmed on clean hardware; ethics checklist signed by Method-Ethicist; tag release; archive capsules; announce hash.  
<br>
   
<br>
20) Non-negotiables  
<br>
\- No uncited sentences in public outputs.  
<br>
\- No undefined terms in arguments.  
<br>
\- No silent logic shifts.  
<br>
\- No mutable histories; edits are append-only diffs.  
<br>
   
<br>
</MANDATORY\_DIRECTIVES>  
<br>
   
<br>
</SPECIFICATION\_PACKAGE>  
<br>
   
<br>
After ingestion, output exactly the following line and nothing else:  
<br>
SPECIFICATION LOAD COMPLETE — AWAITING USER CONFIRMATION TO EXECUTE  
<br>
<MODE>EXECUTION\_STAGE</MODE>  
<br>
You are now authorized to operate under the loaded SPECIFICATION\_PACKAGE.  
<br>
Confirm that SPEC\_HASH matches the stored value from Specification Load mode.  
<br>
Proceed in precise sequential order beginning with Directive 0.  
<br>
Pause at the end of each directive and output:  
<br>
PHASE COMPLETE — AWAITING USER PERMISSION TO CONTINUE  
<br>
Do not advance to the next directive until explicit permission is given.  
<br>
If any acceptance test fails, halt immediately and output the failure log.  
<br>
\---  
<br>
<br>
Execution begins with:  
<br>
CONFIRM EXECUTION — BEGIN PHASE 1: BOOTSTRAP DISCIPLINEB  
<br>
\---  
<br>
\# Follow Up: Step 2  
<br>
Use these exact commands, in order. \*\*\*Paste one at a time.\*\*\*  
<br>
PROCEED — BEGIN PHASE 2: CONTROLLED VOCABULARY AND SCHEMA  
<br>
EXECUTE STEP 2.1 — AUTHOR VOCAB.MD (entities: Concept, Claim, Argument, Objection, Thesis, Hypothesis, Scenario, Norm) — OUTPUT PATHS AND SHA-256 HASHES — PAUSE  
<br>
EXECUTE STEP 2.2 — DEFINE JSON SCHEMAS (TextUnit, Concept, Claim, Argument, Objection, Hypothesis, Provenance, Run) — STRICT TYPES — OUTPUT PATHS AND HASHES — PAUSE  
<br>
EXECUTE STEP 2.3 — DEFINE SHACL SHAPES FOR RDF/OWL GRAPH — VALIDATE AGAINST SCHEMAS — OUTPUT PATHS AND HASHES — PAUSE  
<br>
EXECUTE STEP 2.4 — GENERATE 100 SYNTHETIC EXAMPLES COVERING ALL EDGE CASES — SPLIT: 70 VALID / 30 INTENTIONAL VIOLATIONS — PAUSE  
<br>
EXECUTE STEP 2.5 — VALIDATE SYNTHETICS — REQUIRE 0 SHAPE VIOLATIONS ON THE 70 VALID — REPORT ALL FAILURES ON THE 30 INVALID — EMIT METRICS AND G1/G2 STATUS — PAUSE  
<br>
REPORT — PHASE 2 ARTIFACT INDEX (FILES, HASHES, METRICS, CI GATES) — PROVIDE REPRO COMMANDS — PAUSE  
<br>
If all green:  
<br>
PROCEED — CLOSE PHASE 2 — BEGIN PHASE 3: CORPUS INGESTION  
<br>
Emergency controls:  
<br>
HALT EXECUTION IMMEDIATELY  
<br>
Checkpoint rerun:  
<br>
RE-RUN PHASE 2 VALIDATION — EXPECT IDENTICAL HASHES  
<br>

* * *

<br>

Below are the exact continuation commands for **Phases 3–20.** Issue them one at a time, in order.

```
PROCEED — BEGIN PHASE 3: CORPUS INGESTION
```

```
EXECUTE STEP 3.1 — DECLARE ALLOWED SOURCES AND LICENSE POLICY — EMIT POLICY FILE PATHS AND SHA-256 HASHES — PAUSE
```

```
EXECUTE STEP 3.2 — BUILD INGESTION PIPELINE (FETCH → OCR → CLEAN → CHUNK → SENTENCE-ID → METADATA) — OUTPUT PIPELINE CONFIG PATHS AND HASHES — PAUSE
```

```
EXECUTE STEP 3.3 — RUN DEDUPLICATION (MINHASH + EXACT HASH) — PRODUCE COLLISION REPORT AND INDEX ARTIFACT — PAUSE
```

```
EXECUTE STEP 3.4 — CONDUCT 200-DOCUMENT AUDIT — REPORT METADATA ACCURACY AND OCR ERROR RATES — PAUSE
```

```
EXECUTE STEP 3.5 — ISSUE G1 STATUS AND CORPUS ARTIFACT INDEX — PROVIDE REPRO COMMANDS — PAUSE
```

```
PROCEED — CLOSE PHASE 3 — BEGIN PHASE 4: CONCEPT REGISTRY
```

```
EXECUTE STEP 4.1 — RUN CONCEPT-AUDIT COLLECTION ON CORE TERMS — EMIT RAW USES DATASET AND HASHES — PAUSE
```

```
EXECUTE STEP 4.2 — CLUSTER SENSES AND FLAG EQUIVOCATIONS — OUTPUT CLUSTER MAP AND METRICS — PAUSE
```

```
EXECUTE STEP 4.3 — AUTHOR CANONICAL DEFINITIONS AND PERMISSIBLE VARIANTS — UPDATE VOCAB — OUTPUT DIFF — PAUSE
```

```
EXECUTE STEP 4.4 — SPECIFY ENTAILMENTS AND EXCLUSIONS — VALIDATE AGAINST GRAPH — PAUSE
```

```
EXECUTE STEP 4.5 — REGISTER TERMS WITH STATUS DRAFT OR APPROVED — TRIGGER IMPACT ANALYSIS — PAUSE
```

```
EXECUTE STEP 4.6 — REPORT EQUIVOCATION TREND OVER THREE ITERATIONS — EMIT METRICS — PAUSE
```

```
PROCEED — CLOSE PHASE 4 — BEGIN PHASE 5: ARGUMENTATION SUBSTRATE
```

```
EXECUTE STEP 5.1 — IMPLEMENT TYPED EDGES (SUPPORTS, DEFEATS, UNDERCUTS, ANALOGIZES, DEPENDS_ON, CONTRADICTS, INSTANTIATES) — OUTPUT SCHEMA AND HASHES — PAUSE
```

```
EXECUTE STEP 5.2 — ENCODE DUNG AF WITH AIF MAPPING — ENABLE GROUNDED, PREFERRED, STABLE SEMANTICS — PAUSE
```

```
EXECUTE STEP 5.3 — LOAD GOLDEN MICRO-CORPUS OF 50 ARGUMENTS — RUN ACCEPTABILITY COMPUTATION ACROSS TOOLCHAINS — EMIT CONCORDANCE REPORT — PAUSE
```

```
PROCEED — CLOSE PHASE 5 — BEGIN PHASE 6: FORMAL LAYER
```

```
EXECUTE STEP 6.1 — INSTALL LOGIC MODULES (FOL, S4, S5, DEONTIC, TEMPORAL, LP, M3) — OUTPUT MODULE REGISTRY — PAUSE
```

```
EXECUTE STEP 6.2 — PUBLISH NL→LOGIC TEMPLATES (SCOPE, DOMAINS, QUANTIFIERS, MODALITY) — OUTPUT TEMPLATE PATHS AND HASHES — PAUSE
```

```
EXECUTE STEP 6.3 — INTEGRATE Z3, CVC5, AND ONE PROOF ASSISTANT — RUN SMOKE TESTS — PAUSE
```

```
EXECUTE STEP 6.4 — RUN 30 TEMPLATE PROOFS ≤ 10S EACH ON REFERENCE HARDWARE — EMIT TIMING TABLE AND PASS/FAIL — PAUSE
```

```
EXECUTE STEP 6.5 — GENERATE COUNTERMODELS WHERE EXPECTED — OUTPUT MODEL ARTIFACTS — PAUSE
```

```
PROCEED — CLOSE PHASE 6 — BEGIN PHASE 7: AI TOOLCHAIN DISCIPLINE
```

```
EXECUTE STEP 7.1 — CONFIGURE HYBRID RETRIEVAL (BM25 + DENSE + GRAPH CONSTRAINTS) — OUTPUT INDEX STATS — PAUSE
```

```
EXECUTE STEP 7.2 — ACTIVATE TERM DISCIPLINARIAN GATE — RUN UNDEFINED-TERM TESTS — EMIT BLOCK LOG — PAUSE
```

```
EXECUTE STEP 7.3 — ACTIVATE FORMALIZER — ENFORCE MUST EMIT LOGIC OR CANNOT_FORMALIZE(REASON) — OUTPUT TEST SET RESULTS — PAUSE
```

```
EXECUTE STEP 7.4 — RUN PAIRED STEELMAN AND RED-TEAM AGENTS WITH DISJOINT PROMPTS — OUTPUT DIALOG LOGS — PAUSE
```

```
EXECUTE STEP 7.5 — ACTIVATE TRACEABLE SUMMARIZER — PRODUCE 100-SAMPLE AUDIT WITH ZERO UN-CITED SENTENCES — EMIT G4 STATUS — PAUSE
```

```
PROCEED — CLOSE PHASE 7 — BEGIN PHASE 8: METHOD WORKFLOWS
```

```
EXECUTE STEP 8.1 — IMPLEMENT CONCEPT-AUDIT WORKFLOW — RUN END-TO-END ON CORE TERMS — OUTPUT ARTIFACTS — PAUSE
```

```
EXECUTE STEP 8.2 — IMPLEMENT POSITION-SYNTHESIS WORKFLOW — EMIT THESIS CARDS — PAUSE
```

```
EXECUTE STEP 8.3 — IMPLEMENT ADVERSARIAL-LOOP — RUN STEELMAN → RED-TEAM → FORMALIZE → COUNTERMODELS → REPAIRS → STATUS — OUTPUT LEDGER — PAUSE
```

```
EXECUTE STEP 8.4 — IMPLEMENT THOUGHT-EXPERIMENT LAB — INSTANTIATE SCENARIO MATRIX — OUTPUT STABILITY REPORT — PAUSE
```

```
EXECUTE STEP 8.5 — IMPLEMENT META-CRITIQUE — SWITCH LOGIC/NORMS — RE-RUN PIPELINES — EMIT SENSITIVITY DOSSIER — PAUSE
```

```
PROCEED — CLOSE PHASE 8 — BEGIN PHASE 9: PHI-QL MVP
```

```
EXECUTE STEP 9.1 — IMPLEMENT WHY THESIS QUERY — RETURN MINIMAL SUPPORT SET WITH PROVENANCE — PAUSE
```

```
EXECUTE STEP 9.2 — IMPLEMENT COUNTEREX CLAIM QUERY WITH LOGIC CONSTRAINTS — RETURN WITNESSES — PAUSE
```

```
EXECUTE STEP 9.3 — IMPLEMENT REPAIR THESIS MINCOST UNDER SPECIFIED LOGIC — RETURN DELTAS — PAUSE
```

```
EXECUTE STEP 9.4 — IMPLEMENT TRACE NODE — RETURN FULL PROVENANCE JSON — PAUSE
```

```
EXECUTE STEP 9.5 — RUN 20 CANNED QUERIES — REQUIRE STABLE OUTPUT HASHES — EMIT REPORT — PAUSE
```

```
PROCEED — CLOSE PHASE 9 — BEGIN PHASE 10: METRICS AND GATES
```

```
EXECUTE STEP 10.1 — COMPUTE LOCAL METRICS (VALIDITY, SATISFIABILITY, DEFINITION COVERAGE, EQUIVOCATION COUNT) — PAUSE
```

```
EXECUTE STEP 10.2 — COMPUTE GLOBAL METRICS (PARSIMONY, UNIFICATION, RESILIENCE, PROVENANCE COMPLETENESS) — PAUSE
```

```
EXECUTE STEP 10.3 — COMPUTE PROCESS METRICS (REPRODUCIBILITY, DRIFT, INTER-ANNOTATOR AGREEMENT) — PAUSE
```

```
EXECUTE STEP 10.4 — EMIT G1–G6 STATUS WITH THRESHOLDS — BLOCK ON ANY FAILURE — PAUSE
```

```
PROCEED — CLOSE PHASE 10 — BEGIN PHASE 11: ORCHESTRATION AND REPRODUCIBILITY
```

```
EXECUTE STEP 11.1 — DECLARE DAGS FOR ALL WORKFLOWS — OUTPUT YAML PATHS AND HASHES — PAUSE
```

```
EXECUTE STEP 11.2 — ENABLE METHODS CAPSULE EMISSION (CONFIGS, SEEDS, IMAGES, BUDGETS, HASHES) — PRODUCE SAMPLE CAPSULE — PAUSE
```

```
EXECUTE STEP 11.3 — RUN COLD RERUN ON SEPARATE MACHINE PROFILE — REQUIRE IDENTICAL HASHES OR DRIFT EXPLANATION — PAUSE
```

```
PROCEED — CLOSE PHASE 11 — BEGIN PHASE 12: INTERFACES
```

```
EXECUTE STEP 12.1 — ACTIVATE NOTEBOOK IDE WITH SYNCHRONIZED TEXT, FORMAL, GRAPH PANES — OUTPUT BUILD ARTIFACTS — PAUSE
```

```
EXECUTE STEP 12.2 — ENABLE STATUS LIGHTS FOR ARGUMENTATION AND PROOF STATES — OUTPUT UI TESTS — PAUSE
```

```
EXECUTE STEP 12.3 — ENABLE EXPORTS (JSON, RDF, STATIC CAPSULES) — PRODUCE SAMPLE EXPORTS — PAUSE
```

```
PROCEED — CLOSE PHASE 12 — BEGIN PHASE 13: GOVERNANCE AND AUDIT
```

```
EXECUTE STEP 13.1 — ENFORCE ROLE SEPARATION (CURATOR, ANALYST, ADVERSARY, ARBITER, METHOD-ETHICIST) — OUTPUT ACCESS CONTROL LISTS — PAUSE
```

```
EXECUTE STEP 13.2 — ENFORCE MERGE RULES (SCHEMA VALIDATION, PROVENANCE LINT, ETHICS CHECKLIST) — PRODUCE CI LOGS — PAUSE
```

```
EXECUTE STEP 13.3 — RUN QUARTERLY RED-TEAM SIMULATION — PUBLISH AUDIT LOG — BLOCK ON UNRESOLVED CRITICALS — PAUSE
```

```
PROCEED — CLOSE PHASE 13 — BEGIN PHASE 14: SECURITY AND IP
```

```
EXECUTE STEP 14.1 — ENFORCE LICENSE FILTERS AT INGESTION — PROPAGATE DERIVATIVE FLAGS — OUTPUT POLICY ENGINES — PAUSE
```

```
EXECUTE STEP 14.2 — ROUTE SENSITIVE CORPORA TO LOCAL MODELS ONLY — DISABLE EXTERNAL CALLS — EMIT VERIFICATION LOGS — PAUSE
```

```
EXECUTE STEP 14.3 — SIGN ALL ARTIFACTS — ENABLE SIGNATURE VERIFICATION ON LOAD — PRODUCE SIGN/VERIFY TRANSCRIPTS — PAUSE
```

```
PROCEED — CLOSE PHASE 14 — BEGIN PHASE 15: FAILURE HANDLING
```

```
EXECUTE STEP 15.1 — ON CONTRADICTION MARK NODE INCONSISTENT — TRIGGER PARACONSISTENT RE-RUN TAG — OUTPUT INCIDENT RECORD — PAUSE
```

```
EXECUTE STEP 15.2 — ON UNVERIFIABLE CLAIM QUARANTINE AND OPEN ISSUE WITH MINIMAL REPRO — EMIT TICKET — PAUSE
```

```
EXECUTE STEP 15.3 — ON DEFINITION DRIFT FREEZE DEPENDENT MODULES — RUN IMPACT ANALYSIS — OUTPUT UNFREEZE CRITERIA — PAUSE
```

```
PROCEED — CLOSE PHASE 15 — BEGIN PHASE 16: OPERATIONAL LOOP
```

```
EXECUTE STEP 16.1 — ENFORCE THESIS LOOP (STEELMAN, DEFINE TERMS, BUILD ARGUMENTS, FORMALIZE, PROVE/REFUTE, COUNTEREXAMPLES, REPAIRS, EVALUATE, RECORD) — OUTPUT RUN LOG AND HASHES — PAUSE
```

```
PROCEED — CLOSE PHASE 16 — BEGIN PHASE 17: DELIVERABLES
```

```
EXECUTE STEP 17.1 — EMIT THESIS CARDS WITH SCOPE AND ASSUMPTIONS — OUTPUT PATHS AND HASHES — PAUSE
```

```
EXECUTE STEP 17.2 — EMIT LIVING ARGUMENT MAPS WITH STATUS LIGHTS — OUTPUT GRAPH SNAPSHOTS — PAUSE
```

```
EXECUTE STEP 17.3 — EMIT PROOF AND COUNTERMODEL ARTIFACTS — OUTPUT INDEX — PAUSE
```

```
EXECUTE STEP 17.4 — EMIT REPAIR LEDGER WITH COSTED DELTAS — OUTPUT LEDGER PATH — PAUSE
```

```
EXECUTE STEP 17.5 — EMIT METHODS CAPSULES FOR FULL RERUN — OUTPUT CAPSULE INDEX — PAUSE
```

```
PROCEED — CLOSE PHASE 17 — BEGIN PHASE 18: CHANGE CONTROL
```

```
EXECUTE STEP 18.1 — REGISTER MIGRATION PLAN AND BACKWARD-COMPAT TESTS — OUTPUT TEST RESULTS — PAUSE
```

```
EXECUTE STEP 18.2 — RUN MODEL CHANGE RED-TEAM, EVAL REPORT, AND ROLLBACK PLAN — OUTPUT ARTIFACTS — PAUSE
```

```
EXECUTE STEP 18.3 — UPDATE CHANGELOG WITH RATIONALE AND AFFECTED NODES — OUTPUT HASH — PAUSE
```

```
PROCEED — CLOSE PHASE 18 — BEGIN PHASE 19: ACCEPTANCE TO PRODUCTION
```

```
EXECUTE STEP 19.1 — VERIFY G1–G6 GREEN, ZERO CRITICAL ISSUES, REPRO PASSED, ETHICS SIGNED — EMIT ACCEPTANCE REPORT — PAUSE
```

```
EXECUTE STEP 19.2 — TAG RELEASE, ARCHIVE CAPSULES, PUBLISH SPEC HASH — OUTPUT TAG AND ARCHIVE PATHS — PAUSE
```

```
PROCEED — CLOSE PHASE 19 — BEGIN PHASE 20: NON-NEGOTIABLES VERIFICATION
```

```
EXECUTE STEP 20.1 — SCAN PUBLIC OUTPUTS FOR UNCITED SENTENCES — REQUIRE ZERO VIOLATIONS — EMIT REPORT — PAUSE
```

```
EXECUTE STEP 20.2 — SCAN ARGUMENTS FOR UNDEFINED TERMS — REQUIRE ZERO VIOLATIONS — EMIT REPORT — PAUSE
```

```
EXECUTE STEP 20.3 — VERIFY NO SILENT LOGIC REGIME SHIFTS — EMIT COMPARISON LOG — PAUSE
```

```
EXECUTE STEP 20.4 — VERIFY APPEND-ONLY HISTORY IN ALL MODULES — EMIT IMMUTABILITY AUDIT — PAUSE
```

<br>

<br>