import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navigation from "./Navigation";
import Service from "./Service";
import Gallery from "./Gallery.js";
import "./Employer.scss";
import { Modal } from "@mui/material";
function Employer() {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  function handlelogout() {
    localStorage.removeItem("authToken");
    navigate("/");
  }
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

  return (
    <div>
      <div className="grouper-div">
        <Navigation></Navigation>
        <h1 className="welcome-title"> Hello Employer,{user.username}</h1>
        <p className="welcome-text">
          Thank you for offering jobs to new immigrants.We understand that you
          many have certain conerns. We will do our best to prove that new
          immigrants can be a powerful work force. Your offer can change their
          life.
        </p>
        <div className="welcome-button-div">
          <button className="welcome-button" onClick={handleOpen}>
            Log Out
          </button>
          <Modal open={open} onClose={handleClose} className="modal">
            <div className="modal-div">
              <h1 className="modal__title">Confirming Logout</h1>

              <div className="button-style">
                <div className="modal-button__div">
                  <button className="modal-cancel" onClick={handleClose}>
                    Cancel
                  </button>
                  <button className="modal-delete" onClick={handlelogout}>
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
      <Service></Service>
      <Gallery></Gallery>
    </div>
  );
}

export default Employer;
