import { Link } from "react-router-dom";
import ChineseService from "./ChineseService.js";
import Gallery from "./Gallery.js";
import ChineseNavigation from "./ChineseNavigation.js";
import ChineseJoinUs from "./ChineseJoinUs.js";
function Chinese() {
  return (
    <>
    <ChineseNavigation></ChineseNavigation>
    <div>
      <h1>欢迎您，游客</h1>
      <ul>
        <li>
        <Link to="/loginchinese">登录</Link>
        </li>
      </ul>
      <ChineseService></ChineseService>
      <Gallery></Gallery>
      <ChineseJoinUs></ChineseJoinUs>
    </div>
    </>
  );
}

export default Chinese;
