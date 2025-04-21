import { socialLinks } from '../data';
import * as LucideIcons from 'lucide-react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  // Get the icon component by name
  const getIconByName = (iconName: string) => {
    const Icon = (LucideIcons as Record<string, React.FC<{ size?: number; className?: string }>>)[iconName];
    return Icon ? <Icon size={20} /> : null;
  };

  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <a
              href="#home"
              className="text-2xl font-bold text-pink-400 dark:text-pink-300"
            >
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
                Portfolio
              </span>
              <span className="ml-1">✨</span>
            </a>
          </div>
          
          <div className="flex items-center space-x-6 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-pink-100 dark:hover:bg-pink-900/20 hover:text-pink-500 dark:hover:text-pink-300 transition-colors duration-300"
                aria-label={social.platform}
              >
                {getIconByName(social.icon)}
              </a>
            ))}
          </div>
          
          <div className="text-center text-gray-600 dark:text-gray-400 mb-6">
            <p className="mb-2">
              Let's create something amazing together.
            </p>
            <a 
              href="mailto:hello@example.com" 
              className="text-pink-500 dark:text-pink-300 hover:underline"
            >
              hello@example.com
            </a>
          </div>
          
          <div className="w-full h-px bg-gray-200 dark:bg-gray-800 max-w-sm mb-6"></div>
          
          <p className="text-gray-500 dark:text-gray-500 text-sm flex items-center">
            © {currentYear} Made with <Heart size={14} className="mx-1 text-pink-500 animate-pulse" /> by Your Name
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;