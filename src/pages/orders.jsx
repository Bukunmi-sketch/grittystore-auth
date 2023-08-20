import React from 'react';
import Homeitems from '../components/item';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomeHeader from '../components/homeheader';
import MobileNav from '../components/mobilenav';
import Cookies from 'js-cookie'
import axios from 'axios';
import DynamicHeader from '../components/dynamicHeader';



function Orders() {


    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const UserToken = Cookies.get('token');
    const [userOrderData, setuserOrderData] = useState([]);

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
                    setuserOrderData({message:"not found"})
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
    }
    // If page is not in loading state, display page.
    else {
        return (
            <>
                <DynamicHeader title="Order" />
                <div className="home-container" style={{ marginTop: "70px" }}>
                    {/* Render user account data or components here */}
                    {userOrderData && (
                        <div>
                            {/* Render user account details */}
                            <p>Name : {userOrderData.message} {userOrderData.lastname}</p>
                            <p>Email: {userOrderData.email}</p>
                            <p>Account Status: {userOrderData.accountStatus}</p>
                            <p> State : {userOrderData.state}</p>
                            <p> Joined: {userOrderData.reg_date}</p>
                            <p> Local Government: {userOrderData.country}</p>
                            {/* ... other account data */}
                        </div>
                    )}
                </div>

            </>
        );

    }
}

export default Orders;