import "./hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">

        <h1>we ensure you're sehr glicklich ist</h1>
        <h2></h2>
        <p>
          The unstopable perseverance shown by the dedicated guy, is the undying
          will of achieving one's potential, it's an undeniable want, that won't
          do without achieving
        </p>
        <button className="btn">Ecplore now <img src={dark_arrow} alt="" /> </button>
      </div>
    </div>
  );
};

export default Hero;
