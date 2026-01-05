---
title: Outline Structure for Mindmap-Research
created: 2025-11-05
updated: 2025-11-22T11:20:00
tags:
  - mindmap
  - markmap
  - outline
  - researchplan
backlink: "[["
description:
---
---

title: Philosophical Mindmap Structure

tags: [mindmap, philosophy, ZK, knowledge-base, PKM]

---

  

# Philosophical Mindmap — Obsidian Structure

  

> [!summary]

> Think **graph**, not outline.  

> Use clear node types, stable top-level “pillars,” and consistent link patterns.  

> The goal: a mindmap that scales for **years** and actually supports **long-term recall**, not just storage.

  

---

  

## 1. Three-Layer Architecture

  

### 1.1 World Layer – Domains (Slow-Changing Pillars)

  

Create top-level “domain” notes (each can be its own canvas or hub note):

  

- [[Metaphysics]]

- [[Epistemology]]

- [[Ethics]]

- [[Philosophy of Mind]]

- [[Political Philosophy]]

- [[Philosophical Theology]]

- [[Logic & Methodology]]

- [[History of Philosophy]]

- [[Live Projects]]

  

Use each domain as a **map of content (MOC)** / hub, not a dumping ground.

  

---

  

### 1.2 System Layer – Thematic Constellations

  

Inside each domain, create “constellation” notes that cluster related issues.

  

Example under `[[Metaphysics]]`:

  

- [[Nothingness & Being (Constellation)]]

- [[Personal Identity & Self (Constellation)]]

- [[Time & Temporality (Constellation)]]

- [[Modality & Necessity (Constellation)]]

  

Example under `[[Philosophical Theology]]`:

  

- [[Arguments For and Against God (Constellation)]]

- [[Mysticism & Ineffability (Constellation)]]

- [[Problem of Evil & Suffering (Constellation)]]

  

Each constellation note should:

  

- define the **question space**  

- list links to **concept**, **argument**, **thinker**, and **experience** notes

  

---

  

### 1.3 Atom Layer – Content Nodes

  

Use **typed notes** for atoms. Suggested note types:

  

- **Concept note** – `[[Concept - Ontological Anxiety (Heidegger)]]`

- **Question note** – `[[Q - Can meaning survive radical nihilism?]]`

- **Argument note** – `[[Arg - Zapffe’s Argument for Antinatalism]]`

- **Counterargument note** – `[[CA - Objection to Zapffe’s Antinatalism]]`

- **Text / Quote note** – `[[Txt - Heidegger BT §40 on Anxiety]]`

- **Thinker note** – `[[Thinker - Heidegger]]`, `[[Thinker - Cioran]]`

- **Experience / Phenomenology note** – `[[Phen - Ego Dissolution Experience]]`

- **Synthesis / Insight note** – `[[Synth - Nihilism as Epistemic Clearing]]`

  

You can standardize prefixes: `Concept -`, `Arg -`, `Q -`, etc., to help search.

  

---

  

## 2. Center Layout as a Ring

  

Instead of a single exploding central topic, use a **ring**:

  

- Inner “ring”: Domain hubs (e.g. `[[Metaphysics]]`, `[[Epistemology]]`)

- Second ring: Constellations (e.g. `[[Nothingness & Being (Constellation)]]`)

- Outer layer: Atom notes (concepts, arguments, quotes, etc.)

  

In Obsidian:

  

- Each domain is a note + optional canvas.  

- Constellations can be sub-MOCs (`[[Metaphysics MOC#Nothingness & Being]]` or separate notes).  

- Atom notes hang off each constellation via links.

  

This keeps the **center stable** while content grows at the edges.

  

---

  

## 3. Node Templates for Long-Term Retention

  

Use Obsidian templates to enforce structure.

  

### 3.1 Concept Note Template

  

Note title example: `Concept - Ontological Anxiety (Heidegger)`

  

