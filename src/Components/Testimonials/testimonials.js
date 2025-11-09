import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import "./testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
const Testimonials = () => {
    const slider = useRef(null);
    let tx = 0;
    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };
    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };
    return (_jsxs("div", { className: "testimonials", children: [_jsx("img", { src: next_icon, alt: "", className: "next-btn", onClick: slideForward }), _jsx("img", { src: back_icon, alt: "", className: "back-btn", onClick: slideBackward }), _jsx("div", { className: "slider", children: _jsxs("ul", { ref: slider, children: [_jsx("li", { children: _jsxs("div", { className: "slide", children: [_jsxs("div", { className: "user-info", children: [_jsx("img", { src: user_1, alt: "" }), _jsxs("div", { children: [_jsx("h3", { children: "Chris Willix" }), _jsx("span", { children: "Ivy, USA" })] })] }), _jsx("p", { children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tempora assumenda at sed harum dolor animi cum, quasi alias voluptatem iure ipsum, consequatur aspernatur totam pariatur rerum, nulla vel sit!" })] }) }), _jsx("li", { children: _jsxs("div", { className: "slide", children: [_jsxs("div", { className: "user-info", children: [_jsx("img", { src: user_2, alt: "" }), _jsxs("div", { children: [_jsx("h3", { children: "Chris Willix" }), _jsx("span", { children: "Ivy, USA" })] })] }), _jsx("p", { children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tempora assumenda at sed harum dolor animi cum, quasi alias voluptatem iure ipsum, consequatur aspernatur totam pariatur rerum, nulla vel sit!" })] }) }), _jsx("li", { children: _jsxs("div", { className: "slide", children: [_jsxs("div", { className: "user-info", children: [_jsx("img", { src: user_3, alt: "" }), _jsxs("div", { children: [_jsx("h3", { children: "Chris Willix" }), _jsx("span", { children: "Ivy, USA" })] })] }), _jsx("p", { children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tempora assumenda at sed harum dolor animi cum, quasi alias voluptatem iure ipsum, consequatur aspernatur totam pariatur rerum, nulla vel sit!" })] }) }), _jsx("li", { children: _jsxs("div", { className: "slide", children: [_jsxs("div", { className: "user-info", children: [_jsx("img", { src: user_4, alt: "" }), _jsxs("div", { children: [_jsx("h3", { children: "Chris Willix" }), _jsx("span", { children: "Ivy, USA" })] })] }), _jsx("p", { children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tempora assumenda at sed harum dolor animi cum, quasi alias voluptatem iure ipsum, consequatur aspernatur totam pariatur rerum, nulla vel sit!" })] }) })] }) })] }));
};
export default Testimonials;
