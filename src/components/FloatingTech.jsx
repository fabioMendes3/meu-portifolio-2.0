import { useEffect, useMemo, useState } from "react";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiVercel,
  SiDigitalocean,
  SiExpress,
  SiRailway,
} from "react-icons/si";

const floatingElements = [
  { type: "icon", icon: FaReact, label: "React", color: "cyan" },
  { type: "icon", icon: SiTailwindcss, label: "Tailwind", color: "sky" },
  { type: "icon", icon: FaNodeJs, label: "Node", color: "lime" },
  { type: "icon", icon: SiExpress, label: "Express", color: "slate" },
  { type: "icon", icon: SiMysql, label: "MySQL", color: "blue" },
  { type: "icon", icon: SiPostgresql, label: "PostgreSQL", color: "violet" },
  { type: "icon", icon: SiVercel, label: "Vercel", color: "white" },
  { type: "icon", icon: SiRailway, label: "Railway", color: "fuchsia" },
  { type: "icon", icon: SiDigitalocean, label: "DigitalOcean", color: "sky" },
  { type: "icon", icon: FaDatabase, label: "DB", color: "emerald" },

  { type: "symbol", label: "<>", color: "cyan" },
  { type: "symbol", label: "{}", color: "violet" },
  { type: "symbol", label: "</>", color: "fuchsia" },
  { type: "symbol", label: "[]", color: "sky" },

  { type: "chip", label: "API", color: "emerald" },
  { type: "chip", label: "SQL", color: "violet" },
  { type: "chip", label: "UI", color: "cyan" },
  { type: "chip", label: "DEPLOY", color: "white" },
];

function getColorClasses(color) {
  const colors = {
    cyan: {
      border: "border-[#ade0db]/30",
      bg: "bg-[#ade0db]/10",
      text: "text-[#d9dbdb]",
      glow: "shadow-[0_0_30px_rgba(173,224,219,0.22)]",
      line: "rgba(173,224,219,0.30)",
    },
    lime: {
      border: "border-lime-400/30",
      bg: "bg-lime-400/10",
      text: "text-lime-300",
      glow: "shadow-[0_0_30px_rgba(163,230,53,0.22)]",
      line: "rgba(163,230,53,0.28)",
    },
    violet: {
      border: "border-violet-400/30",
      bg: "bg-violet-400/10",
      text: "text-violet-300",
      glow: "shadow-[0_0_30px_rgba(167,139,250,0.24)]",
      line: "rgba(167,139,250,0.28)",
    },
    sky: {
      border: "border-sky-400/30",
      bg: "bg-sky-400/10",
      text: "text-sky-300",
      glow: "shadow-[0_0_30px_rgba(56,189,248,0.22)]",
      line: "rgba(56,189,248,0.28)",
    },
    fuchsia: {
      border: "border-fuchsia-400/30",
      bg: "bg-fuchsia-400/10",
      text: "text-fuchsia-300",
      glow: "shadow-[0_0_30px_rgba(232,121,249,0.22)]",
      line: "rgba(232,121,249,0.28)",
    },
    emerald: {
      border: "border-emerald-400/30",
      bg: "bg-emerald-400/10",
      text: "text-emerald-300",
      glow: "shadow-[0_0_30px_rgba(52,211,153,0.22)]",
      line: "rgba(52,211,153,0.28)",
    },
    blue: {
      border: "border-blue-400/30",
      bg: "bg-blue-400/10",
      text: "text-blue-300",
      glow: "shadow-[0_0_30px_rgba(96,165,250,0.22)]",
      line: "rgba(96,165,250,0.28)",
    },
    slate: {
      border: "border-slate-300/20",
      bg: "bg-slate-300/5",
      text: "text-slate-200",
      glow: "shadow-[0_0_24px_rgba(226,232,240,0.10)]",
      line: "rgba(226,232,240,0.16)",
    },
    white: {
      border: "border-white/20",
      bg: "bg-white/5",
      text: "text-white",
      glow: "shadow-[0_0_24px_rgba(255,255,255,0.10)]",
      line: "rgba(255,255,255,0.16)",
    },
  };

  return colors[color] ?? colors.cyan;
}

