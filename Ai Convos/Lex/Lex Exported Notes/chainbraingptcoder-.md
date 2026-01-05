# ChainBrainGPTCoder 

Great! I'll integrate the new tab functionality directly into your existing code. This will include updating the HTML, CSS, and JavaScript sections accordingly. Here’s how everything comes together:

### Complete Integrated Code

```html

\<!DOCTYPE html\>

\<html lang="en"\>

\<head\>

\<meta charset="UTF-8"\>

\<meta name="viewport" content="width=device-width, initial-scale=1.0"\>

\<title\>Complete Note App with Tabs\</title\>

\<style\>

body {

font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;

background-color: [[1a1a1a]];

color: [[e0e0e0]];

margin: 0;

padding: 20px;

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

background-color: [[1f1f1f]];

padding: 10px;

border-radius: 5px;

overflow-hidden;

box-shadow: inset 0 2px 4px rgba(0,0,0,0.1), 0 1px 2px rgba(255,255,255,0.05);

}

.main-content {

flex-grow: 1;

display: flex;

flex-direction: column;

}

.editor-preview {

display: flex;

gap: 20px;

flex-grow: 1;

overflow: hidden;

}

.tabs {

display: flex;

flex-direction: column;

width: 100%;

}

.tab-buttons {

display: flex;

gap: 10px;

margin-bottom: 10px;

}

.tab-buttons button {

background-color: [[2a2a2a]];

color: [[e0e0e0]];

border: none;

padding: 10px;

border-radius: 5px;

cursor: pointer;

}

.tab-buttons button.active {

background-color: [[5a5a5a]];

}

.tab-content {

flex-grow: 1;

overflow-y: auto;

height: 100%;

}

.tab {

display: none;

flex-direction: column;

}

.tab.active {

display: flex;

}

input[type="text"], textarea {

width: 100%;

background: linear-gradient(to bottom, #222222, [[2a2a2a]]);

color: [[e0e0e0]];

border: 1px solid #333;

padding: 10px;

border-radius: 5px;

margin-bottom: 10px;

box-sizing: border-box;

box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);

font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;

font-size: 20px;

}

textarea {

flex-grow: 1;

resize: none;

}

.buttons {

display: flex;

justify-content: flex-start;

margin-top: 10px;

}

button {

background-color: [[2a2a2a]];

color: [[e0e0e0]];

border: none;

padding: 10px;

border-radius: 5px;

cursor: pointer;

margin-right: 10px;

transition: background-color 0.3s;

}

button:hover {

background-color: [[5a5a5a]];

}

[[charCount]] {

margin-bottom: 10px;

}

.category {

margin-bottom: 10px;

}

.category-header {

background-color: [[2c2c2c]];

padding: 5px;

border-radius: 3px;

cursor: pointer;

}

.category-notes {

display: none;

padding-left: 10px;

}

.saved-note {

background-color: #282828;

padding: 5px;

margin-top: 5px;

border-radius: 3px;

cursor: pointer;

}

[[preview]] {

flex: 0;

background-color: #242424;

padding: 10px;

border-radius: 5px;

overflow-y: auto;

transition: flex 0.3s ease;

box-shadow: inset 0 2px 4px rgba(0,0,0,0.1), 0 1px 2px rgba(255,255,255,0.05);

font-size: 14px;

line-height: 1.5;

}

.preview-visible [[preview]] {

flex: 1;

}

\</style\>

\</head\>

\<body\>

\<div class="container"\>

\<div class="saved-notes"\>

\<h2\>Saved Notes\</h2\>

\<input type="text" id="searchInput" placeholder="Search notes..."\>

\<div id="savedNotesList"\>\</div\>

\</div\>

\<div class="main-content"\>

\<div class="editor-preview"\>

\<div class="tabs"\>

\<div class="tab-buttons"\>

\<button id="newTabButton"\>+ New Tab\</button\>

\</div\>

\<div class="tab-content"\>

\<div class="tab active" data-tab-id="1"\>

\<input type="text" id="titleInput" placeholder="Note Title"\>

\<input type="text" id="tagInput" placeholder="Tags (comma-separated)"\>

\<textarea id="noteInput" placeholder="Enter your note here..."\>\</textarea\>

\<div id="charCount"\>0 characters, 0 words\</div\>

\</div\>

\</div\>

\</div\>

\<div id="preview"\>\</div\>

\</div\>

\<div class="buttons"\>

\<button id="saveButton"\>Save Note\</button\>

\<button id="clearButton"\>Clear\</button\>

\<button id="deleteButton"\>Delete Note\</button\>

\<button id="togglePreviewButton"\>Toggle Preview\</button\>

\<button id="exportButton"\>Export Notes\</button\>

\</div\>

\</div\>

\</div\>

\<script\>

const noteInput = document.getElementById('noteInput');

const titleInput = document.getElementById('titleInput');

const tagInput = document.getElementById('tagInput');

const saveButton = document.getElementById('saveButton');

const clearButton = document.getElementById('clearButton');

const deleteButton = document.getElementById('deleteButton');

const charCount = document.getElementById('charCount');

const savedNotesList = document.getElementById('savedNotesList');

const searchInput = document.getElementById('searchInput');

const preview = document.getElementById('preview');

const togglePreviewButton = document.getElementById('togglePreviewButton');

const editorPreview = document.querySelector('.editor-preview');

const exportButton = document.getElementById('exportButton');

let notes = [];

let currentNoteIndex = -1;

function safeStorage(operation, key, value) {

try {

if (operation === 'get') {

return localStorage.getItem(key);

} else if (operation === 'set') {

localStorage.setItem(key, value);

}

} catch (e) {

console.warn('localStorage is not available:', e);

return null;

}

}

function loadNotes() {

const storedNotes = safeStorage('get', 'notes');

notes = storedNotes ? JSON.parse(storedNotes) : [];

renderSavedNotes();

}

function saveNotes() {

safeStorage('set', 'notes', JSON.stringify(notes));

}

function updateCharCount() {

const currentTab = document.querySelector('.tab.active');

const content = currentTab.querySelector('textarea').value;

const chars = content.length;

const words = content.trim() === '' ? 0 : content.trim().split(/\s+/).length;

currentTab.querySelector('.charCount').textContent = `${chars} character${chars !== 1 ? 's' : ''}, ${words} word${words !== 1 ? 's' : ''}`;

}

function saveNote() {

const currentTab = document.querySelector('.tab.active');

const title = currentTab.querySelector('input[type="text"]').value.trim();

const content = currentTab.querySelector('textarea').value.trim();

const tags = currentTab.querySelector('input[type="text"] + input[type="text"]').value.split(',').map(tag =\> tag.trim()).filter(tag =\> tag);

if (content) {

if (currentNoteIndex \> -1) {

notes[currentNoteIndex] = { title, content, tags };

} else {

notes.push({ title, content, tags });

currentNoteIndex = notes.length - 1;

}

saveNotes();

renderSavedNotes();

console.log('Note saved');

}

}

function clearInputs() {

const currentTab = document.querySelector('.tab.active');

currentTab.querySelector('input[type="text"]').value = '';

currentTab.querySelector('input[type="text"] + input[type="text"]').value = '';

currentTab.querySelector('textarea').value = '';

currentTab.querySelector('.charCount').textContent = '0 characters, 0 words';

currentNoteIndex = -1;

updatePreview();

}

function deleteNote() {

if (currentNoteIndex \> -1) {

notes.splice(currentNoteIndex, 1);

saveNotes();

clearInputs();

renderSavedNotes();

}

}

function renderSavedNotes(searchTerm = '') {

savedNotesList.innerHTML = '';

const categories = {};

notes.forEach((note, index) =\> {

const noteTitle = note.title || 'Untitled';

const noteContent = note.content || '';

const noteTags = note.tags || [];

if (noteTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||

noteContent.toLowerCase().includes(searchTerm.toLowerCase()) ||

noteTags.some(tag =\> tag.toLowerCase().includes(searchTerm.toLowerCase()))) {

const category = noteTags[0] || 'Uncategorized';

if (!categories[category]) {

categories[category] = [];

}

categories[category].push({ title: noteTitle, index });

}

});

Object.keys(categories).sort().forEach(category =\> {

const categoryDiv = document.createElement('div');

categoryDiv.classList.add('category');

const categoryHeader = document.createElement('div');

categoryHeader.classList.add('category-header');

categoryHeader.textContent = category;

categoryHeader.addEventListener('click', () =\> {

categoryNotes.style.display = categoryNotes.style.display === 'none' ? 'block' : 'none';

});

const categoryNotes = document.createElement('div');

categoryNotes.classList.add('category-notes');

categories[category].forEach(note =\> {

const noteElement = document.createElement('div');

noteElement.classList.add('saved-note');

noteElement.textContent = note.title;

noteElement.addEventListener('click', () =\> loadNoteInTab(note.index));

categoryNotes.appendChild(noteElement);

});

categoryDiv.appendChild(categoryHeader);

categoryDiv.appendChild(categoryNotes);

savedNotesList.appendChild(categoryDiv);

});

}

function loadNoteInTab(index) {

const note = notes[index];

currentNoteIndex = index;

const currentTab = document.querySelector('.tab.active');

currentTab.querySelector('input[type="text"]').value = note.title || '';

currentTab.querySelector('input[type="text"] + input[type="text"]').value = (note.tags || []).join(', ');

currentTab.querySelector('textarea').value = note.content || '';

updateCharCount();

updatePreview();

}

function updatePreview() {

const currentTab = document.querySelector('.tab.active');

const content = currentTab.querySelector('textarea').value;

const formattedContent = content

.replace(/#{1,6}\s+(.+)/g, (match, p1, offset) =\> {

const level = match.trim().split(' ')[0].length;

return `<h${level}>${p1}</h${level}>`;

})

.replace(/\*\*(.+?)\*\*/g, '\<strong\>$1\</strong\>')

.replace(/\*(.+?)\*/g, '\<em\>$1\</em\>')

.replace(/`(.+?)`/g, '\<code\>$1\</code\>')

.replace(/^---$/gm, '\<hr\>')

.replace(/\n/g, '\<br\>');

preview.innerHTML = formattedContent;

const headers = preview.querySelectorAll('h1, h2, h3, h4, h5, h6');

headers.forEach(header =\> {

header.style.marginTop = '0.5em';

header.style.marginBottom = '0.3em';

header.style.lineHeight = '1.0';

});

const paragraphs = preview.querySelectorAll('p');

paragraphs.forEach(p =\> {

p.style.marginTop = '0.3em';

p.style.marginBottom = '0.3em';

});

}

function togglePreview() {

editorPreview.classList.toggle('preview-visible');

}

document.addEventListener('keydown', function(event) {

if (event.altKey && event.key === 'v') {

event.preventDefault();

togglePreview();

}

});

function exportNotes() {

const exportContent = notes.map(note =\>

`Title: ${note.title || 'Untitled'}\nTags: ${note.tags.join(', ')}\n\n${note.content}\n\n---\n\n`

).join('');

const blob = new Blob([exportContent], { type: 'text/plain' });

const url = URL.createObjectURL(blob);

const a = document.createElement('a');

a.href = url;

a.download = 'exported\_notes.txt';

a.click();

URL.revokeObjectURL(url);

}

function insertText(before, after, defaultText) {

const currentTab = document.querySelector('.tab.active');

const noteInput = currentTab.querySelector('textarea');

const start = noteInput.selectionStart;

const end = noteInput.selectionEnd;

const selectedText = noteInput.value.substring(start, end);

const replacement = before + (selectedText || defaultText) + after;

noteInput.value = noteInput.value.substring(0, start) + replacement + noteInput.value.substring(end);

noteInput.focus();

noteInput.setSelectionRange(start + before.length, start + replacement.length - after.length);

updatePreview();

}

function handleKeyboardShortcuts(e) {

const currentTab = document.querySelector('.tab.active');

const noteInput = currentTab.querySelector('textarea');

if (e.ctrlKey || e.metaKey) {

switch (e.key.toLowerCase()) {

case 'b':

e.preventDefault();

insertText('\*\*', '\*\*', 'bold text');

break;

case 'i':

e.preventDefault();

insertText('\*', '\*', 'italic text');

break;

}

} else if (e.key === '#') {

const currentPosition = noteInput.selectionStart;

const currentLine = noteInput.value.substring(0, currentPosition).split('\n').pop();

const afterCursor = noteInput.value.substring(currentPosition);

if (currentLine === '') {

return;

}

if (/^#+$/.test(currentLine)) {

return;

}

if (/^#+\s/.test(currentLine)) {

e.preventDefault();

const newLine = '#' + currentLine;

const beforeCursor = noteInput.value.substring(0, currentPosition - currentLine.length);

noteInput.value = beforeCursor + newLine + afterCursor;

noteInput.setSelectionRange(currentPosition + 1, currentPosition + 1);

} else {

e.preventDefault();

const newLine = '# ' + currentLine;

const beforeCursor = noteInput.value.substring(0, currentPosition - currentLine.length);

noteInput.value = beforeCursor + newLine + afterCursor;

noteInput.setSelectionRange(currentPosition + 2, currentPosition + 2);

}

updatePreview();

}

}

saveButton.addEventListener('click', saveNote);

clearButton.addEventListener('click', clearInputs);

deleteButton.addEventListener('click', deleteNote);

searchInput.addEventListener('input', (e) =\> renderSavedNotes(e.target.value));

document.querySelector('.tab-content').addEventListener('input', updateCharCount);

document.querySelector('.tab-content').addEventListener('keydown', handleKeyboardShortcuts);

togglePreviewButton.addEventListener('click', togglePreview);

exportButton.addEventListener('click', exportNotes);

loadNotes();

updateCharCount();

\</script\>

\</body\>

\</html\>

