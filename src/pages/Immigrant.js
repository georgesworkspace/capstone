import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Navigation from "./Navigation";
import Service from "./Service";
import Gallery from "./Gallery.js";

function Immigrant() {
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
        <Navigation></Navigation>
        <h1 className="welcome-title">Hello </h1>
        <h2 className="welcome-title">{user.username}</h2>
        <p className="welcome-text">
          Thank you for visiting our site. We are here to provide information,
          support, and guidance to new Canadian immigrants. Whether you need
          assistance with language translation or help navigating the
          immigration process, we've got you covered. Feel free to explore our
          platform and discover all the resources available to help make your
          Canadian journey smooth and successful.
        </p>
        <Service></Service>
        <Gallery></Gallery>
      </div>
    </>
  );
}

export default Immigrant;
