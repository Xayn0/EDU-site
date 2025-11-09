import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./campus.css";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import white_arrow from "../../assets/white-arrow.png";
const Campus = () => {
    return (_jsxs("div", { className: "campus", children: [_jsxs("div", { className: "gallery", children: [_jsx("img", { src: gallery_1, alt: "" }), _jsx("img", { src: gallery_2, alt: "" }), _jsx("img", { src: gallery_3, alt: "" }), _jsx("img", { src: gallery_4, alt: "" })] }), _jsxs("button", { className: "btn dark-btn", children: ["See More Here ", _jsx("img", { src: white_arrow, alt: "" })] })] }));
};
export default Campus;
