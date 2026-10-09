
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Features from './components/Features.jsx'
import HelpSection from './components/HelpSection.jsx'
import HeroSection from './components/HeroSection.jsx'
import Testimonials from './components/Testimonials.jsx'
import TrustedBy from './components/TrustedBy.jsx'
import BookSection from './components/BookSection.jsx';
import BusinessInsightsSection from './components/BusinessInsightsSection.jsx';
import FormSection from './components/FormSection.jsx';
import FAQSection from './components/FAQSection.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <>
      <HeroSection />
      <HelpSection/>
      <TrustedBy/>
      <Features/>
      <Testimonials/>
      <BookSection/>
      <BusinessInsightsSection/>
      <FormSection/>
      <FAQSection/>
      <Footer/>
    </>
  )
}

export default App
