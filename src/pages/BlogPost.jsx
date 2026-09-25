import { useParams, Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { Reveal, CtaBand } from '../components/Shared';
import { getPost } from './blogPosts';
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

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);

  if (!post) return <NotFound />;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    url: `https://anotherdev.in/blog/${post.slug}`,
    datePublished: post.date,
    articleSection: post.cat,
    image: 'https://anotherdev.in/logo.svg',
    author: { '@type': 'Organization', name: 'AnotherDev', url: 'https://anotherdev.in' },
    publisher: {
      '@type': 'Organization',
      name: 'AnotherDev',
      logo: { '@type': 'ImageObject', url: 'https://anotherdev.in/logo.svg' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://anotherdev.in/blog/${post.slug}` },
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
      </div>
      <CtaBand title="Ready to make your store shoppable?" sub="Install AnotherDev free and add your first shoppable reel in minutes." />
    </>
  );
}
