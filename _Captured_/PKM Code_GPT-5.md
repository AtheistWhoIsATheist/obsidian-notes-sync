# PKM from GPT-5
2025-08-17 Sun 3:55pm


---


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nihiltheism Research Platform - Ultimate PKM System (Patched)</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Georgia', serif; background: linear-gradient(135deg, [[0a0a0a]] 0%, [[1a1a2e]] 50%, [[16213e]] 100%); color: [[e8e8e8]]; line-height: 1.6; min-height: 100vh; overflow-x: hidden; }
        .app-container { display: flex; height: 100vh; }
        .sidebar { width: 280px; background: rgba(0, 0, 0, 0.4); backdrop-filter: blur(20px); border-right: 1px solid rgba(255, 107, 107, 0.2); padding: 20px; overflow-y: auto; transition: all 0.3s ease; }
        .sidebar.collapsed { width: 60px; }
        .sidebar-toggle { position: absolute; top: 20px; right: 15px; background: rgba(255, 107, 107, 0.2); border: none; color: [[ff6b6b]]; padding: 8px 12px; border-radius: 6px; cursor: pointer; transition: all 0.3s ease; }
        .sidebar-toggle:hover { background: rgba(255, 107, 107, 0.3); }
        .nav-section { margin-bottom: 30px; }
        .nav-title { color: [[ff6b6b]]; font-size: 0.9rem; font-weight: bold; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1px; }
        .nav-item { display: flex; align-items: center; padding: 10px 12px; margin-bottom: 5px; border-radius: 8px; cursor: pointer; transition: all 0.3s ease; color: [[b8b8b8]]; }
        .nav-item:hover, .nav-item.active { background: rgba(255, 107, 107, 0.15); color: [[ff6b6b]]; transform: translateX(5px); }
        .nav-icon { width: 18px; height: 18px; margin-right: 10px; opacity: 0.7; }
        .main-content { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
        .header-bar { background: rgba(0, 0, 0, 0.3); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255, 107, 107, 0.2); padding: 15px 30px; display: flex; justify-content: between; align-items: center; }
        .header-title { color: [[ff6b6b]]; font-size: 1.5rem; font-weight: 300; letter-spacing: 2px; }
        .header-controls { display: flex; gap: 15px; align-items: center; }
        .search-bar { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 107, 107, 0.3); border-radius: 25px; padding: 8px 20px; color: [[e8e8e8]]; width: 300px; outline: none; transition: all 0.3s ease; }
        .search-bar:focus { border-color: [[4ecdc4]]; box-shadow: 0 0 10px rgba(78, 205, 196, 0.3); }
        .content-area { flex: 1; padding: 30px; overflow-y: auto; display: grid; grid-template-columns: 1fr 1fr; gap: 25px; }
        .panel { background: rgba(255, 255, 255, 0.05); border-radius: 12px; padding: 25px; border: 1px solid rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3); transition: all 0.3s ease; position: relative; }
        .panel:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4); }
        .panel.full-width { grid-column: 1 / -1; }
        .panel-header { display: flex; justify-content: between; align-items: center; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid rgba(255, 107, 107, 0.3); }
        .panel-title { color: [[ff6b6b]]; font-size: 1.3rem; font-weight: 400; }
        .panel-controls { display: flex; gap: 10px; }
        .btn { background: linear-gradient(135deg, [[ff6b6b]], [[4ecdc4]]); color: white; border: none; padding: 8px 15px; border-radius: 20px; cursor: pointer; font-size: 0.85rem; transition: all 0.3s ease; }
        .btn:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(255, 107, 107, 0.4); }
        .btn-secondary { background: rgba(255, 255, 255, 0.1); color: [[b8b8b8]]; }
        .btn-secondary:hover { background: rgba(255, 255, 255, 0.2); color: [[e8e8e8]]; }
        .task-item { background: rgba(0, 0, 0, 0.2); padding: 15px; margin-bottom: 12px; border-radius: 8px; border-left: 4px solid [[ff6b6b]]; transition: all 0.3s ease; position: relative; }
        .task-item:hover { background: rgba(0, 0, 0, 0.3); transform: translateX(5px); }
        .task-priority-1 { border-left-color: [[ff4757]]; }
        .task-priority-2 { border-left-color: [[ffa726]]; }
        .task-priority-3 { border-left-color: [[66bb6a]]; }
        .task-header { display: flex; justify-content: between; align-items: center; margin-bottom: 8px; }
        .task-text { color: [[e8e8e8]]; font-weight: 500; }
        .task-meta { display: flex; gap: 15px; font-size: 0.85rem; color: [[a8a8a8]]; }
        .task-controls { display: flex; gap: 8px; }
        .task-controls button { background: none; border: none; color: [[a8a8a8]]; cursor: pointer; padding: 5px; border-radius: 4px; transition: all 0.3s ease; }
        .task-controls button:hover { color: [[4ecdc4]]; background: rgba(78, 205, 196, 0.1); }
        .quote-display { background: linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(78, 205, 196, 0.1) 100%); padding: 20px; border-radius: 10px; border-left: 4px solid [[4ecdc4]]; margin-bottom: 15px; }
        .quote-text { font-style: italic; font-size: 1.05rem; margin-bottom: 10px; line-height: 1.7; }
        .quote-author { color: [[4ecdc4]]; font-weight: bold; }
        .quote-annotation { margin-top: 15px; font-size: 0.9rem; color: [[b8b8b8]]; padding-top: 15px; border-top: 1px solid rgba(255, 255, 255, 0.1); }
        .catalyst-address { background: rgba(0, 0, 0, 0.3); padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid rgba(255, 107, 107, 0.2); }
        .catalyst-vectors { display: flex; flex-direction: column; gap: 15px; }
        .vector-item { background: rgba(0, 0, 0, 0.2); padding: 15px; border-radius: 8px; border-left: 4px solid [[4ecdc4]]; transition: all 0.3s ease; }
        .vector-item:hover { background: rgba(0, 0, 0, 0.3); transform: translateX(3px); }
        .vector-title { color: [[4ecdc4]]; font-weight: bold; margin-bottom: 8px; }
        .notes-container { display: flex; flex-direction: column; gap: 15px; }
        .note-item { background: rgba(0, 0, 0, 0.2); padding: 15px; border-radius: 8px; border-left: 4px solid [[ffa726]]; transition: all 0.3s ease; }
        .note-item:hover { background: rgba(0, 0, 0, 0.3); }
        .note-header { display: flex; justify-content: between; align-items: center; margin-bottom: 10px; }
        .note-title { color: [[ffa726]]; font-weight: bold; }
        .note-date { color: [[a8a8a8]]; font-size: 0.85rem; }
        .note-tags { display: flex; gap: 8px; margin-bottom: 10px; flex-wrap: wrap; }
        .tag { background: rgba(255, 167, 38, 0.2); color: [[ffa726]]; padding: 3px 8px; border-radius: 12px; font-size: 0.8rem; cursor: pointer; }
        .prompt-seeds { display: flex; flex-direction: column; gap: 12px; }
        .prompt-seed { background: rgba(0, 0, 0, 0.2); padding: 12px; border-radius: 8px; border-left: 4px solid [[ffa726]]; cursor: pointer; transition: all 0.3s ease; }
        .prompt-seed:hover { background: rgba(0, 0, 0, 0.3); transform: translateX(3px); }
        .prompt-title { color: [[ffa726]]; font-weight: bold; margin-bottom: 5px; }
        .affirmation-display { background: linear-gradient(135deg, rgba(255, 107, 107, 0.2) 0%, rgba(78, 205, 196, 0.2) 100%); padding: 25px; border-radius: 12px; text-align: center; font-size: 1.1rem; font-style: italic; border: 2px solid rgba(255, 107, 107, 0.3); }
        .modal { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.8); backdrop-filter: blur(10px); display: none; align-items: center; justify-content: center; z-index: 1000; }
        .modal.active { display: flex; }
        .modal-content { background: rgba(26, 26, 46, 0.95); border-radius: 15px; padding: 30px; max-width: 600px; width: 90%; border: 1px solid rgba(255, 107, 107, 0.3); }
        .modal-header { color: [[ff6b6b]]; font-size: 1.4rem; margin-bottom: 20px; text-align: center; }
        .form-group { margin-bottom: 20px; }
        .form-label { display: block; color: [[4ecdc4]]; margin-bottom: 8px; font-weight: bold; }
        .form-input, .form-textarea, .form-select { width: 100%; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 107, 107, 0.3); border-radius: 8px; padding: 12px; color: [[e8e8e8]]; outline: none; transition: all 0.3s ease; }
        .form-textarea { resize: vertical; min-height: 100px; }
        .form-input:focus, .form-textarea:focus, .form-select:focus { border-color: [[4ecdc4]]; box-shadow: 0 0 10px rgba(78, 205, 196, 0.3); }
        .modal-actions { display: flex; gap: 15px; justify-content: flex-end; margin-top: 25px; }
        .empty-state { text-align: center; color: [[a8a8a8]]; font-style: italic; padding: 30px; }
        .knowledge-graph { height: 200px; background: rgba(0, 0, 0, 0.2); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: [[a8a8a8]]; margin-bottom: 15px; }
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-bottom: 20px; }
        .stat-item { background: rgba(0, 0, 0, 0.2); padding: 15px; border-radius: 8px; text-align: center; }
        .stat-value { font-size: 1.8rem; font-weight: bold; color: [[4ecdc4]]; }
        .stat-label { color: [[a8a8a8]]; font-size: 0.9rem; margin-top: 5px; }
        @media (max-width: 1024px) { .content-area { grid-template-columns: 1fr; } }
        @media (max-width: 768px) {
            .sidebar { position: fixed; left: -280px; z-index: 100; }
            .sidebar.open { left: 0; }
            .main-content { margin-left: 0; }
        }
        .fade-in { animation: fadeInUp 0.6s ease-out; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
    </style>
</head>
<body>
    <div class="app-container">
        <!-- Sidebar Navigation -->
        <div class="sidebar" id="sidebar">
            <button class="sidebar-toggle" onclick="toggleSidebar()">☰</button>
            <div class="nav-section">
                <div class="nav-title">Dashboard</div>
                <div class="nav-item active" onclick="showSection('dashboard', this)">
                    <span class="nav-icon">📊</span>
                    <span>Overview</span>
                </div>
                <div class="nav-item" onclick="showSection('tasks', this)">
                    <span class="nav-icon">✓</span>
                    <span>Tasks</span>
                </div>
                <div class="nav-item" onclick="showSection('research', this)">
                    <span class="nav-icon">🔬</span>
                    <span>Research</span>
                </div>
            </div>
            <div class="nav-section">
                <div class="nav-title">Knowledge</div>
                <div class="nav-item" onclick="showSection('notes', this)">
                    <span class="nav-icon">📝</span>
                    <span>Notes</span>
                </div>
                <div class="nav-item" onclick="showSection('quotes', this)">
                    <span class="nav-icon">💬</span>
                    <span>Quotes</span>
                </div>
                <div class="nav-item" onclick="showSection('concepts', this)">
                    <span class="nav-icon">🧠</span>
                    <span>Concepts</span>
                </div>
                <div class="nav-item" onclick="showSection('graph', this)">
                    <span class="nav-icon">🔗</span>
                    <span>Knowledge Graph</span>
                </div>
            </div>
            <div class="nav-section">
                <div class="nav-title">Tools</div>
                <div class="nav-item" onclick="showSection('prompts', this)">
                    <span class="nav-icon">⚡</span>
                    <span>Prompt Seeds</span>
                </div>
                <div class="nav-item" onclick="showSection('catalyst', this)">
                    <span class="nav-icon">🎯</span>
                    <span>Catalyst</span>
                </div>
                <div class="nav-item" onclick="showSection('analytics', this)">
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
                            <div class="stat-item" id="tasksTile">
                                <div class="stat-value" id="tasksToday">0</div>
                                <div class="stat-label">Tasks Today</div>
                            </div>
                            <div class="stat-item" id="notesTile">
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
                        <div class="knowledge-graph"><span>Knowledge Graph Visualization</span></div>
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
                            <div class="quote-text" id="dailyQuoteText">"The mystic's final answer to the mystery of existence is not a concept but a presence."</div>
                            <div class="quote-author" id="dailyQuoteAuthor">— Thomas Merton</div>
                            <div class="quote-annotation" id="dailyQuoteAnnotation">This aligns with your Nihiltheism's apophatic thrust—where understanding emerges not through conceptual accumulation but through presence with the unknowable.</div>
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
                        <div class="catalyst-address"><strong>Professor Nihil speaks:</strong><br><span id="professorAddress">"Adam, the philosophical currents converge today around a singular recognition: that our most rigorous negations often harbor the most profound affirmations. The void you excavate in your Codex reveals not emptiness, but the fertile darkness from which authentic understanding springs."</span></div>
                        <div class="catalyst-vectors" id="catalystVectors">
                            <div class="vector-item"><div class="vector-title">1. Ontodicy & Sacred Negation</div><div>Explore how your Ontodicy Collapse Argument interfaces with classical apophatic traditions. The tension between philosophical deconstruction and mystical unknowing presents fertile ground for synthesis.</div></div>
                            <div class="vector-item"><div class="vector-title">2. Journal314 Paradox Mining</div><div>Extract maximum-disparity pairings: Consider juxtaposing Wittgenstein's language-games with Pseudo-Dionysius's divine darkness. How do linguistic limitations mirror mystical ineffability?</div></div>
                            <div class="vector-item"><div class="vector-title">3. REN Mode Consciousness Architecture</div><div>Investigate how your REN Mode's recursive enhancement might model consciousness itself—awareness observing its own observation, creating infinite regress or breakthrough to meta-awareness.</div></div>
                        </div>
                        <div style="margin-top: 20px;">
                            <h3 style="color: [[4ecdc4]]; margin-bottom: 15px;">Suggested Actions</h3>
                            <button class="btn" onclick="copyPrompt('Analyze the intersection between Wittgensteinian silence and apophatic theology in my Nihiltheism framework')">Explore Wittgenstein-Apophatic Interface</button>
                            <button class="btn" onclick="copyPrompt('Help me develop a comparative analysis between Cioran\'s pessimism and Meister Eckhart\'s holy despair for Journal314')">Draft Cioran-Eckhart Analysis</button>
                            <button class="btn" onclick="copyPrompt('Generate 10 maximum-disparity philosopher pairings for Journal314 expansion')">Generate Disparity Pairings</button>
                        </div>
                    </div>

                    <!-- Affirmation -->
                    <div class="panel full-width">
                        <div class="panel-header"><h2 class="panel-title">Daily Affirmation</h2></div>
                        <div class="affirmation-display" id="dailyAffirmation">I embrace the fertile darkness of unknowing as the ground from which authentic understanding emerges, finding in the void not absence but presence, not meaninglessness but the space where meaning is born.</div>
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
            <div id="addFormContent"></div>
            <div class="modal-actions">
                <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
                <button class="btn" onclick="saveItem()">Save</button>
            </div>
        </div>
    </div>

    <script>
        // ---------------- Global state ----------------
        const appState = {
            tasks: [],
            notes: [],
            quotes: [],
            concepts: [],
            currentSection: 'dashboard',
            searchTerm: '',
            noteFilter: { tag: 'all', query: '' },
            taskFilter: 'all',
            backlinks: {}
        };

        // ---------------- Init ----------------
        function initApp() {
            updateDate();
            loadData();
            computeBacklinks();
            updateStats();
            document.getElementById('globalSearch').addEventListener('input', handleSearch);
            if (appState.tasks.length === 0 && appState.notes.length === 0 && appState.quotes.length === 0 && appState.concepts.length === 0) {
                loadSampleData();
            }
            renderDashboard();
        }

        // ---------------- Date ----------------
        function updateDate() {
            const now = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            document.getElementById('currentDate').textContent = now.toLocaleDateString('en-US', options);
        }

        // ---------------- Navigation ----------------
        function showSection(sectionName, el) {
            document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
            if (el && el.classList) el.classList.add('active');
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
            appState.currentSection = sectionName;
            renderCurrentSection();
        }

        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.toggle('collapsed');
        }

        // ---------------- Rendering switch ----------------
        function renderCurrentSection() {
            switch(appState.currentSection) {
                case 'dashboard':
                    renderDashboard(); break;
                case 'tasks':
                    renderTasks(); break;
                case 'notes':
                    renderNotes(); break;
                case 'quotes':
                    renderQuotes(); break;
                case 'concepts':
                    renderConcepts(); break;
                case 'prompts':
                    renderPrompts(); break;
                case 'catalyst':
                    renderCatalyst(); break;
                case 'analytics':
                    renderAnalytics(); break;
                case 'graph':
                    renderKnowledgeGraph(); break;
                case 'research':
                    renderResearch(); break;
                default:
                    renderDashboard();
            }
        }

        function renderDashboard() {
            updateStats();
            // Make Notes stat tile jump to Notes
            const notesTile = document.getElementById('notesTile');
            if (notesTile) {
                notesTile.style.cursor = 'pointer';
                notesTile.onclick = () => {
                    const notesNav = [...document.querySelectorAll('.nav-item')].find(n => n.textContent.trim().includes('Notes'));
                    showSection('notes', notesNav);
                };
            }
        }

        // ---------------- Tasks ----------------
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
                        <div class="stat-item"><div class="stat-value">${appState.tasks.filter(t => !t.completed && isToday(new Date(t.due))).length}</div><div class="stat-label">Due Today</div></div>
                        <div class="stat-item"><div class="stat-value">${appState.tasks.filter(t => !t.completed && isThisWeek(new Date(t.due))).length}</div><div class="stat-label">This Week</div></div>
                        <div class="stat-item"><div class="stat-value">${appState.tasks.filter(t => t.completed).length}</div><div class="stat-label">Completed</div></div>
                        <div class="stat-item"><div class="stat-value">${appState.tasks.filter(t => t.priority === 1).length}</div><div class="stat-label">High Priority</div></div>
                    </div>
                    <div id="tasksList">${renderTasksList()}</div>
                </div>`;
        }

        function filterTasks(which) { appState.taskFilter = which; renderTasks(); }

        function renderTasksList() {
            if (appState.tasks.length === 0) return '<div class="empty-state">No tasks yet. Add your first task to get started with your philosophical journey.</div>';
            const today = new Date();
            const tomorrow = new Date(today); tomorrow.setDate(tomorrow.getDate() + 1);
            const todayTasks = appState.tasks.filter(t => !t.completed && isToday(new Date(t.due)));
            const tomorrowTasks = appState.tasks.filter(t => !t.completed && isSameDay(new Date(t.due), tomorrow));
            const futureTasks = appState.tasks.filter(t => !t.completed && new Date(t.due) > tomorrow);
            const completedTasks = appState.tasks.filter(t => t.completed);

            const show = (key) => appState.taskFilter === 'all' || appState.taskFilter === key;
            return `
                ${show('today') && todayTasks.length ? `<h3 style="color:#ff6b6b; margin:20px 0 15px;">Today's Tasks</h3>${todayTasks.map(renderTaskItem).join('')}` : ''}
                ${show('week') && tomorrowTasks.length ? `<h3 style="color:#4ecdc4; margin:20px 0 15px;">Tomorrow's Tasks</h3>${tomorrowTasks.map(renderTaskItem).join('')}` : ''}
                ${show('all') && futureTasks.length ? `<h3 style="color:#ffa726; margin:20px 0 15px;">Upcoming Tasks</h3>${futureTasks.map(renderTaskItem).join('')}` : ''}
                ${show('all') && completedTasks.length ? `<h3 style="color:#66bb6a; margin:20px 0 15px;">Completed Tasks</h3>${completedTasks.map(renderTaskItem).join('')}` : ''}
            `;
        }

        function renderTaskItem(task) {
            return `
                <div class="task-item task-priority-${task.priority} ${task.completed ? 'completed' : ''}" data-task-id="${task.id}">
                    <div class="task-header">
                        <div class="task-text ${task.completed ? 'completed' : ''}">${task.text}</div>
                        <div class="task-controls">
                            <button onclick="toggleTask('${task.id}')" title="${task.completed ? 'Mark Incomplete' : 'Mark Complete'}">${task.completed ? '↶' : '✓'}</button>
                            <button onclick="editTask('${task.id}')" title="Edit Task">✏</button>
                            <button onclick="deleteTask('${task.id}')" title="Delete Task">🗑</button>
                        </div>
                    </div>
                    <div class="task-meta">
                        <span>Priority: ${task.priority}</span>
                        <span>Due: ${formatDate(new Date(task.due))}</span>
                        ${task.project ? `<span>Project: ${task.project}</span>` : ''}
                    </div>
                </div>`;
        }

        // ---------------- Notes (Patched) ----------------
        function renderNotes() {
            const contentArea = document.getElementById('contentArea');
            const tags = [...new Set(appState.notes.flatMap(n => n.tags || []))].sort();
            const activeTag = appState.noteFilter.tag || 'all';
            const q = (appState.noteFilter.query || '').toLowerCase();
            const filtered = appState.notes.filter(n => {
                const tagMatch = activeTag === 'all' || (n.tags || []).includes(activeTag);
                const text = `${n.title} ${(n.content||'')} ${(n.tags||[]).join(' ')}`.toLowerCase();
                const queryMatch = !q || text.includes(q);
                return tagMatch && queryMatch;
            });
            contentArea.innerHTML = `
                <div class="panel full-width">
                    <div class="panel-header">
                        <h2 class="panel-title">Notes & Insights</h2>
                        <div class="panel-controls"><button class="btn" onclick="showAddNoteModal()">+ Add Note</button></div>
                    </div>
                    <div style="display:flex; gap:10px; flex-wrap:wrap; margin-bottom:12px;">
                        <input class="form-input" style="flex:1; min-width:220px;" placeholder="Search notes (title, content, tags)…" value="${appState.noteFilter.query || ''}" oninput="searchNotesInSection(this.value)">
                        <select class="form-select" style="width:auto;" onchange="filterNotes(this.value)">
                            <option value="all"${activeTag==='all'?' selected':''}>All Tags</option>
                            ${tags.map(t => `<option value="${t}"${activeTag===t?' selected':''}>${t}</option>`).join('')}
                        </select>
                    </div>
                    <div class="notes-container" id="notesList">
                        ${filtered.length ? filtered.map(note => `
                            <div class="note-item" data-note-id="${note.id}">
                                <div class="note-header">
                                    <div class="note-title" style="cursor:pointer;" onclick="viewNote('${note.id}')">${note.title}</div>
                                    <div class="note-date">${new Date(note.date).toLocaleDateString()}</div>
                                </div>
                                <div class="note-tags">${(note.tags||[]).map(tag => `<span class="tag" onclick="filterNotes('${tag}')">${tag}</span>`).join('')}</div>
                                <div class="note-content">${(note.content||'').slice(0, 200)}${(note.content||'').length>200?'…':''}</div>
                                <div class="task-controls" style="margin-top: 10px;">
                                    <button onclick="viewNote('${note.id}')" title="View Full Note">👁</button>
                                    <button onclick="editNote('${note.id}')" title="Edit Note">✏</button>
                                    <button onclick="deleteNote('${note.id}')" title="Delete Note">🗑</button>
                                </div>
                            </div>`).join('') : '<div class="empty-state">No notes match your filters.</div>'}
                    </div>
                </div>`;
        }

        function showAddNoteModal() {
            document.getElementById('addModal').classList.add('active');
            document.getElementById('addType').value = 'note';
            updateAddForm();
        }

        function filterNotes(tagOrQuery) { appState.noteFilter.tag = tagOrQuery; renderNotes(); }
        function searchNotesInSection(query) { appState.noteFilter.query = (query||'').trim().toLowerCase(); renderNotes(); }

        function ensureNoteModal() {
            if (!document.getElementById('noteModal')) {
                const el = document.createElement('div');
                el.className = 'modal'; el.id = 'noteModal';
                el.innerHTML = `<div class="modal-content" id="noteModalContent"></div>`;
                document.body.appendChild(el);
                el.addEventListener('click', (e) => { if (e.target.id === 'noteModal') closeNoteModal(); });
                document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeNoteModal(); });
            }
        }
        function openNoteModal(html) { ensureNoteModal(); const m = document.getElementById('noteModal'); const c = document.getElementById('noteModalContent'); c.innerHTML = html; m.classList.add('active'); }
        function closeNoteModal() { const m = document.getElementById('noteModal'); if (m) m.classList.remove('active'); }
        function getNoteById(id) { return appState.notes.find(n => n.id === id); }

        function linkifyWiki(content) {
            return (content || '').replace(/\[\[([^\]]+)\]\]/g, (m, p1) => {
                const target = appState.notes.find(n => n.title.trim().toLowerCase() === p1.trim().toLowerCase());
                if (!target) return m;
                return `<a href="#" onclick="viewNote('${target.id}'); return false;" style="text-decoration: underline; color: [[4ecdc4]];">${m}</a>`;
            });
        }

        function computeBacklinks() {
            const incoming = {}; appState.notes.forEach(n => incoming[n.id] = []);
            appState.notes.forEach(source => {
                const matches = (source.content || '').match(/\[\[([^\]]+)\]\]/g) || [];
                matches.forEach(token => {
                    const name = token.replace(/^\[\[|\]\]$/g, '').trim().toLowerCase();
                    const target = appState.notes.find(n => n.title.trim().toLowerCase() === name);
                    if (target && target.id !== source.id) incoming[target.id].push(source.id);
                });
            });
            appState.backlinks = incoming;
        }

        function relatedNotes(note, topK = 5) {
            const tokenize = (t) => (t || '').toLowerCase().replace(/[^a-z0-9\s]+/g, ' ').split(/\s+/).filter(w => w && !stopwords.has(w));
            const docTokens = tokenize(`${note.title} ${note.content} ${(note.tags||[]).join(' ')}`);
            const docSet = new Set(docTokens);
            const df = {}; const N = appState.notes.length;
            appState.notes.forEach(n => {
                const s = new Set(tokenize(`${n.title} ${n.content} ${(n.tags||[]).join(' ')}`));
                s.forEach(w => df[w] = (df[w] || 0) + 1);
            });
            function score(other) {
                if (other.id === note.id) return -1;
                const toks = tokenize(`${other.title} ${other.content} ${(other.tags||[]).join(' ')}`);
                const setB = new Set(toks);
                const inter = [...docSet].filter(w => setB.has(w)).length;
                const union = new Set([...docSet, ...setB]).size || 1;
                let jaccard = inter / union;
                let idfBoost = 0; setB.forEach(w => { if (docSet.has(w)) idfBoost += Math.log((N + 1) / ((df[w] || 0) + 1)); });
                return jaccard + 0.05 * idfBoost;
            }
            return [...appState.notes].map(n => ({ n, s: score(n) })).sort((a,b) => b.s - a.s).slice(0, topK).map(x => x.n);
        }
        const stopwords = new Set(['the','a','an','and','or','of','to','in','on','for','with','by','as','is','it','that','this','these','those','at','from','be','are','was','were','not','but','about','into','through','over','under','after','before','between','within']);

        function viewNote(id) {
            const note = getNoteById(id); if (!note) return; computeBacklinks();
            const backlinks = (appState.backlinks[note.id] || []).map(bid => getNoteById(bid)).filter(Boolean);
            const related = relatedNotes(note, 5);
            openNoteModal(`
                <div class="modal-header">${note.title}</div>
                <div class="form-group" style="margin-top:-10px;">
                    <div class="note-tags">${(note.tags||[]).map(t => `<span class=\"tag\">${t}</span>`).join('')}</div>
                </div>
                <div style="max-height:40vh; overflow:auto; padding:10px; border:1px solid rgba(255,255,255,0.1); border-radius:8px;">
                    <div style="white-space:pre-wrap;">${linkifyWiki(note.content)}</div>
                </div>
                ${backlinks.length ? `
                <div class="form-group" style="margin-top:15px;">
                    <label class="form-label">Backlinks</label>
                    <div class="notes-container">
                        ${backlinks.map(n => `
                            <div class="note-item" style="cursor:pointer" onclick="viewNote('${n.id}')">
                                <div class="note-header">
                                    <div class="note-title">${n.title}</div>
                                    <div class="note-date">${new Date(n.date).toLocaleDateString()}</div>
                                </div>
                                <div class="note-content">${(n.content||'').slice(0,120)}${(n.content||'').length>120?'…':''}</div>
                            </div>`).join('')}
                    </div>
                </div>` : ''}
                ${related.length ? `
                <div class="form-group" style="margin-top:15px;">
                    <label class="form-label">Related Notes</label>
                    <div class="notes-container">
                        ${related.map(n => `
                            <div class="note-item" style="cursor:pointer" onclick="viewNote('${n.id}')">
                                <div class="note-header">
                                    <div class="note-title">${n.title}</div>
                                    <div class="note-date">${new Date(n.date).toLocaleDateString()}</div>
                                </div>
                                <div class="note-content">${(n.content||'').slice(0,120)}${(n.content||'').length>120?'…':''}</div>
                            </div>`).join('')}
                    </div>
                </div>` : ''}
                <div class="modal-actions">
                    <button class="btn btn-secondary" onclick="closeNoteModal()">Close</button>
                    <button class="btn" onclick="editNote('${note.id}')">Edit</button>
                    <button class="btn btn-secondary" onclick="if(confirm('Delete this note?')) { deleteNote('${note.id}'); closeNoteModal(); }">Delete</button>
                </div>`);
        }

        function editNote(id) {
            const note = getNoteById(id); if (!note) return;
            openNoteModal(`
                <div class="modal-header">Edit Note</div>
                <div class="form-group"><label class="form-label">Title</label><input class="form-input" id="editNoteTitle" value="${note.title.replace(/"/g,'&quot;')}"></div>
                <div class="form-group"><label class="form-label">Content (supports [[Wiki Links]])</label><textarea class="form-textarea" id="editNoteContent">${(note.content||'').replace(/</g,'&lt;')}</textarea></div>
                <div class="form-group"><label class="form-label">Tags (comma-separated)</label><input class="form-input" id="editNoteTags" value="${(note.tags||[]).join(', ')}"></div>
                <div class="modal-actions"><button class="btn btn-secondary" onclick="closeNoteModal()">Cancel</button><button class="btn" onclick="saveNoteEdits('${note.id}')">Save</button></div>`);
        }

        function saveNoteEdits(id) {
            const note = getNoteById(id); if (!note) return;
            note.title = document.getElementById('editNoteTitle').value.trim() || note.title;
            note.content = document.getElementById('editNoteContent').value;
            note.tags = document.getElementById('editNoteTags').value.split(',').map(t => t.trim()).filter(Boolean);
            note.date = note.date || new Date().toISOString();
            computeBacklinks(); saveData(); renderNotes(); closeNoteModal();
        }

        // ---------------- Quotes ----------------
        function renderQuotes() {
            const contentArea = document.getElementById('contentArea');
            contentArea.innerHTML = `
                <div class="panel full-width">
                    <div class="panel-header"><h2 class="panel-title">Quote Library</h2><div class="panel-controls"><button class="btn" onclick="showAddQuoteModal()">+ Add Quote</button><button class="btn btn-secondary" onclick="randomQuote()">Random Quote</button></div></div>
                    <div class="stats-grid">
                        <div class="stat-item"><div class="stat-value">${appState.quotes.length}</div><div class="stat-label">Total Quotes</div></div>
                        <div class="stat-item"><div class="stat-value">${getUniqueAuthors().length}</div><div class="stat-label">Authors</div></div>
                        <div class="stat-item"><div class="stat-value">${getQuoteTags().length}</div><div class="stat-label">Categories</div></div>
                        <div class="stat-item"><div class="stat-value">${appState.quotes.filter(q => q.favorite).length}</div><div class="stat-label">Favorites</div></div>
                    </div>
                    <div class="notes-container" id="quotesList">${renderQuotesList()}</div>
                </div>`;
        }
        function renderQuotesList() {
            if (appState.quotes.length === 0) return '<div class="empty-state">No quotes yet. Build your philosophical quote library from Journal314 and other sources.</div>';
            return appState.quotes.map(quote => `
                <div class="quote-display" data-quote-id="${quote.id}">
                    <div class="quote-text">"${quote.text}"</div>
                    <div class="quote-author">— ${quote.author}</div>
                    ${quote.annotation ? `<div class="quote-annotation">${quote.annotation}</div>` : ''}
                    <div style="margin-top:15px; display:flex; justify-content: between; align-items: center;">
                        <div class="note-tags">${quote.tags ? quote.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : ''}</div>
                        <div class="task-controls"><button onclick="toggleFavorite('${quote.id}')