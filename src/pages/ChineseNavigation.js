import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logoImage from "../assets/Logo.jpg"
function ChineseNavigation(){
    return(
        <>
        <div className="Nav">
            <Link to='/'>主页</Link>
    <Link to="/helperdetail">志愿者</Link>
    <Link to='/employerdetail'>雇主</Link>
    <img  className='Navimage' src={logoImage}alt="image"/>
    <Link to='/chinese'>中文</Link>
    <Link to='/'>English</Link>

    
         </div>   
        </>
    )
}
export default ChineseNavigation