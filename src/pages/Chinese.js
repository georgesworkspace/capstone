import { Link } from "react-router-dom";
import ChineseService from "./ChineseService.js";
import Gallery from "./Gallery.js";
import ChineseNavigation from "./ChineseNavigation.js";
import ChineseJoinUs from "./ChineseJoinUs.js";
import "./Welcome.scss";
import "./StyleGrouperUser.scss";
function Chinese() {
  return (
    <>
      <div>
        <div className="Group-div">
          <ChineseNavigation></ChineseNavigation>

          <h1 className="welcome-title"> 欢迎您，游客</h1>
          <p className="welcome-text">
            感谢您访问我们的网站。我们致力于为新加拿大移民提供信息、支持和指导。无论您需要语言翻译的帮助，还是在移民过程中需要指引，我们都会全力以赴地支持您。请随意探索我们的平台，发现所有可用的资源，帮助您的加拿大之旅顺利而成功。
          </p>
          <div className="welcome-button-div">
            <Link to="/loginchinese" className="welcome-link"><button className="welcome-button">登录</button></Link>
            </div>
        </div>
        <ChineseService></ChineseService>
        <Gallery></Gallery>
        <ChineseJoinUs></ChineseJoinUs>
      </div>
    </>
  );
}

export default Chinese;
