'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail, Twitter, Instagram, Youtube, Twitch, Facebook, Rss } from 'lucide-react'

const icons = [
  { icon: Github, label: 'GitHub' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Mail, label: 'Email' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Youtube, label: 'YouTube' },
  { icon: Twitch, label: 'Twitch' },
  { icon: Facebook, label: 'Facebook' },
  { icon: Rss, label: 'RSS' }
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
    <div className="fixed top-4 left-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-neutral-200 dark:bg-neutral-800"
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              ref={menuRef}
              className="bg-slate-800/0 rounded-lg p-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="grid grid-cols-3 gap-6"
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
                {icons.map(({ icon: Icon, label }, index) => (
                  <motion.button
                    key={index}
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
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}