import { Banner } from "./components/Banner";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { LogoTicker } from "./components/LogoTicker";
import { Features } from "./components/Features";
import { ProductShowcase } from "./components/ProductShowcase";

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowcase />
    </>
  );
}
