import Navbar from "@/src/app/components/Navbar";
import Hero from "@/src/app/components/Hero";
import ProductSection from "@/src/app/components/Products";
import AboutSection from "@/src/app/components/About";
import Footer from "@/src/app/components/Footer";
import Features from "@/src/app/components/Features";
import ContactPage from "@/src/app/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero /> 
      <ProductSection />
      <AboutSection />
      <Features />
      <ContactPage />
      <Footer />
    </main>
  );
}