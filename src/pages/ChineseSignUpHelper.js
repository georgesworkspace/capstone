import { useState } from "react";
// import "./Login.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SignUpHelper.scss"
import ChineseNavigation from "./ChineseNavigation";
export default function ChineseSignUpHelper() {
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
    <>
    <ChineseNavigation></ChineseNavigation>
    <main className="login-page">
      <form className="login" onSubmit={handleSubmit}>
        <h1 className="login__title">注册志愿者</h1>

        <label className="login__label">用户名:</label>
        <input type="text" name="username" className="login__input" />

        <label className="login__label">密码:</label>
        <input type="password" name="password" className="login__input" />

        <label className="login__label">联系方式:</label>
        <input type="text" name="contact" className="login__input" />

        <label className="login__label">志愿地区:</label>
        <input type="text" name="region" className="login__input" />

        {error && <div className="login__message">{error}</div>}

        <button className="login__button">注册</button>
      </form>
    </main>
    </>
  );
}
