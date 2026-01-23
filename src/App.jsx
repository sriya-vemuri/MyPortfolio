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
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary overflow-x-hidden">
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
