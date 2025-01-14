import { HiLibrary } from 'react-icons/hi'
import MagicButton from './ui/MagicButton'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'

import { ImWrench } from 'react-icons/im'
// import { BackgroundBeams } from './ui/background-beams'



const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
          <Spotlight className='-top-30 -left-50
           md:-top-20' 
          fill='white'/> 
          
          {/* Purple spotlight */}
          <Spotlight className='-top-10 left-[90vw] 
          ' 
          fill='purple'/> 
    
          {/* Blue spotlight */}
          <Spotlight className='top-10 left-50
          md:-top-50' 
          fill='rgba(70, 130, 180, 0.85)'/>
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white  
        dark:bg-grid-white/[0.023] bg-grid-black/[0.02] flex 
        items-center justify-center absolute top-0 left-0">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex 
          items-center justify-center dark:bg-black-100 bg-white 
          [mask-image:radial-gradient(ellipse_at_center,transparent_12%,black)]"/>
        </div>

        <div className='flex justify-center relative my-20 z-10'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col
          items-center justify-center'>
            <h2 className='uppercase tracking-widest text-xs text-center
             text-blue-100 max-w-80'>
              Dynamic Web Magic with Next.js
            </h2>
            
            <TextGenerateEffect 
              className='text-center text-[40px] md:text-5xl lg:text-6xl'
              words='Transforming Concepts into Seamless Experiences just a sample'
            />
            <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg
            lg:text-2xl'>
              Hi, I&apos;m Juneau a developer based in Korea
            </p>

            <a href='#about'>
              <MagicButton
                title="Show my work "
                icon={<ImWrench size={13.5} className="translate-y-[1px]"/>}
                position='right'
                titleClass="font-semibold" //font-[YourFontFamily]"
              />
            </a>

          </div>
        </div>
        {/* <div>
          <BackgroundBeams/>
        </div> */}
        
    </div>
  )
}

export default Hero

