import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ChineseNavigation from "./ChineseNavigation.js";
import ChineseService from "./ChineseService.js";
import Gallery from "./Gallery.js";
import "./Employer.scss";
import { Modal } from "@mui/material";

function ChineseEmployer() {
  const [user, setUser] = useState(null);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  function handlelogout() {
    localStorage.removeItem("authToken");
    navigate("/chinese");
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
        <ChineseNavigation></ChineseNavigation>
        <h1 className="welcome-title"> 欢迎雇主,{user.username}</h1>
        <p className="welcome-text">
         
谢谢您为新移民提供工作机会。我们了解您可能有一些顾虑。我们会尽力证明新移民可以成为一支强大的劳动力。您的提供可以改变他们的生活。
        </p>
        <div className="welcome-button-div">
          <button className="welcome-button" onClick={handleOpen}>
            退出登陆
          </button>
          <Modal open={open} onClose={handleClose} className="modal">
            <div className="modal-div">
              <h1 className="modal__title">确认退出</h1>

              <div className="button-style">
                <div className="modal-button__div">
                  <button className="modal-cancel" onClick={handleClose}>
                    取消
                  </button>
                  <button className="modal-delete" onClick={handlelogout}>
                    确认
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
      <ChineseService></ChineseService>
      <Gallery></Gallery>
    </div>
  );
}

export default ChineseEmployer;
