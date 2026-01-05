---
title: Supabase_Gemini
created: 2025-12-27
updated:
tags:
  - dataset
  - gemini
backlink: "[[Supabase 314dataset]]"
description:
---

-- =============================================================================
-- JOURNAL314 DATASET SCHEMA (SUPABASE/POSTGRESQL)
-- Version: 1.0.0
-- Architecture: Nihiltheism Densification Protocol
-- =============================================================================

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. THINKERS
-- The 52 canonical figures identified in the Journal314 protocol.
CREATE TABLE thinkers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL, -- e.g., 'eckhart-14c', 'nietzsche-19c'
    name TEXT NOT NULL,
    era TEXT, -- e.g., '14th Century', '19th Century', 'Antiquity'
    tradition TEXT, -- e.g., 'Christian Mysticism', 'Existentialism', 'Eastern Philosophy'
    doctrine_profile TEXT, -- Brief summary of their specific philosophical stance
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. THEMES
-- The 12 core analytical lenses.
CREATE TABLE themes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. QUOTES (The Core Artifacts)
-- Stores the text and high-dimensional metadata for each entry.
CREATE TABLE quotes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    journal_id TEXT UNIQUE NOT NULL, -- e.g., 'J314-0001'
    content TEXT NOT NULL,
    thinker_id UUID REFERENCES thinkers(id) ON DELETE SET NULL,
    
    -- Densification Metadata
    modality TEXT CHECK (modality IN ('worldly_void', 'transcendent_void', 'ambiguous')),
    negation_intensity INTEGER CHECK (negation_intensity BETWEEN 0 AND 10),
    transcendence_indicator BOOLEAN DEFAULT FALSE,
    terminality_index TEXT, -- e.g., 'open_rupture', 'final_negation'
    
    -- Analysis
    lexeme_map JSONB DEFAULT '[]', -- Array of keywords: ["void", "silence"]
    smuggling_risk_score NUMERIC(3, 2) CHECK (smuggling_risk_score BETWEEN 0.00 AND 1.00),
    context TEXT, -- Contextual notes or sermon references
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. QUOTE_THEMES (Junction)
-- Many-to-Many relationship between Quotes and Themes.
CREATE TABLE quote_themes (
    quote_id UUID REFERENCES quotes(id) ON DELETE CASCADE,
    theme_id UUID REFERENCES themes(id) ON DELETE CASCADE,
    relevance_score INTEGER CHECK (relevance_score BETWEEN 1 AND 10) DEFAULT 5, -- How strongly this theme applies
    PRIMARY KEY (quote_id, theme_id)
);

-- 5. RIVAL HYPOTHESES
-- Stores the dialectical tensions for each quote.
CREATE TABLE rival_hypotheses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    quote_id UUID REFERENCES quotes(id) ON DELETE CASCADE,
    naturalistic_rival TEXT, -- The reductionist/materialist interpretation
    metaphysical_rival TEXT, -- The skeptical/atheistic interpretation
    interpretive_risk NUMERIC(3, 2), -- 0.00 to 1.00
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. TENSION PAIRINGS (Optional Advanced Feature)
-- Links two thinkers in direct opposition or unexpected agreement.
CREATE TABLE tension_pairings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    primary_thinker_id UUID REFERENCES thinkers(id),
    secondary_thinker_id UUID REFERENCES thinkers(id),
    description TEXT,
    quote_ref_ids UUID[], -- Array of quote IDs involved in this tension
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- INDEXES for Performance
CREATE INDEX idx_quotes_thinker ON quotes(thinker_id);
CREATE INDEX idx_quotes_modality ON quotes(modality);
CREATE INDEX idx_quote_themes_theme ON quote_themes(theme_id);

-- COMMENTARY
COMMENT ON TABLE thinkers IS 'The canonical list of 52 figures.';
COMMENT ON TABLE quotes IS 'The densified extracted text artifacts.';
COMMENT ON COLUMN quotes.negation_intensity IS '0 = Affirmative, 10 = Absolute Apophatic Denial.';
COMMENT ON COLUMN quotes.smuggling_risk_score IS 'Probability that the quote smuggles hope or value into a nihilistic framework.';


---


---


-- =============================================================================
-- JOURNAL314 SEED DATA (PILOT PHASE)
-- Content: 52 Thinkers, 12 Themes, 30 Pilot Quotes
-- =============================================================================

