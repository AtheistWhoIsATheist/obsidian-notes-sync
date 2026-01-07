---
title:
created:
updated:
tags:
backlink: "[["
description:
---

Here is a clean, ready-to-save set of five documents. Each is written as a standalone markdown file; you can copy each block into its own `.md` file using the indicated filename.

---

## 1. `journal314_anomalies_executive_brief.md`

text

``--- title: "Journal314 Data Integrity – Executive Brief" filename: "journal314_anomalies_executive_brief.md" version: "v1.0" status: "draft-initial" created: "2026-01-06" author: "AI Research Assistant" tags:   - journal314  - data-integrity  - anomalies  - executive-brief --- # Journal314 Data Integrity – Executive Brief ## 1. Purpose This executive brief summarizes the **data integrity profile** of the Journal314 dataset as currently instantiated in the J314 Postgres schema and populated by the provided CSV + `seed.sql` pack. It is written for a technical-but-time-constrained owner (Adam) who needs a top-level view of trustworthiness, risks, and immediate priorities, without wading through full SQL or CSV inspections. ## 2. What Journal314 Currently Is At this stage, “Journal314” in the database is: - A **canonical span-offset quoting corpus** seeded from a single text file: `Journal314AllQuotes.txt`, with SHA-256 hash `6734ad29f05182ecdb8a55a4382c52abcdc61769b1edb8a7e1d7b180e61eaf8d`. - Spans (`j314.sourcespan`) holding offsets into that text, plus:   - One snapshot in `j314.sourcetextsnapshot` with `iscurrent = true`.  - Deterministic UUIDv5 IDs driven by the file hash and positional data. - Attribution rows (`j314.attribution`) mapping spans to figures and works. - Reference tables for figures, works, themes, motifs, paradoxes, etc., and integrity views/functions for later analytics. **Crucially:** all attributions in the seed are labeled `status = 'uncertain'` and annotated as “Section-assigned from Journal314 figure header not independently verified.” This means the current database is an **imported scaffold**, not yet an evidence-verified corpus. ## 3. High-Level Integrity Assessment ### 3.1 Strengths - **Canonical Snapshot Discipline**     - All quoting is enforced via offsets into a single snapshot (`sourcetextsnapshot`), not free-floating quote text.  - A helper function `j314.getspantext(pspanid)` recovers the canonical text for any span.  - This design guarantees that, once the source file is fixed, all spans are immutable evidence anchors. - **Separation of Evidence vs Interpretation**     - Evidence: `sourcedocument`, `sourcetextsnapshot`, `sourcespan`, `attribution`.  - Interpretation: `note`, `claim`, `spantag`, `claimanchor`, etc.  - Integrity views (`vintegrityanchoredclaimsmissinganchors`, `vintegrityunattributedspans`, `vintegritynonverifiedattributions`) exist to detect epistemic sloppiness. - **Deterministic IDs & Reproducibility**     - UUIDv5 for spans and figures allows regenerating the same IDs from the same source text and layout.  - This makes it safe to re-ingest updated variants if you maintain the same canonical text. ### 3.2 Structural Vulnerabilities - **Single Canonical Text Dependency**     - All span offsets depend on **one** text file and its exact byte layout (line breaks, punctuation, etc.).  - Any change to the canonical file—even a trivial whitespace alteration—invalidates all offsets. - **Bulk “Uncertain” Attributions**     - `seed.sql` populates attributions as `status = 'uncertain'` and method `imported`.  - Notes explicitly state that figure assignments are inferred from section headers in the original Journal314 file, not cross-checked against external editions or scholarship.  - This is intentionally honest but means the **default epistemic posture is: “provisional and unverified.”** - **No Versioned Corpus Comparisons Yet**     - The schema supports multiple snapshots per `sourcedocument`, but only one snapshot is present.  - There is no “diff” history to detect drifts between, say, an earlier and later cleaned edition of Journal314. ### 3.3 Operational Risks - **Risk 1 – Quote Misattribution Leak**     - If downstream tools treat `status = 'uncertain'` spans as “verified,” misattributed quotes may propagate into analysis and publication.  - This risk grows as more analytics and RAG layers are built on top. - **Risk 2 – Offset Drift via Source-Text Changes**     - Editing `Journal314AllQuotes.txt` outside of the ingest pipeline jeopardizes the integrity of all existing `sourcespan` entries.  - Without a robust resync script, it becomes nearly impossible to know which spans still match reality. - **Risk 3 – Overconfident AI Layers**     - If AI systems query the database and present quotes without surfacing their epistemic status, users may over-trust uncertain spans. ## 4. Executive Priorities (90-Day Window) The following actions are recommended as your first wave of remediation and hardening: 1. **Lock the Canonical Text**      - Treat `Journal314AllQuotes.txt` as read-only.   - Any editorial changes must go through a controlled regeneration process that:     - Recomputes the SHA-256 hash.     - Rebuilds spans and attributions.     - Produces a new snapshot row, leaving the old one intact. 2. **Enforce Status-Aware Consumption**      - All downstream tools must differentiate at least three evidence states:     - `verified`     - `uncertain`     - `disputed`   - Require UI and API consumers to display the status and filter by it. 3. **Start a “Verified Spans” Campaign**      - Use `j314.vverifiedspans` as the **only** source of quotes for “publication-grade” use.   - Process spans figure-by-figure:     - Confirm figure and work against external sources.     - Upgrade `status` from `uncertain` to `verified` where warranted.     - Mark problematic spans as `disputed` with explanatory notes. 4. **Instrument the Integrity Dashboard**      - Regularly consult `j314.vintegritydashboard` to track:     - Anchored claims that lack anchors (should be zero).     - Unattributed spans.     - Non-verified attributions.   - Treat these numbers as key health metrics. ## 5. Summary for Time-Constrained Decisions - Journal314 is currently an **imported, structurally rigorous but epistemically humble corpus**.   - The schema is sound and future-proof; the weak link is attribution verification.   - No fatal structural flaws are present, but **no attribution should yet be treated as scholarly-grade evidence**.   - Priority is not “more features,” but **hardening the evidence discipline** before building higher-level AI and analytic layers. If you need a one-line executive takeaway: > *“Journal314 is structurally safe but epistemically provisional; do not publish from it without a verification pass.”*``

