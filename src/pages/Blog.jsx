import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { Reveal, CtaBand } from '../components/Shared';
import { posts } from './blogPosts';
import './pages.css';

export default function Blog() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'AnotherDev Blog',
    description: 'Guides on shoppable video, UGC, and conversion for Shopify merchants.',
    url: 'https://anotherdev.in/blog',
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      description: p.excerpt,
      url: `https://anotherdev.in/blog/${p.slug}`,
      datePublished: p.date,
      author: { '@type': 'Organization', name: 'AnotherDev' },
    })),
  };

  return (
    <>
      <Seo
        title="Blog"
        description="Guides and playbooks on shoppable video, UGC, and conversion optimization for Shopify merchants, from the team behind AnotherDev."
        path="/blog"
        schema={schema}
      />

      <section className="phero center">
        <div className="container">
          <Reveal><span className="eyebrow">Blog</span></Reveal>
          <Reveal as="h1" className="h-xl mt-s">Video commerce, decoded</Reveal>
          <Reveal><p className="lead mx-auto mt-s" style={{ textAlign: 'center' }}>Playbooks, guides, and how-tos to help you sell more with video on Shopify.</p></Reveal>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <div className="blog-grid">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 70}>
                <article className="post">
                  <Link to={`/blog/${p.slug}`} className={`post__cover ${p.cover}`} aria-label={p.title} />
                  <div className="post__body">
                    <span className="post__meta">{p.cat} · {p.date} · {p.read} read</span>
                    <h3>{p.title}</h3>
                    <p>{p.excerpt}</p>
                    <Link to={`/blog/${p.slug}`} className="post__link">Read article →</Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Less reading, more selling" sub="Put these ideas to work. Install AnotherDev free and ship your first shoppable reel." />
    </>
  );
}
