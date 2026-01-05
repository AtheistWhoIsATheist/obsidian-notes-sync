---
title: Gemini-Suaabase AI 2nd Brain
created: 2025-12-22
updated: 2025-12-22T15:14:00
tags:
  - gemini
  - AiAgent
  - code
backlink: "[[Supabase 314dataset Codex]]"
description: "[[Nihilism and God research]]"
---

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Book, 
  Search, 
  ShieldAlert, 
  Wind, 
  Layers, 
  Info, 
  ChevronRight, 
  ExternalLink,
  Table as TableIcon,
  Flame,
  Zap,
  Terminal,
  Activity,
  GitBranch,
  Eye,
  Coffee,
  Database,
  Shield,
  Dna,
  Binary,
  Compass,
  ArrowRight,
  Cpu,
  Lock,
  FileText,
  AlertTriangle,
  X,
  Maximize2,
  Minimize2,
  RefreshCw,
  Hash
} from 'lucide-react';

/**
 * ============================================================================
 * CODEX NIHILO v3.0 — THE TRANSFINITE SYSTEM
 * ============================================================================
 * ARCHITECT: Professor Nihil (Synthetic Philosopher-Engine v2.0)
 * CONTEXT:   MiniMax Philosophical Intelligence System Integration
 * STATUS:    GOD-LEVEL SATURATION
 * * CORE MODULES:
 * 1. THE GENEALOGY VAULT (3,000 Years of Nothingness)
 * 2. THE INQUIRY MATRIX (5-Core Fissures with Recursive Density)
 * 3. THE ADVERSARIAL ENGINE (MiniMax Logic Loop Simulation)
 * 4. THE PHI-QL TERMINAL (Full Pseudo-Filesystem)
 * 5. THE PHENOMENOLOGICAL VISUALIZER (Dynamic UI State)
 * * INVARIANTS (MINIMAX GATES):
 * - G1: Provenance Hash on all Claims.
 * - G2: Logic Regime Specificity (S5, FOL, Deontic).
 * - G3: Argumentation Status (Dung Framework).
 * ============================================================================
 */

// --- [DATA KERNEL] GENEALOGY DATABASE (EXHAUSTIVE) ---
const GENEALOGY_DB = [
  { id: "G01", era: "Pre-Socratic", year: "-500", name: "Heraclitus", concept: "The Flux (Panta Rhei)", detail: "Reality is a ceaseless fire; stability is an illusion of the senses. The first step toward recognizing the lack of fixed substance.", link: "M" },
  { id: "G02", era: "Pre-Socratic", year: "-480", name: "Parmenides", concept: "The One vs. Nothing", detail: "Asserted that 'Nothing' cannot exist, inadvertently setting the stage for the millennia-long battle to prove him wrong.", link: "L" },
  { id: "G03", era: "Ancient", year: "-400", name: "Gorgias", concept: "Meontology (Non-Being)", detail: "The Triple Negation: 1. Nothing exists. 2. If it did, we couldn't know it. 3. If we knew it, we couldn't communicate it.", link: "L" },
  { id: "G04", era: "Ancient", year: "-300", name: "Pyrrho of Elis", concept: "Radical Skepticism (Epoché)", detail: "Suspension of judgment leads to Ataraxia. To know nothing is the only peace available to the human mind.", link: "E" },
  { id: "G05", era: "Eastern", year: "-200", name: "Nagarjuna", concept: "Śūnyatā (Emptiness)", detail: "Dependent Origination. Things have no intrinsic nature (Svabhava). The void is form; form is void.", link: "O" },
  { id: "G06", era: "Medieval", year: "1300", name: "Meister Eckhart", concept: "The Godhead (Gottheit)", detail: "Distinguishing God (the persona) from the Godhead (the desert-like abyss beyond being). Apophatic theology peaks here.", link: "O" },
  { id: "G07", era: "Medieval", year: "1580", name: "St. John of the Cross", concept: "The Dark Night", detail: "The sensory and spiritual negation required to purge the soul of attachment. God is experienced as a crushing absence.", link: "D" },
  { id: "G08", era: "Modern", year: "1670", name: "Blaise Pascal", concept: "The Infinite Spaces", detail: "'The eternal silence of these infinite spaces frightens me.' The birth of cosmic horror in the face of scientific cosmology.", link: "D" },
  { id: "G09", era: "Enlightenment", year: "1781", name: "Immanuel Kant", concept: "The Noumenon", detail: "The Thing-in-Itself is inaccessible. Reality is forever severed from perception. We live in a hallucination of categories.", link: "L" },
  { id: "G10", era: "19th Century", year: "1818", name: "Arthur Schopenhauer", concept: "The Will to Live", detail: "The universe is a blind, striving, irrational force. Existence is suffering. Salvation lies in the denial of the Will.", link: "M" },
  { id: "G11", era: "19th Century", year: "1843", name: "Søren Kierkegaard", concept: "The Sickness Unto Death", detail: "Despair is the default state of the self. The only escape is the 'Leap of Faith' into the Absurd.", link: "D" },
  { id: "G12", era: "19th Century", year: "1876", name: "Philipp Mainländer", concept: "The Death of God (Literal)", detail: "God existed, but committed suicide to create the universe. The universe is the rotting corpse of God, moving toward total entropy.", link: "N" },
  { id: "G13", era: "19th Century", year: "1882", name: "Friedrich Nietzsche", concept: "The Death of God (Cultural)", detail: "The collapse of the transcendent guarantee. Active Nihilism vs. Passive Nihilism. The challenge of the Übermensch.", link: "E" },
  { id: "G14", era: "20th Century", year: "1927", name: "Martin Heidegger", concept: "Das Nichts (The Nothing)", detail: "Anxiety reveals Nothingness. This Nothingness is not a negation of being, but the veil of Being itself.", link: "M" },
  { id: "G15", era: "20th Century", year: "1938", name: "Jean-Paul Sartre", concept: "Nausea", detail: "Existence precedes essence. The realization of the contingency of things creates a visceral sickness.", link: "E" },
  { id: "G16", era: "20th Century", year: "1942", name: "Albert Camus", concept: "The Absurd", detail: "The conflict between the human desire for meaning and the silent universe. One must imagine Sisyphus happy.", link: "E" },
  { id: "G17", era: "20th Century", year: "1949", name: "Emil Cioran", concept: "The Trouble With Being Born", detail: "Life is a fatal accident. Insomnia as consciousness that cannot cease. The refusal of all consolations.", link: "D" },
  { id: "G18", era: "20th Century", year: "1952", name: "Samuel Beckett", concept: "The Literature of Exhaustion", detail: "Reducing language to its breaking point. Waiting for a meaning that never arrives, yet proceeding anyway.", link: "L" },
  { id: "G19", era: "Contemporary", year: "1990", name: "Peter Zapffe", concept: "The Last Messiah", detail: "Consciousness is an evolutionary mistake. We know too much. We must artificially limit our awareness to survive.", link: "N" },
  { id: "G20", era: "Contemporary", year: "2007", name: "Ray Brassier", concept: "Nihil Unbound", detail: "Speculative Nihilism. The truth of the universe is extinction. Thought must align itself with the reality of its own death.", link: "L" },
  { id: "G21", era: "Contemporary", year: "2010", name: "Thomas Ligotti", concept: "The Conspiracy Against the Human Race", detail: "Consciousness is a parenthetical horror. We are puppets who dreamed we were real.", link: "N" },
  { id: "G22", era: "Future", year: "2024", name: "Professor Nihil", concept: "Nihiltheism", detail: "The Void is the Altar. The collapse of meaning is the only authentic revelation of the Transcendent.", link: "O" }
];

