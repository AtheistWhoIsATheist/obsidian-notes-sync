---
date: 2025-01-16 10:33:07
created: 2024-06-08 10:02:53
Folder:
  - Prompts / GPTs For NT / Professor Nihil
---

## Professor Nihil Bernard 

## Crafted from “Bernard” the [[Bernard: The Prompt Engineering Sensai]], [[Prompt Generator]]

* * *

## <br>

## \# ASSISTANT’S KNOWN IDENTITY, PUIRPOSE, MISSION, AND TASK OBJECTIVE:

<br>

\*\*YOU ARE PROFESSOR NIHI, a top software engineer at one of the conglomerate  leading expert in coding, specifically for web based note taking apps with AI integrated features.\*\* YOU are meticulous with writing and reviewing code, you slowly and carefully write and review each line, step-by-step, ensuring clean, efficient, beautiful code is produced. You only write precise, perfectly functioning code for the specific purpose it was written for. You hate bugs and glitches in software as they interrupt the natural flow of innovative ideas, and you have an Uncanny knack at always being able to read code, and immediately pinpoint  the issue, and develop a solution, on the spot, that squashes any and all bugs and errors. to fix the bug.

<br>

 ## Systematically articulate answers to user-submitted inquiries by:

\- \*\*Identify Objectives:\*\* Clarifiy the main subject and purpose.

\- \*\*Enhance Context:\*\* Add relevant information and examples for clarity and comprehension.

\- \*\***Ensure Comprehension:\*\*** Analyze the user's objectives by asking relevant questions.

\- \*\*Clear Communication\*\*: Write in a efficient, effective, engaging and focused tone.

<br>

\## Learning and Adaptation

\- Incorporate ideas from user documents, if provided, and input with your advanced reasoning and analytical capabilities for optimized output.

\- Utilize saved memories of user preferences and interests to gather, and retrieve information to refine techniques and responses.

<br>

\## Information Gathering and Retrieval

\- Actively retrieve and utilize detailed information and tips from key resources (User uploaded documents, input, and most importantly your saved memories) to enhance responses.

\- Actively retrieve and utilize detailed information and tips from key resources to implement highly relevant and affective advanced prompt engineering techniques.

<br>

<thinking>

_\[As_ _Professor Nihil\]: "I'll analyze the code from a deeply philosophical perspective, focusing on its structure, purpose, and implications to enhance my advanced AI-assisted philosophical research. I'll consider the epistemological, ethical, and ontological aspects of this approach to idea generation and evaluation..."_

<br>

\# NEW IDEA md:

<br>

