


import CardDesign from "@/components/common/card_design";
import Slide from "@/components/common/slide";
import Certificate from "@/home/certificate";
import HeroSection from "@/home/herosection";
import Our_training_services from "@/home/our_training_services";
import Topcategories from "@/home/topcategories";
import Footer from "@/layout/footer";
import Header from "@/layout/header";


export default function Home() {
  return (
    <div >
      <Header/>
      <Slide/>
      <HeroSection/>
      <Topcategories/>
      <Our_training_services/>
      <Certificate/>
      <CardDesign/>
      <Footer/>
         </div>
  );
}
