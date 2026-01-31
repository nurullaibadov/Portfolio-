import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

const CustomCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    // Trail spring with different config for delay effect
    const trailConfig = { damping: 20, stiffness: 150 };
    const trailXSpring = useSpring(cursorX, trailConfig);
    const trailYSpring = useSpring(cursorY, trailConfig);

    const [isPointer, setIsPointer] = useState(false);

    const { theme } = useTheme();

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            // Optimization: cheaper check than getComputedStyle
            const target = e.target as HTMLElement;
            const isClickable =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') !== null ||
                target.closest('button') !== null ||
                window.getComputedStyle(target).cursor === 'pointer';

            setIsPointer(isClickable);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [cursorX, cursorY]);

    const isLight = theme === 'light';
    const bgColor = isLight ? 'bg-blue-700' : 'bg-cyan-400';
    const borderColor = isLight ? 'border-blue-700' : 'border-cyan-400';
    const shadowColor = isLight ? 'rgba(29,78,216,' : 'rgba(34,211,238,';
    const blendMode = isLight ? 'mix-blend-normal' : 'mix-blend-screen';

    return (
        <>
            <motion.div
                className={`fixed top-0 left-0 w-4 h-4 ${bgColor} rounded-full pointer-events-none z-50 ${blendMode} shadow-[0_0_20px_${shadowColor}0.8)]`}
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%", // Center the cursor
                    translateY: "-50%",
                }}
                animate={{ scale: isPointer ? 1.5 : 1 }}
                transition={{ scale: { duration: 0.2 } }}
            />
            <motion.div
                className={`fixed top-0 left-0 w-8 h-8 border ${borderColor} rounded-full pointer-events-none z-50 ${blendMode} shadow-[0_0_20px_${shadowColor}0.4)]`}
                style={{
                    x: trailXSpring,
                    y: trailYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{ scale: isPointer ? 1.5 : 1 }}
                transition={{ scale: { duration: 0.2 } }}
            />
        </>
    );
};

export default CustomCursor;
