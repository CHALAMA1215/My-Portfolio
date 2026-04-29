import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

// Reusable component for scroll animations
function FadeInSection({ children }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    });
    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <FadeInSection><Home /></FadeInSection>
        <FadeInSection><About /></FadeInSection>
        <FadeInSection><Experience /></FadeInSection>
        <FadeInSection><Education /></FadeInSection>
        <FadeInSection><Skills /></FadeInSection>
        <FadeInSection><Projects /></FadeInSection>
        <FadeInSection><Contact /></FadeInSection>
      </main>
    </div>
  );
}

export default App;