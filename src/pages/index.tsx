


import Slide from "@/components/common/slide";
import HeroSection from "@/home/herosection";
import Topcategories from "@/home/topcategories";
import Footer from "@/layout/footer";
import Header from "@/layout/header";


export default function Home() {
  return (
    <div >
      <Header/>
      <Slide/>
     
     
      {/* <HeroSlider/> */}
      <HeroSection/>
      <Topcategories/>
      <Footer/>
         </div>
  );
}
