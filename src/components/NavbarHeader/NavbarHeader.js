import React from 'react';
import "../NavbarHeader/NavbarHeader.scss";
import { FaFacebook } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { BiHomeCircle } from "react-icons/bi";
import { CgMenuGridR } from "react-icons/cg";
import { BiLogoMessenger } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";



function NavbarHeader(props) {
    return (
        <div className='container'>
        <div className="container-right">
             <FaFacebook className='right-icon' color='blue' size="40px"/>
             <div className="right">
             <IoSearchOutline/>
             <input type="text" placeholder='Tìm kiếm trên facebook' className='right-input'/>
             </div>
        </div>
        <div className="container-feed">
            <CiHome />
            <BiHomeCircle/>
            <MdOutlineOndemandVideo/>
            <HiOutlineUserGroup/>


        </div>
        <div className="container-left">
             <CgMenuGridR/>
             <div className="left-icon">
             <BiLogoMessenger/>
             <span className='leftIconBadge'>2</span>
             </div>
             <div className="left-icon">
             <IoIosNotifications/>
             <span className='leftIconBadge'>2</span>
             </div>
             <div className="left-icon">
             <FaUserCircle/>
             <span className='leftIconBadge'>2</span>
             </div>
             
        
        </div>
            
        </div>
    );
}

export default NavbarHeader;