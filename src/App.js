import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Navbar from "./Components/navbar/nav-bar";
import Hero from "./Components/Hero/hero";
import Programs from "./Components/Programs/programs";
import Title from "./Components/Title/title";
import About from "./Components/About/about";
import Campus from "./Components/Campus/campus";
import Testimonials from "./Components/Testimonials/testimonials";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";
import VideoPlayer from "./Components/Video Player/video-player";
import { useState } from "react";
function App() {
    const [playState, setPlayState] = useState(false);
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsx(Hero, {}), _jsxs("div", { className: "container", children: [_jsx(Title, { subTitle: "our program", title: "what we offer" }), _jsx(Programs, {}), _jsx(About, { setPlayState: setPlayState }), _jsx(Title, { subTitle: "Gallery", title: "Campus Pics" }), _jsx(Campus, {}), _jsx(Title, { subTitle: "Testimonials", title: "What Our Students Say" }), _jsx(Testimonials, {}), _jsx(Title, { subTitle: "Contact Us", title: "Ask Anything" }), _jsx(Contact, {}), _jsx(Footer, {}), _jsx(VideoPlayer, { playState: playState, setPlayState: setPlayState })] })] }));
}
export default App;
