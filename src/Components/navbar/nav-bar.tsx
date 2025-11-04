import "./navbar.css";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="logo" className="logo" />
      <ul>
        <li>
          <button className="">Home</button>
        </li>
        <li>
          <button className="">Program</button>
        </li>
        <li>
          <button className=""> About Us</button>
        </li>
        <li>
          {" "}
          <button className="">Campus</button>
        </li>
        <li>
          <button className="">Testimonials</button>
        </li>
        <li>
          <button className="btn">Contact Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
