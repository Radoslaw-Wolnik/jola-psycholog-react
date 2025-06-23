// src/App.tsx
import React from 'react';
import Header from './components/Header.tsx';
import AboutSection from './components/AboutSection.tsx';
import ServicesSection from './components/ServicesSection.tsx';
import PracticeSection from './components/PracticeSection.tsx';
import HelpSection from './components/HelpSection.tsx';
import OfficeSection from './components/OfficeSection.tsx';
import ContactSection from './components/ContactSection.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <AboutSection />
        <ServicesSection />
        <PracticeSection />
        <HelpSection />
        <OfficeSection />
        <ContactSection />
      </main>
      <div className="!m-32 text-xl ">Test</div>
      <footer className="py-18 text-center text-muted text-sm">
        <p className="text-2xl px-20">© {new Date().getFullYear()} Jolanta Dominiak-Konderak | Wszelkie prawa zastrzeżone</p>
      </footer>
    </div>
  );
};

export default App;