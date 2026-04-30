import { motion } from "motion/react";
import { MapPin, Clock, Phone, Calendar } from "lucide-react";

const hours = [
  { day: "Senin – Kamis", time: "11.00 – 22.00" },
  { day: "Jumat", time: "11.00 – 23.00" },
  { day: "Sabtu", time: "10.00 – 23.00" },
  { day: "Minggu", time: "10.00 – 22.00" },
];

export function Location() {
  return (
    <section id="location" className="py-24 px-6 bg-white overflow-hidden">
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
            📍 TEMUKAN KAMI
          </span>
          <h2 style={{ fontFamily: "'Fraunces', serif", color: "#1C1410", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.1 }}>
            Pesan Meja,{" "}
            <span style={{ color: "#F55F1F", fontStyle: "italic" }}>Datang Bermain!</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 rounded-3xl overflow-hidden"
            style={{ height: 450, boxShadow: "0 20px 60px rgba(245,95,31,0.12)", border: "3px solid rgba(245,95,31,0.1)" }}
          >
            <iframe
              title="Sebangku Cafe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322323!2d106.8195613!3d-6.194741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f42e2be2bd3f%3A0x2c00e4d8e80a63a3!2sJakarta%20Pusat!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Address */}
            <div
              className="rounded-2xl p-5 flex items-start gap-4"
              style={{ background: "#FFF3EC", border: "2px solid rgba(245,95,31,0.12)" }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#F55F1F" }}>
                <MapPin size={18} color="#fff" />
              </div>
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#F55F1F", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.06em", marginBottom: 4 }}>ALAMAT</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#1C1410", fontSize: "0.9rem", lineHeight: 1.6, fontWeight: 500 }}>
                  Jl. Kemang Raya No. 42, Bangka, Mampang Prapatan, Jakarta Selatan 12730
                </p>
              </div>
            </div>

            {/* Hours */}
            <div
              className="rounded-2xl p-5"
              style={{ background: "#FFF3EC", border: "2px solid rgba(245,95,31,0.12)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#F55F1F" }}>
                  <Clock size={18} color="#fff" />
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#F55F1F", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.06em" }}>JAM OPERASIONAL</p>
              </div>
              <div className="flex flex-col gap-2.5">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span style={{ fontFamily: "'DM Sans', sans-serif", color: "#6B4436", fontSize: "0.85rem" }}>{h.day}</span>
                    <span
                      className="px-3 py-1 rounded-lg"
                      style={{ fontFamily: "'DM Sans', sans-serif", color: "#F55F1F", fontWeight: 700, fontSize: "0.82rem", background: "rgba(245,95,31,0.08)" }}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-4 rounded-2xl text-sm transition-all hover:scale-105"
              style={{ background: "#25D366", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, boxShadow: "0 6px 24px rgba(37,211,102,0.3)" }}
            >
              <Phone size={17} />
              Chat via WhatsApp
            </a>
            <a
              href="#events"
              className="flex items-center justify-center gap-3 py-4 rounded-2xl text-sm transition-all hover:scale-105"
              style={{ background: "#F55F1F", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, boxShadow: "0 6px 24px rgba(245,95,31,0.3)" }}
            >
              <Calendar size={17} />
              Booking untuk Event / Ulang Tahun
            </a>

            {/* Private event note */}
            <div
              className="rounded-2xl p-4 flex items-start gap-3"
              style={{ background: "rgba(245,95,31,0.06)", border: "1.5px solid rgba(245,95,31,0.15)" }}
            >
              <span className="text-xl flex-shrink-0">🎂</span>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#6B4436", fontSize: "0.82rem", lineHeight: 1.6 }}>
                <strong style={{ color: "#1C1410" }}>Private booking</strong> tersedia untuk ulang tahun, gathering, & acara korporat. Min. 10 pax, all-in package tersedia!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
