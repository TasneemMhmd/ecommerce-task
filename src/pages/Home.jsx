import CartSidebar from "../components/cart/CartSidebar";
import HeroSection from "../components/hero/HeroSection";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import PromoBar from "../components/layout/PromoBar";
import Articles from "../components/sections/Articles";
import BestSeller from "../components/sections/BestSeller";
import Brands from "../components/sections/Brands";
import Categories from "../components/sections/Categories";
import Collections from "../components/sections/Collections";
import Features from "../components/sections/Features";
import InstagramFeed from "../components/sections/InstagramFeed";
import JustIn from "../components/sections/JustIn";
import SaleBanner from "../components/sections/SaleBanner";
import WinterCollectionsVideo from "../components/sections/WinterCollectionsVideo";

function Home() {
    return (
        <>
            <CartSidebar />
            <HeroSection />
            <Brands />
            <JustIn />
            <Categories />
            <Collections />
            <BestSeller />
            <SaleBanner />
            <WinterCollectionsVideo />
            <Articles />
            <InstagramFeed />
            <Features />
        </>
    );
}
export default Home;