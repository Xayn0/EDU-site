import "./about.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
import { Dispatch, SetStateAction } from "react";
const About = ({setPlayState} : {setPlayState : Dispatch<SetStateAction<boolean>>}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={() => setPlayState(true)}/>
      </div>
      <div className="about-right">
        <h3>About Uni</h3>
        <h2>Nurturing Tommorow Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem aliquid hic quod error quo doloremque iusto, voluptatem
          dolorem expedita distinctio cumque? Odit, praesentium? Quidem
          voluptatem ullam id quis nostrum facere?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure quas ad
          necessitatibus libero maiores reiciendis hic architecto accusantium
          aperiam at eius commodi ipsam, sequi ea itaque vero perspiciatis
          impedit molestias?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga amet
          labore tempore dolorem similique. Aliquid, laudantium rerum
          laboriosam, et explicabo a impedit iusto, corrupti saepe enim
          recusandae corporis aut exercitationem.
        </p>
      </div>
    </div>
  );
};

export default About;
