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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-12 bg-gradient-to-b from-cyan-600 to-teal-900 text-white sm:p-24 md:p-12 lg:flex-row p-8 justify-evenly xl:p-0">
      <div className="text-center">
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
          <Image className='bg-white border-4 border-white rounded-full w-72 h-72 max-sm:w-[180px] max-sm:h-[180px] md:w-[300px] md:h-[300px] max-xl:w-[120px] max-xl:h-[120px]'
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
        <div className='flex'>
          <div>
            <Image
              src={Html}
              alt='Html'
              width={48}
              height={48}
            />
          </div>

          <div>
            <Image 
              src={Css}
              alt='Css'
              width={48}
              height={48}
            />
          </div>
        </div>

        <div className='flex'>
          <div>
            <Image 
              src={LeftChevron}
              alt='LeftChevron'
              width={48}
              height={48}
            />
          </div>
          
          <div className='border-2 border-white rounded-lg w-48 h-32 sm:w-56 sm:h-40 md:w-80 md:h-48 lg:w-96 lg:h-72'>

          </div>

          <div>
            <Image 
              src={RightChevron}
              alt='RightChevron'
              width={48}
              height={48}
            />
          </div>
        </div>

        <div className='flex'>
          <div>
            <Image 
              src={ReactLogo}
              alt='ReactLogo'
              width={48}
              height={48}
            />
          </div>

          <div>
            <Image 
              src={Js}
              alt='Js'
              width={48}
              height={48}
            />
          </div>
        </div>

        <div>
          <button>
            Hover me
          </button>
        </div>
      </div>
    </main>
  )
}
