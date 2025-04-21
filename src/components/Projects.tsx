import { projects } from '../data';
import { Github, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-purple-500 inline-block text-transparent bg-clip-text">
            My Projects
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Check out some of my recent work. Each project was built with passion and attention to detail.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ease-in-out ${
                    hoveredProject === project.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-pink-400/90 text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
                
                <div className="flex justify-between items-center">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-pink-500 dark:text-pink-300 hover:underline"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  
                  <a
                    href={project.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-300"
                  >
                    <Github size={16} /> Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full border-2 border-pink-400 dark:border-pink-300 text-pink-500 dark:text-pink-300 font-medium hover:bg-pink-50 dark:hover:bg-pink-900/20 hover:shadow-lg transition-all duration-300"
          >
            <Github size={18} className="mr-2" /> View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;