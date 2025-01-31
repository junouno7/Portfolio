import React from "react";

import { workExperience } from "@/data";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const Experience = () => {
  return ( 
    <div className="pt-28 pb-52 w-full" id="experience">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <HoverBorderGradient
            key={card.id} 
            as="button" // Set component type
            duration={0.4} // Set a reasonable animation duration
            // borderRadius="1.75rem"
            slowDuration={7}
            containerClassName="rounded-xl border-2 border-transparent md:col-span-2"
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <div className="w-[84px] h-[84px] md:w-[105px] md:h-[105px] lg:w-[126px] lg:h-[126px] flex-shrink-0">
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="lg:ms-5 flex-1">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </HoverBorderGradient>
        ))}
      </div>
    </div>
  );
};

export default Experience; 