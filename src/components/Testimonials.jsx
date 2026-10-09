import React from "react";
import "./Testimonials.css";
import { useRevealChildren } from "../hooks/useReveal";
import { WHATSAPP_CALL_LINK } from "../lib/contact";

const TESTIMONIALS = [
  {
    quote:
      "Working with Altair Analytics has been a highly positive experience. Their collaborative approach, combined with a strategic mindset, ensured we were aligned every step of the way. They took the time to understand our unique business challenges and delivered tailored AI solutions that met our needs.",
    name: "Anonymous",
    role: "Director of Operations",
    company: "Enterprise Client",
    initials: "EC",
  },
  {
    quote:
      "The team moved fast without cutting corners. Within weeks we had a working analytics pipeline that our own engineers could maintain — not a black box we'd be stuck paying for forever.",
    name: "Anonymous",
    role: "VP of Engineering",
    company: "SaaS Platform",
    initials: "SP",
  },
  {
    quote:
      "What stood out was how much they cared about the actual decision our data needed to support, not just the dashboard. That framing changed how our whole team thinks about reporting.",
    name: "Anonymous",
    role: "Head of Strategy",
    company: "Growth-Stage Startup",
    initials: "GS",
  },
];

const Testimonials = () => {
  const ref = useRevealChildren();

  return (
    <section className="testimonials section" ref={ref}>
      <div className="container">
        <div className="testimonials-header reveal">
          <span className="section-label">Social proof</span>
          <h2 className="section-title">
            In our customers&apos; <span className="grad">own words</span>
          </h2>
          <p className="section-sub">
            Real feedback from the teams we&apos;ve helped turn data into
            decisions.
          </p>
        </div>

        <div className="testimonials-grid stagger">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.name + t.company}
              className="testimonial-card glass-card reveal"
            >
              <div className="testimonial-stars" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i key={i} className="fas fa-star" />
                ))}
              </div>
              <p>{t.quote}</p>
              <footer className="testimonial-author">
                <div className="author-avatar">{t.initials}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>
                    {t.role} · {t.company}
                  </span>
                </div>
              </footer>
              <span className="testimonial-quote" aria-hidden="true">
                &ldquo;
              </span>
            </blockquote>
          ))}
        </div>

        <div className="testimonials-cta reveal">
          <a
            href={WHATSAPP_CALL_LINK}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Similar Results
            <i className="fas fa-arrow-right" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
