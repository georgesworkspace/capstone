import { Link } from "react-router-dom";
import "./JoinUs.scss";
function JoinUs() {
  return (
    <>
      <div className="join">
        <p className="join-title">Join Us</p>
        <p className="join-text">
          Discover all the benefits of becoming part of our community! Sign up
          with your email to receive our informative newsletter, exclusive
          discounts, and important updates about immigration guidelines and
          support.
        </p>
        <div className="join-button-div">
        <Link to="/signup">
          <button className="join-button">Join Us</button>
        </Link>
        </div>
      </div>
    </>
  );
}
export default JoinUs;
