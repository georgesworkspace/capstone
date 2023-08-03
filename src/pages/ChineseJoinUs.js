import { Link } from "react-router-dom";
function ChineseJoinUs() {
  return (
    <>
      <div className="join">
        <p className="join-title">Join Us</p>
        <p className="join-text">
          探索成为我们社区一员的所有好处！通过您的电子邮件注册，以接收我们的信息通讯、独家优惠，以及有关移民指南和支持的重要更新。
        </p>
        <div className="join-button-div">
          <Link to="/signup">
            <button className="join-button">加入我们</button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default ChineseJoinUs;
