import { useState, useEffect } from 'react';
import { images } from './assets/images';

type ProjectsProps = {
  print: string,
  link: string,
}

interface CarouselProps {
  projects: ProjectsProps[]
}

function Carousel({ projects }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 639px)');
    let intervalId: number | undefined;

    const handleMediaChange = () => {
      if (mediaQuery.matches) {
        intervalId = window.setInterval(nextSlide, 3000);
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
    <div className="relative w-7/12 max-w-2xl mx-auto group max-xl:w-4/6 max-lg:w-full max-lg:order-3 max-lg:py-4 max-md:w-auto max-md:mx-4">
      <div className="overflow-hidden rounded-lg shadow-lg shadow-slate-950 focus-within:outline outline-1 outline-white">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${index === currentIndex ? 'block' : 'hidden'}`}
          >
            <img src={project.print} alt={`Slide ${index}`} className="w-full" />
            <a href={project.link} target='_blank' rel='noopener noreferrer' className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal-900 bg-opacity-50 hover:bg-opacity-100 text-white text-center font-medium transition-colors duration-200 p-1 rounded-lg hidden group-hover:block max-sm:block">
                Visualizar Projeto
            </a>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 rounded-xl ml-1.5 bg-teal-900 bg-opacity-50 hover:bg-opacity-100 transition-colors duration-200 max-sm:hidden"
        onClick={prevSlide}
      >
        <img src={images.LeftChevron} alt="Left Chevron" className="size-10 -ml-0.5" />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 rounded-xl mr-1.5 bg-teal-900 bg-opacity-50 hover:bg-opacity-100 transition-colors duration-200 max-sm:hidden"
        onClick={nextSlide}
      >
        <img src={images.RightChevron} alt="Right Chevron" className="size-10 -mr-0.5" />
      </button>
    </div>
  );
}

export default Carousel;