import { useEffect, useState } from "react"
import axios from "axios"
import Navigation from "./Navigation";
const url = "http://localhost:8080";
function ChineseEmployerDetail(){
    const[employerDetail,setEmployerDetail]=useState(null)
    useEffect(()=>{
axios.get(`${url}/employer`)
.then((response)=>{
setEmployerDetail(response)
})
    },[])
if(!employerDetail){
    return<>...Loading...</>
}
return(
    <>
    <Navigation></Navigation>
    <div className="employer">
        <p className="employer-intro">Connect with employers who are willing to hire Chinese immigrants directly</p>
        <p className="employer-intro">Contact now and be ahead of other competitors</p>
   <ul className="employer-list">
   {employerDetail.map((employer)=>{
return(
    <li>
        <p>Company Name</p>
         <p className="employer-name">{employer.name}</p>
         <p>Company Address</p>
        <p className="employer-location">{employer.location}</p>
        <p>Company Description</p>
        <p className="employer-description">{employer.description}</p>
        <p>Company Contact</p>
        <p className="employer-contact">{employer.contact}</p>
    </li>
)
   })

   }
   </ul>
    </div>
    </>
)
}
export default ChineseEmployerDetail