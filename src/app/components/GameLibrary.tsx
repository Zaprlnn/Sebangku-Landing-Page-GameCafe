import { motion } from "motion/react";
import { useState } from "react";

const categories = [
  { id: "strategy", emoji: "♟️", title: "Strategy", count: 87, desc: "Asah otak, rencanakan langkah, taklukkan lawan.", tags: ["Catan", "Wingspan", "Terraforming Mars"], color: "#F55F1F" },
  { id: "party", emoji: "🎉", title: "Party Game", count: 64, desc: "Cocok untuk rame-rame, dijamin seru & ngakak!", tags: ["Codenames", "Exploding Kittens", "One Night"], color: "#FF8A50" },
  { id: "family", emoji: "👨‍👩‍👧‍👦", title: "Family", count: 53, desc: "Ramah segala usia, sempurna untuk keluarga.", tags: ["Ticket to Ride", "Dixit", "Mysterium"], color: "#F55F1F" },
  { id: "card", emoji: "🃏", title: "Card Game", count: 112, desc: "Cepat, portable, dan tiada habisnya dimainkan.", tags: ["Dominion", "Sushi Go", "7 Wonders"], color: "#FF8A50" },
  { id: "rpg", emoji: "⚔️", title: "RPG", count: 29, desc: "Masuki dunia imajinatif dengan cerita memukau.", tags: ["D&D 5e", "Pathfinder", "Gloomhaven"], color: "#F55F1F" },
  { id: "deduction", emoji: "🔍", title: "Deduction", count: 41, desc: "Kumpulkan clue, singkap misteri, temukan tersangkanya.", tags: ["Clue", "Coup", "Sheriff of Nottingham"], color: "#FF8A50" },
  { id: "coop", emoji: "🤝", title: "Co-op", count: 38, desc: "Menang bersama atau kalah bersama — tim dulu!", tags: ["Pandemic", "Spirit Island", "Arkham Horror"], color: "#F55F1F" },
  { id: "abstract", emoji: "🔷", title: "Abstract", count: 24, desc: "Permainan logis murni tanpa tema — adrenalin otak!", tags: ["Chess", "Go", "Azul"], color: "#FF8A50" },
];

const FEATURED_GAME_IMG = "https://images.unsplash.com/photo-1753290068896-12915c9bc8fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2FyZCUyMGdhbWUlMjBwaWVjZXMlMjBjYXJkcyUyMGRpY2UlMjBjbG9zZSUyMHVwJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc3MzcwNDM5fDA&ixlib=rb-4.1.0&q=80&w=800";

export function GameLibrary() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="game-library" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16 items-end">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs mb-4"
              style={{ background: "rgba(245,95,31,0.1)", color: "#F55F1F", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, letterSpacing: "0.08em", border: "1.5px solid rgba(245,95,31,0.2)" }}
            >
              GAME LIBRARY
            </span>
            <h2 style={{ fontFamily: "'Fraunces', serif", color: "#1C1410", fontSize: "clamp(2.2rem, 4vw, 3.4rem)", fontWeight: 800, lineHeight: 1.1 }}>
              Ratusan Game,<br />
              <span style={{ color: "#F55F1F", fontStyle: "italic" }}>Tak Terbatas</span> Pilihan
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#6B4436", lineHeight: 1.75, fontSize: "1rem" }}>
              Dari strategy mendalam sampai party game yang bikin meja getar karena ketawa. Koleksi kami terus bertambah setiap bulan!
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-5 px-6 py-3 rounded-xl text-sm transition-all hover:scale-105"
              style={{ background: "#F55F1F", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, boxShadow: "0 6px 24px rgba(245,95,31,0.35)" }}
            >
              🗂️ Lihat Semua Koleksi
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured image left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-1 rounded-3xl overflow-hidden relative"
            style={{ minHeight: 500, boxShadow: "0 20px 60px rgba(245,95,31,0.15)" }}
          >
            <img src={FEATURED_GAME_IMG} alt="Board Games" className="w-full h-full object-cover absolute inset-0" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,20,16,0.8) 30%, transparent 70%)" }} />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {["Strategy ♟️", "Party 🎉", "RPG ⚔️", "Co-op 🤝"].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs"
                    style={{ background: "rgba(245,95,31,0.85)", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p style={{ fontFamily: "'Fraunces', serif", color: "#fff", fontSize: "1.4rem", fontWeight: 800 }}>8 Kategori Game</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.7)", fontSize: "0.85rem", marginTop: 4 }}>Dari ringan sampai hardcore — semua ada!</p>
            </div>
          </motion.div>

          {/* Right: 2-column grid of category cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                onMouseEnter={() => setHovered(cat.id)}
                onMouseLeave={() => setHovered(null)}
                className="rounded-2xl p-5 cursor-pointer transition-all duration-300"
                style={{
                  background: hovered === cat.id ? cat.color : "#fff",
                  boxShadow: hovered === cat.id ? `0 12px 40px ${cat.color}40` : "0 4px 16px rgba(0,0,0,0.05)",
                  border: "2px solid",
                  borderColor: hovered === cat.id ? cat.color : "rgba(245,95,31,0.1)",
                  transform: hovered === cat.id ? "translateY(-3px)" : "translateY(0)",
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                    style={{ background: hovered === cat.id ? "rgba(255,255,255,0.2)" : "rgba(245,95,31,0.1)" }}
                  >
                    {cat.emoji}
                  </span>
                  <span
                    className="px-2.5 py-1 rounded-full text-xs"
                    style={{
                      background: hovered === cat.id ? "rgba(255,255,255,0.25)" : "rgba(245,95,31,0.1)",
                      color: hovered === cat.id ? "#fff" : "#F55F1F",
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    {cat.count}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "'Fraunces', serif",
                    color: hovered === cat.id ? "#fff" : "#1C1410",
                    fontSize: "1rem",
                    fontWeight: 700,
                    marginBottom: 4,
                  }}
                >
                  {cat.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: hovered === cat.id ? "rgba(255,255,255,0.8)" : "#6B4436",
                    fontSize: "0.8rem",
                    lineHeight: 1.5,
                    opacity: 0.9,
                  }}
                >
                  {cat.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {cat.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-md"
                      style={{
                        background: hovered === cat.id ? "rgba(255,255,255,0.2)" : "rgba(245,95,31,0.08)",
                        color: hovered === cat.id ? "#fff" : "#F55F1F",
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
