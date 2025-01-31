'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Twitter,
  Instagram,
  Youtube,
  Twitch,
  Facebook,
  Rss,
  LucideProps,
  Phone,
  File
} from 'lucide-react'

interface IconItem {
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'>>
  label: string
  url: string
}

const icons: IconItem[] = [
  { icon: Phone, label: 'Phone', url: 'tel:9787997924' },
  { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/dantegutbrod' },
  { icon: Mail, label: 'Email', url: 'mailto:dantegutbrod@gmail.com' },
  // { icon: Twitter, label: 'Twitter', url: 'https://twitter.com/calcgen_ai' },
  // { icon: Instagram, label: 'Instagram', url: 'https://instagram.com/calcgen' },
 { icon: File, label: 'Resume', url: 'https://drive.google.com/file/d/1EWHGHqRqIKr2MIgAP2sW2iKy4oFgXw-i/view?usp=sharing' },
]

export function HoveringMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClick)
    }

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [isOpen])

  return (
    <div className="fixed top-4 left-4 z-[5000]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 hover:scale-105 transition-all duration-300"
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >              <div className="text-white text-2xl font-bold text-center mb-6">
                Dante Gutbrod
              </div>
            <motion.div
              ref={menuRef}
              className="bg-slate-800/0 rounded-lg p-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >

              <motion.div
                className="grid grid-cols-2 gap-6"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.03, staggerDirection: -1 }
                  }
                }}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {icons.map(({ icon: Icon, label, url }, index) => (
                  <motion.a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 text-white rounded-2xl p-6 shadow-md w-24 h-24 flex flex-col items-center justify-center hover:bg-white/20 transition-colors group relative"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    variants={{
                      open: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          y: { stiffness: 1000, velocity: -100 },
                          duration: 0.2
                        }
                      },
                      closed: {
                        y: 50,
                        opacity: 0,
                        transition: {
                          y: { stiffness: 1000 },
                          duration: 0.2
                        }
                      }
                    }}
                    aria-label={label}
                  >
                    <Icon size={32} />
                    <motion.span
                      className="absolute bottom-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      initial={{ y: 5 }}
                      animate={{ y: 0 }}
                    >
                      {label}
                    </motion.span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}