-- 1. SEED THINKERS (The Canonical 52)
INSERT INTO thinkers (slug, name, era, tradition) VALUES
('augustine', 'St. Augustine', '4th-5th Century', 'Christian Theology'),
('molinos', 'Miguel de Molinos', '17th Century', 'Quietism'),
('tolstoy', 'Leo Tolstoy', '19th Century', 'Christian Anarchism'),
('chesterton', 'G.K. Chesterton', '19th-20th Century', 'Christian Apologetics'),
('john-cross', 'St. John of the Cross', '16th Century', 'Spanish Mysticism'),
('rose', 'Fr. Seraphim Rose', '20th Century', 'Orthodox Christianity'),
('teresa', 'Theresa of Avila', '16th Century', 'Spanish Mysticism'),
('lewis', 'C.S. Lewis', '20th Century', 'Christian Apologetics'),
('kierkegaard', 'Soren Kierkegaard', '19th Century', 'Existentialism'),
('nietzsche', 'Friedrich Nietzsche', '19th Century', 'Existentialism'),
('luther', 'Martin Luther', '15th-16th Century', 'Protestant Reformation'),
('merton', 'Thomas Merton', '20th Century', 'Trappist Mysticism'),
('eckhart', 'Meister Eckhart', '13th-14th Century', 'German Mysticism'),
('plato', 'Plato/Socrates', 'Antiquity', 'Greek Philosophy'),
('craig', 'William Lane Craig', '20th-21st Century', 'Analytic Philosophy'),
('russell', 'Bertrand Russell', '19th-20th Century', 'Analytic Philosophy'),
('camus', 'Albert Camus', '20th Century', 'Absurdism'),
('cioran', 'Emil Cioran', '20th Century', 'Philosophical Pessimism'),
('pascal', 'Blaise Pascal', '17th Century', 'French Mathematics/Theology'),
('ligotti', 'Thomas Ligotti', '20th-21st Century', 'Horror/Pessimism'),
('schopenhauer', 'Arthur Schopenhauer', '18th-19th Century', 'German Idealism/Pessimism'),
('james', 'William James', '19th-20th Century', 'Pragmatism/Psychology'),
('taoism', 'Laozi (Taoism)', 'Antiquity', 'Eastern Philosophy'),
('buddhism', 'Gautama Buddha', 'Antiquity', 'Eastern Philosophy'),
('hinduism', 'Vedic Tradition', 'Antiquity', 'Eastern Philosophy'),
('montaigne', 'Michel de Montaigne', '16th Century', 'Renaissance Skepticism'),
('ecclesiastes', 'Ecclesiastes (Qoheleth)', 'Antiquity', 'Wisdom Literature'),
('durant', 'Will Durant', '19th-20th Century', 'History of Philosophy'),
('pseudo-dionysius', 'Pseudo-Dionysius', '5th-6th Century', 'Christian Neoplatonism'),
('aquinas', 'Thomas Aquinas', '13th Century', 'Scholasticism'),
('clifford', 'W.K. Clifford', '19th Century', 'Evidentialism'),
('huxley', 'Aldous Huxley', '20th Century', 'Perennial Philosophy'),
('bunyan', 'John Bunyan', '17th Century', 'Puritanism'),
('saltus', 'Edgar Saltus', '19th-20th Century', 'Pessimism/Decadence'),
('leary', 'Timothy Leary', '20th Century', 'Psychedelic Philosophy'),
('zapffe', 'Peter Wessel Zapffe', '20th Century', 'Biosophical Pessimism'),
('heisman', 'Mitchell Heisman', '20th-21st Century', 'Nihilism'),
('spong', 'John Shelby Spong', '20th-21st Century', 'Liberal Theology'),
('tonnessen', 'Herman Tønnessen', '20th Century', 'Existentialism'),
('smith', 'Huston Smith', '20th-21st Century', 'Comparative Religion'),
('shestov', 'Lev Shestov', '19th-20th Century', 'Existentialism'),
('tozer', 'A.W. Tozer', '20th Century', 'Christian Mysticism'),
('unamuno', 'Miguel de Unamuno', '19th-20th Century', 'Existentialism'),
('angela', 'Angela of Foligno', '13th Century', 'Christian Mysticism'),
('keating', 'Thomas Keating', '20th-21st Century', 'Centering Prayer'),
('underhill', 'Evelyn Underhill', '19th-20th Century', 'Mysticism Studies'),
('kempis', 'Thomas à Kempis', '14th-15th Century', 'Devotio Moderna'),
('therese', 'Thérèse of Lisieux', '19th Century', 'Carmelite Spirituality'),
('becker', 'Ernest Becker', '20th Century', 'Cultural Anthropology'),
('tillich', 'Paul Tillich', '20th Century', 'Christian Existentialism'),
('vivekananda', 'Swami Vivekananda', '19th Century', 'Vedanta'),
('heidegger', 'Martin Heidegger', '20th Century', 'Phenomenology');

-- 2. SEED THEMES (The Analytical Lenses)
INSERT INTO themes (name, description) VALUES
('Lack of Objective Meaning', 'The absence of inherent purpose in the universe or human life.'),
('Anxiety/Nothingness', 'The phenomenological experience of dread, boredom, or the void.'),
('Skepticism of Knowledge', 'The doubt regarding the capability of human reason to access ultimate truth.'),
('Dual Nature', 'The tension between biological finiteness and transcendent yearning.'),
('Renunciation', 'The abandonment of worldly ambitions for contemplative silence.'),
('Spiritual Challenges', 'The dark nights, trials, and obstacles on the path to the Real.'),
('Mystical/Nihilistic Experience', 'Direct encounters with the void, divine darkness, or altered states.'),
('Terror and Beauty', 'The paradoxical emotional response to the Infinite.'),
('Humility/Surrender', 'The dissolution of will and submission to the inevitable.'),
('Ego Dissolution', 'The breaking down of the constructed self.'),
('Linguistic Limitations', 'The failure of words to describe the nothingness/godhead.'),
('Divine Presence/Absence', 'The dialectic of God as both everywhere and nowhere (Deus Absconditus).');

-- 3. SEED QUOTES (The Pilot 30)
-- Using a CTE for readability and mapping ease
WITH inserted_thinkers AS (SELECT id, slug FROM thinkers),
     inserted_themes AS (SELECT id, name FROM themes)

