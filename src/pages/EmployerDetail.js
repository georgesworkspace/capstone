import { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";
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

  if(!localStorage.getItem('authToken')){
    return <div>You are not logged in.  Please go back and log in.</div>
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
        <ul className="employer-list">
          {employerDetail.map((employer) => {
            return (
              <li>
                <div>
                <p>Company Name</p>
                <p className="employer-name">{employer.companyname}</p>
                </div>
                <div>
                <p>Company Address</p>
                <p className="employer-location">{employer.companylocation}</p>
                </div>
                <div>
                <p>Company Description</p>
                <p className="employer-description">{employer.companydescription}</p>
                </div>
                <div>
                <p>Company Contact</p>
                <p className="employer-contact">{employer.companycontact}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
export default EmployerDetail;
