"use client";
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 0.4,
  slowDuration = 7,
  clockwise = false,
  ...props
}: React.PropsWithChildren<{
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
    slowDuration?: number;
    clockwise?: boolean;
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [isHoverOutTransition, setIsHoverOutTransition] = useState<boolean>(false);

  // Memoize gradients to prevent recreating on each render
  const { movingMap, highlight, rotationSequence } = useMemo(() => {
    const gradients = [
      // Top gradient (wider due to longer edge)
      "radial-gradient(35% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
      // Left gradient (narrower due to shorter edge)
      "radial-gradient(20% 50% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
      // Bottom gradient (wider due to longer edge)
      "radial-gradient(28% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
      // Right gradient (narrower due to shorter edge)
      "radial-gradient(20% 50% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
      // Corner transitions with proportional sizes
      "radial-gradient(25% 50% at 75% 25%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    ];

    return {
      movingMap: gradients,
      highlight: "radial-gradient(90% 217.39% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)",
      rotationSequence: [
        ...gradients.slice(0, -1),
        gradients[4], // Corner transition
        gradients[0]  // Back to start
      ]
    };
  }, []); // Empty deps since these never change

  // Memoize animation sequence to prevent recalculation on every render
  const animationSequence = useMemo(() => {
    if (hovered) {
      return [movingMap[0], highlight];
    }
    
    if (isHoverOutTransition) {
      return [highlight, ...rotationSequence];
    }

    return rotationSequence;
  }, [hovered, isHoverOutTransition, movingMap, highlight, rotationSequence]);

  // Memoize transition config
  const transitionConfig = useMemo(() => ({
    background: {
      duration: hovered ? duration : slowDuration,
      ease: "linear",
      repeat: (!hovered && !isHoverOutTransition) ? Infinity : 0,
      repeatType: "loop" as const
    }
  }), [hovered, isHoverOutTransition, duration, slowDuration]);

  return (
    <Tag
      onMouseEnter={() => {
        setHovered(true);
        setIsHoverOutTransition(false);
      }}
      onMouseLeave={() => {
        setHovered(false);
        setIsHoverOutTransition(true);
      }}
      className={cn(
        "relative flex rounded-full border content-center bg-black/20 hover:bg-black/10 transition duration-500 dark:bg-white/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "w-auto text-white z-10 bg-black px-4 py-2 rounded-[inherit]",
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className={cn(
          "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
        )}
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[0] }}
        animate={{ 
          background: animationSequence
        }}
        transition={transitionConfig}
        onAnimationComplete={() => {
          if (isHoverOutTransition) {
            setIsHoverOutTransition(false);
          }
        }}
      />
      <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[100px]" />
    </Tag>
  );
}
