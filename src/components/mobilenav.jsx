import React from 'react';
import { Link,useLocation  } from 'react-router-dom';
import { FaCartPlus, FaBars, FaTimes, FaSearch, FaUser, FaUserCircle, FaUserAlt, FaRegUserCircle, FaHome, FaBell } from "react-icons/fa";
import '../css/mobile.css';



function MobileNav() {
    const location = useLocation();

    return (

        // < !------------------------BOTTOM NAV FOR MOBILE PHONES----------------- ---------------->

        <nav class="bottom">

            <div class="mobile-bottomnav">

                <Link to="/home" class="menu-nav" id="message-notifications">
                    {location.pathname === "/home" ? (
                        <>
                            <span> <ion-icon name="home" style={{ fontSize: '1.2em' }}></ion-icon> </span>
                            <h3><b>Home </b> </h3>
                        </>
                    ) : (
                        <>
                            <span> <ion-icon name="home-outline"  style={{ fontSize: '1.2em' }}></ion-icon> </span>
                            <h3>Home </h3>
                        </>
                    )}
                </Link>

                <Link to="/orders" class="menu-nav">
                    {location.pathname === "/orders" ? (
                        <>
                            <span> <ion-icon name="bag-check"  style={{ fontSize: '1.2em' }}></ion-icon> </span>
                            <h3> <b> Orders</b></h3>
                        </>
                    ) : (
                        <>
                            <span> <ion-icon name="bag-check-outline"  style={{ fontSize: '1.2em' }}></ion-icon> </span>
                            <h3>Orders</h3>
                        </>
                    )}
                </Link>



                {/* <Link to="/connect" class="menu-nav">
                    { location.pathname === "/connect" ? (
                        <>
                            <span>  <FaUserAlt />   </span>
                            <h3> <b>Shops </b></h3>
                        </>
                    ) : (
                        <>
                            <span> <ion-icon name="person-add-outline"></ion-icon> </span>
                            <h3> Shops </h3>
                        </>
                    )
                    }
                </Link> */}

                <Link to="/notification" class="menu-nav">
                    { location.pathname === "/notification" ? (
                        <>
                            <span> <FaBell/> </span>
                            <h3> <b>Notifications </b></h3>
                        </>
                    ) : (
                        <>
                            <span><ion-icon name="notifications-outline"  style={{ fontSize: '1.2em' }}></ion-icon> </span>
                            <h3> Notifications </h3>
                        </>
                    )
                    }
                </Link>

                <Link to="/account" class="menu-nav">
                    { location.pathname === "/account" ? (
                        <>
                            <span> <ion-icon name="person-add" style={{ fontSize: '1.2em' }} ></ion-icon> </span>
                            <h3> <b>Account</b></h3>
                        </>
                    ) : (
                        <>
                            <span> <ion-icon name="person-add-outline" style={{ fontSize: '1.2em' }} ></ion-icon></span>
                            <h3> Account</h3>
                        </>
                    )
                    }
                </Link>

              
              
              

        </div>
        </nav >
        // < !------------------------END OF BOTTOM NAV FOR MOBILE PHONES----------------- ---------------->
      );
}

export default MobileNav;