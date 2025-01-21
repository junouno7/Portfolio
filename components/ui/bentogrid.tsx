'use client'
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { Globe } from "./Globe";
import { GlobeDemo } from "./GridGlobe";
// import Lottie from "react-lottie";
import { useState } from "react";
import animationData from '@/data/confetti.json';
import MagicButton from "./MagicButton";
import MagicButton2 from "./MagicButton2";
import { FaCopy } from "react-icons/fa";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  id,
  titleClassName,
  spareImg,
  content,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  content?: {
    mechanical: {
      icon: string;
      title: string;
      tools: string;
    };
    shop: {
      icon: string;
      title: string;
      tools: string;
    };
  };
}) => {
  const [copied, setCopied] =useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('juneaukim7@gmail.com');

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 5000);
  }
  return (
    <div
      className={cn(
        `row-span-1 relative overflow-hidden rounded-3xl 
        group/bento hover:shadow-xl transition duration-200 shadow-input 
        dark:shadow-none border border-white/[0.15]
        justify-between flex flex-col space-y-4 `,
        className
      )}
      style={{
        background: 'rgb(4, 7, 29)',
        backgroundColor: `linear-gradient(90deg, rgba(4,7,29,1) 0%, 
          rgba(12,14,35,1) 100%)`,
      }}
    >
    
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
         {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id 
          ===5 && 'w-full opacity-80'}`}>
            {spareImg && (
              <img
                src={spareImg}
                alt={spareImg}
                className={"object-cover object-center w-full h-full"}
              />
            )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 flex items-center 
              justify-center text-white font-bold"/> */}
          </BackgroundGradientAnimation>
        )}

        <div className={cn(
          titleClassName, `group-hover/bento:translate-x-2 transition duration-200
          relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10`
        )}>
          <div className="font-sans font-extralight 
          text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
                  
          <div className="font-sans font-bold text-lg 
            lg:text-3xl max-w-96 lg:max-w-[65%] leading-tight z-10">
            {title}
          </div>
        
        {id ===2 && <GlobeDemo />}

        {id ===3 && (
          <div className="flex gap-1 lg:gap-5 w-fit absolute -right-1 lg:right-2">
            <div className="flex flex-col gap-3 md:gap-3 lg:gap-5">
              {['React.js', 'OpenCV','Python'].map((item) => (
                <span key={item} className="py-2 lg:py-4 lg:px-4 px-3 text-xs lg:text-sm opacity-50 
                  lg:opacity-100 rounded-lg text-center bg-[#10132E] font-mono">
                  {item}
                </span>
              ))}
              <span className="lg:py-3 lg:px-3 py-3 px-3 rounded-lg text-center bg-[#10132e]"/>
            </div>
            
            <div className="flex flex-col gap-2 md:gap-2 lg:gap-4">
              <span className="lg:py-3 lg:px-3 py-3 px-3 rounded-lg text-center bg-[#10132e]"/>
              {['JavaScript', 'Java','ROS'].map((item) => (
                <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-sm opacity-50 
                  lg:opacity-100 rounded-lg text-center bg-[#10132E] font-mono">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {id === 5 && content && (
          <div className="flex w-full h-full gap-4 items-center justify-center">
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#1a1f3d] flex items-center justify-center mb-4">
                <img src={content.mechanical.icon} alt="Mechanical Design" className="w-8 h-8" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-3 text-center">{content.mechanical.title}</h3>
              <p className="text-sm lg:text-base text-[#c1c2d3] text-center font-mono">
                {content.mechanical.tools}
              </p>
            </div>

            <div className="w-px bg-white/[0.08] self-stretch my-4" />

            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#1a1f3d] flex items-center justify-center mb-4">
                <img src={content.shop.icon} alt="Shop Tools" className="w-8 h-8" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-3 text-center">{content.shop.title}</h3>
              <p className="text-sm lg:text-base text-[#c1c2d3] text-center font-mono">
                {content.shop.tools}
              </p>
            </div>
          </div>
        )}

        {id === 6 && (
          <div className="mt-5 relative">
            <div className={`absolute -bottom-5 right-0`}>
              <Lottie
                animationData={animationData}
                loop={copied}
                autoplay={copied}
              />
            </div>
            <MagicButton2 
              title={copied ? 'Email copied!' : 'Copy my email'}
              icon={<FaCopy />}
              position="left"
              otherClasses="!bg-[#161a31]"
              handleClick={handleCopy}
            />
          </div>
        )}
      </div>
    </div>
  </div>
  );
};

