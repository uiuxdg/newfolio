"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useRef, useEffect, useState } from "react"

export default function Component() {
  const containerRef = useRef<HTMLElement>(null)
  const tracingPathLeftRef = useRef<SVGPathElement>(null)
  const tracingPathRightRef = useRef<SVGPathElement>(null)
  const [pathLengthLeft, setPathLengthLeft] = useState(0)
  const [pathLengthRight, setPathLengthRight] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "10% start"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  useEffect(() => {
    if (tracingPathLeftRef.current) {
      setPathLengthLeft(tracingPathLeftRef.current.getTotalLength())
    }
    if (tracingPathRightRef.current) {
      setPathLengthRight(tracingPathRightRef.current.getTotalLength())
    }
  }, [])

  const strokeDashoffsetLeft = useTransform(smoothProgress, [0, 1], [pathLengthLeft, 0])
  const strokeDashoffsetRight = useTransform(smoothProgress, [0, 1], [pathLengthRight, 0])

  const lineColor = "url(#tracing-gradient)"

  return (
    <section
      ref={containerRef}
      className="w-full bg-gradient-to-br from-background to-muted py-40 relative overflow-hidden"
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 800"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="tracing-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="20%" stopColor="rgb(168, 85, 247)" />
            <stop offset="80%" stopColor="rgb(59, 130, 246)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <motion.path
          ref={tracingPathLeftRef}
          d="M 0 800 Q 400 700 720 600"
          fill="none"
          stroke={lineColor}
          strokeWidth="2"
          strokeDasharray={pathLengthLeft}
          strokeDashoffset={strokeDashoffsetLeft}
        />
        <motion.path
          ref={tracingPathRightRef}
          d="M 1440 800 Q 1040 700 720 600"
          fill="none"
          stroke={lineColor}
          strokeWidth="2"
          strokeDasharray={pathLengthRight}
          strokeDashoffset={strokeDashoffsetRight}
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Want to get in touch?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Send me an email, so we can set up a time to chat!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center">
            <motion.a
              href="mailto:dantegutbrod@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">
                Message me
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}