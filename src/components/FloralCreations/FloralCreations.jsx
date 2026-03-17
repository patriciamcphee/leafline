import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styles from './styles.module.css';

const galleryItems = [
  { cat: 'wedding', tag: 'Wedding', name: 'Garden Romance', caption: 'Blush peonies, garden roses, eucalyptus', gradient: 'linear-gradient(140deg,#f0c8d4 0%,#c86880 55%,#8a3858 100%)' },
  { cat: 'event', tag: 'Event', name: 'Citrus & Sage', caption: 'Citrus blooms, sage, tropical foliage', gradient: 'linear-gradient(140deg,#cce0a0 0%,#74aa3c 50%,#3a6a18 100%)' },
  { cat: 'seasonal', tag: 'Seasonal', name: 'Moody Botanicals', caption: 'Dahlias, scabiosa, black velvet roses', gradient: 'linear-gradient(140deg,#7a3a8a 0%,#4c2278 50%,#2a1050 100%)' },
  { cat: 'everyday', tag: 'Everyday', name: 'Golden Hour', caption: 'Sunflowers, marigolds, golden yarrow', gradient: 'linear-gradient(140deg,#f8e0a8 0%,#d4a830 50%,#9c7010 100%)' },
  { cat: 'wedding', tag: 'Wedding', name: 'Something Blue', caption: 'White ranunculus, dusty miller, blue thistle', gradient: 'linear-gradient(140deg,#e8f0f6 0%,#a8c4d8 45%,#6088a8 100%)' },
  { cat: 'event', tag: 'Event', name: 'Rustic Warmth', caption: 'Dried pampas, terracotta zinnias, ferns', gradient: 'linear-gradient(140deg,#f4c0a0 0%,#d07840 50%,#9a4420 100%)' },
];

const filters = ['all', 'wedding', 'event', 'seasonal', 'everyday'];

/** Layered Peony — 8 outer + 6 inner petals with filled center */
const PeonyIcon = ({ size = 60, color = 'currentColor', opacity = 1, className, style }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" className={className} style={{ color, opacity, ...style }}>
    {/* 8 outer petals */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
      <g key={`o${deg}`} transform={`rotate(${deg},30,30)`}>
        <path d="M30 27 C17 20 16 6 30 3.5 C44 6 43 20 30 27" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.12"/>
      </g>
    ))}
    {/* 6 inner petals */}
    {[22, 82, 142, 202, 262, 322].map((deg) => (
      <g key={`i${deg}`} transform={`rotate(${deg},30,30)`}>
        <path d="M30 27 C23 23.5 22 15 30 12.5 C38 15 37 23.5 30 27" stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.22"/>
      </g>
    ))}
    {/* Center */}
    <circle cx="30" cy="30" r="7" stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.28"/>
    <circle cx="30" cy="30" r="2.8" fill="currentColor"/>
  </svg>
);


