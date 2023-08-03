import { useState } from "react";
// import "./Login.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SignUpEmployer.scss"
import ChineseNavigation from "./ChineseNavigation";
export default function ChineseSignUpEmployer() {
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    // prevent default
    event.preventDefault();

    // POST request to login with username/password
    axios
      .post("http://localhost:8080/user/signupemployer", {
        username: event.target.username.value,
        password: event.target.password.value,
        companycontact: event.target.contact.value,
        companylocation: event.target.location.value,
        companydescription: event.target.description.value,
        companyname: event.target.name.value,
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
        <h1 className="login__title">注册新雇主</h1>

        <label className="login__label">用户名：</label>
        <input type="text" name="username" className="login__input"/>

        <label  className="login__label">密码:</label>
        <input type="password" name="password"className="login__input" />

        <label  className="login__label">公司名称:</label>
        <input type="text" name="name" className="login__input"/>

        <label  className="login__label">公司地址:</label>
        <input type="text" name="location" className="login__input"/>

        <label  className="login__label">公司介绍:</label>
        <input type="text" name="description" className="login__description"/>
        <label  className="login__label">联系方式:</label>
        <input type="text" name="contact" className="login__input"/>

        {error && <div className="login__message">{error}</div>}

        <button className="login__button">注册</button>
      </form>
    </main>
    </>
  );
}
