import { useState } from "react";
import logo from "../public/images/logo/logo.png";

type Page = "home" | "umrah" | "services" | "about" | "faq" | "contact" | "apply" | "success";

interface NavProps {
  current: Page;
  navigate: (page: Page) => void;
}

const links: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "Umrah", page: "umrah" },
  { label: "Services", page: "services" },
  { label: "About", page: "about" },
  { label: "FAQ", page: "faq" },
  { label: "Contact", page: "contact" },
];

export default function Nav({ current, navigate }: NavProps) {
  const [open, setOpen] = useState(false);

  const go = (page: Page) => {
    navigate(page);
    setOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <button
          onClick={() => go("home")}
          className="flex items-center gap-2.5 shrink-0"
        >
         <img
            src={logo}
            alt="Dandurgu Air Travel & Tours"
            className="h-10 w-auto object-contain"
          />
          <span
            style={{ fontFamily: "var(--font-display)" }}
            className="font-bold text-[var(--color-dark)] text-[15px] leading-tight hidden sm:block"
          >
            Dandurgu<br />
            <span className="text-[11px] font-medium text-[var(--color-muted)] tracking-wide">AIR TRAVEL & TOURS</span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.page}
              onClick={() => go(l.page)}
              className={`px-3.5 py-2 rounded text-[13.5px] font-medium transition-colors ${
                current === l.page
                  ? "text-[var(--color-brand-blue)] bg-blue-50"
                  : "text-[var(--color-muted)] hover:text-[var(--color-dark)] hover:bg-[var(--color-light-grey)]"
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/[REPLACE]"
            className="flex items-center gap-1.5 text-[13px] font-medium text-[var(--color-muted)] hover:text-[var(--color-dark)] transition-colors"
          >
            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
          <button
            onClick={() => go("apply")}
            className="px-4 py-2 rounded bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-hover)] text-white text-[13px] font-semibold tracking-wide transition-colors"
            style={{ fontFamily: "var(--font-display)" }}
          >
            START YOUR JOURNEY
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => go("apply")}
            className="px-3 py-1.5 rounded bg-[var(--color-brand-orange)] text-white text-[12px] font-semibold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            START
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-[var(--color-dark)]"
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[var(--color-border)] px-5 py-4 space-y-1">
          {links.map((l) => (
            <button
              key={l.page}
              onClick={() => go(l.page)}
              className={`w-full text-left px-3 py-2.5 rounded text-[14px] font-medium ${
                current === l.page
                  ? "text-[var(--color-brand-blue)] bg-blue-50"
                  : "text-[var(--color-dark)]"
              }`}
            >
              {l.label}
            </button>
          ))}
          <div className="pt-3 border-t border-[var(--color-border)] mt-2">
            <button
              onClick={() => go("apply")}
              className="w-full py-3 rounded bg-[var(--color-brand-orange)] text-white font-semibold text-[14px] tracking-wide"
              style={{ fontFamily: "var(--font-display)" }}
            >
              START YOUR JOURNEY
            </button>
            <a
              href="https://wa.me/[REPLACE]"
              className="mt-2 w-full flex items-center justify-center gap-2 py-2.5 rounded border border-[var(--color-border)] text-[14px] font-medium text-[var(--color-dark)]"
            >
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
