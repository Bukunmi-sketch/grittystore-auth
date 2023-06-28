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
                            <span> <FaHome/> </span>
                            <h3><b>Home </b> </h3>
                        </>
                    ) : (
                        <>
                            <span> <FaHome/> </span>
                            <h3>Home </h3>
                        </>
                    )}
                </Link>

                <Link to="/explore" class="menu-nav">
                    {location.pathname === "/explore" ? (
                        <>
                            <span> <FaSearch /> </span>
                            <h3>Search</h3>
                        </>
                    ) : (
                        <>
                            <span> <FaSearch /></span>
                            <h3>Search</h3>
                        </>
                    )}
                </Link>



                <Link to="/connect" class="menu-nav">
                    { location.pathname === "/connect" ? (
                        <>
                            <span>  <FaUserAlt />   </span>
                            <h3> <b>Connect </b></h3>
                        </>
                    ) : (
                        <>
                            <span> <FaUserAlt /> </span>
                            <h3> Connect </h3>
                        </>
                    )
                    }
                </Link>

                <Link to="/notification" class="menu-nav">
                    { location.pathname === "/notification" ? (
                        <>
                            <span> <FaBell/> </span>
                            <h3> <b>Notification </b></h3>
                        </>
                    ) : (
                        <>
                            <span> <FaBell/> </span>
                            <h3> Notification </h3>
                        </>
                    )
                    }
                </Link>

                <Link to="/message" class="menu-nav">
                    { location.pathname === "/message" ? (
                        <>
                            <span> <FaBell/> </span>
                            <h3> <b>Messages</b></h3>
                        </>
                    ) : (
                        <>
                            <span> <FaBell/></span>
                            <h3> Messages</h3>
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