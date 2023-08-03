import { useState } from "react";
// import "./Login.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SignUpImmigrants/SignUpImmigrants.scss"
import ChineseNavigation from "./ChineseNavigation";
// import "./SignUpImmigrants.scss";
export default function ChineseSignUpImmigrant() {
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    // prevent default
    event.preventDefault();

    // POST request to login with username/password
    axios
      .post("http://localhost:8080/user/signup", {
        username: event.target.username.value,
        password: event.target.password.value,
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
        <h1 className="login__title">新移民注册</h1>

        <label className="login__label">用户名:</label>
        <input type="text" name="username" className="login__input"/>

        <label className="login__label">密码:</label>
        <input type="password" name="password" className="login__input"/>

        {error && <div className="login__message">{error}</div>}

        <button className="login__button">注册</button>
      </form>
    </main>
    </>
  );
}