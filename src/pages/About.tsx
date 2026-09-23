type Page = "home" | "umrah" | "services" | "about" | "faq" | "contact" | "apply" | "success";

interface AboutProps {
  navigate: (page: Page) => void;
}

export default function About({ navigate }: AboutProps) {
  const go = (page: Page) => {
    navigate(page);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {/* Header */}
      <section className="py-16 md:py-24 bg-[var(--color-off-white)] border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p className="text-[11px] font-semibold tracking-widest text-[var(--color-brand-blue)] uppercase mb-3" style={{ fontFamily: "var(--font-display)" }}>About us</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-dark)] tracking-tight mb-5" style={{ fontFamily: "var(--font-display)" }}>
            ESTABLISHED 2008.
          </h1>
          <p className="text-[var(--color-muted)] text-[16px] max-w-xl leading-relaxed">
            Dandurgu Air Travel & Tours Ltd has been serving travellers across Nigeria for over 15 years.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="text-[11px] font-semibold tracking-widest text-[var(--color-brand-blue)] uppercase mb-4" style={{ fontFamily: "var(--font-display)" }}>Our story</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] tracking-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
              EXPERIENCE BEHIND<br />EVERY JOURNEY.
            </h2>
            <p className="text-[var(--color-muted)] text-[15px] leading-relaxed mb-5">
              Dandurgu Air Travel & Tours Ltd has been serving travellers since 2008, helping customers arrange Hajj, Umrah, flights and other travel services with personal support and experienced assistance.
            </p>
            <p className="text-[var(--color-muted)] text-[15px] leading-relaxed mb-5">
              Over the years we have helped thousands of Nigerians complete their Umrah and Hajj journeys, arrange flights to destinations worldwide, and travel as individuals, families and groups.
            </p>
            <p className="text-[var(--color-muted)] text-[15px] leading-relaxed">
              We are accredited and registered with the relevant industry and regulatory bodies, and have been recognised through industry awards for the quality of our service.
            </p>
          </div>
          <div className="rounded-2xl bg-[var(--color-light-grey)] border border-[var(--color-border)] aspect-square flex items-center justify-center">
            <p className="text-[12px] text-[var(--color-muted)] italic text-center px-8">
              [IMAGE PLACEHOLDER — REPLACE WITH APPROVED DANDURGU TEAM OR OFFICE IMAGE]
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-[var(--color-brand-blue)]">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: "2008", label: "Year established" },
              { stat: "4,000+", label: "Trips served" },
              { stat: "15+", label: "Years of experience" },
              { stat: "Accredited", label: "& registered" },
            ].map((item) => (
              <div key={item.stat} className="text-center min-w-0">
                <div className={`font-bold text-white mb-2 leading-tight ${item.stat === "Accredited" ? "text-2xl sm:text-3xl md:text-5xl break-words" : "text-4xl md:text-5xl"}`} style={{ fontFamily: "var(--font-display)" }}>{item.stat}</div>
                <div className="text-white/60 text-[13.5px]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-xl mb-14">
            <p className="text-[11px] font-semibold tracking-widest text-[var(--color-brand-blue)] uppercase mb-3" style={{ fontFamily: "var(--font-display)" }}>How we work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              WHAT WE STAND FOR.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Experience", desc: "Over 15 years arranging Hajj, Umrah, flight bookings and travel services for Nigerians." },
              { title: "Personal Support", desc: "Real people who understand your needs and follow your journey from application to return." },
              { title: "Attention to Detail", desc: "Every arrangement is checked and confirmed. We handle the details so you don't have to." },
            ].map((v) => (
              <div key={v.title} className="p-7 rounded-xl border border-[var(--color-border)] bg-[var(--color-off-white)]">
                <div className="w-8 h-0.5 bg-[var(--color-brand-orange)] mb-5" />
                <h3 className="font-bold text-[17px] text-[var(--color-dark)] mb-3" style={{ fontFamily: "var(--font-display)" }}>{v.title}</h3>
                <p className="text-[var(--color-muted)] text-[14px] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-16 md:py-24 bg-[var(--color-off-white)]">
        <div className="max-w-7xl mx-auto px-5 md:px-8 text-center">
          <p className="text-[11px] font-semibold tracking-widest text-[var(--color-brand-blue)] uppercase mb-3" style={{ fontFamily: "var(--font-display)" }}>Recognition</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-dark)] tracking-tight mb-10" style={{ fontFamily: "var(--font-display)" }}>
            TRUSTED. REGISTERED. RECOGNISED.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {["ACCREDITATION 01 — REPLACE", "ACCREDITATION 02 — REPLACE", "AWARD 01 — REPLACE", "AWARD 02 — REPLACE"].map((label) => (
              <div
                key={label}
                className="h-20 rounded-xl border-2 border-dashed border-[var(--color-border)] flex items-center justify-center bg-white"
              >
                <span className="text-[11px] text-[var(--color-muted)] text-center px-2 leading-tight">{label}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-[12px] text-[var(--color-muted)] font-mono">CAC RC 778913</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-white border-t border-[var(--color-border)]">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-dark)] mb-5 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            READY TO START YOUR JOURNEY?
          </h2>
          <button
            onClick={() => go("apply")}
            className="px-8 py-4 rounded bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-hover)] text-white font-semibold text-[15px] tracking-wide transition-colors"
            style={{ fontFamily: "var(--font-display)" }}
          >
            START YOUR JOURNEY
          </button>
        </div>
      </section>
    </div>
  );
}
