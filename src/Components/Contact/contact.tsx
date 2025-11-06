import "./contact.css";
import message_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import React, { FormEvent } from "react";
const Contact = () => {
  let key = "dfdb198d-2c82-4a94-8d6e-687708836e48";

  const [result, setResult] = React.useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
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
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send Us a Message <img src={message_icon} alt="" />
        </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          magni odio corporis harum beatae fugit doloribus neque deserunt non
          veniam. Deleniti asperiores totam consectetur! Obcaecati suscipit
          rerum commodi inventore non.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            Zayn@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +963 31 56 95
          </li>
          <li>
            <img src={location_icon} alt="" />
            Latakia , Syria <br />
            Street of 112, Governoreate
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter thy name"
            required
          />
          <label>Phone Numero</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter thy number"
            required
          />
          <label>write your message here</label>
          <textarea
            name="message"
            rows={6}
            placeholder="Enter Your Message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit All <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