---

## 2. `journal314_anomalies_technical_analysis.md`

text

``--- title: "Journal314 Anomalies – Technical Analysis" filename: "journal314_anomalies_technical_analysis.md" version: "v1.0" status: "draft-initial" created: "2026-01-06" author: "AI Research Assistant" tags:   - journal314  - anomalies  - technical-analysis  - postgres  - data-audit --- # Journal314 Anomalies – Technical Analysis ## 1. Scope and Goals This document provides a **technical audit** of the Journal314 dataset as defined by: - `j314_schema_pack.sql` (schema) - `seed.sql` (bulk load of spans, attributions, figures, works, etc.) - The associated CSV pack (`figure.csv`, `work.csv`, `source_document.csv`, `source_text_snapshot.csv`, `source_span.csv`, `attribution.csv`) - `anomalies_quote_marks.json` (precomputed anomalies around quotation marks) The aim is to enumerate concrete anomalies, categorize them, and outline diagnostic queries and remediation strategies. ## 2. Evidence Sources and Baseline ### 2.1 Schema Features Key schema choices relevant to anomaly detection: - **Evidence layer**   - `j314.sourcedocument` – file-level metadata (title, path, hash)  - `j314.sourcetextsnapshot` – text snapshots keyed by hash, with `iscurrent` flag  - `j314.sourcespan` – canonical spans with `(startoffset, endoffset)` into snapshot text  - `j314.attribution` – mapping spans → figure + work + status - **Interpretive layer**   - `j314.note`, `j314.noteanchor`  - `j314.claim`, `j314.claimanchor` - **Integrity views**   - `j314.vspantext`  - `j314.vverifiedspans`  - `j314.vintegrityanchoredclaimsmissinganchors`  - `j314.vintegrityunattributedspans`  - `j314.vintegritynonverifiedattributions`  - `j314.vintegritydashboard` - **Analytics layer**   - `j314.spanembedding`, `j314.similarityedge`, `j314.cluster`, `j314.tensionvector`, `j314.spantensionscore`  - Functions `j314.insightresonance`, `j314.insightdisparityresonance`, `j314.insightparadoxdensitybytheme`, `j314.insightfigurefingerprint` ### 2.2 Seed Characteristics - `seed.sql`:   - Creates one `sourcedocument` for “Journal314 All Quotes”.  - Inserts one `sourcetextsnapshot` with the full `Journal314AllQuotes.txt` content.  - Populates thousands of `sourcespan` rows (each with deterministic UUIDv5).  - Populates `attribution` rows for each span with:    - `method = 'imported'`    - `status = 'uncertain'`    - `note = 'Section-assigned from Journal314 figure header not independently verified.'` - CSVs:   - `figure.csv` – 53 figures.  - `work.csv` – ~20 works; 1:many figure→work structure.  - `source_span.csv` and `attribution.csv` – large; taken as normalization of the same data present in `seed.sql`. ## 3. Anomaly Taxonomy Below is a pragmatic taxonomy that captures observed and expected anomalies. ### 3.1 Structural Anomalies 1. **Offset Range Violations**    - Spans where `startoffset < 0` or `endoffset < startoffset`.   - Spans where `endoffset` exceeds the length of the snapshot text. 2. **Dangling Foreign Keys (Theoretical)**    - `attribution.sourcespanid` referencing non-existent `sourcespan`.   - `attribution.figureid` referencing non-existent `figure`.   - `attribution.workid` referencing non-existent `work`. 3. **Uniqueness Conflicts**    - `unique (sourcespanid, figureid)` in `j314.attribution` violated by duplicate inserts.   - `unique (figureid, title)` in `j314.work` violated by inconsistent CSV imports. **Note:** The provided SQL actively tries to avoid these through `ON CONFLICT DO NOTHING` patterns and properly defined constraints, so these anomalies are unlikely unless later manual edits occur. ### 3.2 Epistemic Anomalies 1. **Mass-Unverified Attributions**    - The default state of almost all attributions is `status = 'uncertain'`.   - This is an epistemic anomaly rather than a structural bug: the dataset is designed to highlight that *none* of the figure-work assignments have been independently verified. 2. **Section Header Inference Ambiguity**    - Attributions rely on the assumption that all text following a “TITLE X. Name …” header belongs to that figure until the next figure header.   - This is brittle with respect to:     - Embedded quotations from other authors.     - Editorial commentary that adopts another author’s voice. 3. **Thematic Tag Gaps**    - `j314.spantag` may be sparse or absent in many spans.   - Integrity functions like `insightfigurefingerprint` degrade in value when figure-tag coverage is patchy. ### 3.3 Textual / Punctuation Anomalies 1. **Mismatched Quotation Marks**    - `anomalies_quote_marks.json` documents spans or positions where opening and closing quote marks do not balance, or legacy OCR tokens create ambiguous quote sequences. 2. **Broken Line / Paragraph Boundaries**    - Spans that start or end mid-token due to naive segmentation strategies.   - Spans that contain header metadata or line numbers that should have been excluded. 3. **Encoding Artifacts**    - Non-ASCII characters in an otherwise ASCII pipeline (e.g., smart quotes, em dashes) that may cause differences in offset calculations across environments if not normalized. ## 4. Diagnostic Queries (Patterns) Below are example SQL patterns you can adapt. ### 4.1 Span Range Sanity Check ```sql -- 1. Snapshot length SELECT length(text) AS snapshot_length FROM j314.sourcetextsnapshot WHERE iscurrent = true; -- 2. Spans with invalid ranges SELECT id, snapshotid, startoffset, endoffset FROM j314.sourcespan WHERE startoffset < 0    OR endoffset < startoffset; -- 3. Spans exceeding text length (run after capturing snapshot_length) WITH snap AS (   SELECT id, length(text) AS len  FROM j314.sourcetextsnapshot  WHERE iscurrent = true ) SELECT sp.id, sp.snapshotid, sp.startoffset, sp.endoffset, s.len FROM j314.sourcespan sp JOIN snap s ON sp.snapshotid = s.id WHERE sp.endoffset > s.len;``

