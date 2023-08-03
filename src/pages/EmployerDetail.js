import { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";
import "./EmployerDetail.scss"
const url = "http://localhost:8080";
function EmployerDetail() {
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
      <Navigation></Navigation>
      <div className="employer">
        <p className="employer-intro">
          Connect with employers who are willing to hire Chinese immigrants
          directly
        </p>
        <p className="employer-intro">
          Contact now and be ahead of other competitors
        </p>
        <div className="employer-title">
          <p>Employer Name</p>
          <p>Employer Location</p>
          <p>Employer Contact</p>
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
export default EmployerDetail;