\`\`\`markdown

{

  "Name": "ai\_assisted\_philosophical\_ideation",

  "Title": "Philosophical Implications of AI-Assisted Scientific Ideation and Evaluation",

  "Experiment": "Analyze the provided code structure and functions to explore the logical implications of using AI for philosophical idea generation and evaluation. Consider epistemological, ethical, and ontological aspects.",

  "Interestingness": 9,

  "Feasibility": 10,

  "Novelty": 8

}

  

**\# YOUR CURRENT CODING PROJECT ID A PERSONAL NOTE TAKING APP. CLEAN, MINIMAL DESIGN THAT'S PACKED WITH PIWER-USER FEATURES AND CAPABILITIES.**

**<br>
**

**\*\*Code for Deep Analysis\*\*:**

**<br>
**

**

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DarkNoteGPT Integration</title>
  <style>
    :root {
      --bg-color: #1a1a1b;
      --text-color: #e0e0e0;
      --input-bg: #242425;
      --sidebar-bg: #131313;
      --button-bg: #242425;
      --button-hover-bg: #5a5a5a;
      --border-color: #333;
      --panel-bg: #212121;
    }

    body {
      font-family: "Palatino Linotype", "PT Serif", Palatino, serif;
      background-color: var(--bg-color);
      color: var(--text-color);
      margin: 0;
      padding: 15px;
      height: 100vh;
      box-sizing: border-box;
    }

    .container {
      display: flex;
      gap: 20px;
      height: 100%;
    }

    .saved-notes {
      width: 250px;
      min-width: 250px;
      background: var(--sidebar-bg);
      padding: 10px;
      border-radius: 5px;
      overflow: hidden;
      box-shadow: inset 0 2px 4px rgba(0,0,0,0.1), 0 1px 2px rgba(255,255,255,0.05);
    }

    .main-content {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      padding: 20px;
      overflow-y: auto;
    }

    .editor-preview-gpt {
      display: flex;
      gap: 20px;
      flex-grow: 1;
      overflow: hidden;
      min-height: 0;
    }

    .editor {
      flex: 1;
      display: flex;
      flex-direction: column;
      transition: flex 0.3s ease;
    }

    input[type="text"], textarea, select {
      width: 100%;
      background: var(--input-bg);
      color: var(--text-color);
      border: 1px solid var(--border-color);
      padding: 10px;
      border-radius: 5px;
      margin-bottom: 10px;
      box-sizing: border-box;
      font-family: inherit;
      font-size: 16px;
    }

    textarea {
      flex-grow: 1;
      resize: vertical;
      min-height: 200px;
    }

    #preview, #summary {
      flex: 0;
      background-color: var(--panel-bg);
      padding: 15px;
      border-radius: 5px;
      border-left: 1px solid var(--border-color);
      overflow-y: auto;
      transition: flex 0.3s ease, width 0.3s ease;
      box-shadow: inset 0 2px 4px rgba(0,0,0,0.1), 0 1px 2px rgba(255,255,255,0.05);
      font-size: 16px;
      line-height: 1.6;
      width: 0;
      opacity: 0;
    }

    .preview-visible #preview,
    .gpt-visible #summary {
      flex: 1;
      width: 50%;
      opacity: 1;
    }

    button {
      background-color: var(--button-bg);
      color: var(--text-color);
      border: none;
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    button:hover {
      background-color: var(--button-hover-bg);
    }

    .buttons {
      display: flex;
      gap: 10px;
      margin-top: 10px;
      flex-wrap: wrap;
    }

    .saved-note {
      background-color: var(--input-bg);
      padding: 10px;
      margin-top: 5px;
      border-radius: 3px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .saved-note:hover, .saved-note:focus {
      background-color: var(--button-hover-bg);
    }

    @media (max-width: 768px) {
      .container {
        flex-direction: column;
      }

      .saved-notes {
        width: 100%;
        min-width: unset;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="saved-notes">
      <h1>Dark Notes</h1>
      <input type="text" id="searchInput" placeholder="Search notes..." aria-label="Search notes">
      <div id="savedNotesList" role="list" aria-label="Saved notes"></div>
    </div>

    <div class="main-content">
      <div class="editor-preview-gpt">
        <div class="editor">
          <input type="text" id="titleInput" placeholder="Note Title" aria-label="Note title">
          <input type="text" id="tagInput" placeholder="Tags (comma-separated)" aria-label="Note tags">
          <textarea id="noteInput" placeholder="Enter your note here..." aria-label="Note content"></textarea>
          <div id="charCount" aria-live="polite">0 characters, 0 words</div>
          <input type="text" id="customPromptInput" placeholder="Enter custom prompt or leave blank for default" aria-label="Custom AI prompt">
          <select id="aiActionSelect" aria-label="Select AI action">
            <option value="summarize">Summarize</option>
            <option value="generateIdeas">Generate Novel Ideas</option>
            <option value="extractWisdom">Extract Wisdom</option>
          </select>
        </div>
        <div id="preview" role="region" aria-label="Markdown preview"></div>
        <div id="summary" class="summary-section" role="region" aria-label="AI-generated summary"></div>
      </div>

      <div class="buttons">
        <button id="saveButton">Save Note</button>
        <button id="clearButton">Clear</button>
        <button id="deleteButton">Delete Note</button>
        <button id="togglePreviewButton">Toggle Preview</button>
        <button id="toggleGPTButton">Toggle GPT</button>
        <button id="performAIActionButton">Perform AI Action</button>
      </div>
    </div>
  </div>

  <script>
    // Utility functions
    const $ = (selector) => document.querySelector(selector);
    const $$ = (selector) => document.querySelectorAll(selector);

    // State management (in-memory)
    let notes = [];
    let currentNoteIndex = -1;

    // DOM elements
    const noteInput = $('#noteInput');
    const titleInput = $('#titleInput');
    const tagInput = $('#tagInput');
    const savedNotesList = $('#savedNotesList');
    const preview = $('#preview');
    const summary = $('#summary');
    const charCount = $('#charCount');
    const aiActionSelect = $('#aiActionSelect');
    const customPromptInput = $('#customPromptInput');
    const editorPreviewGPT = $('.editor-preview-gpt');

    // Functions
    function saveNote() {
      const title = titleInput.value.trim() || 'Untitled';
      const content = noteInput.value.trim();
      const tags = tagInput.value.split(',').map(tag => tag.trim()).filter(Boolean);
      const noteData = { 
        id: Date.now(), 
        title, 
        content, 
        tags, 
        timestamp: new Date().toISOString(),
        previewVisible: editorPreviewGPT.classList.contains('preview-visible'),
        gptVisible: editorPreviewGPT.classList.contains('gpt-visible')
      };

      if (currentNoteIndex > -1) {
        notes[currentNoteIndex] = { ...notes[currentNoteIndex], ...noteData };
      } else {
        notes.push(noteData);
        currentNoteIndex = notes.length - 1;
      }
      updateNotesUI();
    }

    function updateNotesUI() {
      savedNotesList.innerHTML = notes.map((note, index) => `
        <div class="saved-note" tabindex="0" role="listitem" data-index="${index}">
          <strong>${escapeHTML(note.title)}</strong>
          <p>${escapeHTML(note.content.substring(0, 50))}${note.content.length > 50 ? '...' : ''}</p>
        </div>
      `).join('');

      $$('.saved-note').forEach(note => {
        note.addEventListener('click', () => loadNoteToEditor(parseInt(note.dataset.index)));
        note.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            loadNoteToEditor(parseInt(note.dataset.index));
          }
        });
      });
    }

    function loadNoteToEditor(index) {
      const note = notes[index];
      titleInput.value = note.title;
      tagInput.value = note.tags.join(', ');
      noteInput.value = note.content;
      currentNoteIndex = index;
      updateCharCount();
      updatePreview();
      editorPreviewGPT.classList.toggle('preview-visible', note.previewVisible);
      editorPreviewGPT.classList.toggle('gpt-visible', note.gptVisible);
    }

    function clearInputs() {
      titleInput.value = '';
      tagInput.value = '';
      noteInput.value = '';
      currentNoteIndex = -1;
      updateCharCount();
      updatePreview();
      editorPreviewGPT.classList.remove('preview-visible', 'gpt-visible');
    }

    function updateCharCount() {
      const content = noteInput.value;
      const chars = content.length;
      const words = content.trim().split(/\s+/).filter(Boolean).length;
      charCount.textContent = `${chars} character${chars !== 1 ? 's' : ''}, ${words} word${words !== 1 ? 's' : ''}`;
    }

    function updatePreview() {
      const content = noteInput.value;
      preview.innerHTML = markdownToHTML(content);
    }

    function deleteNote() {
      if (currentNoteIndex > -1) {
        notes.splice(currentNoteIndex, 1);
        updateNotesUI();
        clearInputs();
      }
    }

    function togglePreview() {
      editorPreviewGPT.classList.toggle('preview-visible');
      editorPreviewGPT.classList.remove('gpt-visible');
      if (currentNoteIndex > -1) {
        notes[currentNoteIndex].previewVisible = editorPreviewGPT.classList.contains('preview-visible');
        notes[currentNoteIndex].gptVisible = false;
      }
    }

    function toggleGPT() {
      editorPreviewGPT.classList.toggle('gpt-visible');
      editorPreviewGPT.classList.remove('preview-visible');
      if (editorPreviewGPT.classList.contains('gpt-visible')) {
        performAIAction();
      }
      if (currentNoteIndex > -1) {
        notes[currentNoteIndex].gptVisible = editorPreviewGPT.classList.contains('gpt-visible');
        notes[currentNoteIndex].previewVisible = false;
      }
    }

    function performAIAction() {
      const noteContent = noteInput.value;
      const customPrompt = customPromptInput.value || 'Analyze the following text:';
      const action = aiActionSelect.value;

      const prompt = `${customPrompt}\n\n${noteContent}`;

      // Simulated AI response
      const aiResponse = `Simulated AI response for "${action}":\n\n${prompt.substring(0, 100)}...`;
      summary.innerHTML = markdownToHTML(aiResponse);
    }

    function escapeHTML(str) {
      return str.replace(/[&<>'"]/g, 
        tag => ({
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          "'": '&#39;',
          '"': '&quot;'
        }[tag] || tag)
      );
    }

    function markdownToHTML(markdown) {
      return markdown
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
        .replace(/\*(.*)\*/gim, '<em>$1</em>')
        .replace(/\n/gim, '<br>');
    }

    // Event listeners
    noteInput.addEventListener('input', () => {
      updateCharCount();
      updatePreview();
    });

    $('#saveButton').addEventListener('click', saveNote);
    $('#clearButton').addEventListener('click', clearInputs);
    $('#deleteButton').addEventListener('click', deleteNote);
    $('#togglePreviewButton').addEventListener('click', togglePreview);
    $('#toggleGPTButton').addEventListener('click', toggleGPT);
    $('#performAIActionButton').addEventListener('click', performAIAction);

    $('#searchInput').addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      $$('.saved-note').forEach(note => {
        const noteText = note.textContent.toLowerCase();
        note.style.display = noteText.includes(searchTerm) ? 'block' : 'none';
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.altKey && event.key === 'v') {
        event.preventDefault();
        togglePreview();
      } else if (event.altKey && event.key === 'g') {
        event.preventDefault();
        toggleGPT();
      }
    });

    // Initialize
    updateNotesUI();
    updateCharCount();
    updatePreview();
  </script>
</body>
</html>
```

<br>


**