import React from 'react';
import Homeitems from '../components/item';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomeHeader from '../components/homeheader';
import MobileNav from '../components/mobilenav';
import Cookies from 'js-cookie'
import axios from 'axios';
import "../css/order.css"
import DynamicHeader from '../components/dynamicHeader';



function Notifications() {


    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const UserToken = Cookies.get('token');
    const [userOrderData, setuserOrderData] = useState([]);
    const [message, setMessage] = useState("");

        useEffect(() => {
            setTimeout(() => setLoading(false), 2000);
            window.scrollTo({ top: 0, behavior: "smooth" });
           // delayLoader();
        }, []);

    useEffect(() => {
        // Fetch user account details
        async function getUserOrderDetails() {
            try {
                const API = `http://localhost/New/Grittystore/Api/userOrder.php`;
                const response = await axios.get(API, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${UserToken}`,
                    },
                });
                console.log('usersorder', response.data[0])
                console.log('usersResponseStatus', response.status)
                console.log('usersStatusText', response.statusText)
                setuserOrderData(response.data[0]); // Store fetched data in state
                setLoading(false); // Update loading state
            } catch (error) {
                console.log(error);
                if (error.response.status == 401 || error.response.status == "405") {
                    Cookies.remove("token")
                    navigate('/');
                } else if (error.response.statusText == "Unauthorized" && error.response.data == "Unauthorized key: Expired token") {
                    Cookies.remove("token")
                    navigate('/');
                } else if (error.response.statusText == "Not Found" && error.response.status == "404") {
                    setMessage("Oops! You have no Notifications at the Moment")
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
            getUserOrderDetails();
        }
    }, [UserToken, navigate]);

    if (loading) {
        return <div className="loader" style={{ margin: "50vh auto" }}></div>
    }else {
        return (
            <>
                <DynamicHeader title="Order" />
                <div className="home-container" style={{ marginTop: "70px",border:"1px solid red"  }}>
                    {/* Render user account data or components here */}
                    { message == "" ? (
                        <div>
                            {/* Render user account details */}
                            <p className='order-message'> {userOrderData.message} </p>
                            {/* ... other account data */}
                        </div>
                    ):(
                        <p className='order-message'> {message} </p>  
                    )}
                </div>

            </>
        );

    }
}

export default Notifications;