import { useState } from 'react'

const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d={diagonal ? 'M7 17 17 7M8 7h9v9' : 'M5 12h14m-5-5 5 5-5 5'} />
  </svg>
)

const collections = [
  {
    title: "Men's Collection",
    description: 'Refined layers and modern tailoring for every kind of day.',
    image:
      'https://images.unsplash.com/photo-1619603364937-8d7af41ef206?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: "Women's Collection",
    description: 'Quietly expressive pieces designed to move with confidence.',
    image:
      'https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Casual Wear',
    description: 'Easy silhouettes and considered details for off-duty hours.',
    image:
      'https://images.unsplash.com/photo-1697659840923-0e6c6c862e8f?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Accessories',
    description: 'The finishing touches that make an everyday look your own.',
    image:
      'https://images.unsplash.com/photo-1713746834176-04c0069d6593?auto=format&fit=crop&w=1200&q=85',
  },
]

const products = [
  {
    name: 'Terra Tailored Blazer',
    category: 'Women · Outerwear',
    price: '₹4,890',
    image:
      'https://images.unsplash.com/photo-1580478491436-fd6a937acc9e?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Field Overshirt',
    category: 'Men · Essentials',
    price: '₹3,490',
    image:
      'https://images.unsplash.com/photo-1602956280248-66d6efd0ba7d?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Ivory Column Dress',
    category: 'Women · Dresses',
    price: '₹5,290',
    image:
      'https://images.unsplash.com/photo-1659522761084-79196b64abe4?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Everyday Leather Bag',
    category: 'Accessories · Bags',
    price: '₹3,890',
    image:
      'https://images.unsplash.com/photo-1590739225287-bd31519780c3?auto=format&fit=crop&w=900&q=85',
  },
]

const testimonials = [
  {
    quote:
      'The fit feels considered, the fabric is beautiful, and it still feels effortless enough for every day.',
    name: 'Riya M.',
    detail: 'Verified customer',
  },
  {
    quote:
      'My pieces arrived looking exactly as refined as they did online. The quality is felt in every detail.',
    name: 'Arjun S.',
    detail: 'Verified customer',
  },
  {
    quote:
      'DelightEnterprices has become my first stop for clothes that feel current without chasing every trend.',
    name: 'Meera K.',
    detail: 'Verified customer',
  },
]

const faqs = [
  {
    question: 'What clothing categories do you offer?',
    answer:
      "Our collections include thoughtfully designed womenswear, menswear, casual essentials and finishing accessories.",
  },
  {
    question: 'How do I find the right size?',
    answer:
      'Each product page includes a detailed size guide. Compare the measurements with a favourite piece you already own for the best fit.',
  },
  {
    question: 'What materials do you use?',
    answer:
      'We select fabrics for feel, longevity and everyday comfort, with full material details listed clearly on every product page.',
  },
  {
    question: 'How can I place an order?',
    answer:
      'Choose your preferred style and size, add it to your bag and follow the secure checkout steps to complete your order.',
  },
  {
    question: 'What is your return policy?',
    answer:
      'Eligible unworn pieces with original tags may be returned within the return window stated at checkout.',
  },
]