## 4.2 Attribution Integrity

sql

`-- Attributions whose figure or work no longer exist SELECT a.* FROM j314.attribution a LEFT JOIN j314.figure f ON f.id = a.figureid LEFT JOIN j314.work w   ON w.id = a.workid WHERE f.id IS NULL OR (a.workid IS NOT NULL AND w.id IS NULL); -- Uncertain vs verified distribution SELECT status, COUNT(*) AS n FROM j314.attribution GROUP BY status ORDER BY status;`

## 4.3 Quote-Text Round-Trip Checks

sql

`-- Sample a few spans and round-trip their text SELECT v.spanid,        v.sourcetitle,       v.startoffset,       v.endoffset,       v.spantext FROM j314.vspantext v ORDER BY random() LIMIT 20;`

Manual spot-checking against `Journal314AllQuotes.txt` will reveal any offset drift or segmentation oddities.

## 5. Quotation Mark Anomalies

The `anomalies_quote_marks.json` file encodes cases where quotation marks do not behave as expected. Typical anomaly classes:

- **Unbalanced Quotes**
    
    - A span contains an opening quote with no matching closing quote.
        
- **Nested Quotes With Flat Segmenter**
    
    - A segmentation routine that splits spans on naïve quote heuristics can mis-segment nested quotes (e.g., Augustine quoting Paul).
        
- **OCR/Encoding Ghosts**
    
    - Strange characters acting as quotes (curly quotes, “prime” symbols) may not be recognized by simplistic regex detectors.
        

## 5.1 Example Remediation Strategy

1. **Build a Normalized Text Layer**
    
    - Preprocess the snapshot text to normalize all quotes to straight `"`.
        
    - Keep a mapping from normalized positions back to canonical offsets.
        
2. **Run Balance Checks on Normalized Text**
    
    - Use a simple state machine to flag spans where:
        
        - The number of `"` is odd.
            
        - A span begins inside an open quote and ends outside without closing.
            
