import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Learn Portuguese — from day one',
}

export default function PortugueseClassesPage() {
  return (
    <>
      <style>{`
        .pt-page, .pt-page * {
          box-sizing: border-box;
        }
        .pt-page {
          font-family: 'Public Sans', sans-serif;
          background: #EDEAE0;
          color: #1F1B16;
          line-height: 1.6;
        }
        .pt-page h1, .pt-page h2, .pt-page h3 {
          font-family: 'Public Sans', sans-serif;
          font-weight: 500;
          line-height: 1.15;
          margin: 0;
        }
        .pt-page p { margin: 0; }
        .pt-page a { color: inherit; }
        .pt-page .wrap {
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .pt-page header { padding: 28px 0; }
        .pt-page header .wrap {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .pt-page .logo {
          font-family: 'Public Sans', sans-serif;
          font-size: 20px;
          font-weight: 500;
        }
        .pt-page nav ul {
          list-style: none;
          display: flex;
          gap: 32px;
          font-size: 15px;
          margin: 0;
          padding: 0;
        }
        .pt-page nav a { text-decoration: none; color: #5F5C52; }
        .pt-page nav a:hover { color: #1D4E63; }
        .pt-page .hero .wrap {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 56px;
          align-items: center;
          padding-top: 32px;
          padding-bottom: 64px;
        }
        .pt-page .hero h1 { font-size: 44px; margin-bottom: 20px; }
        .pt-page .hero p {
          font-size: 18px;
          color: #5F5C52;
          max-width: 46ch;
          margin-bottom: 28px;
        }
        .pt-page .btn {
          display: inline-block;
          background: #1D4E63;
          color: #fff;
          text-decoration: none;
          padding: 14px 28px;
          border-radius: 6px;
          font-size: 16px;
          font-weight: 500;
          border: none;
          cursor: pointer;
        }
        .pt-page .btn:hover { background: #143844; }
        .pt-page .btn-ghost {
          background: transparent;
          color: #1D4E63;
          border: 1.5px solid #1D4E63;
        }
        .pt-page .btn-ghost:hover { background: #1D4E63; color: #fff; }
        .pt-page .hero-photo, .pt-page .about-photo {
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 12px;
          overflow: hidden;
        }
        .pt-page .hero-photo img, .pt-page .about-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .pt-page .tile-divider {
          height: 28px;
          background-image:
            linear-gradient(45deg, #1D4E63 25%, transparent 25%, transparent 75%, #1D4E63 75%),
            linear-gradient(45deg, #1D4E63 25%, transparent 25%, transparent 75%, #1D4E63 75%);
          background-size: 28px 28px;
          background-position: 0 0, 14px 14px;
          background-color: #F7F5EE;
          opacity: 0.85;
        }
        .pt-page section { padding: 72px 0; }
        .pt-page .section-label {
          font-size: 13px;
          letter-spacing: 0.02em;
          color: #B5651D;
          margin-bottom: 10px;
        }
        .pt-page section h2 { font-size: 30px; margin-bottom: 40px; max-width: 30ch; }
        .pt-page .methodology { background: #F7F5EE; }
        .pt-page .steps { display: grid; gap: 32px; }
        .pt-page .step {
          display: grid;
          grid-template-columns: 48px 1fr;
          gap: 20px;
          align-items: start;
        }
        .pt-page .step-number {
          font-family: 'Public Sans', sans-serif;
          font-size: 22px;
          color: #1D4E63;
        }
        .pt-page .step h3 { font-size: 19px; margin-bottom: 6px; }
        .pt-page .step p { color: #5F5C52; font-size: 15.5px; max-width: 56ch; }
        .pt-page .services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .pt-page .plan {
          background: #F7F5EE;
          border: 1px solid #DBD6C7;
          border-radius: 10px;
          padding: 32px;
        }
        .pt-page .plan.featured { border: 2px solid #1D4E63; position: relative; }
        .pt-page .plan-badge {
          display: inline-block;
          background: #1D4E63;
          color: #fff;
          font-size: 12px;
          padding: 4px 12px;
          border-radius: 20px;
          margin-bottom: 14px;
        }
        .pt-page .plan h3 { font-size: 20px; margin-bottom: 6px; }
        .pt-page .plan .price {
          font-family: 'Public Sans', sans-serif;
          font-size: 28px;
          color: #1D4E63;
          margin: 12px 0 16px;
        }
        .pt-page .plan .price span {
          font-family: 'Public Sans', sans-serif;
          font-size: 14px;
          color: #5F5C52;
        }
        .pt-page .plan ul { list-style: none; margin-bottom: 24px; padding: 0; }
        .pt-page .plan li {
          font-size: 14.5px;
          color: #5F5C52;
          padding: 6px 0;
          border-top: 1px solid #DBD6C7;
        }
        .pt-page .plan li:first-child { border-top: none; }
        .pt-page .about .wrap {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 48px;
          align-items: center;
        }
        .pt-page .about h2 { margin-bottom: 18px; }
        .pt-page .about p {
          color: #5F5C52;
          font-size: 16px;
          margin-bottom: 16px;
          max-width: 50ch;
        }
        .pt-page .about .credentials { display: flex; gap: 28px; margin-top: 24px; }
        .pt-page .credential .num {
          font-family: 'Public Sans', sans-serif;
          font-size: 26px;
          color: #1D4E63;
        }
        .pt-page .credential .label { font-size: 13px; color: #5F5C52; }
        .pt-page .testimonials { background: #F7F5EE; }
        .pt-page .quote-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }
        .pt-page .quote-title { font-size: 14px; color: #B5651D; margin-bottom: 8px; }
        .pt-page blockquote {
          font-family: 'Public Sans', sans-serif;
          font-size: 17px;
          font-weight: 400;
          line-height: 1.5;
          margin: 0 0 14px;
        }
        .pt-page .quote-author { font-size: 14px; color: #5F5C52; }
        .pt-page .booking { text-align: center; padding: 88px 0; }
        .pt-page .booking h2 { max-width: none; margin: 0 auto 14px; font-size: 32px; }
        .pt-page .booking p { color: #5F5C52; margin-bottom: 28px; }
        .pt-page footer {
          border-top: 1px solid #DBD6C7;
          padding: 28px 0;
          font-size: 13px;
          color: #5F5C52;
          text-align: center;
        }
        @media (max-width: 760px) {
          .pt-page .hero .wrap, .pt-page .about .wrap { grid-template-columns: 1fr; }
          .pt-page .hero .wrap { padding-top: 8px; }
          .pt-page .hero-photo, .pt-page .about-photo { max-width: 320px; margin: 0 auto; }
          .pt-page .services-grid, .pt-page .quote-grid { grid-template-columns: 1fr; }
          .pt-page nav ul { display: none; }
          .pt-page .hero h1 { font-size: 32px; }
        }
      `}</style>

      <div className="pt-page">
        <header>
          <div className="wrap">
            <div className="logo">Fala Já</div>
            <nav>
              <ul>
                <li><a href="#methodology">Methodology</a></li>
                <li><a href="#services">Classes</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#booking">Book a call</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <section className="hero">
          <div className="wrap">
            <div>
              <h1>Speak Portuguese from day one.</h1>
              <p>Speaking Portuguese makes life here smoother — it opens up friendships, deepens relationships, and makes bureaucracy far less painful. My goal is to get you speaking from your first class.</p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="mailto:rossjtorres@gmail.com" className="btn">Email me</a>
                <a href="https://wa.me/351960259194" className="btn btn-ghost" target="_blank" rel="noopener noreferrer">WhatsApp me</a>
              </div>
            </div>
            <div className="hero-photo">
              <img src="/hero.jpg" alt="Portuguese teacher, straight-on portrait" />
            </div>
          </div>
        </section>

        <div className="tile-divider" />

        <section className="methodology" id="methodology">
          <div className="wrap">
            <p className="section-label">Methodology</p>
            <h2>Built for Americans making a life in Portugal.</h2>
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <div>
                  <h3>Speak from lesson one</h3>
                  <p>No silent grammar phase. You&apos;re forming real sentences and having real exchanges from the very first class.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div>
                  <h3>Learn in context</h3>
                  <p>Classes are built around what you&apos;ll actually need — Finanças appointments, landlord conversations, ordering at the market, making friends.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div>
                  <h3>Build lasting fluency</h3>
                  <p>Spaced repetition and immersion practice turn early progress into fluency that sticks, not phrases you forget in a month.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="wrap">
            <p className="section-label">Classes</p>
            <h2>Find the format that fits how you learn.</h2>
            <div className="services-grid">
              <div className="plan">
                <h3>Single class</h3>
                <div className="price">€30 <span>/ class</span></div>
                <ul>
                  <li>60-minute 1-on-1 session</li>
                  <li>Flexible scheduling</li>
                  <li>Good for trying it out</li>
                </ul>
                <a href="#booking" className="btn btn-ghost">Book a class</a>
              </div>
              <div className="plan featured">
                <span className="plan-badge">Most popular</span>
                <h3>8-class package</h3>
                <div className="price">€220 <span>/ package</span></div>
                <ul>
                  <li>Eight 60-minute sessions</li>
                  <li>Personalized curriculum</li>
                  <li>Progress check-ins</li>
                </ul>
                <a href="#booking" className="btn">Book a package</a>
              </div>
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="wrap">
            <div className="about-photo">
              <img src="/about.jpg" alt="Teacher hiking the Portuguese coast" />
            </div>
            <div>
              <p className="section-label">About your guide</p>
              <h2>I&apos;ve taught hundreds of people Portuguese.</h2>
              <p>My methodology is built with American clients in mind — adapted to your linguistic background and the specific transition of building a life in Portugal, not a generic classroom course.</p>
              <p>Think of me as your guide: I&apos;ve walked this path with hundreds of students already, and I know where the real obstacles are — and where the shortcuts are too.</p>
              <div className="credentials">
                <div className="credential">
                  <div className="num">15+</div>
                  <div className="label">years teaching</div>
                </div>
                <div className="credential">
                  <div className="num">100s</div>
                  <div className="label">students taught</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <div className="wrap">
            <p className="section-label">What students say</p>
            <h2>Hear from people who&apos;ve made the move.</h2>
            <div className="quote-grid">
              <div>
                <p className="quote-title">Organized, attentive and experienced tutor</p>
                <blockquote>&quot;Ross was the absolute best! I have learned so much in my time with him and am so looking forward to continuing my studies. He is so knowledgeable, always ready with a resource, and offers such lovely insight into any subject. A great conversationalist, even in a language I&apos;m struggling to speak. I would highly recommend Ross to anyone looking to start learning or increase their language skills.&quot;</blockquote>
                <div className="quote-author">Andrea</div>
              </div>
              <div>
                <p className="quote-title">I had a great session with Ross</p>
                <blockquote>&quot;We went over my homework and he explained concepts I was having problems with. Thanks Ross!&quot;</blockquote>
                <div className="quote-author">Melissa</div>
              </div>
              <div>
                <p className="quote-title">Great tutor with lots of resources and knowledge</p>
                <blockquote>&quot;Ross taught me the basics of the language and walked me through the necessary vocabulary to get around. We focused on pronunciation, as well as grammar. It was very helpful to have someone guide me through the exercises and correct me when I am wrong, explaining my mistakes. Ross provided lots of materials, which made the lesson structured. Definitely recommend him as a tutor to anyone interested in learning a new language!&quot;</blockquote>
                <div className="quote-author">Aida</div>
              </div>
              <div>
                <p className="quote-title">Excellent tutor</p>
                <blockquote>&quot;Ross is very patient and down to earth and makes the learning experience enjoyable and straightforward. Conversing with Ross I feel relaxed immediately and I always look forward to the course content. Highly recommended for relaxed, yet super efficient language learning.&quot;</blockquote>
                <div className="quote-author">Michael</div>
              </div>
            </div>
          </div>
        </section>

        <section className="booking" id="booking">
          <div className="wrap">
            <h2>Ready to start speaking?</h2>
            <p>Book a free 20-minute call and we&apos;ll map out a plan that fits your goals.</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="mailto:rossjtorres@gmail.com" className="btn">Email me</a>
              <a href="https://wa.me/351960259194" className="btn btn-ghost" target="_blank" rel="noopener noreferrer">WhatsApp me</a>
            </div>
          </div>
        </section>

        <footer>
          <div className="wrap">Fala Já — Portuguese classes for life in Portugal</div>
        </footer>
      </div>
    </>
  )
}
