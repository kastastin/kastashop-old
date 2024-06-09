import { useEffect, useState } from 'react'

import { getWindowwidth } from '@/lib/utils/common'

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(getWindowwidth())

  const handleResize = () => setWindowWidth(getWindowwidth())

  useEffect(() => {
    window.addEventListener('resize', handleResize, true)

    return () => window.removeEventListener('resize', handleResize, true)
  }, [])

  return { windowWidth, handleResize }
}

export function useMediaQuery(maxWidth: number) {
  const [isMedia, setIsMedia] = useState(false)
  const { windowWidth, handleResize } = useWindowWidth()

  useEffect(() => {
    setIsMedia(windowWidth <= maxWidth)
  }, [handleResize, maxWidth, windowWidth])

  return isMedia
}
