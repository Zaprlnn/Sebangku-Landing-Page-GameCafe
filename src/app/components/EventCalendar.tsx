import { motion } from "motion/react";
import { useState } from "react";

const filters = [
  { id: "all", label: "Semua" },
  { id: "turnamen", label: "🏆 Turnamen" },
  { id: "keluarga", label: "👨‍👩‍👧 Keluarga" },
  { id: "komunitas", label: "🤝 Komunitas" },
];

const events = [
  { id: 1, date: { day: "10", month: "Mei" }, title: "Board Game Tournament", desc: "Adu strategi di turnamen Catan & Wingspan berhadiah! Tim maks 4 orang.", category: "turnamen", color: "#F55F1F", badge: "🏆 Berhadiah", slots: "12 slot tersisa" },
  { id: 2, date: { day: "14", month: "Mei" }, title: "Family Play Day", desc: "Hari spesial keluarga! Anak di bawah 10 tahun gratis masuk.", category: "keluarga", color: "#FF8A50", badge: "👨‍👩‍👧 Keluarga", slots: "Terbuka umum" },
  { id: 3, date: { day: "18", month: "Mei" }, title: "RPG Night: Dungeon Crawl", desc: "Sesi D&D untuk pemula! Game Master memandu petualangan pertamamu.", category: "komunitas", color: "#6B3F2B", badge: "⚔️ RPG Night", slots: "8 slot tersisa" },
  { id: 4, date: { day: "24", month: "Mei" }, title: "Game Swap Community", desc: "Tukar game koleksimu! Bawa game lama, bawa pulang yang baru.", category: "komunitas", color: "#F55F1F", badge: "🔄 Game Swap", slots: "Terbuka umum" },
  { id: 5, date: { day: "31", month: "Mei" }, title: "Speed Gaming Championship", desc: "Siapa paling cepat menyelesaikan game? Kompetisi knockout seru!", category: "turnamen", color: "#FF8A50", badge: "⚡ Speed", slots: "20 slot tersisa" },
  { id: 6, date: { day: "7", month: "Jun" }, title: "Kids Game Workshop", desc: "Workshop untuk anak-anak belajar board game dengan cara menyenangkan.", category: "keluarga", color: "#4A7A4E", badge: "👦 Workshop", slots: "15 slot tersisa" },
];

export function EventCalendar() {
  const [active, setActive] = useState("all");

  const filtered = events.filter((e) => active === "all" || e.category === active);

  return (
    <section id="events" className="py-24 px-6 overflow-hidden" style={{ background: "#FFF3EC" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 mb-14 items-end">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs mb-4"
              style={{ background: "#F55F1F", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, letterSpacing: "0.08em" }}
            >
              📅 EVENT & AGENDA
            </span>
            <h2 style={{ fontFamily: "'Fraunces', serif", color: "#1C1410", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, lineHeight: 1.1 }}>
              Agenda Seru di{" "}
              <span style={{ color: "#F55F1F", fontStyle: "italic" }}>Sebangku</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ fontFamily: "'DM Sans', sans-serif", color: "#6B4436", lineHeight: 1.75 }}
          >
            Dari turnamen berhadiah jutaan rupiah hingga family day seru — selalu ada yang bisa kamu ikuti setiap minggunya.
          </motion.p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className="px-5 py-2.5 rounded-full text-sm transition-all duration-200 hover:scale-105"
              style={{
                background: active === f.id ? "#F55F1F" : "#fff",
                color: active === f.id ? "#fff" : "#1C1410",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                boxShadow: active === f.id ? "0 4px 20px rgba(245,95,31,0.35)" : "0 2px 8px rgba(0,0,0,0.06)",
                border: "2px solid",
                borderColor: active === f.id ? "#F55F1F" : "rgba(0,0,0,0.08)",
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((ev, i) => (
            <motion.div
              key={ev.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              style={{ background: "#fff", boxShadow: "0 4px 20px rgba(245,95,31,0.06)", border: "2px solid rgba(245,95,31,0.08)" }}
              whileHover={{ boxShadow: "0 16px 48px rgba(245,95,31,0.15)" }}
            >
              {/* Orange top bar */}
              <div className="h-1.5" style={{ background: ev.color }} />

              <div className="p-6">
                <div className="flex items-start justify-between mb-5">
                  {/* Date badge */}
                  <div
                    className="rounded-2xl px-4 py-2 text-center"
                    style={{ background: ev.color + "18", border: `2px solid ${ev.color}30`, minWidth: 60 }}
                  >
                    <p style={{ fontFamily: "'Fraunces', serif", color: ev.color, fontSize: "1.5rem", fontWeight: 800, lineHeight: 1 }}>{ev.date.day}</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", color: ev.color, fontSize: "0.72rem", fontWeight: 700, marginTop: 1 }}>{ev.date.month}</p>
                  </div>
                  {/* Badge */}
                  <span
                    className="px-3 py-1.5 rounded-xl text-xs"
                    style={{ background: ev.color + "18", color: ev.color, fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}
                  >
                    {ev.badge}
                  </span>
                </div>

                <h3
                  className="mb-2"
                  style={{ fontFamily: "'Fraunces', serif", color: "#1C1410", fontSize: "1.1rem", fontWeight: 800, lineHeight: 1.3 }}
                >
                  {ev.title}
                </h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#6B4436", fontSize: "0.83rem", lineHeight: 1.6, opacity: 0.85 }}>
                  {ev.desc}
                </p>

                <div className="flex items-center justify-between mt-5 pt-4" style={{ borderTop: "1.5px solid rgba(0,0,0,0.05)" }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", color: "#6B4436", fontSize: "0.78rem", opacity: 0.7 }}>
                    📍 {ev.slots}
                  </span>
                  <button
                    className="px-5 py-2 rounded-xl text-sm transition-all hover:opacity-90"
                    style={{ background: ev.color, color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, boxShadow: `0 4px 16px ${ev.color}40` }}
                  >
                    Daftar
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="#"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "#F55F1F", fontWeight: 700, textDecoration: "underline", textUnderlineOffset: 5 }}
          >
            Lihat semua agenda mendatang →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
