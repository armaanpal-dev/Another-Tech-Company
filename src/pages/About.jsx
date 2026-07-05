import Seo from '../components/Seo';
import { Reveal, Stat, CtaBand } from '../components/Shared';
import './pages.css';

const values = [
  { n: '01', t: 'Merchant-obsessed', d: 'Every feature earns its place by moving a real metric: conversion, AOV, or retention. If it doesn’t sell, it ships later.' },
  { n: '02', t: 'Fast by default', d: 'Speed is a feature. We hold ourselves to Core Web Vitals so video never costs you a sale at the worst moment.' },
  { n: '03', t: 'No-code, no lock-in', d: 'You shouldn’t need a developer to add video, and you shouldn’t fear leaving. Setup is a click; so is goodbye.' },
];

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="Reelvana is on a mission to make every Shopify store shoppable through video. Meet the team building the fastest, simplest video-commerce app for merchants."
        path="/about"
      />

      <section className="phero dark-bg">
        <div className="container phero__inner">
          <Reveal><span className="eyebrow eyebrow--light">About</span></Reveal>
          <Reveal as="h1" className="h-xl mt-s">We make commerce worth watching</Reveal>
          <Reveal><p className="lead">Reelvana started with a simple frustration: brands were pouring effort into video on social, then sending shoppers to flat, static storefronts. We built the bridge — so the content that wins attention also closes the sale.</p></Reveal>
        </div>
      </section>

      <section className="section--tight dark-bg" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid grid-3">
            <Reveal><Stat value="2023" label="Founded" /></Reveal>
            <Reveal delay={80}><Stat value="1,280+" label="Merchants served" /></Reveal>
            <Reveal delay={160}><Stat value="22" label="Team members" /></Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="center home__head">
            <Reveal><span className="eyebrow">What we believe</span></Reveal>
            <Reveal as="h2" className="h-lg mt-s">The principles behind the product</Reveal>
          </div>
          <div className="values mt-l">
            {values.map((v, i) => (
              <Reveal key={v.n} delay={i * 80}>
                <div className="value card">
                  <span className="value__n">{v.n}</span>
                  <h3 className="h-md mt-s">{v.t}</h3>
                  <p>{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Build with us" sub="Add Reelvana to your store free, or reach out — we love hearing from merchants." />
    </>
  );
}
