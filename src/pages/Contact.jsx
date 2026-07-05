import { useState } from 'react';
import Seo from '../components/Seo';
import { Reveal } from '../components/Shared';
import './pages.css';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', store: '', plan: 'Growth', message: '' });

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
        description="Talk to the Reelvana team about shoppable video for your Shopify store. Book a demo, ask about Plus and headless plans, or get onboarding help."
        path="/contact"
      />

      <section className="phero center">
        <div className="container">
          <Reveal><span className="eyebrow">Contact</span></Reveal>
          <Reveal as="h1" className="h-xl mt-s">Let’s talk video commerce</Reveal>
          <Reveal><p className="lead mx-auto mt-s" style={{ textAlign: 'center' }}>Book a demo, ask about plans, or get help getting set up. We usually reply within one business day.</p></Reveal>
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
                    <option>Free</option><option>Growth</option><option>Plus</option><option>Just exploring</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="c-msg">How can we help?</label>
                  <textarea id="c-msg" rows="4" value={form.message} onChange={update('message')} placeholder="Tell us about your store and goals…" />
                </div>
                <button className="btn btn--primary" onClick={submit}>Send message</button>
                {sent && <p className="form-note">Thanks! Your message is on its way — we’ll be in touch shortly.</p>}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <aside className="contact-aside">
                <h3 className="h-md">Other ways to reach us</h3>
                <p>Prefer email or want to see Reelvana live? Pick whatever's easiest.</p>
                <ul>
                  <li>📧 hello@reelvana.app</li>
                  <li>💬 Live chat — inside the app dashboard</li>
                  <li>🎥 Book a 20-min demo call</li>
                  <li>📚 Help center & setup guides</li>
                </ul>
                <a href="https://apps.shopify.com" className="btn btn--primary mt-m" style={{ width: '100%', justifyContent: 'center' }}>Add to Shopify — free</a>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