3. **Repair or Re-Segment Spans**
    
    - Where possible, adjust `startoffset`/`endoffset` to align with quote boundaries.
        
    - Where not possible, mark spans as “quote-anomalous” in a new metadata field or via a `spantag` of type `phenomenon` or `paradox`.
        

## 6. Recommended Next Technical Steps

1. **Run Full Integrity Views and Log Baselines**
    
    - Persist snapshots of:
        
        - `j314.vintegritydashboard`
            
        - Count of spans, attributions, verified vs uncertain attributions.
            
    - Treat these as baseline metrics for future migrations.
        
2. **Create an “Anomaly Tagging” Convention**
    
    - Define a `theme` or `phenomenon` taxonomy entries:
        
        - `QUOTE_MISMATCH`
            
        - `HEADER_DRIFT`
            
        - `OFFSET_SUSPECT`
            
    - Use `j314.spantag` to mark problematic spans rather than altering the evidence itself.
        
3. **Introduce Explicit Provenance Fields Where Needed**
    
    - For example, an additional `provenance` column on `j314.attribution` could indicate:
        
        - `journal314-section-header`
            
        - `manual-verified-edition`
            
        - `secondary-scholarship`
            
4. **Build a Small “Verification Workbench”**
    
    - A simple UI that:
        
        - Shows `spantext`, associated figure/work, status, and notes.
            
        - Allows flipping `status` from `uncertain` to `verified` or `disputed`.
            
        - Writes back to `j314.attribution`.
            

## 7. Conclusion

From a strictly technical perspective, Journal314 as loaded is:

- **Structurally sound** – constraints, views, and functions are coherently designed, with careful separation of evidence vs interpretation.
    
- **Epistemically cautious** – intentionally marks attributions as `uncertain`, forcing later verification.
    
- **Textually imperfect** – inherits the messiness of the original text (quote imbalances, section ambiguities), which must be acknowledged and systematized rather than concealed.
    

This is a healthy starting point for a long-term, evidence-disciplined research corpus—but **not** yet a final scholarly edition.

text

``*** ## 3. `journal314_recovery_action_plan.md` ```markdown --- title: "Journal314 Recovery and Hardening Action Plan" filename: "journal314_recovery_action_plan.md" version: "v1.0" status: "draft-initial" created: "2026-01-06" author: "AI Research Assistant" tags:   - journal314  - remediation  - action-plan  - evidence-discipline --- # Journal314 Recovery and Hardening Action Plan ## 1. Objective Define a **concrete, staged plan** to: 1. Protect Journal314 from offset drift and silent corruption. 2. Upgrade attributions from “uncertain” to “verified” or “disputed.” 3. Make the dataset safe for:    - Philosophical analysis.   - AI-assisted querying and RAG.   - Eventual publication or sharing. The plan assumes your current state: the J314 schema is loaded, `seed.sql` and CSVs are in place, and `Journal314AllQuotes.txt` is treated as the canonical text. ## 2. Phase 0 – Freeze and Snapshot (Week 0–1) **Goal:** Ensure a stable, reproducible baseline. 1. **File Locking**    - Treat `Journal314AllQuotes.txt` as read-only.   - Store it in a version-controlled repo (e.g., `journal314-corpus`) with:     - Commit message describing the ingest.     - The SHA-256 hash in a `README.md` or manifest. 2. **Database Snapshot**    - Take a full logical dump of the `j314` schema:     ```bash     pg_dump -n j314 -f journal314_baseline_2026-01-06.sql your_database_name     ```   - Optionally, create an `exportsnapshot` row that freezes a “v1 baseline” set of spans and attributions. 3. **Metric Baseline**    - Record:     - Total spans.     - Total attributions.     - Count of `uncertain` vs `verified` vs `disputed`.     - Integrity dashboard output.      This becomes your benchmark for future improvements. ## 3. Phase 1 – Integrity and Instrumentation (Week 1–3) **Goal:** Make it impossible to accidentally degrade integrity. 1. **RLS / Permissions (Optional but Recommended)**    - Restrict write access on:     - `j314.sourcedocument`     - `j314.sourcetextsnapshot`     - `j314.sourcespan`   - Enforce changes via controlled migration scripts rather than ad-hoc SQL. 2. **Status-Aware Consumers**    - Update any downstream tools (e.g., AI pipelines, dashboards) to:     - Filter `j314.vverifiedspans` by default.     - Always surface `attribution.status` and `attribution.method`. 3. **Integrity Checks in CI**    - If you are using a Git-backed workflow:     - Add scripts that run:       - `SELECT * FROM j314.vintegritydashboard;`       - Sanity checks on span counts, verified counts, etc.     - Fail the pipeline if anomalies exceed thresholds. ## 4. Phase 2 – Verification Campaign (Week 3–12+) **Goal:** Convert Journal314 from “uncertain import” to a partially verified scholarly corpus. ### 4.1 Strategy Work in **figure-focused sprints**: 1. Pick a figure (e.g., Augustine). 2. Extract all spans and attributions for that figure. 3. Compare each span to:    - A trusted edition of the work.   - Existing secondary literature where applicable. 4. For each span:    - Confirm figure and work: set `status = 'verified'`.   - If misattributed or dubious: set `status = 'disputed'` and annotate `note`. ### 4.2 Practical Queries ```sql -- All spans for a given figure (e.g., Augustine) SELECT v.spanid,        v.spantext,       a.status,       a.method,       w.title AS worktitle FROM j314.vspantext v JOIN j314.attribution a ON a.sourcespanid = v.spanid JOIN j314.figure f ON f.id = a.figureid LEFT JOIN j314.work w ON w.id = a.workid WHERE f.canonicalname = 'Augustine' ORDER BY v.startoffset;``