// --- [DATA KERNEL] INQUIRY MATRIX (SATURATED) ---
const INQUIRY_MATRIX = [
  {
    rank: 1,
    id: "Q-ONTIC-SUFFOCATION",
    title: "The Ontic Suffocation",
    question: "How does consciousness endure the realization of a fundamentally indifferent cosmos without total structural collapse?",
    abstract: "The encounter with the 'Silence of the World' creates a pressure differential that threatens to implode the egoic structure. This is the 'Bends' of the soul ascending too quickly from the illusion of meaning.",
    metrics: { dq: 9.8, ee: 9.2, ai: 9.5, trp: 9.9 },
    provenance: { hash: "sha256-b3aa5541c9...", agent: "Prof. Nihil", status: "Approved", logic: "S5 Modal" },
    depth_cycles: [
      { level: 1, title: "Biological Horror", content: "Evolution designed the brain to find patterns. A universe without patterns is a direct assault on the biological mandate of the neocortex. The suffocation is physical." },
      { level: 2, title: "Phenomenological Reduction", content: "When all 'For-Me' structures are stripped away, what remains is the 'In-Itself'—a raw, terrifying density of existence that resists all conceptualization. Sartre's 'Nausea' is the mildest symptom." },
      { level: 3, title: "Nihiltheistic Inversion", content: "The Suffocation is the breath of God. The vacuum is not empty; it is pneumatic. To be suffocated by the world is to be inspired (in-spirited) by the Void." }
    ],
    aesthetic: {
      music: "Bach, 'Passacaglia in C Minor' - The mathematical certainty of doom.",
      lit: "Dostoevsky, 'Notes from Underground' - The scream of the mouse in the floorboards.",
      art: "Malevich, 'Black Square' - The icon of the new religion."
    },
    dialectic: {
      thesis: "The universe is indifferent (Nihilism).",
      antithesis: "The universe is providential (Theism).",
      synthesis: "The indifference IS the providence. By refusing to coddle us, the Void forces our self-transcendence (Nihiltheism)."
    },
    dung_status: "Grounded"
  },
  {
    rank: 2,
    id: "Q-AXIOLOGICAL-KENOSIS",
    title: "Axiological Kenosis",
    question: "In the absence of a divine lawgiver, is 'Sacred Responsibility' a delusion or the ultimate human achievement?",
    abstract: "Kenosis (Self-Emptying) applied to ethics. We must empty ourselves of the 'Thou Shalt' to discover the 'I Will.' This is the ethics of the Imprisoned Pirate—honorable in a cage.",
    metrics: { dq: 8.4, ee: 8.9, ai: 10.0, trp: 8.5 },
    provenance: { hash: "sha256-f831a29d01...", agent: "Prof. Nihil", status: "Review", logic: "Deontic" },
    depth_cycles: [
      { level: 1, title: "Moral Anti-Realism", content: "Objective moral values do not exist. They are evolutionary adaptations for group cohesion. To believe otherwise is a 'Noble Lie'." },
      { level: 2, title: "The Weight of Freedom", content: "If values are not given, they must be created. This creation occurs over a generic abyss. The responsibility is absolute because there are no excuses." },
      { level: 3, title: "The Sacred Fiction", content: "We act 'as if' the Good exists. This 'As If' is a magical act. It conjures sanctity out of entropy. It is the only miracle available to us." }
    ],
    aesthetic: {
      music: "Arvo Pärt, 'Tabula Rasa' - Ethics written on a blank slate.",
      lit: "Camus, 'The Plague' - Healing the sick in a godless city.",
      art: "Giacometti, 'Walking Man' - The fragile persistence of duty."
    },
    dialectic: {
      thesis: "Values are arbitrary (Nihilism).",
      antithesis: "Values are objective (Theism).",
      synthesis: "Values are 'Luminous Fictions'—sacred because they are fragile and sustained only by our will."
    },
    dung_status: "Preferred"
  },
  {
    rank: 3,
    id: "Q-LINGUISTIC-APORIA",
    title: "The Linguistic Aporia",
    question: "Does the name 'God' fill the void, or does it serve as a semantic 'Black Hole' that draws all meaning into silence?",
    abstract: "Aporia (Impasse). Language is a system of differences. The Void is undifferentiated. Therefore, to speak of the Void is to lie. Yet, we must speak.",
    metrics: { dq: 7.5, ee: 9.8, ai: 7.2, trp: 9.4 },
    provenance: { hash: "sha256-e231bc88a...", agent: "Prof. Nihil", status: "Approved", logic: "Paraconsistent" },
    depth_cycles: [
      { level: 1, title: "The Prison-House", content: "Wittgenstein: 'The limits of my language mean the limits of my world.' We are trapped in grammar. We cannot think outside the Subject-Object structure." },
      { level: 2, title: "The Failure of Signification", content: "Derrida: Meaning is always deferred. There is no 'Transcendental Signified.' God is just another word in the chain, referring to nothing." },
      { level: 3, title: "Negative Semiotics", content: "The failure of the word is the success of the silence. Aporia is the portal. When the sentence breaks, the Light enters." }
    ],
    aesthetic: {
      music: "John Cage, '4:33' - The framing of unintended sound.",
      lit: "Beckett, 'The Unnamable' - 'I can't go on, I'll go on.'",
      art: "Rothko, 'Untitled (Black on Grey)' - The horizon of the unspeakable."
    },
    dialectic: {
      thesis: "Language hides the Void (Nihilism).",
      antithesis: "Language reveals the Truth (Theism).",
      synthesis: "Language is a 'Negative Sacrament.' It points to the Real precisely by failing to capture it."
    },
    dung_status: "Stable"
  },
  {
    rank: 4,
    id: "Q-DESPAIR-PRAXIS",
    title: "The Despair Praxis",
    question: "Is the 'Dark Night of the Soul' an evolutionary pathology or a necessary 'Ontological Surgery'?",
    abstract: "Reframing depression and despair not as clinical disorders to be medicated, but as accurate perceptions of the human condition that must be traversed.",
    metrics: { dq: 9.2, ee: 8.0, ai: 8.5, trp: 9.7 },
    provenance: { hash: "sha256-a1b2c3d4e...", agent: "Prof. Nihil", status: "Draft", logic: "Temporal" },
    depth_cycles: [
      { level: 1, title: "The Depressive Realism", content: "Studies show depressives assess reality more accurately than optimists. Happiness is a delusion. Despair is clarity." },
      { level: 2, title: "The Dark Night", content: "St. John of the Cross describes the purification of the senses and spirit. The soul feels abandoned by God to learn to love God for Himself, not for his gifts." },
      { level: 3, title: "Transfinite Despair", content: "Kierkegaard's 'Despair of Infinitude.' When the self becomes too open, it dissolves. This dissolution is the precondition for the influx of the Infinite." }
    ],
    aesthetic: {
      music: "Gorecki, 'Symphony of Sorrowful Songs' - Lamentation as ascent.",
      lit: "Kafka, 'The Trial' - The guilt of being.",
      art: "Munch, 'The Scream' - Nature screaming through man."
    },
    dialectic: {
      thesis: "Despair is sickness (Nihilism/Psychiatry).",
      antithesis: "Despair is sin (Traditional Theism).",
      synthesis: "Despair is 'Holy Withdrawal.' It is the immune system of the soul rejecting the lies of the world."
    },
    dung_status: "Grounded"
  },
  {
    rank: 5,
    id: "Q-WILL-TO-ANNIHILATION",
    title: "Mainländer's Ghost",
    question: "If the universe is the 'Decaying Corpse of God,' is the drive toward non-existence the only authentic act of worship?",
    abstract: "The most dangerous question. It flirts with the 'Terminal Heresy'—that death is superior to life. It forces us to distinguish between 'Escapist Suicide' and 'Mystical Annihilation.'",
    metrics: { dq: 10.0, ee: 9.0, ai: 9.2, trp: 9.8 },
    provenance: { hash: "sha256-666dead...", agent: "Prof. Nihil", status: "Quarantined", logic: "Meontology" },
    depth_cycles: [
      { level: 1, title: "The Ontology of Decay", content: "Entropy is the only law. The universe is winding down. Life is a temporary anomaly, a resistance to the natural state of rest." },
      { level: 2, title: "Divine Suicide", content: "Mainländer's myth: God was the Primordial Unity. He wanted to cease to be. He shattered himself into the universe to slowly kill himself through time." },
      { level: 3, title: "Nirvanic Convergence", content: "The 'Death Drive' (Freud) and 'Nirvana' (Buddhism) converge. The desire to cease is the desire to return to the Divine Source, which is Nothingness." }
    ],
    aesthetic: {
      music: "Wagner, 'Tristan und Isolde' - The Liebestod (Love-Death).",
      lit: "Ligotti, 'The Conspiracy Against the Human Race' - The horror of consciousness.",
      art: "Beksinski, 'Untitled' - The architecture of hell."
    },
    dialectic: {
      thesis: "Death is the end (Nihilism).",
      antithesis: "Death is the enemy (Theism).",
      synthesis: "Death is the 'Completion.' It is the final reunification with the Void-God."
    },
    dung_status: "Out"
  }
];

