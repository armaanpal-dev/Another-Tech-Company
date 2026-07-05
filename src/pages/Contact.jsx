import { useState } from 'react';
import Seo from '../components/Seo';
import { Reveal } from '../components/Shared';
import './pages.css';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', store: '', plan: 'Growth', message: '' });
  const SUPPORT_EMAIL = 'armaanpal1996@gmail.com';

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = () => {
    if (!form.name || !form.email) return;
    // In production, POST to your backend / EmailJS / form endpoint here.
    setSent(true);
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
                <button className="btn btn--primary" onClick={submit}>Send message</button>
                {sent && <p className="form-note">Thanks! Your message is on its way, we’ll be in touch shortly.</p>}
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
