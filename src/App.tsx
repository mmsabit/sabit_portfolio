import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Qualification } from './components/Qualification';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollControls } from './components/ScrollControls';
import { VideoModal } from './components/VideoModal';
import { LightboxModal } from './components/LightboxModal';

function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white font-roboto text-[#6c757d] antialiased selection:bg-[#0BCEAF] selection:text-white">
      {/* Dynamic Floating Navbar */}
      <Navbar />

      {/* Hero / Header */}
      <Hero onOpenVideo={() => setIsVideoModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <About />
        <Qualification />
        <Skills />
        <Services />
        <Portfolio onOpenLightbox={(src) => setLightboxImage(src)} />
        <Testimonials />
        <Blog />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll Actions */}
      <ScrollControls />

      {/* Modals */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      <LightboxModal
        isOpen={!!lightboxImage}
        imageSrc={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </div>
  );
}

export default App;
