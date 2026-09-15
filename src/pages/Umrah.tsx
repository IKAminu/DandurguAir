import { useState } from "react";

type Page = "home" | "umrah" | "services" | "about" | "faq" | "contact" | "apply" | "success";

interface UmrahProps {
  navigate: (page: Page) => void;
}

const umrahFaqs = [
  { q: "How do I start an Umrah application?", a: "[ANSWER — REPLACE WITH APPROVED DANDURGU POLICY]" },
  { q: "What is the minimum deposit for Umrah?", a: "You can begin your Umrah journey with a minimum deposit of ₦500,000. [ADDITIONAL DETAILS — REPLACE WITH APPROVED DANDURGU POLICY]" },
  { q: "What documents do I need for Umrah?", a: "[ANSWER — REPLACE WITH APPROVED DANDURGU POLICY]" },
  { q: "Can I travel with family or a group?", a: "[ANSWER — REPLACE WITH APPROVED DANDURGU POLICY]" },
  { q: "What services are included in an Umrah package?", a: "[ANSWER — REPLACE WITH APPROVED DANDURGU POLICY]" },
];

export default function Umrah({ navigate }: UmrahProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const go = (page: Page) => {
    navigate(page);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--color-brand-blue-deeper)] min-h-[75vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1724191078796-8a997b989f43?w=1600&h=900&fit=crop&auto=format"
            alt="Al Masjid an Nabawi mosque in Medina with green dome and minarets"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-brand-blue-deeper)]/60 via-transparent to-[var(--color-brand-blue-deeper)]/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-24 text-center">
          <p className="text-[11px] font-semibold tracking-widest text-[var(--color-brand-orange)] uppercase mb-4" style={{ fontFamily: "var(--font-display)" }}>Umrah</p>
          <h1
            className="text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            YOUR UMRAH JOURNEY<br />STARTS HERE.
          </h1>
          <p className="text-white/70 text-[16px] md:text-[18px] mb-10 max-w-xl mx-auto leading-relaxed">
            Plan your journey to Makkah with Dandurgu Air Travel & Tours Ltd.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => go("apply")}
              className="px-7 py-4 rounded bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-hover)] text-white font-semibold text-[14.5px] tracking-wide transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              START YOUR UMRAH APPLICATION
            </button>
            <a
              href="https://wa.me/[REPLACE]"
              className="px-7 py-4 rounded border border-white/30 hover:border-white/60 text-white font-medium text-[14.5px] flex items-center justify-center gap-2 transition-colors"
            >
              WHATSAPP US
            </a>
          </div>
        </div>
      </section>

      {/* Deposit offer */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <div className="rounded-2xl border-2 border-[var(--color-brand-blue)]/20 bg-[var(--color-off-white)] p-8 md:p-12 text-center">
            <p className="text-[11px] font-semibold tracking-widest text-[var(--color-brand-blue)] uppercase mb-4" style={{ fontFamily: "var(--font-display)" }}>Begin your journey</p>
            <h2
              className="text-2xl md:text-4xl font-bold text-[var(--color-dark)] mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              START WITH A MINIMUM DEPOSIT<br />OF ₦500,000
            </h2>
            <p className="text-[var(--color-muted)] text-[15px] max-w-lg mx-auto leading-relaxed mb-8">
              You don't have to wait until you have the full Umrah fare to begin your journey. Secure your place and complete payment as you prepare.
            </p>
            <button
              onClick={() => go("apply")}
              className="px-8 py-3.5 rounded bg-[var(--color-brand-blue)] hover:bg-[var(--color-brand-blue-dark)] text-white font-semibold text-[14px] tracking-wide transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              START YOUR APPLICATION
            </button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-xl mb-16">
            <p className="text-[11px] font-semibold tracking-widest text-[var(--color-brand-blue)] uppercase mb-3" style={{ fontFamily: "var(--font-display)" }}>How it works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              YOUR UMRAH PROCESS.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { num: "01", title: "Apply", desc: "Start your application online with a few simple questions." },
              { num: "02", title: "Discuss", desc: "Our team contacts you to discuss your travel requirements." },
              { num: "03", title: "Documents", desc: "Submit your passport and required travel documentation." },
              { num: "04", title: "Confirm", desc: "Review and confirm your travel arrangement and payment." },
              { num: "05", title: "Depart", desc: "Prepare for departure — your journey to Makkah begins." },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div
                  className="w-10 h-10 rounded-full bg-[var(--color-brand-blue)] text-white flex items-center justify-center text-[12px] font-bold mx-auto mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.num}
                </div>
                <h4 className="font-bold text-[14px] text-[var(--color-dark)] mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  {step.title}
                </h4>
                <p className="text-[var(--color-muted)] text-[13px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 md:py-28 bg-[var(--color-off-white)]">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-xl mb-14">
            <p className="text-[11px] font-semibold tracking-widest text-[var(--color-brand-blue)] uppercase mb-3" style={{ fontFamily: "var(--font-display)" }}>What's included</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              YOUR PACKAGE.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "FLIGHTS", icon: "✈" },
              { title: "ACCOMMODATION", icon: "🏨" },
              { title: "TRANSPORT", icon: "🚌" },
              { title: "VISA / TRAVEL DOCUMENTATION", icon: "📋" },
              { title: "OTHER SERVICES", icon: "⭐" },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl bg-white border border-[var(--color-border)]">
                <div className="text-2xl mb-4">{item.icon}</div>
                <h4 className="font-bold text-[13px] tracking-wide text-[var(--color-dark)] mb-3" style={{ fontFamily: "var(--font-display)" }}>
                  {item.title}
                </h4>
                <p className="text-[12px] text-[var(--color-brand-orange)] italic border border-dashed border-[var(--color-border)] rounded px-3 py-2 bg-[var(--color-light-grey)]">
                  [PACKAGE DETAILS — REPLACE WITH APPROVED DANDURGU PACKAGE INFORMATION]
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-xl mb-14">
            <p className="text-[11px] font-semibold tracking-widest text-[var(--color-brand-blue)] uppercase mb-3" style={{ fontFamily: "var(--font-display)" }}>Travellers</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              WHO IS THIS FOR?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { type: "Individual Travellers", desc: "Travelling alone and need everything arranged for you." },
              { type: "Couples", desc: "Travelling as a couple with arrangements for two." },
              { type: "Families", desc: "Family travel with children, with appropriate support." },
              { type: "Groups", desc: "Group travel arrangements for 10 or more travellers." },
            ].map((item) => (
              <div key={item.type} className="p-6 rounded-xl bg-[var(--color-off-white)] border border-[var(--color-border)]">
                <h4 className="font-bold text-[14px] text-[var(--color-dark)] mb-3" style={{ fontFamily: "var(--font-display)" }}>
                  {item.type}
                </h4>
                <p className="text-[var(--color-muted)] text-[13.5px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-[var(--color-off-white)]">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div className="mb-12">
            <p className="text-[11px] font-semibold tracking-widest text-[var(--color-brand-blue)] uppercase mb-3" style={{ fontFamily: "var(--font-display)" }}>FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              UMRAH QUESTIONS.
            </h2>
          </div>
          <div className="space-y-2">
            {umrahFaqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-[var(--color-border)] overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-[14.5px] text-[var(--color-dark)] pr-4" style={{ fontFamily: "var(--font-display)" }}>
                    {faq.q}
                  </span>
                  <svg
                    className={`w-4 h-4 text-[var(--color-muted)] shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 border-t border-[var(--color-border)]">
                    <p className="text-[var(--color-muted)] text-[14px] leading-relaxed pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-[var(--color-brand-blue)]">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            READY TO BEGIN?
          </h2>
          <p className="text-white/70 text-[16px] mb-10">
            Start your Umrah application today.
          </p>
          <button
            onClick={() => go("apply")}
            className="px-8 py-4 rounded bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-hover)] text-white font-semibold text-[15px] tracking-wide transition-colors"
            style={{ fontFamily: "var(--font-display)" }}
          >
            START YOUR UMRAH APPLICATION
          </button>
        </div>
      </section>
    </div>
  );
}
