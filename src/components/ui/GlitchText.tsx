import { useRef, useEffect } from 'react';

const GlitchText = ({ text, className = '' }: { text: string, className?: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%^&*';

    useEffect(() => {
        let interval: any;
        const element = ref.current;

        const animate = () => {
            let iteration = 0;
            clearInterval(interval);

            interval = setInterval(() => {
                if (!element) return;

                element.innerText = text
                    .split('')
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join('');

                if (iteration >= text.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3;
            }, 30);
        };

        if (element) {
            element.onmouseover = animate;
            // Also animate on mount for effect
            animate();
        }

        return () => clearInterval(interval);
    }, [text]);

    return (
        <span ref={ref} className={`font-mono ${className}`}>
            {text}
        </span>
    );
};

export default GlitchText;
