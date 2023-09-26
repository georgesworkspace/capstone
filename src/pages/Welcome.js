import { Link } from "react-router-dom";
import "./Welcome.scss";
import photo from "../assets/photo.jpg"
function Welcome() {
  return (
    <>
      <div>
        <h1 className="welcome-title">About me</h1>
        <div className="grouper">
        <article className="welcome-text">
        I first became interested in programming when I was fifteen years old. I was using the Starcraft map editor to adjust a feature of the game. It was the first time I was exposed to code and although I only understood a small portion of it at the time, I was hooked.Since then I have completed a Data Analytics Internship and graduated from BrainStation’s Software Engineering bootcamp. I’m excited to use the software skills I have developed to contribute to your team.
        </article>
        <img className="gallery-image" src={photo} alt="bond" />
            </div>
      </div>
    </>
  );
}

export default Welcome;
