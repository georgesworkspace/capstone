import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import Gallery from "./Gallery.js";
import JoinUs from "./JoinUs";
import Service from "./Service";
function Chinese() {
  return (
    <>
    <Navigation></Navigation>
    <div>
      <h1>欢迎您，游客</h1>
      <ul>
        <li>
        <Link to="/login">登录</Link>
        </li>
      </ul>
      <Service></Service>
      <Gallery></Gallery>
      <JoinUs></JoinUs>
    </div>
    </>
  );
}

export default Chinese;
