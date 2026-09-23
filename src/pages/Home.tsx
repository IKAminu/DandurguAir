import { useState } from "react";
import IATAlogo from "../public/images/logo/IATAlogo.png";
import NAHCONlogo from "../public/images/logo/NAHCONlogo.png";
import NANTAlogo from "../public/images/logo/NANTAlogo.png";
import PilgrimHeroImage from "../public/images/pilgrim hero (2).jfif";

type Page = "home" | "umrah" | "services" | "about" | "faq" | "contact" | "apply" | "success";

interface HomeProps {
  navigate: (page: Page) => void;
}

const faqs = [
  {
    q: "How do I start an Umrah application?",
    a: (
      <>
        Starting is simple. Click <strong>Start Your Journey</strong> and complete our short application form. We’ll ask a few questions about your travel plans and then collect the details we need to help arrange your Umrah journey. Once your application is submitted, a member of the Dandurgu team will contact you with the next steps.
      </>
    ),
  },
  {
    q: "What is the minimum deposit for Umrah?",
    a: (
      <>
        You can start your Umrah journey with a <strong>minimum deposit of ₦500,000</strong>. The remaining balance will be paid according to the payment arrangement agreed with Dandurgu.
      </>
    ),
  },
  {
    q: "What documents do I need to travel?",
    a: (
      <>
        The documents required depend on your travel arrangements and the current requirements for your destination. For Umrah, you will generally need a valid international passport and other documents required for your visa and travel arrangements. Our team will tell you exactly what is required for your particular journey.
      </>
    ),
  },
  {
    q: "How quickly can I travel after applying?",
    a: (
      <>
        Travel time depends on your preferred travel date, availability, documentation and the arrangements required for your journey. In some cases, travel can be arranged within a short period. Our team will confirm the earliest suitable travel option after reviewing your application.
      </>
    ),
  },
];

