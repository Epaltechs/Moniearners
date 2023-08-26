import { useEffect, useState } from "react";

const useDeviceSize = () => {

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [navCollapse, setsNavCollapse] = useState(false)

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    if(window.innerWidth <= 1285 ) setsNavCollapse(true);
    else setsNavCollapse(false);
  }

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return [width, height, navCollapse]

}

export default useDeviceSize 