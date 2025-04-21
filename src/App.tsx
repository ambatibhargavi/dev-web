import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  // Handle smooth scrolling for navigation
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth',
          });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // Update page title
  useEffect(() => {
    document.title = 'Your Name - Portfolio';
  }, []);

  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 antialiased transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />

        {/* Custom Cursor */}
        <div className="custom-cursor-outer fixed pointer-events-none"></div>
        <div className="custom-cursor-inner fixed pointer-events-none"></div>
      </div>
    </ThemeProvider>
  );
}

export default App;