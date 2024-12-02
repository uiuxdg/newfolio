"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface CollapsibleContentProps {
  preview: React.ReactNode;
  fullContent: React.ReactNode;
}

export function CollapsibleContent({ preview, fullContent }: CollapsibleContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-4">
      {preview}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {fullContent}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative backdrop-blur-xl">
        <span className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <span className="text-black dark:text-white text-lg font-bold flex items-center gap-2">
            {isExpanded ? "Show less" : "Read more"}
            <motion.div
              animate={{ 
                y: [0, 5, 0],
                rotate: isExpanded ? 180 : 0 
              }}
              transition={{ 
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                rotate: {
                  duration: 0.2
                }
              }}
            >
              <ChevronDown className="h-5 w-5" />
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
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-center gap-2 bg-background rounded-[7px] px-6 py-3 w-full"
          >
            <span className="opacity-0 text-lg font-bold flex items-center">
              {isExpanded ? "Show less" : "Read more"}
              <ChevronDown className="h-5 w-5 ml-2" />
            </span>
          </button>
        </motion.div>
      </div>
    </div>
  );
} 