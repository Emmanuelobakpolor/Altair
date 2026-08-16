import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Features from "./components/Features.jsx";
import HelpSection from "./components/HelpSection.jsx";
import HeroSection from "./components/HeroSection.jsx";
import SiteHeader from "./components/SiteHeader.jsx";
import Testimonials from "./components/Testimonials.jsx";
import TrustedBy from "./components/TrustedBy.jsx";
import BusinessInsightsSection from "./components/BusinessInsightsSection.jsx";
import FormSection from "./components/FormSection.jsx";
import FAQSection from "./components/FAQSection.jsx";
import Footer from "./components/Footer.jsx";
import AboutSection from "./components/AboutSection.jsx";

function App() {
  return (
    <div className="app-shell">
      <SiteHeader />
      <HeroSection />
      <HelpSection />
      <TrustedBy />
      <Features />
      <Testimonials />
      <BusinessInsightsSection />
      <FormSection />
      <FAQSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
