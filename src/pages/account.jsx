import React from 'react';
import Homeitems from '../components/item';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomeHeader from '../components/homeheader';
import MobileNav from '../components/mobilenav';
import Cookies from 'js-cookie'
import axios from 'axios';
import "../css/profile.css"
import DynamicHeader from '../components/dynamicHeader';
import '../css/form.css'



function Accounts() {


    const navigate = useNavigate();
    const [inputs, setinputs] = useState({});
    const [loading, setLoading] = useState(true);
    const [Errormsg, setErrormsg] = useState("");
    const [buttonloading, setbuttonLoading] = useState(false);
    const UserToken = Cookies.get('token');
    const [userAccountData, setUserAccountData] = useState([]);
    const [changePasswordModal, setchangePasswordModal] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
    
        setinputs((values) => ({
          ...values,
          [name]: value,
          // "firstname":"",
          // "lastname":"",
          // "email":"",
          // "lga":"",
          // "state":"",
          // "password":"",
          // "confirmpass":""
        }));
    
        console.log(inputs);
        // e.g {name:"yourInputname", email: "yourinputEmail", mobile:"yourInputMobile"}
      };

      const handleChangePassword =()=>{
        console.log(inputs);
      }




    useEffect(() => {
        // Fetch user account details
        async function getUserAccountDetails() {
            try {
                const API = `http://localhost/New/Grittystore/Api/userAccount.php`;
                const response = await axios.get(API, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${UserToken}`,
                    },
                });
                console.log('usersdata', response.data)
                console.log('usersResponseStatus', response.status)
                console.log('usersStatusText', response.statusText)
                setUserAccountData(response.data[0]); // Store fetched data in state
                setLoading(false); // Update loading state
            } catch (error) {
                console.log(error);
                if (error.response.status == 401 || error.response.status == "405") {
                    Cookies.remove("token")
                    navigate('/');
                } else if (error.response.statusText == "Unauthorized" && error.response.data == "Unauthorized key: Expired token") {
                    Cookies.remove("token")
                    navigate('/');
                }
                //

                console.log('usersmessage', error.message)
                // console.log('userserrorStatus',error.response.status)
                // console.log('usersStatusText',error.response.statusText)
            }
        }

        // Check user token for navigation
        const userToken = Cookies.get('token');
        if (!userToken) {
            navigate('/');
        } else {
            getUserAccountDetails();
        }
    }, [UserToken, navigate]);

    if (loading) {
        return <div className="loader" style={{ margin: "50vh auto" }}></div>
    }
    // If page is not in loading state, display page.
    else {
        return (
            <div className="profile-container">
                <DynamicHeader title="Account" />
                {/* Render user account data or components here */}

               



                {userAccountData && (
                    <div style={{ marginTop: "70px" }}>
                        <div className='box'>
                            <div className="box-header">
                                <span><ion-icon name="cube-outline"></ion-icon> Purchases</span>
                                <span>View all Purchases</span>
                            </div>
                            <p>Name : {userAccountData.firstname} {userAccountData.lastname}</p>
                            <p>Email: {userAccountData.email}</p>
                            <p>Account Status: {userAccountData.accountStatus}</p>
                            <p> State : {userAccountData.state}</p>
                        </div>

                        <div className='box'>
                            <div className="box-header">
                                <span><ion-icon name="heart-outline"></ion-icon>  Wishlist</span>
                                <span> Manage lists</span>
                            </div>
                            <p> Joined: {userAccountData.reg_date}</p>
                            <p> Local Government: {userAccountData.country}</p>
                            <p> Total Items bought: {userAccountData.country}</p>
                            <p> Shipping Address: {userAccountData.country}</p>
                        </div>


                        <div className='box'>
                            <div className="box-header">
                                <span> <ion-icon name="card-outline"></ion-icon> Shipping Address & Payment Method </span>
                                <span> Manage</span>
                            </div>
                            <p> Joined: {userAccountData.reg_date}</p>
                            <p> Local Government: {userAccountData.country}</p>
                            <p> Total Items bought: {userAccountData.country}</p>
                            <p> Shipping Address: {userAccountData.country}</p>
                        </div>

                        <div className='box'>
                            <div className="box-header">
                                <span><ion-icon name="cog-outline"></ion-icon> Account Settings</span>
                            </div>
                            <div className="box-content" onClick={() => setchangePasswordModal(!changePasswordModal)}>
                                <p><ion-icon name="lock-open-outline"></ion-icon> Password & Personal Info</p>
                                <span>password, email , mobile & more</span>
                                <span><ion-icon name="chevron-forward-outline"></ion-icon></span>
                            </div>

                            <div className="box-content">
                                <p> <ion-icon name="mail-open-outline"></ion-icon> Communications</p>
                                <span>password, email , mobile & more</span>
                                <span><ion-icon name="chevron-forward-outline"></ion-icon></span>
                            </div>

                            <div className="box-content">
                                <p> <ion-icon name="storefront-outline"></ion-icon> Your Store </p>
                                <span>password, email , mobile & more</span>
                                <span><ion-icon name="chevron-forward-outline"></ion-icon></span>
                            </div>


                            { changePasswordModal && (
                                // <div className="modal-blur">
                                <div className="form" style={{ position: "absolute", zIndex:'200' }}>

                                <div className="form-container">
                            
                                    <p className="contact-info"> Change Password </p>
                                    <form onSubmit={handleChangePassword}>
                                        <div className="namebox">
                                            <label htmlFor="address">Email or  Mobile No </label>
                                            <input type="email" name="email" value={inputs.email || ""} onChange={handleChange} />
                                        </div>
                            
                            
                                        <div className="namebox">
                                            <label htmlFor="address">Password</label>
                                            <input type="password" name="password" value={inputs.password || ""} onChange={handleChange} />
                                        </div>
                            
                                        <div className="namebox">
                            
                                            <div style={{ color: "#FF6600" }}> {Errormsg} </div>
                                            <button type="submit" className="checkout-btn"> {buttonloading ? (<div class="loader"></div>) : (<span>Login</span>)} </button>
                                        </div>
                    
                                    </form>
                                </div>
                            </div>
                            //  </div>
                            ) }

                          
                        </div>

                        <div className='box'>
                            <div className="box-header">
                                <span>Profile</span>
                                {/* <span> Manage</span> */}
                            </div>
                            <p> Joined: {userAccountData.reg_date}</p>
                            <p> Local Government: {userAccountData.country}</p>
                            <p> Total Items bought: {userAccountData.country}</p>
                            <p> Shipping Address: {userAccountData.country}</p>
                        </div>


                        <div className='box'>
                            <div className="box-header">
                                <span><ion-icon name="chatbubbles-outline"></ion-icon>  Customer Service</span>
                                <span> More Options </span>
                              
                            </div>
                            <div className="box-content">
                                <p> Get Help fast </p>
                                <span><ion-icon name="chevron-forward-outline"></ion-icon></span>
                            </div>

                            <div className="box-content">
                                <p> Start a return </p>
                                <span><ion-icon name="chevron-forward-outline"></ion-icon></span>
                            </div>

                            <div className="box-content">
                                <p> Request a price adjustment</p>
                                <span><ion-icon name="chevron-forward-outline"></ion-icon></span>
                            </div>

                        </div>


                    </div>
                )}


            </div>
        );

    }
}

export default Accounts;