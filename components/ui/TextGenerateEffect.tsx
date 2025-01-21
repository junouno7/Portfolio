"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 1,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split("|").map(line => line.trim());

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration,
        delay: stagger(0.2),
      }
    );
  }, [scope.current, animate, duration, filter]);

  return (
    <motion.div 
      ref={scope} 
      className={cn("font-bold my-4 flex flex-col items-center w-full gap-0 md:gap-5 lg:gap-7", className)}
    >
      {wordsArray.map((line, lineIdx) => (
        <div key={`line-${lineIdx}`} className="text-center">
          {line.split(" ").map((word, idx) => {
            const shouldBeInline = word.startsWith("_") && word.endsWith("_");
            const displayWord = shouldBeInline ? word.slice(1, -1) : word;
            
            return (
              <motion.span
                key={`${word}-${lineIdx}-${idx}`}
                className={cn(
                  "opacity-0",
                  shouldBeInline ? "inline-block" : "inline-block",
                  idx !== 0 ? "ml-2" : "",
                  lineIdx > 0 ? "text-purple" : "dark:text-white text-black"
                )}
                style={{
                  filter: filter ? "blur(10px)" : "none",
                }}
              >
                {displayWord}
              </motion.span>
            );
          })}
        </div>
      ))}
    </motion.div>
  );
};
