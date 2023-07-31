import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      <h1>Please choose a user type</h1>
      <ul>
        <li>
          <Link to="/signup/immigrant">Immigrant</Link>
        </li>
        <li>
          <Link to="/signup/employer">Employer</Link>
        </li>
        <li>
          <Link to="/signup/helper">Helper</Link>
        </li>
      </ul>
    </div>
  );
}

export default SignUp;