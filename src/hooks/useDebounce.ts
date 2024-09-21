/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useEffect } from 'react'

type Timer = ReturnType<typeof setTimeout>
type Function = (...args: any[]) => void

export function useDebounce<T extends Function>(func: T, delay: number) {
  const timer = useRef<Timer>()

  useEffect(() => {
    return () => {
      if (!timer.current) return
      clearTimeout(timer.current)
    }
  }, [])

  const debouncedFunction = ((...args) => {
    const newTimer = setTimeout(() => {
      func(...args)
    }, delay)
    clearTimeout(timer.current)
    timer.current = newTimer
  }) as T

  return debouncedFunction
}
