import HeroSection from "../components/hero/HeroSection";
import Header from "../components/layout/Header";
import PromoBar from "../components/layout/PromoBar";
import Brands from "../components/sections/Brands";

function Home() {
    return (
        <>
            <PromoBar />
            <Header />
            <HeroSection />
            <Brands />
        </>
    );
}
export default Home;