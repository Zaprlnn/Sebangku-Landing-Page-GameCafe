import { motion } from "motion/react";

const desserts = [
  {
    id: 1,
    name: "Tiramisu Sebangku",
    sub: "Italian Classic",
    desc: "Ladyfinger lembut, mascarpone creamy, taburan kakao premium. Resep asli Italia.",
    price: "Rp 48.000",
    emoji: "🍰",
    tag: "Best Seller",
    tagBg: "#F55F1F",
    image: "https://images.unsplash.com/photo-1712262582493-01aa9ec5c7f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aXJhbWlzdSUyMGNob2NvbGF0ZSUyMGNha2UlMjBkZXNzZXJ0JTIwcGxhdGV8ZW58MXx8fHwxNzc3MzcwNDM0fDA&ixlib=rb-4.1.0&q=80&w=600",
    wide: true,
  },
  {
    id: 2,
    name: "Croissant Butter",
    sub: "Fresh Baked Daily",
    desc: "Dipanggang segar tiap pagi. Crispy di luar, fluffy di dalam.",
    price: "Rp 28.000",
    emoji: "🥐",
    tag: "Fresh Daily",
    tagBg: "#FF8A50",
    image: "https://images.unsplash.com/photo-1751151856149-5ebf1d21586a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9pc3NhbnQlMjBwYXN0cnklMjBiYWtlcnklMjBidXR0ZXJ8ZW58MXx8fHwxNzc3MzcwNDM0fDA&ixlib=rb-4.1.0&q=80&w=600",
    wide: false,
  },
  {
    id: 3,
    name: "Waffle + Ice Cream",
    sub: "Belgian Waffle",
    desc: "Waffle Belgian golden crispy dengan 2 scoop es krim pilihan.",
    price: "Rp 52.000",
    emoji: "🧇",
    tag: "Instagramable",
    tagBg: "#C8714A",
    image: "https://images.unsplash.com/photo-1764350270468-ffc35d2bd024?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWZmbGUlMjBpY2UlMjBjcmVhbSUyMGRlc3NlcnQlMjBzd2VldHxlbnwxfHx8fDE3NzczNzA0MzV8MA&ixlib=rb-4.1.0&q=80&w=600",
    wide: false,
  },
  {
    id: 4,
    name: "Blueberry Cheesecake",
    sub: "New York Style",
    desc: "Creamy cheesecake khas New York dengan topping blueberry kompot segar.",
    price: "Rp 45.000",
    emoji: "🫐",
    tag: "New",
    tagBg: "#4A5BA8",
    image: "https://images.unsplash.com/photo-1676300186833-057912886971?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVlc2VjYWtlJTIwc2xpY2UlMjBiZXJyeSUyMGZydWl0JTIwZGVzc2VydHxlbnwxfHx8fDE3NzczNzA0Mzh8MA&ixlib=rb-4.1.0&q=80&w=600",
    wide: true,
  },
];

// Extra smaller dessert items
const moreDesserts = [
  { name: "Brownies Warm", price: "Rp 30.000", emoji: "🍫", desc: "Fudgy, gooey, disajikan hangat dengan vanila ice cream." },
  { name: "Choco Lava Cake", price: "Rp 38.000", emoji: "🎂", desc: "Lava coklat cair meleleh keluar saat dipotong." },
  { name: "Pancake Stack", price: "Rp 35.000", emoji: "🥞", desc: "3 lapisan fluffy pancake dengan maple syrup & butter." },
  { name: "Creme Brulee", price: "Rp 42.000", emoji: "🍮", desc: "Karamel crispy di atas custard vanilla yang lembut." },
];

