---
date: 2025-09-28 14:03:21
created: 2025-09-28 14:02:07
Folder:
  - Prompts / Prompt Tools
---

# 📦 Prompt Forge — Instruction Packet for LOVEABLE

<br>

## Core Tenets

- Single User Mode: no collaboration, no teams, no roles. Remove all sharing APIs and UI.
- Local-First: IndexedDB + export/import bundles. Optional sync (Google Drive, Obsidian).
- Deterministic Pipelines: reproducible enhancement runs with manifest logging.
- Automation Everywhere: batch, template chains, scheduled jobs, watch folders.

* * *

## Data Model (TypeScript Interfaces)

```
export type ModelID = "gpt-5-thinking"|"gpt-5"|"claude-opus"|"gemini-2.5"|"local-llm";

export interface PFPrompt {
  id: string;
  title: string;
  raw: string;
  domain?: ("philosophy"|"tech"|"creative"|"research"|"journal314"|"nihiltheism"|"ren"|"code")[];
  metadata: { createdAt: string; updatedAt: string; source?: "paste"|"file"|"web"|"extension"};
  contextLinks?: string[];
}

export interface PFEnhancementProfile {
  id: string;
  name: string;
  description: string;
  pipeline: PipelineStep[];
  modelRouter: RouterRule[];
  scoring: ScoreWeights;
  constraints: PFConstraint[];
  styleHints?: Record<string,string>;
}

export interface PipelineStep {
  id: string;
  kind: "preprocess"|"expand"|"constrain"|"critic"|"revise"|"format"|"verify";
  systemPrompt: string;
  temperature: number;
  maxTokens: number;
  model?: ModelID;
  hiddenCoT?: boolean;
}

export interface RouterRule {
  match: { stepKinds?: PipelineStep["kind"][]; tokenBudgetMin?: number; domainIncludes?: string[] };
  model: ModelID;
}

export interface ScoreWeights {
  clarity: number; specificity: number; structure: number; logicalRigor: number;
  phenomenology: number; innovation: number; NTAlignment: number;
}

export interface PFConstraint { id: string; description: string; enforcement: "critic"|"hard-trim"|"regex-guard"; }

export interface PFRecord {
  id: string;
  promptId: string;
  profileId: string;
  inputSnapshot: PFPrompt;
  output: string;
  trace: TraceItem[];
  scores: ScoreBreakdown;
  tags: string[];
  version: number;
}

export interface TraceItem { stepId: string; model: ModelID; input: string; output: string; tokensIn: number; tokensOut: number; durationMs: number; }

export interface PFCollection {
  id: string; name: string; description?: string;
  rule?: AutoFolderRule;
  promptIds: string[];
}

export interface AutoFolderRule {
  anyDomain?: string[]; allTags?: string[]; textIncludes?: string[]; scoreMin?: number;
}

export interface PFSettings {
  encryptionEnabled: boolean; passphraseSet: boolean;
  apiKeys: Partial<Record<ModelID,string>>;
  sync: { drive?: { enabled: boolean; rootFolderId?: string }, obsidian?: { enabled: boolean; vaultPath?: string } };
  keyboard: Record<string,string>;
}
```

* * *

## Preloaded Profiles

<br>

### PEC Ω (Philosophical Exploration Catalyst)

