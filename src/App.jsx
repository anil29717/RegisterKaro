// File: App.jsx
import React from 'react';
import Marqueline from './components/Marqueline';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import VideoIntro from './components/VideoIntro';
import HappyClients from './components/HappyClients';
import DigitalTransformation from './components/DigitalTransformation';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import MobileApp from './components/MobileApp';
import Stats from './components/Stats';
// import CallToAction from './components/CallToAction';
import TechPartners from './components/TechPartners';
import Footer from './components/Footer';
import FooterBar from './components/FooterBar';
import ApplicationProcessSteps from './components/ApplicationProcessStep';

function App() {
  return (
    <div className="font-sans">
      <Marqueline />
      <Navbar />
      <Hero />
      <Partners />
      <Services />
      <About />
      <WhyChooseUs />
      <VideoIntro />
      <HappyClients />
      <ApplicationProcessSteps />
      <DigitalTransformation />
      <Testimonials />
      <FAQ />
      <MobileApp />
      <Stats />
      {/* <CallToAction /> */}
      <TechPartners />
      <Footer />
      <FooterBar />
    </div>
  );
}

export default App;