function FloatingItem({ item }) {
  const color = getColorClasses(item.color);

  if (item.type === "icon") {
    const Icon = item.icon;

    return (
      <div
        className={[
          "flex h-14 w-14 items-center justify-center rounded-2xl border",
          "backdrop-blur-md transition-all duration-200",
          color.border,
          color.bg,
          color.text,
          color.glow,
        ].join(" ")}
      >
        <Icon size={24} />
      </div>
    );
  }

  if (item.type === "symbol") {
    return (
      <div
        className={[
          "flex h-14 min-w-[58px] items-center justify-center rounded-2xl border px-3",
          "font-semibold tracking-wide backdrop-blur-md transition-all duration-200",
          color.border,
          color.bg,
          color.text,
          color.glow,
        ].join(" ")}
      >
        <span className="text-lg">{item.label}</span>
      </div>
    );
  }

  return (
    <div
      className={[
        "rounded-xl border px-3 py-2 text-[11px] font-bold tracking-[0.25em]",
        "backdrop-blur-md transition-all duration-200",
        color.border,
        color.bg,
        color.text,
        color.glow,
      ].join(" ")}
    >
      {item.label}
    </div>
  );
}

export default function FloatingTech() {
  const [items, setItems] = useState([]);

  const getBounds = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    return {
      width,
      height,
      paddingX: 44,
      paddingTop: 24,
      paddingBottom: Math.max(220, height * 0.26), // impede chegar na linha de transição
    };
  };

  useEffect(() => {
    const { width, height, paddingX, paddingTop, paddingBottom } = getBounds();
    const maxY = height - paddingBottom;

    // Espalha os itens numa grade para garantir posições iniciais sem sobreposição
    const cols = Math.ceil(Math.sqrt(18));
    const cellW = Math.max(width - paddingX * 2, 100) / cols;
    const cellH = Math.max(maxY - paddingTop, 100) / Math.ceil(18 / cols);

    const initial = Array.from({ length: 18 }, (_, i) => {
      const element = floatingElements[i % floatingElements.length];
      const col = i % cols;
      const row = Math.floor(i / cols);
      const baseVX = (Math.random() - 0.5) * 0.45;
      const baseVY = (Math.random() - 0.5) * 0.45;

      return {
        id: i,
        x: paddingX + col * cellW + Math.random() * (cellW * 0.5),
        y: paddingTop + row * cellH + Math.random() * (cellH * 0.5),
        vx: baseVX,
        vy: baseVY,
        baseVX,
        baseVY,
        rotation: Math.random() * 16 - 8,
        rotationSpeed: (Math.random() - 0.5) * 0.05,
        depth: Math.random(),
        ...element,
      };
    });

    setItems(initial);
  }, []);

  useEffect(() => {
    let mouse = { x: -9999, y: -9999 };
    let lastInteraction = 0;

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      lastInteraction = Date.now();
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Raio de colisão de cada item (metade do tamanho visual ~56px + margem)
    const RADIUS = 32;
    const COLLISION_DIST = RADIUS * 2;
    const RESTITUTION = 0.82;

    const interval = setInterval(() => {
      const { width, height, paddingX, paddingTop, paddingBottom } = getBounds();
      const maxY = height - paddingBottom;

      const now = Date.now();
      const recentlyInteracted = now - lastInteraction < 900;

      setItems((prev) => {
        // Passo 1 — atualiza velocidade e posição de cada item individualmente
        const next = prev.map((item) => {
          const cx = item.x + RADIUS;
          const cy = item.y + RADIUS;
          const dx = cx - mouse.x;
          const dy = cy - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy) || 1;

          let vx = item.vx;
          let vy = item.vy;
          let rotation = item.rotation;

          if (distance < 150) {
            const force = (150 - distance) / 150;
            const depthForce = 0.45 + item.depth * 0.45;
            vx += (dx / distance) * force * depthForce;
            vy += (dy / distance) * force * depthForce;
            rotation += (Math.random() - 0.5) * 1.2;
          }

          vx += (item.baseVX - vx) * (recentlyInteracted ? 0.018 : 0.038);
          vy += (item.baseVY - vy) * (recentlyInteracted ? 0.018 : 0.038);

          const maxSpeed = 0.9 + item.depth * 0.35;
          vx = Math.max(Math.min(vx, maxSpeed), -maxSpeed);
          vy = Math.max(Math.min(vy, maxSpeed), -maxSpeed);

          rotation += item.rotationSpeed;
          rotation += (0 - rotation) * 0.005;

          let newX = item.x + vx;
          let newY = item.y + vy;

          const rightBound = width - paddingX - RADIUS * 2;
          const bottomBound = maxY - RADIUS * 2;

          if (newX < paddingX) { vx = Math.abs(vx) * RESTITUTION; newX = paddingX; }
          else if (newX > rightBound) { vx = -Math.abs(vx) * RESTITUTION; newX = rightBound; }

          if (newY < paddingTop) { vy = Math.abs(vy) * RESTITUTION; newY = paddingTop; }
          else if (newY > bottomBound) { vy = -Math.abs(vy) * RESTITUTION; newY = bottomBound; }

          return { ...item, x: newX, y: newY, vx, vy, rotation };
        });

        // Passo 2 — detecta e resolve colisões entre pares de itens
        for (let i = 0; i < next.length; i++) {
          for (let j = i + 1; j < next.length; j++) {
            const a = next[i];
            const b = next[j];

            const ax = a.x + RADIUS;
            const ay = a.y + RADIUS;
            const bx = b.x + RADIUS;
            const by = b.y + RADIUS;

            const dx = ax - bx;
            const dy = ay - by;
            const dist = Math.sqrt(dx * dx + dy * dy) || 0.001;

            if (dist < COLLISION_DIST) {
              const nx = dx / dist;
              const ny = dy / dist;
              // Separa os dois itens para eliminar o overlap
              const overlap = (COLLISION_DIST - dist) * 0.52;
              next[i] = { ...next[i], x: next[i].x + nx * overlap, y: next[i].y + ny * overlap };
              next[j] = { ...next[j], x: next[j].x - nx * overlap, y: next[j].y - ny * overlap };

              // Impulso elástico: troca as componentes de velocidade ao longo da normal
              const dvx = next[i].vx - next[j].vx;
              const dvy = next[i].vy - next[j].vy;
              const dot = dvx * nx + dvy * ny;

              if (dot < 0) {
                const impulse = (1 + RESTITUTION) * dot * 0.5;
                next[i] = { ...next[i], vx: next[i].vx - impulse * nx, vy: next[i].vy - impulse * ny };
                next[j] = { ...next[j], vx: next[j].vx + impulse * nx, vy: next[j].vy + impulse * ny };
              }
            }
          }
        }

        return next;
      });
    }, 16);

    const handleResize = () => {
      const { width, height, paddingX, paddingTop, paddingBottom } = getBounds();
      const maxY = height - paddingBottom;

      setItems((prev) =>
        prev.map((item) => ({
          ...item,
          x: Math.max(paddingX, Math.min(item.x, width - paddingX)),
          y: Math.max(paddingTop, Math.min(item.y, maxY)),
        }))
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const connections = useMemo(() => {
    const result = [];

    for (let i = 0; i < items.length; i += 1) {
      for (let j = i + 1; j < items.length; j += 1) {
        const a = items[i];
        const b = items[j];

        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 170) {
          const opacity = 1 - dist / 170;
          const aColor = getColorClasses(a.color);

          result.push({
            id: `${a.id}-${b.id}`,
            x1: a.x + 28,
            y1: a.y + 28,
            x2: b.x + 28,
            y2: b.y + 28,
            opacity: opacity * 0.55,
            stroke: aColor.line,
          });
        }
      }
    }

    return result;
  }, [items]);

  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      <svg className="absolute inset-0 h-full w-full">
        {connections.map((line) => (
          <line
            key={line.id}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke={line.stroke}
            strokeWidth="1"
            style={{ opacity: line.opacity }}
          />
        ))}
      </svg>

      {items.map((item) => {
        const scale = 0.72 + item.depth * 0.58;

        return (
          <div
            key={item.id}
            className="absolute transition-transform duration-75"
            style={{
              transform: `translate(${item.x}px, ${item.y}px) scale(${scale}) rotate(${item.rotation}deg)`,
            }}
          >
            <FloatingItem item={item} />
          </div>
        );
      })}
    </div>
  );
}