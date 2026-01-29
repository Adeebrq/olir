import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect } from "react";

const Layout = ({ children }) => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, [pathname]);

    return (
        <div>
            <Header />
            <div className="main-content">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;