import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Seo from '../components/Seo';
import { Reveal } from '../components/Shared';
import './pages.css';

const SUPPORT_EMAIL = 'armaanpal1996@gmail.com';

// EmailJS config. The public key and service ID are safe to expose in the browser.
// Never put the EmailJS PRIVATE key in client code (it is for server-side use only).
// Paste the two Template IDs from your EmailJS dashboard below.
const EMAILJS = {
  serviceId: 'service_xscmmfy',
  publicKey: 'UFz_hzZ47PlJHpFP4',
  notifyTemplateId: 'template_26vvcit',    // sends the submission details to you
  autoReplyTemplateId: 'template_y0214pd', // sends a confirmation to the person who submitted
};

export default function Contact() {
  // status: 'idle' | 'sending' | 'sent' | 'error'
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', store: '', plan: 'Growth', message: '' });

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async () => {
    if (!form.name || !form.email || status === 'sending') return;
    setStatus('sending');

    const params = {
      from_name: form.name,
      from_email: form.email,
      reply_to: form.email,
      store_url: form.store,
      plan: form.plan,
      message: form.message,
    };
    const opts = { publicKey: EMAILJS.publicKey };

    try {
      // 1) Notify you with the submission details (critical).
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
    setForm({ name: '', email: '', store: '', plan: 'Growth', message: '' });
  };

  return (
    <>
      <Seo
        title="Contact"
        description="Talk to the Another Shoppable Video team about shoppable video for your Shopify store. Ask about plans, enquire about a Custom setup, or get onboarding help."
        path="/contact"
      />

      <section className="phero center">
        <div className="container">
          <Reveal><span className="eyebrow">Contact</span></Reveal>
          <Reveal as="h1" className="h-xl mt-s">Let’s talk video commerce</Reveal>
          <Reveal><p className="lead mx-auto mt-s" style={{ textAlign: 'center' }}>Ask about plans, enquire about a Custom setup, or get help getting set up. We reply within a few hours.</p></Reveal>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <div className="contact-grid">
            <Reveal>
              <div>
                <h3 className="h-md" style={{ marginBottom: 18 }}>Send us a message</h3>
                <div className="form-field">
                  <label htmlFor="c-name">Name</label>
                  <input id="c-name" value={form.name} onChange={update('name')} placeholder="Jordan Lee" />
                </div>
                <div className="form-field">
                  <label htmlFor="c-email">Work email</label>
                  <input id="c-email" type="email" value={form.email} onChange={update('email')} placeholder="jordan@store.com" />
                </div>
                <div className="form-field">
                  <label htmlFor="c-store">Store URL</label>
                  <input id="c-store" value={form.store} onChange={update('store')} placeholder="yourstore.myshopify.com" />
                </div>
                <div className="form-field">
                  <label htmlFor="c-plan">Interested in</label>
                  <select id="c-plan" value={form.plan} onChange={update('plan')}>
                    <option>Free</option><option>Growth</option><option>Pro</option><option>Custom</option><option>Just exploring</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="c-msg">How can we help?</label>
                  <textarea id="c-msg" rows="4" value={form.message} onChange={update('message')} placeholder="Tell us about your store and goals…" />
                </div>
                <button className="btn btn--primary" onClick={submit} disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>
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
                  <li>📧 <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: 'inherit' }}>{SUPPORT_EMAIL}</a></li>
                  <li>🏷️ Custom plan enquiry, email us with the subject “Custom plan enquiry”</li>
                  <li>🏢 AnotherDev, <a href="https://anotherdev.in" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>anotherdev.in</a></li>
                </ul>
                <a href="https://apps.shopify.com" className="btn btn--primary mt-m" style={{ width: '100%', justifyContent: 'center' }}>Add to Shopify for free</a>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
