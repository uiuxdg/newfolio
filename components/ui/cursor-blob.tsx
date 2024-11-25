"use client"

import { useEffect, useRef } from 'react'

// Constants
const SPACING = 6
const K_REST = 60
const K_MOUSE = -5000
const ALPHA_MOUSE = 45
const K_DAMP = -20

export function CursorBlob() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    let pts_x: Float64Array | null = null
    let pts_y: Float64Array | null = null
    let rest_x: Float64Array | null = null
    let rest_y: Float64Array | null = null
    let accel_x: Float64Array | null = null
    let accel_y: Float64Array | null = null
    let vel_x: Float64Array | null = null
    let vel_y: Float64Array | null = null
    let mouse_x: number | null = null
    let mouse_y: number | null = null
    let last_frame = Date.now()
    let delta_t = 0
    let shouldInit = true

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const container = containerRef.current
    if (!container) return
    container.appendChild(canvas)

    let image: ImageData | null = null

    // Helper functions
    const axpy = (a: number, v_x: Float64Array, v_y: Float64Array) => {
      for (let i = 0; i < v_y.length; i++) {
        v_y[i] = a * v_x[i] + v_y[i]
      }
    }

    const euclidNorm = (x1: number, y1: number, x2: number, y2: number) => {
      const dx = x2 - x1
      const dy = y2 - y1
      return Math.sqrt(dx * dx + dy * dy)
    }

    const sigmoid = (x: number) => x > 1 ? 1 : (x < -1 ? -1 : 0)

    // Initialization functions
    const initializeCanvas = () => {
      const h = window.innerHeight
      const w = window.innerWidth
      canvas.height = h
      canvas.width = w
      canvas.style.position = 'absolute'
      canvas.style.top = '0'
      canvas.style.left = '0'
      canvas.style.pointerEvents = 'none'
      
      image = ctx.createImageData(w, h)
    }

    const initializePts = () => {
      const n_x = Math.floor((canvas.width - SPACING) / SPACING)
      const n_y = Math.floor((canvas.height - SPACING) / SPACING)
      const count = n_x * n_y

      pts_x = new Float64Array(count)
      pts_y = new Float64Array(count)

      for (let i = 0; i < count; i++) {
        const ix = i % n_x
        const iy = Math.floor(i / n_x)
        pts_x[i] = ix * SPACING + SPACING
        pts_y[i] = iy * SPACING + SPACING
      }

      rest_x = new Float64Array(pts_x)
      rest_y = new Float64Array(pts_y)
      accel_x = new Float64Array(count)
      accel_y = new Float64Array(count)
      vel_x = new Float64Array(count)
      vel_y = new Float64Array(count)
    }

    // Physics functions
    const updateAccel = () => {
      if (!pts_x || !pts_y || !rest_x || !rest_y || !accel_x || !accel_y || !vel_x || !vel_y) return

      for (let i = 0; i < pts_x.length; i++) {
        let mouse_accel_x = 0
        let mouse_accel_y = 0

        if (mouse_x !== null && mouse_y !== null) {
          const mouse_distance = euclidNorm(mouse_x, mouse_y, pts_x[i], pts_y[i])
          const mouse_accel_abs = K_MOUSE * (1 - sigmoid(mouse_distance / ALPHA_MOUSE))
          mouse_accel_x = (mouse_accel_abs / mouse_distance) * (mouse_x - pts_x[i])
          mouse_accel_y = (mouse_accel_abs / mouse_distance) * (mouse_y - pts_y[i])
        }

        const rest_accel_x = K_REST * (rest_x[i] - pts_x[i])
        const rest_accel_y = K_REST * (rest_y[i] - pts_y[i])
        const damp_accel_x = K_DAMP * vel_x[i]
        const damp_accel_y = K_DAMP * vel_y[i]

        accel_x[i] = rest_accel_x + mouse_accel_x + damp_accel_x
        accel_y[i] = rest_accel_y + mouse_accel_y + damp_accel_y
      }
    }

    const updateVel = () => {
      if (!accel_x || !vel_x || !accel_y || !vel_y) return
      axpy(delta_t, accel_x, vel_x)
      axpy(delta_t, accel_y, vel_y)
    }

    const updatePts = () => {
      if (!vel_x || !pts_x || !vel_y || !pts_y) return
      axpy(delta_t, vel_x, pts_x)
      axpy(delta_t, vel_y, pts_y)
    }

    const draw = () => {
      if (!image || !pts_x || !pts_y) return

      const img_channels = 4
      const img_stride = image.width * img_channels
      image.data.fill(0)

      for (let i = 0; i < pts_x.length; i++) {
        const x = Math.round(pts_x[i])
        const y = Math.round(pts_y[i])

        if (x >= 0 && x < image.width && y >= 0 && y < image.height) {
          const px_idx = y * img_stride + x * img_channels
          image.data[px_idx + 0] = 64 // Red
          image.data[px_idx + 1] = 64 // Green
          image.data[px_idx + 2] = 64 // Blue
          image.data[px_idx + 3] = 255 // Alpha
        }
      }

      ctx.putImageData(image, 0, 0)
    }

    const frameCallback = () => {
      const now = Date.now()
      delta_t = (now - last_frame) / 1000
      last_frame = now

      if (shouldInit) {
        initializeCanvas()
        initializePts()
        shouldInit = false
      }

      updateAccel()
      updateVel()
      updatePts()
      draw()
    }

    // Event handlers
    const handleResize = () => {
      shouldInit = true
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse_x = e.clientX
      mouse_y = e.clientY
    }

    const handleMouseLeave = () => {
      mouse_x = null
      mouse_y = null
    }

    window.addEventListener('resize', handleResize)
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    const intervalId = setInterval(frameCallback, 1000 / 60)

    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      clearInterval(intervalId)
      container.removeChild(canvas)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none -z-50 mix-blend-difference"
    />
  )
} 