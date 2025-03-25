
import HeroSection from "@/home/herosection";
import HeroSlider from "@/home/heroslider";
import Topcategories from "@/home/topcategories";
import Footer from "@/layout/footer";
import Header from "@/layout/header";


export default function Home() {
  return (
    <div >
      <Header/>
      <HeroSlider/>
      <HeroSection/>
      <Topcategories/>
      <Footer/>
         </div>
  );
}
