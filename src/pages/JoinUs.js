import { Link } from "react-router-dom";
import git from "../assets/github-mark-white.png";
import linkedin from "../assets/iconmonstr-linkedin-3.svg"
import "./JoinUs.scss";
function redirect(){
  window.location.href='http://google.com';
}
function JoinUs() {
  return (
    <>
      <div className="join">
        
        <div className="join-button-div">
        <Link to="/signup">
          <button className="join-button" onClick={(e) => {
      e.preventDefault();
      window.location.href='www.linkedin.com/in/jianze-wu';
      }}>Contact</button>
        </Link>
        <div className="gallery-content">
          <img className="gallery-image" src={git} alt="bond" />
         
          <img className="gallery-image" src={linkedin} alt="cn" />
    
         
        </div>
        </div>
      </div>
    </>
  );
}
export default JoinUs;