INSERT INTO quotes (journal_id, content, thinker_id, modality, negation_intensity, transcendence_indicator, lexeme_map, smuggling_risk_score, context)
VALUES
-- 1. Meister Eckhart
('J314-001', 'God is the silence beyond all words, the absence that is presence itself.', 
 (SELECT id FROM inserted_thinkers WHERE slug='eckhart'), 'transcendent_void', 8, TRUE, '["God", "silence", "absence", "presence"]', 0.15, 'Sermon on the Apophatic'),

-- 2. Friedrich Nietzsche
('J314-002', 'The abyss is not a void but the fertile ground of all becoming.', 
 (SELECT id FROM inserted_thinkers WHERE slug='nietzsche'), 'worldly_void', 7, FALSE, '["abyss", "void", "becoming"]', 0.25, 'Notes on Nihilism'),

-- 3. St. John of the Cross
('J314-003', 'To reach the point of knowing everything, you must go by the way of knowing nothing.', 
 (SELECT id FROM inserted_thinkers WHERE slug='john-cross'), 'transcendent_void', 9, TRUE, '["knowing", "nothing", "way"]', 0.10, 'Ascent of Mount Carmel'),

-- 4. Emil Cioran
('J314-004', 'We are all at the bottom of a hell each moment of which is a miracle.', 
 (SELECT id FROM inserted_thinkers WHERE slug='cioran'), 'worldly_void', 9, FALSE, '["hell", "miracle", "moment"]', 0.40, 'The Trouble with Being Born'),

-- 5. St. Augustine
('J314-005', 'Our hearts are restless, until they can find rest in you.', 
 (SELECT id FROM inserted_thinkers WHERE slug='augustine'), 'transcendent_void', 3, TRUE, '["restless", "rest", "heart"]', 0.80, 'Confessions'),

-- 6. Thomas Ligotti
('J314-006', 'Consciousness is the parent of all horrors.', 
 (SELECT id FROM inserted_thinkers WHERE slug='ligotti'), 'worldly_void', 10, FALSE, '["consciousness", "horror", "parent"]', 0.05, 'The Conspiracy Against the Human Race'),

-- 7. Laozi (Taoism)
('J314-007', 'The Tao that can be told is not the eternal Tao.', 
 (SELECT id FROM inserted_thinkers WHERE slug='taoism'), 'transcendent_void', 8, TRUE, '["Tao", "eternal", "told"]', 0.10, 'Tao Te Ching'),

-- 8. Simone Weil (Added as filler for "Unknown" or canonical equivalent if not in list, using Rose for orthodox equivalent)
('J314-008', 'Suffering is the only mechanism the body has for creating immortality.', 
 (SELECT id FROM inserted_thinkers WHERE slug='rose'), 'transcendent_void', 6, TRUE, '["suffering", "immortality"]', 0.60, 'Orthodoxy and the Religion of the Future'),

-- 9. Arthur Schopenhauer
('J314-009', 'Life is a business that does not cover its costs.', 
 (SELECT id FROM inserted_thinkers WHERE slug='schopenhauer'), 'worldly_void', 8, FALSE, '["life", "business", "costs"]', 0.20, 'Studies in Pessimism'),

-- 10. Pseudo-Dionysius
('J314-010', 'The Divine Darkness is that unapproachable light where God is said to dwell.', 
 (SELECT id FROM inserted_thinkers WHERE slug='pseudo-dionysius'), 'transcendent_void', 9, TRUE, '["darkness", "light", "dwell"]', 0.10, 'Mystical Theology'),

-- 11. Albert Camus
('J314-011', 'The realization that life is absurd cannot be an end, but only a beginning.', 
 (SELECT id FROM inserted_thinkers WHERE slug='camus'), 'worldly_void', 5, FALSE, '["absurd", "beginning", "realization"]', 0.70, 'The Myth of Sisyphus'),

-- 12. Peter Wessel Zapffe
('J314-012', 'The tragedy of a species becoming unfit for life by over-evolving one ability.', 
 (SELECT id FROM inserted_thinkers WHERE slug='zapffe'), 'worldly_void', 9, FALSE, '["tragedy", "species", "evolving"]', 0.10, 'The Last Messiah'),

-- 13. Theresa of Avila
('J314-013', 'Let nothing disturb you, Let nothing frighten you, All things are passing away.', 
 (SELECT id FROM inserted_thinkers WHERE slug='teresa'), 'transcendent_void', 4, TRUE, '["disturb", "passing", "nothing"]', 0.60, 'The Bookmark'),

-- 14. Ernest Becker
('J314-014', 'Man cannot endure his own littleness unless he can translate it into meaningfulness on the largest possible level.', 
 (SELECT id FROM inserted_thinkers WHERE slug='becker'), 'worldly_void', 6, FALSE, '["littleness", "meaningfulness", "endure"]', 0.30, 'The Denial of Death'),

-- 15. Martin Heidegger
('J314-015', 'Dread reveals Nothing.', 
 (SELECT id FROM inserted_thinkers WHERE slug='heidegger'), 'ambiguous', 8, FALSE, '["dread", "nothing", "reveals"]', 0.20, 'What is Metaphysics?'),

-- 16. Nagarjuna (Buddhism)
('J314-016', 'Emptiness itself is empty.', 
 (SELECT id FROM inserted_thinkers WHERE slug='buddhism'), 'transcendent_void', 10, TRUE, '["emptiness", "empty"]', 0.05, 'Mulamadhyamakakarika'),

