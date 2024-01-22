import { useState, useEffect, useRef } from 'react';

function useMouseOver2() {
    let [isMouseOver, setMouseOver] = useState(false);
    let targetRef = useRef(null);
    useEffect(() => {
        let handleMouseOver = () => {
            setMouseOver(true);
        };
        let handleMouseOut = () => {
            setMouseOver(false);
        };
        let targetElement = targetRef.current;
        if (targetElement) {
            targetElement.addEventListener('mouseover', handleMouseOver);
            targetElement.addEventListener('mouseout', handleMouseOut);

            // Detach event listeners when the component unmounts
            return () => {
                targetElement.removeEventListener('mouseover', handleMouseOver);
                targetElement.removeEventListener('mouseout', handleMouseOut);
            };
        }
    }, [targetRef]);
    return [isMouseOver, targetRef];
}
export default useMouseOver2;
