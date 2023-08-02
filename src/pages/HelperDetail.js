import { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";
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
          Meet up with people in your neighbourhood who are willing to help
        </p>
        <ul className="helper-list">
          {helperDetail.map((helper) => {
            return (
              <li>
                <p>Volunteer Region</p>
                <p className="helper-region">{helper.helperregion}</p>
                <p>Volunteer Contact</p>
                <p className="helper-contact">{helper.helpercontact}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
export default HelperDetail;
