
import React from 'react';
import logo from './logo-clg.png'
import { FaPeopleGroup } from "react-icons/fa6";
import { TbCashBanknoteFilled } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";
import { LuGalleryHorizontal } from "react-icons/lu";
import { CgNotes } from "react-icons/cg";
import { FaCircleQuestion } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdExit } from "react-icons/io";

const SideNav = () => {
  return (
    <div className="sidenav">
       <div className="logoName"> <img src={logo} className='logo-clg'/></div>
     <div className='StdMan'>
            <FaPeopleGroup style={{color:"white",fontSize:"35px"}}/>
         <a href="#home">Student Management</a></div>
     <div className='finance'>    
         <TbCashBanknoteFilled  style={{color:"white",fontSize:"35px"}} /> 
      <a href="#about">Financial Management</a></div>
      <div className='control'>    
         <IoSettings  style={{color:"white",fontSize:"35px"}} /> 
      <a href="#about">Financial Management</a></div>
      <div className='report'>    
         <LuGalleryHorizontal  style={{color:"white",fontSize:"35px"}} /> 
      <a href="#about">Report Delivery</a></div>
      <div className='attendance'>    
         <CgNotes  style={{color:"white",fontSize:"35px"}} /> 
      <a href="#about">attendance</a></div><br/>

      <span className='icon'>
        <a href=''><FaCircleQuestion style={{color:"white",fontSize:"20px"}}/></a>
        <a href=''><IoSettingsSharp style={{color:"white",fontSize:"20px"}}/>
        </a>
        <a href=''><IoMdExit style={{color:"white",fontSize:"20px"}}/></a>
      </span>
    </div>
    
  );
};

export default SideNav;
