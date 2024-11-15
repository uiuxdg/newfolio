"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [0, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    }
  );

  return (
    <motion.div
      ref={ref}
      className={cn("relative w-full mx-auto", className)}
    >
      <div className="absolute -left-4 md:left-0 top-3 w-full">
        <svg
          viewBox={`0 0 1000 ${svgHeight}`}
          width="100%"
          height={svgHeight}
          className="block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 8 0
                L 8 ${svgHeight * 0.2} 
                C 8 ${svgHeight * 0.25} 900 ${svgHeight * 0.25} 900 ${svgHeight * 0.3}
                L 900 ${svgHeight * 0.7}
                C 900 ${svgHeight * 0.75} 500 ${svgHeight * 0.75} 500 ${svgHeight * 0.8}
                L 500 ${svgHeight}`}
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.16"
            strokeWidth="2"
            className="text-neutral-200 dark:text-neutral-700"
          />
          <motion.path
            d={`M 8 0
                L 8 ${svgHeight * 0.2} 
                C 8 ${svgHeight * 0.25} 900 ${svgHeight * 0.25} 900 ${svgHeight * 0.3}
                L 900 ${svgHeight * 0.7}
                C 900 ${svgHeight * 0.75} 500 ${svgHeight * 0.75} 500 ${svgHeight * 0.8}
                L 500 ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            className="motion-reduce:hidden"
          />
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#18CCFC" stopOpacity="0" />
              <stop stopColor="#18CCFC" />
              <stop offset="0.325" stopColor="#6344F5" />
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
