
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import PromoBar from "./PromoBar";
import ScrollToTop from "../ui/ScrollToTop";
import CartSidebar from "../cart/CartSidebar";

function MainLayout() {
    const location = useLocation();
    const isHome = location.pathname === "/";
    return (
        <>
            <ScrollToTop />
            <CartSidebar />
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