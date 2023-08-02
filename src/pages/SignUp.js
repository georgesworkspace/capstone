import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import "./SignUp.scss";
function SignUp() {
  return (
    <div>
      <Navigation></Navigation>
      <h1 className="signup-title">Please choose a user type</h1>
      <ul>
        <li>
          <Link to="/signup/immigrant"className="signup-immigrant">Immigrant</Link>
        </li>
        <li>
          <Link to="/signup/employer" className="signup-employer">Employer</Link>
        </li>
        <li>
          <Link to="/signup/helper" className="signup-helper">Volunteer</Link>
        </li>
      </ul>
    </div>
  );
}

export default SignUp;