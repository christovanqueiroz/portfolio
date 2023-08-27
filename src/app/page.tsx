import React from 'react'

import Image from 'next/image'

import Logo from '../../public/Logo.svg'
import Avatar from '../../public/Avatar.svg'
import Mail from '../../public/Mail.svg'
import Github from '../../public/Github.svg'
import Linkedin from '../../public/Linkedin.svg'
import Html from '../../public/Html.svg'
import Css from '../../public/Css.svg'
import ReactLogo from '../../public/ReactLogo.svg'
import Js from '../../public/Js.svg'
import LeftChevron from '../../public/LeftChevron.svg'
import RightChevron from '../../public/RightChevron.svg'
import One from '../../public/One.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-12 bg-gradient-to-b from-cyan-600 to-teal-900 text-white sm:p-24 md:p-12 lg:flex-row p-8 justify-evenly xl:p-0">
      <div className="text-center cursor-default">
        <div className='flex items-center justify-center gap-4 sm:flex-col md:flex-row'>
          <Image 
            className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24'
            src={Logo}
            alt='Logo'
          />

          <div className='flex flex-col mt-4 lg:mt-2'>
            <span className='text-2xl md:text-4xl lg:text-3xl'>
              Christovan Queiroz
            </span>

            <p className='text-lg mb-4 md:text-2xl lg:text-2xl'>
              Desenvolvedor Front-end
            </p>
          </div>
        </div>

        <div className='flex justify-center'>
          <Image className='bg-white border-4 border-white rounded-full w-72 h-72 max-sm:w-[180px] max-sm:h-[180px] md:w-[300px] md:h-[300px] max-xl:w-[180px] max-xl:h-[180px]'
            src={Avatar}
            alt='Foto'
          />
        </div>

        <div className='max-sm:flex flex-row justify-center max-sm:mt-4'>
          <div className='flex flex-col md:text-xl'>
            <a className='flex gap-2 items-center justify-start p-2 cursor-default hover:underline' href="mailto:christovanbrumqueiroz@gmail.com">
              <Image
                src={Mail}
                alt='E-mail'
                width={32}
                height={32}
              />

              <span className='max-sm:hidden'>
                christovanbrumqueiroz@gmail.com
              </span>
            </a>
          </div>

          <div className='flex flex-cols sm:ml-12 md:text-xl ml-0'>
            <a className='flex gap-2 items-center justify-start p-2 cursor-default hover:underline' target='_blank' href="https://github.com/christovanqueiroz/">
              <Image
                src={Github}
                alt='Github'
                width={32}
                height={32}
              />
              <span className='max-sm:hidden'>
                github.com/christovanqueiroz
              </span>
            </a>
          </div>

          <div className='flex flex-col sm:ml-24 md:text-xl ml-0'>
            <a className='flex gap-2 items-center justify-start p-2 cursor-default hover:underline' target='_blank' href="https://linkedin.com/in/christovan-queiroz">
              <Image
                src={Linkedin}
                alt='Linkedin'
                width={32}
                height={32}
              />
              <span className='max-sm:hidden'>
                linkedin.com/in/christovan-queiroz
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className='flex flex-col'>
        <div className='flex justify-between'>
          <div className='group flex items-center'>
            <Image className='w-12 h-12 lg:w-16 lg:h-16'
              src={Html}
              alt='Html'
            />
            <span className='opacity-0 font-semibold ml-1 transition duration-300 ease-in-out group-hover:opacity-100'>
              HTML
            </span>
          </div>

          <div className='group flex items-center'>
            <span className='opacity-0 font-semibold mr-1 transition duration-300 ease-in-out group-hover:opacity-100'>
              CSS
            </span>

            <Image className='w-12 h-12 lg:w-16 lg:h-16'
              src={Css}
              alt='Css'
            />
          </div>
        </div>

        <div className='flex items-center justify-center gap-1 lg:gap-3'>
          <div className='cursor-pointer hover:-translate-x-1 transition duration-300 ease-in-out'>
            <Image
              src={LeftChevron}
              alt='LeftChevron'
              width={48}
              height={48}
            />
          </div>
          
          <div className='border-2 border-white rounded-lg relative w-48 h-28 sm:w-56 sm:h-32 md:w-80 md:h-40 lg:w-96 lg:h-52'>
            <Image
              src={One}
              alt='...'
              fill={true}
            />
          </div>

          <div className='cursor-pointer hover:translate-x-1 transition duration-300 ease-in-out'>
            <Image 
              src={RightChevron}
              alt='RightChevron'
              width={48}
              height={48}
            />
          </div>
        </div>

        <div className='flex justify-between'>
          <div className='group flex items-center'>
            <Image className='w-12 h-12 lg:w-16 lg:h-16'
              src={ReactLogo}
              alt='ReactLogo'
            />

            <span className='opacity-0 font-semibold ml-1 transition duration-300 ease-in-out group-hover:opacity-100'>
              React
            </span>
          </div>

          <div className='group flex items-center'>
            <span className='opacity-0 font-semibold mr-1 transition duration-300 ease-in-out group-hover:opacity-100'>
              JavaScript
            </span>

            <Image className='w-12 h-12 lg:w-16 lg:h-16'
              src={Js}
              alt='Js'
            />
          </div>
        </div>

        <div className='flex justify-center mt-4'>
          <button
            className="relative py-2 px-8 text-teal-900 text-base font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-cyan-600 before:to-cyan-900 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0">
            curriculo
          </button>
        </div>
      </div>
    </main>
  )
}
