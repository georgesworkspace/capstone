import { Link } from "react-router-dom";
import "./Welcome.scss";
function Welcome() {
  return (
    <>
      <div>
        <h1 className="welcome-title">Welcome, Guest</h1>
        <article className="welcome-text">
          Thank you for visiting our site. We are here to provide information,
          support, and guidance to new Canadian immigrants. Whether you need
          assistance with language translation or help navigating the
          immigration process, we've got you covered. Feel free to explore our
          platform and discover all the resources available to help make your
          Canadian journey smooth and successful.
        </article>
        <div className="welcome-button-div">
            <Link to="/login" className="welcome-link"><button className="welcome-button">Login</button></Link>
            </div>
      </div>
    </>
  );
}

export default Welcome;
