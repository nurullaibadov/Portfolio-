import { useEffect, useRef } from 'react';

const MatrixBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        canvas.width = width;
        canvas.height = height;

        const columns = Math.floor(width / 20);
        const drops: number[] = new Array(columns).fill(1);

        // Matrix characters (Katakana + Latin + Numbers)
        const chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

        const draw = () => {
            // Semi-transparent black to create trail effect
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = '#0F0'; // Green text (classic Matrix) - User asked for attractive, maybe light blue?
            // User asked for "attractive background", but "Matrix effect". Classic is green. 
            // User also asked for "cursor color should be light blue".
            // Let's make the Matrix rain a cool cyan/blue to match the "light blue" theme request?
            // Or keep it green? "Matrix" usually implies green. 
            // But "attractive" + "light blue cursor" suggests a blue theme. 
            // I'll stick to a cyan/blue matrix to match the "Best Project" blue theme.
            // Vibrant Light Blue / Cyan for "attractive" Matrix effect
            ctx.fillStyle = '#00FFFF'; // Cyan
            ctx.shadowBlur = 5;
            ctx.shadowColor = '#00FFFF';

            ctx.font = '15px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * 20, drops[i] * 20);

                if (drops[i] * 20 > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        let animationId: number;
        const animate = () => {
            draw();
            animationId = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[-1] opacity-20 pointer-events-none"
        />
    );
};

export default MatrixBackground;
