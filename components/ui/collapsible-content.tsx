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
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
      >
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
        <span className="text-sm font-medium">
          {isExpanded ? "Show less" : "Read more"}
        </span>
      </button>
    </div>
  );
} 