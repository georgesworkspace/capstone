import { useState } from "react";
// import "./Login.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SignUpHelper.scss"
import Navigation from "./Navigation";
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
        name: event.target.name.value,
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
    <>
    <Navigation></Navigation>
    <main className="login-page">
      <form className="login" onSubmit={handleSubmit}>
        <h1 className="login__title">SignUp -- Helper</h1>

        <label className="login__label">Username:</label>
        <input type="text" name="username" className="login__input" />

        <label className="login__label">Password:</label>
        <input type="password" name="password" className="login__input" />

        <label className="login__label">Contact:</label>
        <input type="text" name="contact" className="login__input" />

        <label className="login__label">Region:</label>
        <input type="text" name="region" className="login__input" />
        <label className="login__label">Name:</label>
        <input type="text" name="name" className="login__input" />

        {error && <div className="login__message">{error}</div>}

        <button className="login__button">Sign up</button>
      </form>
    </main>
    </>
  );
}
