import { Link } from "react-router-dom";
import logoImage from "../assets/Logo.jpg";
import "./Navigation.scss";
function Navigation(){

    const token = localStorage.getItem("authToken")

    return(
        <>
        <div className="Nav">
            
    <Link to="/helperdetail" className="Nav-helper">Projects</Link>
    <Link to='/' className="Nav-home">Contact</Link>
    <Link to='/chinese' className="Chinese"></Link>
    <Link to='/' className="English">English</Link>

    
         </div>   
        </>
    )
}
export default Navigation