import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import './ChatBot.css';

const GREETING = 'Hi! I can answer questions about AnotherDev and our Shopify apps, Shoppable Video and Search and Filters, plus our web development. What would you like to know?';

const SUGGESTIONS = [
  'What does Shoppable Video do?',
  'How much does Search and Filters cost?',
  'Which themes do you support?',
  'Do you build websites?',
];

// Turn internal paths like /shoppable-video into clickable router links.
function renderText(text) {
  const parts = String(text).split(/(\/[a-z][a-z0-9-]*(?:\/[a-z0-9-]+)*)/g);
  return parts.map((p, i) =>
    /^\/[a-z]/.test(p)
      ? <Link key={i} to={p} className="cbot__link">{p}</Link>
      : <span key={i}>{p}</span>,
  );
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]); // {role:'user'|'assistant', content}
  const [input, setInput] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending'
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, status, open]);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const send = async (text) => {
    const content = (text ?? input).trim();
    if (!content || status === 'sending') return;

    const nextMessages = [...messages, { role: 'user', content }];
    setMessages(nextMessages);
    setInput('');
    setStatus('sending');

    let reply;
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      });
      if (res.status === 503) {
        reply = 'The live assistant is not set up yet. In the meantime, you can reach the team through the /support page and we will reply within a few hours.';
      } else if (!res.ok) {
        reply = 'Sorry, I am having trouble right now. Please try again in a moment, or contact us at /support.';
      } else {
        const data = await res.json();
        reply = data.reply || 'Sorry, I could not generate a reply. You can reach us at /support.';
      }
    } catch {
      reply = 'Sorry, I could not reach the assistant. Please check your connection, or contact us at /support.';
    }

    setMessages((m) => [...m, { role: 'assistant', content: reply }]);
    setStatus('idle');
  };

  const onSubmit = (e) => { e.preventDefault(); send(); };

  return (
    <>
      <button
        className={`cbot__launch ${open ? 'is-open' : ''}`}
        aria-label={open ? 'Close chat' : 'Open chat assistant'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <Icon name={open ? 'arrow' : 'chat'} size={22} />
      </button>

      {open && (
        <div className="cbot" role="dialog" aria-label="AnotherDev assistant">
          <div className="cbot__head">
            <span className="cbot__avatar"><img src="/logo.svg" alt="" width="26" height="26" /></span>
            <div className="cbot__title">
              <strong>AnotherDev assistant</strong>
              <em>Asks about our apps and website</em>
            </div>
            <button className="cbot__close" aria-label="Close chat" onClick={() => setOpen(false)}>
              <Icon name="arrow" size={18} />
            </button>
          </div>

          <div className="cbot__body" ref={bodyRef}>
            <div className="cbot__msg cbot__msg--bot">
              <p>{renderText(GREETING)}</p>
            </div>

            {messages.length === 0 && (
              <div className="cbot__suggest">
                {SUGGESTIONS.map((s) => (
                  <button key={s} className="cbot__chip" onClick={() => send(s)}>{s}</button>
                ))}
              </div>
            )}

            {messages.map((m, i) => (
              <div key={i} className={`cbot__msg ${m.role === 'user' ? 'cbot__msg--user' : 'cbot__msg--bot'}`}>
                <p>{m.role === 'assistant' ? renderText(m.content) : m.content}</p>
              </div>
            ))}

            {status === 'sending' && (
              <div className="cbot__msg cbot__msg--bot">
                <p className="cbot__typing" aria-label="Assistant is typing"><span /><span /><span /></p>
              </div>
            )}
          </div>

          <form className="cbot__input" onSubmit={onSubmit}>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about our apps…"
              aria-label="Message"
            />
            <button type="submit" className="cbot__send" disabled={status === 'sending' || !input.trim()} aria-label="Send">
              <Icon name="arrow" size={18} strokeWidth={2.2} />
            </button>
          </form>

          <p className="cbot__foot">Answers cover AnotherDev and our apps only.</p>
        </div>
      )}
    </>
  );
}
