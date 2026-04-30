import { motion } from "motion/react";
import { useState } from "react";

const coffeeCategories = ["Semua", "Espresso Base", "Cold & Iced", "Signature", "Non-Coffee"];

const coffeeItems = [
  {
    id: 1,
    name: "Espresso",
    sub: "Double Shot",
    category: "Espresso Base",
    desc: "Pure, bold, intense — untuk yang butuh kick nyata sebelum main game berat.",
    price: "Rp 22.000",
    hot: true,
    cold: false,
    badge: "🔥 Bestseller",
    badgeColor: "#F55F1F",
    image: "https://images.unsplash.com/photo-1645116507090-bac79e3a6f83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMGNvZmZlZSUyMGJsYWNrJTIwY3VwJTIwb3ZlcmhlYWR8ZW58MXx8fHwxNzc3MzcwNDMwfDA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    id: 2,
    name: "Creamy Latte",
    sub: "Susu Full Cream",
    category: "Espresso Base",
    desc: "Espresso bertemu susu lembut — balance sempurna untuk sesi santai.",
    price: "Rp 32.000",
    hot: true,
    cold: true,
    badge: "⭐ Favorit",
    badgeColor: "#FF8A50",
    image: "https://images.unsplash.com/photo-1694025706554-6e6481edf78e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGNhcHB1Y2Npbm8lMjBtaWxrJTIwZm9hbSUyMGFydHxlbnwxfHx8fDE3NzczNzA0MzB8MA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    id: 3,
    name: "Cold Brew",
    sub: "18-Hour Steep",
    category: "Cold & Iced",
    desc: "Diseduh 18 jam, smooth & rendah asam. Teman terbaik saat game marathon.",
    price: "Rp 35.000",
    hot: false,
    cold: true,
    badge: "❄️ Cold Only",
    badgeColor: "#4A9EBF",
    image: "https://images.unsplash.com/photo-1561641377-f7456d23aa9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xkJTIwYnJldyUyMGljZWQlMjBjb2ZmZWUlMjBkcmluayUyMGdsYXNzfGVufDF8fHx8MTc3NzM3MDQzMHww&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    id: 4,
    name: "Matcha Latte",
    sub: "Ceremonial Grade",
    category: "Non-Coffee",
    desc: "Matcha Jepang grade tinggi dengan susu oat — earthy, creamy, sempurna.",
    price: "Rp 36.000",
    hot: true,
    cold: true,
    badge: "🍵 Trending",
    badgeColor: "#4A7A4E",
    image: "https://images.unsplash.com/photo-1618308113210-3a8a1778f910?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBsYXR0ZSUyMGdyZWVuJTIwdGVhJTIwY2FmZSUyMGRyaW5rfGVufDF8fHx8MTc3NzM3MDQzMHww&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    id: 5,
    name: "Caramel Macchiato",
    sub: "Vanilla & Caramel Drizzle",
    category: "Signature",
    desc: "Lapisan vanilla, espresso, susu berbusa, dan drizzle caramel. Indulge yourself!",
    price: "Rp 38.000",
    hot: true,
    cold: true,
    badge: "✨ Signature",
    badgeColor: "#C8714A",
    image: "https://images.unsplash.com/photo-1586199048419-ed127d3a83da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJhbWVsJTIwbWFjY2hpYXRvJTIwd2hpcHBlZCUyMGNyZWFtJTIwY29mZmVlfGVufDF8fHx8MTc3NzM3MDQzOHww&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    id: 6,
    name: "Mochaccino",
    sub: "Dark Chocolate Blend",
    category: "Signature",
    desc: "Espresso bertemu coklat gelap — kaya, bold, dan bikin mood naik.",
    price: "Rp 36.000",
    hot: true,
    cold: true,
    badge: "🍫 Rich",
    badgeColor: "#6B3F2B",
    image: "https://images.unsplash.com/photo-1516477366947-ed147b3522ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjBjaG9jb2xhdGUlMjBtb2NoYSUyMGNvZmZlZSUyMGRyaW5rJTIwY296eXxlbnwxfHx8fDE3NzczNzA0NDJ8MA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    id: 7,
    name: "Dice Latte",
    sub: "Brown Sugar Oat",
    category: "Signature",
    desc: "Menu khas Sebangku! Brown sugar oat latte dengan latte art dice khusus.",
    price: "Rp 40.000",
    hot: true,
    cold: true,
    badge: "🎲 Khas Kami",
    badgeColor: "#F55F1F",
    image: "https://images.unsplash.com/photo-1571651179868-b9dc635e260e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGFydCUyMGNhZmUlMjBkcmlua3xlbnwxfHx8fDE3NzczNjM1OTR8MA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    id: 8,
    name: "Teh Tarik",
    sub: "Susu Full Cream",
    category: "Non-Coffee",
    desc: "Klasik Malaysia yang bikin rindu — manis, gurih, berbusa sempurna.",
    price: "Rp 24.000",
    hot: true,
    cold: true,
    badge: "🫖 Klasik",
    badgeColor: "#C8714A",
    image: "https://images.unsplash.com/photo-1619640956450-745e698b49da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxrc2hha2UlMjBzbW9vdGhpZSUyMGNvbG9yZnVsJTIwZHJpbmt8ZW58MXx8fHwxNzc3MzYzNTk1fDA&ixlib=rb-4.1.0&q=80&w=400",
  },
];

