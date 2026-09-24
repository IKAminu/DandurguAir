import { useState } from "react";

type Page = "home" | "umrah" | "services" | "about" | "faq" | "contact" | "apply" | "success";

interface FAQProps {
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
  {
    q: "Can I travel with family or a group?",
    a: (
      <>
        Yes. You can apply to travel alone, with family, or as part of a larger group. When completing your application, tell us how many people will be travelling so we can help arrange the appropriate travel and accommodation requirements.
      </>
    ),
  },
  {
    q: "Can Dandurgu arrange my flights?",
    a: (
      <>
        Yes. Dandurgu provides flight booking and travel arrangement services for domestic and international journeys. If you are travelling for Umrah, we can also assist with arranging the flights required for your journey.
      </>
    ),
  },
  {
    q: "What happens after I submit my application?",
    a: (
      <>
        Once you submit your application, our team will review the information you provided. We’ll contact you to discuss your travel requirements, available arrangements, documentation and the next steps toward confirming your journey.
      </>
    ),
  },
  {
    q: "How do I make payment?",
    a: (
      <>
        Payment instructions will be provided by the Dandurgu team after your application has been reviewed and your travel arrangements have been discussed. We will provide the appropriate payment details and explain the amount required at each stage.
      </>
    ),
  },
  {
    q: "Can I change my travel date?",
    a: (
      <>
        Travel dates may be changed depending on your booking, airline rules, package arrangements, availability and any applicable charges. Contact the Dandurgu team as soon as possible if you need to change your travel date, and we’ll advise you on the available options.
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

export default function FAQ({ navigate }: FAQProps) {
  const [open, setOpen] = useState<number | null>(null);

  const go = (page: Page) => {
    navigate(page);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <section className="py-16 md:py-24 bg-[var(--color-off-white)] border-b border-[var(--color-border)]">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <p className="text-[11px] font-semibold tracking-widest text-[var(--color-brand-blue)] uppercase mb-3" style={{ fontFamily: "var(--font-display)" }}>FAQ</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-dark)] tracking-tight mb-5" style={{ fontFamily: "var(--font-display)" }}>
            COMMON QUESTIONS.
          </h1>
          <p className="text-[var(--color-muted)] text-[16px] leading-relaxed">
            Everything you need to know about travelling with Dandurgu. If you can't find what you're looking for, contact us directly.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-[var(--color-border)] overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-[var(--color-off-white)] transition-colors"
                >
                  <span className="font-semibold text-[15px] text-[var(--color-dark)] pr-6" style={{ fontFamily: "var(--font-display)" }}>
                    {faq.q}
                  </span>
                  <div className={`w-6 h-6 rounded-full border border-[var(--color-border)] flex items-center justify-center shrink-0 transition-all duration-200 ${open === i ? "bg-[var(--color-brand-blue)] border-[var(--color-brand-blue)]" : ""}`}>
                    <svg
                      className={`w-3 h-3 transition-transform duration-200 ${open === i ? "rotate-180 text-white" : "text-[var(--color-muted)]"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {open === i && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-[var(--color-border)] bg-[var(--color-off-white)]">
                    <p className="text-[var(--color-muted)] text-[14.5px] leading-relaxed pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-16 md:py-20 bg-[var(--color-off-white)] border-t border-[var(--color-border)]">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-dark)] mb-4 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            STILL HAVE QUESTIONS?
          </h2>
          <p className="text-[var(--color-muted)] text-[15px] mb-8">Our team is available to help. Reach us by WhatsApp or through our contact page.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/2349030878676"
              className="px-6 py-3.5 rounded bg-green-600 hover:bg-green-700 text-white font-semibold text-[14px] flex items-center justify-center gap-2 transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WHATSAPP US
            </a>
            <button
              onClick={() => go("contact")}
              className="px-6 py-3.5 rounded border border-[var(--color-border)] text-[var(--color-dark)] hover:border-[var(--color-brand-blue)] hover:text-[var(--color-brand-blue)] font-medium text-[14px] transition-colors"
            >
              Contact us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
