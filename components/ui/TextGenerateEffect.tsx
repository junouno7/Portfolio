"use client";
import { useEffect, useMemo } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 3,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  
  // Memoize the word processing to prevent unnecessary recalculations
  const processedWords = useMemo(() => {
    return words.split("|").map(line => ({
      line: line.trim(),
      words: line.trim().split(" ").map(word => ({
        shouldBeInline: word.startsWith("_") && word.endsWith("_"),
        displayWord: word.startsWith("_") && word.endsWith("_") ? word.slice(1, -1) : word
      }))
    }));
  }, [words]);

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: "blur(0px)",
      },
      {
        duration,
        delay: stagger(0.275),
        ease: "easeInOut",
      }
    );
  }, [scope, animate, duration]);

  return (
    <motion.div
      ref={scope}
      className={cn(
        "font-bold my-4 flex flex-col items-center w-full gap-2 md:gap-4 lg:gap-6",
        className
      )}
    >
      {processedWords.map((lineData, lineIdx) => (
        <div key={`line-${lineIdx}`} className="text-center">
          {lineData.words.map(({ shouldBeInline, displayWord }, idx) => (
            <motion.span
              key={`word-${lineIdx}-${idx}`}
              initial={{
                opacity: 0,
                filter: filter ? "blur(7px)" : "blur(0px)",
              }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration,
                ease: "easeInOut",
              }}
              className={cn(
                "inline-block",
                idx !== 0 ? "ml-2" : "",
                lineIdx > 0 ? "text-purple" : "dark:text-white text-black"
              )}
            >
              {displayWord}{" "}
            </motion.span>
          ))}
        </div>
      ))}
    </motion.div>
  );
};
