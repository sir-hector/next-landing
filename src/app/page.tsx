import { Banner } from "./components/Banner";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { LogoTicker } from "./components/LogoTicker";
import { Features } from "./components/Features";
import { ProductShowcase } from "./components/ProductShowcase";
import { FAQs } from "./components/FAQ";
import { CallToAction } from "./components/CallToAction";

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowcase />
      <FAQs />
      <CallToAction />
    </>
  );
}
