import { useEffect, useState } from "react"
import axios from "axios"
import ChineseNavigation from "./ChineseNavigation";
import "./EmployerDetail.scss"
const url = "http://localhost:8080";
function ChineseEmployerDetail(){
    const [employerDetail, setEmployerDetail] = useState(null);
    useEffect(() => {
      axios.get(`${url}/employer`).then((response) => {
        setEmployerDetail(response.data);
      });
    }, []);
    if (!employerDetail) {
      return <>...Loading...</>;
    }
  
    if (!localStorage.getItem("authToken")) {
      return <div>You are not logged in. Please go back and log in.</div>;
    }
  
    return (
      <>
        <ChineseNavigation></ChineseNavigation>
        <div className="employer">
          <p className="employer-intro">
          与愿意直接雇佣中国移民的雇主联系
          </p>
          <p className="employer-intro">
          立即联系并领先其他竞争者
          </p>
          <div className="employer-title">
            <p>公司名称</p>
            <p>公司地址</p>
            <p>联系方式</p>
            {/* <p>Employer Description</p> */}
          </div>
          <div className="employer-div">
          <ul className="employer-list">
            {employerDetail.map((employer) => {
              return (
                <li className="employer-element">
                  <div>
                    
                    <p className="employer-name">{employer.companyname}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <ul className="employer-list">
            {employerDetail.map((employer) => {
              return (
                <li className="employer-element">
                  <div>
                    
                    <p className="employer-name">{employer.companylocation}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <ul className="employer-list">
            {employerDetail.map((employer) => {
              return (
                <li className="employer-element">
                  <div>
                   
                    <p className="employer-name">{employer.companycontact}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          {/* <ul className="employer-list">
            {employerDetail.map((employer) => {
              return (
                <li className="employer-element">
                  <div>
                    
                    <p className="employer-name">{employer.companydescription}</p>
                  </div>
                </li>
              );
            })}
          </ul> */}
          </div>
          
        </div>
      </>
    );
  }
export default ChineseEmployerDetail