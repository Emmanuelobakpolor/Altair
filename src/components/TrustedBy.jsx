import React from "react";
import "./TrustedBy.css";
import { useReveal, useRevealChildren } from "../hooks/useReveal";

import logo3m from "../assets/trust/logo_trusted_3m.webp";
import logoMcKesson from "../assets/trust/logo_trusted_mckesson.webp";
import logoNrc from "../assets/trust/logo_trusted_nrc.webp";
import logoOdevo from "../assets/trust/logo_trusted_odevo.webp";
import logoSap from "../assets/trust/logo_trusted_sap.webp";
import logoSydney from "../assets/trust/logo_trusted_university_of_sydeny.webp";
import logoUofu from "../assets/trust/logo_trusted_uofu_business.webp";
import logoVerizon from "../assets/trust/logo_trusted_verizon-300x140.webp";
import logoVyde from "../assets/trust/logo_trusted_vyde.webp";
import logoWorkforce from "../assets/trust/logo_trusted_workforce.webp";
import logoTrademarkia from "../assets/trust/trusted_logo_trademarkia.webp";

const LOGOS = [
  { src: logo3m, alt: "3M" },
  { src: logoVerizon, alt: "Verizon" },
  { src: logoSap, alt: "SAP" },
  { src: logoMcKesson, alt: "McKesson" },
  { src: logoNrc, alt: "NRC" },
  { src: logoOdevo, alt: "Odevo" },
  { src: logoSydney, alt: "University of Sydney" },
  { src: logoUofu, alt: "University of Utah, Business School" },
  { src: logoVyde, alt: "Vyde" },
  { src: logoWorkforce, alt: "Workforce" },
  { src: logoTrademarkia, alt: "Trademarkia" },
];

const STATS = [
  { value: "40+", label: "Projects delivered" },
  { value: "11", label: "Industries served" },
  { value: "24–48h", label: "Avg. response time" },
  { value: "5000+", label: "Leaders informed" },
];

const TrustedBy = () => {
  const introRef = useReveal();
  const gridRef = useRevealChildren();

  return (
    <section className="trusted section">
      <div className="container trusted-inner reveal" ref={introRef}>
        <p className="trusted-label">Trusted by forward-thinking teams</p>

        <div className="trusted-marquee" aria-hidden="true">
          <div className="trusted-track">
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <div className="trusted-logo-wrap" key={`${logo.alt}-${i}`}>
                <img src={logo.src} alt={logo.alt} className="trusted-img" />
              </div>
            ))}
          </div>
        </div>

        <div className="trusted-stats stagger" ref={gridRef}>
          {STATS.map((stat) => (
            <div className="trusted-stat reveal-scale" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="trusted-chips" aria-hidden="true">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="trusted-chip">
              AI Strategy &nbsp;·&nbsp; NLP &nbsp;·&nbsp; Machine Learning
              &nbsp;·&nbsp; Data Engineering &nbsp;·&nbsp; BI &amp;
              Visualization &nbsp;·&nbsp; Predictive Analytics
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
