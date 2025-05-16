import { useEffect } from "react";
import { slides } from "@/data/slides";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Galleries from "@/components/home/Galleries";
import Contacts from "@/components/home/Contacts";
import Footer from "@/components/home/Footer";

const Index = () => {
  // Эффект для прокрутки к якорю при загрузке страницы
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#121212]">
      <Hero slides={slides} />
      <Galleries />
      <About />
      <Services />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Index;
