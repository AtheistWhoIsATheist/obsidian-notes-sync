---
title: PHASE_2_app
created: 2026-01-06
updated:
tags:
  - code
  - AiPhil
  - perplexity
backlink: "[["
description:
---
// PROFESSOR NIHIL: PHASE 2 - COMPLETE REACT UI
// Dark Theme + Neumorphic + Glassmorphic
// Status: Production-Ready
// Date: January 6, 2026

import React, { useState, useRef, useEffect } from 'react';
import './PHASE_2_UI.css';

const ProfessorNihilApp = () => {
  // State Management
  const [user, setUser] = useState(null);
  const [authMode, setAuthMode] = useState('login');
  const [conversations, setConversations] = useState([]);
  const [activeConversation, setActiveConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [streaming, setStreaming] = useState(false);
  const messagesEndRef = useRef(null);

  const API_URL = 'http://localhost:5000/api';

  // Authentication
  const handleAuth = async (username, email, password) => {
    try {
      const endpoint = authMode === 'login' 
        ? '/auth/login' 
        : '/auth/register';
      
      const payload = authMode === 'login'
        ? { username, password }
        : { username, email, password };

      const res = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('nihil_token', data.token);
        setUser(data.user);
        loadConversations();
        loadDocuments();
      }
    } catch (error) {
      console.error('Auth error:', error);
    }
  };

  // Load conversations
  const loadConversations = async () => {
    const token = localStorage.getItem('nihil_token');
    if (!token) return;

    try {
      const res = await fetch(`${API_URL}/conversations`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      setConversations(data.conversations || []);
    } catch (error) {
      console.error('Load conversations error:', error);
    }
  };

  // Load documents
  const loadDocuments = async () => {
    const token = localStorage.getItem('nihil_token');
    if (!token) return;

    try {
      const res = await fetch(`${API_URL}/documents`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      setDocuments(data.documents || []);
    } catch (error) {
      console.error('Load documents error:', error);
    }
  };

  // Create new conversation
  const createConversation = async () => {
    const token = localStorage.getItem('nihil_token');
    try {
      const res = await fetch(`${API_URL}/conversations`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          title: `Conversation ${new Date().toLocaleTimeString()}`,
          dimensional_matrix: { chaos: 7, void: 8, transcendence: 6 },
          meta_process_active: true
        })
      });
      const data = await res.json();
      setActiveConversation(data.conversation.id);
      setMessages([]);
      loadConversations();
    } catch (error) {
      console.error('Create conversation error:', error);
    }
  };

  // Load conversation messages
  const loadMessages = async (conversationId) => {
    const token = localStorage.getItem('nihil_token');
    try {
      const res = await fetch(`${API_URL}/conversations/${conversationId}/messages`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      setMessages(data.messages || []);
    } catch (error) {
      console.error('Load messages error:', error);
    }
  };

  // Send message with document context
  const sendMessage = async () => {
    if (!inputValue.trim() || !activeConversation) return;

    const token = localStorage.getItem('nihil_token');
    const messageContent = inputValue;
    setInputValue('');
    setStreaming(true);

    try {
      const res = await fetch(
        `${API_URL}/conversations/${activeConversation}/messages/smart`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ content: messageContent })
        }
      );

      const data = await res.json();
      
      setMessages(prev => [
        ...prev,
        { role: 'user', content: messageContent, created_at: new Date() },
        { role: 'assistant', content: data.assistant_message.content, created_at: new Date() }
      ]);
    } catch (error) {
      console.error('Send message error:', error);
    } finally {
      setStreaming(false);
    }
  };

  // Upload document
  const handleDocumentUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const token = localStorage.getItem('nihil_token');
    const formData = new FormData();
    formData.append('file', file);

    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/documents/upload`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: formData
      });

      if (res.ok) {
        loadDocuments();
      }
    } catch (error) {
      console.error('Upload error:', error);
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem('nihil_token');
    setUser(null);
    setConversations([]);
    setMessages([]);
    setDocuments([]);
  };

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Render Auth Screen
  if (!user) {
    return <AuthScreen onAuth={handleAuth} authMode={authMode} setAuthMode={setAuthMode} />;
  }

  // Render Main App
  return (
    <div className="app-container">
      {/* Header */}
      <div className="header">
        <div className="header-logo">
          <span className="header-logo-icon">🔱</span>
          <span>Professor Nihil</span>
        </div>
        <div className="header-actions">
          <button className="btn btn-primary" onClick={createConversation}>
            + New Chat
          </button>
          <button className="btn" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      {/* Sidebar */}
      <div className="sidebar">
        {/* Conversations */}
        <div className="sidebar-section">
          <div className="sidebar-title">Conversations</div>
          {conversations.map(conv => (
            <div
              key={conv.id}
              className={`sidebar-item ${activeConversation === conv.id ? 'active' : ''}`}
              onClick={() => {
                setActiveConversation(conv.id);
                loadMessages(conv.id);
              }}
            >
              {conv.title}
            </div>
          ))}
        </div>

        {/* Documents */}
        <div className="sidebar-section">
          <div className="sidebar-title">Documents ({documents.length})</div>
          {documents.slice(0, 5).map(doc => (
            <div key={doc.id} className="sidebar-item">
              📄 {doc.filename}
            </div>
          ))}
          {documents.length > 5 && (
            <div className="sidebar-item">+{documents.length - 5} more</div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="main">
        <div className="content">
          {/* Chat Messages */}
          <div className="chat-container">
            <div className="chat-messages">
              {messages.length === 0 ? (
                <div style={{ textAlign: 'center', color: '#a1a8b3', paddingTop: '40px' }}>
                  <h2 style={{ color: '#f5f7fa' }}>Welcome to the Void</h2>
                  <p>Begin your philosophical journey with Professor Nihil</p>
                </div>
              ) : (
                messages.map((msg, idx) => (
                  <div key={idx} className={`message ${msg.role}`}>
                    <div className="message-content">
                      {msg.content}
                      <div className="message-timestamp">
                        {new Date(msg.created_at).toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                ))
              )}
              {streaming && (
                <div className="message assistant">
                  <div className="message-content">
                    <div className="loading-spinner"></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            {activeConversation && (
              <div className="chat-input-area">
                <input
                  type="text"
                  className="chat-input"
                  placeholder="Ask Professor Nihil..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  disabled={streaming}
                />
                <button 
                  className="btn-send"
                  onClick={sendMessage}
                  disabled={streaming || !inputValue.trim()}
                >
                  {streaming ? '...' : '→'}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Panel - Documents */}
        <div className="panel-right">
          <div className="card-header">
            <h3 className="card-title">Documents</h3>
          </div>

          {/* Upload Area */}
          <div style={{ marginBottom: '24px' }}>
            <label className="document-card">
              <input
                type="file"
                accept=".txt,.md"
                onChange={handleDocumentUpload}
                style={{ display: 'none' }}
              />
              <div className="document-icon">📤</div>
              <div className="document-title">Upload</div>
              <div className="document-meta">Drag or click</div>
            </label>
          </div>

          {/* Document List */}
          {documents.map(doc => (
            <div key={doc.id} className="card" style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>📄</div>
              <div style={{ fontWeight: 600, marginBottom: '4px', fontSize: '0.9rem' }}>
                {doc.filename}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#a1a8b3', marginBottom: '8px' }}>
                {doc.chunk_count} chunks
              </div>
              {doc.tags && doc.tags.length > 0 && (
                <div>
                  {doc.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Auth Screen Component
const AuthScreen = ({ onAuth, authMode, setAuthMode }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAuth(username, email, password);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f1419 0%, #1a1f2e 100%)',
      padding: '20px'
    }}>
      <div className="card" style={{ maxWidth: '400px', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🔱</div>
          <h1 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>Professor Nihil</h1>
          <p style={{ color: '#a1a8b3' }}>AI Philosopher Engine v2.0</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {authMode === 'register' && (
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            {authMode === 'login' ? 'Enter the Void' : 'Create Account'}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button
            className="btn"
            onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
            style={{ background: 'transparent' }}
          >
            {authMode === 'login' ? 'Need an account?' : 'Already have an account?'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfessorNihilApp;
