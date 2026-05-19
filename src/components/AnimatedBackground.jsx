import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useMemo } from "react";

export default function AnimatedBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1440;
  const screenHeight = typeof window !== "undefined" ? window.innerHeight : 900;

  const orbX = useTransform(smoothX, [0, screenWidth], [-60, 60]);
  const orbY = useTransform(smoothY, [0, screenHeight], [-60, 60]);

  const orb2X = useTransform(smoothX, [0, screenWidth], [40, -40]);
  const orb2Y = useTransform(smoothY, [0, screenHeight], [30, -30]);

  const lightX = useTransform(smoothX, (value) => value - 180);
  const lightY = useTransform(smoothY, (value) => value - 180);

  useEffect(() => {
    const handleMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  const particles = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        left: `${8 + ((i * 11) % 84)}%`,
        top: `${10 + ((i * 13) % 78)}%`,
        size: 2 + (i % 3),
        duration: 4 + (i % 4),
        delay: i * 0.25,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* base contínua */}
      <div className="absolute inset-0 bg-[#020202]" />

      {/* gradiente atmosférico contínuo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(188,235,223,0.16),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(173,224,219,0.14),transparent_26%),radial-gradient(circle_at_20%_70%,rgba(188,235,223,0.10),transparent_32%),linear-gradient(180deg,rgba(5,15,12,0.25)_0%,rgba(2,2,2,0.05)_45%,rgba(2,2,2,0.6)_100%)]" />

      {/* luz seguindo o mouse */}
      <motion.div
        style={{ x: lightX, y: lightY }}
        className="pointer-events-none absolute h-[360px] w-[360px] rounded-full bg-[#bcebdf]/14 blur-3xl"
      />

      {/* orb 1 */}
      <motion.div
        style={{ x: orbX, y: orbY }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-120px] top-16 h-72 w-72 rounded-full bg-[#bcebdf]/20 blur-3xl"
      />

      {/* orb 2 */}
      <motion.div
        style={{ x: orb2X, y: orb2Y }}
        animate={{ scale: [1, 1.14, 1], opacity: [0.14, 0.24, 0.14] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-100px] top-28 h-80 w-80 rounded-full bg-[#ade0db]/20 blur-3xl"
      />

      {/* orb 3 */}
      <motion.div
        animate={{ y: [0, 24, 0], x: [0, 12, 0], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-120px] left-[28%] h-96 w-96 rounded-full bg-[#ade0db]/12 blur-3xl"
      />

      {/* partículas suaves */}
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          animate={{ opacity: [0.15, 0.55, 0.15], y: [0, -18, 0] }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-[#bcebdf]/70 shadow-[0_0_10px_rgba(188,235,223,0.5)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
        />
      ))}

      {/* vinheta muito suave */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_42%,rgba(2,2,2,0.26)_100%)]" />
    </div>
  );
}
