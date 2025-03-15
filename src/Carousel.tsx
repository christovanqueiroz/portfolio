import { useState, useEffect } from 'react';
import { images } from './assets/images';

type ProjectsProps = {
  print: string,
  link: string,
  title: string,
  description: string,
  technologies: string[],
}

interface CarouselProps {
  projects: ProjectsProps[]
}

function Carousel({ projects }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 639px)');
    let intervalId: number | undefined;

    const handleMediaChange = () => {
      if (mediaQuery.matches) {
        intervalId = window.setInterval(nextSlide, 5000);
      } else if (intervalId) {
        clearInterval(intervalId);
      }
    };

    handleMediaChange();

    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, [projects.length]);

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="overflow-hidden rounded-xl shadow-2xl bg-teal-950">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100 block' : 'opacity-0 hidden'
            }`}
          >
            <div className="md:w-3/5 relative group overflow-hidden">
              <img 
                src={project.print} 
                alt={`Screenshot do projeto ${project.title}`} 
                className="w-full object-cover md:h-auto max-h-96 md:max-h-none transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full bg-white text-teal-900 py-2 px-4 rounded-lg font-medium flex justify-center items-center gap-2 hover:bg-cyan-200 transition-colors duration-300"
                  >
                    Visualizar Projeto
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/5 p-6 flex flex-col justify-between bg-teal-950">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-sm sm:text-base text-cyan-100 mb-6">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm uppercase text-cyan-200 font-medium mb-2">Tecnologias</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-teal-800 text-cyan-100 px-3 py-1 rounded-full text-xs sm:text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="md:hidden w-full bg-white text-teal-900 py-2 px-4 rounded-lg font-medium flex justify-center items-center gap-2 hover:bg-cyan-200 transition-colors duration-300"
              >
                Visualizar Projeto
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Controls */}
      <div className="flex justify-between items-center mt-6">
        <button
          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-colors duration-300 flex items-center justify-center"
          onClick={prevSlide}
          disabled={isTransitioning}
        >
          <img src={images.LeftChevron} alt="Anterior" className="size-5 sm:size-6" />
        </button>
        
        <div className="flex space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-6 sm:w-8 bg-white' : 'w-2 sm:w-3 bg-white/50'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-colors duration-300 flex items-center justify-center"
          onClick={nextSlide}
          disabled={isTransitioning}
        >
          <img src={images.RightChevron} alt="Próximo" className="size-5 sm:size-6" />
        </button>
      </div>
    </div>
  );
}

export default Carousel;