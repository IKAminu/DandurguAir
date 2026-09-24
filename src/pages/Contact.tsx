import { useState } from "react";

type Page = "home" | "umrah" | "services" | "about" | "faq" | "contact" | "apply" | "success";

interface ContactProps {
  navigate: (page: Page) => void;
}

export default function Contact({ navigate }: ContactProps) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const go = (page: Page) => {
    navigate(page);
    window.scrollTo(0, 0);
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/dandurguairtravels@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: new FormData(e.currentTarget),
        },
      );

      const contentType = response.headers.get("content-type") || "";
      if (!contentType.includes("application/json")) {
        throw new Error("FormSubmit returned a non-JSON response.");
      }

      const result = await response.json();
      const succeeded =
        response.ok &&
        (result.success === true || result.success === "true");

      if (!succeeded) {
        throw new Error(
          typeof result.message === "string"
            ? result.message
            : "FormSubmit rejected the enquiry.",
        );
      }

      setSent(true);
    } catch (error) {
      console.error("Contact form submission failed:", error);
      window.alert(
        "Your enquiry could not be sent. Please try again or contact us on WhatsApp.",
      );
    }
  };

  return (
    <div>
      <section className="py-16 md:py-24 bg-[var(--color-off-white)] border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p className="text-[11px] font-semibold tracking-widest text-[var(--color-brand-blue)] uppercase mb-3" style={{ fontFamily: "var(--font-display)" }}>Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-dark)] tracking-tight mb-5" style={{ fontFamily: "var(--font-display)" }}>
            GET IN TOUCH.
          </h1>
          <p className="text-[var(--color-muted)] text-[16px] max-w-xl leading-relaxed">
            Our team is ready to help with your travel enquiry. Use any of the channels below to reach us.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-5 gap-14 items-start">
          {/* Contact info and map */}
          <div className="md:col-span-2">
            <h2 className="font-bold text-[20px] text-[var(--color-dark)] mb-8 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              CONTACT DANDURGU
            </h2>

            {/* WhatsApp */}
            <div className="mb-8">
              <div className="text-[11px] font-semibold tracking-widest text-[var(--color-muted)] uppercase mb-3" style={{ fontFamily: "var(--font-display)" }}>WhatsApp (Preferred)</div>
              <a
                href="https://wa.me/2349030878676"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-[var(--color-border)] hover:border-green-500 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-[14px] text-[var(--color-dark)]">WhatsApp Us</div>
                  <div className="text-[12px] text-[var(--color-dark)]">0903-087-8676</div>
                </div>
              </a>
            </div>

            <div className="space-y-6">
              {[
                { label: "Phone", val: "0903-087-8676 / 0803-786-6633", icon: "📞" },
                { label: "Email", val: "dandurguairtravels@gmail.com", icon: "✉" },
                { label: "Office Address", val: "Satatima Plaza, Miller Road, Bompai Rd, Nassarawa, Kano, Nigeria", icon: "📍" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-[11px] font-semibold tracking-widest text-[var(--color-muted)] uppercase mb-2" style={{ fontFamily: "var(--font-display)" }}>{item.label}</div>
                  <p className="text-[13px] text-[var(--color-dark)]">{item.val}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-[var(--color-border)]">
              <div className="text-[11px] font-semibold tracking-widest text-[var(--color-muted)] uppercase mb-4" style={{ fontFamily: "var(--font-display)" }}>Ready to apply?</div>
              <button
                onClick={() => go("apply")}
                className="w-full py-3.5 rounded bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-hover)] text-white font-semibold text-[13.5px] tracking-wide transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                START YOUR JOURNEY
              </button>
            </div>

            {/* Office map */}
            <div className="mt-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1460.127650313464!2d8.553794522623365!3d12.010704044353282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae816d349bcde7%3A0x24c826788a65a6fb!2sDandurgu%20Air%20Travel%20And%20Tours%20Ltd!5e0!3m2!1sen!2sng!4v1789662847511!5m2!1sen!2sng"
                title="Dandurgu Air Travel & Tours Ltd office location"
                className="w-full aspect-[4/3] rounded-xl border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>

          {/* Contact form */}
          <div className="md:col-span-3 md:sticky md:top-24 self-start">
            <h2 className="font-bold text-[20px] text-[var(--color-dark)] mb-8 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              SEND AN ENQUIRY
            </h2>
            {sent ? (
              <div className="p-8 rounded-xl bg-green-50 border border-green-200 text-center">
                <div className="text-3xl mb-4">✓</div>
                <h3 className="font-bold text-[18px] text-[var(--color-dark)] mb-2" style={{ fontFamily: "var(--font-display)" }}>Enquiry received</h3>
                <p className="text-[var(--color-muted)] text-[14px]">Our team will get back to you shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={submit}
                className="space-y-5"
              >
                <input type="hidden" name="_subject" value="New Dandurgu Website Enquiry" />
                <input type="hidden" name="_captcha" value="true" />
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[12px] font-semibold text-[var(--color-dark)] mb-2" style={{ fontFamily: "var(--font-display)" }}>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-white text-[14px] text-[var(--color-dark)] placeholder:text-[var(--color-muted)]/60 focus:outline-none focus:border-[var(--color-brand-blue)] focus:ring-2 focus:ring-[var(--color-brand-blue)]/10 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] font-semibold text-[var(--color-dark)] mb-2" style={{ fontFamily: "var(--font-display)" }}>Phone / WhatsApp</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your phone number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-white text-[14px] text-[var(--color-dark)] placeholder:text-[var(--color-muted)]/60 focus:outline-none focus:border-[var(--color-brand-blue)] focus:ring-2 focus:ring-[var(--color-brand-blue)]/10 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-[var(--color-dark)] mb-2" style={{ fontFamily: "var(--font-display)" }}>Email Address</label>
                  <input
                    type="email"
                    placeholder="Your email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-white text-[14px] text-[var(--color-dark)] placeholder:text-[var(--color-muted)]/60 focus:outline-none focus:border-[var(--color-brand-blue)] focus:ring-2 focus:ring-[var(--color-brand-blue)]/10 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-[var(--color-dark)] mb-2" style={{ fontFamily: "var(--font-display)" }}>Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your travel plans..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-white text-[14px] text-[var(--color-dark)] placeholder:text-[var(--color-muted)]/60 focus:outline-none focus:border-[var(--color-brand-blue)] focus:ring-2 focus:ring-[var(--color-brand-blue)]/10 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded bg-[var(--color-brand-blue)] hover:bg-[var(--color-brand-blue-dark)] text-white font-semibold text-[14px] tracking-wide transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  SEND ENQUIRY
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
