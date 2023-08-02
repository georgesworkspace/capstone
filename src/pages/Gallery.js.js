import bond from "../assets/bond.jpeg";
import CN from "../assets/CN-tower.jpeg";
import children from "../assets/children.jpeg";
import "./Gallery.scss";
function Gallery() {
  return (
    <>
      <div className="gallery">
        <p className="gallery-title">Welcome to Our Social Community</p>
        <div className="gallery-content">
          <img className="gallery-image" src={bond} alt="bond" />
          <img className="gallery-image" src={CN} alt="cn" />
          <img className="gallery-image" src={children} alt="children" />
        </div>
      </div>
    </>
  );
}
export default Gallery;