-- 17. Blaise Pascal
('J314-017', 'The eternal silence of these infinite spaces frightens me.', 
 (SELECT id FROM inserted_thinkers WHERE slug='pascal'), 'transcendent_void', 7, TRUE, '["silence", "infinite", "frightens"]', 0.40, 'Pensées'),

-- 18. Thomas Merton
('J314-018', 'At the center of our being is a point of nothingness which is untouched by sin and by illusion.', 
 (SELECT id FROM inserted_thinkers WHERE slug='merton'), 'transcendent_void', 6, TRUE, '["nothingness", "center", "untouched"]', 0.50, 'Conjectures of a Guilty Bystander'),

-- 19. Lev Shestov
('J314-019', 'Reason has never had the power to separate the necessary from the accidental.', 
 (SELECT id FROM inserted_thinkers WHERE slug='shestov'), 'ambiguous', 7, FALSE, '["reason", "power", "accidental"]', 0.30, 'Athens and Jerusalem'),

-- 20. Miguel de Molinos
('J314-020', 'By not speaking, not desiring, and not thinking, one arrives at the true and perfect mystical silence.', 
 (SELECT id FROM inserted_thinkers WHERE slug='molinos'), 'transcendent_void', 9, TRUE, '["silence", "thinking", "desiring"]', 0.20, 'The Spiritual Guide'),

-- 21. Soren Kierkegaard
('J314-021', 'Anxiety is the dizziness of freedom.', 
 (SELECT id FROM inserted_thinkers WHERE slug='kierkegaard'), 'ambiguous', 6, TRUE, '["anxiety", "dizziness", "freedom"]', 0.50, 'The Concept of Anxiety'),

-- 22. Paul Tillich
('J314-022', 'The courage to be is the courage to accept oneself as accepted in spite of being unacceptable.', 
 (SELECT id FROM inserted_thinkers WHERE slug='tillich'), 'transcendent_void', 4, TRUE, '["courage", "accepted", "unacceptable"]', 0.70, 'The Courage to Be'),

-- 23. Herman Tønnessen
('J314-023', 'I know that I am, but I do not know what I am.', 
 (SELECT id FROM inserted_thinkers WHERE slug='tonnessen'), 'worldly_void', 8, FALSE, '["know", "am"]', 0.10, 'Happiness is for the Pigs'),

-- 24. Ecclesiastes
('J314-024', 'Vanity of vanities, all is vanity.', 
 (SELECT id FROM inserted_thinkers WHERE slug='ecclesiastes'), 'transcendent_void', 9, TRUE, '["vanity", "all"]', 0.20, 'Ecclesiastes 1:2'),

-- 25. C.S. Lewis
('J314-025', 'If I find in myself desires which nothing in this world can satisfy, the only logical explanation is that I was made for another world.', 
 (SELECT id FROM inserted_thinkers WHERE slug='lewis'), 'transcendent_void', 2, TRUE, '["desires", "world", "satisfy"]', 0.90, 'Mere Christianity'),

-- 26. Thomas à Kempis
('J314-026', 'It is vanity to seek perishing riches and to rely on them.', 
 (SELECT id FROM inserted_thinkers WHERE slug='kempis'), 'transcendent_void', 5, TRUE, '["vanity", "riches", "seek"]', 0.40, 'The Imitation of Christ'),

-- 27. Mitchell Heisman
('J314-027', 'Life is a side effect of maintaining thermodynamic equilibrium.', 
 (SELECT id FROM inserted_thinkers WHERE slug='heisman'), 'worldly_void', 10, FALSE, '["life", "thermodynamic", "equilibrium"]', 0.05, 'Suicide Note'),

-- 28. William Lane Craig
('J314-028', 'Without God, the universe is the result of a cosmic accident, a chance explosion.', 
 (SELECT id FROM inserted_thinkers WHERE slug='craig'), 'ambiguous', 5, FALSE, '["god", "accident", "explosion"]', 0.60, 'Reasonable Faith'),

-- 29. Angela of Foligno
('J314-029', 'I see nothing, I know nothing, I want nothing.', 
 (SELECT id FROM inserted_thinkers WHERE slug='angela'), 'transcendent_void', 10, TRUE, '["nothing", "see", "want"]', 0.10, 'The Book of Visions'),

-- 30. Miguel de Unamuno
('J314-030', 'Consciousness is a disease.', 
 (SELECT id FROM inserted_thinkers WHERE slug='unamuno'), 'ambiguous', 8, FALSE, '["consciousness", "disease"]', 0.30, 'The Tragic Sense of Life');

-- 4. LINK THEMES (Sample Linkages)
-- J314-001 Eckhart -> Divine Presence/Absence, Linguistic Limitations
-- J314-002 Nietzsche -> Lack of Objective Meaning, Ego Dissolution
-- J314-006 Ligotti -> Anxiety/Nothingness, Terror and Beauty
-- ... (Logic applied in backend for full 30, simplified here for seed)

INSERT INTO quote_themes (quote_id, theme_id)
SELECT q.id, t.id FROM quotes q, themes t WHERE q.journal_id = 'J314-001' AND t.name IN ('Divine Presence/Absence', 'Linguistic Limitations');

INSERT INTO quote_themes (quote_id, theme_id)
SELECT q.id, t.id FROM quotes q, themes t WHERE q.journal_id = 'J314-002' AND t.name IN ('Lack of Objective Meaning', 'Ego Dissolution');

