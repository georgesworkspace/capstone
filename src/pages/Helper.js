import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Helper() {
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
      <h1>Hello Helper</h1>
      <h2>{user.username}</h2>
      <h3>region: {user.helper.helperregion}</h3>
      <h3>contact: {user.helper.helpercontact}</h3>
    </div>
  );
}

export default Helper;
