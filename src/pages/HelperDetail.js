import { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";
import "./HelperDetail.scss"
const url = "http://localhost:8080";
function HelperDetail() {
  const [helperDetail, setHelperDetail] = useState(null);
  useEffect(() => {
    axios.get(`${url}/helper`).then((response) => {
        console.log(response.data)
      setHelperDetail(response.data);
    });
  }, []);
  if (!helperDetail) {
    return <>...Loading...</>;
  }
  return (
    <>
      <Navigation></Navigation>
      <div className="helper">
        <p className="helper-intro">
          Meet up with people in your neighbourhood who are willing to help.
          Volunteer who lives closer to you can help you more
        </p>
        <div className="helper-title">
          
          <p>Volunteer Region</p>
          <p>Volunteer Contact</p>
          <p>Volunteer Name</p>
        </div>
        <div className="helper-div">
        <ul className="helper-list">
          {helperDetail.map((helper) => {
            return (
              <>
              <li className="helper-element">
                <p className="helper-region">{helper.helperregion}</p>    
              </li>
              
              </>
            );
          })}
          
        </ul>
        <ul className="helper-list">
          {helperDetail.map((helper) => {
            return (
              <>
             
              <li className="helper-element">
              <p className="helper-contact">{helper.helpercontact}</p>
              </li>
              </>
            );
          })}
          
        </ul>
        <ul className="helper-list">
          {helperDetail.map((helper) => {
            return (
              <>
             
              <li className="helper-element">
              <p className="helper-name">{helper.name}</p>
              </li>
              </>
            );
          })}
          
        </ul>
        </div>
      </div>
    </>
  );
}
export default HelperDetail;
