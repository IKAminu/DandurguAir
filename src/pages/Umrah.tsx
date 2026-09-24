import { useState } from "react";

type Page = "home" | "umrah" | "services" | "about" | "faq" | "contact" | "apply" | "success";

interface UmrahProps {
  navigate: (page: Page) => void;
}

const umrahFaqs = [
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
    q: "What documents do I need for Umrah?",
    a: (
      <>
        The documents required depend on your travel arrangements and the current requirements for your destination. For Umrah, you will generally need a valid international passport and other documents required for your visa and travel arrangements. Our team will tell you exactly what is required for your particular journey.
      </>
    ),
  },
  {
    q: "Can I travel with family or a group?",
    a: (
      <>
        Yes. You can apply to travel alone, with family, or as part of a larger group. When completing your application, tell us how many people will be travelling so we can help arrange the appropriate travel and accommodation requirements.
      </>
    ),
  },
  {
    q: "What services are included in an Umrah package?",
    a: (
      <>
        The services included depend on the package you choose. An Umrah package may include arrangements such as flights, accommodation, transportation and other travel or pilgrimage-related services. Our team will explain exactly what is included and what is not included before you confirm your package.
      </>
    ),
  },
];

export default function Umrah({ navigate }: UmrahProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openPackage, setOpenPackage] = useState<number | null>(null);

  const go = (page: Page) => {
    navigate(page);
    window.scrollTo(0, 0);
  };

  const packageItems = [
    {
      title: "FLIGHTS",
      icon: "✈",
      content: (
        <>
          <p>Dandurgu arranges international flights for Umrah and Hajj travellers, with <strong>EgyptAir and Saudia</strong> among the airlines we commonly use.</p>
          <p>Depending on your departure city, travel dates, availability and package, flights may be arranged to <strong>Jeddah or Madinah</strong>, with suitable connections where required.</p>
          <p>Our team considers factors such as:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Departure and return dates</li>
            <li>Departure city</li>
            <li>Flight availability</li>
            <li>Baggage allowance</li>
            <li>Number of travellers</li>
            <li>Preferred travel class</li>
            <li>Airline and itinerary</li>
          </ul>
          <p>Flight arrangements are confirmed according to the package and itinerary selected for your journey. Other airlines may also be available depending on availability and travel requirements.</p>
        </>
      ),
    },
    {
      title: "ACCOMMODATION",
      icon: "🏨",
      content: (
        <>
          <p>Dandurgu offers accommodation options across different package levels, ranging from <strong>3-star to 6-star hotels</strong>, depending on the package selected, location, availability and season.</p>
          <p>Our Umrah accommodation may include hotels in <strong>Makkah and Madinah</strong>, with options such as:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Al Kiswah Towers</li>
            <li>Abraj Al Tayseer</li>
            <li>Snood Al Hoda</li>
            <li>Diary Al Saad</li>
            <li>Ponciana</li>
            <li>Other approved hotels depending on package availability</li>
          </ul>
          <p>For Hajj packages, accommodation and camp arrangements are different from regular Umrah hotel arrangements and may include accommodation and services associated with <strong>Mina, Arafat and Muzdalifah</strong>, according to the approved package and season.</p>
          <p>Your specific hotel and accommodation arrangements will be confirmed before your package is finalized.</p>
        </>
      ),
    },
    {
      title: "TRANSPORT",
      icon: "🚌",
      content: (
        <>
          <p>Dandurgu can arrange transportation as part of applicable Umrah and Hajj packages.</p>
          <p>Depending on the package, transportation may cover journeys between:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Airport</li>
            <li>Makkah</li>
            <li>Madinah</li>
            <li>Accommodation</li>
            <li>Religious sites and other required locations</li>
          </ul>
          <p>For Hajj, transportation arrangements may also cover movement between the Holy Sites, including <strong>Mina, Arafat and Muzdalifah</strong>, according to the applicable Hajj arrangements.</p>
          <p>The exact transportation services, vehicle type, routes and schedule depend on the package and current operational arrangements.</p>
        </>
      ),
    },
    {
      title: "VISA / TRAVEL DOCUMENTATION",
      icon: "📋",
      content: (
        <>
          <p>Dandurgu assists customers with the travel documentation required for their journey.</p>
          <p>For Umrah, this may include assistance with the documentation and visa process applicable to the traveller and the current Saudi requirements.</p>
          <p>Customers will generally need:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>A valid international passport</li>
            <li>Required passport information and copies</li>
            <li>Passport photographs where applicable</li>
            <li>Other documents required for the relevant visa or travel arrangement</li>
          </ul>
          <p>Our team will review your information and tell you what documents are required for your particular journey.</p>
          <p>Visa issuance and entry into Saudi Arabia remain subject to the applicable Saudi regulations and approval by the relevant authorities.</p>
        </>
      ),
    },
    {
      title: "OTHER SERVICES",
      icon: "⭐",
      content: (
        <>
          <p>Depending on the package selected, Dandurgu may also assist with other aspects of your journey, including:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Travel planning and itinerary coordination</li>
            <li>Flight booking and ticketing</li>
            <li>Hotel and accommodation arrangements</li>
            <li>Airport and inter-city transportation</li>
            <li>Visa and travel documentation assistance</li>
            <li>Group and family travel arrangements</li>
            <li>Customer support before and during travel</li>
            <li>Guidance on travel requirements and preparations</li>
            <li>Other services required for the selected package</li>
          </ul>
          <p>The exact services included will be clearly explained by our team before you confirm your package.</p>
          <p><strong>Package inclusions vary by package, travel period and availability. Always confirm the specific inclusions, exclusions and conditions of your selected package with Dandurgu before making payment.</strong></p>
        </>
      ),
    },
  ];

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
              href="https://wa.me/2349030878676"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
            {packageItems.map((item, i) => {
              const isOpen = openPackage === i;

              return (
                <div key={item.title} className="p-6 rounded-xl bg-white border border-[var(--color-border)]">
                  <div className="text-2xl mb-4">{item.icon}</div>
                  <h4 className="font-bold text-[13px] tracking-wide text-[var(--color-dark)] mb-3" style={{ fontFamily: "var(--font-display)" }}>
                    {item.title}
                  </h4>
                  <div className={`relative text-[12px] text-[var(--color-muted)] leading-relaxed ${isOpen ? "" : "max-h-24 overflow-hidden"}`}>
                    <div className={isOpen ? "space-y-3" : "space-y-3"}>
                      {item.content}
                    </div>
                    {!isOpen && (
                      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => setOpenPackage(isOpen ? null : i)}
                    className="mt-3 text-[12px] font-semibold text-[var(--color-brand-blue)] hover:text-[var(--color-brand-blue-dark)] transition-colors"
                  >
                    {isOpen ? "Read less" : "Read more"}
                  </button>
                </div>
              );
            })}
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
