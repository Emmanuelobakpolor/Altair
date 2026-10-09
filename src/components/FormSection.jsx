import React, { useState } from "react";
import "./FormSection.css";
import { useRevealChildren } from "../hooks/useReveal";

const services = [
  "AI-Driven Workflow Optimization",
  "Custom AI/LLM Development",
  "AI Tool Research",
  "AI Integration Support",
  "AI Use Case Selection",
  "AI Readiness Gaps Assessment",
  "Data Analysis & Insights Extraction",
  "AI Feasibility Assessment",
  "AI Model Improvement / Fine-Tuning",
  "Partnerships",
  "Other",
];

const FormSection = () => {
  const ref = useRevealChildren();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    reason: services[0],
    description: "",
    captcha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (String(formData.captcha).trim() !== "22") {
      alert("Captcha answer is incorrect. Please try again.");
      return;
    }
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <section className="contact section" id="contact" ref={ref}>
      <div className="container">
        <div className="contact-header reveal">
          <span className="section-label">Get started</span>
          <h2 className="section-title">
            Ready to put AI to work{" "}
            <span className="grad">for your business?</span>
          </h2>
          <p className="section-sub">
            Complete the form and we&apos;ll get back within 24–48 hours with
            the right next step for your roadmap.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-form-wrap glass-card reveal-left">
            <div className="contact-form-accent" />
            {submitted ? (
              <div className="contact-success">
                <div className="success-icon">
                  <i className="fas fa-check" />
                </div>
                <h3>Interest received</h3>
                <p>
                  Thanks {formData.name || "there"} — our team will review your
                  note and follow up shortly.
                </p>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setSubmitted(false)}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <h3 className="form-title">Consultation Form</h3>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">
                      Full Name <span className="req">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">
                      Email Address <span className="req">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="company">
                      Company & Title <span className="req">*</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Acme · Head of Data"
                      value={formData.company}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="reason">
                      Preferred Service <span className="req">*</span>
                    </label>
                    <select
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      required
                    >
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="description">
                    How can we help? <span className="req">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    placeholder="Tell us about your goals and the kind of support you need."
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field form-captcha">
                  <label htmlFor="captcha">
                    Quick check — 13 + 9 = <span className="req">*</span>
                  </label>
                  <input
                    id="captcha"
                    name="captcha"
                    type="text"
                    inputMode="numeric"
                    placeholder="Your answer"
                    value={formData.captcha}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary form-submit">
                  Submit Interest
                  <i className="fas fa-paper-plane" aria-hidden="true" />
                </button>
              </form>
            )}
          </div>

          <aside className="contact-aside reveal-right">
            <div className="aside-card glass-card">
              <div className="contact-form-accent" />
              <h3>Available Services</h3>
              <ul className="aside-list">
                {services.slice(0, 6).map((s) => (
                  <li key={s}>
                    <i className="fas fa-circle" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="aside-card glass-card">
              <div className="contact-form-accent accent-warm" />
              <h3>What Happens Next</h3>
              <p>
                After submission, Altair reviews your interest and reaches out
                with guidance on the best-fit engagement, workshop, or build
                path.
              </p>
              <a href="mailto:chukoz71@gmail.com" className="btn btn-warm">
                Talk to Consulting
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
