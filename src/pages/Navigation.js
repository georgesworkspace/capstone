import { Link } from "react-router-dom";
import logoImage from "../assets/Logo.jpg";
import "./Navigation.scss";
function Navigation(){

    const token = localStorage.getItem("authToken")

    return(
        <>
        <div className="Nav">
            <Link to='/' className="Nav-home">Home</Link>
    <Link to="/helperdetail" className="Nav-helper">Volunteer</Link>
    <Link to='/employerdetail'className="Nav-employer">Employer</Link>
    <img  className='Navimage' src={logoImage}alt="image"/>
    <Link to='/chinese' className="Chinese">中文</Link>
    <Link to='/' className="English">English</Link>

    
         </div>   
        </>
    )
}
export default Navigation