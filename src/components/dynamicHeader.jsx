import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { FaCartPlus, FaBars, FaTimes, FaSearch, FaUser, FaUserCircle, FaUserAlt, FaRegUserCircle } from "react-icons/fa";
import pica from '../Images/smallproduct.png'
import logo from '../Images/afrimamalogo.png'
import cart from '../icon/add-cart.png'
import menu from '../icon/menu.png'


function DynamicHeader({ title }) {

  const navigate = useNavigate();

  return (
    <>
      <header>
        <div className='bar-box'>
          {/* <FaBars className="bars" style={{ color: 'orangered', fontSize: '1.5em' }} onClick={() => onDisplay()} /> */}
          <img src={menu} alt="" style={ {height:'30px', weight:"30px"}} />
        </div>

        <h4 className='logo'>
         <span> {title}</span>  
        </h4>

        <div className="otherside"  >

          <div className='auth-box' style={{border:"red"}}>
            <FaUserCircle onClick={() => onShowAuthModal()}/>
             <ion-icon name="person-circle-outline" style={{ fontSize: '1.9em' }} ></ion-icon>
          </div>


          <div className='cartlist' onClick={() => onShow()}>
          
          </div>

        </div>
      </header>
    </>
  );
}

export default DynamicHeader;