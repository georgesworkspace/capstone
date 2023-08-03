import { useEffect, useState } from "react";
import axios from "axios";
import ChineseNavigation from "./ChineseNavigation";
const url = "http://localhost:8080";
function ChineseHelperDetail() {
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
      <ChineseNavigation></ChineseNavigation>
      <div className="helper">
        <p className="helper-intro">
        与愿意帮助的附近居民见面。住得离你更近的志愿者可以为你提供更多帮助。
        </p>
        <div className="helper-title">
          
          <p>志愿者地区</p>
          <p>联系方式</p>
          <p>志愿者姓名</p>
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
export default ChineseHelperDetail;
