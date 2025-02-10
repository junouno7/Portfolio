import React from "react";

import { workExperience } from "@/data";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const Experience = () => {
  return ( 
    <div className="pt-28 pb-52 w-full" id="experience">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 auto-rows-fr">
        {workExperience.map((card) => (
          <a
            key={card.id}
            href={card.url}
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-2 h-full w-full"
          >
            <HoverBorderGradient
              as="div"
              role="presentation"
              duration={0.4}
              slowDuration={7}
              containerClassName="rounded-xl border-2 border-transparent h-full w-full"
              className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 h-full w-full"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem* 0.96)`,
                height: '100%',
                width: '100%'
              }}
            >
              <div className="block w-full h-full hover:scale-[1.05] transition-transform">
                <div className="flex flex-row items-center p-3 py-6 md:p-5 lg:p-10 gap-4 h-full w-full">
                  <div className="w-[84px] h-[84px] md:w-[105px] md:h-[105px] lg:w-[126px] lg:h-[126px] flex-shrink-0 flex items-center justify-center">
                    <img
                      src={card.thumbnail}
                      alt={`${card.title} logo`}
                      loading="lazy"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center lg:ms-5">
                    <h2 className="text-start text-xl md:text-2xl font-bold break-words">
                      {card.title}
                    </h2>
                    <p className="text-start text-white-100 mt-3 font-semibold break-words">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            </HoverBorderGradient>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Experience; 