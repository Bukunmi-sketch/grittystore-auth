import React from 'react';
import Homeitems from '../components/item';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomeHeader from '../components/homeheader';
import MobileNav from '../components/mobilenav';
import Cookies from 'js-cookie'
import axios from 'axios';
import DynamicHeader from '../components/dynamicHeader';



function Accounts() {


    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const UserToken = Cookies.get('token');
    const [userAccountData, setUserAccountData] = useState([]);

        useEffect(() => {
            setTimeout(() => setLoading(false), 2000);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, []);

    //     useEffect(() => {
    //         const UserToken = Cookies.get('token');
    //         if (!UserToken) {
    //           navigate('/');
    //         }
    //       }, [navigate]);


    //    // console.log("token", UserToken);
    //    async function getUserAccountDetails() {
    //     try {
    //       // const API_LINK = "http://localhost/New/Grittystore/Api/getCategories.php";
    //       const API = `http://localhost/New/GrittyStore/Api/userAccount.php`;
    //       const categoryresponse = await axios.get(API,
    //         {
    //           headers: {
    //             "Content-Type": "application/json",
    //             Authorization: `Bearer ${UserToken}`
    //           }
    //         });
    //       console.log("lol categoryresponse", categoryresponse.data);
    //     } catch (error) {
    //         console.log(error);
    //       }
    //     }


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
            <>
                <DynamicHeader title="Account" />
                <div className="home-container" style={{ marginTop: "70px" }}>
                    {/* Render user account data or components here */}
                    {userAccountData && (
                        <div>
                            {/* Render user account details */}
                            <p>Name : {userAccountData.firstname} {userAccountData.lastname}</p>
                            <p>Email: {userAccountData.email}</p>
                            <p>Account Status: {userAccountData.accountStatus}</p>
                            <p> State : {userAccountData.state}</p>
                            <p> Joined: {userAccountData.reg_date}</p>
                            <p> Local Government: {userAccountData.country}</p>
                            {/* ... other account data */}
                        </div>
                    )}
                </div>

            </>
        );

    }
}

export default Accounts;