const FloralCreations = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const animateRefs = useRef([]);

  const addToRefs = useCallback((el) => {
    if (el && !animateRefs.current.includes(el)) {
      animateRefs.current.push(el);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(styles.animateVisible);
            }, i * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    animateRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleFilter = (cat) => {
    setActiveFilter(cat);
  };

  return (
    <div className={styles.floralPage}>
      <Helmet>
        <title>Floral Creations | Leafline Garden Design</title>
        <meta name="description" content="Handcrafted floral arrangements for weddings, events, and everyday moments. Custom designs from Leafline Garden Design's boutique studio." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Nunito:ital,wght@0,300;0,400;0,600;1,300&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&display=swap" rel="stylesheet" />
      </Helmet>

      {/* NAV */}
      <nav className={styles.nav}>
        <Link to="/" className={styles.navBrand}>
          <PeonyIcon size={38} color="#6B8C1A" />
          <div className={styles.navTextWrap}>
            <span className={styles.navEyebrow}>Leafline Garden Design</span>
            <span className={styles.navScript}>Floral Creations</span>
          </div>
        </Link>
        <ul className={styles.navLinks}>
          <li><Link to="/" className={styles.backLink}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M12 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Main Site
          </Link></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#process">Our Process</a></li>
          <li><a href="https://form.leaflinegardendesign.com/floral-creations" className={styles.navPill}>Request an Arrangement</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroDots}></div>
        <div className={styles.heroOrbA}></div>
        <div className={styles.heroOrbB}></div>
        <div className={styles.heroInner}>
          <div>
            <p className={styles.heroEyebrow}>Leafline Garden Design</p>
            <h1 className={styles.heroHeadline}>Floral Creations</h1>
            <p className={styles.heroBody}>Handcrafted arrangements made with intention and care. We bring your vision to life—for weddings, events, milestones, and everyday moments worth celebrating.</p>
            <div className={styles.heroActions}>
              <a href="#gallery" className={styles.btnWhite}>
                View Our Work
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="https://form.leaflinegardendesign.com/floral-creations" className={styles.btnGhost}>Request an Arrangement</a>
            </div>
            <div className={styles.heroTags}>
              <span className={styles.heroTag}><span className={styles.heroTagDot}></span> Custom, every time</span>
              <span className={styles.heroTag}><span className={styles.heroTagDot}></span> Weddings &amp; events</span>
              <span className={styles.heroTag}><span className={styles.heroTagDot}></span> Boutique studio</span>
            </div>
          </div>
          <div className={styles.heroArt}>
            <PeonyIcon size={360} color="white" opacity={0.28} className={styles.heroSvg} />
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className={styles.pillars}>
        <div className={styles.pillarsInner}>
          <div className={styles.pillar} ref={addToRefs}>
            <div className={`${styles.pillarIcon} ${styles.iconRose}`}>
              <PeonyIcon size={34} color="#D4879C" />
            </div>
            <h3 className={styles.pillarTitle}>Boutique Studio</h3>
            <p className={styles.pillarDesc}>Every arrangement is made by hand in our personal studio. No production lines, no shortcuts—just thoughtful artistry and a genuine love of florals.</p>
          </div>

          <div className={styles.pillar} ref={addToRefs}>
            <div className={`${styles.pillarIcon} ${styles.iconLeaf}`}>
              <PeonyIcon size={34} color="#6B8C1A" />
            </div>
            <h3 className={styles.pillarTitle}>Custom to You</h3>
            <p className={styles.pillarDesc}>Tell us your vision, palette, and occasion—we'll design something uniquely yours. From intimate gifts to full event installs, we start with your story.</p>
          </div>

          <div className={styles.pillar} ref={addToRefs}>
            <div className={`${styles.pillarIcon} ${styles.iconBloom}`}>
              <PeonyIcon size={34} color="#C4856A" />
            </div>
            <h3 className={styles.pillarTitle}>Seasonally Sourced</h3>
            <p className={styles.pillarDesc}>We work with seasonal blooms and premium local growers, so each arrangement arrives at peak freshness—and stays beautiful for as long as possible.</p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className={styles.gallery} id="gallery">
        <div className={styles.galleryInner}>
          <div className={styles.galleryHeader}>
            <span className={styles.sectionChip}>Our Work</span>
            <h2 className={styles.sectionHeadline}>Past Creations</h2>
            <p className={styles.sectionSub}>A selection of arrangements we've crafted for weddings, events, and everyday moments worth celebrating.</p>
          </div>

          <div className={styles.filters}>
            {filters.map((f) => (
              <button
                key={f}
                className={`${styles.filter} ${activeFilter === f ? styles.filterActive : ''}`}
                onClick={() => handleFilter(f)}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          <div className={styles.galleryGrid}>
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className={`${styles.card} ${activeFilter !== 'all' && activeFilter !== item.cat ? styles.cardHidden : ''}`}
                ref={addToRefs}
              >
                <div className={styles.cardThumb}>
                  <div className={styles.cardFill} style={{ background: item.gradient }}>
                    <PeonyIcon size={90} color="white" opacity={0.38} />
                  </div>
                  <div className={styles.cardOverlay}>
                    <span className={styles.cardCaption}>{item.caption}</span>
                  </div>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardTag}>{item.tag}</div>
                  <div className={styles.cardName}>{item.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className={styles.process} id="process">
        <div className={styles.processInner}>
          <div className={styles.processHeader}>
            <span className={styles.sectionChip}>How It Works</span>
            <h2 className={styles.sectionHeadline}>From vision to vase</h2>
            <p className={styles.sectionSub} style={{ margin: '0 auto' }}>A simple four-step process designed to make your experience effortless from the very first message.</p>
          </div>

          <div className={styles.processSteps}>
            {[
              { num: 1, title: 'Tell us your vision', desc: 'Fill out our short request form with your occasion, style, colors, and any inspiration you have in mind.' },
              { num: 2, title: 'We reach out', desc: "We'll follow up within 24 hours to confirm details, discuss options, and finalize your arrangement." },
              { num: 3, title: 'We create', desc: 'Your arrangement is hand-crafted in our studio using fresh, seasonal blooms chosen specifically for your order.' },
              { num: 4, title: 'Pickup or delivery', desc: 'Coordinate a convenient pickup time, or ask about local delivery options for your area.' },
            ].map((step) => (
              <div key={step.num} className={styles.step} ref={addToRefs}>
                <div className={styles.stepNum}>{step.num}</div>
                <div className={styles.stepTitle}>{step.title}</div>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta} id="request">
        <div className={styles.ctaBefore}></div>
        <div className={styles.ctaInner}>
          <span className={`${styles.sectionChip} ${styles.ctaChip}`}>Ready to Begin?</span>
          <h2 className={styles.ctaHeadline}>Let's create something beautiful</h2>
          <p className={styles.ctaBody}>Tell us about your occasion, your style, and what you're dreaming of. Every arrangement is made to order—so it's always one of a kind.</p>
          <a href="https://form.leaflinegardendesign.com/floral-creations" className={styles.btnGreen}>
            Request a Custom Arrangement
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <PeonyIcon size={38} color="#6B8C1A" />
              <div className={styles.navTextWrap}>
                <span className={`${styles.navEyebrow} ${styles.footerEyebrow}`}>Leafline Garden Design</span>
                <span className={`${styles.navScript} ${styles.footerScript}`}>Floral Creations</span>
              </div>
            </div>
            <p className={styles.footerTagline}>Creating vibrant floral experiences that brighten every occasion and space with thoughtful, handcrafted design.</p>
          </div>

          <div>
            <div className={styles.footerHeading}>Quick Links</div>
            <ul className={styles.footerLinks}>
              <li><a href="#gallery">Our Gallery</a></li>
              <li><a href="#process">How It Works</a></li>
              <li><a href="https://form.leaflinegardendesign.com/floral-creations">Request an Arrangement</a></li>
              <li><Link to="/">Back to Main Site</Link></li>
            </ul>
          </div>

          <div>
            <div className={styles.footerHeading}>Contact</div>
            <div className={styles.footerContact}>
              <div className={styles.contactRow}>
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path d="M14 10.667c-1.333 0-2.667-.2-3.867-.6-.4-.133-.867-.033-1.133.267l-1.667 2.066C4.8 11.133 2.933 9.267 1.6 6.667l2.067-1.734c.3-.3.4-.733.267-1.133C3.533 2.6 3.333 1.267 3.333 0H.667C.3 0 0 .3 0 .667 0 9.133 6.867 16 15.333 16c.367 0 .667-.3.667-.667v-4.666c0-.367-.3-.667-.667-.667-.867 0-1.6.067-2.333.133" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                (206) 880-0886
              </div>
              <div className={styles.contactRow}>
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M1.5 3.5L8 9L14.5 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                chris@leaflinegarden.design
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          &copy; 2026 Leafline Garden Design LLC. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default FloralCreations;
