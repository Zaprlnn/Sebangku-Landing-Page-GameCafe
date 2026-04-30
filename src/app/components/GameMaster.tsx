import { motion } from "motion/react";
import { Check, Star } from "lucide-react";

const GAMES_IMG = "https://images.unsplash.com/photo-1677188010559-0667a1ed33a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwcGxheWluZyUyMGJvYXJkJTIwZ2FtZXMlMjBsYXVnaGluZ3xlbnwxfHx8fDE3NzczNjM1OTJ8MA&ixlib=rb-4.1.0&q=80&w=800";

const features = [
  "Gratis, tanpa biaya tambahan apapun",
  "Tersedia selama jam operasional penuh",
  "Sabar menjelaskan aturan dari nol",
  "Ramah pemula & anak-anak",
  "Rekomendasikan game sesuai selera",
  "Berpengalaman di 200+ judul game",
];

const reviews = [
  { name: "Alya R.", text: "Game Master-nya asik banget, gak bikin malu kalau nanya!", stars: 5, avatar: "A" },
  { name: "Budi S.", text: "Diajarin Catan dari nol, jadi langsung bisa main. TOP!", stars: 5, avatar: "B" },
];

export function GameMaster() {
  return (
    <section className="py-24 px-6 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Big orange header strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl p-8 md:p-12 mb-12 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #F55F1F 0%, #FF8A50 100%)" }}
        >
          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }} />
          <div className="absolute right-20 bottom-0 w-40 h-40 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }} />

          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs mb-4"
                style={{ background: "rgba(255,255,255,0.2)", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, letterSpacing: "0.08em" }}
              >
                🎮 LAYANAN EKSKLUSIF
              </span>
              <h2
                style={{ fontFamily: "'Fraunces', serif", color: "#fff", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.1 }}
              >
                Bingung Cara Main?<br />
                <span style={{ fontStyle: "italic", opacity: 0.9 }}>Ada Game Master-nya!</span>
              </h2>
              <p
                className="mt-4"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.85)", lineHeight: 1.75, fontSize: "1rem" }}
              >
                Tim Game Master kami adalah para gamer berpengalaman yang dengan senang hati memandu kamu dari nol — gratis, tanpa biaya tambahan apapun!
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {features.map((f, i) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,255,255,0.25)" }}
                  >
                    <Check size={13} color="#fff" strokeWidth={3} />
                  </div>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", color: "#fff", fontSize: "0.92rem", fontWeight: 500 }}>{f}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Split layout: photo + reviews */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden relative"
            style={{ minHeight: 400, boxShadow: "0 20px 60px rgba(245,95,31,0.12)" }}
          >
            <img src={GAMES_IMG} alt="People playing board games" className="w-full h-full object-cover absolute inset-0" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,20,16,0.5) 0%, transparent 60%)" }} />

            {/* Floating stat */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-6 right-6 rounded-2xl p-4 text-center"
              style={{ background: "rgba(255,255,255,0.95)", boxShadow: "0 8px 32px rgba(0,0,0,0.12)", backdropFilter: "blur(12px)" }}
            >
              <p style={{ fontFamily: "'Fraunces', serif", color: "#F55F1F", fontSize: "1.8rem", fontWeight: 800, lineHeight: 1 }}>200+</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#6B4436", fontSize: "0.72rem", fontWeight: 600, marginTop: 2 }}>Game dikuasai</p>
            </motion.div>

            <div className="absolute bottom-6 left-6">
              <p style={{ fontFamily: "'Fraunces', serif", color: "#fff", fontSize: "1.4rem", fontWeight: 800 }}>Seru Bareng Teman 🎲</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.75)", fontSize: "0.85rem" }}>Game Master siap pantau sesi bermainmu</p>
            </div>
          </motion.div>

          {/* Reviews + info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            {/* Tagline card */}
            <div
              className="rounded-2xl p-6"
              style={{ background: "#FFF3EC", border: "2px solid rgba(245,95,31,0.15)" }}
            >
              <p
                style={{ fontFamily: "'Fraunces', serif", color: "#1C1410", fontSize: "1.3rem", fontWeight: 700, fontStyle: "italic", lineHeight: 1.5 }}
              >
                "Kami bukan cuma staf cafe — kami adalah teman bermainmu yang paling antusias."
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white"
                  style={{ background: "#F55F1F" }}
                >
                  <span className="text-sm font-bold">R</span>
                </div>
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#1C1410", fontWeight: 700, fontSize: "0.85rem" }}>Rizky — Game Master Lead</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#F55F1F", fontSize: "0.75rem" }}>Sebangku Cafe</p>
                </div>
              </div>
            </div>

            {/* Review cards */}
            {reviews.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="rounded-2xl p-5"
                style={{ background: "#fff", boxShadow: "0 4px 20px rgba(245,95,31,0.07)", border: "1.5px solid rgba(245,95,31,0.1)" }}
              >
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <Star key={j} size={13} fill="#F55F1F" color="#F55F1F" />
                  ))}
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#1C1410", fontSize: "0.9rem", lineHeight: 1.6 }}>"{r.text}"</p>
                <div className="flex items-center gap-2 mt-3">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: "#F55F1F" }}
                  >
                    {r.avatar}
                  </div>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", color: "#6B4436", fontSize: "0.8rem", fontWeight: 600 }}>{r.name}</span>
                </div>
              </motion.div>
            ))}

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { n: "100%", l: "Gratis" },
                { n: "7 Hari", l: "Seminggu" },
                { n: "4.9★", l: "Rating GM" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl p-4 text-center"
                  style={{ background: "rgba(245,95,31,0.07)", border: "1.5px solid rgba(245,95,31,0.12)" }}
                >
                  <p style={{ fontFamily: "'Fraunces', serif", color: "#F55F1F", fontSize: "1.3rem", fontWeight: 800, lineHeight: 1 }}>{s.n}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#6B4436", fontSize: "0.72rem", fontWeight: 600, marginTop: 3 }}>{s.l}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
