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

    useEffect(() => {
        getUserOrderDetails();
        setTimeout(() => setLoading(false), 2000);
        window.scrollTo({ top: 0, behavior: "smooth" });
       // delayLoader();
    }, []);

    useEffect(() => {
        const UserToken = Cookies.get('token');
        if (!UserToken) {
          navigate('/');
        }
      }, [navigate]);
    

   // console.log("id", id);

    async function getUserOrderDetails() {

      //  const bearerToken = 'your-bearer-token';

        //const API = `http://localhost/websites/GrittyStore/Api/userOrders.php`;
        //const API = `http://api.afrimamafarms.com/Api/userOrders.php`;
      
        const res = await axios.get(API, {
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${UserToken}`
            },
        });
        setInputs(res.data);
        console.log("data", res.data);
        // console.log("response", res);
        //   console.log("orderstate", input);
    }


    if (loading) {
        return <div class="loader" style={{ margin: "50vh auto" }}></div>
    }

    // If page is not in loading state, display page.
    else {


        return (
           <>
           <DynamicHeader title="Orders" />
           <div className="home-container" style={{marginTop:"70px"}}>

            </div>
           
            </>
        );

    }
}

export default Orders;