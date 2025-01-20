import { HiLibrary } from 'react-icons/hi'
import MagicButton from './ui/MagicButton'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'

import { ImWrench } from 'react-icons/im'
// import { BackgroundBeams } from './ui/background-beams'



const Hero = () => {
  return (
    <div className='pb-15 pt-36'>
        <div>
          <Spotlight className='hidden lg:block -top-80 -left-20
           lg:left-[18vw] lg:-top-[42vh]' 
          fill='white'/> 
         
          <Spotlight className='hidden lg:block -top-80 -left-70
            lg:left-[27vw] lg:-top-[65vh]' 
            fill='purple'/> 
      
          
          <Spotlight className='hidden lg:block top-60 -left-50
            lg:left-[25vw] lg:-top-[47vh]' 
            fill='rgba(127, 154, 245)'/>
          

          {/* <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" /> */}
      
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

            <a href='#projects'>
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

