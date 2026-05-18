import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import Competition from "@/components/Competition";
import Scores from "@/components/Scores";
import Virality from "@/components/Virality";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Recommendation from "@/components/Recommendation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <SocialProof />
      <Competition />
      <Scores />
      <Virality />
      <Pricing />
      <FAQ />
      <Recommendation />
      <Footer />
    </main>
  );
}
