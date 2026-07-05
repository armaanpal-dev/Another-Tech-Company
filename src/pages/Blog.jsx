import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { Reveal, CtaBand } from '../components/Shared';
import './pages.css';

const posts = [
  { cover: '', cat: 'Conversion', date: 'Jun 2, 2026', read: '6 min', title: 'Shoppable video on Shopify: the 2026 playbook', excerpt: 'Where to place video, what to tag, and how to measure revenue — a practical guide for merchants.' },
  { cover: 'post__cover--2', cat: 'UGC', date: 'May 21, 2026', read: '5 min', title: 'How to turn customer TikToks into store sales', excerpt: 'A repeatable workflow for sourcing, getting rights to, and publishing creator content that converts.' },
  { cover: 'post__cover--3', cat: 'CRO', date: 'May 9, 2026', read: '7 min', title: '9 video placements that lift add-to-cart', excerpt: 'From the homepage story bar to the PDP spotlight, here’s where shoppable video earns the most.' },
  { cover: 'post__cover--2', cat: 'Performance', date: 'Apr 28, 2026', read: '4 min', title: 'Keep video fast: Core Web Vitals for Shopify', excerpt: 'Lazy-loading, CDNs, and poster frames — how to add video without hurting your speed score.' },
  { cover: 'post__cover--3', cat: 'Strategy', date: 'Apr 14, 2026', read: '6 min', title: 'Story bars vs. carousels: which converts better?', excerpt: 'We compared placements across 200 stores. Here’s what the data says about each format.' },
  { cover: '', cat: 'Guides', date: 'Apr 1, 2026', read: '8 min', title: 'A beginner’s guide to video commerce', excerpt: 'New to shoppable video? Start here for the concepts, tools, and metrics that matter.' },
];

export default function Blog() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Reelvana Blog',
    description: 'Guides on shoppable video, UGC, and conversion for Shopify merchants.',
  };

  return (
    <>
      <Seo
        title="Blog"
        description="Guides and playbooks on shoppable video, UGC, and conversion optimization for Shopify merchants — from the team behind Reelvana."
        path="/blog"
        schema={schema}
      />

      <section className="phero center">
        <div className="container">
          <Reveal><span className="eyebrow">Blog</span></Reveal>
          <Reveal as="h1" className="h-xl mt-s">Video commerce, decoded</Reveal>
          <Reveal><p className="lead mx-auto mt-s" style={{ textAlign: 'center' }}>Playbooks, data, and how-tos to help you sell more with video on Shopify.</p></Reveal>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <div className="blog-grid">
            {posts.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 70}>
                <article className="post">
                  <div className={`post__cover ${p.cover}`} />
                  <div className="post__body">
                    <span className="post__meta">{p.cat} · {p.date} · {p.read} read</span>
                    <h3>{p.title}</h3>
                    <p>{p.excerpt}</p>
                    <Link to="/blog" className="post__link">Read article →</Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Less reading, more selling" sub="Put these ideas to work — install Reelvana free and ship your first shoppable video." />
    </>
  );
}
