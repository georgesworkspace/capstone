import bond from "../assets/brain.png";
import CN from "../assets/instock.png";
import git from "../assets/github-mark-white.png";
import linkedin from "../assets/iconmonstr-linkedin-3.svg"
import "./Gallery.scss";
function Gallery() {
  return (
    <>
      <div className="gallery">
        <p className="gallery-title">My projects</p>
        <div className="gallery-content">
          <img className="gallery-image" src={bond} alt="bond" />
         
          <img className="gallery-image" src={CN} alt="cn" />
    
         
        </div>
      </div>
    </>
  );
}
export default Gallery;
