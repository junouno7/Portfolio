"use client";

import { FaGithub, FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-3">
        {projects.map((item) => (
          <div
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw] flex-shrink-0"
            key={item.id}
          >
            <PinContainer
              title="Visit&nbsp;the&nbsp;site!"
              href={item.link}
              className="group"
            >
              <div className="relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] w-[80vw] overflow-hidden h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img 
                    src="/bg.png" 
                    alt="bgimg" 
                    loading="lazy"
                  />
                </div>
                <div className="absolute w-full h-[100%] overflow-hidden z-10"> 
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={item.img}
                      alt="cover"
                      loading="lazy"
                      className="max-w-[80%] max-h-[80%] object-contain transform rotate-6 group-hover:rotate-0 transition-transform duration-300 rounded-2xl"
                    />
                  </div>
                </div>
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm min-h-[4rem]"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img 
                        src={icon} 
                        alt={`tech-icon-${index}`} 
                        loading="lazy"
                        className="p-2" 
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Github
                  </p>
                  <FaGithub className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;