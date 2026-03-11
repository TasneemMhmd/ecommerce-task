import HeroSection from "../components/hero/HeroSection";
import Header from "../components/layout/Header";
import PromoBar from "../components/layout/PromoBar";
import BestSeller from "../components/sections/BestSeller";
import Brands from "../components/sections/Brands";
import Categories from "../components/sections/Categories";
import Collections from "../components/sections/Collections";
import JustIn from "../components/sections/JustIn";
import SaleBanner from "../components/sections/SaleBanner";

function Home() {
    return (
        <>
            <PromoBar />
            <Header />
            <HeroSection />
            <Brands />
            <JustIn />
            <Categories />
            <Collections />
            <BestSeller />
            <SaleBanner />
        </>
    );
}
export default Home;