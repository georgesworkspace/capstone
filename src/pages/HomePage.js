import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>WelcomeCAN</h1>
      <ul>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
