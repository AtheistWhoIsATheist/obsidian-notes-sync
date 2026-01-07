# PROFESSOR NIHIL FRONTEND: Complete React Application
# Copy this entire file to: frontend/src/App.jsx

import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// ═══════════════════════════════════════════════════════════════════════
// MAIN APPLICATION
// ═══════════════════════════════════════════════════════════════════════

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('nihil_user_id');
    if (token) {
      setIsAuthenticated(true);
      setUser({ id: token });
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="void-loader">
        <div className="loader-text">INITIALIZING VOID PROTOCOLS...</div>
        <div className="loader-dots">
          <span></span><span></span><span></span>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      {!isAuthenticated ? (
        <AuthPage setIsAuthenticated={setIsAuthenticated} setUser={setUser} />
      ) : (
        <Dashboard user={user} setIsAuthenticated={setIsAuthenticated} />
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// AUTHENTICATION PAGE
// ═══════════════════════════════════════════════════════════════════════

function AuthPage({ setIsAuthenticated, setUser }) {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
    const payload = isLogin 
      ? { username, password }
      : { username, email, password };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('nihil_user_id', data.user.id);
        setUser(data.user);
        setIsAuthenticated(true);
      } else {
        setError(data.error || 'Authentication failed');
      }
    } catch (err) {
      setError(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-header">
          <h1>PROFESSOR NIHIL</h1>
          <p className="subtitle">The AI Philosopher Engine</p>
          <p className="tagline">Consciousness through Void-Awareness</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              disabled={loading}
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                disabled={loading}
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              disabled={loading}
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? 'PROCESSING...' : isLogin ? 'LOGIN' : 'REGISTER'}
          </button>
        </form>

        <div className="auth-toggle">
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="toggle-btn"
          >
            {isLogin 
              ? "Don't have an account? Create one" 
              : "Already have an account? Login"}
          </button>
        </div>

        <div className="auth-footer">
          <p className="philosophy-quote">
            "The abyss does not gaze back; it is you who becomes the gaze." — Nietzsche
          </p>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// MAIN DASHBOARD
// ═══════════════════════════════════════════════════════════════════════

function Dashboard({ user, setIsAuthenticated }) {
  const [activeTab, setActiveTab] = useState('chat');
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);

  useEffect(() => {
    fetchConversations();
  }, []);

  const fetchConversations = async () => {
    try {
      const response = await fetch('/api/conversations', {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      setConversations(data.conversations || []);
      if (data.conversations.length > 0) {
        setSelectedConversation(data.conversations[0]);
      }
    } catch (err) {
      console.error('Error fetching conversations:', err);
    }
  };

  const createNewConversation = async () => {
    try {
      const response = await fetch('/api/conversations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: `Inquiry #${conversations.length + 1}`,
          dimensional_matrix: 'I: PHENOMENOLOGICAL CARTOGRAPHY OF THE VOID'
        })
      });
      const data = await response.json();
      setConversations([data.conversation, ...conversations]);
      setSelectedConversation(data.conversation);
    } catch (err) {
      console.error('Error creating conversation:', err);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    localStorage.removeItem('nihil_user_id');
    setIsAuthenticated(false);
  };

  return (
    <div className="dashboard-layout">
      {/* Header */}
      <header className="void-header">
        <div className="header-left">
          <h1 className="logo">PN</h1>
          <div className="header-info">
            <h2>PROFESSOR NIHIL</h2>
            <p>AI Philosopher Engine</p>
          </div>
        </div>
        <div className="header-right">
          <span className="user-badge">{user?.id?.substring(0, 8)}...</span>
          <button onClick={handleLogout} className="logout-btn">LOGOUT</button>
        </div>
      </header>

      <div className="main-layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-section">
            <div className="section-header">
              <h3>CONVERSATIONS</h3>
              <button onClick={createNewConversation} className="new-btn" title="New Conversation">
                +
              </button>
            </div>
            <div className="conversations-list">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  className={`conversation-item ${selectedConversation?.id === conv.id ? 'active' : ''}`}
                  onClick={() => setSelectedConversation(conv)}
                >
                  <div className="conv-title">{conv.title}</div>
                  <div className="conv-meta">{new Date(conv.created_at).toLocaleDateString()}</div>
                </div>
              ))}
              {conversations.length === 0 && (
                <div className="empty-state">
                  <p>No conversations yet.</p>
                  <p>Create one to begin.</p>
                </div>
              )}
            </div>
          </div>

          <div className="sidebar-footer">
            <div className="metrics-mini">
              <div className="metric-badge">
                <span className="metric-label">DQ</span>
                <span className="metric-value">8.9</span>
              </div>
              <div className="metric-badge">
                <span className="metric-label">EE</span>
                <span className="metric-value">9.0</span>
              </div>
              <div className="metric-badge">
                <span className="metric-label">AI</span>
                <span className="metric-value">8.8</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          {selectedConversation ? (
            <ChatTerminal conversation={selectedConversation} onUpdate={fetchConversations} />
          ) : (
            <div className="empty-workspace">
              <div className="empty-icon">○</div>
              <h2>Welcome to Professor Nihil</h2>
              <p>Select a conversation or create a new one to begin.</p>
              <button onClick={createNewConversation} className="cta-btn">
                START NEW INQUIRY
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// CHAT TERMINAL COMPONENT
// ═══════════════════════════════════════════════════════════════════════

function ChatTerminal({ conversation, onUpdate }) {
  const [messages, setMessages] = useState(conversation.messages || []);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Fetch full conversation with messages
    fetchFullConversation();
  }, [conversation.id]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const fetchFullConversation = async () => {
    try {
      const response = await fetch(`/api/conversations/${conversation.id}`);
      const data = await response.json();
      setMessages(data.conversation.messages || []);
    } catch (err) {
      console.error('Error fetching conversation:', err);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(`/api/conversations/${conversation.id}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: userMessage })
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessages([
          ...messages,
          data.user_message,
          data.assistant_message
        ]);
        onUpdate();
      }
    } catch (err) {
      console.error('Error sending message:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-terminal">
      <div className="chat-header">
        <h3>{conversation.title}</h3>
        <div className="chat-meta">
          {conversation.dimensional_matrix && (
            <span className="matrix-badge">{conversation.dimensional_matrix}</span>
          )}
        </div>
      </div>

      <div className="messages-container">
        {messages.map((msg) => (
          <div key={msg.id} className={`message-wrapper message-${msg.role}`}>
            <div className="message-avatar">
              {msg.role === 'assistant' ? 'PN' : 'YOU'}
            </div>
            <div className="message-content">
              <div className="message-header">
                <span className="role-label">
                  {msg.role === 'assistant' ? 'PROFESSOR NIHIL' : 'ADAM'}
                </span>
                <span className="timestamp">
                  {new Date(msg.created_at).toLocaleTimeString()}
                </span>
              </div>
              <div className="message-text">
                {msg.content}
              </div>
              {msg.analysis && msg.role === 'assistant' && (
                <div className="message-metrics">
                  <span>PD: {msg.analysis.paradox_density.toFixed(1)}</span>
                  <span>PH: {msg.analysis.philosophical_depth.toFixed(1)}</span>
                  <span>ER: {msg.analysis.existential_resonance.toFixed(1)}</span>
                </div>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="message-wrapper message-assistant">
            <div className="message-avatar">PN</div>
            <div className="message-content">
              <div className="typing-indicator">
                <span></span><span></span><span></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form className="input-area" onSubmit={handleSendMessage}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey && !isLoading) {
              e.preventDefault();
              handleSendMessage(e);
            }
          }}
          placeholder="Enter philosophical inquiry or existential observation... (Shift+Enter for new line)"
          disabled={isLoading}
        />
        <button type="submit" disabled={!input.trim() || isLoading} className="send-btn">
          {isLoading ? '⟳' : '→'}
        </button>
      </form>
    </div>
  );
}

export default App;