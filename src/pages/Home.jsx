import HeroSection from "../components/hero/HeroSection";
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