Update statuses as you verify:

sql

`UPDATE j314.attribution SET status = 'verified',     note   = 'Verified against [Edition XYZ, page NN].' WHERE id = :attribution_id;`

## 4.3 Outputs

- Periodic metrics:
    
    - Percent of attributions verified per figure.
        
    - Total number of disputed spans.
        
- A growing body of **verification notes** that becomes its own scholarly artifact.
    

## 5. Phase 3 – Textual Cleanup and Re-Ingestion (If Needed)

**Goal:** If the canonical text is noisy (OCR artifacts, mis-paragraphing), create a **cleaned edition** without destroying existing evidence.

1. **Produce a Cleaned Edition**
    
    - Start from `Journal314AllQuotes.txt`.
        
    - Fix:
        
        - Obvious OCR errors.
            
        - Misplaced headers.
            
        - Broken quote marks.
            
    - Save as `Journal314AllQuotes_cleaned_v2.txt` with a new SHA-256 hash.
        
2. **Ingest as a New Snapshot**
    
    - Add a new `sourcedocument` row or reuse the existing one with:
        
        - A new `sourcetextsnapshot` row.
            
    - Rebuild spans programmatically with a deterministic mapping from the cleaned text.
        
3. **Map Old Spans to New Spans**
    
    - For each old span, attempt to find the same substring in the cleaned text:
        
        - If unique match is found → create a mapping table.
            
        - If ambiguous → mark as needing manual resolution.
            
4. **Migrate Attributions**
    
    - Use the mapping table to transfer attributions from old span IDs to new ones.
        
    - Preserve the original snapshot as a historical layer.
        

## 6. Phase 4 – AI and Analytics Integration (Parallel / Later)

**Goal:** Safely leverage AI while honoring evidence discipline.

1. **RAG Layer**
    
    - Use only:
        
        - `j314.vverifiedspans` for high-trust contexts.
            
        - `uncertain` spans with clear flagging in exploratory contexts.
            
2. **Phenomenology and Tagging**
    
    - Use AI to propose `spantag` entries (themes, motifs, paradoxes) but:
        
        - Keep `method = 'automated'`.
            
        - Allow human reviewers to accept/adjust/reject.
            
3. **Universality & Disparity Analytics**
    
    - Once verification reaches a critical mass:
        
        - Run `insightresonance` and `insightdisparityresonance` for thematic exploration.
            
        - Compute figure “fingerprints” via `insightfigurefingerprint`.
            

## 7. Governance and Documentation

- Maintain a **Journal314 Operational Manual** that documents:
    
    - The canonical corpus (filenames, hashes).
        
    - The ingest pipeline.
        
    - Verification protocols and status definitions.
        
    - Version history of significant schema or corpus changes.
        
- For each major milestone (e.g., “Augustine verified”), consider:
    
    - A short internal report.
        
    - A checkpoint dump of the database.
        

## 8. Minimal Checklist

If time is tight, **do at least this**:

1. Lock the canonical text + snapshot the DB.
    
2. Enforce status-aware quote consumption.
    
3. Start verifying one figure at a time and upgrade `status`.
    
4. Never silently edit the source text; always re-ingest via a controlled process.
    

Everything else can be layered on as capacity grows.

text

