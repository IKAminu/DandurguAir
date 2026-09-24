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

export type Page =
  | "home"
  | "umrah"
  | "services"
  | "about"
  | "faq"
  | "contact"
  | "apply"
  | "success"
  | "privacy"
  | "terms";

const noLayout: Page[] = ["success"];
const pathForPage: Record<Page, string> = {
  home: "/",
  umrah: "/umrah",
  services: "/services",
  about: "/about",
  faq: "/faq",
  contact: "/contact",
  apply: "/apply",
  success: "/success",
  privacy: "/privacy",
  terms: "/terms",
};

const pageForPath: Record<string, Page> = {
  "/": "home",
  "/home": "home",
  "/umrah": "umrah",
  "/services": "services",
  "/about": "about",
  "/faq": "faq",
  "/contact": "contact",
  "/apply": "apply",
  "/form": "apply",
  "/application": "apply",
  "/success": "success",
  "/privacy": "privacy",
  "/terms": "terms",
};

function getPageFromLocation(): Page {
  const path = window.location.pathname.replace(/\/+$/, "").toLowerCase() || "/";
  return pageForPath[path] ?? "home";
}

export default function App() {
  const [page, setPage] = useState<Page>(getPageFromLocation);

  const navigate = (nextPage: Page) => {
    const nextPath = pathForPage[nextPage];
    if (window.location.pathname !== nextPath) {
      window.history.pushState({ page: nextPage }, "", nextPath);
    }
    setPage(nextPage);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handlePopState = () => {
      setPage(getPageFromLocation());
      window.scrollTo(0, 0);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [page]);

  const showLayout = !noLayout.includes(page);

  return (
    <div className="min-h-screen flex flex-col">
      {showLayout && <Nav current={page} navigate={navigate} />}
      <main className="flex-1">
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
