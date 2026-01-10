"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

/* ---------------- ANIMATION PRESETS ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

/* ---------------- FLOATING PARTICLES ---------------- */

function FloatingParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const items = Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      size: Math.random() * 10 + 3,
      left: Math.random() * 100,
      delay: Math.random() * 6,
      duration: (Math.random() * 20 + 12) * 1.6,
      shape: Math.random() > 0.7 ? "star" : Math.random() > 0.5 ? "blob" : "dot",
      hue: Math.floor(Math.random() * 360),
    }));
    setParticles(items);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => {
        const color = `hsla(${p.hue},80%,60%,0.22)`;
        if (p.shape === "star") {
          return (
            <motion.svg
              key={p.id}
              viewBox="0 0 24 24"
              className="absolute blur-md"
              style={{ width: p.size * 2, height: p.size * 2, left: `${p.left}%`, bottom: "-18%" }}
              animate={{ y: ["0%", "-160%"], rotate: [0, 45, 0], opacity: [0, 1, 0] }}
              transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
            >
              <path
                d="M12 2.6l1.9 4 4.4.6-3.2 3.2.8 4.4L12 13.9 7.1 15.8l.8-4.4L4.8 8.2l4.4-.6L12 2.6z"
                fill={color}
              />
            </motion.svg>
          );
        }

        if (p.shape === "blob") {
          return (
            <motion.div
              key={p.id}
              className="absolute rounded-full blur-2xl"
              style={{
                width: p.size * 3,
                height: p.size * 2.2,
                left: `${p.left}%`,
                bottom: `-20%`,
                background: `radial-gradient(circle at 30% 30%, ${color}, transparent 40%)`,
              }}
              animate={{ y: ["0%", "-150%"], scale: [0.9, 1.08, 0.95], opacity: [0, 0.9, 0] }}
              transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
            />
          );
        }

        return (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.left}%`,
              bottom: `-12%`,
              background: color,
              mixBlendMode: "screen",
            }}
            animate={{ y: ["0%", "-140%"], opacity: [0, 0.9, 0] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
          />
        );
      })}
    </div>
  );
}

/* ---------------- ANIMATED BACKGROUND BLOBS ---------------- */

function AnimatedBlobs() {
  return (
    <div className="absolute inset-0 pointer-events-none -z-10">
      <motion.div
        animate={{ rotate: [0, 8, -6, 0], scale: [1, 1.06, 0.98, 1] }}
        transition={{ duration: 48, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-12%] top-[-8%] w-[560px] h-[520px] rounded-full bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/12 blur-3xl"
      />
      <motion.div
        animate={{ rotate: [0, -12, 6, 0], scale: [1, 0.96, 1.04, 1] }}
        transition={{ duration: 57.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-8%] bottom-[-6%] w-[420px] h-[420px] rounded-3xl bg-gradient-to-tl from-purple-500/18 to-cyan-400/10 blur-2xl"
      />
    </div>
  );
}

/* ---------------- FLOATING AVATAR / GRAPHIC ---------------- */

function AvatarGraphic() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: [0, -6, 0], rotate: [0, 2, -2, 0] }}
      transition={{ duration: 9.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      className="hidden md:flex items-center justify-center absolute right-6 top-12 w-40 h-40 z-30"
    >
      <svg viewBox="0 0 120 120" className="w-40 h-40 drop-shadow-[0_6px_24px_rgba(56,189,248,0.12)]">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.85" />
          </linearGradient>
        </defs>
        <rect x="4" y="4" width="112" height="112" rx="18" fill="url(#g1)" opacity="0.12" />
        <g transform="translate(20,20)">
          <circle cx="40" cy="28" r="18" fill="#082032" opacity="0.12" />
          <circle cx="40" cy="28" r="14" fill="#06121a" />
          <path d="M6 70c8-12 36-12 36-12s28 0 36 12v6H6v-6z" fill="#0b2a33" opacity="0.95" />
          <circle cx="30" cy="26" r="3" fill="#9be7ff" />
          <circle cx="50" cy="26" r="3" fill="#ffd1ff" />
        </g>
      </svg>
    </motion.div>
  );
}

/* ---------------- ICON RING FOR CONTACTS ---------------- */

function IconRing({ children, hue = 200 }) {
  const color = `hsla(${hue},85%,60%,0.12)`;
  return (
    <div className="relative w-14 h-14 flex items-center justify-center">
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ boxShadow: `0 6px 30px ${color}` }}
        animate={{ rotate: [0, 45, -30, 0], scale: [1, 1.06, 0.98, 1] }}
        transition={{ duration: 9.6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/* ---------------- SECTION-SPECIFIC GRAPHICS ---------------- */

function AcademicBadge() {
  return (
    <motion.svg viewBox="0 0 80 80" className="w-16 h-16 ml-3 inline-block" initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: [0.95, 1.06, 1], rotate: [0, 8, -6, 0], opacity: 1 }} transition={{ duration: 5.12, repeat: Infinity, ease: 'easeInOut' }}>
      <defs>
        <linearGradient id="ag" x1="0" x2="1">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
      <circle cx="40" cy="28" r="16" fill="url(#ag)" opacity="0.14" />
      <path d="M40 18l6 10-6 4-6-4 6-10z" fill="#06b6d4" opacity="0.95" />
      <rect x="28" y="44" width="24" height="8" rx="2" fill="#a78bfa" opacity="0.9" />
    </motion.svg>
  );
}

function SkillRings({ items = 3 }) {
  const rings = Array.from({ length: items }).map((_, i) => ({ id: i, r: 28 - i * 6, dash: 180 + i * 40, hue: 180 + i * 40 }));
  return (
    <svg viewBox="0 0 80 80" className="w-20 h-20">
      <g transform="translate(40,40)">
        {rings.map((r) => (
          <motion.circle key={r.id} r={r.r} fill="none" stroke={`hsla(${r.hue},80%,60%,0.18)`} strokeWidth="4" strokeDasharray={r.dash} initial={{ rotate: 0 }} animate={{ rotate: [0, 90, -45, 0] }} transition={{ duration: (6 + r.id * 1.5) * 1.6, repeat: Infinity, ease: 'linear' }} />
        ))}
      </g>
    </svg>
  );
}

function ProjectBadge({ hue = 260 }) {
  const color = `hsla(${hue},85%,60%,0.14)`;
  return (
    <motion.div className="absolute right-3 top-3 w-10 h-10 rounded-full" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: [1, 1.08, 0.98, 1], opacity: 1 }} transition={{ duration: 6.4, repeat: Infinity, ease: 'easeInOut' }} style={{ background: color, backdropFilter: 'blur(6px)' }}>
      <svg viewBox="0 0 24 24" className="w-full h-full p-1">
        <circle cx="12" cy="8" r="3" fill={`hsla(${hue},90%,65%,0.9)`} />
        <rect x="6" y="13" width="12" height="6" rx="2" fill={`hsla(${hue},75%,50%,0.9)`} />
      </svg>
    </motion.div>
  );
}

function CertificateBadge() {
  return (
    <motion.div className="w-18 h-18 ml-3 inline-flex items-center justify-center" initial={{ rotate: -6, scale: 0.96, opacity: 1 }} animate={{ rotate: [ -6, 6, -3, 0 ], scale: [0.98, 1.04, 1] }} transition={{ duration: 5.12, repeat: Infinity, ease: 'easeInOut' }}>
      <svg viewBox="0 0 96 96" className="w-18 h-18">
        <defs>
          <linearGradient id="certg2" x1="0" x2="1">
            <stop offset="0%" stopColor="#fff59e" />
            <stop offset="100%" stopColor="#fb7185" />
          </linearGradient>
        </defs>
        <g>
          <rect x="10" y="12" rx="6" width="76" height="52" fill="url(#certg2)" opacity="0.98" stroke="#fde68a" strokeWidth="0.6" />
          <path d="M24 34h48v4H24z" fill="#fff" opacity="0.96" />
          <g transform="translate(48,56)">
            <motion.circle cx="0" cy="0" r="10" fill="#fff" initial={{ scale: 0.9 }} animate={{ scale: [0.9, 1.12, 0.98, 1] }} transition={{ duration: 6.4, repeat: Infinity }} />
            <motion.path d="M-3 3 L0 9 L3 3" stroke="#fb7185" strokeWidth="1.6" fill="none" initial={{ y: -2 }} animate={{ y: [ -2, 3, -1, 0 ] }} transition={{ duration: 6.4, repeat: Infinity }} />
          </g>
          <motion.g initial={{ opacity: 0.2 }} animate={{ opacity: [0.2, 0.9, 0.2] }} transition={{ duration: 6.4, repeat: Infinity }}>
            <circle cx="20" cy="18" r="1.2" fill="#fff" />
            <circle cx="74" cy="20" r="1.6" fill="#fff" />
            <circle cx="60" cy="14" r="1" fill="#fff" />
          </motion.g>
        </g>
      </svg>
    </motion.div>
  );
}

/* ----------------- UNIQUE BADGES ----------------- */

function CapBadge() {
  return (
    <motion.svg viewBox="0 0 64 64" className="w-12 h-12 ml-3 inline-block" initial={{ y: 6 }} animate={{ y: [6, -6, 6], rotate: [0, 4, -4, 0] }} transition={{ duration: 5.76, repeat: Infinity }}>
      <path d="M32 12 L8 24 L32 36 L56 24 Z" fill="#06b6d4" opacity="0.9" />
      <rect x="28" y="34" width="8" height="14" rx="2" fill="#a78bfa" />
    </motion.svg>
  );
}

function BookBadge() {
  return (
    <motion.svg viewBox="0 0 64 64" className="w-12 h-12 ml-3 inline-block" initial={{ rotateX: 0 }} animate={{ rotateX: [0, 20, 0] }} transition={{ duration: 5.12, repeat: Infinity }}>
      <rect x="8" y="12" width="48" height="40" rx="2" fill="#0ea5a4" opacity="0.12" />
      <path d="M12 18h20v2H12zM12 24h36v2H12z" fill="#06b6d4" />
    </motion.svg>
  );
}

function SchoolBadge() {
  return (
    <motion.svg viewBox="0 0 64 64" className="w-12 h-12 ml-3 inline-block" initial={{ y: 0 }} animate={{ y: [0, -4, 0] }} transition={{ duration: 6.4, repeat: Infinity }}>
      <rect x="8" y="20" width="48" height="28" rx="2" fill="#f97316" opacity="0.12" />
      <path d="M32 10 L18 20 L46 20 Z" fill="#fb7185" />
      <rect x="22" y="30" width="8" height="12" fill="#fb7185" />
      <rect x="36" y="30" width="6" height="8" fill="#fb7185" />
    </motion.svg>
  );
}

function GraduationBadge() {
  return (
    <motion.svg viewBox="0 0 64 64" className="w-14 h-14 ml-3 inline-block" initial={{ rotate: -6 }} animate={{ rotate: [ -6, 4, -2, 0 ] }} transition={{ duration: 6.4, repeat: Infinity }}>
      <path d="M32 12 L8 24 L32 36 L56 24 Z" fill="#06b6d4" />
      <rect x="28" y="34" width="8" height="12" rx="2" fill="#a78bfa" />
      <circle cx="44" cy="18" r="3" fill="#fef08a" />
    </motion.svg>
  );
}

function FitnessBadge() {
  return (
    <motion.div className="w-12 h-12 ml-3 inline-flex items-center justify-center" initial={{ scale: 0.95 }} animate={{ scale: [0.95, 1.08, 0.98, 1] }} transition={{ duration: 4.8, repeat: Infinity }}>
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path d="M12 21s-4-2.2-6.4-4.6C2.8 12.6 4 8 7 6c2.2-1.4 4.4 0 5 1 0.6-1 2.8-2.4 5-1 3 2 4.2 6.6 1.4 10.4C16 18.8 12 21 12 21z" fill="#fb7185" />
      </svg>
    </motion.div>
  );
}

function ChatBadge() {
  return (
    <motion.div className="w-12 h-12 ml-3 inline-flex items-center justify-center" initial={{ x: 0 }} animate={{ x: [0, 6, -4, 0] }} transition={{ duration: 6.14, repeat: Infinity }}>
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path d="M2 3h20v12H6l-4 4V3z" fill="#60a5fa" opacity="0.12" />
        <g>
          <motion.circle cx="8" cy="8" r="1" fill="#93c5fd" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 3.84, repeat: Infinity, delay: 0 }} />
          <motion.circle cx="12" cy="8" r="1" fill="#93c5fd" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 3.84, repeat: Infinity, delay: 0.32 }} />
          <motion.circle cx="16" cy="8" r="1" fill="#93c5fd" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 3.84, repeat: Infinity, delay: 0.64 }} />
        </g>
      </svg>
    </motion.div>
  );
}

function DroneBadge() {
  return (
    <motion.svg
      viewBox="0 0 240 140"
      className="w-56 h-44"
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 7.2, repeat: Infinity }}
    >
      {/* Body */}
      <rect x="90" y="54" width="60" height="24" rx="6" fill="#7c3aed" />
      <circle cx="120" cy="66" r="6" fill="#c4b5fd" />

      {/* Arms */}
      <rect x="40" y="62" width="60" height="6" rx="3" fill="#a78bfa" />
      <rect x="140" y="62" width="60" height="6" rx="3" fill="#a78bfa" />

      {/* Rotors */}
        {[44, 196].map((x, i) => (
        <motion.g
          key={i}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: `${x}px 65px` }}
        >
          <rect x={x - 18} y="62" width="36" height="4" rx="2" fill="#e5e7eb" />
        </motion.g>
      ))}

      {/* Shadow */}
      <motion.ellipse
        cx="120"
        cy="110"
        rx="60"
        ry="10"
        fill="#7c3aed"
        opacity="0.12"
        animate={{ scale: [1, 0.85, 1] }}
        transition={{ duration: 7.2, repeat: Infinity }}
      />
    </motion.svg>
  );
}

function DataBadge() {
  // animated bar-chart style badge representing data growth
  return (
    <motion.svg viewBox="0 0 48 48" className="w-14 h-14 mr-3 inline-block" initial={{ scale: 0.95 }} animate={{ scale: [0.96, 1.06, 0.98, 1] }} transition={{ duration: 5.76, repeat: Infinity }}>
      <g>
          <rect x="8" y="22" width="6" height="14" rx="1" fill="#06b6d4" >
          <animate attributeName="height" values="10;18;14;18" dur="4.8s" repeatCount="indefinite" />
          <animate attributeName="y" values="26;18;22;18" dur="4.8s" repeatCount="indefinite" />
        </rect>
        <rect x="20" y="16" width="6" height="20" rx="1" fill="#0ea5a4">
          <animate attributeName="height" values="12;24;18;24" dur="4.8s" repeatCount="indefinite" begin="0.48s" />
          <animate attributeName="y" values="28;20;24;20" dur="4.8s" repeatCount="indefinite" begin="0.48s" />
        </rect>
        <rect x="32" y="10" width="6" height="26" rx="1" fill="#a78bfa">
          <animate attributeName="height" values="8;28;18;28" dur="4.8s" repeatCount="indefinite" begin="0.96s" />
          <animate attributeName="y" values="30;10;20;10" dur="4.8s" repeatCount="indefinite" begin="0.96s" />
        </rect>
        <motion.line x1="6" y1="8" x2="42" y2="8" stroke="#94a3b8" strokeWidth="0.8" initial={{ opacity: 0.12 }} animate={{ opacity: [0.12, 0.32, 0.12] }} transition={{ duration: 6.4, repeat: Infinity }} />
      </g>
    </motion.svg>
  );
}

function VizBadge() {
  return (
    <motion.svg viewBox="0 0 48 48" className="w-12 h-12 mr-3 inline-block">
      <path d="M6 34 L16 22 L26 26 L36 14 L42 18" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <motion.circle cx="16" cy="22" r="1.6" fill="#a78bfa" animate={{ r: [1.6, 3, 1.6] }} transition={{ duration: 3.84, repeat: Infinity }} />
      <motion.circle cx="36" cy="14" r="1.6" fill="#a78bfa" animate={{ r: [1.6, 3, 1.6] }} transition={{ duration: 3.84, repeat: Infinity, delay: 0.48 }} />
    </motion.svg>
  );
}

function ProgBadge() {
  return (
    <motion.div className="w-14 h-14 mr-3 inline-flex items-center justify-center" initial={{ y: 0 }} animate={{ y: [0, -6, 0] }} transition={{ duration: 6.4, repeat: Infinity }}>
      <svg viewBox="0 0 64 64" className="w-12 h-12">
        <rect x="8" y="16" width="48" height="28" rx="3" fill="#06121a" opacity="0.9" />
        <rect x="12" y="20" width="40" height="20" rx="2" fill="#0ea5a4" opacity="0.12" />
        <rect x="22" y="44" width="20" height="4" rx="1" fill="#06b6d4" />
      </svg>
    </motion.div>
  );
}

function WebBadge() {
  return (
    <motion.div className="w-12 h-12 mr-3 inline-flex items-center justify-center text-2xl" animate={{ rotate: [0, 12, -8, 0] }} transition={{ duration: 7.2, repeat: Infinity }}>
      <span className="leading-none">🌐</span>
    </motion.div>
  );
}

function DBBadge() {
  return (
    <motion.svg viewBox="0 0 48 48" className="w-12 h-12 mr-3 inline-block" initial={{ y: 0 }} animate={{ y: [0, -4, 0] }} transition={{ duration: 4.8, repeat: Infinity }}>
      <ellipse cx="24" cy="14" rx="14" ry="4" fill="#7c3aed" opacity="0.9" />
      <rect x="10" y="14" width="28" height="18" fill="#6d28d9" opacity="0.12" />
      <ellipse cx="24" cy="32" rx="14" ry="4" fill="#a78bfa" opacity="0.18" />
    </motion.svg>
  );
}

/* ---------------- MAIN PAGE ---------------- */

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#020617] via-[#020024] to-black text-cyan-100 overflow-hidden">

      {/* Progress Bar */}
      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-500 origin-left z-50" />

      {/* Ambient Glow + Blobs */}
      <motion.div animate={{ opacity: [0.28, 0.56, 0.28] }} transition={{ duration: 25.6, repeat: Infinity }} className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),transparent_60%)] pointer-events-none" />
      <AnimatedBlobs />
      <FloatingParticles />

      {/* Layout: left nav, center content, right pane */}
      <div className="pt-28 max-w-7xl mx-auto px-6 grid grid-cols-12 gap-6 relative">

        {/* LEFT: vertical nav */}
        <aside className="col-span-2 hidden lg:flex flex-col items-start gap-6 sticky top-24 h-fit">
          <motion.h1 initial={{ x: -12, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="font-extrabold text-2xl text-cyan-300">RB</motion.h1>
          <nav className="flex flex-col gap-3 mt-2">
            {['home','academics','skills','projects','contact'].map((s)=> (
              <motion.a key={s} whileHover={{ x: 6 }} href={`#${s}`} className="uppercase text-xs text-cyan-200/70 tracking-widest">{s}</motion.a>
            ))}
          </nav>
        </aside>

        {/* CENTER: main content */}
        <div className="col-span-12 lg:col-span-8 space-y-12">
          {/* HERO CARD */}
          <section id="home" className="relative">
            <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="rounded-3xl p-8 bg-black/60 backdrop-blur-xl border border-cyan-400/10 shadow-[0_20px_60px_rgba(2,6,23,0.6)]">
              <div className="md:flex md:items-center md:justify-between gap-6">
                <div>
                  <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-400 text-transparent bg-clip-text">Rithik Balasubramanian</h1>
                  <p className="mt-3 text-cyan-300">Integrated MSc Data Science • Amrita Vishwa Vidyapeetham</p>
                  <p className="mt-4 max-w-xl text-cyan-100/80 leading-relaxed">Building intelligent systems and machine learning solutions through data-driven innovation. Focused on autonomous technologies, predictive analytics, and real-world problem solving.</p>
                </div>

                <div className="mt-6 md:mt-0 flex items-center justify-center">
                  <AvatarGraphic />
                </div>
              </div>
            </motion.div>
          </section>

          {/* ACADEMICS */}
          <motion.section id="academics" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.8 }} className="">
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold mb-6 tracking-widest text-fuchsia-400">ACADEMIC PROFILE</motion.h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Integrated MSc Data Science', 
                    line1: 'Amrita Vishwa Vidyapeetham', 
                    line2: '2022 – 2027', 
                    line3: 'Currently in 4th Year',
                    icon: (
                      <motion.div 
                        className="w-16 h-16 ml-3 inline-flex items-center justify-center"
                        animate={{ 
                          y: [0, -4, 0],
                          rotate: [0, 5, -3, 0]
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <span className="text-3xl">🎓</span>
                      </motion.div>
                    )
                  },
                  {
                    title: 'Higher Secondary Education', 
                    line1: 'Srinivasa Vidhyalaya', 
                    line2: 'Completed in 2022', 
                    line3: 'Mathematics & CS Foundation',
                    icon: (
                      <motion.div 
                        className="w-16 h-16 ml-3 inline-flex items-center justify-center"
                        animate={{ 
                          y: [0, -3, 0],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ 
                          duration: 3.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <span className="text-3xl">🏫</span>
                      </motion.div>
                    )
                  },
                  {
                    title: 'Certification', 
                    line1: 'Data Analytics with Excel', 
                    line2: 'Year: 2024', 
                    line3: 'Issued by Amrita Vishwa Vidyapeetham',
                    icon: (
                      <motion.div 
                        className="w-16 h-16 ml-3 inline-flex items-center justify-center"
                        animate={{ 
                          rotate: [0, 8, -4, 0],
                          scale: [1, 1.08, 1]
                        }}
                        transition={{ 
                          duration: 4.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <span className="text-3xl">📜</span>
                      </motion.div>
                    )
                  }
                ].map((item,i)=> (
                    <motion.div key={i} variants={fadeUp} whileHover={{ scale: 1.03 }} className="relative rounded-2xl p-[2px] bg-gradient-to-r from-cyan-400 to-fuchsia-500">
                      <ProjectBadge hue={200 + i * 40} />
                      <div className="rounded-2xl bg-black/65 backdrop-blur-xl p-6 text-center">
                        <h3 className="font-semibold text-lg text-white mb-2 flex items-center justify-center">
                          {item.title}
                          {item.icon}
                        </h3>
                        <p className="text-cyan-200 text-sm">{item.line1}</p>
                        <p className="text-cyan-300/70 text-sm">{item.line2}</p>
                        <p className="text-cyan-100 text-sm mt-3">{item.line3}</p>
                      </div>
                    </motion.div>
                  ))}
              </div>
          </motion.section>

          {/* SKILLS */}
          <motion.section
            id="skills"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-32"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-widest text-fuchsia-400">SKILLS</h2>

            <div className="grid md:grid-cols-3 gap-6">

              {[
                { title: " Data Science", skills: "Pandas, NumPy, SQL, Machine Learning, Statistics", badge: <DataBadge /> },
                { title: " Visualization", skills: "Matplotlib, Seaborn", badge: <VizBadge /> },
                { title: " Programming", skills: "Python, Java", badge: <ProgBadge /> },
                { title: " Web", skills: "HTML, CSS", badge: <WebBadge /> },
                { title: " Databases", skills: "MySQL, PostgreSQL", badge: <DBBadge /> },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.06 }}
                  className="rounded-xl bg-black/60 backdrop-blur-xl border border-cyan-400/20 p-5 shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">{item.badge}</div>
                    <div>
                      <h3 className="font-semibold mb-2 text-cyan-300">
                        {item.title}
                      </h3>
                      <p className="text-cyan-100/80 text-sm">
                        {item.skills}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

            </div>
          </motion.section>

          {/* PROJECTS */}
          <motion.section id="projects" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.8 }} className="mt-6">
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold mb-6 tracking-widest text-fuchsia-400">PROJECTS</motion.h2>
              <div className="grid md:grid-cols-3 gap-6">
              {[{title: 'Fitness Tracker & Calorie Predictor', desc: 'Web-based fitness platform that predicts calorie consumption using a trained ML model based on user workout and diet inputs.', tools: ['HTML','CSS','Machine Learning']},{title: 'Online Chat Application', desc: 'Desktop chat system enabling user messaging, online status tracking, and message management using server-side technologies.', tools: ['JSP','Servlets','PostgreSQL']},{title: 'Autonomous Attacking Drone', desc: 'Reinforcement learning based drone simulation that autonomously navigates toward targets and learns optimal strategies.', tools: ['Reinforcement Learning','Webots']}].map((project,i)=> (
                <motion.div key={i} variants={fadeUp} whileHover={{ scale: 1.04 }} className="relative rounded-xl bg-black/60 backdrop-blur-xl border border-purple-400/20 p-5 overflow-hidden">
                    <div className="flex items-start gap-3">
                      {project.title.includes('Fitness') ? <FitnessBadge /> : project.title.includes('Chat') ? <ChatBadge /> : <DroneBadge />}
                      <div>
                        <h3 className="font-semibold mb-2 text-purple-300">{project.title}</h3>
                        <p className="text-cyan-100/80 text-sm leading-relaxed mb-4">{project.desc}</p>
                        <div className="flex flex-wrap gap-2">{project.tools.map((t,idx)=>(<motion.span key={idx} whileHover={{ scale: 1.12 }} className="text-xs px-3 py-1 rounded-full border border-cyan-400/30 text-cyan-200 bg-cyan-400/6">{t}</motion.span>))}</div>
                      </div>
                    </div>
                  </motion.div>
              ))}
              </div>
          </motion.section>

          {/* CONTACT */}
          <motion.section id="contact" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.7 }} className="mt-8 mb-24">
            <h2 className="text-2xl md:text-3xl font-bold tracking-widest text-fuchsia-400 mb-6">CONNECT</h2>
            <div className="relative w-full max-w-md">
              <motion.div className="absolute inset-0 rounded-2xl -z-10 bg-gradient-to-r from-cyan-500/6 via-fuchsia-500/6 to-purple-500/6" animate={{ opacity: [0.05, 0.14, 0.05] }} transition={{ duration: 9.6, repeat: Infinity }} />
              <motion.div className="relative p-4 rounded-2xl bg-black/45 border border-cyan-400/10 flex items-center justify-center gap-8">
                <motion.svg viewBox="0 0 120 120" className="absolute inset-0 -z-5 w-full h-full pointer-events-none" animate={{ rotate: [0, 360] }} transition={{ duration: 38.4, repeat: Infinity, ease: 'linear' }}>
                  <defs>
                    <linearGradient id="orbit" x1="0" x2="1">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.06" />
                      <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.04" />
                    </linearGradient>
                  </defs>
                  <g transform="translate(60,60)">
                    <circle r="36" stroke="url(#orbit)" strokeWidth="1" fill="none" />
                    <motion.circle cx="36" cy="0" r="3" fill="#06b6d4" animate={{ cx: [36, -36, 36] }} transition={{ duration: 12.8, repeat: Infinity, ease: 'easeInOut' }} />
                    <motion.circle cx="0" cy="-28" r="2" fill="#a78bfa" animate={{ cy: [-28, 28, -28] }} transition={{ duration: 9.6, repeat: Infinity, ease: 'easeInOut' }} />
                  </g>
                </motion.svg>
                <motion.a whileHover={{ scale: 1.06 }} href="mailto:rithikrithik222@gmail.com" className="flex items-center gap-3" aria-label="email">
                  <IconRing hue={190}><Mail size={28} /></IconRing>
                </motion.a>
                <motion.a whileHover={{ scale: 1.06 }} href="https://github.com/Rithik40" target="_blank" className="flex items-center gap-3" aria-label="github">
                  <IconRing hue={260}><Github size={28} /></IconRing>
                </motion.a>
                <motion.a whileHover={{ scale: 1.06 }} href="https://www.linkedin.com/in/rithik-balasubramanian-921a7426b/" target="_blank" className="flex items-center gap-3" aria-label="linkedin">
                  <IconRing hue={320}><Linkedin size={28} /></IconRing>
                </motion.a>
              </motion.div>
            </div>
          </motion.section>
        </div>

        {/* RIGHT: floating pane (quicklinks removed per request) */}
        <aside className="col-span-12 lg:col-span-2 hidden lg:flex flex-col items-center gap-6 sticky top-24">
          <div className="w-full">
            {/* right pane intentionally left minimal per request */}
          </div>
        </aside>

      </div>
    </main>
  );
}