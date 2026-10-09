import React, { useRef, useState, useEffect } from "react";
import "./TrustedBy.css";

// Import images from the trust folder
import logo3m from "../assets/trust/logo_trusted_3m.webp";
import logoMckesson from "../assets/trust/logo_trusted_mckesson.webp";
import logoNrc from "../assets/trust/logo_trusted_nrc.webp";
import logoOdevo from "../assets/trust/logo_trusted_odevo.webp";
import logoSap from "../assets/trust/logo_trusted_sap.webp";
import logoUniversityOfSydney from "../assets/trust/logo_trusted_university_of_sydeny.webp";
import logoUofuBusiness from "../assets/trust/logo_trusted_uofu_business.webp";
import logoVerizon from "../assets/trust/logo_trusted_verizon-300x140.webp";
import logoVyde from "../assets/trust/logo_trusted_vyde.webp";
import logoWorkforce from "../assets/trust/logo_trusted_workforce.webp";
import logoTrademarkia from "../assets/trust/trusted_logo_trademarkia.webp";

const TrustedBy = () => {
  const containerRef = useRef(null);

  // Array of imported images
  const images = [
    logo3m,
    logoMckesson,
    logoNrc,
    logoOdevo,
    logoSap,
    logoUniversityOfSydney,
    logoUofuBusiness,
    logoVerizon,
    logoVyde,
    logoWorkforce,
    logoTrademarkia,
  ];

  useEffect(() => {
    const container = containerRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (container) {
        scrollAmount += 1;
        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0; 
        }
        container.scrollLeft = scrollAmount;
      }
    };

    const intervalId = setInterval(scroll, 30);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="trusted-by-section">
      <h2>Trusted by:</h2>
      <div className="logo-carousel-container" ref={containerRef}>
        <div className="logo-carousel">
          {images.map((image, index) => (
            <img key={`original-${index}`} src={image} alt={`Client ${index + 1}`} />
          ))}
          {images.map((image, index) => (
            <img key={`duplicate-${index}`} src={image} alt={`Client Duplicate ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
