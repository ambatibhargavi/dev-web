import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "I create delightful digital experiences";
  const typingSpeed = 100;
  
  useEffect(() => {
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        
        // Reset after a pause
        setTimeout(() => {
          currentIndex = 0;
          
          // Start typing again
          const newTypingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
              setTypedText(fullText.slice(0, currentIndex));
              currentIndex++;
            } else {
              clearInterval(newTypingInterval);
            }
          }, typingSpeed);
        }, 3000);
      }
    }, typingSpeed);
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-pink-200 dark:bg-pink-900/20 rounded-full filter blur-3xl opacity-50 dark:opacity-30 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-50 dark:opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-teal-200 dark:bg-teal-900/20 rounded-full filter blur-3xl opacity-50 dark:opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-900/20 text-pink-500 dark:text-pink-300 font-medium animate-fade-in-down">
            Hello there! 👋
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-gray-800 dark:text-white animate-fade-in-down animation-delay-300">
            I'm <span className="bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">Your Name</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-8 min-h-[2.5rem] animate-fade-in-down animation-delay-600">
            {typedText}<span className="inline-block w-1 h-6 bg-pink-400 dark:bg-pink-300 ml-1 animate-blink"></span>
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-down animation-delay-900">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 text-white font-medium hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border-2 border-pink-400 dark:border-pink-300 text-pink-500 dark:text-pink-300 font-medium hover:bg-pink-50 dark:hover:bg-pink-900/20 hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown size={24} className="text-gray-400 dark:text-gray-500" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;