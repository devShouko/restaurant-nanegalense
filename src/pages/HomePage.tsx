import Header from "@components/Header";
import Hero from "@components/Hero";
import About from "@components/About";
import Menu from "@components/Menu";
import Contact from "@components/Contact";
import Footer from "@components/Footer";
import CookieConsent from "@components/CookieConsent";

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Menu />
      <Contact />
      <Footer />
      <CookieConsent />
    </>
  );
}

export default HomePage;