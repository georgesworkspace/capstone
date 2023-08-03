import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import ChineseJoinUs from "./ChineseJoinUs";
import ChineseNavigation from "./ChineseNavigation";
import Gallery from "./Gallery";
import ChineseService from "./ChineseService";
function ChineseImmigrant() {
  const [user, setUser] = useState(null);
  console.log(user);
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    console.log(token);

    axios
      .get("http://localhost:8080/user/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setUser(data);
      });
  }, []);

  if (!user) {
    return <div>loading...</div>;
  }

  if (user.user_type_id === 2) {
    return <Navigate to="/helper" />;
  }

  if (user.user_type_id === 3) {
    return <Navigate to="/employer" />;
  }

  return (
    <>
      <div>
        <ChineseNavigation></ChineseNavigation>
        <h1>您好 移民</h1>
        <h2>{user.username}</h2>
        <p className="welcome-text">
          感谢您访问我们的网站。我们致力于为新加拿大移民提供信息、支持和指导。无论您需要语言翻译的帮助还是在移民过程中的指引，我们都可以为您提供支持。请随意浏览我们的平台，发现所有可用的资源，帮助您顺利并成功地展开您的加拿大之旅。
        </p>
        <ChineseService></ChineseService>
        <Gallery></Gallery>
      </div>
    </>
  );
}

export default ChineseImmigrant;
