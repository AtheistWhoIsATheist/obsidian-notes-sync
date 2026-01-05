---
title: GEmini Nihilthjeism Webpage
aliases:
Date Created: 2025-06-28
last updated: 2025-06-28T00:17:00
tags:
  - gemini
  - code
description: A webpage made by Gemini
backlink:
---


2025-06-15-Sunday

## Earlier Edition- No navigation Button for New Writings

---


```
<!DOCTYPE html>

<html lang="en" class="scroll-smooth">

  

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>The Abyss as Ground: An Interactive Exploration of Nihiltheism</title>

    <script src="https://cdn.tailwindcss.com"></script>

    <script type="module">

        // Firebase 11.6.1 JS SDK

        import {

            initializeApp

        } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";

        import {

            getAuth,

            signInAnonymously,

            signInWithCustomToken,

            onAuthStateChanged

        } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

        import {

            getFirestore,

            doc,

            setDoc,

            onSnapshot,

            collection,

            addDoc,

            deleteDoc,

            serverTimestamp,

            query

        } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

  

        // Make Firebase services available globally on the window object for easy access in the script

        window.firebase = {

            initializeApp,

            getAuth,

            signInAnonymously,

            signInWithCustomToken,

            onAuthStateChanged,

            getFirestore,

            doc,

            setDoc,

            onSnapshot,

            collection,

            addDoc,

            deleteDoc,

            serverTimestamp,

            query

        };

    </script>

    <!--

      Application Structure Plan: Transforms a dense source report into a thematic, non-linear interactive experience.

      Organized into five key modules:

      1. The Core Paradox: An engaging introduction.

      2. The Experience: Interactive cards for key phenomenological states.

      3. Intellectual Lineage: A comparative grid of thinkers and traditions.

      4. The Path: Breakdown of practical disciplines.

      5. The Critique: A dialectical view of claims and risks.

      A 'Writings' module with Firestore integration allows for personal notes.

    -->

    <style>

        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

  

        body {

            font-family: 'Inter', sans-serif;

            background-color: [[f5f5f4]];

            /* stone-100 */

            color: #292524;

            /* stone-800 */

        }

  

        .nav-link {

            transition: color 0.3s, border-color 0.3s;

        }

  

        .nav-link.active {

            color: [[b45309]];

            /* amber-700 */

            border-bottom-color: [[b45309]];

        }

  

        .fade-in {

            animation: fadeIn 1s ease-in-out forwards;

            opacity: 0;

        }

  

        @keyframes fadeIn {

            from {

                opacity: 0;

                transform: translateY(20px);

            }

  

            to {

                opacity: 1;

                transform: translateY(0);

            }

        }

  

        .card-flip {

            perspective: 1000px;

        }

  

        .card-flip-inner {

            position: relative;

            width: 100%;

            height: 100%;

            transition: transform 0.8s;

            transform-style: preserve-3d;

        }

  

        .card-flip:hover .card-flip-inner {

            transform: rotateY(180deg);

        }

  

        .card-face {

            position: absolute;

            width: 100%;

            height: 100%;

            -webkit-backface-visibility: hidden;

            backface-visibility: hidden;

            display: flex;

            align-items: center;

            justify-content: center;

            flex-direction: column;

        }

  

        .card-back {

            transform: rotateY(180deg);

        }

  

        [[writings-overlay]] {

            transition: opacity 0.3s ease-in-out;

        }

  

        [[writings-panel]] {

            transition: transform 0.3s ease-in-out;

            transform: translateX(-100%);

        }

  

        [[writings-overlay]].open [[writings-panel]] {

            transform: translateX(0);

        }

  

        .view {

            display: none;

        }

  

        .view.active {

            display: block;

        }

  

        /* Custom Modal Styles */

        [[custom-modal-overlay]] {

            transition: opacity 0.3s ease-in-out;

        }

  

        [[custom-modal-box]] {

            transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

        }

    </style>

</head>

  

<body class="bg-stone-100 text-stone-800 antialiased">

  

    <div id="app-container">

        <header class="bg-stone-100/80 backdrop-blur-sm sticky top-0 z-30 border-b border-stone-200">

            <nav class="container mx-auto px-4 sm:px-6 lg:px-8">

                <div class="flex items-center justify-between h-16">

                    <div class="flex items-center space-x-4">

                        <button id="writings-btn" title="My Writings" class="text-stone-600 hover:text-amber-700">

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>

                                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>

                            </svg>

                        </button>

                        <h1 class="text-xl md:text-2xl font-bold text-stone-900">The Abyss as Ground</h1>

                    </div>

                    <div class="hidden sm:flex items-center space-x-4 md:space-x-8">

                        <a href="#paradox" class="nav-link text-stone-600 hover:text-amber-700 border-b-2 border-transparent pb-1">The

                            Paradox</a>

                        <a href="#experience" class="nav-link text-stone-600 hover:text-amber-700 border-b-2 border-transparent pb-1">The

                            Experience</a>

                        <a href="#lineage" class="nav-link text-stone-600 hover:text-amber-700 border-b-2 border-transparent pb-1">The

                            Lineage</a>

                        <a href="#practice" class="nav-link text-stone-600 hover:text-amber-700 border-b-2 border-transparent pb-1">The

                            Path</a>

                        <a href="#critique" class="nav-link text-stone-600 hover:text-amber-700 border-b-2 border-transparent pb-1">The

                            Critique</a>

                    </div>

                    <div class="sm:hidden">

                        <select id="mobile-nav" class="bg-stone-200 border border-stone-300 rounded-md p-2 text-stone-700">

                            <option value="#paradox">The Paradox</option>

                            <option value="#experience">The Experience</option>

                            <option value="#lineage">The Lineage</option>

                            <option value="#practice">The Path</option>

                            <option value="#critique">The Critique</option>

                        </select>

                    </div>

                </div>

            </nav>

        </header>

  

        <div id="main-content" class="view active">

            <main class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">

                <section id="paradox" class="min-h-screen flex items-center justify-center py-16">

                    <div class="w-full max-w-4xl text-center">

                        <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-stone-900">Nihilism is Nothing and

                            therefore Everything.</h2>

                        <p class="mt-4 text-lg md:text-xl text-stone-600 max-w-2xl mx-auto">This interactive report

                            explores Nihiltheism, a philosophy that finds transcendence not by escaping meaninglessness,

                            but by plunging directly into it. It posits that the confrontation with the void—the abyss

                            of despair, dread, and absurdity—is the paradoxical gateway to a profound, "religious"

                            experience.</p>

                        <div class="mt-12 card-flip h-48 max-w-md mx-auto">

                            <div class="card-flip-inner rounded-lg">

                                <div class="card-face bg-stone-200 rounded-lg p-4">

                                    <h3 class="text-3xl font-bold text-stone-700">The Abyss of Despair</h3>

                                    <p class="text-stone-500 mt-2">(Hover to explore the paradox)</p>

                                </div>

                                <div class="card-back bg-amber-600 text-white rounded-lg p-4">

                                    <h3 class="text-3xl font-bold">Becomes the Ground of Transcendence</h3>

                                </div>

                            </div>

                        </div>

                        <p class="mt-8 text-sm text-stone-500 italic">"The denial of a truthful world, of being, might

                            be a divine way of thinking." - Friedrich Nietzsche</p>

                    </div>

                </section>

  

                <section id="experience" class="py-16">

                    <div class="text-center mb-12">

                        <h2 class="text-3xl md:text-4xl font-bold text-stone-900">The Experience of the Void</h2>

                        <p class="mt-3 text-lg text-stone-600 max-w-3xl mx-auto">Nihiltheism begins not with an idea,

                            but with a direct experience. It identifies a triad of profound psychological states that

                            strip away worldly illusions and serve as the entry point into the Nothingness. Click each

                            card to explore its phenomenology.</p>

                    </div>

                    <div class="grid md:grid-cols-3 gap-8" id="experience-cards"></div>

                    <div id="experience-display" class="mt-8 p-6 bg-white rounded-lg shadow-lg border border-stone-200 min-h-[200px] transition-all duration-300">

                        <p class="text-stone-500 text-center">Select a state above to see details.</p>

                    </div>

                </section>

  

                <section id="lineage" class="py-16 bg-stone-50">

                    <div class="container mx-auto">

                        <div class="text-center mb-12">

                            <h2 class="text-3xl md:text-4xl font-bold text-stone-900">The Intellectual Lineage</h2>

                            <p class="mt-3 text-lg text-stone-600 max-w-3xl mx-auto">Nihiltheism is not created in a

                                vacuum. It synthesizes insights from existentialist philosophy and mystical traditions,

                                arguing they describe the same core experience in different "language games." Select a

                                thinker or tradition to see their contribution.</p>

                        </div>

                        <div class="flex flex-wrap justify-center gap-4 mb-8" id="lineage-selector"></div>

                        <div id="lineage-display" class="grid md:grid-cols-2 lg:grid-cols-4 gap-6"></div>

                    </div>

                </section>

  

                <section id="practice" class="py-16">

                    <div class="text-center mb-12">

                        <h2 class="text-3xl md:text-4xl font-bold text-stone-900">The Path & The Practice</h2>

                        <p class="mt-3 text-lg text-stone-600 max-w-3xl mx-auto">This philosophy proposes a practical,

                            experiential path—a set of disciplines designed not for worldly success, but to

                            intentionally induce and navigate the confrontation with the void. These are the

                            "technologies of the soul."</p>

                    </div>

                    <div class="space-y-12 max-w-4xl mx-auto" id="practice-items"></div>

                </section>

  

                <section id="critique" class="py-16 bg-stone-50">

                    <div class="container mx-auto">

                        <div class="text-center mb-12">

                            <h2 class="text-3xl md:text-4xl font-bold text-stone-900">A Critical Evaluation</h2>

                            <p class="mt-3 text-lg text-stone-600 max-w-3xl mx-auto">Nihiltheism is a philosophy fraught

                                with paradox and peril. Its claims are radical, and its methods are dangerous. This

                                section presents the core tenets alongside their significant critiques and risks. Click

                                "Reveal Critique" to see the counter-argument.</p>

                        </div>

                        <div class="space-y-8 max-w-4xl mx-auto" id="critique-container"></div>

                    </div>

                </section>

            </main>

            <footer class="bg-stone-200">

                <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-stone-500">

                    <p>This interactive exploration is based on the philosophical analysis provided in "The Religious

                        Experience of Nihilism" and associated documents.</p>

                </div>

            </footer>

        </div>

  

        <div id="writing-display-view" class="view">

            <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">

                <button id="back-to-main-btn-1" class="mb-8 px-4 py-2 bg-stone-200 text-stone-700 text-sm font-medium rounded-md hover:bg-stone-300 transition-colors">←

                    Back to Main</button>

                <h2 id="writing-display-title" class="text-3xl md:text-4xl font-bold text-stone-900 mb-4"></h2>

                <div id="writing-display-content" class="prose max-w-none text-stone-700 leading-relaxed"></div>

            </div>

        </div>

    </div>

  

    <!-- Writings Overlay -->

    <div id="writings-overlay" class="fixed inset-0 bg-black/50 z-40 hidden opacity-0">

        <div id="writings-panel" class="fixed top-0 left-0 h-full w-full max-w-md bg-stone-100 shadow-lg p-6 overflow-y-auto">

            <div class="flex justify-between items-center mb-6">

                <h2 class="text-2xl font-bold text-stone-800">My Writings</h2>

                <button id="close-writings-btn" class="text-stone-500 hover:text-stone-800">

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

                        <line x1="18" y1="6" x2="6" y2="18"></line>

                        <line x1="6" y1="6" x2="18" y2="18"></line>

                    </svg>

                </button>

            </div>

            <div id="writings-list-view">

                <button id="add-new-writing-btn" class="w-full mb-4 px-4 py-2 bg-amber-600 text-white font-medium rounded-md hover:bg-amber-700 transition-colors">Add

                    New Writing</button>

                <div id="writings-list-container" class="space-y-2">

                    <p class="text-stone-500">Connecting to database...</p>

                </div>

            </div>

            <div id="writing-editor-view" class="hidden">

                <form id="writing-form">

                    <input type="hidden" id="writing-id">

                    <div>

                        <label for="writing-title" class="block text-sm font-medium text-stone-700">Title</label>

                        <input type="text" id="writing-title" class="mt-1 block w-full rounded-md border-stone-300 shadow-sm focus:border-amber-500 focus:ring-amber-500" required>

                    </div>

                    <div class="mt-4">

                        <label for="writing-content" class="block text-sm font-medium text-stone-700">Content</label>

                        <textarea id="writing-content" rows="15" class="mt-1 block w-full rounded-md border-stone-300 shadow-sm focus:border-amber-500 focus:ring-amber-500" required></textarea>

                    </div>

                    <div class="mt-6 flex items-center justify-between">

                        <button type="submit" class="px-4 py-2 bg-amber-600 text-white font-medium rounded-md hover:bg-amber-700 transition-colors">Save</button>

                        <button type="button" id="cancel-edit-btn" class="px-4 py-2 bg-stone-200 text-stone-700 text-sm font-medium rounded-md hover:bg-stone-300 transition-colors">Cancel</button>

                        <button type="button" id="delete-writing-btn" class="hidden px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition-colors">Delete</button>

                    </div>

                </form>

            </div>

        </div>

    </div>

  

    <!-- Custom Modal for Notifications and Confirmations -->

    <div id="custom-modal-overlay" class="fixed inset-0 bg-black/60 z-50 hidden items-center justify-center p-4 opacity-0">

        <div id="custom-modal-box" class="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm transform scale-95 opacity-0">

            <h3 id="custom-modal-title" class="text-lg font-bold text-stone-900"></h3>

            <p id="custom-modal-message" class="mt-2 text-sm text-stone-600"></p>

            <div id="custom-modal-buttons" class="mt-6 flex justify-end space-x-2"></div>

        </div>

    </div>

  

    <script type="module">

        document.addEventListener('DOMContentLoaded', function() {

            // --- Global State ---

            let db, auth, userId, writingsUnsubscribe;

            let writingsCache = [];

            const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

  

            // --- Data for UI elements that don't require DB ---

            const staticData = {

                experience: [{

                    id: 'dread',

                    title: 'Dread (Angst)',

                    icon: '🌀',

                    summary: "Heidegger's objectless fear that reveals the uncanny nature of existence itself, where the world withdraws and only the stark fact of 'being-there' remains.",

                    quote: "'In dread... the whole of what-is sinks away... what remains and overwhelms us is this 'nothing'.'"

                }, {

                    id: 'despair',

                    title: 'Despair',

                    icon: '💔',

                    summary: "Kierkegaard's 'sickness unto death,' a spiritual condition arising from a fractured self that cannot ground itself, leading to the agonizing awareness of its own contingency.",

                    quote: "'Despair is a sickness of the spirit, of the self, and so can be threefold: in despair not to be conscious of having a self; in despair not to want to be oneself; in despair to want to be oneself.'"

                }, {

                    id: 'weariness',

                    title: 'Metaphysical Weariness',

                    icon: '🥀',

                    summary: "Cioran's profound exhaustion with existence, a state of cosmic fatigue where all striving seems futile and the weight of consciousness becomes unbearable.",

                    quote: "'A weariness that separates man from the world and from himself, that makes him a stranger to the universe and to his own soul.'"

                }],

                lineage: [{

                    id: 'heidegger',

                    name: 'Heidegger',

                    concepts: {

                        void: "Dread reveals 'the Nothing' (das Nichts)",

                        condition: "'Throwness' and 'Falling' into the 'they-self'",

                        path: "Anticipatory resoluteness towards death",

                        goal: "Authenticity"

                    },

                    quote: "'The very idea of 'logic' dissolves in the vortex of a more original questioning.'"

                }, {

                    id: 'kierkegaard',

                    name: 'Kierkegaard',

                    concepts: {

                        void: "The 'sickness unto death' (despair)",

                        condition: "'Double-mindedness' and aesthetic/ethical stages",

                        path: "The 'leap of faith' into the absurd",

                        goal: "Subjective Truth/Faith"

                    },

                    quote: "'Is not despair simply double-mindedness?'"

                }, {

                    id: 'mysticism',

                    name: 'Christian Mysticism',

                    concepts: {

                        void: "The 'dark night of the soul' (Via Negativa)",

                        condition: "Conflict between 'flesh' and 'spirit'",

                        path: "Purgation, illumination, and union",

                        goal: "Deification (Theosis)"

                    },

                    quote: "'Only he knows God who recognizes that all creatures are nothingness.' - Meister Eckhart"

                }, {

                    id: 'buddhism',

                    name: 'Buddhism',

                    concepts: {

                        void: "Emptiness (Śūnyatā)",

                        condition: "Suffering (Dukkha) from attachment",

                        path: "The Eightfold Path",

                        goal: "Nirvāṇa"

                    },

                    quote: "'Absolute Emptiness is not a denial of existence, but a zero full of infinite possibilities.' - D.T. Suzuki"

                }, {

                    id: 'taoism',

                    name: 'Taoism',

                    concepts: {

                        void: "The unnamable Tao",

                        condition: "Loss of natural simplicity (P'u)",

                        path: "Non-action (Wu Wei)",

                        goal: "Harmony with the Tao"

                    },

                    quote: "'The Tao that can be described is not the enduring and unchanging Tao.'"

                }],

                practice: [{

                    title: "The Discipline of Renunciation",

                    icon: "🍂",

                    description: "A pragmatic discipline to clear the field of consciousness from the attachments and desires that obscure the underlying groundlessness. It is not asceticism for its own sake, but a strategic subtraction to reveal what remains when all props are removed.",

                    quote: "'Sell all thou hast...' is not a moral command, but a practical instruction for seeing the world without the filter of possession."

                }, {

                    title: "Technologies of the Soul",

                    icon: "🔬",

                    description: "The instrumental use of external tools—from meditation and sensory deprivation to entheogens—to intentionally induce and navigate the confrontation with the void. These are methods to short-circuit the ego's defenses.",

                    quote: "'The psychedelic journey... can open up the abyss that has been papered over by culture and language.' - Terence McKenna (paraphrased)"

                }, {

                    title: "The Ethic of Non-Movement",

                    icon: "⏳",

                    description: "A transcendent inaction born from the realization that all goal-oriented striving is a flight from the self. It is a 'doing by not-doing' (Wu Wei) that allows the essential nature of things to unfold without interference.",

                    quote: "'By doing nothing, one may bring all into order... one arrives at a state of non-action where there is nothing which he does not do.' - Lao Tzu"

                }],

                critique: [{

                    claim: "An Ineffable, Transcendent Truth",

                    claim_desc: "The core experience is a direct, incommunicable encounter with a truth that precedes language and logic.",

                    critique: "The Paradox of Doctrine",

                    critique_desc: "How can a communicable philosophy be built on an ineffable experience? The moment it is described, it is no longer the thing-in-itself. The system risks becoming just another 'language game' it sought to transcend."

                }, {

                    claim: "Transcendent Non-Movement",

                    claim_desc: "Withdrawing from futile worldly action is the only authentic response to the absurdity of existence.",

                    critique: "The Peril of Passivity & Solipsism",

                    critique_desc: "This can justify profound social and ethical irresponsibility. A retreat into the self can become a selfish disregard for the suffering of others, mistaking apathy for enlightenment."

                }, {

                    claim: "The Primacy of Subjective Experience",

                    claim_desc: "Direct phenomenological experience is the ultimate arbiter of truth, superseding external doctrines and authorities.",

                    critique: "The Challenge of Radical Subjectivity",

                    critique_desc: "Relying on private, non-verifiable, and often emotionally charged states provides no method to distinguish genuine insight from delusion, psychosis, or narcissistic inflation."

                }, {

                    claim: "Embracing Despair as a Path",

                    claim_desc: "The path to revelation requires deliberately confronting and passing through dread, despair, and terror.",

                    critique: "The Psychological Danger",

                    critique_desc: "This is not a sustainable way of life but a perilous journey that can lead to severe mental illness or suicide. It romanticizes states that medical and psychological traditions rightly see as pathological."

                }]

            };

  

            // --- Firebase Initialization and Auth Handling ---

            async function initFirebase() {

                try {

                    const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {};

                    const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

  

                    if (!firebaseConfig.apiKey) {

                        console.error("Firebase config is missing.");

                        showModal("Connection Error", "Could not connect to the database. Firebase configuration is missing.");

                        return;

                    }

  

                    const app = window.firebase.initializeApp(firebaseConfig);

                    db = window.firebase.getFirestore(app);

                    auth = window.firebase.getAuth(app);

  

                    window.firebase.onAuthStateChanged(auth, async (user) => {

                        if (user) {

                            userId = user.uid;

                            listenToWritings();

                        } else if (initialAuthToken) {

                            try {

                                await window.firebase.signInWithCustomToken(auth, initialAuthToken);

                                // onAuthStateChanged will be triggered again with the signed-in user

                            } catch (e) {

                                console.error("Custom token sign-in failed:", e);

                                await window.firebase.signInAnonymously(auth); // Fallback to anonymous

                            }

                        } else {

                            try {

                                await window.firebase.signInAnonymously(auth);

                                // onAuthStateChanged will be triggered again with the signed-in user

                            } catch (e) {

                                console.error("Anonymous sign-in failed:", e);

                                showModal("Authentication Error", "Could not sign you in. Some features might be unavailable.");

                            }

                        }

                    });

  

                } catch (error) {

                    console.error("Firebase initialization failed:", error);

                    showModal("Connection Error", `Could not connect to the database. Please check console for details.`);

                    document.getElementById('writings-list-container').innerHTML = `<p class="text-red-500">Could not connect to database.</p>`;

                }

            }

  

            // --- Static Page Content Initializers ---

            function initExperience() {

                const container = document.getElementById('experience-cards');

                const display = document.getElementById('experience-display');

                staticData.experience.forEach(item => {

                    const card = document.createElement('div');

                    card.className = 'p-6 bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 border-2 border-transparent hover:border-amber-600 transition-all duration-300 cursor-pointer text-center';

                    card.innerHTML = `<div class="text-4xl">${item.icon}</div><h3 class="mt-4 text-xl font-bold text-stone-800">${item.title}</h3>`;

                    card.addEventListener('click', () => {

                        display.innerHTML = `<h3 class="text-2xl font-bold text-amber-700 mb-2">${item.title}</h3><p class="text-stone-700 mb-4">${item.summary}</p><blockquote class="text-stone-600 italic border-l-4 border-stone-300 pl-4">${item.quote}</blockquote>`;

                    });

                    container.appendChild(card);

                });

            }

  

            function initLineage() {

                const selectorContainer = document.getElementById('lineage-selector');

                const displayContainer = document.getElementById('lineage-display');

                let activeThinker = staticData.lineage[0].id;

  

                function renderDisplay() {

                    const thinker = staticData.lineage.find(t => t.id === activeThinker);

                    displayContainer.innerHTML = `<div class="bg-white p-6 rounded-lg shadow-md lg:col-span-2"><h3 class="text-2xl font-bold text-amber-700">${thinker.name}</h3><blockquote class="mt-2 text-stone-600 italic">"${thinker.quote}"</blockquote></div>${Object.entries(thinker.concepts).map(([key, value]) => `<div class="bg-white p-4 rounded-lg shadow-sm"><h4 class="font-bold text-stone-800 capitalize">${key}</h4><p class="text-stone-600 text-sm mt-1">${value}</p></div>`).join('')}`;

                }

  

                staticData.lineage.forEach(thinker => {

                    const button = document.createElement('button');

                    button.textContent = thinker.name;

                    button.className = 'px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200';

                    button.dataset.id = thinker.id;

                    button.addEventListener('click', () => {

                        activeThinker = thinker.id;

                        document.querySelectorAll('#lineage-selector button').forEach(btn => {

                            btn.classList.remove('bg-amber-600', 'text-white');

                            btn.classList.add('bg-white', 'text-stone-700', 'hover:bg-stone-200');

                        });

                        button.classList.add('bg-amber-600', 'text-white');

                        button.classList.remove('bg-white', 'text-stone-700', 'hover:bg-stone-200');

                        renderDisplay();

                    });

                    if (thinker.id === activeThinker) {

                        button.classList.add('bg-amber-600', 'text-white');

                    } else {

                        button.classList.add('bg-white', 'text-stone-700', 'hover:bg-stone-200');

                    }

                    selectorContainer.appendChild(button);

                });

                renderDisplay();

            }

  

            function initPractice() {

                const container = document.getElementById('practice-items');

                staticData.practice.forEach(item => {

                    const element = document.createElement('div');

                    element.className = 'md:grid md:grid-cols-12 md:gap-8 items-center';

                    element.innerHTML = `<div class="md:col-span-2 text-center mb-4 md:mb-0"><div class="text-6xl">${item.icon}</div></div><div class="md:col-span-10"><h3 class="text-2xl font-bold text-stone-800">${item.title}</h3><p class="mt-2 text-stone-600">${item.description}</p><blockquote class="mt-3 text-sm text-stone-500 italic">"${item.quote}"</blockquote></div>`;

                    container.appendChild(element);

                });

            }

  

            function initCritique() {

                const container = document.getElementById('critique-container');

                staticData.critique.forEach(item => {

                    const element = document.createElement('div');

                    element.className = 'bg-white p-6 rounded-lg shadow-lg border border-stone-200';

                    element.innerHTML = `<div><h3 class="text-xl font-bold text-stone-800">${item.claim}</h3><p class="text-stone-600 mt-1">${item.claim_desc}</p><button class="critique-toggle mt-4 px-4 py-2 bg-stone-200 text-stone-700 text-sm font-medium rounded-md hover:bg-stone-300 transition-colors">Reveal Critique</button></div><div class="critique-content hidden mt-4 border-t border-stone-200 pt-4"><h3 class="text-xl font-bold text-amber-700">${item.critique}</h3><p class="text-stone-600 mt-1">${item.critique_desc}</p></div>`;

                    const toggleButton = element.querySelector('.critique-toggle');

                    const critiqueContent = element.querySelector('.critique-content');

                    toggleButton.addEventListener('click', () => {

                        const isHidden = critiqueContent.classList.toggle('hidden');

                        toggleButton.textContent = isHidden ? 'Reveal Critique' : 'Hide Critique';

                    });

                    container.appendChild(element);

                });

            }

  

            // --- Navigation and UI Effects ---

            function initNav() {

                const sections = document.querySelectorAll('#main-content main section');

                const navLinks = document.querySelectorAll('.nav-link');

                const mobileNav = document.getElementById('mobile-nav');

  

                function updateActiveLink() {

                    let index = sections.length;

                    while (--index && window.scrollY + 100 < sections[index].offsetTop) {}

                    navLinks.forEach((link) => link.classList.remove('active'));

                    if (navLinks[index]) {

                        navLinks[index].classList.add('active');

                        mobileNav.value = navLinks[index].getAttribute('href');

                    }

                }

  

                mobileNav.addEventListener('change', (e) => {

                    const targetElement = document.querySelector(e.target.value);

                    if (targetElement) {

                        targetElement.scrollIntoView({

                            behavior: 'smooth'

                        });

                    }

                });

  

                window.addEventListener('scroll', updateActiveLink);

                updateActiveLink();

            }

  

            function initFadeIn() {

                const sections = document.querySelectorAll('#main-content main section');

                const observer = new IntersectionObserver((entries) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add('fade-in');

                            observer.unobserve(entry.target);

                        }

                    });

                }, {

                    threshold: 0.1

                });

                sections.forEach(section => {

                    observer.observe(section);

                });

            }

  

            // --- View Management ---

            function showView(viewId) {

                document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));

                document.getElementById(viewId).classList.add('active');

                if (viewId === 'main-content') {

                    window.scrollTo(0, 0);

                }

            }

  

            // --- Writings Feature (Firestore) ---

            function listenToWritings() {

                if (!db || !userId) return;

                if (writingsUnsubscribe) writingsUnsubscribe(); // Detach old listener if exists

  

                const writingsCol = window.firebase.query(window.firebase.collection(db, `artifacts/${appId}/users/${userId}/writings`));

                writingsUnsubscribe = window.firebase.onSnapshot(writingsCol, (snapshot) => {

                    writingsCache = snapshot.docs.map(doc => ({

                        id: doc.id,

                        ...doc.data()

                    }));

                    renderWritingsList();

                }, (error) => {

                    console.error("Error listening to writings:", error);

                    showModal("Database Error", "Could not fetch your writings. Please try again later.");

                });

            }

  

            function renderWritingsList() {

                const container = document.getElementById('writings-list-container');

                if (writingsCache.length === 0) {

                    container.innerHTML = `<p class="text-stone-500">No writings yet.</p>`;

                    return;

                }

                container.innerHTML = writingsCache

                    .sort((a, b) => (b.updatedAt?.toMillis() || 0) - (a.updatedAt?.toMillis() || 0))

                    .map(writing => `

            <div class="bg-white p-3 rounded-md shadow-sm flex justify-between items-center group">

                <button data-id="${writing.id}" class="open-writing-btn text-left flex-grow text-stone-800 hover:text-amber-700 truncate pr-2">${writing.title || 'Untitled'}</button>

                <button data-id="${writing.id}" class="edit-writing-btn p-1 text-stone-500 hover:text-amber-700">

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>

                </button>

            </div>

        `).join('');

            }

  

            function showWritingEditor(writing = null) {

                document.getElementById('writings-list-view').classList.add('hidden');

                document.getElementById('writing-editor-view').classList.remove('hidden');

                const form = document.getElementById('writing-form');

                form.reset();

                document.getElementById('writing-id').value = writing?.id || '';

                document.getElementById('writing-title').value = writing?.title || '';

                document.getElementById('writing-content').value = writing?.content || '';

                document.getElementById('delete-writing-btn').classList.toggle('hidden', !writing);

            }

  

            async function handleSaveWriting(e) {

                e.preventDefault();

                if (!db || !userId) return;

  

                const id = document.getElementById('writing-id').value;

                const title = document.getElementById('writing-title').value.trim();

                const content = document.getElementById('writing-content').value;

  

                if (!title) {

                    showModal("Validation Error", "Title cannot be empty.");

                    return;

                }

  

                const writingData = {

                    title,

                    content,

                    updatedAt: window.firebase.serverTimestamp()

                };

  

                try {

                    const collectionPath = `artifacts/${appId}/users/${userId}/writings`;

                    if (id) {

                        await window.firebase.setDoc(window.firebase.doc(db, collectionPath, id), writingData, {

                            merge: true

                        });

                    } else {

                        writingData.createdAt = window.firebase.serverTimestamp();

                        await window.firebase.addDoc(window.firebase.collection(db, collectionPath), writingData);

                    }

                    showWritingsList();

                } catch (error) {

                    console.error("Error saving writing:", error);

                    showModal("Error", "Could not save writing. Please try again.");

                }

            }

  

            function confirmDeleteWriting() {

                const id = document.getElementById('writing-id').value;

                if (!id || !db || !userId) return;

  

                showModal(

                    "Delete Writing",

                    "Are you sure you want to permanently delete this writing?",

                    [{

                        text: "Cancel",

                        class: "bg-stone-200 text-stone-700 hover:bg-stone-300",

                        onClick: closeModal

                    }, {

                        text: "Delete",

                        class: "bg-red-600 text-white hover:bg-red-700",

                        onClick: async () => {

                            try {

                                const collectionPath = `artifacts/${appId}/users/${userId}/writings`;

                                await window.firebase.deleteDoc(window.firebase.doc(db, collectionPath, id));

                                showWritingsList();

                                closeModal();

                            } catch (error) {

                                console.error("Error deleting writing:", error);

                                closeModal();

                                showModal("Error", "Could not delete writing. Please try again.");

                            }

                        }

                    }]

                );

            }

  

            function displayWriting(id) {

                const writing = writingsCache.find(w => w.id === id);

                if (writing) {

                    document.getElementById('writing-display-title').textContent = writing.title;

                    // Simple sanitization: replace < with &lt; to prevent HTML injection.

                    const sanitizedContent = writing.content.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, '<br>');

                    document.getElementById('writing-display-content').innerHTML = sanitizedContent;

                    showView('writing-display-view');

                    closeWritingsPanel();

                }

            }

  

            function showWritingsList() {

                document.getElementById('writing-editor-view').classList.add('hidden');

                document.getElementById('writings-list-view').classList.remove('hidden');

            }

  

            function openWritingsPanel() {

                const overlay = document.getElementById('writings-overlay');

                overlay.classList.remove('hidden');

                setTimeout(() => overlay.classList.add('open', 'opacity-100'), 10);

            }

  

            function closeWritingsPanel() {

                const overlay = document.getElementById('writings-overlay');

                overlay.classList.remove('open', 'opacity-100');

                setTimeout(() => overlay.classList.add('hidden'), 300);

            }

  

            // --- Custom Modal Functions ---

            const modal = {

                overlay: document.getElementById('custom-modal-overlay'),

                box: document.getElementById('custom-modal-box'),

                title: document.getElementById('custom-modal-title'),

                message: document.getElementById('custom-modal-message'),

                buttons: document.getElementById('custom-modal-buttons')

            };

  

            function showModal(title, message, buttons = [{

                text: "OK",

                class: "bg-amber-600 text-white hover:bg-amber-700",

                onClick: closeModal

            }]) {

                modal.title.textContent = title;

                modal.message.textContent = message;

                modal.buttons.innerHTML = ''; // Clear previous buttons

  

                buttons.forEach(btnInfo => {

                    const button = document.createElement('button');

                    button.textContent = btnInfo.text;

                    button.className = `px-4 py-2 rounded-md font-medium transition-colors ${btnInfo.class}`;

                    button.addEventListener('click', btnInfo.onClick);

                    modal.buttons.appendChild(button);

                });

  

                modal.overlay.classList.remove('hidden');

                setTimeout(() => {

                    modal.overlay.classList.add('opacity-100');

                    modal.box.classList.add('opacity-100', 'scale-100');

                    modal.box.classList.remove('scale-95');

                }, 10);

            }

  

            function closeModal() {

                modal.overlay.classList.remove('opacity-100');

                modal.box.classList.remove('opacity-100', 'scale-100');

                modal.box.classList.add('scale-95');

                setTimeout(() => modal.overlay.classList.add('hidden'), 300);

            }

  

            // --- Event Listeners Setup ---

            function initEventListeners() {

                document.getElementById('writings-btn').addEventListener('click', openWritingsPanel);

                document.getElementById('close-writings-btn').addEventListener('click', closeWritingsPanel);

                document.getElementById('writings-overlay').addEventListener('click', (e) => {

                    if (e.target.id === 'writings-overlay') closeWritingsPanel();

                });

                document.getElementById('add-new-writing-btn').addEventListener('click', () => showWritingEditor());

                document.getElementById('cancel-edit-btn').addEventListener('click', showWritingsList);

                document.getElementById('writing-form').addEventListener('submit', handleSaveWriting);

                document.getElementById('delete-writing-btn').addEventListener('click', confirmDeleteWriting);

  

                document.getElementById('writings-list-container').addEventListener('click', (e) => {

                    const openBtn = e.target.closest('.open-writing-btn');

                    const editBtn = e.target.closest('.edit-writing-btn');

                    if (openBtn) {

                        displayWriting(openBtn.dataset.id);

                    } else if (editBtn) {

                        const writing = writingsCache.find(w => w.id === editBtn.dataset.id);

                        showWritingEditor(writing);

                    }

                });

  

                document.getElementById('back-to-main-btn-1').addEventListener('click', () => showView('main-content'));

  

                // Close modal on escape key

                window.addEventListener('keydown', (e) => {

                    if (e.key === 'Escape' && !modal.overlay.classList.contains('hidden')) {

                        closeModal();

                    }

                });

            }

  

            // --- Main Initialization ---

            function main() {

                initFirebase();

                initExperience();

                initLineage();

                initPractice();

                initCritique();

                initNav();

                initFadeIn();

                initEventListeners();

            }

  

            main();

        });

    </script>

  

</body>

  

</html>