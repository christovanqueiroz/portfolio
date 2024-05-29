import { images } from './assets/images';
import { projects } from './assets/projects/projects'
import Carousel from './Carousel'

function App() {
  return (
    <div className="bg-gradient-to-b from-cyan-600 to to-teal-900 w-screen min-h-screen h-full flex gap-2 max-xl:justify-between max-lg:flex-col">
      <div className="w-5/12 flex flex-col justify-center items-center gap-4 text-white max-xl:w-2/6 max-xl:mx-4 max-lg:w-full max-lg:mx-0 max-lg:p-4">
        <div className="flex flex-col text-center cursor-default max-sm:mt-4">
          <b className="text-2xl">Christovan Queiroz</b>
          <span className="text-xl">Desenvolvedor Frontend</span>
        </div>

        <div className="w-56">
          <img src={images.Avatar} />
        </div>

        <ul className="flex flex-col gap-2 font-medium">
          <li className="hover:underline">
            <a href="mailto:christovanbrumqueiroz@gmail.com" className="flex gap-2 items-center focus:outline-teal-900">
              <img src={images.Mail} className="w-8" alt="Mail Image" />
              christovanbrumqueiroz@gmail.com
            </a>
          </li>

          <li className="hover:underline ml-12 max-sm:ml-0">
            <a href="https://github.com/christovanqueiroz" className="flex gap-2 items-center focus:outline-teal-900" target="_blank" rel="noopener noreferrer">
              <img src={images.Github} className="w-8" alt="Github Image" />
              github.com/christovanqueiroz
            </a>
          </li>
          
          <li className="hover:underline ml-24 text-nowrap max-sm:ml-0">
            <a href="https://linkedin.com/in/christovan-queiroz" className="flex gap-2 items-center focus:outline-teal-900" target="_blank" rel="noopener noreferrer">
              <img src={images.Linkedin} className="w-8" alt="Linkedin Image" />
              linkedin.com/in/christovan-queiroz
            </a>
          </li>
        </ul>
      </div>

      <div className="w-7/12 flex flex-col justify-center items-center gap-6 max-lg:w-full">
        <div className="flex justify-between w-2/3 max-lg:order-2 max-lg:w-full max-lg:justify-center max-lg:gap-12 max-sm:gap-4">
          <img src={images.Html} alt="Html Image" className="size-12 grayscale animate-grayscaleToNormal" />
          <img src={images.Css} alt="Css Image" className="size-12 grayscale animate-grayscaleToNormal" />
          <img src={images.Js} alt="Javascript Image" className="size-12 grayscale animate-grayscaleToNormal" />
          <img src={images.Typescript} alt="Typescript Image" className="size-12 grayscale animate-grayscaleToNormal" />
          <img src={images.React} alt="React Image" className="size-12 grayscale animate-grayscaleToNormal" />
        </div>

        <Carousel 
          projects={projects}
        />

        <div className="max-lg:py-4 max-lg:order-1">
          <a href="../Currículo.pdf" target="_blank" className="py-2 px-4 bg-white flex items-center gap-2 rounded-3xl uppercase cursor-pointer font-medium text-teal-900 border border-white hover:text-white hover:bg-transparent focus:outline-teal-900 transition-colors duration-200 shadow-md shadow-slate-950 group">
            Currículo
            <img src={images.DownArrow} alt="Down Arrow" className="size-5 border bg-white border-slate-600 rounded-full group-hover:animate-bounce" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default App