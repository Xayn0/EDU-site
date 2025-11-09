import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./title.css";
const Title = ({ subTitle, title }) => {
    return (_jsxs("div", { className: 'title', children: [_jsx("p", { children: subTitle }), _jsx("h2", { children: title })] }));
};
export default Title;
