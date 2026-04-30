import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Koleksi Game", href: "#game-library" },
    { label: "Kopi & Minuman", href: "#coffee" },
    { label: "Dessert", href: "#dessert" },
    { label: "Event", href: "#events" },
    { label: "Lokasi", href: "#location" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:rotate-12"
            style={{ background: "#F55F1F" }}
          >
            <span className="text-white text-base">🎲</span>
          </div>
          <div className="flex flex-col leading-none">
            <span
              style={{ fontFamily: "'Fraunces', serif", color: "#1C1410", fontWeight: 700, fontSize: "1.15rem" }}
            >
              Sebangku
            </span>
            <span
              style={{ fontFamily: "'DM Sans', sans-serif", color: "#F55F1F", fontWeight: 500, fontSize: "0.65rem", letterSpacing: "0.08em" }}
            >
              BOARD GAME CAFE
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm relative group"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "#1C1410", fontWeight: 500, opacity: 0.7 }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.color = "#F55F1F"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.7"; e.currentTarget.style.color = "#1C1410"; }}
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" style={{ background: "#F55F1F" }} />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/6281234567890"
            className="px-5 py-2.5 rounded-xl text-sm transition-all hover:scale-105 active:scale-95"
            style={{
              background: "#F55F1F",
              color: "#fff",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              boxShadow: "0 4px 20px rgba(245,95,31,0.35)",
            }}
          >
            Reservasi Sekarang →
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: "#1C1410" }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-3" style={{ background: "rgba(255,255,255,0.99)" }}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2.5 border-b text-sm"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "#1C1410", fontWeight: 500, borderColor: "rgba(0,0,0,0.06)" }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#location"
            className="mt-2 py-3 rounded-xl text-sm text-center"
            style={{ background: "#F55F1F", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}
            onClick={() => setMobileOpen(false)}
          >
            Reservasi Sekarang
          </a>
        </div>
      )}
    </nav>
  );
}
