import { motion } from "motion/react";

const mainFood = [
  {
    id: 1,
    name: "Board Pasta Carbonara",
    desc: "Creamy pasta al dente dengan bacon crispy dan parmesan — kenyang lama biar game makin panjang.",
    price: "Rp 58.000",
    tag: "🍝 Main Course",
    image: "https://images.unsplash.com/photo-1569622362413-789f23f181d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMHNhbmR3aWNoJTIwY2FmZSUyMGZvb2QlMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzc3MzYzNTk1fDA&ixlib=rb-4.1.0&q=80&w=600",
    badge: "Favorit",
    badgeColor: "#F55F1F",
  },
  {
    id: 2,
    name: "Warm Table Soup",
    desc: "Sup krim tomat segar dengan roti sourdough — hangat dan menenangkan.",
    price: "Rp 42.000",
    tag: "🍲 Soup",
    image: "https://images.unsplash.com/photo-1771002469947-794293ccc9e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBicm93bmllJTIwd2FybSUyMGRlc3NlcnQlMjBjYWZlfGVufDF8fHx8MTc3NzM3MDQ0Mnww&ixlib=rb-4.1.0&q=80&w=600",
    badge: "Comfort Food",
    badgeColor: "#FF8A50",
  },
  {
    id: 3,
    name: "Game Over Shake",
    desc: "Thick shake vanilla premium dengan oreo crush dan whipped cream tinggi-tinggi.",
    price: "Rp 38.000",
    tag: "🥤 Minuman",
    image: "https://images.unsplash.com/photo-1619640956450-745e698b49da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxrc2hha2UlMjBzbW9vdGhpZSUyMGNvbG9yZnVsJTIwZHJpbmt8ZW58MXx8fHwxNzc3MzYzNTk1fDA&ixlib=rb-4.1.0&q=80&w=600",
    badge: "Instagramable",
    badgeColor: "#C8714A",
  },
];

export function SignatureMenu() {
  return (
    <section id="food-menu" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs mb-4"
            style={{ background: "rgba(245,95,31,0.1)", color: "#F55F1F", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, letterSpacing: "0.08em", border: "1.5px solid rgba(245,95,31,0.2)" }}
          >
            🍽️ MAKANAN UTAMA
          </span>
          <h2 style={{ fontFamily: "'Fraunces', serif", color: "#1C1410", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.1 }}>
            Menu yang Cocok{" "}
            <span style={{ color: "#F55F1F", fontStyle: "italic" }}>Dimainkan</span>
          </h2>
          <p
            className="mt-4 max-w-lg mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "#6B4436", lineHeight: 1.75 }}
          >
            Setiap hidangan dirancang untuk menemani sesi permainan terbaikmu — dari sarapan hingga makan malam.
          </p>
        </motion.div>

        {/* 3 column card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {mainFood.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              style={{
                background: "#fff",
                boxShadow: "0 8px 32px rgba(245,95,31,0.08)",
                border: "2px solid rgba(245,95,31,0.1)",
              }}
              whileHover={{ boxShadow: "0 24px 60px rgba(245,95,31,0.2)" }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: 240 }}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,20,16,0.35) 0%, transparent 60%)" }} />
                {/* Top tag */}
                <span
                  className="absolute top-4 left-4 px-3 py-1.5 rounded-xl text-xs"
                  style={{ background: "rgba(255,255,255,0.9)", color: "#1C1410", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, backdropFilter: "blur(8px)" }}
                >
                  {item.tag}
                </span>
                {/* Badge */}
                <span
                  className="absolute top-4 right-4 px-3 py-1.5 rounded-xl text-xs"
                  style={{ background: item.badgeColor, color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}
                >
                  {item.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 style={{ fontFamily: "'Fraunces', serif", color: "#1C1410", fontSize: "1.15rem", fontWeight: 800, lineHeight: 1.25 }}>{item.name}</h3>
                  <span
                    style={{ fontFamily: "'Fraunces', serif", color: "#F55F1F", fontSize: "1rem", fontWeight: 800, whiteSpace: "nowrap" }}
                  >
                    {item.price}
                  </span>
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#6B4436", fontSize: "0.85rem", lineHeight: 1.6, opacity: 0.85 }}>
                  {item.desc}
                </p>
                <button
                  className="mt-5 w-full py-3 rounded-2xl text-sm transition-all"
                  style={{ background: "#F55F1F", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#D44A0A"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#F55F1F"; }}
                >
                  + Tambah ke Pesanan
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View full menu */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base transition-all hover:scale-105"
            style={{ background: "rgba(245,95,31,0.08)", color: "#F55F1F", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, border: "2px solid rgba(245,95,31,0.2)" }}
          >
            Lihat Menu Lengkap (50+ Item) →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
