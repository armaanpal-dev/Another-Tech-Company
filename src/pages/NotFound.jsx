import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="The page you’re looking for doesn’t exist." path="/404" />
      <section className="section center" style={{ padding: '120px 0' }}>
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: 'center', display: 'flex' }}>Error 404</span>
          <h1 className="h-xl mt-s">This page took an early exit</h1>
          <p className="lead mx-auto mt-s" style={{ textAlign: 'center' }}>
            The page you’re looking for isn’t here. Let’s get you back to something shoppable.
          </p>
          <div className="mt-m" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn--primary">Back to home</Link>
            <Link to="/features" className="btn btn--ghost">See features</Link>
          </div>
        </div>
      </section>
    </>
  );
}
