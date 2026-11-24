"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface CollapsibleContentProps {
  preview: React.ReactNode;
  fullContent: React.ReactNode;
  expandLabel?: string;
}

export function CollapsibleContent({
  preview,
  fullContent,
  expandLabel = "Read more",
}: CollapsibleContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const buttonLabel = isExpanded ? "Show less" : expandLabel;

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
      <motion.button
        type="button"
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded((expanded) => !expanded)}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="w-full rounded-lg bg-gradient-to-br from-blue-500 via-emerald-400/40 to-blue-500 p-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
      >
        <span className="flex items-center justify-center gap-2 rounded-md bg-white px-4 py-3 text-center text-base font-bold text-black dark:bg-neutral-950 dark:text-white md:text-lg">
          {buttonLabel}
          <motion.span
            aria-hidden="true"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            className="shrink-0"
          >
            <ChevronDown className="h-5 w-5" />
          </motion.span>
        </span>
      </motion.button>
    </div>
  );
}
