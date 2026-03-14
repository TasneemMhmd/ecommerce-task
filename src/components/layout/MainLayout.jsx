
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import PromoBar from "./PromoBar";
import ScrollToTop from "../ui/ScrollToTop";

function MainLayout() {
    const location = useLocation();
    const isHome = location.pathname === "/";
    return (
        <>
      <ScrollToTop />

            {isHome && <PromoBar />}
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default MainLayout;