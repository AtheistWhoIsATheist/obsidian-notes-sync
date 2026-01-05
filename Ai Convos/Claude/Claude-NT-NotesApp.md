<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <meta name="mobile-web-app-capable" content="yes" />
  <title>Paralyzing Nihilism - AI Enhanced</title>
  <style>
    :root {
      --foundation: #1a1a1a;
      --panel-bg: rgba(25, 25, 25, 0.8);
      --header-bg: rgba(40, 40, 40, 0.9);
      --gunmetal-light: #8B9DC3;
      --gunmetal-dark: #5A6B73;
      --text-light: #e0e0e0;
      --text-muted: #8b8b8b;
      --border-color: #444;
      --accent-gradient: linear-gradient(135deg, #5A6B73 0%, #8B9DC3 100%);
      --ok: #36c275;
      --warn: #f0b329;
      --danger: #e56464;
      --ios-tap: 44px;
    }

    * { box-sizing: border-box; }
    html, body { height: 100%; min-height: 100dvh; background: #000; }
    body {
      margin: 0; padding: 0;
      font-family: 'Courier New', monospace;
      display: flex; flex-direction: column;
      background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
      color: var(--text-light);
      overflow: hidden; /* scroll lives in interior panels */
      padding-top: env(safe-area-inset-top);
      padding-bottom: env(safe-area-inset-bottom);
    }

    header {
      display: flex; align-items: center; justify-content: space-between;
      padding: calc(15px + env(safe-area-inset-top) / 2) 25px 15px 25px;
      background: var(--header-bg);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); backdrop-filter: blur(5px);
      position: relative; z-index: 100; transition: transform 0.3s ease;
    }
    .header-left { display: flex; align-items: center; gap: 10px; }
    .nav-button, .ai-toggle, .settings-button {
      cursor: pointer; border: none; border-radius: 8px;
      min-height: var(--ios-tap); padding: 8px 14px; line-height: 1.2;
      background: none; color: var(--text-muted); font-size: 16px;
      transition: color 0.2s ease, background 0.2s ease, transform 0.1s ease;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Courier New", monospace;
    }
    .nav-button:hover { color: var(--text-light); }
    .ai-toggle, .settings-button {
      background: var(--accent-gradient); color: #fff; font-size: 14px;
      box-shadow: 0 2px 8px rgba(90, 107, 115, 0.3);
    }
    .ai-toggle:hover, .settings-button:hover { transform: translateY(-1px); }

    .page-title {
      font-size: 18px; font-weight: 500; letter-spacing: 0.3px; color: #d4d4d4;
    }

    .nav-links {
      display: none; flex-direction: column; position: absolute; top: 60px;
      left: 25px; right: 25px; background: rgba(50, 50, 50, 0.95); border-radius: 12px;
      z-index: 10; overflow: hidden; backdrop-filter: blur(10px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
    }
    .nav-links a {
      padding: 14px 20px; text-decoration: none; color: var(--text-muted);
      border-bottom: 1px solid rgba(80, 80, 80, 0.3); transition: all 0.2s ease;
    }
    .nav-links a:last-child { border-bottom: none; }
    .nav-links a:hover { background: rgba(90, 107, 115, 0.2); color: var(--text-light); }

    .main-container { display: flex; flex: 1; overflow: hidden; }
    .journal-section { flex: 1; display: flex; flex-direction: column; min-width: 0; }

    .controls {
      display: flex; justify-content: center; gap: 10px; margin: 10px 20px;
      flex-wrap: wrap; transition: opacity 0.3s ease;
    }
    .controls button {
      background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-color); color: #ccc;
      padding: 10px 14px; font-size: 14px; border-radius: 10px; cursor: pointer;
      transition: all 0.2s ease; min-height: var(--ios-tap);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Courier New", monospace;
    }
    .controls button:hover { background: rgba(255, 255, 255, 0.06); color: #fff; border-color: #666; }
    .controls .save-btn { border-color: rgba(54, 194, 117, 0.4); }
    .controls .save-btn.saved { color: #9fe6bf; border-color: rgba(54,194,117,0.8); }
    .controls .save-btn.unsaved { color: #ffd28a; border-color: rgba(240,179,41,0.7); }

    #journal-container {
      flex: 1; padding: 16px; margin: 0 20px 20px; border-radius: 14px;
      background: var(--panel-bg); box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.2);
      overflow-y: auto; position: relative; -webkit-overflow-scrolling: touch;
    }

    #journal-editor, #markdown-preview {
      width: 100%; height: 100%; border: none; background: transparent; color: var(--text-light);
      font-size: 16px; line-height: 1.6; font-family: 'Courier New', monospace; resize: none;
    }
    #journal-editor { outline: none; }
    #journal-editor::placeholder { color: #666; font-style: italic; }
    #markdown-preview { display: none; overflow-y: auto; padding: 10px; }
    #markdown-preview h1, #markdown-preview h2, #markdown-preview h3,
    #markdown-preview h4, #markdown-preview h5, #markdown-preview h6 { color: var(--gunmetal-light); margin: 20px 0 10px 0; }
    #markdown-preview p { margin-bottom: 1em; }
    #markdown-preview strong { color: var(--gunmetal-dark); }
    #markdown-preview em { color: #a0a0a0; font-style: italic; }

    .ai-panel {
      width: 400px; background: rgba(40, 40, 40, 0.95); border-left: 2px solid var(--gunmetal-dark);
      display: none; flex-direction: column; backdrop-filter: blur(10px);
      box-shadow: -8px 0 25px rgba(0, 0, 0, 0.3); transition: transform 0.3s ease;
    }
    .ai-panel.active { display: flex; }
    .ai-header { padding: 16px 20px; background: var(--accent-gradient); color: white; text-align: center; font-weight: bold; letter-spacing: 1px; }
    .ai-tools { flex: 1; overflow-y: auto; padding: 0; -webkit-overflow-scrolling: touch; }
    .ai-tool { border-bottom: 1px solid rgba(90, 107, 115, 0.2); transition: all 0.2s ease; }
    .ai-tool:hover { background: rgba(90, 107, 115, 0.08); }
    .ai-tool-header {
      padding: 15px 20px; display: flex; align-items: center; gap: 12px; border: none;
      background: none; color: var(--text-light); width: 100%; text-align: left;
      font-family: 'Courier New', monospace; font-size: 14px; cursor: pointer;
      min-height: var(--ios-tap);
    }
    .ai-tool-icon { font-size: 18px; color: var(--gunmetal-light); }
    .ai-tool-content { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; background: rgba(25, 25, 25, 0.5); }
    .ai-tool.expanded .ai-tool-content { max-height: 520px; }
    .ai-tool-inner { padding: 16px 20px; }
    .ai-input {
      width: 100%; background: rgba(40, 40, 40, 0.8); border: 1px solid var(--gunmetal-dark);
      color: var(--text-light); padding: 12px; border-radius: 10px; font-family: 'Courier New', monospace;
      font-size: 13px; margin-bottom: 12px; resize: vertical; min-height: 84px;
    }
    .ai-input:focus { outline: none; border-color: var(--gunmetal-light); box-shadow: 0 0 8px rgba(139, 157, 195, 0.3); }
    .ai-button {
      background: var(--accent-gradient); border: none; color: white; padding: 10px 14px;
      border-radius: 10px; cursor: pointer; font-size: 12px; font-family: 'Courier New', monospace;
      transition: all 0.2s ease; margin-right: 8px; margin-bottom: 8px; min-height: var(--ios-tap);
    }
    .ai-button:hover { transform: translateY(-1px); box-shadow: 0 4px 8px rgba(90, 107, 115, 0.4); }
    .ai-output {
      background: rgba(25, 25, 25, 0.8); border: 1px solid #444; color: var(--text-light);
      padding: 12px; border-radius: 10px; font-family: 'Courier New', monospace;
      font-size: 13px; line-height: 1.5; max-height: 240px; overflow-y: auto;
      margin-top: 12px; white-space: pre-wrap; -webkit-overflow-scrolling: touch;
    }
    .copy-button {
      background: rgba(90, 107, 115, 0.3); border: 1px solid var(--gunmetal-dark);
      color: var(--gunmetal-light); padding: 8px 10px; border-radius: 8px; cursor: pointer;
      font-size: 12px; font-family: 'Courier New', monospace; margin-top: 8px;
      transition: all 0.2s ease;
    }
    .copy-button:hover { background: rgba(90, 107, 115, 0.5); color: var(--text-light); }

    footer {
      display: flex; justify-content: space-between; align-items: center;
      padding: 15px 25px calc(15px + env(safe-area-inset-bottom)) 25px; background: var(--header-bg);
      box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.3); backdrop-filter: blur(5px);
      transition: transform 0.3s ease;
    }
    .footer-content { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
    .footer-text, .word-count, .shortcuts-help, .save-status { font-size: 14px; color: var(--text-muted); }
    .shortcuts-help { cursor: pointer; text-decoration: underline; }
    .save-status { font-style: italic; }
    .saved .save-status { color: var(--ok); }
    .unsaved .save-status { color: var(--warn); }
    .arrows { display: flex; gap: 15px; }
    .arrow { cursor: pointer; font-size: 16px; color: var(--text-muted); text-decoration: none; transition: color 0.2s ease; }
    .arrow:hover { color: var(--gunmetal-light); }

    .ai-loading {
      display: inline-block; width: 20px; height: 20px; border: 2px solid rgba(139, 157, 195, 0.3);
      border-radius: 50%; border-top-color: var(--gunmetal-light); animation: spin 1s ease-in-out infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    .modal-overlay {
      position: fixed; inset: 0; background: rgba(0,0,0,0.7); display: none;
      align-items: center; justify-content: center; z-index: 1000;
    }
    .modal-content {
      background: var(--header-bg); padding: 22px; border-radius: 14px;
      border: 1px solid var(--border-color); width: 92%; max-width: 520px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.4);
    }
    .modal-content h2 { color: var(--gunmetal-light); margin: 0 0 14px 0; }
    .modal-content ul { list-style: none; padding-left: 0; }
    .modal-content li { margin-bottom: 10px; display: flex; justify-content: space-between; }
    .modal-content code { background: var(--panel-bg); padding: 2px 6px; border-radius: 6px; color: var(--gunmetal-light); }

    /* Settings form */
    .settings-grid {
      display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
    }
    .settings-grid .full { grid-column: 1 / -1; }
    .settings-grid label {
      display: block; font-size: 12px; color: var(--text-muted); margin-bottom: 6px;
    }
    .settings-grid input, .settings-grid select, .settings-grid button.toggle-eye {
      width: 100%; padding: 10px 12px; border-radius: 10px; border: 1px solid var(--border-color);
      background: rgba(30,30,30,0.8); color: var(--text-light); font-size: 14px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, "Courier New", monospace;
    }
    .eye-wrap { position: relative; }
    .toggle-eye {
      position: absolute; right: 6px; top: 50%; transform: translateY(-50%);
      width: auto; padding: 6px 10px; border-radius: 8px; border-color: var(--gunmetal-dark);
      background: rgba(60,60,60,0.6); font-size: 12px; cursor: pointer;
    }
    .settings-actions {
      display: flex; justify-content: space-between; gap: 10px; margin-top: 12px;
    }
    .btn-secondary {
      background: rgba(255,255,255,0.06); border: 1px solid var(--gunmetal-dark); color: #fff; border-radius: 10px; padding: 10px 14px;
      cursor: pointer; transition: all 0.2s ease;
    }
    .btn-secondary:hover { background: rgba(255,255,255,0.1); }
    .btn-primary {
      background: var(--accent-gradient); border: none; color: #fff; border-radius: 10px; padding: 10px 14px; cursor: pointer;
      box-shadow: 0 2px 8px rgba(90, 107, 115, 0.3);
    }
    .settings-note {
      font-size: 12px; color: var(--text-muted); margin-top: 8px;
    }
    .settings-note .warn { color: var(--warn); }

    body.focus-mode header, body.focus-mode footer, body.focus-mode .controls { transform: translateY(-100%); opacity: 0; pointer-events: none; }
    body.focus-mode footer { transform: translateY(100%); }
    body.focus-mode .ai-panel { transform: translateX(100%); }
    body.focus-mode .main-container { padding: 0; }
    body.focus-mode #journal-container { margin: 0; border-radius: 0; height: 100vh; }

    @media (max-width: 768px) {
      .main-container { flex-direction: column; }
      .ai-panel { width: 100%; max-height: 52vh; border-left: none; border-top: 2px solid var(--gunmetal-dark); }
      header { flex-direction: column; gap: 10px; align-items: stretch; }
      .header-left { width: 100%; justify-content: space-between; }
      .controls { margin: 8px 12px; }
      #journal-container { margin: 0 12px 12px; }
      footer { flex-direction: column; align-items: center; gap: 10px; }
    }

    /* iOS polish */
    .ios .ai-panel { border-radius: 14px 14px 0 0; }
    .ios .ai-panel.active { display: flex; }
    .ios .controls button, .ios .ai-button, .ios .copy-button { border-radius: 12px; }
    .ios #journal-container { border-radius: 16px; }
    .ios .nav-links { border-radius: 16px; }

    /* Scrollbar */
    ::-webkit-scrollbar { width: 8px; height: 8px; }
    ::-webkit-scrollbar-track { background: rgba(40, 40, 40, 0.5); }
    ::-webkit-scrollbar-thumb { background: rgba(90, 107, 115, 0.5); border-radius: 4px; }
    ::-webkit-scrollbar-thumb:hover { background: rgba(90, 107, 115, 0.7); }
  </style>
</head>
<body>

  <header>
    <div class="header-left">
      <button class="nav-button" onclick="toggleNav()">☰</button>
      <div class="page-title" id="pageTitle">The Abyssal Experience of Nihilism</div>
    </div>
    <div style="display:flex; gap:10px;">
      <button class="settings-button" onclick="toggleSettings()">⚙️ Settings</button>
      <button class="ai-toggle" onclick="toggleAI()">🧠 AI Assistant</button>
    </div>
  </header>

  <div class="nav-links" id="navLinks" style="display: none;"></div>

  <div class="main-container">
    <div class="journal-section">
      <div class="controls">
        <button class="save-btn saved" id="saveBtn" onclick="manualSave()">Save</button>
        <button onclick="togglePreview()">Toggle Preview</button>
        <button onclick="exportMarkdown()">Export .md</button>
        <button onclick="clearEditor()">New Note (in section)</button>
        <button onclick="insertTimestamp()">Timestamp</button>
        <button onclick="toggleFocusMode()">Focus Mode</button>
      </div>

      <div id="journal-container">
        <textarea id="journal-editor" placeholder="# Begin your existential chronicle..." style="display: block;"></textarea>
        <div id="markdown-preview" style="display: none;">
          <!-- Optional preview content placeholder -->
        </div>
      </div>
    </div>

    <div class="ai-panel" id="aiPanel">
      <div class="ai-header">⚡ Philosophical AI Assistant</div>
      <div class="ai-tools">
        <div class="ai-tool">
          <button class="ai-tool-header" onclick="toggleTool(this)">
            <span class="ai-tool-icon">✨</span>
            <span>Expand Thoughts</span>
          </button>
          <div class="ai-tool-content">
            <div class="ai-tool-inner">
              <textarea class="ai-input" placeholder="Paste a sentence or leave blank to use selection..."></textarea>
              <button class="ai-button" onclick="expandThoughts(this)">Expand</button>
              <div class="ai-output" style="display: none;"></div>
            </div>
          </div>
        </div>

        <div class="ai-tool">
          <button class="ai-tool-header" onclick="toggleTool(this)">
            <span class="ai-tool-icon">🧠</span>
            <span>Generate Ideas</span>
          </button>
          <div class="ai-tool-content">
            <div class="ai-tool-inner">
              <textarea class="ai-input" placeholder="Enter a theme or topic..."></textarea>
              <button class="ai-button" onclick="generateIdeas(this)">Generate</button>
              <div class="ai-output" style="display: none;"></div>
            </div>
          </div>
        </div>

        <div class="ai-tool">
          <button class="ai-tool-header" onclick="toggleTool(this)">
            <span class="ai-tool-icon">📝</span>
            <span>Writing Prompts</span>
          </button>
          <div class="ai-tool-content">
            <div class="ai-tool-inner">
              <button class="ai-button" onclick="generatePrompt(this)">Existential</button>
              <button class="ai-button" onclick="generatePrompt(this, 'nihilistic')">Nihilistic</button>
              <button class="ai-button" onclick="generatePrompt(this, 'consciousness')">Consciousness</button>
              <div class="ai-output" style="display: none;"></div>
            </div>
          </div>
        </div>

        <div class="ai-tool">
          <button class="ai-tool-header" onclick="toggleTool(this)">
            <span class="ai-tool-icon">✏️</span>
            <span>Improve Writing</span>
          </button>
          <div class="ai-tool-content">
            <div class="ai-tool-inner">
              <textarea class="ai-input" placeholder="Paste text to enhance..."></textarea>
              <button class="ai-button" onclick="improveWriting(this)">Improve</button>
              <div class="ai-output" style="display: none;"></div>
            </div>
          </div>
        </div>

        <div class="ai-tool">
          <button class="ai-tool-header" onclick="toggleTool(this)">
            <span class="ai-tool-icon">🔍</span>
            <span>Analyze Content</span>
          </button>
          <div class="ai-tool-content">
            <div class="ai-tool-inner">
              <textarea class="ai-input" placeholder="Paste text to analyze..."></textarea>
              <button class="ai-button" onclick="analyzeContent(this)">Analyze</button>
              <div class="ai-output" style="display: none;"></div>
            </div>
          </div>
        </div>

        <div class="ai-tool">
          <button class="ai-tool-header" onclick="toggleTool(this)">
            <span class="ai-tool-icon">⚡</span>
            <span>Counter-Perspective</span>
          </button>
          <div class="ai-tool-content">
            <div class="ai-tool-inner">
              <textarea class="ai-input" placeholder="Present an argument to contradict..."></textarea>
              <button class="ai-button" onclick="generateCounter(this)">Generate</button>
              <div class="ai-output" style="display: none;"></div>
            </div>
          </div>
        </div>

        <div class="ai-tool">
          <button class="ai-tool-header" onclick="toggleTool(this)">
            <span class="ai-tool-icon">📚</span>
            <span>Concept Explorer</span>
          </button>
          <div class="ai-tool-content">
            <div class="ai-tool-inner">
              <textarea class="ai-input" placeholder="Enter a philosophical concept..."></textarea>
              <button class="ai-button" onclick="exploreConcept(this)">Explore</button>
              <div class="ai-output" style="display: none;"></div>
            </div>
          </div>
        </div>

        <div class="ai-tool">
          <button class="ai-tool-header" onclick="toggleTool(this)">
            <span class="ai-tool-icon">🎯</span>
            <span>Summarize</span>
          </button>
          <div class="ai-tool-content">
            <div class="ai-tool-inner">
              <textarea class="ai-input" placeholder="Paste long text to summarize..."></textarea>
              <button class="ai-button" onclick="summarizeText(this)">Summarize</button>
              <div class="ai-output" style="display: none;"></div>
            </div>
          </div>
        </div>

        <div class="ai-tool">
          <button class="ai-tool-header" onclick="toggleTool(this)">
            <span class="ai-tool-icon">🏷️</span>
            <span>Generate Tags</span>
          </button>
          <div class="ai-tool-content">
            <div class="ai-tool-inner">
              <textarea class="ai-input" placeholder="Paste text to generate tags..."></textarea>
              <button class="ai-button" onclick="generateTags(this)">Generate</button>
              <div class="ai-output" style="display: none;"></div>
            </div>
          </div>
        </div>

        <div class="ai-tool">
          <button class="ai-tool-header" onclick="toggleTool(this)">
            <span class="ai-tool-icon">💭</span>
            <span>Reflection Questions</span>
          </button>
          <div class="ai-tool-content">
            <div class="ai-tool-inner">
              <textarea class="ai-input" placeholder="Share thoughts for reflection questions..."></textarea>
              <button class="ai-button" onclick="generateQuestions(this)">Generate</button>
              <div class="ai-output" style="display: none;"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <footer id="footer">
    <div class="footer-content" id="footerContent">
      <div class="footer-text">The Religious Experience of Nihilism</div>
      <div class="word-count" id="wordCount">0 words, 0 characters</div>
      <div class="save-status" id="saveStatus">Saved</div>
      <div class="shortcuts-help" onclick="toggleShortcutsModal()">?</div>
    </div>
    <div class="arrows">
      <a href="#prev" class="arrow" onclick="previousPage()">← Previous</a>
      <a href="#next" class="arrow" onclick="nextPage()">Next →</a>
    </div>
  </footer>

  <!-- Keyboard Shortcuts Modal -->
  <div class="modal-overlay" id="shortcutsModal" onclick="toggleShortcutsModal()">
    <div class="modal-content" onclick="event.stopPropagation()">
      <h2>Keyboard Shortcuts</h2>
      <ul>
        <li><span>Save current note</span><code>Ctrl/Cmd + S</code></li>
        <li><span>Export as .md</span><code>Ctrl/Cmd + E</code></li>
        <li><span>Toggle Preview</span><code>Ctrl/Cmd + P</code></li>
        <li><span>Toggle AI Assistant</span><code>Ctrl/Cmd + I</code></li>
        <li><span>Toggle Focus Mode</span><code>ESC</code></li>
      </ul>
    </div>
  </div>

  <!-- Settings Modal (REAL AI) -->
  <div class="modal-overlay" id="settingsModal" onclick="toggleSettings()">
    <div class="modal-content" onclick="event.stopPropagation()">
      <h2>AI Settings</h2>
      <div class="settings-grid">
        <div class="full">
          <label for="llmProvider">Provider</label>
          <select id="llmProvider">
            <option value="none">None (simulate responses)</option>
            <option value="openai">OpenAI</option>
            <option value="anthropic">Anthropic</option>
            <option value="openrouter">OpenRouter</option>
            <option value="azure">Azure OpenAI</option>
          </select>
        </div>

        <div class="full">
          <label for="llmModel">Model</label>
          <input id="llmModel" placeholder="e.g., gpt-4o-mini, claude-3-5-sonnet-20240620, openrouter/auto" />
        </div>

        <div class="full eye-wrap">
          <label for="llmApiKey">API Key</label>
          <input id="llmApiKey" type="password" placeholder="Paste your API key..." />
          <button class="toggle-eye" onclick="toggleApiKey()">Show</button>
        </div>

        <div class="full" id="azureFields" style="display:none;">
          <label for="azureEndpoint">Azure Endpoint (https://YOUR_RESOURCE.openai.azure.com)</label>
          <input id="azureEndpoint" placeholder="https://your-resource.openai.azure.com" />
          <label for="azureDeployment" style="margin-top:8px; display:block;">Azure Deployment Name</label>
          <input id="azureDeployment" placeholder="your-deployment-name" />
          <label for="azureApiVersion" style="margin-top:8px; display:block;">API Version</label>
          <input id="azureApiVersion" placeholder="2024-02-15-preview" />
        </div>

        <div class="full">
          <label><input type="checkbox" id="persistKey" checked /> Store API key in this browser (localStorage)</label>
        </div>
      </div>

      <div class="settings-actions">
        <button class="btn-secondary" onclick="testLLM()">Test</button>
        <div style="display:flex; gap:8px;">
          <button class="btn-secondary" onclick="clearLLMSettings()">Clear</button>
          <button class="btn-primary" onclick="saveLLMSettings()">Save</button>
        </div>
      </div>
      <div class="settings-note">
        Tip: For security, prefer not to embed API keys in a file served via file://. Use a simple local server. If a request fails due to CORS or mixed content, run from localhost.
      </div>
      <div class="settings-note warn">
        Warning: API keys are sensitive. If you choose to persist, they are stored in this browser's localStorage.
      </div>
    </div>
  </div>

  <script>
    // Elements
    const editor = document.getElementById('journal-editor');
    const preview = document.getElementById('markdown-preview');
    const aiPanel = document.getElementById('aiPanel');
    const pageTitle = document.getElementById('pageTitle');
    const navLinksContainer = document.getElementById('navLinks');
    const wordCountEl = document.getElementById('wordCount');
    const saveStatusEl = document.getElementById('saveStatus');
    const saveBtn = document.getElementById('saveBtn');

    // Pages
    const pages = [
      { id: 'nihilism-preface', title: 'Nihilism Preface' },
      { id: 'abyssal-experience', title: 'The Abyssal Experience of Nihilism' },
      { id: 'uncanny-illusion', title: 'The Uncanny Illusion of Naturalism' },
      { id: 'madness-nonexistence', title: 'Madness, Nonexistence, and the Other' },
      { id: 'infinite-nothingness', title: 'The Startling Encounter with Infinite Nothingness' },
      { id: 'symbolic-resonance', title: 'The Symbolic Resonance of Nothing' },
    ];
    let currentPageId = pages[0].id;
    let isAIOpen = false;
    let dirty = false;

    // iOS detection for polish
    (function detectIOS() {
      const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      if (iOS) document.body.classList.add('ios');
    })();

    function slugify(text) {
      return text.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
    }

    function populateNav() {
      navLinksContainer.innerHTML = pages.map(p =>
        `<a href="#${p.id}" onclick="selectPage('${p.id}')">${p.title}</a>`
      ).join('');
    }

    function toggleNav() {
      const nav = document.getElementById('navLinks');
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    }

    function toggleAI() {
      isAIOpen = !isAIOpen;
      aiPanel.classList.toggle('active', isAIOpen);
      document.querySelector('.ai-toggle').textContent = isAIOpen ? '✖ Close AI' : '🧠 AI Assistant';
    }

    function toggleTool(button) {
      const tool = button.parentElement;
      const isExpanded = tool.classList.contains('expanded');
      document.querySelectorAll('.ai-tool.expanded').forEach(t => {
        if (t !== tool) t.classList.remove('expanded');
      });
      tool.classList.toggle('expanded', !isExpanded);
    }

    function togglePreview() {
      if (preview.style.display === 'block') {
        preview.style.display = 'none';
        editor.style.display = 'block';
      } else {
        const text = editor.value;
        preview.innerHTML = renderMarkdown(text);
        preview.style.display = 'block';
        editor.style.display = 'none';
      }
    }

    function renderMarkdown(md) {
      if (!md) return '';
      return md
        .replace(/^###### (.*)$/gim, '<h6>$1</h6>')
        .replace(/^##### (.*)$/gim, '<h5>$1</h5>')
        .replace(/^#### (.*)$/gim, '<h4>$1</h4>')
        .replace(/^### (.*)$/gim, '<h3>$1</h3>')
        .replace(/^## (.*)$/gim, '<h2>$1</h2>')
        .replace(/^# (.*)$/gim, '<h1>$1</h1>')
        .replace(/**(.*?)**/gim, '<strong>$1</strong>')
        .replace(/*(.*?)*/gim, '<em>$1</em>')
        .split('\n\n').map(p => p.trim() ? `<p>${p.replace(/\n/g, '<br>')}</p>` : '').join('');
    }

    function exportMarkdown() {
      const timestamp = new Date().toISOString().slice(0,10);
      const filename = `${slugify(pageTitle.textContent)}-${timestamp}.md`;
      const blob = new Blob([editor.value], { type: 'text/markdown' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
    }

    function clearEditor() {
      if (confirm('Start a new note in this section? The current content will be cleared.')) {
        editor.value = '';
        markDirty();
        saveToStorage();
        updateWordCount();
      }
    }

    function insertTimestamp() {
      const timestamp = new Date().toLocaleString();
      const text = `\n\n---\n${timestamp}\n\n`;
      insertAtCursor(text);
    }

    function insertAtCursor(text) {
      const start = editor.selectionStart || 0;
      const end = editor.selectionEnd || 0;
      const value = editor.value || '';
      editor.value = value.slice(0, start) + text + value.slice(end);
      editor.selectionStart = editor.selectionEnd = start + text.length;
      editor.focus();
      markDirty();
      saveToStorage();
      updateWordCount();
    }

    function insertAtTop(text) {
      editor.value = text + '\n\n' + (editor.value || '');
      editor.focus();
      markDirty();
      saveToStorage();
      updateWordCount();
    }

    function insertAtEnd(text) {
      editor.value = (editor.value || '') + '\n\n' + text;
      editor.focus();
      markDirty();
      saveToStorage();
      updateWordCount();
    }

    function selectPage(pageId) {
      // Save current before switching
      saveToStorage();
      currentPageId = pageId;
      loadFromStorage();
      const page = pages.find(p => p.id === pageId);
      pageTitle.textContent = page ? page.title : 'Notes';
      document.getElementById('navLinks').style.display = 'none';
      // Reset preview state to editor on switch
      preview.style.display = 'none';
      editor.style.display = 'block';
    }

    function findCurrentPageIndex() {
      return pages.findIndex(p => p.id === currentPageId);
    }

    function previousPage() {
      const currentIndex = findCurrentPageIndex();
      const prevIndex = (currentIndex - 1 + pages.length) % pages.length;
      selectPage(pages[prevIndex].id);
    }

    function nextPage() {
      const currentIndex = findCurrentPageIndex();
      const nextIndex = (currentIndex + 1) % pages.length;
      selectPage(pages[nextIndex].id);
    }

    function saveToStorage() {
      localStorage.setItem(`nihilNotes_${currentPageId}`, editor.value || '');
      dirty = false;
      updateSaveStatus();
    }

    function manualSave() {
      saveToStorage();
      // quick pulse feedback
      saveBtn.classList.add('saved');
      setTimeout(() => saveBtn.classList.remove('saved'), 500);
    }

    function markDirty() {
      dirty = true;
      updateSaveStatus();
    }

    function updateSaveStatus() {
      if (dirty) {
        saveStatusEl.textContent = 'Unsaved changes';
        saveBtn.classList.remove('saved'); saveBtn.classList.add('unsaved');
        document.getElementById('footer').classList.add('unsaved');
        document.getElementById('footer').classList.remove('saved');
      } else {
        saveStatusEl.textContent = 'Saved';
        saveBtn.classList.remove('unsaved'); saveBtn.classList.add('saved');
        document.getElementById('footer').classList.add('saved');
        document.getElementById('footer').classList.remove('unsaved');
      }
    }

    function loadFromStorage() {
      const saved = localStorage.getItem(`nihilNotes_${currentPageId}`);
      const page = pages.find(p => p.id === currentPageId);
      const defaultText = `# ${page ? page.title : 'Untitled'}\n\nThe void beckons...`;
      editor.value = (saved !== null) ? saved : defaultText;
      dirty = false;
      updateSaveStatus();
      updateWordCount();
    }

    function updateWordCount() {
      const text = editor.value || '';
      const words = text.trim().split(/\s+/).filter(Boolean).length;
      const chars = text.length;
      wordCountEl.textContent = `${words} words, ${chars} characters`;
    }

    function toggleShortcutsModal() {
      const modal = document.getElementById('shortcutsModal');
      modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
    }

    let isFocusMode = false;
    function toggleFocusMode() {
      isFocusMode = !isFocusMode;
      document.body.classList.toggle('focus-mode', isFocusMode);
    }

    // Fallback responses (used only if no provider configured or API fails)
    const philosophicalResponses = {
      expandThoughts: [
        "The paradox of existence reveals itself in the tension between our desperate search for meaning and the universe's apparent indifference...",
        "What emerges here is the fundamental contradiction of human consciousness: we are beings capable of conceiving infinity while trapped within finitude...",
        "The absurdity lies not in the lack of inherent meaning, but in our persistent belief that meaning must be inherent rather than constructed..."
      ],
      generateIdeas: [
        "• The Archaeology of Lost Thoughts: Excavating the ideas we've forgotten we once knew\n• Temporal Anxiety: How our relationship with time shapes our sense of self\n• The Ethics of Existing: Whether continuing to exist is itself a moral choice\n• Consciousness as Cosmic Error: Is awareness an aberration?\n• The Aesthetics of Decay: Finding beauty in entropy and dissolution",
        "• The Silence Between Words: What exists in the gaps of language and thought\n• Inherited Suffering: How we carry the pain of previous generations\n• The Democracy of Meaninglessness: If nothing matters, does everything matter equally?\n• Digital Dualism: The split between online and offline selves\n• The Philosophy of Forgetting: The necessity and tragedy of memory loss"
      ],
      writingPrompts: {
        existential: [
          "Write about a moment when you realized your entire identity might be a carefully constructed illusion.",
          "Imagine discovering that every decision you’ve made was made by a future version of you reaching back through time."
        ],
        nihilistic: [
          "If the universe ends in 24 hours and no one will remember anything, how do you spend the final day?",
          "Explain hope to an alien that has never experienced suffering or loss."
        ],
        consciousness: [
          "What if your consciousness is a shared experience—one awareness from different perspectives?",
          "Describe the first time you became aware that you were aware."
        ]
      },
      improveWriting: [
        "ENHANCED VERSION:\n\nThe existential weight deepens when we consider the recursive nature of self-examination...",
        "REFINED PERSPECTIVE:\n\nThis gains gravitas when reframed through phenomenology—what Heidegger termed 'thrownness'..."
      ],
      analyzeContent: [
        "THEMATIC ANALYSIS:\n\nCore themes: existential anxiety, paradox of self-examination, temporal finitude, constructed meaning...",
        "CONCEPTUAL MAPPING:\n\nPattern: observation → contradiction → attempt at reconciliation → complexity deepens (dialectical movement)."
      ],
      generateCounter: [
        "COUNTER-PERSPECTIVE:\n\nConsider meaning as an emergent property—neither inherent nor merely constructed.",
        "DIALECTICAL OPPOSITION:\n\nYour ability to conceive meaninglessness presupposes a template for meaning."
      ],
      exploreConcept: [
        "DEEP DIVE: The Absurd\n\nCamus: collision between our need for rational understanding and a mute universe.",
        "CONCEPT: Authenticity\n\nA paradox: The more you aim for authenticity, the more performative it becomes."
      ],
      summarizeText: [
        "PHILOSOPHICAL SYNTHESIS:\n\nThe search for meaning may itself be the meaning we seek. Consciousness creates its own problems.",
        "ESSENCE DISTILLATION:\n\nConsciousness is both our anxiety and our possibility; time constrains and opens."
      ],
      generateTags: [
        "#existential-paradox #consciousness #meaning-making #temporal-anxiety #absurdism #phenomenology #authenticity",
        "#nihilism #cosmic-indifference #responsibility #freedom #self-examination"
      ],
      generateQuestions: [
        "REFLECTIVE INQUIRIES:\n\n• If your consciousness doubled in capacity, what would become visible?\n• What would million-year lifespan time feel like?\n• Which assumptions might be medieval-level wrong?",
        "EXISTENTIAL INTERROGATIONS:\n\n• If consciousness emerges from matter, what of identity?\n• Which thoughts are 'yours' vs. conditioning?\n• Live as if every moment were first and last?"
      ]
    };

    function showLoading(container) {
      const output = container.querySelector('.ai-output');
      output.style.display = 'block';
      output.innerHTML = '<div class="ai-loading"></div> Thinking...';
    }

    function showOutput(container, content) {
      const output = container.querySelector('.ai-output');
      const renderedContent = renderMarkdown(content);
      output.innerHTML = renderedContent;
      addInteractionButtons(output, content);
    }

    function addInteractionButtons(output, rawContent) {
      const buttonContainer = document.createElement('div');
      buttonContainer.style.marginTop = '15px';

      const copyBtn = document.createElement('button');
      copyBtn.className = 'copy-button';
      copyBtn.textContent = 'Copy';
      copyBtn.onclick = () => {
        navigator.clipboard.writeText(rawContent);
        copyBtn.textContent = 'Copied!';
        setTimeout(() => copyBtn.textContent = 'Copy', 2000);
      };

      const insertTopBtn = document.createElement('button');
      insertTopBtn.className = 'copy-button';
      insertTopBtn.textContent = 'Insert at Top';
      insertTopBtn.style.marginLeft = '10px';
      insertTopBtn.onclick = () => insertAtTop(rawContent);

      const insertCursorBtn = document.createElement('button');
      insertCursorBtn.className = 'copy-button';
      insertCursorBtn.textContent = 'Insert at Cursor';
      insertCursorBtn.style.marginLeft = '10px';
      insertCursorBtn.onclick = () => insertAtCursor(rawContent);

      const insertEndBtn = document.createElement('button');
      insertEndBtn.className = 'copy-button';
      insertEndBtn.textContent = 'Insert at End';
      insertEndBtn.style.marginLeft = '10px';
      insertEndBtn.onclick = () => insertAtEnd(rawContent);

      buttonContainer.appendChild(copyBtn);
      buttonContainer.appendChild(insertTopBtn);
      buttonContainer.appendChild(insertCursorBtn);
      buttonContainer.appendChild(insertEndBtn);
      output.appendChild(buttonContainer);
    }

    function getSelectedTextOrAll() {
      if (editor.selectionStart !== editor.selectionEnd) {
        return editor.value.substring(editor.selectionStart, editor.selectionEnd);
      }
      return editor.value;
    }

    // REAL AI: Provider integration
    const providerDefaults = {
      openai: { model: 'gpt-4o-mini' },
      anthropic: { model: 'claude-3-5-sonnet-20240620' },
      openrouter: { model: 'openrouter/auto' },
      azure: { model: '', endpoint: '', deployment: '', apiVersion: '2024-02-15-preview' },
    };

    function getLLMConfig() {
      const provider = localStorage.getItem('llm_provider') || 'none';
      const model = localStorage.getItem('llm_model') || (providerDefaults[provider]?.model || '');
      const persistKey = (localStorage.getItem('llm_persist') || 'true') === 'true';
      const apiKey = persistKey ? (localStorage.getItem('llm_api_key') || '') : (window._llm_api_key || '');
      const azureEndpoint = localStorage.getItem('azure_endpoint') || '';
      const azureDeployment = localStorage.getItem('azure_deployment') || '';
      const azureApiVersion = localStorage.getItem('azure_apiversion') || providerDefaults.azure.apiVersion;
      return { provider, model, apiKey, persistKey, azureEndpoint, azureDeployment, azureApiVersion };
    }

    function isLLMConfigured() {
      const cfg = getLLMConfig();
      if (cfg.provider === 'none') return false;
      if (!cfg.model) return false;
      if (!cfg.apiKey) return false;
      if (cfg.provider === 'azure' && (!cfg.azureEndpoint || !cfg.azureDeployment || !cfg.azureApiVersion)) return false;
      return true;
    }

    async function callLLM({ system, user }) {
      const cfg = getLLMConfig();
      if (!isLLMConfigured()) throw new Error('AI is not configured. Open Settings to add your API key and choose a provider.');

      const provider = cfg.provider;
      let url = '';
      let headers = {};
      let body = {};
      let response;
      let text = '';

      if (provider === 'openai') {
        url = 'https://api.openai.com/v1/chat/completions';
        headers = {
          'Authorization': `Bearer ${cfg.apiKey}`,
          'Content-Type': 'application/json'
        };
        body = {
          model: cfg.model,
          messages: [
            ...(system ? [{ role: 'system', content: system }] : []),
            { role: 'user', content: user }
          ],
          temperature: 0.7
        };
      } else if (provider === 'anthropic') {
        url = 'https://api.anthropic.com/v1/messages';
        headers = {
          'x-api-key': cfg.apiKey,
          'anthropic-version': '2023-06-01',
          'Content-Type': 'application/json'
        };
        body = {
          model: cfg.model,
          max_tokens: 800,
          messages: [{ role: 'user', content: user }],
          ...(system ? { system } : {})
        };
      } else if (provider === 'openrouter') {
        url = 'https://openrouter.ai/api/v1/chat/completions';
        headers = {
          'Authorization': `Bearer ${cfg.apiKey}`,
          'Content-Type': 'application/json'
        };
        body = {
          model: cfg.model,
          messages: [
            ...(system ? [{ role: 'system', content: system }] : []),
            { role: 'user', content: user }
          ]
        };
      } else if (provider === 'azure') {
        const base = cfg.azureEndpoint.replace(/\/+$/, '');
        url = `${base}/openai/deployments/${encodeURIComponent(cfg.azureDeployment)}/chat/completions?api-version=${encodeURIComponent(cfg.azureApiVersion)}`;
        headers = {
          'api-key': cfg.apiKey,
          'Content-Type': 'application/json'
        };
        body = {
          model: cfg.model || undefined, // Azure primarily uses deployment
          messages: [
            ...(system ? [{ role: 'system', content: system }] : []),
            { role: 'user', content: user }
          ],
          temperature: 0.7
        };
      } else {
        throw new Error('Unknown provider');
      }

      try {
        response = await fetch(url, { method: 'POST', headers, body: JSON.stringify(body) });
        if (!response.ok) {
          const errText = await response.text().catch(() => '');
          throw new Error(`API error (${response.status}): ${errText || response.statusText}`);
        }
        const data = await response.json();

        if (provider === 'anthropic') {
          const contentArr = data?.content || [];
          text = contentArr.map(c => c?.text || '').join('\n').trim();
        } else {
          // OpenAI-compatible
          text = data?.choices?.[0]?.message?.content || '';
        }

        if (!text) throw new Error('Empty response from AI.');
        return text;
      } catch (e) {
        // Propagate for graceful fallback
        throw e;
      }
    }

    // Tool runner using REAL AI when configured
    async function runAITool(button, { system, userPromptBuilder, fallbackArray }) {
      const container = button.closest('.ai-tool-inner');
      const inputEl = container.querySelector('.ai-input');
      const selection = (inputEl?.value?.trim()) || getSelectedTextOrAll().trim();

      if (!selection) {
        alert('Please select text in the editor, or type something into the AI input box.');
        return;
      }

      showLoading(container);

      const userPrompt = userPromptBuilder(selection);

      try {
        const output = await callLLM({ system, user: userPrompt });
        showOutput(container, output);
        if (inputEl) inputEl.value = '';
      } catch (err) {
        console.warn('AI call failed, falling back to simulated content:', err);
        const response = fallbackArray[Math.floor(Math.random() * fallbackArray.length)];
        showOutput(container, response + `\n\n_(Simulated response. Open Settings to configure a real AI provider.)_`);
      }
    }

    // AI tools using real provider when available
    function expandThoughts(button) {
      runAITool(button, {
        system: 'You are a precise philosophical writing assistant. Expand succinctly with depth, clarity, and concrete insight. Avoid fluff.',
        userPromptBuilder: (s) => `Expand and deepen the following thought in 2-4 short paragraphs, preserving tone and voice:\n\n"${s}"`,
        fallbackArray: philosophicalResponses.expandThoughts
      });
    }
    function generateIdeas(button) {
      runAITool(button, {
        system: 'You generate original, thought-provoking idea lists related to philosophy, nihilism, and existential themes.',
        userPromptBuilder: (s) => `Generate a concise list of 5-8 novel, intriguing ideas or angles for this theme. Use short titles with one-sentence descriptions. Theme:\n\n${s}`,
        fallbackArray: philosophicalResponses.generateIdeas
      });
    }
    function generatePrompt(button, type = 'existential') {
      const container = button.closest('.ai-tool-inner');
      showLoading(container);
      const prompts = philosophicalResponses.writingPrompts[type] || philosophicalResponses.writingPrompts.existential;
      setTimeout(() => {
        const prompt = prompts[Math.floor(Math.random() * prompts.length)];
        showOutput(container, prompt);
      }, 600);
    }
    function improveWriting(button) {
      runAITool(button, {
        system: 'You are a careful editor for philosophical prose. Improve clarity, flow, and precision while preserving meaning and voice. Return only the improved text.',
        userPromptBuilder: (s) => `Improve the following passage (clarity, flow, concision, elegance). Keep length similar.\n\n${s}`,
        fallbackArray: philosophicalResponses.improveWriting
      });
    }
    function analyzeContent(button) {
      runAITool(button, {
        system: 'You analyze texts like a philosopher. Identify themes, structure, tensions, and implicit assumptions. Be concise and structured.',
        userPromptBuilder: (s) => `Analyze the following text (themes, structure, tensions, assumptions) in bullet points:\n\n${s}`,
        fallbackArray: philosophicalResponses.analyzeContent
      });
    }
    function generateCounter(button) {
      runAITool(button, {
        system: 'You produce rigorous counterarguments. Be charitable, precise, and insightful. Avoid strawmen. Keep it concise.',
        userPromptBuilder: (s) => `Provide a concise but strong counter-perspective to the following argument:\n\n${s}`,
        fallbackArray: philosophicalResponses.generateCounter
      });
    }
    function exploreConcept(button) {
      runAITool(button, {
        system: 'You explain philosophical concepts with historical context and present relevance. Be clear and compact.',
        userPromptBuilder: (s) => `Explain this philosophical concept with origins, key thinkers, and core debates (in ~150-200 words):\n\n${s}`,
        fallbackArray: philosophicalResponses.exploreConcept
      });
    }
    function summarizeText(button) {
      runAITool(button, {
        system: 'You summarize clearly and concisely, preserving key claims, reasoning, and any tensions.',
        userPromptBuilder: (s) => `Summarize the following text in 5-7 bullet points, focusing on key claims and logic:\n\n${s}`,
        fallbackArray: philosophicalResponses.summarizeText
      });
    }
    function generateTags(button) {
      runAITool(button, {
        system: 'You generate relevant, concise hashtags / tags. Prefer 6-10 tags.',
        userPromptBuilder: (s) => `Generate 6-10 concise tags (no spaces; use hyphens if needed) for this text:\n\n${s}`,
        fallbackArray: philosophicalResponses.generateTags
      });
    }
    function generateQuestions(button) {
      runAITool(button, {
        system: 'You produce probing reflection questions that invite depth and self-inquiry.',
        userPromptBuilder: (s) => `Generate 5-8 probing reflection questions based on this:\n\n${s}`,
        fallbackArray: philosophicalResponses.generateQuestions
      });
    }

    // Settings modal handlers
    const settingsModal = document.getElementById('settingsModal');
    const providerSelect = document.getElementById('llmProvider');
    const modelInput = document.getElementById('llmModel');
    const apiKeyInput = document.getElementById('llmApiKey');
    const persistKeyInput = document.getElementById('persistKey');
    const azureFields = document.getElementById('azureFields');
    const azureEndpointInput = document.getElementById('azureEndpoint');
    const azureDeploymentInput = document.getElementById('azureDeployment');
    const azureApiVersionInput = document.getElementById('azureApiVersion');

    function toggleSettings() {
      const visible = settingsModal.style.display === 'flex';
      if (visible) {
        settingsModal.style.display = 'none';
      } else {
        loadLLMSettings();
        settingsModal.style.display = 'flex';
      }
    }
    function loadLLMSettings() {
      const cfg = getLLMConfig();
      providerSelect.value = cfg.provider || 'none';
      modelInput.value = cfg.model || (providerDefaults[cfg.provider]?.model || '');
      apiKeyInput.value = cfg.apiKey || '';
      persistKeyInput.checked = cfg.persistKey;
      azureEndpointInput.value = cfg.azureEndpoint || '';
      azureDeploymentInput.value = cfg.azureDeployment || '';
      azureApiVersionInput.value = cfg.azureApiVersion || providerDefaults.azure.apiVersion;
      azureFields.style.display = (providerSelect.value === 'azure') ? 'block' : 'none';
    }
    providerSelect.addEventListener('change', () => {
      const p = providerSelect.value;
      modelInput.placeholder = (providerDefaults[p]?.model) || 'Enter model';
      if (!modelInput.value && providerDefaults[p]?.model) modelInput.value = providerDefaults[p].model;
      azureFields.style.display = (p === 'azure') ? 'block' : 'none';
    });
    function toggleApiKey() {
      apiKeyInput.type = apiKeyInput.type === 'password' ? 'text' : 'password';
    }
    function saveLLMSettings() {
      const provider = providerSelect.value;
      const model = modelInput.value.trim();
      const apiKey = apiKeyInput.value.trim();
      const persist = persistKeyInput.checked;

      localStorage.setItem('llm_provider', provider);
      localStorage.setItem('llm_model', model);
      localStorage.setItem('llm_persist', persist ? 'true' : 'false');

      if (provider === 'azure') {
        localStorage.setItem('azure_endpoint', azureEndpointInput.value.trim());
        localStorage.setItem('azure_deployment', azureDeploymentInput.value.trim());
        localStorage.setItem('azure_apiversion', azureApiVersionInput.value.trim() || providerDefaults.azure.apiVersion);
      } else {
        localStorage.removeItem('azure_endpoint');
        localStorage.removeItem('azure_deployment');
        localStorage.removeItem('azure_apiversion');
      }

      if (persist) {
        if (apiKey) localStorage.setItem('llm_api_key', apiKey);
      } else {
        localStorage.removeItem('llm_api_key');
        window._llm_api_key = apiKey || '';
      }
      alert('Settings saved.');
      toggleSettings();
    }
    function clearLLMSettings() {
      localStorage.removeItem('llm_provider');
      localStorage.removeItem('llm_model');
      localStorage.removeItem('llm_api_key');
      localStorage.removeItem('llm_persist');
      localStorage.removeItem('azure_endpoint');
      localStorage.removeItem('azure_deployment');
      localStorage.removeItem('azure_apiversion');
      window._llm_api_key = '';
      loadLLMSettings();
      alert('AI settings cleared.');
    }
    async function testLLM() {
      try {
        const text = await callLLM({
          system: 'You respond with a single word.',
          user: 'Reply with the single word: pong'
        });
        alert('AI test success: ' + text.substring(0, 120));
      } catch (e) {
        alert('AI test failed: ' + (e?.message || e));
      }
    }

    // Events
    editor.addEventListener('input', () => { updateWordCount(); markDirty(); });
    setInterval(() => { if (dirty) saveToStorage(); }, 30000);
    window.addEventListener('beforeunload', saveToStorage);

    window.addEventListener('DOMContentLoaded', () => {
      populateNav();
      // build nav links (hash anchors)
      selectPage(pages[0].id);

      document.addEventListener('click', (e) => {
        const nav = document.getElementById('navLinks');
        const navButton = document.querySelector('.nav-button');
        if (nav && !nav.contains(e.target) && navButton && !navButton.contains(e.target)) {
          nav.style.display = 'none';
        }
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isFocusMode) {
        e.preventDefault();
        toggleFocusMode();
      }
      if (e.ctrlKey || e.metaKey) {
        switch(e.key.toLowerCase()) {
          case 's': e.preventDefault(); manualSave(); break;
          case 'e': e.preventDefault(); exportMarkdown(); break;
          case 'p': e.preventDefault(); togglePreview(); break;
          case 'i': e.preventDefault(); toggleAI(); break;
        }
      }
    });
  </script>
 </body>
</html>!!