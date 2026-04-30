import { motion } from "motion/react";

const CAFE_IMG = "https://images.unsplash.com/photo-1678449780068-d415dae199ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW50ZXJpb3IlMjBvcmFuZ2UlMjB3YXJtJTIwd29vZGVuJTIwY296eSUyMHNlYXRpbmd8ZW58MXx8fHwxNzc3MzcwNDQzfDA&ixlib=rb-4.1.0&q=80&w=1080";
const GAMES2_IMG = "https://images.unsplash.com/photo-1716817279221-d815f96dce7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2FyZCUyMGdhbWVzJTIwdGFibGV0b3AlMjBnYW1pbmclMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc3NzM2MzU5MXww&ixlib=rb-4.1.0&q=80&w=1080";

const bentoFeatures = [
  { emoji: "🏠", title: "Interior Cozy", desc: "Desain hangat & nyaman, sempurna untuk sesi marathon game." },
  { emoji: "📶", title: "WiFi Super Cepat", desc: "Streaming & browsing tanpa hambatan sepanjang hari." },
  { emoji: "🔌", title: "Stop Kontak Banyak", desc: "Isi daya device-mu di setiap sudut meja." },
  { emoji: "🎵", title: "Musik Ambient", desc: "Playlist curated yang mendukung mood bermain." },
  { emoji: "❄️", title: "AC Full Area", desc: "Sejuk nyaman dari ujung ke ujung ruangan." },
  { emoji: "🅿️", title: "Parkir Luas", desc: "Area parkir motor & mobil tersedia gratis." },
];

export function CafeShowcase() {
  return (
    <section className="py-24 px-6" style={{ background: "#FFF3EC" }}>
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs mb-4"
            style={{ background: "#F55F1F", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, letterSpacing: "0.08em" }}
          >
            KENAPA SEBANGKU?
          </span>
          <h2
            style={{ fontFamily: "'Fraunces', serif", color: "#1C1410", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, lineHeight: 1.1 }}
          >
            Lebih dari Sekadar{" "}
            <span style={{ color: "#F55F1F", fontStyle: "italic" }}>Cafe Biasa</span>
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "#6B4436", lineHeight: 1.75, fontSize: "1rem" }}
          >
            Kami dirancang khusus untuk pengalaman bermain terbaik — dari suasana hingga fasilitas.
          </p>
        </motion.div>

        {/* Main bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {/* Big cafe photo card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 relative rounded-3xl overflow-hidden"
            style={{ height: 420, boxShadow: "0 20px 60px rgba(245,95,31,0.15)" }}
          >
            <img src={CAFE_IMG} alt="Sebangku Cafe Interior" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(245,95,31,0.4) 0%, transparent 60%)" }} />
            <div className="absolute bottom-8 left-8 right-8">
              <h3
                style={{ fontFamily: "'Fraunces', serif", color: "#fff", fontSize: "1.8rem", fontWeight: 800, lineHeight: 1.2, textShadow: "0 2px 16px rgba(0,0,0,0.4)" }}
              >
                Suasana yang Bikin<br />Kamu Betah Berlama-lama
              </h3>
              <div className="flex gap-3 mt-4">
                {["Cozy ✓", "Instagramable ✓", "Family Friendly ✓"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs"
                    style={{ background: "rgba(255,255,255,0.25)", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, backdropFilter: "blur(8px)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column — game shelf + orange stat */}
          <div className="flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden flex-1"
              style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.1)" }}
            >
              <img src={GAMES2_IMG} alt="Game collection" className="w-full h-full object-cover" style={{ minHeight: 220 }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,20,16,0.6) 0%, transparent 50%)" }} />
              <div className="absolute bottom-4 left-4">
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.8)", fontSize: "0.75rem", fontWeight: 600 }}>KOLEKSI GAME</p>
                <p style={{ fontFamily: "'Fraunces', serif", color: "#FF8A50", fontSize: "2rem", fontWeight: 800, lineHeight: 1 }}>500+</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.7)", fontSize: "0.8rem" }}>judul tersedia</p>
              </div>
            </motion.div>

            {/* Orange highlight card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-3xl p-6 flex flex-col justify-between"
              style={{ background: "#F55F1F", height: 160 }}
            >
              <div className="flex items-center justify-between">
                <span style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.7)", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.06em" }}>OPEN HOURS</span>
                <span style={{ fontSize: "1.5rem" }}>⏰</span>
              </div>
              <div>
                <p style={{ fontFamily: "'Fraunces', serif", color: "#fff", fontSize: "1.3rem", fontWeight: 700 }}>11.00 – 23.00</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.75)", fontSize: "0.82rem", marginTop: 2 }}>Senin – Minggu · Walk-in welcome!</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Feature pills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
          {bentoFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{ background: "#fff", boxShadow: "0 4px 16px rgba(245,95,31,0.06)", border: "1.5px solid rgba(245,95,31,0.1)" }}
            >
              <div className="text-2xl mb-2">{f.emoji}</div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#1C1410", fontWeight: 700, fontSize: "0.82rem" }}>{f.title}</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#6B4436", fontSize: "0.72rem", lineHeight: 1.4, marginTop: 3, opacity: 0.75 }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
