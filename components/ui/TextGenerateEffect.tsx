"use client";
import { useEffect } from "react";
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
  const wordsArray = words.split("|").map(line => line.trim());

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
      {wordsArray.map((line, lineIdx) => (
        <div key={`line-${lineIdx}`} className="text-center">
          {line.split(" ").map((word, idx) => {
            const shouldBeInline = word.startsWith("_") && word.endsWith("_");
            const displayWord = shouldBeInline ? word.slice(1, -1) : word;

            return (
              <motion.span
                key={`${word}-${lineIdx}-${idx}`}
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
            );
          })}
        </div>
      ))}
    </motion.div>
  );
};
