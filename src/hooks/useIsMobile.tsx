import { useEffect, useState } from 'react'

const useIsMobile = () => {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    setMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e:any) => {
      setMobile(e.matches);
    };


    mediaQuery.addEventListener("change", handleMediaQueryChange);


    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [])

  return isMobile;
}

export default useIsMobile