"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { CursorBlob } from "@/components/ui/cursor-blob";
import { ChevronDown } from "lucide-react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 50%", "end 50%"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const viewportHeight = window.innerHeight;
    const centerY = viewportHeight / 2;
    
    const entries = Array.from(document.querySelectorAll('.timeline-entry'));
    
    // Find the entry that is currently sticky at the top
    const activeEntry = entries.reduce((closest, entry, index) => {
      const titleContainer = entry.querySelector('.timeline-title-container');
      if (!titleContainer) return closest;
      
      const rect = titleContainer.getBoundingClientRect();
      // Check if the title container is at its sticky position (top-40)
      const distanceToSticky = Math.abs(rect.top - 160); // 160px is equivalent to top-40
      
      if (!closest || distanceToSticky < closest.distance) {
        return { index, distance: distanceToSticky };
      }
      return closest;
    }, null as { index: number; distance: number } | null);
    
    if (activeEntry !== null) {
      setActiveIndex(activeEntry.index);
    }
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // New transform for the horizontal edge
  const edgeProgress = useTransform(scrollYProgress, [0.95, 1], [0, 1]);

  return (
    <div
      className="w-full z-[1000] bg-white dark:bg-neutral-950 md:px-10 relative"
      ref={containerRef}
    >
      <CursorBlob />
      <div className="max-w-7xl h-screen flex flex-col justify-center items-center mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-4xl text-balance text-center md:text-6xl mb-8 text-black dark:text-white max-w-4xl">
          I am a product designer and developer.
        </h2>
        <p className="text-neutral-700 mb-8 text-center dark:text-neutral-300 text-lg md:text-base max-w-sm md:max-w-xl">
          I&apos;ve been designing and building digital products for several years.
        </p>
        <p className="text-neutral-700 mb-8 text-center dark:text-neutral-300 text-lg md:text-base max-w-sm md:max-w-xl">
          My approach to product design starts with obtaining a deep understanding of the problem and target user groups through research. Then I apply principles from user experience and interaction design to develop a product that is both effective and delightful to use.
        </p>   
        <p className="text-neutral-700 mb-4 text-center dark:text-neutral-300 text-lg font-bold md:text-base max-w-sm md:max-w-xl">
          Here are some of the highlights from my journey.
        </p>
        <div className="relative backdrop-blur-xl">
          <span className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <span className="text-black dark:text-white text-lg font-bold flex items-center">
              Continue
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ChevronDown className="h-5 w-5 ml-2" />
              </motion.div>
            </span>
          </span>

          <motion.div
            style={{ 
              position: 'relative',
              borderRadius: '8px',
              padding: '2px',
              background: 'linear-gradient(30deg, rgb(59, 130, 246), rgb(134, 239, 172, 30%), rgb(59, 130, 246))',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="z-10"
          >
            <button
              onClick={() => {
                const firstEntry = document.querySelector('.timeline-entry');
                if (firstEntry) {
                  firstEntry.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="relative flex items-center justify-center gap-2 bg-background rounded-[7px] px-12 py-3 w-full"
            >
              <span className="opacity-0 text-lg font-bold">
                Continue
              </span>
              <ChevronDown className="absolute right-4 h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10 timeline-entry"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full timeline-title-container">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center timeline-circle">
                <motion.div 
                  className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2"
                  animate={{
                    scale: activeIndex === index ? 1.2 : 1,
                    backgroundColor: activeIndex === index ? "#fff" : "",
                  }}
                />
              </div>
              <motion.h3 
                className={`hidden md:block text-2xl md:pl-20 md:text-4xl text-balance font-bold ${
                  activeIndex === index 
                    ? 'text-black dark:text-white' 
                    : 'text-neutral-500 dark:text-neutral-500'
                }`}
              >
                {item.title}
              </motion.h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className={`md:hidden block text-2xl mb-4 text-left font-bold ${
                activeIndex === index 
                  ? 'text-black dark:text-white' 
                  : 'text-neutral-500 dark:text-neutral-500'
              }`}>
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-neutral-200 dark:via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-green-500 via-blue-500 to-transparent rounded-full"
          />
          {/* New Horizontal Edge */}
          <motion.div
            style={{
              width: useTransform(edgeProgress, [0, 1], ["0%", "100%"]),
              opacity: edgeProgress,
            }}
            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-l from-green-500 via-blue-500 to-transparent"
          />
        </div>
      </div>
    </div>
  );
};
