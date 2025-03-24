import BestSeller from "@/components/modules/home/BestSeller/BestSeller";
import Category from "@/components/modules/home/Category";
import FeaturedProducts from "@/components/modules/home/FeaturedProducts";
import FlashSale from "@/components/modules/home/FlashSale";
import HeroSection from "@/components/modules/home/HeroSection";
import Subscription from "@/components/modules/home/Subscription";
import TopBrands from "@/components/modules/home/TopBrands";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Category />
      <FeaturedProducts />
      <FlashSale />
      <BestSeller />
      <TopBrands />
      <Subscription />
    </div>
  );
};

export default HomePage;
