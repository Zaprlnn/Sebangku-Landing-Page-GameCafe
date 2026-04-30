import { motion } from "motion/react";

const HERO_BG = "https://images.unsplash.com/photo-1762744594797-bcfd17a8c032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2FyZCUyMGdhbWUlMjBjYWZlJTIwYW1iaWFuY2UlMjB3YXJtJTIwbGlnaHR8ZW58MXx8fHwxNzc3MzcwNDM1fDA&ixlib=rb-4.1.0&q=80&w=1080";
const FRIENDS_IMG = "https://images.unsplash.com/photo-1596439817528-222c5f3217ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBmcmllbmRzJTIwbGF1Z2hpbmclMjBjYWZlJTIwdGFibGUlMjBnYW1lc3xlbnwxfHx8fDE3NzczNzA0Mzh8MA&ixlib=rb-4.1.0&q=80&w=600";
const GAMES_IMG = "https://images.unsplash.com/photo-1753290068896-12915c9bc8fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2FyZCUyMGdhbWUlMjBwaWVjZXMlMjBjYXJkcyUyMGRpY2UlMjBjbG9zZSUyMHVwJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc3MzcwNDM5fDA&ixlib=rb-4.1.0&q=80&w=600";
const COFFEE_IMG = "https://images.unsplash.com/photo-1694025706554-6e6481edf78e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGNhcHB1Y2Npbm8lMjBtaWxrJTIwZm9hbSUyMGFydHxlbnwxfHx8fDE3NzczNzA0MzB8MA&ixlib=rb-4.1.0&q=80&w=600";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Large orange arc top-right decoration */}
      <div
        className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(245,95,31,0.12) 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-0 right-0 w-80 h-80 pointer-events-none"
        style={{ background: "linear-gradient(135deg, #F55F1F 0%, #FF8A50 100%)", borderRadius: "0 0 0 100%", opacity: 0.08 }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-12">
        <div className="grid lg:grid-cols-12 gap-8 items-start min-h-[88vh]">

          {/* LEFT — Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-center gap-6 py-8"
          >
            {/* Badge pill */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 w-fit px-4 py-2 rounded-full"
              style={{ background: "rgba(245,95,31,0.1)", border: "1.5px solid rgba(245,95,31,0.25)" }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#F55F1F" }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", color: "#F55F1F", fontWeight: 600, fontSize: "0.82rem", letterSpacing: "0.04em" }}>
                BUKA HARI INI · 11.00 – 22.00 WIB
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <h1
                style={{
                  fontFamily: "'Fraunces', serif",
                  color: "#1C1410",
                  fontSize: "clamp(3rem, 5.5vw, 5rem)",
                  fontWeight: 800,
                  lineHeight: 1.0,
                  letterSpacing: "-0.02em",
                }}
              >
                Main Game,
                <br />
                <span
                  className="relative"
                  style={{
                    background: "linear-gradient(135deg, #F55F1F, #FF8A50)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Minum Kopi,
                </span>
                <br />
                <span style={{ color: "#1C1410" }}>Bahagia!</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ fontFamily: "'DM Sans', sans-serif", color: "#6B4436", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: 460 }}
            >
              Cafe board game dengan <strong>500+ koleksi game</strong>, Game Master siap bantu, kopi premium berbagai varian, dan dessert yang menggoda — semua dalam satu tempat!
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#location"
                className="flex items-center gap-2 px-7 py-4 rounded-2xl text-base transition-all hover:scale-105 active:scale-95"
                style={{ background: "#F55F1F", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, boxShadow: "0 8px 32px rgba(245,95,31,0.4)" }}
              >
                🎲 Reservasi Meja
              </a>
              <a
                href="#game-library"
                className="flex items-center gap-2 px-7 py-4 rounded-2xl text-base transition-all hover:scale-105"
                style={{ background: "#FFF3EC", color: "#F55F1F", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, border: "2px solid rgba(245,95,31,0.2)" }}
              >
                Lihat Koleksi Game
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-8 pt-4 border-t"
              style={{ borderColor: "rgba(0,0,0,0.06)" }}
            >
              {[
                { n: "500+", l: "Koleksi Game" },
                { n: "40+", l: "Varian Kopi" },
                { n: "10K+", l: "Member Aktif" },
                { n: "5.0★", l: "Rating Google" },
              ].map((s) => (
                <div key={s.l} className="flex flex-col">
                  <span style={{ fontFamily: "'Fraunces', serif", color: "#F55F1F", fontSize: "1.6rem", fontWeight: 700, lineHeight: 1 }}>{s.n}</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", color: "#6B4436", fontSize: "0.75rem", fontWeight: 500, marginTop: 3, opacity: 0.8 }}>{s.l}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Bento image grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-6 grid grid-cols-2 gap-4 h-[580px]"
          >
            {/* Main large image */}
            <div
              className="col-span-2 rounded-3xl overflow-hidden relative"
              style={{ height: 320, boxShadow: "0 24px 60px rgba(245,95,31,0.18)", border: "3px solid #FFF3EC" }}
            >
              <img src={HERO_BG} alt="Sebangku Cafe" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,20,16,0.35) 0%, transparent 60%)" }} />
              {/* Floating badge */}
              <div
                className="absolute bottom-5 left-5 px-4 py-2 rounded-xl"
                style={{ background: "rgba(245,95,31,0.95)", backdropFilter: "blur(8px)" }}
              >
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#fff", fontWeight: 700, fontSize: "0.82rem" }}>🎯 Game Master Tersedia</p>
              </div>
            </div>

            {/* Bottom two cards */}
            <div className="rounded-2xl overflow-hidden relative" style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.1)", border: "3px solid #FFF3EC" }}>
              <img src={FRIENDS_IMG} alt="Friends gaming" className="w-full h-full object-cover" style={{ height: 240 }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,20,16,0.4) 0%, transparent 50%)" }} />
              <div className="absolute bottom-3 left-3">
                <p style={{ fontFamily: "'Fraunces', serif", color: "#fff", fontWeight: 700, fontSize: "0.9rem" }}>Seru Bareng 👥</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden flex-1 relative" style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.1)", border: "3px solid #FFF3EC" }}>
                <img src={GAMES_IMG} alt="Board games" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,20,16,0.4) 0%, transparent 50%)" }} />
                <div className="absolute bottom-3 left-3">
                  <p style={{ fontFamily: "'Fraunces', serif", color: "#fff", fontWeight: 700, fontSize: "0.9rem" }}>500+ Game 🎲</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden" style={{ height: 90, boxShadow: "0 8px 32px rgba(0,0,0,0.1)", border: "3px solid #FFF3EC" }}>
                <img src={COFFEE_IMG} alt="Coffee" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Orange wave divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: 60 }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#FFF3EC" />
        </svg>
      </div>
    </section>
  );
}