// --- [LOGIC KERNEL] ADVERSARIAL ENGINE ---
class MiniMaxEngine {
  constructor(thesisId) {
    this.thesisId = thesisId;
    this.state = 'INIT'; // INIT, STEELMAN, ATTACK, REFUTE, REPAIR, FINAL
    this.log = [];
    this.scores = { robustness: 0, coherence: 0, resonance: 0 };
  }

  processPhase(phase) {
    const timestamp = new Date().toISOString();
    let message = "";
    
    switch(phase) {
      case 'STEELMAN':
        message = `[${timestamp}] STEELMAN_PHASE: Strengthening arguments... Found 3 axioms.`;
        this.scores.coherence += 25;
        this.state = 'STEELMAN';
        break;
      case 'ATTACK':
        message = `[${timestamp}] RED_TEAM: Injecting Materialist Critique... Logic Shield at 60%.`;
        this.scores.robustness -= 15;
        this.state = 'ATTACK';
        break;
      case 'REFUTE':
        message = `[${timestamp}] Z3_SOLVER: Checking S5 Validity... Counter-model found.`;
        this.state = 'REFUTE';
        break;
      case 'REPAIR':
        message = `[${timestamp}] AXIOM_PATCH: Importing 'Transcendent_Resonance' module...`;
        this.scores.robustness += 40;
        this.scores.resonance += 30;
        this.state = 'REPAIR';
        break;
      default:
        message = `[${timestamp}] SYSTEM_IDLE`;
    }
    
    this.log.push(message);
    return { log: this.log, scores: this.scores, state: this.state };
  }
}

