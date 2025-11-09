import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./about.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
const About = ({ setPlayState }) => {
    return (_jsxs("div", { className: "about", children: [_jsxs("div", { className: "about-left", children: [_jsx("img", { src: about_img, alt: "", className: "about-img" }), _jsx("img", { src: play_icon, alt: "", className: "play-icon", onClick: () => setPlayState(true) })] }), _jsxs("div", { className: "about-right", children: [_jsx("h3", { children: "About Uni" }), _jsx("h2", { children: "Nurturing Tommorow Leaders Today" }), _jsx("p", { children: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem aliquid hic quod error quo doloremque iusto, voluptatem dolorem expedita distinctio cumque? Odit, praesentium? Quidem voluptatem ullam id quis nostrum facere?" }), _jsx("p", { children: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure quas ad necessitatibus libero maiores reiciendis hic architecto accusantium aperiam at eius commodi ipsam, sequi ea itaque vero perspiciatis impedit molestias?" }), _jsx("p", { children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga amet labore tempore dolorem similique. Aliquid, laudantium rerum laboriosam, et explicabo a impedit iusto, corrupti saepe enim recusandae corporis aut exercitationem." })] })] }));
};
export default About;