```md

# {{title}}

  

type:: concept

domain:: [[Metaphysics]]

constellation:: [[Anxiety & Groundlessness (Constellation)]]

related_thinkers:: [[Thinker - Heidegger]], [[Thinker - Tillich]]

status:: working

  

## Definition

_Your own 1–2 sentence definition._

  

## Anchor Example

A concrete scenario or image that makes the concept memorable.

  

## Links

- Used in arguments:: [[Arg - Anxiety as Disclosure of Being]]

- Parallels:: [[Concept - Angst (Kierkegaard)]], [[Concept - Dread (Tillich)]]

- Opposed by:: [[Concept - Everydayness & Distraction]]

Goal: future you should re-enter the concept in <10 seconds.

  

  

  

  

3.2 Argument Note Template

  

  

Title example: Arg - Hick’s Soul-Making Theodicy

# {{title}}

  

type:: argument

domain:: [[Philosophical Theology]]

constellation:: [[Problem of Evil & Suffering (Constellation)]]

status:: under review

  

## Formulation

  

1. Premise 1: ...

2. Premise 2: ...

3. Premise 3: ...

4. Conclusion: ...

  

## Supports

- [[Concept - Soul-Making (Hick)]]

- [[Concept - Value of Suffering]]

  

## Critiqued by

- [[CA - Gratuitous Suffering Objection]]

- [[CA - Nihilistic Collapse of Theodicies]]

  

## Textual Sources

- [[Txt - Hick Evil and the God of Love §X]]

Each argument note is a single clearly formulated argument.

  

  

  

  

3.3 Text / Quote Note Template

  

  

Title example: Txt - Cioran on the Uselessness of Existence

# {{title}}

  

type:: text

source_work:: _The Trouble with Being Born_

author:: [[Thinker - Cioran]]

domain:: [[Metaphysics]]

tags:: #quote

  

## Excerpt

> “...”  (exact words or close paraphrase)

  

## Why It Matters

Short note on why this passage is important for your system or theme.

  

## Connected Concepts

- [[Concept - Nothingness as Ontological Ground]]

- [[Concept - Radical Pessimism]]

  

## Related Arguments

- [[Arg - Existence as a Cosmic Error]]

- [[Arg - Against Optimistic Humanism]]

This doubles as both bibliography and idea map.

  

  

  

  

4. Link Types and Patterns

  

  

Use explicit link semantics via headings, bullet labels, or inline fields.

  

In notes, you can structure like:

## Supports

- [[Arg - X]]  <!-- This argument supports the current note -->

  

## Critiques

- [[CA - Y]]

  

## Illustrates

- [[Phen - Night of Absolute Dread]]

  

## Parallel To

- [[Concept - Śūnyatā (Nāgārjuna)]]

Informal but consistent semantics:

  

- Supports → arguments or quotes that back the note’s thesis
- Critiques → objections or rival positions
- Illustrates → phenomenological or concrete examples
- Parallel to → structurally similar ideas in other traditions
- Transforms → synthesis notes that revise or extend earlier ones

  

  

Example from a concept note:

## Network

  

Supports

- [[Arg - Nothingness as the Condition of Revelation]]

  

Critiques

- [[CA - Naturalistic Reduction of Nothingness]]

  

Illustrates

- [[Phen - Experience of Ego Dissolution]]

  

Parallel To

- [[Concept - Śūnyatā (Nāgārjuna)]]

  

  

  

  

5. Using the Map to Train Memory

  

  

  

5.1 “Route” Notes (Tour Paths)

  

  

Create route notes to periodically re-walk key chains.

  

Example: Route - Anxiety → Nothingness → Mysticism

# Route - Anxiety → Nothingness → Mysticism

  

1. [[Concept - Ontological Anxiety (Heidegger)]]

2. [[Concept - Nothingness as Ontological Ground]]

3. [[Phen - Naked Anxiety Experience]]

4. [[Concept - Mystical Union as Annihilation]]

5. [[Synth - From Anxiety to Transcendent Nothingness]]

  

> Revisit frequency:: monthly

> Purpose:: Keep the Anxiety–Nothingness–Mysticism arc “online” in memory.

You can review this route as a spaced repetition path.

  

  

  

  

5.2 Question Nodes as Entry Points

  

  

Example: Q - Does mystical experience provide evidence of anything?

# Q - Does mystical experience provide evidence of anything?

  

type:: question

domains:: [[Philosophical Theology]], [[Epistemology]]

  

## Relevant Constellations

- [[Mysticism & Ineffability (Constellation)]]

- [[Religious Epistemology (Constellation)]]

  

## For

- [[Arg - Mystical Consensus as Evidence]]

- [[Arg - Transformative Experience as Justification]]

  

## Against

- [[Arg - Naturalistic Explanation of Mysticism]]

- [[Arg - Incommunicability and Epistemic Isolation]]

  

## Current View (You)

- [[Synth - Mystical Experience as Formally Ambiguous but Existentially Decisive]]

Revisiting question notes lights up multiple regions of the graph.

  

  

  

  

5.3 Temporal Tags

  

  

Use simple fields or tags for attention management:

attention:: hot      # hot | incubating | archived

or tags:

tags:: #hot

  

- hot – actively in use
- incubating – important but not currently central
- archived – done for now, but kept for reference

  

  

  

  

  

6. Separating Source, Interpretation, and System

  

  

You can visualize a mini-stack for any topic:

  

  

6.1 Source Layer

  

  

- [[Txt - Nietzsche GS §341 Eternal Recurrence]]
- [[Concept - Eternal Recurrence (Nietzsche)]]
- [[Thinker - Nietzsche]]

  

  

  

6.2 Interpretive Layer (Your Reading)

  

  

- [[Synth - Eternal Recurrence as Existential Stress Test]]  
    

- Links back to source notes
- Links forward to your own arguments and concepts

-   
    

  

  

  

6.3 System Layer (Your Framework)

  

  

- [[Arg - Why Eternal Recurrence Fails as a Response to Radical Nihilism]]
- [[Synth - Nihiltheistic View of Recurrence and Nothingness]]  
    

- Links into your core framework hub: [[Nihiltheism - Core Axioms (Constellation)]]

-   
    

  

  

This keeps:

  

- What Nietzsche said
- What you think Nietzsche is doing
- How it fits into your own system

  

  

clearly separated but tightly linked.

  

  

  

  

7. Workflow: How to Grow the Map Sane

  

  

[!tip] Minimal friction rule

Every new idea or reading should generate a maximum of 3 new notes at first. Refine later.

  

  

7.1 Capture Rule

  

  

For a new reading or insight:

  

- Create 1 concept or argument note
- Optionally create 1 text/quote note
- Link both to at least one existing constellation

  

  

  

7.2 Weekly Curation

  

  

Once a week:

  

- Open one constellation note (e.g. [[Nihilism (Constellation)]])
- Check if it’s bloated → split into sub-constellations like:  
    

- [[Epistemic Nihilism (Constellation)]]
- [[Moral Nihilism (Constellation)]]
- [[Existential Nihilism (Constellation)]]

-   
    
- Promote any overgrown section to its own note/canvas.

  

  

  

7.3 Monthly Integration

  

  

Once a month:

  

- Add 2–3 new synthesis notes stating your current best view on some cluster.
- Add or update route notes for key arcs you want to keep alive.
- Re-tag a few nodes (hot → incubating, etc.).

  

  

  

  

  

8. Minimal Starter Checklist

  

  

To implement today:

  

- Create 8–10 domain hub notes (MOCs).
- For each, create 3–5 constellation notes.
- Define note templates for:  
    

- Concept
- Question
- Argument
- Counterargument
- Text/Quote
- Thinker
- Phenomenology/Experience
- Synthesis/Insight

-   
    
- Standardize link semantics sections: Supports, Critiques, Illustrates, Parallel to, Transforms.
- Add your next 10–20 ideas/readings into this schema without inventing new node types.

  

  

Once that skeleton exists, the Obsidian graph view, local backlinks, and MOCs will give you a mindmap that works as an external, living philosophical brain rather than a decorative spiderweb.