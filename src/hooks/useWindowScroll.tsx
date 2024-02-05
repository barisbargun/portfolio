import { useEffect, useState } from 'react'

const useWindowScroll = () => {
  const [height, setHeight] = useState<number | undefined>(undefined);
  useEffect(() => {
    const handleScroll = () => {
      setHeight(window.scrollY);
    }

    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    
    const cleanup = () => {
      window.removeEventListener("resize", handleScroll)
    }
    return cleanup;
  }, [])
  return height;
}
export default useWindowScroll


