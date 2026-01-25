import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Projects from './components/Projects';
//import Blog from './components/Blog';
import Skills from './components/Skills';
import More from './components/More';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import IntroAnimation from './components/IntroAnimation';
import ParticlesBackground from './components/ParticlesBackground';
import './App.css';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <div className="min-h-screen bg-background text-text-primary overflow-x-hidden">
      <ParticlesBackground />
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <WorkExperience />
        <Education />
        <Projects />
        {/* <Blog /> */}
        <Skills />
        <More />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