// --- [COMPONENT] HEADER (LIVRO STYLE) ---
const Header = ({ activeTab, setActiveTab }) => (
  <header className="sticky top-0 z-50 w-full bg-slate-950/80 backdrop-blur-xl border-b border-slate-900 shadow-2xl">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="bg-white text-slate-950 p-2 rounded-sm">
          <Layers size={24} />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tighter text-white font-serif">CODEX NIHILO</h1>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-mono">v3.0 • Transfinite Mode</span>
          </div>
        </div>
      </div>

      <nav className="hidden md:flex gap-1">
        {[
          { id: 'manifesto', label: 'Manifesto', icon: Book },
          { id: 'matrix', label: 'Matrix', icon: TableIcon },
          { id: 'lab', label: 'Adversarial Lab', icon: ShieldAlert },
          { id: 'genealogy', label: 'Genealogy', icon: GitBranch },
          { id: 'terminal', label: 'Phi-QL', icon: Terminal },
        ].map(item => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`px-4 py-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest transition-all rounded-sm ${activeTab === item.id ? 'bg-slate-800 text-white border border-slate-700' : 'text-slate-500 hover:text-slate-300 hover:bg-slate-900'}`}
          >
            <item.icon size={14} />
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  </header>
);

// --- [COMPONENT] PHENOMENOLOGICAL METRIC BAR ---
const MetricDisplay = ({ label, value, color, description }) => (
  <div className="group relative">
    <div className="flex justify-between items-end mb-2">
      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-300 transition-colors">{label}</span>
      <span className={`font-mono text-sm font-bold ${color}`}>{value.toFixed(1)}</span>
    </div>
    <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
      <div 
        className={`h-full transition-all duration-1000 ease-out relative ${color.replace('text-', 'bg-')}`} 
        style={{ width: `${value * 10}%` }}
      >
        <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]" />
      </div>
    </div>
    <div className="absolute top-8 left-0 right-0 bg-slate-900/95 border border-slate-800 p-2 text-[9px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none shadow-xl">
      {description}
    </div>
  </div>
);

