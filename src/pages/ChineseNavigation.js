import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logoImage from "../assets/Logo.jpg"
import "./Navigation.scss";
function ChineseNavigation(){
    return(
        <>
        <div className="Nav">
            <Link to='/chinese' className="Nav-home">主页</Link>
    <Link to="/helperdetailchinese" className="Nav-helper">志愿者</Link>
    <Link to='/employerdetailchinese' className="Nav-employer">雇主</Link>
    <img  className='Navimage' src={logoImage}alt="image"/>
    <Link to='/chinese' className="Chinese">中文</Link>
    <Link to='/' className="English">English</Link>

    
         </div>   
        </>
    )
}
export default ChineseNavigation