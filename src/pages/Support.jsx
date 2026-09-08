import { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Seo from '../components/Seo';
import Icon from '../components/Icon';
import { Reveal } from '../components/Shared';
import { APP_STORE_URL, SUPPORT_EMAIL } from '../config';
import './pages.css';

// EmailJS config. The public key and service ID are safe to expose in the browser.
// Never put the EmailJS PRIVATE key in client code (it is for server-side use only).
const EMAILJS = {
  serviceId: 'service_xscmmfy',
  publicKey: 'UFz_hzZ47PlJHpFP4',
  notifyTemplateId: 'template_26vvcit',    // sends the submission details to you
  autoReplyTemplateId: 'template_y0214pd', // sends a confirmation to the person who submitted
};

export default function Support() {
  // status: 'idle' | 'sending' | 'sent' | 'error'
  const [status, setStatus] = useState('idle');
  const [touched, setTouched] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', store: '', topic: 'General question', message: '' });
  // Honeypot: real people never fill this (it is hidden). Bots usually do.
  const [botField, setBotField] = useState('');

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const canSubmit = form.name.trim() !== '' && emailValid;

  const submit = async () => {
    setTouched(true);
    if (botField) { setStatus('sent'); return; } // silently drop bot submissions
    if (!canSubmit || status === 'sending') return;
    setStatus('sending');

    const params = {
      from_name: form.name,
      from_email: form.email,
      reply_to: form.email,
      store_url: form.store,
      plan: form.topic,
      message: form.message,
    };
    const opts = { publicKey: EMAILJS.publicKey };

    try {
      // 1) Notify us with the submission details (critical).
      await emailjs.send(EMAILJS.serviceId, EMAILJS.notifyTemplateId, params, opts);
    } catch (err) {
      console.error('EmailJS notification send failed:', err);
      setStatus('error');
      return;
    }

    // 2) Send the submitter a confirmation (best effort; do not fail the form if this errors).
    try {
      await emailjs.send(EMAILJS.serviceId, EMAILJS.autoReplyTemplateId, params, opts);
    } catch (err) {
      console.warn('EmailJS confirmation send failed:', err);
    }

    setStatus('sent');
    setForm({ name: '', email: '', store: '', topic: 'General question', message: '' });
  };

  return (
    <>
      <Seo
        title="Support"
        description="Get help with AnotherDev shoppable video for Shopify. Email support, ask about plans, or request a custom feature for the Custom and Enterprise tier."
        path="/support"
      />

      <section className="phero center">
        <div className="container">
          <Reveal><span className="eyebrow">Support</span></Reveal>
          <Reveal as="h1" className="h-xl mt-s">We are here to help</Reveal>
          <Reveal><p className="lead mx-auto mt-s" style={{ textAlign: 'center' }}>Ask a question, get help with setup, or request a custom feature. We reply within a few hours on business days.</p></Reveal>
        </div>
      </section>

      <div className="lightzone">
        <section className="section--tight">
          <div className="container">
            <div className="contact-grid">
              <Reveal>
                <div className="contact-form">
                  <h3 className="h-md" style={{ marginBottom: 22 }}>Send us a message</h3>
                  <div className="form-field">
                    <label htmlFor="c-name">Name</label>
                    <input id="c-name" value={form.name} onChange={update('name')} placeholder="Jordan Lee" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="c-email">Email</label>
                    <input id="c-email" type="email" value={form.email} onChange={update('email')} placeholder="jordan@store.com" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="c-store">Store URL <span style={{ color: 'var(--slate)', fontWeight: 400 }}>(optional)</span></label>
                    <input id="c-store" value={form.store} onChange={update('store')} placeholder="yourstore.myshopify.com" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="c-topic">Topic</label>
                    <select id="c-topic" value={form.topic} onChange={update('topic')}>
                      <option>General question</option>
                      <option>Setup help</option>
                      <option>Billing or plans</option>
                      <option>Request a custom feature</option>
                      <option>Custom / Enterprise enquiry</option>
                      <option>Report a bug</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label htmlFor="c-msg">How can we help? <span style={{ color: 'var(--slate)', fontWeight: 400 }}>(optional)</span></label>
                    <textarea id="c-msg" rows="4" value={form.message} onChange={update('message')} placeholder="Tell us about your store and what you need…" />
                  </div>

                  {/* Honeypot: visually hidden and off the tab order. */}
                  <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }}>
                    <label htmlFor="c-company">Company (leave blank)</label>
                    <input id="c-company" name="company" tabIndex={-1} autoComplete="off" value={botField} onChange={(e) => setBotField(e.target.value)} />
                  </div>

                  <button className="btn btn--primary" onClick={submit} disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending…' : 'Send message'}
                  </button>
                  {touched && !canSubmit && status !== 'sending' && (
                    <p className="form-note" style={{ color: 'var(--coral)' }}>
                      Please add your name and a valid email so we can reply.
                    </p>
                  )}
                  <p className="form-note" style={{ color: 'var(--slate)', fontSize: '.88rem' }}>
                    We reply within a few hours on business days. We never share your details.
                  </p>
                  {status === 'sent' && <p className="form-note">Thanks! Your message is on its way, we’ll be in touch shortly.</p>}
                  {status === 'error' && (
                    <p className="form-note" style={{ color: 'var(--coral)' }}>
                      Something went wrong sending your message. Please email us directly at{' '}
                      <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: 'inherit' }}>{SUPPORT_EMAIL}</a>.
                    </p>
                  )}
                </div>
              </Reveal>

              <Reveal delay={100}>
                <aside className="contact-aside">
                  <h3 className="h-md">Other ways to reach us</h3>
                  <p>Prefer email? That’s the fastest way to reach us, we reply within a few hours.</p>
                  <ul>
                    <li><Icon name="mail" size={18} /><a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: 'inherit' }}>{SUPPORT_EMAIL}</a></li>
                    <li><Icon name="tag" size={18} />Custom plan enquiry: email us with the subject “Custom plan enquiry”</li>
                    <li><Icon name="globe" size={18} />AnotherDev: <a href="https://anotherdev.in" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>anotherdev.in</a></li>
                  </ul>
                  <p style={{ marginTop: 18 }}>
                    Looking for answers first? See the <Link to="/faq" className="post__link">FAQ</Link>, or read our{' '}
                    <Link to="/privacy" className="post__link">Privacy policy</Link> and{' '}
                    <Link to="/terms" className="post__link">Terms</Link>.
                  </p>
                  <a href={APP_STORE_URL} className="btn btn--primary mt-m" style={{ width: '100%', justifyContent: 'center' }}>Add to Shopify, free plan available</a>
                </aside>
              </Reveal>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
