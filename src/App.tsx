import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Umrah from "./pages/Umrah";
import Services from "./pages/Services";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Application from "./pages/Application";
import Success from "./pages/Success";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

type Page = "home" | "umrah" | "services" | "about" | "faq" | "contact" | "apply" | "success" | "privacy" | "terms";

const noLayout: Page[] = ["success"];
const whatsappUrl = "https://wa.me/2349030878676";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  const navigate = (p: Page) => setPage(p);
  const showLayout = !noLayout.includes(page);

  useEffect(() => {
    const normalizeWhatsAppLinks = () => {
      document.querySelectorAll<HTMLAnchorElement>('a[href="https://wa.me/[REPLACE]"]').forEach((link) => {
        link.href = whatsappUrl;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      });
    };

    normalizeWhatsAppLinks();
  }, [page]);

  return (
    <div className="min-h-screen flex flex-col">
      {showLayout && <Nav current={page} navigate={navigate} />}
      <main className="flex-1">
        {page === "apply" && (
          <style>{`
            main > div.min-h-screen.bg-white > div.border-b > div.max-w-3xl > button:first-child {
              display: none;
            }
          `}</style>
        )}
        {page === "home" && <Home navigate={navigate} />}
        {page === "umrah" && <Umrah navigate={navigate} />}
        {page === "services" && <Services navigate={navigate} />}
        {page === "about" && <About navigate={navigate} />}
        {page === "faq" && <FAQ navigate={navigate} />}
        {page === "contact" && <Contact navigate={navigate} />}
        {page === "apply" && <Application navigate={navigate} />}
        {page === "success" && <Success navigate={navigate} />}
        {page === "privacy" && <PrivacyPolicy navigate={navigate} />}
        {page === "terms" && <Terms navigate={navigate} />}
      </main>
      {showLayout && <Footer navigate={navigate} />}
    </div>
  );
}
