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
    offset: ["start 80%", "start 50%"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  const buttonOpacity = useTransform(
    smoothProgress,
    [0.8, 1],
    [0, 1]
  )

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
      className="w-full z-[2000]  bg-opacity-0 h-[80vh] flex pb-40 md:pb-32 items-center justify-center relative overflow-hidden"
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 600"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="tracing-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="20%" stopColor="#22c55e" />
            <stop offset="80%" stopColor="rgb(59, 130, 246)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <motion.path
          ref={tracingPathLeftRef}
          d="M 0 500 Q 400 400 720 300"
          fill="none"
          stroke={lineColor}
          strokeWidth="2"
          strokeDasharray={pathLengthLeft}
          strokeDashoffset={strokeDashoffsetLeft}
        />
        <motion.path
          ref={tracingPathRightRef}
          d="M 1440 500 Q 1040 400 720 300"
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Want to build{' '}
            <motion.span
              style={{
                opacity: buttonOpacity,
                background: 'linear-gradient(70deg, rgb(59, 130, 246), #22c55e)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              together?
            </motion.span>
          </h2>
          <p className="text-muted-foreground text-xl text-balance mb-8 max-w-2xl mx-auto">
            Send me an email, so we can set up a time to chat!
          </p>

          <div className="flex hover:scale-105 transition-all duration-300 rounded-lg flex-col sm:flex-row gap-4 pt-8 justify-center">
            {/* Button Container with Relative Positioning */}
            <div className="relative backdrop-blur-xl">
              {/* Replacement Button Label */}
              <span className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                <span className="text-black dark:text-white text-lg font-bold">
                  Message me
                  <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1 h-4 w-4 inline" />
                </span>
              </span>

              <motion.div
                style={{ 
                  opacity: buttonOpacity,
                  position: 'relative',
                  borderRadius: '8px',
                  padding: '2px',
                  background: 'linear-gradient(30deg, rgb(59, 130, 246), rgb(134, 239, 172, 30%), rgb(59, 130, 246))',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
                initial={{ opacity: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="z-10"
              >
                <a
                  href="mailto:dantegutbrod@gmail.com"
                  className="inline-flex  items-center justify-center px-6 py-3 font-medium transition-colors relative group rounded-[7px] w-full h-full bg-background mask-none"
                >
                  <div className="absolute inset-0 bg-background rounded-[7px] pointer-events-none z-0" />
                  {/* Hide the original text by setting opacity to 0 */}
                  <span className="relative z-20 opacity-0 dark:text-white text-foreground">
                    Message me
                    <ArrowRight className="ml-2 h-4 w-4 inline" />
                  </span>
                </a>
              </motion.div>
            </div>
          </div>
          
          <motion.a
            href="https://uidante.web.app"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-8 mx-auto w-fit text-center items-center justify-center text-sm px-2 py-1 rounded-lg backdrop-blur-xl text-muted-foreground hover:text-foreground transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3 }}
          >
            <span className="underline">Check out my previous portfolio design</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}