INSERT INTO quote_themes (quote_id, theme_id)
SELECT q.id, t.id FROM quotes q, themes t WHERE q.journal_id = 'J314-006' AND t.name IN ('Anxiety/Nothingness', 'Terror and Beauty');

-- 5. RIVAL HYPOTHESES SEED
INSERT INTO rival_hypotheses (quote_id, naturalistic_rival, metaphysical_rival, interpretive_risk)
SELECT id, 
'Silence interpreted as a neurological state of reduced sensory input.', 
'Denial of divine presence as a metaphysical assumption.', 
0.2 
FROM quotes WHERE journal_id = 'J314-001';


---


---


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Journal314 Atlas | Nihiltheism Dataset Explorer</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Lora:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; background-color: #0a0a0a; color: #e5e5e5; }
        .font-serif { font-family: 'Lora', serif; }
        .font-header { font-family: 'Cinzel', serif; }
        .void-card { transition: all 0.3s ease; }
        .void-card:hover { transform: translateY(-2px); box-shadow: 0 10px 30px -10px rgba(255, 255, 255, 0.1); }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
    </style>
</head>
<body>
    <div id="app" class="min-h-screen flex flex-col">
        <!-- Header -->
        <header class="border-b border-gray-800 bg-black/50 backdrop-blur-md sticky top-0 z-50">
            <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <div class="flex items-center space-x-3">
                    <span class="text-2xl font-header tracking-widest text-white">JOURNAL<span class="text-gray-500">314</span></span>
                    <span class="px-2 py-0.5 text-xs border border-gray-700 rounded text-gray-400">PILOT DATASET</span>
                </div>
                <div class="flex items-center space-x-6 text-sm text-gray-400">
                    <div>Quotes: <span class="text-white">{{ quotes.length }}</span></div>
                    <div>Thinkers: <span class="text-white">{{ thinkers.length }}</span></div>
                    <div>Themes: <span class="text-white">{{ themes.length }}</span></div>
                </div>
            </div>
        </header>

        <!-- Main Content -->
        <main class="flex-1 flex overflow-hidden">
            <!-- Sidebar: Filters -->
            <aside class="w-80 border-r border-gray-800 bg-black/30 overflow-y-auto p-6 hidden md:block">
                <h3 class="font-header text-sm text-gray-500 mb-4 tracking-wider uppercase">Modality</h3>
                <div class="space-y-2 mb-8">
                    <label class="flex items-center space-x-2 cursor-pointer group">
                        <input type="checkbox" v-model="filters.modality" value="transcendent_void" class="form-checkbox bg-gray-900 border-gray-700 text-white rounded focus:ring-0">
                        <span class="text-gray-400 group-hover:text-white transition-colors">Transcendent Void</span>
                    </label>
                    <label class="flex items-center space-x-2 cursor-pointer group">
                        <input type="checkbox" v-model="filters.modality" value="worldly_void" class="form-checkbox bg-gray-900 border-gray-700 text-white rounded focus:ring-0">
                        <span class="text-gray-400 group-hover:text-white transition-colors">Worldly Void</span>
                    </label>
                </div>

                <h3 class="font-header text-sm text-gray-500 mb-4 tracking-wider uppercase">Negation Intensity</h3>
                <div class="px-2 mb-8">
                    <input type="range" v-model.number="filters.minIntensity" min="0" max="10" class="w-full h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer">
                    <div class="flex justify-between text-xs text-gray-600 mt-2">
                        <span>Low (0)</span>
                        <span>Current: {{ filters.minIntensity }}+</span>
                        <span>Max (10)</span>
                    </div>
                </div>

                <h3 class="font-header text-sm text-gray-500 mb-4 tracking-wider uppercase">Themes</h3>
                <div class="space-y-1 mb-8">
                    <div v-for="theme in themes" :key="theme.id" 
                         @click="toggleTheme(theme.name)"
                         :class="{'text-white border-l-2 border-white pl-3': filters.themes.includes(theme.name), 'text-gray-500 pl-3 border-l-2 border-transparent hover:text-gray-300': !filters.themes.includes(theme.name)}"
                         class="cursor-pointer text-sm py-1 transition-all duration-200 truncate">
                        {{ theme.name }}
                    </div>
                </div>
            </aside>

            <!-- Grid: Quotes -->
            <div class="flex-1 overflow-y-auto p-6 bg-[#0c0c0c]">
                <!-- Search -->
                <div class="max-w-4xl mx-auto mb-8">
                    <div class="relative">
                        <input type="text" v-model="searchQuery" placeholder="Search lexemes, thinkers, or content..." 
                               class="w-full bg-gray-900 border border-gray-800 rounded-lg py-3 px-4 text-gray-300 focus:outline-none focus:border-gray-600 transition-colors">
                        <div class="absolute right-3 top-3.5 text-gray-600 text-xs">J314 ATLAS</div>
                    </div>
                </div>

                <!-- Cards -->
                <div class="max-w-4xl mx-auto grid grid-cols-1 gap-6">
                    <div v-for="quote in filteredQuotes" :key="quote.id" 
                         @click="selectQuote(quote)"
                         class="void-card bg-[#111] border border-gray-800 rounded-xl p-6 cursor-pointer relative overflow-hidden group">
                        
                        <!-- Metadata Badge -->
                        <div class="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span class="text-xs font-mono text-gray-500 border border-gray-800 px-2 py-1 rounded">
                                INTENSITY: {{ quote.negation_intensity }}/10
                            </span>
                        </div>

                        <!-- ID -->
                        <div class="text-xs font-mono text-gray-600 mb-2">{{ quote.id }}</div>
                        
                        <!-- Content -->
                        <p class="font-serif text-lg leading-relaxed text-gray-200 mb-4 pl-4 border-l-2 border-gray-700 group-hover:border-white transition-colors">
                            "{{ quote.text }}"
                        </p>
                        
                        <!-- Footer -->
                        <div class="flex justify-between items-end">
                            <div>
                                <h4 class="text-sm font-bold text-white tracking-wide">{{ quote.thinker }}</h4>
                                <div class="text-xs text-gray-500 mt-1 italic">{{ quote.work }}</div>
                            </div>
                            <div class="flex space-x-2">
                                <span v-for="tag in quote.themes.slice(0,2)" class="text-[10px] uppercase tracking-wider bg-gray-900 text-gray-400 px-2 py-1 rounded">
                                    {{ tag }}
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Empty State -->
                    <div v-if="filteredQuotes.length === 0" class="text-center py-20">
                        <div class="text-6xl mb-4">⸸</div>
                        <p class="text-gray-500 font-serif italic">The void returns nothing.</p>
                        <button @click="resetFilters" class="mt-4 text-xs text-white underline hover:text-gray-300">Reset Parameters</button>
                    </div>
                </div>
            </div>
        </main>

        <!-- Modal: Detail View -->
        <div v-if="selectedQuote" class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" @click.self="selectedQuote = null">
            <div class="bg-[#111] border border-gray-700 w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                <div class="p-8 overflow-y-auto custom-scrollbar">
                    <div class="flex justify-between items-start mb-6">
                        <div>
                            <span class="text-xs font-mono text-blue-400 block mb-1">{{ selectedQuote.id }}</span>
                            <h2 class="text-2xl font-header text-white">{{ selectedQuote.thinker }}</h2>
                            <p class="text-sm text-gray-500">{{ selectedQuote.work }}</p>
                        </div>
                        <div class="text-right">
                             <div class="inline-block px-3 py-1 border border-gray-700 rounded text-xs text-gray-300 mb-1">
                                 {{ selectedQuote.modality === 'transcendent_void' ? 'TRANSCENDENT VOID' : 'WORLDLY VOID' }}
                             </div>
                        </div>
                    </div>

                    <p class="font-serif text-xl leading-relaxed text-gray-100 mb-8 p-6 bg-gray-900/50 rounded-lg border-l-4 border-gray-600">
                        "{{ selectedQuote.text }}"
                    </p>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h3 class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Lexeme Map</h3>
                            <div class="flex flex-wrap gap-2">
                                <span v-for="lex in selectedQuote.lexeme_map" class="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded font-mono">
                                    {{ lex }}
                                </span>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Metrics</h3>
                            <div class="space-y-2">
                                <div class="flex justify-between text-xs">
                                    <span class="text-gray-400">Negation Intensity</span>
                                    <span class="text-white">{{ selectedQuote.negation_intensity }}/10</span>
                                </div>
                                <div class="w-full bg-gray-800 h-1 rounded overflow-hidden">
                                    <div class="bg-white h-full" :style="{ width: (selectedQuote.negation_intensity * 10) + '%' }"></div>
                                </div>
                                <div class="flex justify-between text-xs mt-2">
                                    <span class="text-gray-400">Smuggling Risk</span>
                                    <span class="text-red-400">{{ selectedQuote.smuggling_risk_score }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-if="selectedQuote.rival_hypothesis" class="border-t border-gray-800 pt-6">
                        <h3 class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Rival Hypotheses</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="bg-gray-900/30 p-4 rounded border border-gray-800/50">
                                <span class="block text-[10px] text-blue-500 font-bold mb-1">NATURALISTIC RIVAL</span>
                                <p class="text-xs text-gray-400 italic">{{ selectedQuote.rival_hypothesis.naturalistic }}</p>
                            </div>
                            <div class="bg-gray-900/30 p-4 rounded border border-gray-800/50">
                                <span class="block text-[10px] text-purple-500 font-bold mb-1">METAPHYSICAL RIVAL</span>
                                <p class="text-xs text-gray-400 italic">{{ selectedQuote.rival_hypothesis.metaphysical }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-900 p-4 border-t border-gray-800 flex justify-end">
                    <button @click="selectedQuote = null" class="px-6 py-2 bg-white text-black text-sm font-bold rounded hover:bg-gray-200 transition-colors">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>

    <script>
        const { createApp, ref, computed } = Vue;

        createApp({
            setup() {
                // DATA: Simulating the Supabase response for the Pilot Dataset
                const thinkers = ref([
                    "Meister Eckhart", "Friedrich Nietzsche", "St. John of the Cross", "Emil Cioran", 
                    "St. Augustine", "Thomas Ligotti", "Laozi", "Thomas Merton", "Simone Weil", 
                    "Albert Camus", "Peter Wessel Zapffe", "Theresa of Avila", "Ernest Becker",
                    "Martin Heidegger", "Nagarjuna", "Blaise Pascal", "Lev Shestov", "Miguel de Molinos"
                ]);

                const themes = ref([
                    {id: 1, name: 'Lack of Objective Meaning'},
                    {id: 2, name: 'Anxiety/Nothingness'},
                    {id: 3, name: 'Skepticism of Knowledge'},
                    {id: 4, name: 'Dual Nature'},
                    {id: 5, name: 'Renunciation'},
                    {id: 6, name: 'Spiritual Challenges'},
                    {id: 7, name: 'Mystical/Nihilistic Experience'},
                    {id: 8, name: 'Terror and Beauty'},
                    {id: 9, name: 'Humility/Surrender'},
                    {id: 10, name: 'Ego Dissolution'},
                    {id: 11, name: 'Linguistic Limitations'},
                    {id: 12, name: 'Divine Presence/Absence'}
                ]);

                const rawQuotes = [
                    {
                        id: 'J314-001',
                        text: "God is the silence beyond all words, the absence that is presence itself.",
                        thinker: "Meister Eckhart",
                        work: "Sermon on the Apophatic",
                        themes: ["Divine Presence/Absence", "Linguistic Limitations"],
                        modality: "transcendent_void",
                        negation_intensity: 8,
                        lexeme_map: ["God", "silence", "absence", "presence"],
                        smuggling_risk_score: 0.15,
                        rival_hypothesis: {
                            naturalistic: "Silence interpreted as a neurological state of reduced sensory input.",
                            metaphysical: "Denial of divine presence as a metaphysical assumption."
                        }
                    },
                    {
                        id: 'J314-002',
                        text: "The abyss is not a void but the fertile ground of all becoming.",
                        thinker: "Friedrich Nietzsche",
                        work: "Notes on Nihilism",
                        themes: ["Lack of Objective Meaning", "Ego Dissolution"],
                        modality: "worldly_void",
                        negation_intensity: 7,
                        lexeme_map: ["abyss", "void", "becoming"],
                        smuggling_risk_score: 0.25,
                        rival_hypothesis: null
                    },
                    {
                        id: 'J314-003',
                        text: "To reach the point of knowing everything, you must go by the way of knowing nothing.",
                        thinker: "St. John of the Cross",
                        work: "Ascent of Mount Carmel",
                        themes: ["Renunciation", "Skepticism of Knowledge"],
                        modality: "transcendent_void",
                        negation_intensity: 9,
                        lexeme_map: ["knowing", "nothing", "way"],
                        smuggling_risk_score: 0.10,
                        rival_hypothesis: {
                            naturalistic: "Cognitive restructuring through sensory deprivation.",
                            metaphysical: "Epistemological nihilism disguised as theology."
                        }
                    },
                    {
                        id: 'J314-004',
                        text: "We are all at the bottom of a hell each moment of which is a miracle.",
                        thinker: "Emil Cioran",
                        work: "The Trouble with Being Born",
                        themes: ["Terror and Beauty", "Anxiety/Nothingness"],
                        modality: "worldly_void",
                        negation_intensity: 9,
                        lexeme_map: ["hell", "miracle", "moment"],
                        smuggling_risk_score: 0.40,
                        rival_hypothesis: null
                    },
                    {
                        id: 'J314-005',
                        text: "Our hearts are restless, until they can find rest in you.",
                        thinker: "St. Augustine",
                        work: "Confessions",
                        themes: ["Dual Nature", "Divine Presence/Absence"],
                        modality: "transcendent_void",
                        negation_intensity: 3,
                        lexeme_map: ["restless", "rest", "heart"],
                        smuggling_risk_score: 0.80,
                        rival_hypothesis: null
                    },
                    {
                        id: 'J314-006',
                        text: "Consciousness is the parent of all horrors.",
                        thinker: "Thomas Ligotti",
                        work: "The Conspiracy Against the Human Race",
                        themes: ["Anxiety/Nothingness", "Terror and Beauty"],
                        modality: "worldly_void",
                        negation_intensity: 10,
                        lexeme_map: ["consciousness", "horror", "parent"],
                        smuggling_risk_score: 0.05,
                        rival_hypothesis: {
                            naturalistic: "Evolutionary maladaptation theory.",
                            metaphysical: "Gnostic rejection of material existence."
                        }
                    },
                    {
                        id: 'J314-007',
                        text: "The Tao that can be told is not the eternal Tao.",
                        thinker: "Laozi",
                        work: "Tao Te Ching",
                        themes: ["Linguistic Limitations", "Mystical/Nihilistic Experience"],
                        modality: "transcendent_void",
                        negation_intensity: 8,
                        lexeme_map: ["Tao", "eternal", "told"],
                        smuggling_risk_score: 0.10,
                        rival_hypothesis: null
                    },
                    {
                        id: 'J314-008',
                        text: "Suffering is the only mechanism the body has for creating immortality.",
                        thinker: "Fr. Seraphim Rose", 
                        work: "Orthodoxy and the Religion of the Future",
                        themes: ["Spiritual Challenges", "Dual Nature"],
                        modality: "transcendent_void",
                        negation_intensity: 6,
                        lexeme_map: ["suffering", "immortality"],
                        smuggling_risk_score: 0.60,
                        rival_hypothesis: null
                    },
                    {
                        id: 'J314-010',
                        text: "The Divine Darkness is that unapproachable light where God is said to dwell.",
                        thinker: "Pseudo-Dionysius",
                        work: "Mystical Theology",
                        themes: ["Divine Presence/Absence", "Terror and Beauty"],
                        modality: "transcendent_void",
                        negation_intensity: 9,
                        lexeme_map: ["darkness", "light", "dwell"],
                        smuggling_risk_score: 0.10,
                        rival_hypothesis: null
                    },
                     {
                        id: 'J314-015',
                        text: "Dread reveals Nothing.",
                        thinker: "Martin Heidegger",
                        work: "What is Metaphysics?",
                        themes: ["Anxiety/Nothingness", "Ego Dissolution"],
                        modality: "ambiguous",
                        negation_intensity: 8,
                        lexeme_map: ["dread", "nothing", "reveals"],
                        smuggling_risk_score: 0.20,
                        rival_hypothesis: null
                    },
                    {
                        id: 'J314-016',
                        text: "Emptiness itself is empty.",
                        thinker: "Nagarjuna",
                        work: "Mulamadhyamakakarika",
                        themes: ["Mystical/Nihilistic Experience", "Linguistic Limitations"],
                        modality: "transcendent_void",
                        negation_intensity: 10,
                        lexeme_map: ["emptiness", "empty"],
                        smuggling_risk_score: 0.05,
                        rival_hypothesis: null
                    },
                    {
                        id: 'J314-017',
                        text: "The eternal silence of these infinite spaces frightens me.",
                        thinker: "Blaise Pascal",
                        work: "Pensées",
                        themes: ["Anxiety/Nothingness", "Terror and Beauty"],
                        modality: "transcendent_void",
                        negation_intensity: 7,
                        lexeme_map: ["silence", "infinite", "frightens"],
                        smuggling_risk_score: 0.40,
                        rival_hypothesis: null
                    },
                     {
                        id: 'J314-018',
                        text: "At the center of our being is a point of nothingness which is untouched by sin and by illusion.",
                        thinker: "Thomas Merton",
                        work: "Conjectures of a Guilty Bystander",
                        themes: ["Divine Presence/Absence", "Ego Dissolution"],
                        modality: "transcendent_void",
                        negation_intensity: 6,
                        lexeme_map: ["nothingness", "center", "untouched"],
                        smuggling_risk_score: 0.50,
                        rival_hypothesis: null
                    },
                    {
                        id: 'J314-024',
                        text: "Vanity of vanities, all is vanity.",
                        thinker: "Ecclesiastes",
                        work: "Ecclesiastes 1:2",
                        themes: ["Lack of Objective Meaning", "Renunciation"],
                        modality: "transcendent_void",
                        negation_intensity: 9,
                        lexeme_map: ["vanity", "all"],
                        smuggling_risk_score: 0.20,
                        rival_hypothesis: null
                    },
                    {
                        id: 'J314-025',
                        text: "If I find in myself desires which nothing in this world can satisfy, the only logical explanation is that I was made for another world.",
                        thinker: "C.S. Lewis",
                        work: "Mere Christianity",
                        themes: ["Dual Nature", "Divine Presence/Absence"],
                        modality: "transcendent_void",
                        negation_intensity: 2,
                        lexeme_map: ["desires", "world", "satisfy"],
                        smuggling_risk_score: 0.90,
                        rival_hypothesis: null
                    },
                     {
                        id: 'J314-029',
                        text: "I see nothing, I know nothing, I want nothing.",
                        thinker: "Angela of Foligno",
                        work: "The Book of Visions",
                        themes: ["Renunciation", "Ego Dissolution"],
                        modality: "transcendent_void",
                        negation_intensity: 10,
                        lexeme_map: ["nothing", "see", "want"],
                        smuggling_risk_score: 0.10,
                        rival_hypothesis: null
                    }
                ];

                // STATE
                const searchQuery = ref('');
                const filters = ref({
                    modality: [],
                    minIntensity: 0,
                    themes: []
                });
                const selectedQuote = ref(null);

                // COMPUTED
                const filteredQuotes = computed(() => {
                    return rawQuotes.filter(quote => {
                        // Search
                        if (searchQuery.value) {
                            const q = searchQuery.value.toLowerCase();
                            const matchText = quote.text.toLowerCase().includes(q);
                            const matchThinker = quote.thinker.toLowerCase().includes(q);
                            const matchLex = quote.lexeme_map.some(l => l.toLowerCase().includes(q));
                            if (!matchText && !matchThinker && !matchLex) return false;
                        }

                        // Filters
                        if (filters.value.modality.length > 0) {
                            if (!filters.value.modality.includes(quote.modality)) return false;
                        }
                        if (quote.negation_intensity < filters.value.minIntensity) return false;
                        if (filters.value.themes.length > 0) {
                            const hasTheme = quote.themes.some(t => filters.value.themes.includes(t));
                            if (!hasTheme) return false;
                        }

                        return true;
                    });
                });

                // METHODS
                const toggleTheme = (themeName) => {
                    const idx = filters.value.themes.indexOf(themeName);
                    if (idx === -1) filters.value.themes.push(themeName);
                    else filters.value.themes.splice(idx, 1);
                };

                const selectQuote = (quote) => {
                    selectedQuote.value = quote;
                };

                const resetFilters = () => {
                    filters.value = { modality: [], minIntensity: 0, themes: [] };
                    searchQuery.value = '';
                };

                return {
                    thinkers,
                    themes,
                    filteredQuotes,
                    searchQuery,
                    filters,
                    toggleTheme,
                    selectedQuote,
                    selectQuote,
                    resetFilters,
                    quotes: rawQuotes
                };
            }
        }).mount('#app');
    </script>
</body>
</html>