import HeroSection from "../components/hero/HeroSection";
import Header from "../components/layout/Header";
import PromoBar from "../components/layout/PromoBar";
import Brands from "../components/sections/Brands";
import Categories from "../components/sections/Categories";
import Collections from "../components/sections/Collections";
import JustIn from "../components/sections/JustIn";

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
        </>
    );
}
export default Home;