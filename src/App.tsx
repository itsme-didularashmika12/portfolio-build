import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Packages from './components/Packages';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <HelmetProvider>
      <SEO />
      <div className="bg-white min-h-screen selection:bg-[#FF0000] selection:text-white font-sans antialiased">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Packages />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </HelmetProvider>
  );
}

export default App;
