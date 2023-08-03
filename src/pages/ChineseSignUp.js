import { Link } from "react-router-dom";
import ChineseNavigation from "./ChineseNavigation";
import "./SignUp.scss";
function ChineseSignUp() {
  return (
    <>
      <ChineseNavigation></ChineseNavigation>
      <div className="signup">
      <h1 className="signup-title">请选择要注册的用户类型</h1>
      <ul className="signup-list">
        <li>
          <Link to="/signup/immigrant/chinese"className="signup-immigrant">新移民</Link>
        </li>
        <li>
          <Link to="/signup/employer/chinese" className="signup-employer">雇主</Link>
        </li>
        <li>
          <Link to="/signup/helper/chinese" className="signup-helper">志愿者</Link>
        </li>
      </ul>
      </div>
    </>
  );
}

export default ChineseSignUp;