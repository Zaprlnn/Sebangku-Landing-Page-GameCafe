import { motion } from "motion/react";
import { Star } from "lucide-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const photos = [
  { id: 1, src: "https://images.unsplash.com/photo-1596439817528-222c5f3217ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBmcmllbmRzJTIwbGF1Z2hpbmclMjBjYWZlJTIwdGFibGUlMjBnYW1lc3xlbnwxfHx8fDE3NzczNzA0Mzh8MA&ixlib=rb-4.1.0&q=80&w=600", alt: "Friends gaming", review: { name: "Alya R.", text: "Asik banget! Wajib balik lagi!", stars: 5 } },
  { id: 2, src: "https://images.unsplash.com/photo-1716817279221-d815f96dce7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2FyZCUyMGdhbWVzJTIwdGFibGV0b3AlMjBnYW1pbmclMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc3NzM2MzU5MXww&ixlib=rb-4.1.0&q=80&w=600", alt: "Game collection", review: null },
  { id: 3, src: "https://images.unsplash.com/photo-1678449780068-d415dae199ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW50ZXJpb3IlMjBvcmFuZ2UlMjB3YXJtJTIwd29vZGVuJTIwY296eSUyMHNlYXRpbmd8ZW58MXx8fHwxNzc3MzcwNDQzfDA&ixlib=rb-4.1.0&q=80&w=600", alt: "Cafe interior", review: { name: "Budi S.", text: "Tempatnya cozy, menu enak, game lengkap!", stars: 5 } },
  { id: 4, src: "https://images.unsplash.com/photo-1758874961117-e40e35b67331?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwbGF5aW5nJTIwZ2FtZXMlMjB0b2dldGhlciUyMGhhcHB5fGVufDF8fHx8MTc3NzM2MzYwM3ww&ixlib=rb-4.1.0&q=80&w=600", alt: "Family playing", review: null },
  { id: 5, src: "https://images.unsplash.com/photo-1775852547516-0d63456f50d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2FyZCUyMGdhbWUlMjB0b3VybmFtZW50JTIwZXZlbnQlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzc3MzYzNjAyfDA&ixlib=rb-4.1.0&q=80&w=600", alt: "Tournament", review: { name: "Citra M.", text: "Tournament-nya seru abis! Ditunggu event selanjutnya!", stars: 5 } },
  { id: 6, src: "https://images.unsplash.com/photo-1753290068896-12915c9bc8fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2FyZCUyMGdhbWUlMjBwaWVjZXMlMjBjYXJkcyUyMGRpY2UlMjBjbG9zZSUyMHVwJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc3MzcwNDM5fDA&ixlib=rb-4.1.0&q=80&w=600", alt: "Game pieces", review: null },
];

export function Gallery() {
  return (
    <section className="py-24 px-6 bg-white">
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
            style={{ background: "#F55F1F", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, letterSpacing: "0.08em" }}
          >
            📸 GALERI & TESTIMONI
          </span>
          <h2 style={{ fontFamily: "'Fraunces', serif", color: "#1C1410", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.1 }}>
            Momen Seru di{" "}
            <span style={{ color: "#F55F1F", fontStyle: "italic" }}>Sebangku</span>
          </h2>
          <p
            className="mt-4 max-w-md mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "#6B4436", lineHeight: 1.75 }}
          >
            Setiap meja punya ceritanya sendiri. Ini sebagian kecil momen berharga bersama kami.
          </p>
        </motion.div>

        {/* Masonry */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 640: 2, 1024: 3 }}>
            <Masonry gutter="14px">
              {photos.map((p) => (
                <div
                  key={p.id}
                  className="relative rounded-2xl overflow-hidden group cursor-pointer"
                  style={{ boxShadow: "0 4px 20px rgba(245,95,31,0.08)", border: "2px solid rgba(245,95,31,0.08)" }}
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ display: "block" }}
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{ background: "linear-gradient(to top, rgba(245,95,31,0.45) 0%, transparent 60%)", opacity: p.review ? 1 : 0 }}
                  />
                  {p.review && (
                    <div
                      className="absolute bottom-3 left-3 right-3 rounded-xl p-3"
                      style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(10px)" }}
                    >
                      <div className="flex gap-0.5 mb-1">
                        {Array.from({ length: p.review.stars }).map((_, j) => (
                          <Star key={j} size={11} fill="#F55F1F" color="#F55F1F" />
                        ))}
                      </div>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#1C1410", fontSize: "0.75rem", lineHeight: 1.4 }}>
                        "{p.review.text}"
                      </p>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#F55F1F", fontSize: "0.7rem", fontWeight: 700, marginTop: 3 }}>
                        — {p.review.name}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com/sebangkucafe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-base transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
              color: "#fff",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              boxShadow: "0 8px 32px rgba(245,95,31,0.3)",
            }}
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            Follow @sebangkucafe di Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
