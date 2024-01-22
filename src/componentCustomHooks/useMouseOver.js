import { useState, useEffect } from 'react';

function useMouseOver() {
  let [isMouseOver, setMouseOver] = useState(false);

  useEffect(() => {
    let handleMouseOver = () => {
      setMouseOver(true);
    };

    let handleMouseOut = () => {
      setMouseOver(false);
    };

    // Attach event listeners when the component mounts
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    // Detach event listeners when the component unmounts
    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  return isMouseOver;
}

export default useMouseOver;
