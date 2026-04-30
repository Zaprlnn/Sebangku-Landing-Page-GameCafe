import { MapPin, Phone, Mail } from "lucide-react";

const navLinks = [
  { label: "Koleksi Game", href: "#game-library" },
  { label: "Kopi & Minuman", href: "#coffee" },
  { label: "Dessert", href: "#dessert" },
  { label: "Makanan Utama", href: "#food-menu" },
  { label: "Event", href: "#events" },
  { label: "Reservasi", href: "#location" },
];

export function Footer() {
  return (
    <footer style={{ background: "#1C1410" }}>
      {/* Top orange strip */}
      <div style={{ background: "#F55F1F", height: 4 }} />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-2xl" style={{ background: "#F55F1F" }}>
                🎲
              </div>
              <div>
                <p style={{ fontFamily: "'Fraunces', serif", color: "#fff", fontSize: "1.5rem", fontWeight: 800 }}>Sebangku</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: "0.7rem", letterSpacing: "0.08em" }}>BOARD GAME CAFE</p>
              </div>
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.6)", lineHeight: 1.75, fontSize: "0.9rem", maxWidth: 320, marginBottom: 20 }}>
              Tempat nongkrong seru yang bukan sekadar nongkrong. 500+ game, kopi premium, dessert lezat, dan Game Master siap memandu.
            </p>
            <div className="flex flex-col gap-3">
              {[
                { icon: <MapPin size={14} />, text: "Jl. Kemang Raya No. 42, Jakarta Selatan" },
                { icon: <Phone size={14} />, text: "+62 812 3456 7890" },
                { icon: <Mail size={14} />, text: "halo@sebangkucafe.id" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span style={{ color: "#F55F1F" }}>{item.icon}</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.55)", fontSize: "0.84rem" }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p style={{ fontFamily: "'Fraunces', serif", color: "#fff", fontSize: "1rem", fontWeight: 700, marginBottom: 20 }}>Menu Cepat</p>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-all duration-200"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.55)", fontWeight: 500 }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#F55F1F"; e.currentTarget.style.paddingLeft = "8px"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.55)"; e.currentTarget.style.paddingLeft = "0"; }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social + newsletter */}
          <div>
            <p style={{ fontFamily: "'Fraunces', serif", color: "#fff", fontSize: "1rem", fontWeight: 700, marginBottom: 20 }}>Ikuti Kami</p>

            {/* Social links */}
            <div className="flex gap-3 mb-8">
              {[
                {
                  label: "IG",
                  href: "https://instagram.com/sebangkucafe",
                  icon: (
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  ),
                },
                {
                  label: "TT",
                  href: "https://tiktok.com/@sebangkucafe",
                  icon: (
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.53V6.77a4.85 4.85 0 01-1.01-.08z"/>
                    </svg>
                  ),
                },
                {
                  label: "WA",
                  href: "https://wa.me/6281234567890",
                  icon: (
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.08)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#F55F1F"; (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)"; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: "0.82rem", marginBottom: 10 }}>
              Info event & promo terbaru:
            </p>
            <div className="flex rounded-xl overflow-hidden" style={{ border: "1.5px solid rgba(255,255,255,0.1)" }}>
              <input
                type="email"
                placeholder="email kamu..."
                className="flex-1 px-4 py-3 text-sm outline-none"
                style={{ background: "rgba(255,255,255,0.06)", color: "#fff", fontFamily: "'DM Sans', sans-serif" }}
              />
              <button
                className="px-4 py-3 text-sm transition-opacity hover:opacity-80"
                style={{ background: "#F55F1F", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}
              >
                ✓
              </button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />

      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.35)", fontSize: "0.8rem" }}>
          © 2025 Sebangku Cafe — Bermain Itu Seni
        </p>
        <div className="flex gap-5">
          {["Kebijakan Privasi", "Syarat & Ketentuan"].map((l) => (
            <a key={l} href="#" style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.35)", fontSize: "0.8rem" }}>
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
