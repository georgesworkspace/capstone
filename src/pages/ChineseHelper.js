import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navigation from "./Navigation";
import Service from "./Service";
import Gallery from "./Gallery.js";

function ChineseHelper() {
  const [user, setUser] = useState(null)
  console.log(user)
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    console.log(token);

    axios
      .get("http://localhost:8080/user/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({data}) => {
        setUser(data)
      });
  }, []);

  if (!user) {
    return <div>loading...</div>
  }

  return (
    <div>
      <Navigation></Navigation>
      <h1>欢迎您 志愿者</h1>
      <h2>{user.username}</h2>
      <p className="welcome-text">非常感谢您愿意抽出您宝贵的时间来帮助新移民们，我们的社区为您感到骄傲</p>
      <Gallery></Gallery>
    </div>
  );
}

export default ChineseHelper;