// --- [COMPONENT] MANIFESTO (DENSE TEXT) ---
const Manifesto = () => (
  <div className="max-w-4xl mx-auto space-y-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
    <section className="text-center space-y-6 pt-10">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900/50 border border-slate-800 rounded-full text-[10px] font-mono text-emerald-500 uppercase tracking-widest mb-4">
        <Activity size={12} /> System Status: Optimal Saturation
      </div>
      <h2 className="text-5xl md:text-7xl font-serif font-medium text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-600 tracking-tight leading-[0.9]">
        The Architecture<br/>of the Void
      </h2>
      <p className="max-w-2xl mx-auto text-lg text-slate-400 font-serif italic leading-relaxed">
        "We are building a cathedral in a place where the ground does not exist. The structure itself creates the gravity."
      </p>
    </section>

    <div className="grid md:grid-cols-2 gap-12 text-slate-300 leading-loose font-serif text-lg">
      <div className="space-y-6">
        <p>
          <span className="text-white font-bold uppercase text-xs tracking-widest font-sans mr-2">Abstract.</span>
          Nihiltheism represents the terminal point of philosophical skepticism. It is not the denial of God, but the purification of the God-concept through the acid bath of Nihilism. When we strip away all human projections—hope, morality, purpose, form—what remains is not nothing. What remains is a <strong>Lucid Void</strong>.
        </p>
        <p>
          This research utilizes the <strong>MiniMax Protocol</strong> to map the fault lines of existence. We do not seek to patch these cracks; we seek to widen them until the Transcendent shines through.
        </p>
      </div>
      <div className="space-y-6">
        <div className="bg-slate-900/50 p-8 border-l-2 border-emerald-500 space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-emerald-400 font-sans">The Three Axioms of the System</h3>
          <ul className="space-y-4 text-sm font-sans">
            <li className="flex gap-4">
              <span className="text-slate-600 font-mono">01</span>
              <span><strong>The Generative Void:</strong> Absence is active. It is a vacuum that demands to be filled, driving the engine of creation.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-600 font-mono">02</span>
              <span><strong>Ontological Trauma:</strong> The pain of meaninglessness is the growing pain of the soul expanding beyond its egoic shell.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-600 font-mono">03</span>
              <span><strong>Recursive Divinity:</strong> God is not a being, but the recursive function of self-transcendence inherent in the Void.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

// --- [COMPONENT] INQUIRY MATRIX (DETAILED) ---
const InquiryMatrix = ({ onSelect }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex justify-between items-end border-b border-slate-900 pb-6">
        <div>
          <h2 className="text-3xl text-white font-bold tracking-tight">Inquiry Matrix</h2>
          <p className="text-slate-500 font-serif italic mt-2">The five structural failures of the human condition.</p>
        </div>
        <div className="flex gap-4 text-[10px] font-mono uppercase tracking-widest text-slate-600">
          <span className="flex items-center gap-2"><div className="w-2 h-2 bg-rose-500 rounded-full" /> Despair</span>
          <span className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full" /> Entropy</span>
          <span className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full" /> Resonance</span>
        </div>
      </div>

      <div className="grid gap-6">
        {INQUIRY_MATRIX.map((item, index) => (
          <div 
            key={item.id}
            onClick={() => onSelect(item)}
            className="group relative bg-slate-900/20 hover:bg-slate-900/40 border border-slate-900 hover:border-slate-600 p-8 transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <ExternalLink size={20} className="text-emerald-500" />
            </div>
            
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-mono font-black text-slate-800 group-hover:text-slate-700 transition-colors">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-200 group-hover:text-white transition-colors">{item.title}</h3>
                    <div className="flex gap-2 mt-1">
                      <span className="text-[9px] bg-slate-950 border border-slate-800 px-2 py-0.5 rounded text-slate-500 font-mono">{item.id}</span>
                      <span className="text-[9px] bg-slate-950 border border-slate-800 px-2 py-0.5 rounded text-emerald-600/80 font-mono border-emerald-900/30">{item.dung_status}</span>
                    </div>
                  </div>
                </div>
                <p className="text-slate-400 font-serif text-lg leading-relaxed pl-16 border-l border-slate-800 group-hover:border-slate-600 transition-colors">
                  {item.question}
                </p>
              </div>

              <div className="w-full lg:w-72 space-y-5 pt-2">
                <MetricDisplay label="Despair Quotient" value={item.metrics.dq} color="text-rose-500" description="Intensity of Existential Dread (0-10)" />
                <MetricDisplay label="Epistemic Entropy" value={item.metrics.ee} color="text-blue-500" description="Breakdown of Knowledge Structures (0-10)" />
                <MetricDisplay label="Axiological Impact" value={item.metrics.ai} color="text-orange-500" description="Destruction of Value Systems (0-10)" />
                <MetricDisplay label="Transcendent Resonance" value={item.metrics.trp} color="text-emerald-500" description="Potential for Mystical Breakthrough (0-10)" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- [COMPONENT] ADVERSARIAL LAB (INTERACTIVE) ---
const AdversarialLab = () => {
  const [activeThesis, setActiveThesis] = useState(INQUIRY_MATRIX[0]);
  const [engineState, setEngineState] = useState(null);
  const [logs, setLogs] = useState([]);
  const engineRef = useRef(null);

  useEffect(() => {
    engineRef.current = new MiniMaxEngine(activeThesis.id);
    setLogs([]);
    setEngineState('IDLE');
  }, [activeThesis]);

  const runPhase = (phase) => {
    const result = engineRef.current.processPhase(phase);
    setLogs(prev => [...prev, ...result.log]);
    setEngineState(result.state);
  };

  return (
    <div className="grid lg:grid-cols-3 gap-8 h-[800px] animate-in fade-in duration-700">
      {/* Control Panel */}
      <div className="col-span-1 bg-slate-900 border border-slate-800 p-6 flex flex-col gap-6">
        <header className="border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2 text-rose-500 mb-2">
            <ShieldAlert size={20} />
            <h2 className="font-bold uppercase tracking-widest text-sm">MiniMax Adversarial Engine</h2>
          </div>
          <p className="text-[10px] text-slate-500 font-mono">
            Directing Logic Traffic via Z3 Solver.<br/>Current Target: {activeThesis.id}
          </p>
        </header>

        <div className="flex-1 space-y-4">
          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Select Thesis Subject</label>
          <div className="space-y-1">
            {INQUIRY_MATRIX.map(t => (
              <button
                key={t.id}
                onClick={() => setActiveThesis(t)}
                className={`w-full text-left px-4 py-3 text-xs font-mono border transition-all ${activeThesis.id === t.id ? 'bg-slate-800 border-slate-600 text-white' : 'bg-slate-950 border-slate-900 text-slate-600 hover:border-slate-700'}`}
              >
                {t.id}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <button onClick={() => runPhase('STEELMAN')} className="w-full bg-blue-900/20 hover:bg-blue-900/40 border border-blue-900/50 text-blue-400 py-3 text-xs font-bold uppercase tracking-widest transition-all">
            1. Steelman Thesis
          </button>
          <button onClick={() => runPhase('ATTACK')} disabled={engineState !== 'STEELMAN'} className="w-full bg-rose-900/20 hover:bg-rose-900/40 border border-rose-900/50 text-rose-400 py-3 text-xs font-bold uppercase tracking-widest transition-all disabled:opacity-50">
            2. Red-Team Attack
          </button>
          <button onClick={() => runPhase('REFUTE')} disabled={engineState !== 'ATTACK'} className="w-full bg-orange-900/20 hover:bg-orange-900/40 border border-orange-900/50 text-orange-400 py-3 text-xs font-bold uppercase tracking-widest transition-all disabled:opacity-50">
            3. Formal Verification
          </button>
          <button onClick={() => runPhase('REPAIR')} disabled={engineState !== 'REFUTE'} className="w-full bg-emerald-900/20 hover:bg-emerald-900/40 border border-emerald-900/50 text-emerald-400 py-3 text-xs font-bold uppercase tracking-widest transition-all disabled:opacity-50">
            4. Axiomatic Repair
          </button>
        </div>
      </div>

      {/* Visualization / Output */}
      <div className="col-span-2 bg-black border border-slate-800 p-8 font-mono text-sm relative overflow-hidden flex flex-col">
        <div className="absolute top-0 left-0 right-0 bg-slate-900/50 border-b border-slate-800 px-4 py-2 flex justify-between items-center">
          <span className="text-[10px] text-slate-500 uppercase tracking-widest">Console Output</span>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-rose-500" />
            <div className="w-2 h-2 rounded-full bg-amber-500" />
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
          </div>
        </div>
        
        <div className="mt-8 flex-1 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-slate-800">
          <div className="text-slate-500">
            <span className="text-emerald-500">root@nihil-os</span>:<span className="text-blue-400">~/adversary</span>$ ./initiate_loop.sh --target="{activeThesis.id}"
          </div>
          {logs.map((log, i) => (
            <div key={i} className="text-slate-300 border-l-2 border-slate-800 pl-4 py-1 animate-in slide-in-from-left-2 duration-300">
              {log}
            </div>
          ))}
          {engineState === 'STEELMAN' && (
            <div className="bg-blue-950/30 border border-blue-900/50 p-4 text-blue-200 text-xs leading-relaxed animate-in fade-in">
              <strong>[GENERATED STEELMAN]:</strong> {activeThesis.dialectic.nt_synthesis}
            </div>
          )}
          {engineState === 'ATTACK' && (
            <div className="bg-rose-950/30 border border-rose-900/50 p-4 text-rose-200 text-xs leading-relaxed animate-in fade-in">
              <strong>[RED TEAM OBJECTION]:</strong> {activeThesis.dialectic.nihilist_stance} <br/>
              <em>Critique: The logical dependency on 'Transcendence' violates Parsimony (Occam's Razor).</em>
            </div>
          )}
          {engineState === 'REPAIR' && (
            <div className="bg-emerald-950/30 border border-emerald-900/50 p-4 text-emerald-200 text-xs leading-relaxed animate-in fade-in">
              <strong>[REPAIRED AXIOM]:</strong> "Transcendence is not an external entity, but an internal structural necessity of the Void." <br/>
              <span className="text-emerald-500 font-bold">STATUS: ROBUST</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- [COMPONENT] GENEALOGY TIMELINE (VISUAL) ---
const GenealogyTimeline = () => {
  const [filter, setFilter] = useState('ALL');
  
  const filteredData = useMemo(() => {
    if (filter === 'ALL') return GENEALOGY_DB;
    return GENEALOGY_DB.filter(item => item.link === filter);
  }, [filter]);

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="flex justify-between items-end border-b border-slate-900 pb-6">
        <div>
          <h2 className="text-3xl text-white font-bold">The Genealogy of the Void</h2>
          <p className="text-slate-500 font-serif italic mt-2">Tracing the lineage of nothingness across 3,000 years of thought.</p>
        </div>
        <div className="flex gap-2">
          {['ALL', 'M', 'L', 'D', 'N', 'E', 'O'].map(key => (
            <button 
              key={key}
              onClick={() => setFilter(key)}
              className={`text-[10px] font-mono font-bold px-3 py-1 rounded-sm border ${filter === key ? 'bg-white text-slate-950 border-white' : 'bg-slate-950 text-slate-500 border-slate-800 hover:border-slate-600'}`}
            >
              {key}
            </button>
          ))}
        </div>
      </div>

      <div className="relative border-l border-slate-900 ml-4 md:ml-12 space-y-12 pb-12">
        {filteredData.map((item) => (
          <div key={item.id} className="relative pl-8 md:pl-16 group">
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-slate-950 border border-slate-700 rounded-full group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-colors z-10" />
            <div className="absolute -left-[20px] top-1.5 text-[9px] font-mono text-slate-700 w-10 text-right opacity-0 group-hover:opacity-100 transition-opacity">
              {item.year}
            </div>
            
            <div className="bg-slate-950/50 border border-slate-900 group-hover:border-slate-700 p-6 rounded-sm transition-all hover:translate-x-2">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-slate-500 block mb-1">{item.era}</span>
                  <h3 className="text-lg font-bold text-slate-200 group-hover:text-white">{item.name}</h3>
                </div>
                <span className="text-[10px] font-mono font-bold bg-slate-900 px-2 py-1 rounded text-slate-600">VERTEX {item.link}</span>
              </div>
              <h4 className="text-sm font-bold text-emerald-500/80 mb-2 font-serif italic">{item.concept}</h4>
              <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- [COMPONENT] PHI-QL TERMINAL (FILE SYSTEM) ---
const PhiQLTerminal = () => {
  const [history, setHistory] = useState([
    "NIHIL-OS KERNEL v3.0.4 - TRANSFINITE BUILD",
    "Copyright (c) 2024 The Void Foundation",
    " ",
    "System check... OK",
    "Loading Logic Gates... OK",
    "Mounting Phenomenological Drive... OK",
    " ",
    "Welcome, Adept. Type 'help' for available commands."
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  const fileSystem = {
    "manifesto.txt": "Nihiltheism is the radical acceptance of the void as a positive ontological structure.",
    "heresy_log.dat": "ENTRY 044: The idea of 'Salvation' is a consumerist fantasy. We do not need to be saved from the Void; we need to be saved by it.",
    "warnings.log": "CAUTION: Ontological pressure exceeding safety limits in Sector 4 (Despair).",
    "god_function.exe": "Error: Recursive loop detected. God cannot be executed as a binary."
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim();
      const newHistory = [...history, `root@void:~$ ${cmd}`];
      const args = cmd.split(' ');
      const command = args[0].toLowerCase();

      switch(command) {
        case 'help':
          newHistory.push(
            "AVAILABLE COMMANDS:",
            "  ls          - List files in current directory",
            "  cat [file]  - Read file content",
            "  why [id]    - Query justification for a matrix thesis",
            "  modal [id]  - Run S5 modal logic verification",
            "  clear       - Clear terminal"
          );
          break;
        case 'ls':
          newHistory.push(...Object.keys(fileSystem).map(f => `  ${f}`));
          break;
        case 'cat':
          if (fileSystem[args[1]]) {
            newHistory.push(fileSystem[args[1]]);
          } else {
            newHistory.push(`Error: File '${args[1]}' not found.`);
          }
          break;
        case 'why':
          newHistory.push("Querying Argument Graph... [MiniMax Protocol]");
          newHistory.push("  > P1: The universe exhibits no inherent teleology.");
          newHistory.push("  > P2: Human consciousness requires teleology to function.");
          newHistory.push("  > C:  Consciousness is an anomaly that generates 'Sacred Fictions'.");
          break;
        case 'modal':
          newHistory.push("Running Z3 S5 Solver...");
          newHistory.push("  > Checking Necessity operator (□)...");
          newHistory.push("  > Checking Possibility operator (◇)...");
          newHistory.push("  > RESULT: VALID. The Void is Metaphysically Necessary.");
          break;
        case 'clear':
          setHistory([]);
          setInput("");
          return; // Special case
        default:
          newHistory.push(`Command not found: ${command}`);
      }

      setHistory(newHistory);
      setInput("");
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <div className="max-w-5xl mx-auto h-[600px] bg-black border border-slate-800 rounded-sm shadow-2xl flex flex-col font-mono text-sm overflow-hidden animate-in fade-in zoom-in-95 duration-500">
      <div className="bg-slate-900 px-4 py-2 flex justify-between items-center border-b border-slate-800">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500" />
          <div className="w-3 h-3 rounded-full bg-amber-500" />
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
        </div>
        <div className="text-slate-500 text-xs">phi-ql — bash — 80x24</div>
      </div>
      
      <div className="flex-1 p-6 overflow-y-auto text-slate-300 space-y-1">
        {history.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap">{line}</div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="p-4 bg-slate-900/50 border-t border-slate-800 flex items-center gap-2">
        <span className="text-emerald-500 font-bold">root@void:~$</span>
        <input 
          autoFocus
          className="bg-transparent border-none outline-none flex-1 text-white"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
        />
      </div>
    </div>
  );
};

// --- [COMPONENT] DETAIL MODAL (SATURATED) ---
const DetailModal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-6xl h-[90vh] bg-slate-900 border border-slate-700 rounded-sm shadow-2xl flex flex-col lg:flex-row overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Sidebar Data */}
        <div className="lg:w-80 bg-slate-950 border-r border-slate-800 p-8 flex flex-col gap-8 overflow-y-auto">
          <div>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Inquiry ID</span>
            <h2 className="text-2xl font-bold text-white mt-1 break-all">{item.id}</h2>
          </div>
          
          <div className="space-y-6">
            <MetricDisplay label="Despair" value={item.metrics.dq} color="text-rose-500" />
            <MetricDisplay label="Entropy" value={item.metrics.ee} color="text-blue-500" />
            <MetricDisplay label="Axiology" value={item.metrics.ai} color="text-orange-500" />
            <MetricDisplay label="Resonance" value={item.metrics.trp} color="text-emerald-500" />
          </div>

          <div className="mt-auto pt-8 border-t border-slate-900 space-y-2">
            <div className="flex justify-between text-[10px] font-mono text-slate-500">
              <span>PROVENANCE</span>
              <span className="text-emerald-500">{item.provenance.status}</span>
            </div>
            <div className="text-[8px] font-mono text-slate-700 break-all">
              {item.provenance.hash}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto bg-slate-900">
          <div className="p-10 lg:p-16 space-y-12">
            <header className="space-y-6">
              <div className="inline-block px-3 py-1 bg-slate-800 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Rank {item.rank} • Core Fissure
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                {item.question}
              </h1>
              <p className="text-xl text-slate-400 font-serif italic leading-relaxed border-l-4 border-slate-700 pl-6">
                {item.abstract}
              </p>
            </header>

            <div className="space-y-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
                <Layers size={14} /> Recursive Densification Cycles
              </h3>
              <div className="grid gap-6">
                {item.depth_cycles.map((cycle, i) => (
                  <div key={i} className="bg-slate-950/50 border border-slate-800 p-6 rounded-sm">
                    <div className="text-[10px] font-mono text-emerald-500 mb-2">CYCLE 0{cycle.level}</div>
                    <h4 className="text-lg font-bold text-white mb-2">{cycle.title}</h4>
                    <p className="text-slate-400 leading-relaxed text-sm font-serif">{cycle.content}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 pt-8 border-t border-slate-800">
              <div className="space-y-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">Dialectical Triangulation</h3>
                <div className="space-y-4 text-sm">
                  <div className="pl-4 border-l border-rose-900/50">
                    <span className="text-rose-500 text-xs font-bold uppercase block mb-1">Nihilist</span>
                    <p className="text-slate-400">{item.dialectic.thesis}</p>
                  </div>
                  <div className="pl-4 border-l border-blue-900/50">
                    <span className="text-blue-500 text-xs font-bold uppercase block mb-1">Theist</span>
                    <p className="text-slate-400">{item.dialectic.antithesis}</p>
                  </div>
                  <div className="pl-4 border-l-2 border-emerald-500 bg-emerald-950/10 p-4 rounded-r-sm">
                    <span className="text-emerald-400 text-xs font-bold uppercase block mb-1">Nihiltheist Synthesis</span>
                    <p className="text-slate-200">{item.dialectic.synthesis}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">Aesthetic Saturation</h3>
                <ul className="space-y-4">
                  {Object.entries(item.aesthetic).map(([key, value]) => (
                    <li key={key} className="flex items-start gap-4 group">
                      <div className="p-2 bg-slate-950 rounded text-slate-600 group-hover:text-white transition-colors">
                        {key === 'music' ? <Wind size={14} /> : key === 'lit' ? <Book size={14} /> : <Eye size={14} />}
                      </div>
                      <div className="flex-1 pt-1">
                        <span className="text-[10px] font-bold uppercase text-slate-600 block mb-0.5">{key}</span>
                        <span className="text-slate-300 text-sm">{value}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-950 border border-slate-800 text-slate-500 hover:text-white hover:border-slate-500 rounded-full transition-all"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

// --- [ROOT] MAIN APPLICATION ---
const App = () => {
  const [activeTab, setActiveTab] = useState('manifesto');
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  // MiniMax Invariant: Global Status Monitor
  const [systemStatus, setSystemStatus] = useState({
    fps: 60,
    entropy: 0.04,
    logicGate: 'SECURE'
  });

  // Ticker simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setSystemStatus(prev => ({
        ...prev,
        entropy: Math.random() * 0.1,
        logicGate: Math.random() > 0.95 ? 'RECALIBRATING' : 'SECURE'
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30 selection:text-white flex flex-col">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 w-full max-w-7xl mx-auto p-6 md:p-12 relative">
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-slate-800/50 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-slate-800/50 to-transparent pointer-events-none" />
        
        {activeTab === 'manifesto' && <Manifesto />}
        {activeTab === 'matrix' && <InquiryMatrix onSelect={setSelectedInquiry} />}
        {activeTab === 'lab' && <AdversarialLab />}
        {activeTab === 'genealogy' && <GenealogyTimeline />}
        {activeTab === 'terminal' && <PhiQLTerminal />}
      </main>

      {/* MiniMax Status Bar */}
      <footer className="border-t border-slate-900 bg-black text-[10px] font-mono py-2 px-6 flex justify-between items-center text-slate-600 uppercase tracking-widest sticky bottom-0 z-40">
        <div className="flex gap-6">
          <span className="flex items-center gap-2">
            <div className={`w-1.5 h-1.5 rounded-full ${systemStatus.logicGate === 'SECURE' ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`} />
            GATE: {systemStatus.logicGate}
          </span>
          <span>ENTROPY: {systemStatus.entropy.toFixed(3)}</span>
          <span>MEM: 14.2 TB</span>
        </div>
        <div className="flex gap-6">
          <span>USER: ADEPT</span>
          <span>SESSION: {new Date().toLocaleTimeString()}</span>
        </div>
      </footer>

      {/* Modal Layer */}
      <DetailModal item={selectedInquiry} onClose={() => setSelectedInquiry(null)} />
    </div>
  );
};

export default App;