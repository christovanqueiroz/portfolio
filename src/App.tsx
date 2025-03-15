import { useState, useEffect, useRef } from 'react';
import { images } from './assets/images';
import { projects } from './assets/projects/projects'
import Carousel from './Carousel'

function App() {
  const [activeSection, setActiveSection] = useState<string>("sobre");
  const [isLoaded, setIsLoaded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight * 0.8;
        
        if (sectionTop < screenPosition) {
          section.classList.add('active');
          setActiveSection(section.id);
          
          if (section.id === 'habilidades' && skillsRef.current) {
            const skillItems = skillsRef.current.querySelectorAll('.skill-item');
            skillItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animated');
              }, index * 100);
            });
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Triggar uma vez no carregamento inicial
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-b from-cyan-600 to-teal-900 w-full min-h-screen h-full flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-teal-900/80 backdrop-blur-sm z-50 shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-white font-bold text-2xl">CQ</div>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-white">
            <li>
              <button 
                onClick={() => scrollToSection("sobre")} 
                className={`hover:text-cyan-200 transition-colors ${activeSection === "sobre" ? "text-cyan-200 border-b-2 border-cyan-200" : ""}`}
              >
                Sobre
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("habilidades")} 
                className={`hover:text-cyan-200 transition-colors ${activeSection === "habilidades" ? "text-cyan-200 border-b-2 border-cyan-200" : ""}`}
              >
                Habilidades
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("projetos")} 
                className={`hover:text-cyan-200 transition-colors ${activeSection === "projetos" ? "text-cyan-200 border-b-2 border-cyan-200" : ""}`}
              >
                Projetos
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("contato")} 
                className={`hover:text-cyan-200 transition-colors ${activeSection === "contato" ? "text-cyan-200 border-b-2 border-cyan-200" : ""}`}
              >
                Contato
              </button>
            </li>
          </ul>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-teal-800 py-4 px-4 absolute w-full shadow-lg animate-fade-in">
            <ul className="flex flex-col space-y-4 text-white">
              <li>
                <button 
                  onClick={() => scrollToSection("sobre")} 
                  className={`block w-full text-left px-2 py-1 rounded-md ${activeSection === "sobre" ? "bg-teal-700 text-cyan-200" : "hover:bg-teal-700"}`}
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("habilidades")} 
                  className={`block w-full text-left px-2 py-1 rounded-md ${activeSection === "habilidades" ? "bg-teal-700 text-cyan-200" : "hover:bg-teal-700"}`}
                >
                  Habilidades
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("projetos")} 
                  className={`block w-full text-left px-2 py-1 rounded-md ${activeSection === "projetos" ? "bg-teal-700 text-cyan-200" : "hover:bg-teal-700"}`}
                >
                  Projetos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contato")} 
                  className={`block w-full text-left px-2 py-1 rounded-md ${activeSection === "contato" ? "bg-teal-700 text-cyan-200" : "hover:bg-teal-700"}`}
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Header/Banner */}
      <header className="pt-20 px-4 sm:px-8 lg:px-16 flex flex-col lg:flex-row lg:items-center lg:justify-between min-h-screen">
        <div className={`lg:w-1/2 flex flex-col items-center lg:items-start text-white max-w-xl mx-auto lg:mx-0 ${isLoaded ? 'animate-slide-in-left' : 'opacity-0'}`}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center lg:text-left">
            Olá, eu sou<br /><span className="text-cyan-200">Christovan Queiroz</span>
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-center lg:text-left">
            Desenvolvedor Frontend especializado em criar experiências web modernas e responsivas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="../Currículo.pdf" 
              target="_blank" 
              className="py-3 px-6 bg-white text-teal-900 rounded-full font-medium hover:bg-cyan-200 transition-colors shadow-lg flex items-center justify-center gap-2 group"
            >
              Currículo
              <img src={images.DownArrow} alt="Download" className="size-5 border bg-white border-slate-600 rounded-full group-hover:animate-bounce" />
            </a>
            <button 
              onClick={() => scrollToSection("projetos")} 
              className="py-3 px-6 bg-transparent text-white border-2 border-white rounded-full hover:bg-white hover:text-teal-900 transition-colors"
            >
              Ver Projetos
            </button>
          </div>
        </div>
        
        <div className={`lg:w-1/2 mt-12 lg:mt-0 flex justify-center ${isLoaded ? 'animate-slide-in-right' : 'opacity-0'}`}>
          <div className="w-48 sm:w-64 lg:w-80 relative">
            <div className="absolute inset-0 bg-cyan-200 rounded-full blur-2xl opacity-20 animate-pulse-slow"></div>
            <img 
              src={images.Avatar} 
              alt="Christovan Queiroz" 
              className="w-full rounded-full shadow-xl relative z-10" 
            />
          </div>
        </div>
      </header>

      {/* Sobre mim */}
      <section id="sobre" className="py-20 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-teal-900 mb-8 text-center">Sobre Mim</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
            <p className="mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              Sou um desenvolvedor frontend apaixonado por criar interfaces modernas e intuitivas. Minha jornada no desenvolvimento web começou com HTML, CSS e JavaScript, e desde então tenho me especializado em tecnologias como React e TypeScript.
            </p>
            <p className="opacity-0 animate-fade-in" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
              Busco sempre entregar projetos de alta qualidade, com foco em desempenho, acessibilidade e experiência do usuário. Estou constantemente aprendendo novas tecnologias e métodos para melhorar minhas habilidades como desenvolvedor.
            </p>
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section id="habilidades" className="py-20 px-4 sm:px-8 lg:px-16 bg-teal-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-teal-900 mb-8 text-center">Minhas Habilidades</h2>
          
          <div ref={skillsRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
            <div className="skill-item bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center transition-transform hover:scale-105 opacity-0 w-full h-40" style={{ transitionDelay: '100ms' }}>
              <div className="h-16 flex items-center justify-center">
                <img src={images.Html} alt="HTML5" className="size-16" />
              </div>
              <h3 className="font-medium text-teal-900 mt-2">HTML5</h3>
            </div>
            
            <div className="skill-item bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center transition-transform hover:scale-105 opacity-0 w-full h-40" style={{ transitionDelay: '200ms' }}>
              <div className="h-16 flex items-center justify-center">
                <img src={images.Css} alt="CSS3" className="size-16" />
              </div>
              <h3 className="font-medium text-teal-900 mt-2">CSS3</h3>
            </div>
            
            <div className="skill-item bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center transition-transform hover:scale-105 opacity-0 w-full h-40" style={{ transitionDelay: '300ms' }}>
              <div className="h-16 flex items-center justify-center">
                <img src={images.Js} alt="JavaScript" className="size-16" />
              </div>
              <h3 className="font-medium text-teal-900 mt-2">JavaScript</h3>
            </div>
            
            <div className="skill-item bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center transition-transform hover:scale-105 opacity-0 w-full h-40" style={{ transitionDelay: '400ms' }}>
              <div className="h-16 flex items-center justify-center">
                <img src={images.Typescript} alt="TypeScript" className="size-16" />
              </div>
              <h3 className="font-medium text-teal-900 mt-2">TypeScript</h3>
            </div>
            
            <div className="skill-item bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center transition-transform hover:scale-105 opacity-0 w-full h-40 lg:col-span-1 col-span-2" style={{ transitionDelay: '500ms' }}>
              <div className="h-16 flex items-center justify-center">
                <img src={images.React} alt="React" className="size-16" />
              </div>
              <h3 className="font-medium text-teal-900 mt-2">React</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-cyan-600 to-teal-900 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Meus Projetos</h2>
          
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            <Carousel projects={projects} />
          </div>
        </div>
      </section>

      {/* Contato - Melhora para telas muito pequenas */}
      <section id="contato" className="py-20 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-teal-900 mb-8 text-center">Entre em Contato</h2>
          
          <div className="max-w-2xl mx-auto bg-teal-50 p-4 sm:p-8 rounded-lg shadow-lg opacity-0 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            <div className="flex flex-col gap-6">
              <a 
                href="mailto:christovanbrumqueiroz@gmail.com" 
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-3 sm:p-4 bg-white rounded-lg shadow-sm transition-transform hover:scale-105"
              >
                <div className="bg-teal-600 p-3 rounded-full flex-shrink-0">
                  <img src={images.Mail} className="w-6 h-6 filter brightness-0 invert" alt="Email" />
                </div>
                <div className="w-full overflow-hidden">
                  <h3 className="font-medium text-teal-900">Email</h3>
                  <p className="text-gray-600 text-sm sm:text-base truncate hover:text-clip">
                    christovanbrumqueiroz@gmail.com
                  </p>
                </div>
              </a>
              
              <a 
                href="https://github.com/christovanqueiroz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-3 sm:p-4 bg-white rounded-lg shadow-sm transition-transform hover:scale-105"
              >
                <div className="bg-teal-600 p-3 rounded-full flex-shrink-0">
                  <img src={images.Github} className="w-6 h-6 filter brightness-0 invert" alt="GitHub" />
                </div>
                <div>
                  <h3 className="font-medium text-teal-900">GitHub</h3>
                  <p className="text-gray-600 text-sm sm:text-base">github.com/christovanqueiroz</p>
                </div>
              </a>
              
              <a 
                href="https://linkedin.com/in/christovan-queiroz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-3 sm:p-4 bg-white rounded-lg shadow-sm transition-transform hover:scale-105"
              >
                <div className="bg-teal-600 p-3 rounded-full flex-shrink-0">
                  <img src={images.Linkedin} className="w-6 h-6 filter brightness-0 invert" alt="LinkedIn" />
                </div>
                <div>
                  <h3 className="font-medium text-teal-900">LinkedIn</h3>
                  <p className="text-gray-600 text-sm sm:text-base">linkedin.com/in/christovan-queiroz</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-teal-900 text-white text-center">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Christovan Queiroz. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App