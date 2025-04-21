import { User, Mail, MapPin, Calendar } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-5/12 order-2 md:order-1">
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-pink-400 to-purple-500 opacity-70 blur animate-pulse"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://i.pinimg.com/736x/cc/9a/16/cc9a16ffb397c831a1bbf09ef13f1727.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Profile" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-7/12 order-1 md:order-2">
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-1 bg-gradient-to-r from-pink-400 to-purple-500 inline-block text-transparent bg-clip-text">
                About Me
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></div>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Hello! I'm a passionate designer and developer with a love for creating beautiful, 
              functional digital experiences. With a background in both design and development, 
              I bring a unique perspective to every project.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              I believe in creating work that not only looks good but also solves real problems. 
              Whether it's a website, an app, or a digital product, I focus on creating intuitive, 
              user-friendly experiences that delight users and achieve business goals.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/20 flex items-center justify-center text-pink-500 dark:text-pink-300">
                  <User size={18} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">Name</h4>
                  <p className="font-medium text-gray-800 dark:text-gray-200">Your Name</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center text-purple-500 dark:text-purple-300">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">Email</h4>
                  <p className="font-medium text-gray-800 dark:text-gray-200">hello@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/20 flex items-center justify-center text-teal-500 dark:text-teal-300">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">Location</h4>
                  <p className="font-medium text-gray-800 dark:text-gray-200">Visakhapatnam , India</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-500 dark:text-blue-300">
                  <Calendar size={18} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400">Experience</h4>
                  <p className="font-medium text-gray-800 dark:text-gray-200">2+ Years</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 text-white font-medium hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;