import { useEffect, useState } from "react";
import axios from "axios";
// import "./Profile.scss";

export default function Delete({ setIsUserLoggedIn }) {
  const [profileData, setProfileData] = useState(null);

  const logOut = () => {
    // log me out!
    sessionStorage.removeItem("authToken");
    setIsUserLoggedIn(false);
  };

  const token = sessionStorage.authToken;

  // use effect with callback function
  useEffect(() => {
    // get request to API /profile
    axios
      .delete("http://localhost:8080/helper/delete", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // put the returned data in state
        setProfileData(response.data);
      });
  }, [token]);

  if (!profileData) {
    return <>Loading...</>;
  }

  return (
    <main className="profile-page">
      <h2>Welcome back, {profileData.name}!</h2>

      <button onClick={logOut}>Log out</button>
    </main>
  );
}