export default function Home({ navigate }: HomeProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const go = (page: Page) => {
    navigate(page);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--color-brand-blue-deeper)] min-h-[88vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={PilgrimHeroImage}
            alt="Grand mosque illuminated at night, reflected in still water"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-blue-deeper)]/80 via-[var(--color-brand-blue-deeper)]/40 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3.5 py-1.5 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-orange)]" />
              <span className="text-white/80 text-[12px] font-medium tracking-wide">Established 2008</span>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              YOUR JOURNEY<br />STARTS HERE.
            </h1>
            <p className="text-white/70 text-[16px] md:text-[17px] leading-relaxed mb-10 max-w-md">
              Hajj, Umrah, flights and travel services arranged with experience, care and attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button
                onClick={() => go("apply")}
                className="px-6 py-3.5 rounded bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-hover)] text-white font-semibold text-[14px] tracking-wide transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                START YOUR JOURNEY
              </button>
              <a
                href="https://wa.me/[REPLACE]"
                className="px-6 py-3.5 rounded border border-white/30 hover:border-white/60 text-white font-medium text-[14px] flex items-center justify-center gap-2 transition-colors"
              >
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WHATSAPP US
              </a>
            </div>
            <p className="text-white/40 text-[13px]">Serving travellers since 2008</p>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <div className="w-px h-8 bg-white/20" />
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="mb-14">
            <p className="text-[11px] font-semibold tracking-widest text-[var(--color-brand-blue)] uppercase mb-3" style={{ fontFamily: "var(--font-display)" }}>What we do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              TRAVEL MADE EASIER.
            </h2>
            <p className="mt-4 text-[var(--color-muted)] text-[15.5px] max-w-xl leading-relaxed">
              Whatever your travel needs, Dandurgu handles the details so you can focus on the journey.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "UMRAH",
                desc: "Plan your journey to Makkah with Dandurgu. We handle every detail with care and respect.",
                cta: "EXPLORE UMRAH",
                page: "umrah" as Page,
                color: "var(--color-brand-blue)",
                icon: "🕌",
              },
              {
                title: "HAJJ",
                desc: "Travel arrangements and support for your Hajj journey, guided by experienced hands.",
                cta: "LEARN MORE",
                page: "services" as Page,
                color: "var(--color-brand-blue-dark)",
                icon: "🌙",
              },
              {
                title: "FLIGHTS",
                desc: "Domestic and international flight booking. We find the right connections for you.",
                cta: "ENQUIRE ABOUT FLIGHTS",
                page: "services" as Page,
                color: "var(--color-brand-blue)",
                icon: "✈",
              },
              {
                title: "TOURS & TRAVEL",
                desc: "Travel arrangements for other destinations, tailored to your group and schedule.",
                cta: "EXPLORE TRAVEL",
                page: "services" as Page,
                color: "var(--color-brand-blue-dark)",
                icon: "🌍",
              },
            ].map((svc) => (
              <div
                key={svc.title}
                className="group p-7 rounded-xl border border-[var(--color-border)] bg-white hover:border-[var(--color-brand-blue)] hover:shadow-lg transition-all duration-200"
              >
                <div className="mb-5 text-2xl">{svc.icon}</div>
                <h3
                  className="font-bold text-[15px] tracking-wide mb-3"
                  style={{ fontFamily: "var(--font-display)", color: svc.color }}
                >
                  {svc.title}
                </h3>
                <p className="text-[var(--color-muted)] text-[13.5px] leading-relaxed mb-6">{svc.desc}</p>
                <button
                  onClick={() => go(svc.page)}
                  className="flex items-center gap-1.5 text-[12.5px] font-semibold text-[var(--color-dark)] group-hover:text-[var(--color-brand-blue)] transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {svc.cta}
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Dandurgu — Trust stats */}
      <section className="py-20 md:py-28 bg-[var(--color-off-white)]">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-xl mb-16">
            <p className="text-[11px] font-semibold tracking-widest text-[var(--color-brand-blue)] uppercase mb-3" style={{ fontFamily: "var(--font-display)" }}>Why Dandurgu</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              EXPERIENCE BEHIND<br />EVERY JOURNEY.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
            {[
              { stat: "2008", label: "Established" },
              { stat: "4,000+", label: "Trips Served" },
              { stat: "Accredited", label: "& Registered" },
              { stat: "Award-Winning", label: "Recognised" },
            ].map((item) => (
              <div key={item.stat} className="p-6 bg-white rounded-xl border border-[var(--color-border)]">
                <div
                  className={`${item.stat === "Accredited" ? "text-xl sm:text-2xl md:text-4xl" : "text-3xl md:text-4xl"} font-bold text-[var(--color-brand-blue)] mb-2 leading-none`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.stat}
                </div>
                <div className="text-[13px] text-[var(--color-muted)]">{item.label}</div>
              </div>
            ))}
          </div>
         {/* Accreditations */}
          <div className="border border-[var(--color-border)] rounded-xl p-8">
            <p
              className="text-[11px] font-semibold tracking-widest text-[var(--color-muted)] uppercase mb-6 text-center"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Trusted. Registered. Recognised.
            </p>
          
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          
             {/* IATA */}
          <div className="h-20 rounded-lg border border-[var(--color-border)] bg-[var(--color-light-grey)] flex items-center px-4 gap-4">
            <div className="w-16 shrink-0 flex items-center justify-center">
              <img
                src={IATAlogo}
                alt="IATA"
                className="h-12 w-auto object-contain"
              />
            </div>
          
            <div className="min-w-0">
              <p className="text-[11px] font-semibold text-[var(--color-dark)] leading-tight">
                IATA
              </p>
              <p className="text-[10px] text-[var(--color-muted)] leading-tight mt-1">
                Accredited Agent
              </p>
            </div>
          </div>
          
         {/* B2BHint */}
          <div className="h-20 rounded-lg border border-[var(--color-border)] bg-[var(--color-light-grey)] flex items-center justify-center overflow-hidden">
            <a
              href="https://b2bhint.com/en/company/ng/dandurgu-air-travel-and-tours-ltd--RC-778913?ref=badge&utm_source=verified-badge&utm_medium=referral"
              target="_blank"
              rel="noopener"
              title="DANDURGU AIR TRAVEL AND TOURS LTD — Verified by B2BHint"
              style={{ display: "inline-block", lineHeight: 0 }}
            >
              <img
                src="https://b2bhint.com/api/badge/ng/dandurgu-air-travel-and-tours-ltd--RC-778913.svg"
                alt="DANDURGU AIR TRAVEL AND TOURS LTD — Verified by B2BHint · Registry health score"
                width="248"
                height="64"
                loading="lazy"
                style={{ border: 0, maxWidth: "100%" }}
              />
            </a>
          </div>
          
          {/* NAHCON */}
          <div className="h-20 rounded-lg border border-[var(--color-border)] bg-[var(--color-light-grey)] flex items-center px-4 gap-4">
            <div className="w-16 shrink-0 flex items-center justify-center">
              <img
                src={NAHCONlogo}
                alt="NAHCON"
                className="h-10 w-auto object-contain"
              />
            </div>
          
            <div className="min-w-0">
              <p className="text-[11px] font-semibold text-[var(--color-dark)] leading-tight">
                NAHCON
              </p>
              <p className="text-[10px] text-[var(--color-muted)] leading-tight mt-1">
                Member
              </p>
            </div>
          </div>
          
          {/* NANTA */}
          <div className="h-20 rounded-lg border border-[var(--color-border)] bg-[var(--color-light-grey)] flex items-center px-4 gap-4">
            <div className="w-16 shrink-0 flex items-center justify-center">
              <img
                src={NANTAlogo}
                alt="NANTA"
                className="h-20 w-auto object-contain"
              />
            </div>
          
            <div className="min-w-0">
              <p className="text-[11px] font-semibold text-[var(--color-dark)] leading-tight">
                NANTA
              </p>
              <p className="text-[10px] text-[var(--color-muted)] leading-tight mt-1">
                Member
              </p>
            </div>
          </div>
          
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-xl mb-16">
            <p className="text-[11px] font-semibold tracking-widest text-[var(--color-brand-blue)] uppercase mb-3" style={{ fontFamily: "var(--font-display)" }}>The process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              FROM APPLICATION<br />TO JOURNEY.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
            {[
              { num: "01", title: "TELL US WHAT YOU NEED", desc: "Start by answering a few simple questions about your travel plans." },
              { num: "02", title: "GET THE RIGHT ARRANGEMENT", desc: "Our team reviews your requirements and helps you choose the appropriate travel arrangement." },
              { num: "03", title: "COMPLETE YOUR DOCUMENTS", desc: "Provide the required information and documentation to proceed." },
              { num: "04", title: "GET READY TO TRAVEL", desc: "Dandurgu handles the necessary arrangements and keeps you informed every step of the way." },
            ].map((step, i) => (
              <div key={step.num} className="relative">
                {i < 3 && (
                  <div className="hidden lg:block absolute top-5 left-full w-full h-px bg-[var(--color-border)] z-0" style={{ width: "calc(100% - 2.5rem)", left: "calc(2.5rem)" }} />
                )}
                <div
                  className="text-[13px] font-bold text-[var(--color-brand-orange)] mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.num}
                </div>
                <h4
                  className="font-bold text-[14px] tracking-wide text-[var(--color-dark)] mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.title}
                </h4>
                <p className="text-[var(--color-muted)] text-[13.5px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => go("apply")}
            className="px-7 py-3.5 rounded bg-[var(--color-brand-blue)] hover:bg-[var(--color-brand-blue-dark)] text-white font-semibold text-[14px] tracking-wide transition-colors"
            style={{ fontFamily: "var(--font-display)" }}
          >
            START YOUR JOURNEY
          </button>
        </div>
      </section>

      {/* Featured Umrah */}
      <section className="relative overflow-hidden bg-[var(--color-brand-blue-deeper)] py-24 md:py-32">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1724191078796-8a997b989f43?w=1400&h=700&fit=crop&auto=format"
            alt="Al Masjid an Nabawi mosque minarets in Medina"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 text-center">
          <p className="text-[11px] font-semibold tracking-widest text-[var(--color-brand-orange)] uppercase mb-4" style={{ fontFamily: "var(--font-display)" }}>Umrah</p>
          <h2
            className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            THINKING ABOUT UMRAH?
          </h2>
          <p className="text-white/70 text-[17px] md:text-[19px] font-medium mb-3">
            Your journey to Makkah may be closer than you think.
          </p>
          <div className="inline-block bg-[var(--color-brand-orange)]/15 border border-[var(--color-brand-orange)]/30 rounded-lg px-5 py-3 mb-10">
            <p className="text-[var(--color-brand-orange)] font-semibold text-[15px]" style={{ fontFamily: "var(--font-display)" }}>
              Start with a minimum deposit of ₦500,000
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => go("apply")}
              className="px-7 py-3.5 rounded bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-hover)] text-white font-semibold text-[14px] tracking-wide transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              START YOUR UMRAH APPLICATION
            </button>
            <button
              onClick={() => go("umrah")}
              className="px-7 py-3.5 rounded border border-white/30 hover:border-white/60 text-white font-medium text-[14px] transition-colors"
            >
              Learn more
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="mb-14">
            <p className="text-[11px] font-semibold tracking-widest text-[var(--color-brand-blue)] uppercase mb-3" style={{ fontFamily: "var(--font-display)" }}>Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              TRAVELLERS WE'VE SERVED.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-7 rounded-xl bg-[var(--color-off-white)] border border-[var(--color-border)]">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-[var(--color-brand-orange)]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[var(--color-muted)] text-[13.5px] leading-relaxed italic mb-6">
                  [TESTIMONIAL TEXT — REPLACE WITH REAL CUSTOMER TESTIMONIAL]
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] text-[11px]">
                    Photo
                  </div>
                  <div>
                    <div className="font-semibold text-[13.5px] text-[var(--color-dark)]" style={{ fontFamily: "var(--font-display)" }}>
                      [CUSTOMER NAME — REPLACE]
                    </div>
                    <div className="text-[12px] text-[var(--color-muted)]">[CITY — REPLACE]</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-[var(--color-off-white)]">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div className="mb-12 text-center">
            <p className="text-[11px] font-semibold tracking-widest text-[var(--color-brand-blue)] uppercase mb-3" style={{ fontFamily: "var(--font-display)" }}>FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              COMMON QUESTIONS.
            </h2>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
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
          <div className="text-center mt-8">
            <button
              onClick={() => go("faq")}
              className="text-[13.5px] font-semibold text-[var(--color-brand-blue)] hover:underline"
            >
              View all questions →
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-[var(--color-brand-blue)]">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <h2
            className="text-3xl md:text-5xl font-bold text-white mb-5 tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            READY TO START YOUR JOURNEY?
          </h2>
          <p className="text-white/70 text-[16px] mb-10 leading-relaxed">
            Tell us what you're planning and we'll help you with the next step.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => go("apply")}
              className="px-8 py-4 rounded bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-hover)] text-white font-semibold text-[15px] tracking-wide transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              START YOUR JOURNEY
            </button>
            <a
              href="https://wa.me/[REPLACE]"
              className="px-8 py-4 rounded border border-white/30 hover:border-white/60 text-white font-medium text-[15px] flex items-center justify-center gap-2 transition-colors"
            >
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WHATSAPP US
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