export function CoffeeMenu() {
  const [activeTab, setActiveTab] = useState("Semua");

  const filtered = activeTab === "Semua"
    ? coffeeItems
    : coffeeItems.filter((c) => c.category === activeTab);

  return (
    <section id="coffee" className="py-24 overflow-hidden" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs mb-4"
            style={{ background: "#F55F1F", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, letterSpacing: "0.08em" }}
          >
            ☕ KOPI & MINUMAN
          </span>
          <h2 style={{ fontFamily: "'Fraunces', serif", color: "#1C1410", fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 800, lineHeight: 1.1 }}>
            40+ Varian Kopi &{" "}
            <span style={{ color: "#F55F1F", fontStyle: "italic" }}>Minuman Spesial</span>
          </h2>
          <p
            className="mt-4 max-w-lg mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "#6B4436", lineHeight: 1.75 }}
          >
            Dari espresso murni hingga signature drinks — setiap tegukan dirancang menemani sesi bermainmu.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {coffeeCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className="px-5 py-2.5 rounded-full text-sm transition-all duration-200 hover:scale-105"
              style={{
                background: activeTab === cat ? "#F55F1F" : "rgba(245,95,31,0.08)",
                color: activeTab === cat ? "#fff" : "#F55F1F",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                border: "2px solid",
                borderColor: activeTab === cat ? "#F55F1F" : "rgba(245,95,31,0.15)",
                boxShadow: activeTab === cat ? "0 4px 20px rgba(245,95,31,0.3)" : "none",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              className="group rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2"
              style={{
                background: "#fff",
                boxShadow: "0 4px 20px rgba(245,95,31,0.07)",
                border: "1.5px solid rgba(245,95,31,0.1)",
              }}
              whileHover={{ boxShadow: "0 20px 50px rgba(245,95,31,0.18)" }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: 180 }}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient */}
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,20,16,0.3) 0%, transparent 60%)" }} />
                {/* Badge */}
                <span
                  className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs"
                  style={{
                    background: item.badgeColor,
                    color: "#fff",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.7rem",
                  }}
                >
                  {item.badge}
                </span>
                {/* Hot/Cold tags */}
                <div className="absolute top-3 right-3 flex flex-col gap-1">
                  {item.hot && (
                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs" style={{ background: "rgba(245,95,31,0.9)" }}>🔥</span>
                  )}
                  {item.cold && (
                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs" style={{ background: "rgba(74,158,191,0.9)" }}>❄️</span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <h3 style={{ fontFamily: "'Fraunces', serif", color: "#1C1410", fontSize: "1rem", fontWeight: 800 }}>{item.name}</h3>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#F55F1F", fontSize: "0.72rem", fontWeight: 600 }}>{item.sub}</p>
                  </div>
                  <span
                    style={{
                      fontFamily: "'Fraunces', serif",
                      color: "#F55F1F",
                      fontSize: "0.9rem",
                      fontWeight: 800,
                      whiteSpace: "nowrap",
                      marginLeft: 8,
                    }}
                  >
                    {item.price}
                  </span>
                </div>
                <p
                  className="mt-2"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "#6B4436", fontSize: "0.78rem", lineHeight: 1.55, opacity: 0.85 }}
                >
                  {item.desc}
                </p>

                {/* Order button */}
                <button
                  className="mt-3 w-full py-2 rounded-xl text-sm transition-all hover:opacity-90 group-hover:bg-orange-500"
                  style={{
                    background: "rgba(245,95,31,0.1)",
                    color: "#F55F1F",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700,
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#F55F1F"; (e.currentTarget as HTMLButtonElement).style.color = "#fff"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(245,95,31,0.1)"; (e.currentTarget as HTMLButtonElement).style.color = "#F55F1F"; }}
                >
                  + Tambah Pesanan
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ background: "linear-gradient(135deg, #F55F1F 0%, #FF8A50 100%)" }}
        >
          <div>
            <p style={{ fontFamily: "'Fraunces', serif", color: "#fff", fontSize: "1.4rem", fontWeight: 800 }}>
              Masih ada 30+ varian minuman lainnya!
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", marginTop: 4 }}>
              Smoothie, Mocktail, Fresh Juice, Boba Series, dan masih banyak lagi.
            </p>
          </div>
          <a
            href="#"
            className="flex-shrink-0 px-7 py-3.5 rounded-2xl text-sm transition-all hover:scale-105"
            style={{ background: "#fff", color: "#F55F1F", fontFamily: "'DM Sans', sans-serif", fontWeight: 800 }}
          >
            Lihat Menu Lengkap →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
