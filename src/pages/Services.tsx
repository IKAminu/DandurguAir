import UmrahImage from "../public/images/umrah (3).jpg";
import HajjImage from "../public/images/Picture (2).jfif";
import FlightsImage from "../public/images/Picture (1).jfif";
import ToursImage from "../public/images/picture (3).jpg";

type Page = "home" | "umrah" | "services" | "about" | "faq" | "contact" | "apply" | "success";

interface ServicesProps {
  navigate: (page: Page) => void;
}

const services = [
  {
    title: "UMRAH",
    icon: "🕌",
    desc: "We arrange every aspect of your Umrah journey, including flights, accommodation in Makkah and Madinah, visa documentation, and ground transport. Our team has years of experience arranging Umrah travel and understands what matters most to our customers.",
    points: ["Flight arrangements from Nigerian cities", "Hotel accommodation near the Haram", "Saudi visa documentation support", "Ground transport arrangements", "Flexible payment plans available"],
    cta: "EXPLORE UMRAH",
    page: "umrah" as Page,
    image: UmrahImage,
  },
  {
    title: "HAJJ",
    icon: "🌙",
    desc: "Hajj is a once-in-a-lifetime obligation and Dandurgu takes that seriously. We work with you to arrange your Hajj travel with the care and attention it deserves, handling the logistics so you can focus on the spiritual journey.",
    points: ["Official Hajj package arrangements", "Accommodation and transport", "Documentation support", "Group and individual arrangements", "Experienced guidance throughout"],
    cta: "ENQUIRE ABOUT HAJJ",
    page: "apply" as Page,
    image: HajjImage,
  },
  {
    title: "FLIGHTS",
    icon: "✈",
    desc: "Dandurgu can arrange domestic and international flights for individuals, families and groups. Whether you need a straightforward return ticket or a complex multi-destination itinerary, our team finds the right connection.",
    points: ["Domestic Nigerian routes", "International destinations", "Group booking arrangements", "Family travel coordination", "Business and economy class"],
    cta: "ENQUIRE ABOUT FLIGHTS",
    page: "apply" as Page,
    image: FlightsImage,
  },
  {
    title: "TOURS & TRAVEL",
    icon: "🌍",
    desc: "Beyond Hajj and Umrah, Dandurgu arranges other travel services for customers looking to explore new destinations. We handle the planning, so you focus on the experience.",
    points: ["International tour packages", "Holiday travel arrangements", "Family travel planning", "Group tours", "Travel documentation support"],
    cta: "ENQUIRE ABOUT TOURS",
    page: "apply" as Page,
    image: ToursImage,
  },
];

export default function Services({ navigate }: ServicesProps) {
  const go = (page: Page) => {
    navigate(page);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {/* Page header */}
      <section className="py-16 md:py-24 bg-[var(--color-off-white)] border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p className="text-[11px] font-semibold tracking-widest text-[var(--color-brand-blue)] uppercase mb-3" style={{ fontFamily: "var(--font-display)" }}>Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-dark)] tracking-tight mb-5" style={{ fontFamily: "var(--font-display)" }}>
            TRAVEL MADE EASIER.
          </h1>
          <p className="text-[var(--color-muted)] text-[16px] max-w-xl leading-relaxed">
            Dandurgu arranges Hajj, Umrah, flight bookings and other travel services for individuals, families and groups across Nigeria.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 space-y-14">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`grid md:grid-cols-2 gap-8 md:gap-14 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}
            >
              <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
                <div className="text-3xl mb-5">{svc.icon}</div>
                <p className="text-[11px] font-semibold tracking-widest text-[var(--color-brand-blue)] uppercase mb-3" style={{ fontFamily: "var(--font-display)" }}>Service</p>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] tracking-tight mb-5" style={{ fontFamily: "var(--font-display)" }}>
                  {svc.title}
                </h2>
                <p className="text-[var(--color-muted)] text-[15px] leading-relaxed mb-7">{svc.desc}</p>
                <ul className="space-y-2 mb-8">
                  {svc.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2.5 text-[14px] text-[var(--color-dark)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-orange)] shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => go(svc.page)}
                  className="px-6 py-3 rounded bg-[var(--color-brand-blue)] hover:bg-[var(--color-brand-blue-dark)] text-white font-semibold text-[13.5px] tracking-wide transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {svc.cta}
                </button>
              </div>
              <div className={`rounded-2xl bg-[var(--color-light-grey)] border border-[var(--color-border)] aspect-[4/3] flex items-center justify-center overflow-hidden ${i % 2 === 1 ? "md:[direction:ltr]" : ""}`}>
                <img
                  src={svc.image}
                  alt={`${svc.title} service`}
                  className={`w-full h-full object-cover ${svc.title === "TOURS & TRAVEL" ? "object-bottom" : ""}`}
                />             </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--color-brand-blue)]">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            NOT SURE WHICH SERVICE<br />YOU NEED?
          </h2>
          <p className="text-white/70 text-[15px] mb-8">Start your journey and our team will help you choose the right arrangement.</p>
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
