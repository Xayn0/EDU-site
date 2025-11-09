import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./contact.css";
import message_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import React from "react";
const Contact = () => {
    let key = "dfdb198d-2c82-4a94-8d6e-687708836e48";
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.currentTarget);
        formData.append("access_key", "dfdb198d-2c82-4a94-8d6e-687708836e48");
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });
        const data = await response.json();
        if (data.success) {
            setResult("Form Submitted Successfully");
            event.currentTarget.reset();
        }
        else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (_jsxs("div", { className: "contact", children: [_jsxs("div", { className: "contact-col", children: [_jsxs("h3", { children: ["Send Us a Message ", _jsx("img", { src: message_icon, alt: "" })] }), _jsx("p", { children: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum magni odio corporis harum beatae fugit doloribus neque deserunt non veniam. Deleniti asperiores totam consectetur! Obcaecati suscipit rerum commodi inventore non." }), _jsxs("ul", { children: [_jsxs("li", { children: [_jsx("img", { src: mail_icon, alt: "" }), "Zayn@gmail.com"] }), _jsxs("li", { children: [_jsx("img", { src: phone_icon, alt: "" }), "+963 31 56 95"] }), _jsxs("li", { children: [_jsx("img", { src: location_icon, alt: "" }), "Latakia , Syria ", _jsx("br", {}), "Street of 112, Governoreate"] })] })] }), _jsxs("div", { className: "contact-col", children: [_jsxs("form", { onSubmit: onSubmit, children: [_jsx("label", { children: "Your Name" }), _jsx("input", { type: "text", name: "name", placeholder: "Enter thy name", required: true }), _jsx("label", { children: "Phone Numero" }), _jsx("input", { type: "tel", name: "phone", placeholder: "Enter thy number", required: true }), _jsx("label", { children: "write your message here" }), _jsx("textarea", { name: "message", rows: 6, placeholder: "Enter Your Message", required: true }), _jsxs("button", { type: "submit", className: "btn dark-btn", children: ["Submit All ", _jsx("img", { src: white_arrow, alt: "" })] })] }), _jsx("span", { children: result })] })] }));
};
export default Contact;
