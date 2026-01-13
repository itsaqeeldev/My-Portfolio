import { useEffect, useRef } from 'react';

export function ParticleField() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: { x: number; y: number; dx: number; dy: number; size: number }[] = [];
        let animationFrameId: number;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createParticles = () => {
            // Balanced density - filling the void without clutter. Limited for performance.
            const particleCount = Math.min(Math.floor(window.innerWidth * 0.1), 100);
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    dx: (Math.random() - 0.5) * 0.2, // Slow, graceful movement
                    dy: (Math.random() - 0.5) * 0.2,
                    size: Math.random() * 2 + 0.5
                });
            }
        };

        const drawParticles = () => {
            // Darker fade for deep void feel
            ctx.fillStyle = 'rgba(5, 5, 16, 0.2)'; // deeper void fade
            ctx.fillRect(0, 0, canvas.width, canvas.height);



            particles.forEach((p, index) => {
                p.x += p.dx;
                p.y += p.dy;

                // Bounce off edges
                if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                // Mix of Cyan and Violet based on index/random
                ctx.fillStyle = index % 2 === 0 ? '#00D1FF' : '#7B2CBF';
                ctx.fill();

                // Connect lines - Short range only
                for (let j = index + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const distance = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
                    // Slightly increased connection distance for "network" feel
                    const connectDistance = 100;

                    if (distance < connectDistance) {
                        ctx.beginPath();
                        // Gradient line effect simulation using strokeStyle
                        const opacity = (1 - distance / connectDistance) * 0.15;
                        ctx.strokeStyle = index % 2 === 0
                            ? `rgba(0, 209, 255, ${opacity})`
                            : `rgba(123, 44, 191, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(drawParticles);
        };

        window.addEventListener('resize', () => {
            resizeCanvas();
            createParticles();
        });

        resizeCanvas();
        createParticles();
        drawParticles();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-0"
        />
    );
}
