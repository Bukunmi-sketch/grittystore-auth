import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { FaCartPlus, FaBars, FaTimes, FaSearch, FaUser, FaUserCircle, FaUserAlt, FaRegUserCircle } from "react-icons/fa";
import pica from '../Images/smallproduct.png'
import logo from '../Images/afrimamalogo.png'
import cart from '../icon/add-cart.png'
import menu from '../icon/menu.png'


function Itemheader({ countCartitems, cartdisplay, onDisplay, onShow, onShowAuthModal, onUnDisplay, userToken, itemqty }) {

  const navigate = useNavigate();

  return (
    <>
      <header>
        <div className='bar-box'>
          {/* <FaBars className="bars" style={{ color: 'orangered', fontSize: '1.5em' }} onClick={() => onDisplay()} /> */}
          <ion-icon name="arrow-back-outline" style={{ height:'50px', weight:"30px"}} onClick={() => navigate(-1)}></ion-icon>
          {/* <img src={menu} alt="" style={ {height:'30px', weight:"30px"}} onClick={()=>onDisplay()}/> */}
        </div>

        <div className="otherside"  >

          <div className='cartlist' onClick={() => onShow()}>
          <ion-icon name="cart-outline" style={{ fontSize: '1.9em' }}></ion-icon>
            {countCartitems ? (<div className="count" onClick={() => onShow()} >  {countCartitems} </div>) : ('')}
          </div>

        </div>
      </header>


    </>
  );
}

export default Itemheader;