``*** ## 4. `journal314_quickref_guide.md` ```markdown --- title: "Journal314 Quick Reference Guide" filename: "journal314_quickref_guide.md" version: "v1.0" status: "draft-initial" created: "2026-01-06" author: "AI Research Assistant" tags:   - journal314  - quickref  - postgres  - evidence-layer --- # Journal314 Quick Reference Guide > **Audience:** Future Adam (and collaborators) who need to remember “what lives where” in the Journal314 system and how to get at it quickly. ## 1. Conceptual Layers - **Evidence Layer**   - `sourcedocument` – which file?  - `sourcetextsnapshot` – which version of the text?  - `sourcespan` – which offsets into that text?  - `attribution` – whose words, from which work, with what status? - **Interpretation Layer**   - `note`, `noteanchor` – your commentary anchored in spans.  - `claim`, `claimanchor` – explicit claims with evidence links. - **Taxonomy / Tag Layer**   - `theme`, `motif`, `phenomenon`, `paradox`, `term`.  - `spantag` – tags applied to spans with a weight and method. - **Analytics Layer**   - `spanembedding`, `similarityedge`, `cluster`, `tensionvector`, `spantensionscore`.  - Functions: `insightresonance`, `insightdisparityresonance`, etc. ## 2. Core Tables Cheat Sheet | Table                | Purpose                                     | Notes                                       | |----------------------|---------------------------------------------|--------------------------------------------| | `j314.sourcedocument`      | File-level corpus metadata               | Title, path, SHA-256 hash                  | | `j314.sourcetextsnapshot`  | Text snapshots per document             | Canonical text + `iscurrent` flag          | | `j314.sourcespan`          | Canonical quote spans (offset-based)    | No quote text stored here                  | | `j314.attribution`         | Span → figure/work mapping              | `status` = verified/uncertain/disputed     | | `j314.figure`              | Authors / thinkers                      | Canonical name, tradition, era, etc.       | | `j314.work`                | Works per figure                        | e.g., *Confessions*, *City of God*         | | `j314.note`, `j314.noteanchor`  | Notes and their evidence          | Anchor roles: evidence, illustration, etc. | | `j314.claim`, `j314.claimanchor`| Claims and their support/contradiction | Epistemic status + confidence             | | `j314.spantag`             | Tags (theme/motif/phenomenon/paradox)  | Weight + method (manual/automated/imported)| ## 3. Most Useful Views - `j314.vspantext`     - Joins spans, snapshot text, and sourcedocument to give you:    - `spanid`, `spantext`, `sourcetitle`, `canonicalpath`, offsets, etc.  - Use when you want “just show me the actual text and where it comes from.” - `j314.vverifiedspans`     - Filters to only spans with `attribution.status = 'verified'`.  - This is your **publication-grade** quote source. - `j314.vintegritydashboard`     - Aggregates integrity issues:    - Anchored claims missing anchors.    - Unattributed spans.    - Non-verified attributions.  - Good “health check” query. ## 4. Common Query Patterns ### 4.1 Get Random Spans for Sanity Checks ```sql SELECT v.spanid,        v.sourcetitle,       v.startoffset,       v.endoffset,       v.spantext FROM j314.vspantext v ORDER BY random() LIMIT 10;``

## 4.2 Get All Spans for a Figure

sql

`SELECT v.spanid,        v.spantext,       a.status,       w.title AS worktitle FROM j314.vspantext v JOIN j314.attribution a ON a.sourcespanid = v.spanid JOIN j314.figure f ON f.id = a.figureid LEFT JOIN j314.work w ON w.id = a.workid WHERE f.canonicalname = 'Augustine' ORDER BY v.startoffset;`

## 4.3 Only Verified Quotes for a Figure

sql

`SELECT vv.spanid,        vv.spantext,       vv.figurname,       vv.worktitle FROM j314.vverifiedspans vv WHERE vv.figurname = 'Augustine' ORDER BY vv.startoffset;`

## 4.4 Tag Distribution for a Figure

sql

`SELECT * FROM j314.insightfigurefingerprint(   pfigureid := (SELECT id FROM j314.figure WHERE canonicalname = 'Augustine'),  ptopn     := 10 );`

## 5. Status Semantics (Attribution)

- `verified`
    
    - Checked against external sources; suitable for publication.
        
- `uncertain`
    
    - Imported from Journal314 section structure; plausible but unverified.
        
- `disputed`
    
    - Known issues (misattribution, ambiguity, or unresolved conflict).
        

**Rule of thumb:**

- For exploratory internal work: you may include `uncertain` spans with clear labeling.
    
- For anything public or strongly inferential: **stick to `verified`**.
    

## 6. Minimal Workflow Reminders

- **Never edit the canonical text in-place.**
    
    - Instead, create a new snapshot and regenerate spans.
        
- **Always anchor interpretations.**
    
    - Use `noteanchor` and `claimanchor` so every interpretive statement can be traced back to spans.
        
- **Treat the DB as evidence, not a draft.**
    
    - Drafts, long-form reflections, etc., should live in your writing environment (e.g., Obsidian) and only be anchored into J314 as needed.
        

If you forget everything else, remember:

