import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
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
    <>
      <CustomCursor />
      <main>
        <Navbar />
        <Hero />
        <Ticker />
        <SocialProof />
        <Competition />
        <Scores />
        <Virality />
        <Pricing />
        <FAQ />
        <Recommendation />
        <Footer />
      </main>
    </>
  );
}
