import { useEffect, useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import axios from "axios";
import ChineseNavigation from "./ChineseNavigation.js";
import Gallery from "./Gallery.js";
import ChineseService from "./ChineseService";
import { Modal } from "@mui/material";
import "./Helper.scss"
function ChineseHelper() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  function handlelogout() {
    localStorage.removeItem("authToken");
    navigate("/chinese");
  }
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

  return (
    <div>
      <div className="grouper-div">
        <ChineseNavigation></ChineseNavigation>
        <h1 className="welcome-title">欢迎志愿者,{user.username}</h1>
        <p className="welcome-text">
        感谢您花时间帮助他人。您的帮助对新移民有着巨大的影响。由于您的帮助，他们能够获得更好的发展。有像您这样的人在我们的社区中是一种荣幸。
        </p>
        <div className="welcome-button-div">
          <button className="welcome-button" onClick={handleOpen}>
            退出登录
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
export default ChineseHelper;
