import { useParams, Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Icon from '../components/Icon';
import { Reveal, CtaBand } from '../components/Shared';
import { posts, getPost } from './blogPosts';
import NotFound from './NotFound';
import './pages.css';

// Turn https URLs into external links and internal /paths into router links.
function rich(text) {
  const parts = String(text).split(/(https?:\/\/[^\s)]+|\/[a-z][a-z0-9-]*(?:\/[a-z0-9-]+)*)/g);
  return parts.map((p, i) => {
    if (/^https?:\/\//.test(p)) return <a key={i} href={p} target="_blank" rel="noreferrer" className="post__link-inline">{p}</a>;
    if (/^\/[a-z]/.test(p)) return <Link key={i} to={p} className="post__link-inline">{p}</Link>;
    return <span key={i}>{p}</span>;
  });
}

function Block({ block }) {
  if (block.type === 'h2') return <h2>{block.text}</h2>;
  if (block.type === 'ul') return <ul>{block.items.map((it) => <li key={it}>{rich(it)}</li>)}</ul>;
  return <p>{rich(block.text)}</p>;
}

// "Sep 25, 2026" -> "2026-09-25" for schema. Uses local calendar parts so the
// date never shifts a day across time zones. Falls back to the raw string.
function toISO(dateStr) {
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${m}-${day}`;
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);

  if (!post) return <NotFound />;

  const url = `https://anotherdev.in/blog/${post.slug}`;
  const iso = toISO(post.date);
  const wordCount = post.content.reduce((n, b) => {
    const t = b.type === 'ul' ? b.items.join(' ') : (b.text || '');
    return n + t.split(/\s+/).filter(Boolean).length;
  }, 0);

  const related = (() => {
    const others = posts.filter((p) => p.slug !== post.slug);
    const same = others.filter((p) => p.cat === post.cat);
    const rest = others.filter((p) => p.cat !== post.cat);
    return [...same, ...rest].slice(0, 3);
  })();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    url,
    inLanguage: 'en',
    datePublished: iso,
    dateModified: iso,
    articleSection: post.cat,
    wordCount,
    keywords: `${post.cat}, Shopify, AnotherDev, shoppable video, Shopify apps`,
    image: 'https://anotherdev.in/og-image.svg',
    author: { '@type': 'Organization', name: 'AnotherDev', url: 'https://anotherdev.in' },
    publisher: {
      '@type': 'Organization',
      name: 'AnotherDev',
      logo: { '@type': 'ImageObject', url: 'https://anotherdev.in/logo.svg' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    isPartOf: { '@type': 'Blog', name: 'AnotherDev Blog', url: 'https://anotherdev.in/blog' },
  };

  return (
    <>
      <Seo title={post.title} description={post.excerpt} path={`/blog/${post.slug}`} type="article" schema={schema} />

      <section className="phero">
        <div className="container phero__inner">
          <Reveal><span className="eyebrow">{post.cat}</span></Reveal>
          <Reveal as="h1" className="h-lg mt-s">{post.title}</Reveal>
          <Reveal><p className="lead">{post.date} · {post.read} read</p></Reveal>
        </div>
      </section>

      <div className="lightzone">
        <section className="section--tight">
          <div className="container prose">
            <Reveal>
              {post.content.map((block, i) => <Block key={i} block={block} />)}
              <p style={{ marginTop: 32 }}><Link to="/blog" className="post__link">← Back to all articles</Link></p>
            </Reveal>
          </div>
        </section>

        {related.length > 0 && (
          <section className="section--tight" style={{ paddingTop: 0 }}>
            <div className="container">
              <h2 className="h-md" style={{ marginBottom: 24 }}>Related articles</h2>
              <div className="blog-grid">
                {related.map((p) => (
                  <Link key={p.slug} to={`/blog/${p.slug}`} className="post">
                    <span className={`post__cover ${p.cover}`} aria-hidden="true" />
                    <span className="post__cat">{p.cat}</span>
                    <span className="post__meta">{p.date} · {p.read} read</span>
                    <h3>{p.title}</h3>
                    <p>{p.excerpt}</p>
                    <span className="post__link">Read more <Icon name="arrow" size={16} /></span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
      <CtaBand title="Ready to make your store shoppable?" sub="Install AnotherDev free and add your first shoppable reel in minutes." />
    </>
  );
}
