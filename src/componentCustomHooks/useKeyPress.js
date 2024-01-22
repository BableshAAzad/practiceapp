import { useState, useEffect } from 'react';

export default function useKeyPress(targetKey) {
    const [isKeyPressed, setIsKeyPressed] = useState(false);

    const handleKeyDown = ({ key }) => {
        if (key === targetKey) {
            setIsKeyPressed(true);
        }
    };

    const handleKeyUp = ({ key }) => {
        if (key === targetKey) {
            setIsKeyPressed(false);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
        // eslint-disable-next-line
    }, [targetKey]);

    return isKeyPressed;
};

// Usage: const isKeyPressed = useKeyPress('Enter');
