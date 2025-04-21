import Offer from "@/components/common/offer";
import Slide from "@/components/common/slide";
import Certificate from "@/home/certificate";
import HeroSection from "@/home/herosection";
import Our_training_services from "@/home/our_training_services";
import Topcategories from "@/home/topcategories";
import Footer from "@/layout/footer";
import Header from "@/layout/header";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden bg-white text-black">
      <Header />

      <main className="">
        <Slide />
        <HeroSection />
        <Topcategories />
        <Our_training_services />
        <Offer />
        <Certificate />
      </main>

      <Footer />
    </div>
  );
}
