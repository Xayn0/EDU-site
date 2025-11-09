import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import menu_icon from "../../assets/menu-icon.png";
const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => setSticky(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
    }, []);
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    };
    return (_jsxs("nav", { className: `container ${sticky ? "dark-nav" : ""}`, children: [_jsx("img", { src: logo, alt: "logo", className: "logo" }), _jsxs("ul", { className: mobileMenu ? "" : "hide-mobile-menu", children: [_jsx("li", { children: _jsx(Link, { to: "hero", smooth: true, duration: 500, offset: 0, children: _jsx("button", { className: "", children: "Home" }) }) }), _jsx("li", { children: _jsx(Link, { to: "programs", smooth: true, duration: 500, offset: -260, children: _jsx("button", { className: "", children: "Program" }) }) }), _jsx("li", { children: _jsx(Link, { to: "about", smooth: true, duration: 500, offset: -150, children: _jsx("button", { className: "", children: " About Us" }) }) }), _jsx("li", { children: _jsx(Link, { to: "campus", smooth: true, duration: 500, offset: -260, children: _jsx("button", { className: "", children: "Campus" }) }) }), _jsx("li", { children: _jsx(Link, { to: "testimonials", smooth: true, duration: 500, offset: -260, children: _jsx("button", { className: "", children: "Testimonials" }) }) }), _jsx("li", { children: _jsx(Link, { to: "contact", smooth: true, duration: 500, offset: -225, children: _jsx("button", { className: "btn", children: "Contact Us" }) }) })] }), _jsx("img", { src: menu_icon, className: "menu-icon", onClick: toggleMenu })] }));
};
export default Navbar;