function App() {
  const [openFaq, setOpenFaq] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <a className="brand" href="#home" aria-label="DelightEnterprices home">
          <span className="brand-mark">D</span>
          <span>DelightEnterprices</span>
        </a>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'}>
          <a href="#home">Home</a>
          <a href="#collections">Collections</a>
          <a href="#new-arrivals">New Arrivals</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="button button-small nav-cta" href="#collections">
          Explore Collection <Arrow />
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Made for life, styled for you</p>
            <h1>
              Style That Speaks.
              <br />
              <em>Comfort That Stays.</em>
            </h1>
            <p className="hero-intro">
              Contemporary clothing, thoughtfully made to bring ease, expression, and quiet
              confidence to every day.
            </p>
            <div className="button-row">
              <a className="button" href="#collections">
                Explore Collection <Arrow />
              </a>
              <a className="text-button" href="#about">
                Our Story <Arrow diagonal />
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-frame">
              <img
                src="https://images.unsplash.com/photo-1654707267867-9a4f9d27317e?auto=format&fit=crop&w=1500&q=88"
                alt="Models wearing contemporary neutral fashion"
              />
              <span className="image-label">The everyday edit · 2025</span>
            </div>
            <div className="featured-card">
              <img
                src="https://images.unsplash.com/photo-1779406165962-7df12de281b1?auto=format&fit=crop&w=500&q=85"
                alt="Woman in a tailored beige suit"
              />
              <div>
                <p>Featured piece</p>
                <h3>The Daylight Suit</h3>
                <a href="#new-arrivals" aria-label="View The Daylight Suit">
                  View piece <Arrow />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="highlights" aria-label="Brand highlights">
          {[
            ['01', 'Thoughtful', 'Designs'],
            ['02', 'Everyday', 'Comfort'],
            ['03', 'Timeless', 'Fashion'],
          ].map(([number, lineOne, lineTwo]) => (
            <div className="highlight" key={number}>
              <span>{number}</span>
              <h2>{lineOne}<br /><em>{lineTwo}</em></h2>
            </div>
          ))}
        </section>

        <section className="philosophy section" id="about">
          <div className="section-heading centered-heading">
            <p className="eyebrow">Our philosophy</p>
            <h2>Fashion Designed Around<br /><em>Your Everyday Life.</em></h2>
            <p>Three simple ideas guide every silhouette, fabric, and finishing detail.</p>
          </div>
          <div className="steps">
            {[
              ['01', 'Thoughtful Designs', 'Useful details and considered shapes, created with intention.'],
              ['02', 'Comfort First', 'Soft, wearable fabrics that look polished and feel effortless.'],
              ['03', 'Style Your Way', 'Versatile pieces made to become part of your own story.'],
            ].map(([number, title, copy]) => (
              <div className="step" key={number}>
                <span className="step-number">{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="collections section" id="collections">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Shop by collection</p>
              <h2>Find Your Style.<br /><em>Make It Yours.</em></h2>
            </div>
            <p>Purposeful essentials, expressive layers, and finishing touches—all made to mix,
              move, and live in.</p>
          </div>
          <div className="collection-grid">
            {collections.map((item, index) => (
              <article className={`collection-card collection-${index + 1}`} key={item.title}>
                <div className="collection-image">
                  <img src={item.image} alt={item.title} />
                  <span>0{index + 1}</span>
                </div>
                <div className="collection-copy">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href="#new-arrivals">Explore collection <Arrow diagonal /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="arrivals section" id="new-arrivals">
          <div className="section-heading arrivals-heading">
            <div>
              <p className="eyebrow">Just landed</p>
              <h2>New, Noteworthy,<br /><em>Ready to Wear.</em></h2>
            </div>
            <a className="text-button" href="#new-arrivals">View all arrivals <Arrow /></a>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <span className="badge">New arrival</span>
                  <button aria-label={`Save ${product.name}`} className="save-button">♡</button>
                </div>
                <div className="product-details">
                  <div>
                    <p>{product.category}</p>
                    <h3>{product.name}</h3>
                  </div>
                  <strong>{product.price}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="testimonials section">
          <div className="section-heading centered-heading">
            <p className="eyebrow">Worn and loved</p>
            <h2>Style Loved.<br /><em>Comfort Remembered.</em></h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((item, index) => (
              <article className="testimonial-card" key={item.name}>
                <div className="quote-mark">“</div>
                <p className="quote">{item.quote}</p>
                <div className="testimonial-person">
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.detail}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="faq section">
          <div className="faq-intro">
            <p className="eyebrow">Good to know</p>
            <h2>Everything You<br /><em>Need to Know.</em></h2>
            <p>Questions about your style, fit, or order? Start here.</p>
            <a className="text-button" href="#contact">Still need help? Contact us <Arrow /></a>
          </div>
          <div className="accordion">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div className={`faq-item ${isOpen ? 'open' : ''}`} key={faq.question}>
                  <button onClick={() => setOpenFaq(isOpen ? -1 : index)} aria-expanded={isOpen}>
                    <span><small>0{index + 1}</small>{faq.question}</span>
                    <b>{isOpen ? '−' : '+'}</b>
                  </button>
                  <div className="faq-answer"><p>{faq.answer}</p></div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="final-cta">
          <div className="cta-orbit orbit-one" />
          <div className="cta-orbit orbit-two" />
          <p className="eyebrow">Your wardrobe, considered</p>
          <h2>Make Every<br /><em>Outfit Count.</em></h2>
          <p>Discover pieces that bring together lasting comfort and unmistakable style.</p>
          <a className="button button-cream" href="#collections">Explore Collection <Arrow /></a>
        </section>
      </main>

      <footer id="contact">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="brand brand-light" href="#home">
              <span className="brand-mark">D</span>
              <span>DelightEnterprices</span>
            </a>
            <p>Contemporary clothing designed for the way you move through every day.</p>
          </div>
          <div className="footer-links">
            <div>
              <p>Explore</p>
              <a href="#home">Home</a>
              <a href="#collections">Collections</a>
              <a href="#new-arrivals">New Arrivals</a>
              <a href="#about">Our Story</a>
            </div>
            <div>
              <p>Customer care</p>
              <a href="#contact">Contact</a>
              <a href="#contact">Size Guide</a>
              <a href="#contact">Shipping & Returns</a>
              <a href="#contact">FAQs</a>
            </div>
            <div>
              <p>Follow along</p>
              <a href="#contact">Instagram</a>
              <a href="#contact">Pinterest</a>
              <a href="#contact">Facebook</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 DelightEnterprices. All rights reserved.</p>
          <div><a href="#contact">Privacy</a><a href="#contact">Terms</a></div>
        </div>
      </footer>
    </div>
  )
}

export default App
