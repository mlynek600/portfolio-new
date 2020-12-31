import { useState, useLayoutEffect, useEffect } from 'react'

type WindowSize = {
  width: number
  height: number
}

export default function (): WindowSize {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEffect(() => {
    handleResize()
  }, [])

  useLayoutEffect(() => {
    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}
