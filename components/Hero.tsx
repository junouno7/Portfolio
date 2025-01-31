"use client";
import { HiLibrary } from 'react-icons/hi'
import MagicButton from './ui/MagicButton'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { TypewriterEffect } from './ui/typewriter-effect'
import { ImWrench } from 'react-icons/im'
import { useEffect, useState } from 'react'
// import { BackgroundBeams } from './ui/background-beams'
// Before
//# asdasdasdasd

const Hero = () => {
  // State for controlling component visibility
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [showTextGenerate, setShowTextGenerate] = useState(false);
  const [showSpotlights, setShowSpotlights] = useState(false);

  useEffect(() => {
    // Show typewriter immediately
    setShowTypewriter(true);

    // Show TextGenerateEffect after 400ms
    const textGenerateTimer = setTimeout(() => {
      setShowTextGenerate(true);
    }, 3500);

    // Show spotlights after 800ms
    const spotlightsTimer = setTimeout(() => {
      setShowSpotlights(true);
    }, 3500);

    // Cleanup timers
    return () => {
      clearTimeout(textGenerateTimer);
      clearTimeout(spotlightsTimer);
    };
  }, []);

  const greetingWords = [
    {
      text: "Hi,",
      className: "!text-[#18e4a7] font-mono font-bold"
    },
    {
      text: "my",
      className: "!text-[#18e4a7] font-mono font-bold"
    },
    {
      text: "name",
      className: "!text-[#18e4a7] font-mono font-bold"
    },
    {
      text: "is",
      className: "!text-[#18e4a7] font-mono font-bold"
    }
  ];

  return (
    <div className='pb-15 pt-36'>
        <div>
          {showSpotlights && (
            <>
              <Spotlight 
                className='hidden lg:block -top-80 -left-20 lg:left-[16vw] lg:-top-[42vh]' 
                fill='white'
              /> 
              <Spotlight 
                className='hidden lg:block -top-80 -left-70 lg:left-[27vw] lg:-top-[65vh]' 
                fill='purple'
              /> 
              <Spotlight 
                className='hidden lg:block top-60 -left-50 lg:left-[25vw] lg:-top-[47vh]' 
                fill='rgba(127, 154, 245)'
              />
            </>
          )}
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white  
        dark:bg-grid-white/[0.023] bg-grid-black/[0.02] flex 
        items-center justify-center absolute top-0 left-0">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex 
          items-center justify-center dark:bg-black-100 bg-white 
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        </div>

        <div className='flex justify-center relative my-20 z-10'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col
          items-center justify-center'>
            {showTypewriter && (
              <TypewriterEffect 
                words={greetingWords}
                className="uppercase tracking-widest text-xs md:text-sm lg:text-base text-center max-w-80 -ml-1.5 mb-0"
              />
            )}
            
            {showTextGenerate && (
              <TextGenerateEffect 
                className='text-[40px] md:text-5xl lg:text-6xl'
                words="_Juneau_ _Kim._ | Mechanical Engineer"
                filter={true}
                duration={2.8}
              />
            )}

            <p className='text-center md:tracking-wider mb-4 mt-0 md:mt-7 lg:mt-7 text-sm md:text-base lg:text-lg
            text-gray-400 dark:text-gray-400 font-mono'>
              Mechanical / Software Engineer
            </p>

            <a href='#projects' className='md:-mt-6 lg:-mt-7'>
              <MagicButton
                title="Show my work "
                icon={<ImWrench size={13.5} className="translate-y-[1px]"/>}
                position='right'
                titleClass="font-semibold"
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