export function DessertMenu() {
  return (
    <section id="dessert" className="py-24 px-6 overflow-hidden" style={{ background: "#FFF3EC" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 gap-6"
        >
          <div>
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs mb-4"
              style={{ background: "#F55F1F", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, letterSpacing: "0.08em" }}
            >
              🍰 DESSERT & PASTRY
            </span>
            <h2 style={{ fontFamily: "'Fraunces', serif", color: "#1C1410", fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 800, lineHeight: 1.1 }}>
              Manis yang Bikin<br />
              <span style={{ color: "#F55F1F", fontStyle: "italic" }}>Game Makin Seru</span>
            </h2>
          </div>
          <p
            className="max-w-sm"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "#6B4436", lineHeight: 1.75, fontSize: "0.95rem" }}
          >
            Dessert premium homemade — dibuat dengan bahan pilihan, disajikan dengan cinta.
          </p>
        </motion.div>

        {/* Bento-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Tiramisu — big card spans 2 rows on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:row-span-2 rounded-3xl overflow-hidden relative group cursor-pointer"
            style={{ minHeight: 420, boxShadow: "0 16px 48px rgba(245,95,31,0.15)" }}
          >
            <img
              src={desserts[0].image}
              alt={desserts[0].name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 absolute inset-0"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,20,16,0.75) 35%, transparent 65%)" }} />
            <div className="absolute top-4 left-4">
              <span
                className="px-3 py-1.5 rounded-xl text-xs"
                style={{ background: desserts[0].tagBg, color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}
              >
                {desserts[0].tag}
              </span>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 style={{ fontFamily: "'Fraunces', serif", color: "#fff", fontSize: "1.6rem", fontWeight: 800 }}>{desserts[0].name}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.75)", fontSize: "0.82rem", marginTop: 4, lineHeight: 1.5 }}>{desserts[0].desc}</p>
              <div className="flex items-center justify-between mt-4">
                <span style={{ fontFamily: "'Fraunces', serif", color: "#FF8A50", fontSize: "1.3rem", fontWeight: 800 }}>{desserts[0].price}</span>
                <button
                  className="px-4 py-2 rounded-xl text-sm"
                  style={{ background: "#F55F1F", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}
                >
                  + Pesan
                </button>
              </div>
            </div>
          </motion.div>

          {/* Remaining featured desserts */}
          {desserts.slice(1).map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="rounded-3xl overflow-hidden relative group cursor-pointer"
              style={{ height: 260, boxShadow: "0 8px 32px rgba(245,95,31,0.1)" }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 absolute inset-0"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,20,16,0.7) 30%, transparent 65%)" }} />
              <div className="absolute top-3 right-3">
                <span
                  className="px-2.5 py-1 rounded-lg text-xs"
                  style={{ background: item.tagBg, color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.7rem" }}
                >
                  {item.tag}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.7)", fontSize: "0.72rem", fontWeight: 600 }}>{item.sub}</p>
                <div className="flex items-end justify-between mt-1">
                  <h3 style={{ fontFamily: "'Fraunces', serif", color: "#fff", fontSize: "1.05rem", fontWeight: 800 }}>{item.name}</h3>
                  <span style={{ fontFamily: "'Fraunces', serif", color: "#FF8A50", fontSize: "0.95rem", fontWeight: 800 }}>{item.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More desserts horizontal strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {moreDesserts.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              style={{
                background: "#fff",
                boxShadow: "0 4px 16px rgba(245,95,31,0.06)",
                border: "1.5px solid rgba(245,95,31,0.12)",
              }}
            >
              <div className="text-3xl mb-3">{d.emoji}</div>
              <h4 style={{ fontFamily: "'Fraunces', serif", color: "#1C1410", fontSize: "0.95rem", fontWeight: 700 }}>{d.name}</h4>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#6B4436", fontSize: "0.78rem", lineHeight: 1.5, marginTop: 4, opacity: 0.8 }}>{d.desc}</p>
              <div className="flex items-center justify-between mt-4">
                <span style={{ fontFamily: "'Fraunces', serif", color: "#F55F1F", fontSize: "0.9rem", fontWeight: 800 }}>{d.price}</span>
                <button
                  className="px-3 py-1.5 rounded-lg text-xs"
                  style={{ background: "rgba(245,95,31,0.1)", color: "#F55F1F", fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}
                >
                  + Pesan
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
