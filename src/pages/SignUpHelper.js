import { useState } from "react";
// import "./Login.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUpHelper() {
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    // prevent default
    event.preventDefault();

    // POST request to login with username/password
    axios
      .post("http://localhost:8080/user/signuphelper", {
        username: event.target.username.value,
        password: event.target.password.value,
        helpercontact: event.target.contact.value,
        helperregion: event.target.region.value,
      })
      .then((response) => {
        console.log(response);

        navigate("/login");
      })
      .catch((error) => {
        // if it failed?! do something
        setError(`Login failed: ${error}`);
      });
  };

  return (
    <main className="login-page">
      <form className="login" onSubmit={handleSubmit}>
        <h1 className="login__title">SignUp -- Helper</h1>

        <label>Username:</label>
        <input type="text" name="username" />

        <label>Password:</label>
        <input type="password" name="password" />

        <label>Contact:</label>
        <input type="text" name="contact" />

        <label>Region:</label>
        <input type="text" name="region" />

        {error && <div className="login__message">{error}</div>}

        <button className="login__button">Sign up</button>
      </form>
    </main>
  );
}
