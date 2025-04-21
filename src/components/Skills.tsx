import { skills } from '../data';
import * as LucideIcons from 'lucide-react';

const Skills: React.FC = () => {
  // Get the icon component by name
  const getIconByName = (iconName: string) => {
    const Icon = (LucideIcons as Record<string, React.FC<{ size?: number; className?: string }>>)[iconName];
    return Icon ? <Icon size={24} className="mb-3" /> : null;
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-purple-500 inline-block text-transparent bg-clip-text">
            My Skills
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Here are some of the technologies and tools I've worked with over the years.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="bg-white dark:bg-gray-800 rounded-xl p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className={`${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                {getIconByName(skill.icon)}
              </div>
              <h3 className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</h3>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-pink-100 dark:bg-pink-900/20 text-pink-500 dark:text-pink-300 text-sm font-medium animate-bounce">
            And many more!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;