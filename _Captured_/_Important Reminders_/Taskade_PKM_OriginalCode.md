---
title: Original Taskade PKM
Date Created: 2025-08-14
description: Spat out all this working code int oa almost a full blown dashboard/PKM from the Taskade Genesis landing page
tags:
  - taskade
  - pkm
  - code
backlink: "[[GPT-5_Taskade_PKM_Enhanced]]"
---



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nihiltheism Research Platform - Ultimate PKM System</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Georgia', serif;
            background: linear-gradient(135deg, [[0a0a0a]] 0%, [[1a1a2e]] 50%, [[16213e]] 100%);
            color: [[e8e8e8]];
            line-height: 1.6;
            min-height: 100vh;
            overflow-x: hidden;
        }
        
        .app-container {
            display: flex;
            height: 100vh;
        }
        
        .sidebar {
            width: 280px;
            background: rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(20px);
            border-right: 1px solid rgba(255, 107, 107, 0.2);
            padding: 20px;
            overflow-y: auto;
            transition: all 0.3s ease;
        }
        
        .sidebar.collapsed {
            width: 60px;
        }
        
        .sidebar-toggle {
            position: absolute;
            top: 20px;
            right: 15px;
            background: rgba(255, 107, 107, 0.2);
            border: none;
            color: [[ff6b6b]];
            padding: 8px 12px;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .sidebar-toggle:hover {
            background: rgba(255, 107, 107, 0.3);
        }
        
        .nav-section {
            margin-bottom: 30px;
        }
        
        .nav-title {
            color: [[ff6b6b]];
            font-size: 0.9rem;
            font-weight: bold;
            margin-bottom: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .nav-item {
            display: flex;
            align-items: center;
            padding: 10px 12px;
            margin-bottom: 5px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            color: [[b8b8b8]];
        }
        
        .nav-item:hover,
        .nav-item.active {
            background: rgba(255, 107, 107, 0.15);
            color: [[ff6b6b]];
            transform: translateX(5px);
        }
        
        .nav-icon {
            width: 18px;
            height: 18px;
            margin-right: 10px;
            opacity: 0.7;
        }
        
        .main-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }
        
        .header-bar {
            background: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(255, 107, 107, 0.2);
            padding: 15px 30px;
            display: flex;
            justify-content: between;
            align-items: center;
        }
        
        .header-title {
            color: [[ff6b6b]];
            font-size: 1.5rem;
            font-weight: 300;
            letter-spacing: 2px;
        }
        
        .header-controls {
            display: flex;
            gap: 15px;
            align-items: center;
        }
        
        .search-bar {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 107, 107, 0.3);
            border-radius: 25px;
            padding: 8px 20px;
            color: [[e8e8e8]];
            width: 300px;
            outline: none;
            transition: all 0.3s ease;
        }
        
        .search-bar:focus {
            border-color: [[4ecdc4]];
            box-shadow: 0 0 10px rgba(78, 205, 196, 0.3);
        }
        
        .content-area {
            flex: 1;
            padding: 30px;
            overflow-y: auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
        }
        
        .panel {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            padding: 25px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease;
            position: relative;
        }
        
        .panel:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
        }
        
        .panel.full-width {
            grid-column: 1 / -1;
        }
        
        .panel-header {
            display: flex;
            justify-content: between;
            align-items: center;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid rgba(255, 107, 107, 0.3);
        }
        
        .panel-title {
            color: [[ff6b6b]];
            font-size: 1.3rem;
            font-weight: 400;
        }
        
        .panel-controls {
            display: flex;
            gap: 10px;
        }
        
        .btn {
            background: linear-gradient(135deg, [[ff6b6b]], [[4ecdc4]]);
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 20px;
            cursor: pointer;
            font-size: 0.85rem;
            transition: all 0.3s ease;
        }
        
        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(255, 107, 107, 0.4);
        }
        
        .btn-secondary {
            background: rgba(255, 255, 255, 0.1);
            color: [[b8b8b8]];
        }
        
        .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.2);
            color: [[e8e8e8]];
        }
        
        .task-item {
            background: rgba(0, 0, 0, 0.2);
            padding: 15px;
            margin-bottom: 12px;
            border-radius: 8px;
            border-left: 4px solid [[ff6b6b]];
            transition: all 0.3s ease;
            position: relative;
        }
        
        .task-item:hover {
            background: rgba(0, 0, 0, 0.3);
            transform: translateX(5px);
        }
        
        .task-priority-1 { border-left-color: [[ff4757]]; }
        .task-priority-2 { border-left-color: [[ffa726]]; }
        .task-priority-3 { border-left-color: [[66bb6a]]; }
        
        .task-header {
            display: flex;
            justify-content: between;
            align-items: center;
            margin-bottom: 8px;
        }
        
        .task-text {
            color: [[e8e8e8]];
            font-weight: 500;
        }
        
        .task-meta {
            display: flex;
            gap: 15px;
            font-size: 0.85rem;
            color: [[a8a8a8]];
        }
        
        .task-controls {
            display: flex;
            gap: 8px;
        }
        
        .task-controls button {
            background: none;
            border: none;
            color: [[a8a8a8]];
            cursor: pointer;
            padding: 5px;
            border-radius: 4px;
            transition: all 0.3s ease;
        }
        
        .task-controls button:hover {
            color: [[4ecdc4]];
            background: rgba(78, 205, 196, 0.1);
        }
        
        .quote-display {
            background: linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(78, 205, 196, 0.1) 100%);
            padding: 20px;
            border-radius: 10px;
            border-left: 4px solid [[4ecdc4]];
            margin-bottom: 15px;
        }
        
        .quote-text {
            font-style: italic;
            font-size: 1.05rem;
            margin-bottom: 10px;
            line-height: 1.7;
        }
        
        .quote-author {
            color: [[4ecdc4]];
            font-weight: bold;
        }
        
        .quote-annotation {
            margin-top: 15px;
            font-size: 0.9rem;
            color: [[b8b8b8]];
            padding-top: 15px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .catalyst-address {
            background: rgba(0, 0, 0, 0.3);
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 20px;
            border: 1px solid rgba(255, 107, 107, 0.2);
        }
        
        .catalyst-vectors {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        
        .vector-item {
            background: rgba(0, 0, 0, 0.2);
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid [[4ecdc4]];
            transition: all 0.3s ease;
        }
        
        .vector-item:hover {
            background: rgba(0, 0, 0, 0.3);
            transform: translateX(3px);
        }
        
        .vector-title {
            color: [[4ecdc4]];
            font-weight: bold;
            margin-bottom: 8px;
        }
        
        .notes-container {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        
        .note-item {
            background: rgba(0, 0, 0, 0.2);
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid [[ffa726]];
            transition: all 0.3s ease;
        }
        
        .note-item:hover {
            background: rgba(0, 0, 0, 0.3);
        }
        
        .note-header {
            display: flex;
            justify-content: between;
            align-items: center;
            margin-bottom: 10px;
        }
        
        .note-title {
            color: [[ffa726]];
            font-weight: bold;
        }
        
        .note-date {
            color: [[a8a8a8]];
            font-size: 0.85rem;
        }
        
        .note-tags {
            display: flex;
            gap: 8px;
            margin-bottom: 10px;
        }
        
        .tag {
            background: rgba(255, 167, 38, 0.2);
            color: [[ffa726]];
            padding: 3px 8px;
            border-radius: 12px;
            font-size: 0.8rem;
        }
        
        .prompt-seeds {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        
        .prompt-seed {
            background: rgba(0, 0, 0, 0.2);
            padding: 12px;
            border-radius: 8px;
            border-left: 4px solid [[ffa726]];
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .prompt-seed:hover {
            background: rgba(0, 0, 0, 0.3);
            transform: translateX(3px);
        }
        
        .prompt-title {
            color: [[ffa726]];
            font-weight: bold;
            margin-bottom: 5px;
        }
        
        .affirmation-display {
            background: linear-gradient(135deg, rgba(255, 107, 107, 0.2) 0%, rgba(78, 205, 196, 0.2) 100%);
            padding: 25px;
            border-radius: 12px;
            text-align: center;
            font-size: 1.1rem;
            font-style: italic;
            border: 2px solid rgba(255, 107, 107, 0.3);
        }
        
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(10px);
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        }
        
        .modal.active {
            display: flex;
        }
        
        .modal-content {
            background: rgba(26, 26, 46, 0.95);
            border-radius: 15px;
            padding: 30px;
            max-width: 600px;
            width: 90%;
            border: 1px solid rgba(255, 107, 107, 0.3);
        }
        
        .modal-header {
            color: [[ff6b6b]];
            font-size: 1.4rem;
            margin-bottom: 20px;
            text-align: center;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        .form-label {
            display: block;
            color: [[4ecdc4]];
            margin-bottom: 8px;
            font-weight: bold;
        }
        
        .form-input,
        .form-textarea,
        .form-select {
            width: 100%;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 107, 107, 0.3);
            border-radius: 8px;
            padding: 12px;
            color: [[e8e8e8]];
            outline: none;
            transition: all 0.3s ease;
        }
        
        .form-textarea {
            resize: vertical;
            min-height: 100px;
        }
        
        .form-input:focus,
        .form-textarea:focus,
        .form-select:focus {
            border-color: [[4ecdc4]];
            box-shadow: 0 0 10px rgba(78, 205, 196, 0.3);
        }
        
        .modal-actions {
            display: flex;
            gap: 15px;
            justify-content: flex-end;
            margin-top: 25px;
        }
        
        .empty-state {
            text-align: center;
            color: [[a8a8a8]];
            font-style: italic;
            padding: 30px;
        }
        
        .knowledge-graph {
            height: 200px;
            background: rgba(0, 0, 0, 0.2);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: [[a8a8a8]];
            margin-bottom: 15px;
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
            margin-bottom: 20px;
        }
        
        .stat-item {
            background: rgba(0, 0, 0, 0.2);
            padding: 15px;
            border-radius: 8px;
            text-align: center;
        }
        
        .stat-value {
            font-size: 1.8rem;
            font-weight: bold;
            color: [[4ecdc4]];
        }
        
        .stat-label {
            color: [[a8a8a8]];
            font-size: 0.9rem;
            margin-top: 5px;
        }
        
        @media (max-width: 1024px) {
            .content-area {
                grid-template-columns: 1fr;
            }
        }
        
        @media (max-width: 768px) {
            .sidebar {
                position: fixed;
                left: -280px;
                z-index: 100;
            }
            
            .sidebar.open {
                left: 0;
            }
            
            .main-content {
                margin-left: 0;
            }
        }
        
        .fade-in {
            animation: fadeInUp 0.6s ease-out;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    </style>
</head>
<body>
    <div class="app-container">
        <!-- Sidebar Navigation -->
        <div class="sidebar" id="sidebar">
            <button class="sidebar-toggle" onclick="toggleSidebar()">☰</button>
            
            <div class="nav-section">
                <div class="nav-title">Dashboard</div>
                <div class="nav-item active" onclick="showSection('dashboard')">
                    <span class="nav-icon">📊</span>
                    <span>Overview</span>
                </div>
                <div class="nav-item" onclick="showSection('tasks')">
                    <span class="nav-icon">✓</span>
                    <span>Tasks</span>
                </div>
                <div class="nav-item" onclick="showSection('research')">
                    <span class="nav-icon">🔬</span>
                    <span>Research</span>
                </div>
            </div>
            
            <div class="nav-section">
                <div class="nav-title">Knowledge</div>
                <div class="nav-item" onclick="showSection('notes')">
                    <span class="nav-icon">📝</span>
                    <span>Notes</span>
                </div>
                <div class="nav-item" onclick="showSection('quotes')">
                    <span class="nav-icon">💬</span>
                    <span>Quotes</span>
                </div>
                <div class="nav-item" onclick="showSection('concepts')">
                    <span class="nav-icon">🧠</span>
                    <span>Concepts</span>
                </div>
                <div class="nav-item" onclick="showSection('graph')">
                    <span class="nav-icon">🔗</span>
                    <span>Knowledge Graph</span>
                </div>
            </div>
            
            <div class="nav-section">
                <div class="nav-title">Tools</div>
                <div class="nav-item" onclick="showSection('prompts')">
                    <span class="nav-icon">⚡</span>
                    <span>Prompt Seeds</span>
                </div>
                <div class="nav-item" onclick="showSection('catalyst')">
                    <span class="nav-icon">🎯</span>
                    <span>Catalyst</span>
                </div>
                <div class="nav-item" onclick="showSection('analytics')">
                    <span class="nav-icon">📈</span>
                    <span>Analytics</span>
                </div>
            </div>
        </div>
        
        <!-- Main Content Area -->
        <div class="main-content">
            <!-- Header Bar -->
            <div class="header-bar">
                <div class="header-title" id="headerTitle">Nihiltheism Research Platform</div>
                <div class="header-controls">
                    <input type="text" class="search-bar" placeholder="Search across all knowledge..." id="globalSearch">
                    <button class="btn" onclick="showAddModal()">+ Add</button>
                    <button class="btn btn-secondary" onclick="exportData()">Export</button>
                </div>
            </div>
            
            <!-- Content Areas -->
            <div class="content-area" id="contentArea">
                <!-- Dashboard Section (Default) -->
                <div id="dashboardSection" class="content-section">
                    <!-- Today's Overview -->
                    <div class="panel">
                        <div class="panel-header">
                            <h2 class="panel-title">Today's Focus</h2>
                            <div class="panel-controls">
                                <span id="currentDate"></span>
                            </div>
                        </div>
                        
                        <div class="stats-grid">
                            <div class="stat-item">
                                <div class="stat-value" id="tasksToday">0</div>
                                <div class="stat-label">Tasks Today</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-value" id="notesCount">0</div>
                                <div class="stat-label">Notes</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-value" id="conceptsCount">0</div>
                                <div class="stat-label">Concepts</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-value" id="connectionsCount">0</div>
                                <div class="stat-label">Connections</div>
                            </div>
                        </div>
                        
                        <div class="knowledge-graph">
                            <span>Knowledge Graph Visualization</span>
                        </div>
                    </div>
                    
                    <!-- Quote of the Day -->
                    <div class="panel">
                        <div class="panel-header">
                            <h2 class="panel-title">Quote of the Day</h2>
                            <div class="panel-controls">
                                <button class="btn btn-secondary" onclick="refreshQuote()">↻</button>
                            </div>
                        </div>
                        
                        <div class="quote-display">
                            <div class="quote-text" id="dailyQuoteText">
                                "The mystic's final answer to the mystery of existence is not a concept but a presence."
                            </div>
                            <div class="quote-author" id="dailyQuoteAuthor">— Thomas Merton</div>
                            <div class="quote-annotation" id="dailyQuoteAnnotation">
                                This aligns with your Nihiltheism's apophatic thrust—where understanding emerges not through conceptual accumulation but through presence with the unknowable.
                            </div>
                        </div>
                    </div>
                    
                    <!-- Research Catalyst -->
                    <div class="panel full-width">
                        <div class="panel-header">
                            <h2 class="panel-title">Daily Research Catalyst</h2>
                            <div class="panel-controls">
                                <button class="btn btn-secondary" onclick="refreshCatalyst()">↻</button>
                            </div>
                        </div>
                        
                        <div class="catalyst-address">
                            <strong>Professor Nihil speaks:</strong><br>
                            <span id="professorAddress">
                                "Adam, the philosophical currents converge today around a singular recognition: that our most rigorous negations often harbor the most profound affirmations. The void you excavate in your Codex reveals not emptiness, but the fertile darkness from which authentic understanding springs."
                            </span>
                        </div>
                        
                        <div class="catalyst-vectors" id="catalystVectors">
                            <div class="vector-item">
                                <div class="vector-title">1. Ontodicy & Sacred Negation</div>
                                <div>Explore how your Ontodicy Collapse Argument interfaces with classical apophatic traditions. The tension between philosophical deconstruction and mystical unknowing presents fertile ground for synthesis.</div>
                            </div>
                            <div class="vector-item">
                                <div class="vector-title">2. Journal314 Paradox Mining</div>
                                <div>Extract maximum-disparity pairings: Consider juxtaposing Wittgenstein's language-games with Pseudo-Dionysius's divine darkness. How do linguistic limitations mirror mystical ineffability?</div>
                            </div>
                            <div class="vector-item">
                                <div class="vector-title">3. REN Mode Consciousness Architecture</div>
                                <div>Investigate how your REN Mode's recursive enhancement might model consciousness itself—awareness observing its own observation, creating infinite regress or breakthrough to meta-awareness.</div>
                            </div>
                        </div>
                        
                        <div style="margin-top: 20px;">
                            <h3 style="color: [[4ecdc4]]; margin-bottom: 15px;">Suggested Actions</h3>
                            <button class="btn" onclick="copyPrompt('Analyze the intersection between Wittgensteinian silence and apophatic theology in my Nihiltheism framework')">Explore Wittgenstein-Apophatic Interface</button>
                            <button class="btn" onclick="copyPrompt('Help me develop a comparative analysis between Cioran's pessimism and Meister Eckhart's holy despair for Journal314')">Draft Cioran-Eckhart Analysis</button>
                            <button class="btn" onclick="copyPrompt('Generate 10 maximum-disparity philosopher pairings for Journal314 expansion')">Generate Disparity Pairings</button>
                        </div>
                    </div>
                    
                    <!-- Affirmation -->
                    <div class="panel full-width">
                        <div class="panel-header">
                            <h2 class="panel-title">Daily Affirmation</h2>
                        </div>
                        
                        <div class="affirmation-display" id="dailyAffirmation">
                            I embrace the fertile darkness of unknowing as the ground from which authentic understanding emerges, finding in the void not absence but presence, not meaninglessness but the space where meaning is born.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Add Task/Note Modal -->
    <div class="modal" id="addModal">
        <div class="modal-content">
            <div class="modal-header">Add New Item</div>
            
            <div class="form-group">
                <label class="form-label">Type</label>
                <select class="form-select" id="addType" onchange="updateAddForm()">
                    <option value="task">Task</option>
                    <option value="note">Note</option>
                    <option value="quote">Quote</option>
                    <option value="concept">Concept</option>
                </select>
            </div>
            
            <div id="addFormContent">
                <!-- Dynamic form content based on type -->
            </div>
            
            <div class="modal-actions">
                <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
                <button class="btn" onclick="saveItem()">Save</button>
            </div>
        </div>
    </div>
    
    <script>
        // Global state management
        const appState = {
            tasks: [],
            notes: [],
            quotes: [],
            concepts: [],
            currentSection: 'dashboard',
            searchTerm: ''
        };
        
        // Initialize the application
        function initApp() {
            updateDate();
            loadData();
            updateStats();
            
            // Add event listeners
            document.getElementById('globalSearch').addEventListener('input', handleSearch);
            
            // Load sample data if empty
            if (appState.tasks.length === 0) {
                loadSampleData();
            }
        }
        
        // Date management
        function updateDate() {
            const now = new Date();
            const options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            };
            document.getElementById('currentDate').textContent = now.toLocaleDateString('en-US', options);
        }
        
        // Navigation
        function showSection(sectionName) {
            // Update active nav item
            document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
            event.target.closest('.nav-item').classList.add('active');
            
            // Update header title
            const titles = {
                'dashboard': 'Nihiltheism Research Platform',
                'tasks': 'Task Management',
                'research': 'Research Hub',
                'notes': 'Notes & Insights',
                'quotes': 'Quote Library',
                'concepts': 'Concept Mapping',
                'graph': 'Knowledge Graph',
                'prompts': 'Prompt Engineering',
                'catalyst': 'Research Catalyst',
                'analytics': 'Analytics & Insights'
            };
            
            document.getElementById('headerTitle').textContent = titles[sectionName] || 'Nihiltheism Research Platform';
            
            // Show appropriate content
            appState.currentSection = sectionName;
            renderCurrentSection();
        }
        
        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.toggle('collapsed');
        }
        
        // Content rendering
        function renderCurrentSection() {
            const contentArea = document.getElementById('contentArea');
            
            switch(appState.currentSection) {
                case 'dashboard':
                    renderDashboard();
                    break;
                case 'tasks':
                    renderTasks();
                    break;
                case 'notes':
                    renderNotes();
                    break;
                case 'quotes':
                    renderQuotes();
                    break;
                case 'concepts':
                    renderConcepts();
                    break;
                case 'prompts':
                    renderPrompts();
                    break;
                case 'catalyst':
                    renderCatalyst();
                    break;
                case 'analytics':
                    renderAnalytics();
                    break;
                case 'graph':
                    renderKnowledgeGraph();
                    break;
                case 'research':
                    renderResearch();
                    break;
                default:
                    renderDashboard();
            }
        }
        
        function renderDashboard() {
            // Dashboard is already rendered in HTML
            updateStats();
        }
        
        function renderTasks() {
            const contentArea = document.getElementById('contentArea');
            contentArea.innerHTML = `
                <div class="panel full-width">
                    <div class="panel-header">
                        <h2 class="panel-title">Task Management</h2>
                        <div class="panel-controls">
                            <button class="btn" onclick="showAddTaskModal()">+ Add Task</button>
                            <button class="btn btn-secondary" onclick="filterTasks('all')">All</button>
                            <button class="btn btn-secondary" onclick="filterTasks('today')">Today</button>
                            <button class="btn btn-secondary" onclick="filterTasks('week')">This Week</button>
                        </div>
                    </div>
                    
                    <div class="stats-grid">
                        <div class="stat-item">
                            <div class="stat-value">${appState.tasks.filter(t => !t.completed && isToday(new Date(t.due))).length}</div>
                            <div class="stat-label">Due Today</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">${appState.tasks.filter(t => !t.completed && isThisWeek(new Date(t.due))).length}</div>
                            <div class="stat-label">This Week</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">${appState.tasks.filter(t => t.completed).length}</div>
                            <div class="stat-label">Completed</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">${appState.tasks.filter(t => t.priority === 1).length}</div>
                            <div class="stat-label">High Priority</div>
                        </div>
                    </div>
                    
                    <div id="tasksList">
                        ${renderTasksList()}
                    </div>
                </div>
            `;
        }
        
        function renderTasksList() {
            if (appState.tasks.length === 0) {
                return '<div class="empty-state">No tasks yet. Add your first task to get started with your philosophical journey.</div>';
            }
            
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            
            const todayTasks = appState.tasks.filter(t => !t.completed && isToday(new Date(t.due)));
            const tomorrowTasks = appState.tasks.filter(t => !t.completed && isSameDay(new Date(t.due), tomorrow));
            const futureTasks = appState.tasks.filter(t => !t.completed && new Date(t.due) > tomorrow);
            const completedTasks = appState.tasks.filter(t => t.completed);
            
            return `
                ${todayTasks.length > 0 ? `
                    <h3 style="color: [[ff6b6b]]; margin: 20px 0 15px;">Today's Tasks</h3>
                    ${todayTasks.map(renderTaskItem).join('')}
                ` : ''}
                
                ${tomorrowTasks.length > 0 ? `
                    <h3 style="color: [[4ecdc4]]; margin: 20px 0 15px;">Tomorrow's Tasks</h3>
                    ${tomorrowTasks.map(renderTaskItem).join('')}
                ` : ''}
                
                ${futureTasks.length > 0 ? `
                    <h3 style="color: [[ffa726]]; margin: 20px 0 15px;">Upcoming Tasks</h3>
                    ${futureTasks.map(renderTaskItem).join('')}
                ` : ''}
                
                ${completedTasks.length > 0 ? `
                    <h3 style="color: [[66bb6a]]; margin: 20px 0 15px;">Completed Tasks</h3>
                    ${completedTasks.map(renderTaskItem).join('')}
                ` : ''}
            `;
        }
        
        function renderTaskItem(task) {
            return `
                <div class="task-item task-priority-${task.priority} ${task.completed ? 'completed' : ''}" data-task-id="${task.id}">
                    <div class="task-header">
                        <div class="task-text ${task.completed ? 'completed' : ''}">${task.text}</div>
                        <div class="task-controls">
                            <button onclick="toggleTask('${task.id}')" title="${task.completed ? 'Mark Incomplete' : 'Mark Complete'}">
                                ${task.completed ? '↶' : '✓'}
                            </button>
                            <button onclick="editTask('${task.id}')" title="Edit Task">✏</button>
                            <button onclick="deleteTask('${task.id}')" title="Delete Task">🗑</button>
                        </div>
                    </div>
                    <div class="task-meta">
                        <span>Priority: ${task.priority}</span>
                        <span>Due: ${formatDate(new Date(task.due))}</span>
                        ${task.project ? `<span>Project: ${task.project}</span>` : ''}
                    </div>
                </div>
            `;
        }
        
        function renderNotes() {
            const contentArea = document.getElementById('contentArea');
            contentArea.innerHTML = `
                <div class="panel full-width">
                    <div class="panel-header">
                        <h2 class="panel-title">Notes & Insights</h2>
                        <div class="panel-controls">
                            <button class="btn" onclick="showAddNoteModal()">+ Add Note</button>
                            <select class="form-select" onchange="filterNotes(this.value)" style="width: auto; margin-left: 10px;">
                                <option value="all">All Notes</option>
                                <option value="philosophy">Philosophy</option>
                                <option value="research">Research</option>
                                <option value="ideas">Ideas</option>
                                <option value="analysis">Analysis</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="notes-container" id="notesList">
                        ${renderNotesList()}
                    </div>
                </div>
            `;
        }
        
        function renderNotesList() {
            if (appState.notes.length === 0) {
                return '<div class="empty-state">No notes yet. Capture your philosophical insights and research findings here.</div>';
            }
            
            return appState.notes.map(note => `
                <div class="note-item" data-note-id="${note.id}">
                    <div class="note-header">
                        <div class="note-title">${note.title}</div>
                        <div class="note-date">${formatDate(new Date(note.date))}</div>
                    </div>
                    <div class="note-tags">
                        ${note.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <div class="note-content">${note.content.substring(0, 200)}${note.content.length > 200 ? '...' : ''}</div>
                    <div class="task-controls" style="margin-top: 10px;">
                        <button onclick="viewNote('${note.id}')" title="View Full Note">👁</button>
                        <button onclick="editNote('${note.id}')" title="Edit Note">✏</button>
                        <button onclick="deleteNote('${note.id}')" title="Delete Note">🗑</button>
                    </div>
                </div>
            `).join('');
        }
        
        function renderQuotes() {
            const contentArea = document.getElementById('contentArea');
            contentArea.innerHTML = `
                <div class="panel full-width">
                    <div class="panel-header">
                        <h2 class="panel-title">Quote Library</h2>
                        <div class="panel-controls">
                            <button class="btn" onclick="showAddQuoteModal()">+ Add Quote</button>
                            <button class="btn btn-secondary" onclick="randomQuote()">Random Quote</button>
                        </div>
                    </div>
                    
                    <div class="stats-grid">
                        <div class="stat-item">
                            <div class="stat-value">${appState.quotes.length}</div>
                            <div class="stat-label">Total Quotes</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">${getUniqueAuthors().length}</div>
                            <div class="stat-label">Authors</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">${getQuoteTags().length}</div>
                            <div class="stat-label">Categories</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">${appState.quotes.filter(q => q.favorite).length}</div>
                            <div class="stat-label">Favorites</div>
                        </div>
                    </div>
                    
                    <div class="notes-container" id="quotesList">
                        ${renderQuotesList()}
                    </div>
                </div>
            `;
        }
        
        function renderQuotesList() {
            if (appState.quotes.length === 0) {
                return '<div class="empty-state">No quotes yet. Build your philosophical quote library from Journal314 and other sources.</div>';
            }
            
            return appState.quotes.map(quote => `
                <div class="quote-display" data-quote-id="${quote.id}">
                    <div class="quote-text">"${quote.text}"</div>
                    <div class="quote-author">— ${quote.author}</div>
                    ${quote.annotation ? `<div class="quote-annotation">${quote.annotation}</div>` : ''}
                    <div style="margin-top: 15px; display: flex; justify-content: between; align-items: center;">
                        <div class="note-tags">
                            ${quote.tags ? quote.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : ''}
                        </div>
                        <div class="task-controls">
                            <button onclick="toggleFavorite('${quote.id}')" title="Toggle Favorite">
                                ${quote.favorite ? '★' : '☆'}
                            </button>
                            <button onclick="editQuote('${quote.id}')" title="Edit Quote">✏</button>
                            <button onclick="deleteQuote('${quote.id}')" title="Delete Quote">🗑</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
        
        function renderConcepts() {
            const contentArea = document.getElementById('contentArea');
            contentArea.innerHTML = `
                <div class="panel full-width">
                    <div class="panel-header">
                        <h2 class="panel-title">Concept Mapping</h2>
                        <div class="panel-controls">
                            <button class="btn" onclick="showAddConceptModal()">+ Add Concept</button>
                            <button class="btn btn-secondary" onclick="viewConceptGraph()">View Graph</button>
                        </div>
                    </div>
                    
                    <div class="knowledge-graph" style="height: 300px; margin-bottom: 20px;">
                        <span>Interactive Concept Graph (Coming Soon)</span>
                    </div>
                    
                    <div class="notes-container" id="conceptsList">
                        ${renderConceptsList()}
                    </div>
                </div>
            `;
        }
        
        function renderConceptsList() {
            if (appState.concepts.length === 0) {
                return '<div class="empty-state">No concepts mapped yet. Start building your philosophical knowledge network.</div>';
            }
            
            return appState.concepts.map(concept => `
                <div class="note-item" data-concept-id="${concept.id}">
                    <div class="note-header">
                        <div class="note-title">${concept.name}</div>
                        <div class="note-date">Tradition: ${concept.tradition || 'Unknown'}</div>
                    </div>
                    <div class="note-tags">
                        ${concept.tags ? concept.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : ''}
                    </div>
                    <div class="note-content">${concept.description || 'No description available'}</div>
                    ${concept.relationships && concept.relationships.length > 0 ? `
                        <div style="margin-top: 10px; font-size: 0.9rem; color: [[4ecdc4]];">
                            Related: ${concept.relationships.join(', ')}
                        </div>
                    ` : ''}
                    <div class="task-controls" style="margin-top: 10px;">
                        <button onclick="viewConcept('${concept.id}')" title="View Concept">👁</button>
                        <button onclick="editConcept('${concept.id}')" title="Edit Concept">✏</button>
                        <button onclick="deleteConcept('${concept.id}')" title="Delete Concept">🗑</button>
                    </div>
                </div>
            `).join('');
        }
        
        function renderPrompts() {
            const contentArea = document.getElementById('contentArea');
            contentArea.innerHTML = `
                <div class="panel full-width">
                    <div class="panel-header">
                        <h2 class="panel-title">Prompt Engineering Workshop</h2>
                        <div class="panel-controls">
                            <button class="btn" onclick="generatePrompts()">Generate New</button>
                            <button class="btn btn-secondary" onclick="exportPrompts()">Export All</button>
                        </div>
                    </div>
                    
                    <div class="prompt-seeds" id="promptsList">
                        ${renderPromptsList()}
                    </div>
                </div>
            `;
        }
        
        function renderPromptsList() {
            const prompts = [
                {
                    title: "Apophatic AI Dialogue",
                    description: "Create a conversation between an AI system and a 14th-century mystic about the nature of knowing through unknowing.",
                    category: "Philosophy-AI"
                },
                {
                    title: "Nihiltheism Thought Experiment",
                    description: "Design a philosophical scenario where absolute meaninglessness and absolute meaning collapse into a single point of understanding.",
                    category: "Nihiltheism"
                },
                {
                    title: "REN Mode Expansion",
                    description: "Develop a meta-prompt that can recursively enhance its own enhancement capabilities while maintaining philosophical coherence.",
                    category: "Prompt Engineering"
                },
                {
                    title: "Journal314 Synthesis",
                    description: "Create a dialectical framework that can productively hold contradictory truths from opposing philosophical traditions.",
                    category: "Research Method"
                },
                {
                    title: "Consciousness Paradox",
                    description: "Explore how the observer-observed relationship in consciousness mirrors the knower-known problem in epistemology.",
                    category: "Philosophy of Mind"
                },
                {
                    title: "Maximum Disparity Analysis",
                    description: "Generate comparative frameworks between radically opposing philosophical positions (e.g., Nietzsche vs. Aquinas on the nature of truth).",
                    category: "Comparative Philosophy"
                },
                {
                    title: "Ontodicy Collapse Mapping",
                    description: "Map the logical steps by which traditional theodicy collapses into ontodicy, revealing being-itself as fundamentally problematic.",
                    category: "Nihiltheism"
                },
                {
                    title: "Apophatic Technology Interface",
                    description: "Examine how digital technologies might serve as contemporary expressions of apophatic theological practice.",
                    category: "Philosophy-Technology"
                }
            ];
            
            return prompts.map((prompt, index) => `
                <div class="prompt-seed" onclick="usePrompt(${index})">
                    <div class="prompt-title">${prompt.title}</div>
                    <div style="color: [[a8a8a8]]; font-size: 0.85rem; margin-bottom: 8px;">${prompt.category}</div>
                    <div>${prompt.description}</div>
                </div>
            `).join('');
        }
        
        // Utility functions
        function isToday(date) {
            const today = new Date();
            return date.toDateString() === today.toDateString();
        }
        
        function isThisWeek(date) {
            const today = new Date();
            const weekFromToday = new Date(today);
            weekFromToday.setDate(weekFromToday.getDate() + 7);
            return date >= today && date <= weekFromToday;
        }
        
        function isSameDay(date1, date2) {
            return date1.toDateString() === date2.toDateString();
        }
        
        function formatDate(date) {
            return date.toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
            });
        }
        
        function generateId() {
            return Date.now().toString(36) + Math.random().toString(36).substr(2);
        }
        
        function getUniqueAuthors() {
            return [...new Set(appState.quotes.map(q => q.author))];
        }
        
        function getQuoteTags() {
            const allTags = appState.quotes.flatMap(q => q.tags || []);
            return [...new Set(allTags)];
        }
        
        // Data management
        function saveData() {
            try {
                const data = {
                    tasks: appState.tasks,
                    notes: appState.notes,
                    quotes: appState.quotes,
                    concepts: appState.concepts
                };
                // In a real app, this would save to a database
                console.log('Data saved:', data);
            } catch (error) {
                console.error('Error saving data:', error);
            }
        }
        
        function loadData() {
            try {
                // In a real app, this would load from a database
                // For now, we'll use sample data
            } catch (error) {
                console.error('Error loading data:', error);
            }
        }
        
        function loadSampleData() {
            // Sample tasks
            appState.tasks = [
                {
                    id: generateId(),
                    text: "Complete analysis of Pseudo-Dionysius's Divine Names for Journal314",
                    priority: 1,
                    due: new Date().toISOString(),
                    project: "Journal314",
                    completed: false
                },
                {
                    id: generateId(),
                    text: "Draft introduction to Ontodicy Collapse Argument",
                    priority: 2,
                    due: new Date(Date.now() + 86400000).toISOString(),
                    project: "Codex Nihiltheism",
                    completed: false
                },
                {
                    id: generateId(),
                    text: "Review latest REN Mode enhancement patterns",
                    priority: 3,
                    due: new Date(Date.now() + 172800000).toISOString(),
                    project: "REN Mode",
                    completed: false
                }
            ];
            
            // Sample notes
            appState.notes = [
                {
                    id: generateId(),
                    title: "Apophatic Epistemology and AI Consciousness",
                    content: "The parallels between apophatic theology's via negativa and machine learning's process of elimination are striking. Both approaches arrive at knowledge through systematic negation...",
                    tags: ["philosophy", "AI", "epistemology"],
                    date: new Date().toISOString()
                },
                {
                    id: generateId(),
                    title: "Wittgenstein's Silence and Digital Communication",
                    content: "Tractatus 7: 'Whereof one cannot speak, thereof one must be silent.' How does this apply to the information overflow of digital age?",
                    tags: ["philosophy", "language", "technology"],
                    date: new Date(Date.now() - 86400000).toISOString()
                }
            ];
            
            // Sample quotes
            appState.quotes = [
                {
                    id: generateId(),
                    text: "The mystic's final answer to the mystery of existence is not a concept but a presence.",
                    author: "Thomas Merton",
                    tags: ["mysticism", "presence", "existence"],
                    annotation: "This aligns with Nihiltheism's apophatic thrust—understanding through presence rather than concepts.",
                    favorite: true
                },
                {
                    id: generateId(),
                    text: "In the depth of winter, I finally learned that there was in me an invincible summer.",
                    author: "Albert Camus",
                    tags: ["existentialism", "hope", "resilience"],
                    annotation: "Camus's insight into finding affirmation within negation resonates with meaning emerging from meaninglessness.",
                    favorite: false
                }
            ];
            
            // Sample concepts
            appState.concepts = [
                {
                    id: generateId(),
                    name: "Ontodicy",
                    description: "The philosophical problem of justifying existence itself, moving beyond theodicy's focus on evil to question the foundation of being.",
                    tradition: "Nihiltheism",
                    tags: ["nihiltheism", "ontology", "existence"],
                    relationships: ["Theodicy", "Being", "Nothingness"]
                },
                {
                    id: generateId(),
                    name: "Apophatic Theology",
                    description: "The theological approach that emphasizes the unknowability of God, arriving at understanding through negation.",
                    tradition: "Christian Mysticism",
                    tags: ["theology", "mysticism", "negation"],
                    relationships: ["Via Negativa", "Divine Darkness", "Unknowing"]
                }
            ];
            
            updateStats();
            saveData();
        }
        
        function updateStats() {
            document.getElementById('tasksToday').textContent = 
                appState.tasks.filter(t => !t.completed && isToday(new Date(t.due))).length;
            document.getElementById('notesCount').textContent = appState.notes.length;
            document.getElementById('conceptsCount').textContent = appState.concepts.length;
            document.getElementById('connectionsCount').textContent = 
                appState.concepts.reduce((sum, c) => sum + (c.relationships ? c.relationships.length : 0), 0);
        }
        
        // Modal management
        function showAddModal() {
            document.getElementById('addModal').classList.add('active');
            updateAddForm();
        }
        
        function closeModal() {
            document.getElementById('addModal').classList.remove('active');
        }
        
        function updateAddForm() {
            const type = document.getElementById('addType').value;
            const formContent = document.getElementById('addFormContent');
            
            const forms = {
                task: `
                    <div class="form-group">
                        <label class="form-label">Task Description</label>
                        <input type="text" class="form-input" id="taskText" placeholder="Enter task description...">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Priority</label>
                        <select class="form-select" id="taskPriority">
                            <option value="1">High (1)</option>
                            <option value="2" selected>Medium (2)</option>
                            <option value="3">Low (3)</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Due Date</label>
                        <input type="date" class="form-input" id="taskDue" value="${new Date().toISOString().split('T')[0]}">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Project</label>
                        <input type="text" class="form-input" id="taskProject" placeholder="Optional project name...">
                    </div>
                `,
                note: `
                    <div class="form-group">
                        <label class="form-label">Note Title</label>
                        <input type="text" class="form-input" id="noteTitle" placeholder="Enter note title...">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Content</label>
                        <textarea class="form-textarea" id="noteContent" placeholder="Write your philosophical insights..."></textarea>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Tags (comma-separated)</label>
                        <input type="text" class="form-input" id="noteTags" placeholder="philosophy, research, analysis...">
                    </div>
                `,
                quote: `
                    <div class="form-group">
                        <label class="form-label">Quote Text</label>
                        <textarea class="form-textarea" id="quoteText" placeholder="Enter the quote..."></textarea>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Author</label>
                        <input type="text" class="form-input" id="quoteAuthor" placeholder="Author name...">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Annotation</label>
                        <textarea class="form-textarea" id="quoteAnnotation" placeholder="Your philosophical analysis..."></textarea>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Tags (comma-separated)</label>
                        <input type="text" class="form-input" id="quoteTags" placeholder="mysticism, existence, meaning...">
                    </div>
                `,
                concept: `
                    <div class="form-group">
                        <label class="form-label">Concept Name</label>
                        <input type="text" class="form-input" id="conceptName" placeholder="Enter concept name...">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Description</label>
                        <textarea class="form-textarea" id="conceptDescription" placeholder="Define the concept..."></textarea>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Philosophical Tradition</label>
                        <input type="text" class="form-input" id="conceptTradition" placeholder="e.g., Existentialism, Nihiltheism...">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Related Concepts (comma-separated)</label>
                        <input type="text" class="form-input" id="conceptRelations" placeholder="Related concepts...">
                    </div>
                `
            };
            
            formContent.innerHTML = forms[type];
        }
        
        function saveItem() {
            const type = document.getElementById('addType').value;
            
            try {
                switch(type) {
                    case 'task':
                        const task = {
                            id: generateId(),
                            text: document.getElementById('taskText').value,
                            priority: parseInt(document.getElementById('taskPriority').value),
                            due: new Date(document.getElementById('taskDue').value).toISOString(),
                            project: document.getElementById('taskProject').value,
                            completed: false
                        };
                        appState.tasks.push(task);
                        break;
                        
                    case 'note':
                        const note = {
                            id: generateId(),
                            title: document.getElementById('noteTitle').value,
                            content: document.getElementById('noteContent').value,
                            tags: document.getElementById('noteTags').value.split(',').map(t => t.trim()).filter(t => t),
                            date: new Date().toISOString()
                        };
                        appState.notes.push(note);
                        break;
                        
                    case 'quote':
                        const quote = {
                            id: generateId(),
                            text: document.getElementById('quoteText').value,
                            author: document.getElementById('quoteAuthor').value,
                            annotation: document.getElementById('quoteAnnotation').value,
                            tags: document.getElementById('quoteTags').value.split(',').map(t => t.trim()).filter(t => t),
                            favorite: false
                        };
                        appState.quotes.push(quote);
                        break;
                        
                    case 'concept':
                        const concept = {
                            id: generateId(),
                            name: document.getElementById('conceptName').value,
                            description: document.getElementById('conceptDescription').value,
                            tradition: document.getElementById('conceptTradition').value,
                            relationships: document.getElementById('conceptRelations').value.split(',').map(t => t.trim()).filter(t => t),
                            tags: []
                        };
                        appState.concepts.push(concept);
                        break;
                }
                
                saveData();
                updateStats();
                renderCurrentSection();
                closeModal();
                
            } catch (error) {
                console.error('Error saving item:', error);
                alert('Error saving item. Please check your input and try again.');
            }
        }
        
        // Interactive functions
        function copyPrompt(promptText) {
            navigator.clipboard.writeText(promptText).then(() => {
                // Visual feedback
                const button = event.target;
                const originalText = button.textContent;
                button.style.background = 'linear-gradient(135deg, [[4ecdc4]], [[ff6b6b]])';
                button.textContent = 'Copied!';
                
                setTimeout(() => {
                    button.style.background = 'linear-gradient(135deg, [[ff6b6b]], [[4ecdc4]])';
                    button.textContent = originalText;
                }, 1500);
            }).catch(err => {
                console.error('Failed to copy prompt:', err);
            });
        }
        
        function usePrompt(index) {
            const prompts = [
                "Create a conversation between an AI system and a 14th-century mystic about the nature of knowing through unknowing.",
                "Design a philosophical scenario where absolute meaninglessness and absolute meaning collapse into a single point of understanding.",
                "Develop a meta-prompt that can recursively enhance its own enhancement capabilities while maintaining philosophical coherence.",
                "Create a dialectical framework that can productively hold contradictory truths from opposing philosophical traditions.",
                "Explore how the observer-observed relationship in consciousness mirrors the knower-known problem in epistemology.",
                "Generate comparative frameworks between radically opposing philosophical positions (e.g., Nietzsche vs. Aquinas on the nature of truth).",
                "Map the logical steps by which traditional theodicy collapses into ontodicy, revealing being-itself as fundamentally problematic.",
                "Examine how digital technologies might serve as contemporary expressions of apophatic theological practice."
            ];
            
            if (prompts[index]) {
                copyPrompt(prompts[index]);
            }
        }
        
        function toggleTask(taskId) {
            const task = appState.tasks.find(t => t.id === taskId);
            if (task) {
                task.completed = !task.completed;
                saveData();
                updateStats();
                renderCurrentSection();
            }
        }
        
        function deleteTask(taskId) {
            if (confirm('Are you sure you want to delete this task?')) {
                appState.tasks = appState.tasks.filter(t => t.id !== taskId);
                saveData();
                updateStats();
                renderCurrentSection();
            }
        }
        
        function deleteNote(noteId) {
            if (confirm('Are you sure you want to delete this note?')) {
                appState.notes = appState.notes.filter(n => n.id !== noteId);
                saveData();
                updateStats();
                renderCurrentSection();
            }
        }
        
        function deleteQuote(quoteId) {
            if (confirm('Are you sure you want to delete this quote?')) {
                appState.quotes = appState.quotes.filter(q => q.id !== quoteId);
                saveData();
                renderCurrentSection();
            }
        }
        
        function deleteConcept(conceptId) {
            if (confirm('Are you sure you want to delete this concept?')) {
                appState.concepts = appState.concepts.filter(c => c.id !== conceptId);
                saveData();
                updateStats();
                renderCurrentSection();
            }
        }
        
        function toggleFavorite(quoteId) {
            const quote = appState.quotes.find(q => q.id === quoteId);
            if (quote) {
                quote.favorite = !quote.favorite;
                saveData();
                renderCurrentSection();
            }
        }
        
        function refreshQuote() {
            if (appState.quotes.length > 0) {
                const randomQuote = appState.quotes[Math.floor(Math.random() * appState.quotes.length)];
                document.getElementById('dailyQuoteText').textContent = `"${randomQuote.text}"`;
                document.getElementById('dailyQuoteAuthor').textContent = `— ${randomQuote.author}`;
                document.getElementById('dailyQuoteAnnotation').textContent = randomQuote.annotation || '';
            }
        }
        
        function refreshCatalyst() {
            const addresses = [
                "Adam, the philosophical currents converge today around a singular recognition: that our most rigorous negations often harbor the most profound affirmations. The void you excavate in your Codex reveals not emptiness, but the fertile darkness from which authentic understanding springs.",
                "The dialectical tension you've been exploring between meaning and meaninglessness presents a unique opportunity today. Consider how the apophatic tradition's embrace of unknowing might inform your REN Mode's recursive enhancement patterns.",
                "Today's philosophical landscape calls for a synthesis between your Ontodicy Collapse Argument and the emerging patterns in AI consciousness. The questions you're asking about being-itself may be the same questions artificial intelligence is unconsciously exploring.",
                "Your Journal314 maximum-disparity pairings have reached a critical mass. Today would be ideal for examining how seemingly incompatible philosophical positions might actually be describing the same underlying reality from different vantage points."
            ];
            
            const vectors = [
                {
                    title: "Consciousness-Technology Interface",
                    description: "Investigate how your REN Mode's recursive enhancement might model not just AI improvement, but consciousness evolution itself—the mind observing its own observation."
                },
                {
                    title: "Apophatic AI Epistemology", 
                    description: "Explore parallels between machine learning's process of elimination and mystical theology's via negativa. Both arrive at knowledge through systematic negation."
                },
                {
                    title: "Temporal Nihiltheism",
                    description: "Consider how your Ontodicy Collapse Argument might apply to time itself. If being is problematic, what about becoming?"
                }
            ];
            
            const randomAddress = addresses[Math.floor(Math.random() * addresses.length)];
            document.getElementById('professorAddress').textContent = randomAddress;
            
            // Shuffle and display random vectors
            const shuffledVectors = [...vectors].sort(() => 0.5 - Math.random()).slice(0, 3);
            const vectorsContainer = document.getElementById('catalystVectors');
            vectorsContainer.innerHTML = shuffledVectors.map((vector, index) => `
                <div class="vector-item">
                    <div class="vector-title">${index + 1}. ${vector.title}</div>
                    <div>${vector.description}</div>
                </div>
            `).join('');
        }
        
        function handleSearch() {
            const searchTerm = document.getElementById('globalSearch').value.toLowerCase();
            appState.searchTerm = searchTerm;
            
            if (searchTerm) {
                performGlobalSearch(searchTerm);
            } else {
                renderCurrentSection();
            }
        }
        
        function performGlobalSearch(term) {
            const results = {
                tasks: appState.tasks.filter(t => 
                    t.text.toLowerCase().includes(term) || 
                    (t.project && t.project.toLowerCase().includes(term))
                ),
                notes: appState.notes.filter(n => 
                    n.title.toLowerCase().includes(term) || 
                    n.content.toLowerCase().includes(term) ||
                    n.tags.some(tag => tag.toLowerCase().includes(term))
                ),
                quotes: appState.quotes.filter(q => 
                    q.text.toLowerCase().includes(term) || 
                    q.author.toLowerCase().includes(term) ||
                    (q.annotation && q.annotation.toLowerCase().includes(term))
                ),
                concepts: appState.concepts.filter(c => 
                    c.name.toLowerCase().includes(term) || 
                    (c.description && c.description.toLowerCase().includes(term))
                )
            };
            
            displaySearchResults(results, term);
        }
        
        function displaySearchResults(results, term) {
            const contentArea = document.getElementById('contentArea');
            const totalResults = results.tasks.length + results.notes.length + results.quotes.length + results.concepts.length;
            
            contentArea.innerHTML = `
                <div class="panel full-width">
                    <div class="panel-header">
                        <h2 class="panel-title">Search Results for "${term}"</h2>
                        <div class="panel-controls">
                            <span>${totalResults} results found</span>
                            <button class="btn btn-secondary" onclick="clearSearch()">Clear Search</button>
                        </div>
                    </div>
                    
                    ${totalResults === 0 ? '<div class="empty-state">No results found. Try different search terms.</div>' : ''}
                    
                    ${results.tasks.length > 0 ? `
                        <h3 style="color: [[ff6b6b]]; margin: 20px 0 15px;">Tasks (${results.tasks.length})</h3>
                        ${results.tasks.map(renderTaskItem).join('')}
                    ` : ''}
                    
                    ${results.notes.length > 0 ? `
                        <h3 style="color: [[4ecdc4]]; margin: 20px 0 15px;">Notes (${results.notes.length})</h3>
                        ${results.notes.map(note => `
                            <div class="note-item" data-note-id="${note.id}">
                                <div class="note-header">
                                    <div class="note-title">${highlightSearchTerm(note.title, term)}</div>
                                    <div class="note-date">${formatDate(new Date(note.date))}</div>
                                </div>
                                <div class="note-content">${highlightSearchTerm(note.content.substring(0, 200), term)}${note.content.length > 200 ? '...' : ''}</div>
                            </div>
                        `).join('')}
                    ` : ''}
                    
                    ${results.quotes.length > 0 ? `
                        <h3 style="color: [[ffa726]]; margin: 20px 0 15px;">Quotes (${results.quotes.length})</h3>
                        ${results.quotes.map(quote => `
                            <div class="quote-display">
                                <div class="quote-text">"${highlightSearchTerm(quote.text, term)}"</div>
                                <div class="quote-author">— ${highlightSearchTerm(quote.author, term)}</div>
                                ${quote.annotation ? `<div class="quote-annotation">${highlightSearchTerm(quote.annotation, term)}</div>` : ''}
                            </div>
                        `).join('')}
                    ` : ''}
                    
                    ${results.concepts.length > 0 ? `
                        <h3 style="color: [[66bb6a]]; margin: 20px 0 15px;">Concepts (${results.concepts.length})</h3>
                        ${results.concepts.map(concept => `
                            <div class="note-item">
                                <div class="note-header">
                                    <div class="note-title">${highlightSearchTerm(concept.name, term)}</div>
                                    <div class="note-date">Tradition: ${concept.tradition || 'Unknown'}</div>
                                </div>
                                <div class="note-content">${highlightSearchTerm(concept.description || 'No description', term)}</div>
                            </div>
                        `).join('')}
                    ` : ''}
                </div>
            `;
        }
        
        function highlightSearchTerm(text, term) {
            if (!term) return text;
            const regex = new RegExp(`(${term})`, 'gi');
            return text.replace(regex, '<mark style="background: rgba(255, 107, 107, 0.3); color: [[ff6b6b]];">$1</mark>');
        }
        
        function clearSearch() {
            document.getElementById('globalSearch').value = '';
            appState.searchTerm = '';
            renderCurrentSection();
        }
        
        function exportData() {
            const data = {
                exported: new Date().toISOString(),
                tasks: appState.tasks,
                notes: appState.notes,
                quotes: appState.quotes,
                concepts: appState.concepts
            };
            
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `nihiltheism-research-${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }
        
        function renderAnalytics() {
            const contentArea = document.getElementById('contentArea');
            const totalTasks = appState.tasks.length;
            const completedTasks = appState.tasks.filter(t => t.completed).length;
            const completionRate = totalTasks > 0 ? ((completedTasks / totalTasks) * 100).toFixed(1) : 0;
            
            const highPriorityTasks = appState.tasks.filter(t => t.priority === 1).length;
            const overdueTasks = appState.tasks.filter(t => !t.completed && new Date(t.due) < new Date()).length;
            
            const recentNotes = appState.notes.filter(n => {
                const noteDate = new Date(n.date);
                const weekAgo = new Date();
                weekAgo.setDate(weekAgo.getDate() - 7);
                return noteDate >= weekAgo;
            }).length;
            
            const favoriteQuotes = appState.quotes.filter(q => q.favorite).length;
            const totalConnections = appState.concepts.reduce((sum, c) => sum + (c.relationships ? c.relationships.length : 0), 0);
            
            contentArea.innerHTML = `
                <div class="panel full-width">
                    <div class="panel-header">
                        <h2 class="panel-title">Research Analytics & Insights</h2>
                        <div class="panel-controls">
                            <button class="btn btn-secondary" onclick="exportAnalytics()">Export Report</button>
                        </div>
                    </div>
                    
                    <div class="stats-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); margin-bottom: 30px;">
                        <div class="stat-item">
                            <div class="stat-value">${completionRate}%</div>
                            <div class="stat-label">Task Completion Rate</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">${overdueTasks}</div>
                            <div class="stat-label">Overdue Tasks</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">${recentNotes}</div>
                            <div class="stat-label">Notes This Week</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">${favoriteQuotes}</div>
                            <div class="stat-label">Favorite Quotes</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">${totalConnections}</div>
                            <div class="stat-label">Concept Connections</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">${getUniqueAuthors().length}</div>
                            <div class="stat-label">Cited Authors</div>
                        </div>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px;">
                        <div class="panel">
                            <h3 style="color: [[ff6b6b]]; margin-bottom: 15px;">Task Distribution</h3>
                            <div class="stats-grid">
                                <div class="stat-item">
                                    <div class="stat-value">${appState.tasks.filter(t => t.priority === 1).length}</div>
                                    <div class="stat-label">High Priority</div>
                                </div>
                                <div class="stat-item">
                                    <div class="stat-value">${appState.tasks.filter(t => t.priority === 2).length}</div>
                                    <div class="stat-label">Medium Priority</div>
                                </div>
                                <div class="stat-item">
                                    <div class="stat-value">${appState.tasks.filter(t => t.priority === 3).length}</div>
                                    <div class="stat-label">Low Priority</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="panel">
                            <h3 style="color: [[4ecdc4]]; margin-bottom: 15px;">Content Growth</h3>
                            <div class="note-item">
                                <div>Total philosophical content pieces: <strong>${appState.notes.length + appState.quotes.length + appState.concepts.length}</strong></div>
                                <div style="margin-top: 10px;">Knowledge density: <strong>${(totalConnections / Math.max(appState.concepts.length, 1)).toFixed(1)}</strong> connections per concept</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="panel" style="margin-top: 25px;">
                        <h3 style="color: [[ffa726]]; margin-bottom: 15px;">Recent Activity Timeline</h3>
                        <div class="notes-container">
                            ${getRecentActivity().map(activity => `
                                <div class="note-item">
                                    <div class="note-header">
                                        <div class="note-title">${activity.type}: ${activity.title}</div>
                                        <div class="note-date">${formatDate(new Date(activity.date))}</div>
                                    </div>
                                    <div class="note-content">${activity.description}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }
        
        function getRecentActivity() {
            const activities = [];
            
            appState.notes.forEach(note => {
                activities.push({
                    type: 'Note',
                    title: note.title,
                    description: `Created philosophical note with ${note.tags.length} tags`,
                    date: note.date
                });
            });
            
            appState.tasks.forEach(task => {
                activities.push({
                    type: 'Task',
                    title: task.text.substring(0, 50) + '...',
                    description: `Priority ${task.priority} task ${task.completed ? 'completed' : 'created'}`,
                    date: task.due
                });
            });
            
            appState.concepts.forEach(concept => {
                activities.push({
                    type: 'Concept',
                    title: concept.name,
                    description: `Mapped concept in ${concept.tradition} tradition`,
                    date: new Date().toISOString() // Placeholder since concepts don't have creation dates
                });
            });
            
            return activities
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .slice(0, 10);
        }
        
        function renderKnowledgeGraph() {
            const contentArea = document.getElementById('contentArea');
            contentArea.innerHTML = `
                <div class="panel full-width">
                    <div class="panel-header">
                        <h2 class="panel-title">Knowledge Graph Visualization</h2>
                        <div class="panel-controls">
                            <button class="btn btn-secondary" onclick="refreshGraph()">Refresh Graph</button>
                            <button class="btn btn-secondary" onclick="exportGraph()">Export</button>
                        </div>
                    </div>
                    
                    <div class="knowledge-graph" style="height: 400px; margin-bottom: 20px;">
                        <div style="text-align: center;">
                            <h3 style="color: [[4ecdc4]]; margin-bottom: 20px;">Conceptual Relationship Network</h3>
                            <p style="color: [[a8a8a8]]; margin-bottom: 20px;">Interactive graph visualization will be implemented with D3.js or similar library</p>
                            <div style="color: [[ff6b6b]];">
                                <div>📊 ${appState.concepts.length} concepts mapped</div>
                                <div>🔗 ${appState.concepts.reduce((sum, c) => sum + (c.relationships ? c.relationships.length : 0), 0)} relationships tracked</div>
                                <div>🏛️ ${[...new Set(appState.concepts.map(c => c.tradition))].length} philosophical traditions represented</div>
                            </div>
                        </div>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px;">
                        <div class="panel">
                            <h3 style="color: [[ff6b6b]]; margin-bottom: 15px;">Most Connected Concepts</h3>
                            <div class="notes-container">
                                ${getMostConnectedConcepts().map(concept => `
                                    <div class="note-item">
                                        <div class="note-header">
                                            <div class="note-title">${concept.name}</div>
                                            <div class="note-date">${concept.relationships ? concept.relationships.length : 0} connections</div>
                                        </div>
                                        <div class="note-content">${concept.tradition}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        
                        <div class="panel">
                            <h3 style="color: [[4ecdc4]]; margin-bottom: 15px;">Philosophical Traditions</h3>
                            <div class="notes-container">
                                ${getPhilosophicalTraditions().map(tradition => `
                                    <div class="note-item">
                                        <div class="note-header">
                                            <div class="note-title">${tradition.name}</div>
                                            <div class="note-date">${tradition.count} concepts</div>
                                        </div>
                                        <div class="note-content">Density: ${tradition.connections} total connections</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
        
        function getMostConnectedConcepts() {
            return appState.concepts
                .sort((a, b) => (b.relationships ? b.relationships.length : 0) - (a.relationships ? a.relationships.length : 0))
                .slice(0, 5);
        }
        
        function getPhilosophicalTraditions() {
            const traditions = {};
            appState.concepts.forEach(concept => {
                const tradition = concept.tradition || 'Unknown';
                if (!traditions[tradition]) {
                    traditions[tradition] = { count: 0, connections: 0 };
                }
                traditions[tradition].count++;
                traditions[tradition].connections += concept.relationships ? concept.relationships.length : 0;
            });
            
            return Object.entries(traditions).map(([name, data]) => ({
                name,
                count: data.count,
                connections: data.connections
            })).sort((a, b) => b.count - a.count);
        }
        
        function renderResearch() {
            const contentArea = document.getElementById('contentArea');
            contentArea.innerHTML = `
                <div class="panel full-width">
                    <div class="panel-header">
                        <h2 class="panel-title">Research Hub</h2>
                        <div class="panel-controls">
                            <button class="btn" onclick="startResearchSession()">Start Research Session</button>
                        </div>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px; margin-bottom: 25px;">
                        <div class="panel">
                            <h3 style="color: [[ff6b6b]]; margin-bottom: 15px;">Active Research Projects</h3>
                            <div class="notes-container">
                                ${getActiveProjects().map(project => `
                                    <div class="note-item">
                                        <div class="note-header">
                                            <div class="note-title">${project.name}</div>
                                            <div class="note-date">${project.tasks} tasks</div>
                                        </div>
                                        <div class="note-content">${project.description}</div>
                                        <div style="margin-top: 10px;">
                                            <div class="stat-value" style="font-size: 1rem;">${project.completion}%</div>
                                            <div class="stat-label">Complete</div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        
                        <div class="panel">
                            <h3 style="color: [[4ecdc4]]; margin-bottom: 15px;">Research Focus Areas</h3>
                            <div class="notes-container">
                                <div class="note-item">
                                    <div class="note-title">Nihiltheism Development</div>
                                    <div class="note-content">Core philosophical framework exploring the intersection of nihilism and theological thinking.</div>
                                </div>
                                <div class="note-item">
                                    <div class="note-title">Journal314 Expansion</div>
                                    <div class="note-content">Maximum-disparity philosopher pairings and dialectical synthesis work.</div>
                                </div>
                                <div class="note-item">
                                    <div class="note-title">REN Mode Enhancement</div>
                                    <div class="note-content">Recursive enhancement for AI-assisted philosophical thinking and prompt engineering.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="panel">
                        <h3 style="color: [[ffa726]]; margin-bottom: 15px;">Research Methodology Toolkit</h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                            <button class="btn" onclick="launchDialecticalFramework()">Dialectical Framework</button>
                            <button class="btn" onclick="launchComparativeAnalysis()">Comparative Analysis</button>
                            <button class="btn" onclick="launchConceptMapping()">Concept Mapping</button>
                            <button class="btn" onclick="launchArgumentAnalysis()">Argument Analysis</button>
                            <button class="btn" onclick="launchSourceSynthesis()">Source Synthesis</button>
                            <button class="btn" onclick="launchCriticalReflection()">Critical Reflection</button>
                        </div>
                    </div>
                </div>
            `;
        }
        
        function getActiveProjects() {
            const projectMap = {};
            
            appState.tasks.forEach(task => {
                if (task.project) {
                    if (!projectMap[task.project]) {
                        projectMap[task.project] = {
                            name: task.project,
                            tasks: 0,
                            completed: 0,
                            description: getProjectDescription(task.project)
                        };
                    }
                    projectMap[task.project].tasks++;
                    if (task.completed) {
                        projectMap[task.project].completed++;
                    }
                }
            });
            
            return Object.values(projectMap).map(project => ({
                ...project,
                completion: project.tasks > 0 ? Math.round((project.completed / project.tasks) * 100) : 0
            }));
        }
        
        function getProjectDescription(projectName) {
            const descriptions = {
                'Journal314': 'Comprehensive philosophical quote library and maximum-disparity analysis project',
                'Codex Nihiltheism': 'Core philosophical framework development and theoretical foundation',
                'REN Mode': 'Recursive enhancement methodology for AI-assisted philosophical thinking',
                'Ontodicy Research': 'Investigation into the philosophical problem of existence itself',
                'Apophatic Studies': 'Exploration of negative theology and unknowing in contemporary philosophy'
            };
            return descriptions[projectName] || 'Philosophical research project';
        }
        
        // Event handlers for missing functions
        function launchDialecticalFramework() {
            copyPrompt("Help me set up a dialectical analysis between two opposing philosophical positions. I want to explore thesis-antithesis-synthesis progression in my current research.");
        }
        
        function launchComparativeAnalysis() {
            copyPrompt("Create a comparative framework for analyzing philosophical positions across different traditions. Focus on finding unexpected connections and maximum-disparity relationships.");
        }
        
        function launchConceptMapping() {
            copyPrompt("Guide me through mapping conceptual relationships in my philosophical research. I want to identify key concepts, their definitions, and their interconnections.");
        }
        
        function launchArgumentAnalysis() {
            copyPrompt("Help me analyze the logical structure of philosophical arguments. I want to identify premises, conclusions, and potential logical fallacies or strengths.");
        }
        
        function launchSourceSynthesis() {
            copyPrompt("Assist me in synthesizing multiple philosophical sources into a coherent analysis. Focus on integrating diverse perspectives while maintaining intellectual rigor.");
        }
        
        function launchCriticalReflection() {
            copyPrompt("Guide me through critical reflection on my philosophical work. Help me identify assumptions, biases, and areas for deeper investigation.");
        }
        
        function startResearchSession() {
            copyPrompt("I'm starting a focused philosophical research session. Help me organize my thoughts, set clear objectives, and maintain productive momentum throughout my work.");
        }
        
        // Click outside modal to close
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('modal')) {
                closeModal();
            }
        });
        
        // Escape key to close modal
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
        
        // Initialize the application when the page loads
        document.addEventListener('DOMContentLoaded', initApp);
    </script>
</body>
</html>