```
{
  "id":"pec-omega",
  "name":"PEC Ω",
  "description":"Philosophical enhancement with iterative densification.",
  "pipeline":[
    {"id":"pp","kind":"preprocess","systemPrompt":"Normalize and classify domain.","temperature":0,"maxTokens":5000},
    {"id":"exp","kind":"expand","systemPrompt":"Expand with rigor, define terms, add counterpositions.","temperature":0.4,"maxTokens":12000},
    {"id":"con","kind":"constrain","systemPrompt":"Enforce constraints; mark NT vs Existentialism.","temperature":0.1,"maxTokens":6000},
    {"id":"cri","kind":"critic","systemPrompt":"Score with rubric; propose fixes.","temperature":0,"maxTokens":2000},
    {"id":"rev","kind":"revise","systemPrompt":"Apply fixes without drift.","temperature":0.2,"maxTokens":6000},
    {"id":"fmt","kind":"format","systemPrompt":"Emit clean Markdown prompt.","temperature":0,"maxTokens":4000},
    {"id":"ver","kind":"verify","systemPrompt":"Check contradictions, undefined terms.","temperature":0,"maxTokens":2000}
  ],
  "modelRouter":[
    {"match":{"stepKinds":["preprocess","critic","verify"]},"model":"gpt-5"},
    {"match":{"stepKinds":["expand","revise","format"]},"model":"gpt-5-thinking"}
  ],
  "scoring":{"clarity":15,"specificity":15,"structure":10,"logicalRigor":15,"phenomenology":15,"innovation":10,"NTAlignment":20},
  "constraints":[
    {"id":"nt-vs-ex","description":"Never collapse NT into existentialism.","enforcement":"critic"},
    {"id":"define-once","description":"Define terms at first use.","enforcement":"hard-trim"},
    {"id":"no-consolation","description":"No consolation rhetoric.","enforcement":"regex-guard"}
  ]
}
```

### Professor Nihil Ledger

```
{
  "id":"prof-nihil-ledger",
  "name":"Professor Nihil — Ledger",
  "description":"Extract quotes → inference → NT claim. Output JSONL + enhanced prompt.",
  "pipeline":[
    {"id":"xp","kind":"expand","systemPrompt":"Extract quotes, infer meaning, draft NT claim.","temperature":0.2,"maxTokens":12000},
    {"id":"lg","kind":"format","systemPrompt":"Emit JSONL {quote,inference,nt_claim,source}. Then enhanced prompt.","temperature":0,"maxTokens":6000},
    {"id":"cr","kind":"critic","systemPrompt":"Check fidelity, flag over-interpretation.","temperature":0,"maxTokens":3000}
  ],
  "modelRouter":[
    {"match":{"stepKinds":["expand","format"]},"model":"gpt-5-thinking"},
    {"match":{"stepKinds":["critic"]},"model":"gpt-5"}
  ],
  "scoring":{"clarity":10,"specificity":15,"structure":10,"logicalRigor":20,"phenomenology":15,"innovation":10,"NTAlignment":20}
}
```

* * *

## UI/UX Specification

<br>

Three-Panel Layout

- Left Sidebar: Collections (static + Smart), filters (domain, score, tags, recency).
- Main Panel: Input editor (Markdown), controls: Enhance, Profile chooser, Re-run, Batch, Schedule, Copy, Export, Diff. Context Drawer for attached files/links.
- Right Panel: Output with tabs (Enhanced, Diff, Trace, Scores, Ledger, JSON). Copy buttons per tab. Re-run per step.

<br>

Buttons/Shortcuts

- Copy, Copy System, Copy User, Copy JSON, Export Markdown/Bundle, Diff, Pin, Duplicate, Open in Obsidian, Send to Watch Outbox.
- Shortcuts: Enhance (Cmd/Ctrl+E), Diff (Cmd/Ctrl+D), Batch (Cmd/Ctrl+Shift+B), Clipboard Watch toggle (Cmd/Ctrl+Shift+W).

* * *

## Automation

- Batch Processing: run profiles on multiple prompts.
- Template Chains: link multiple profiles into sequential runs.
- Scheduled Jobs: CRON-like auto-enhance/export.
- Watch Folders: drop file → auto-enhanced → exported.
- Smart Collections: auto-populate by domain, score, or tags.

* * *

## Import/Export

- Export as Markdown, JSON trace, or .pfbundle.json (full bundle).
- Export collections → zip bundles.
- Obsidian export: .md with YAML front-matter + .trace.json.
- Optional Google Drive sync (hash-based deduplication).

* * *

## Security

- Local AES-GCM encryption for API keys + bundles (passphrase optional).
- No telemetry by default.
- Redaction filter for sensitive strings before API calls.

* * *

## Acceptance Tests

1. Deterministic re-runs with same settings.
2. Bundle import/export yields identical outputs.
3. No team/collaboration UI or APIs present.
4. Ledger profile emits valid JSONL.
5. Obsidian export generates .md + .trace.json.
6. Batch run handles 25 prompts with per-item logs.
7. Watch Folder detects and processes within 5s.
8. Scores render (0–100) with NT Alignment included.

* * *

<br>