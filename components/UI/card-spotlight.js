"use client";

import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * CardSpotlight hover effect using radial motion mask.
 */
export const CardSpotlight = ({
  children,
  radius = 350,
  color = "#262626",
  className,
  ...props
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className={cn("group/spotlight rounded-md relative", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: color,
          maskImage: useMotionTemplate`
            radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, white, transparent 80%)
          `,
        }}
      />
      {children}
    </div>
  );
};