> _Spans are offsets, attributions are opinions about who spoke them, and “verified” is the only status that deserves trust without asterisks._

text

``*** ## 5. `journal314_master_index.md` ```markdown --- title: "Journal314 Master Index" filename: "journal314_master_index.md" version: "v1.0" status: "draft-initial" created: "2026-01-06" author: "AI Research Assistant" tags:   - journal314  - index  - overview  - navigation --- # Journal314 Master Index A navigational index for the Journal314 ecosystem: schema objects, datasets, and key documentation. ## 1. Core Files (This Thread’s Pack) - **Schema & Seed**   - `j314_schema_pack.sql` – full Postgres schema for Journal314.  - `seed.sql` – deterministic ingestion of `Journal314AllQuotes.txt` into the schema. - **CSVs**   - `source_document.csv` – documents.  - `source_text_snapshot.csv` – text snapshots.  - `source_span.csv` – spans.  - `figure.csv` – figures.  - `work.csv` – works.  - `attribution.csv` – attributions.  - `figure_metrics.csv` – precomputed figure-level metrics. - **Auxiliary**   - `manifest.json` – describes the dataset pack.  - `anomalies_quote_marks.json` – precomputed quote-mark anomalies.  - `README.md` – short overview of the dataset pack.  - `314QuoteExtract_GPT5.md` – high-level GPT-5-style quote extraction prompt and commentary for Journal314. ## 2. Database Objects (By Layer) ### 2.1 Evidence Layer - Tables:   - `j314.sourcedocument`  - `j314.sourcetextsnapshot`  - `j314.sourcespan`  - `j314.attribution` - Views:   - `j314.vspantext`  - `j314.vverifiedspans` ### 2.2 Interpretation Layer - Tables:   - `j314.note`  - `j314.noteanchor`  - `j314.claim`  - `j314.claimanchor` ### 2.3 Taxonomy Layer - Tables:   - `j314.theme`  - `j314.motif`  - `j314.phenomenon`  - `j314.paradox`  - `j314.term`  - `j314.spantag` ### 2.4 Analytics Layer - Tables:   - `j314.spanembedding`  - `j314.similarityedge`  - `j314.cluster`  - `j314.clustermember`  - `j314.tensionvector`  - `j314.spantensionscore` - Functions:   - `j314.fnspandisparity(aspan uuid, bspan uuid)`  - `j314.insightresonance(pqueryspan uuid, pembeddingmodel text, pk integer, pminsimilarity real, pverifiedonly boolean)`  - `j314.insightdisparityresonance(...)`  - `j314.insightparadoxdensitybytheme(pthemecode text)`  - `j314.insightfigurefingerprint(pfigureid uuid, ptopn integer)` ### 2.5 Integrity Layer - Views:   - `j314.vintegrityanchoredclaimsmissinganchors`  - `j314.vintegrityunattributedspans`  - `j314.vintegritynonverifiedattributions`  - `j314.vintegritydashboard` - Triggers / Functions:   - `j314.fnsnapshotsinglecurrent` – enforce single `iscurrent` snapshot per doc.  - `j314.fnspantagrefcheck` – enforce tag foreign-key consistency.  - `j314.fntouchupdatedat` – keep `note.updatedat` current. ## 3. Documentation Set (Conceptual) This index assumes the following documents are available in your docs/knowledge system: - **Executive and Integrity**   - `journal314_anomalies_executive_brief.md`  - `journal314_anomalies_technical_analysis.md`  - `journal314_recovery_action_plan.md`  - `journal314_quickref_guide.md`  - `journal314_master_index.md` (this file) - **Prompting / AI Integration**   - `314QuoteExtract_GPT5.md` – quote extraction and evidence discipline prompt.  - Any additional “Professor Nihil” / Nihiltheism engine prompts referencing Journal314. - **Design Rationale**   - A future `j314_design_rationale.md` (recommended):    - Why span-offset quoting?    - Why all attributions start as `uncertain`?    - How Universality / Disparity metrics relate to Nihiltheism research. ## 4. Navigation by Use-Case ### 4.1 “I want quotes from a given figure” 1. Use `journal314_quickref_guide.md` → see example queries. 2. In SQL:    - For *any* quotes: join `vspantext` + `attribution`.   - For *verified* quotes: query `vverifiedspans`. ### 4.2 “I want to know if the corpus is healthy” 1. Read `journal314_anomalies_executive_brief.md` (top-level status). 2. Consult `journal314_anomalies_technical_analysis.md` (details). 3. Run:    ```sql   SELECT * FROM j314.vintegritydashboard;``

## 4.3 “I want to start fixing things”

1. Follow `journal314_recovery_action_plan.md`.
    
2. Start with:
    
    - Freezing the corpus.
        
    - Verifying one figure’s spans.
        
    - Upgrading `attribution.status`.
        

## 4.4 “I forgot how the schema fits together”

1. Check:
    
    - `journal314_quickref_guide.md` for a compressed overview.
        
    - This `journal314_master_index.md` for object-level navigation.
        

## 5. Future Expansion Slots

Reserved ideas for future files:

- `journal314_nt_vs_existentialism_mappings.md` – mapping spans to NT vs existentialist value responses.
    
- `journal314_ren_alignment_guide.md` – how spans align with the six REN chapters (Nulling, Exposure, etc.).
    
- `journal314_universality_disparity_playbook.md` – practical use of disparity functions and universality metrics.
    

---

Treat this index as the **table of contents** of the Journal314 system. When disoriented, start here, then jump to the quickref or the action plan depending on whether you need orientation, query recipes, or next steps.

text

`*** If you want, the next step can be to tighten any one of these (e.g., add concrete SQL for a specific figure like Eckhart or Camus, or wire them explicitly into your Professor Nihil / 314Mode workflows).`

1. [https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/22906/50cfadfa-5a5c-4b16-a18b-834103287236/Gemini_314Mode.md](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/22906/50cfadfa-5a5c-4b16-a18b-834103287236/Gemini_314Mode.md)
2. [https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/22906/acafb92d-8d22-4a63-8444-d2042084095c/Recll_314Mode.md](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/22906/acafb92d-8d22-4a63-8444-d2042084095c/Recll_314Mode.md)
3. [https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/22906/e2129193-96cc-4f27-9b5f-d2775b7a4568/314QuoteExtract_GPT5.md](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/22906/e2129193-96cc-4f27-9b5f-d2775b7a4568/314QuoteExtract_GPT5.md)
4. [https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/22906/9c4eee69-14f9-4192-ad69-df84dc768001/Journal314-Quote-Extraction.md](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/22906/9c4eee69-14f9-4192-ad69-df84dc768001/Journal314-Quote-Extraction.md)
5. [https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/22906/900eef5b-28a4-424d-9d32-589d915da119/MiniMax_314fullextraction_code.md](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/22906/900eef5b-28a4-424d-9d32-589d915da119/MiniMax_314fullextraction_code.md)
6. [https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/22906/20dcb84c-cf35-4905-a632-c264ae5a7de3/figure_metrics.csv](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/22906/20dcb84c-cf35-4905-a632-c264ae5a7de3/figure_metrics.csv)
7. [https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/22906/0a14ffaf-1457-4352-8027-508d35c5058b/source_span.csv](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/22906/0a14ffaf-1457-4352-8027-508d35c5058b/source_span.csv)
8. [https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/22906/5e9ca5a0-d586-4fa3-9c9a-e75824db71ae/source_text_snapshot.csv](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/22906/5e9ca5a0-d586-4fa3-9c9a-e75824db71ae/source_text_snapshot.csv)
9. [https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/22906/6b40e4a7-c183-46da-b99a-82b0437463cf/figure.csv](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/22906/6b40e4a7-c183-46da-b99a-82b0437463cf/figure.csv)
10. [https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/22906/65da8414-a9b3-42bb-bfcd-2b319ea4ae91/j314_schema_pack.sql](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/22906/65da8414-a9b3-42bb-bfcd-2b319ea4ae91/j314_schema_pack.sql)
11. [https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/22906/8041fa02-abb4-4b2f-80b1-c973a7a08c63/work.csv](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/22906/8041fa02-abb4-4b2f-80b1-c973a7a08c63/work.csv)
12. [https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/22906/4958eb0e-b503-4ca9-bf76-25c5f0724ab7/README.md](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/22906/4958eb0e-b503-4ca9-bf76-25c5f0724ab7/README.md)
13. [https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/22906/8c663bd1-6665-4f21-b308-13c5a4ad57b5/source_document.csv](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/22906/8c663bd1-6665-4f21-b308-13c5a4ad57b5/source_document.csv)
14. [https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/22906/8d952e04-0452-429e-a137-791c86b71ff2/manifest.json](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/22906/8d952e04-0452-429e-a137-791c86b71ff2/manifest.json)
15. [https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/22906/bc41d317-7e75-49ef-8e8d-680968d69e6d/seed.sql](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/22906/bc41d317-7e75-49ef-8e8d-680968d69e6d/seed.sql)
16. [https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/22906/d87115ec-c8c5-4691-837d-2a6636be6fa3/attribution.csv](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/22906/d87115ec-c8c5-4691-837d-2a6636be6fa3/attribution.csv)
17. [https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/22906/ef32e6c5-5405-4802-9e6e-830c6844dff1/anomalies_quote_marks.json](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/22906/ef32e6c5-5405-4802-9e6e-830c6844dff1/anomalies_quote_marks.json)