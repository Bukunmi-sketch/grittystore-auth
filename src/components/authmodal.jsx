import React, { useState, useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useLocalStorage from '../hooks/uselocalstorage';
import Track from '../pages/track';
import Payment from '../pages/payment';
import Success from '../pages/success';
import { FaCartPlus,FaBars, FaTrash, FaHome, FaTeamspeak, FaInfo,FaShoppingBag, FaTimes, FaInfoCircle  } from "react-icons/fa";
import pica from '../Images/smallproduct.png'
import logo from '../Images/afrimamalogo.png'
import Klumpsuccess from '../pages/klumpsuccess';

function AuthModalBox( { onAuthModal, authModal, Loader, unLoader, onHideAuthModal, showRegisterPage, onShowRegisterPage, onShowLoginPage , setUserToken }) {
  const navigate = useNavigate();
  

  const [inputs, setinputs] =useLocalStorage("forms",{});
  const [confirmpay, setconfirmpay] = useState(false);
  const [Errormsg, setErrormsg] = useState("");
  const [localgov, setLga] = useState([]);
  const [buttonloading, setbuttonLoading] = useState(false);



  const options = ["", "Oyo", "Lagos", "Osun", "Ondo"];

  //handle the changes
  const handleChange = (event) => {
    // const name = event.target.name;
    // const value = event.target.value.charAt(0).toUpperCase()+ event.target.value.slice(1);
    // setinputs((values) => ({
    //   ...values, [name]: value,
    // }));


    const name = event.target.name;
    const value = event.target.value.charAt(0).toUpperCase()+ event.target.value.slice(1);
    
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

   // console.log(inputs);
    if (inputs.state == "Lagos") {
      setLga([]);
      setLga([
        "", "Agege", "Ajeromi-Ifelodun", "Alimosho", "Amuwo-Odofin", "Apapa", "Badagry", "Epe", "Eti-Osa", "Ibeju/Lekki", "Ifako-Ijaye", "Ikeja", "Ikorodu", "Kosofe", "Lagos Island", "Lagos Mainland", "Mushin", "Ojo", "Oshodi-Isolo", "Shomolu", "Surulere",
      ]);
    } else if (inputs.state == "Oyo") {
      setLga([]);
      setLga([
        "", "Afijio", "Akinyele", "Atiba", "Atigbo", "Egbeda", "Ibadan Central", "Ibadan North", "Ibadan North West", "Ibadan South East", "Ibadan South West", "Ibarapa Central", "Ibarapa East", "Ibarapa North", "Ido", "Irepo", "Iseyin", "Itesiwaju", "Iwajowa", "Kajola", "Lagelu Ogbomosho North", "Ogbomosho South", "Ogo Oluwa", "Olorunsogo", "Oluyole", "Ona-Ara", "Orelope", "Ori Ire", "Oyo East", "Oyo West", "Saki East", "Saki West", "Surulere"
       ]);
    } else if (inputs.state == "Osun") {
      setLga([]);
      setLga([
        "", "Aiyedade", "Aiyedire", "Atakumosa East", "Atakumosa West", "Boluwaduro", "Boripe", "Ede North", "Ede South", "Egbedore", "Ejigbo", "Ife Central", "Ife East", "Ife North", "Ife South", "Ifedayo", "Ifelodun", "Ila", "Ilesha East", "Ilesha West", "Irepodun", "Irewole", "Isokan", "Iwo", "Obokun", "Odo-Otin", "Ola-Oluwa", "Olorunda", "Oriade", "Orolu", "Osogbo"
      ]);
    }else if (inputs.state == "Ondo") {
      setLga([]);
      setLga([
        "", "Akoko North East", "Akoko North West", "Akoko South Akure East", "Akoko South West", "Akure North", "Akure South", "Ese-Odo", "Idanre", "Ifedore", "Ilaje", "Ile-Oluji", "Okeigbo", "Irele", "Odigbo", "Okitipupa", "Ondo East", "Ondo West", "Ose", "Owo"
      ]);

    }
    console.log(inputs);
    // e.g {name:"yourInputname", email: "yourinputEmail", mobile:"yourInputMobile"}
  };

  //when button is submitted
  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    Loader();

  
    //console.log(inputs);

    const API = "http://localhost/New/Grittystore/Api/registerEmailAccount.php";

    axios
      .post(API, inputs, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
      //    setOrders(response.data);
         console.log(response.data);
           if(response.data.status !== 500){
            navigate(`/page/${response.data.userid} `);
            onClear();
            onUnShow();
            unLoader();
           }else{
             setErrormsg(response.data.message);
             unLoader();
           }        
        }
      })
      .catch(function (error) {
        console.log("errorrrr", error);
        unLoader();
      });
  };


  //when button is submitted
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    setbuttonLoading(true);

    const name = event.target.name;
    const value = event.target.value;
    console.log(addedcart.toString());
    setinputs((values) => ({
      ...values,
      [name]: value,
    }));
    //console.log(inputs);

    const API = "http://localhost/New/Grittystore/Api/LoginAccount.php";

    axios
      .post(API, inputs, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
      //    setOrders(response.data);
         console.log(response.data);
           if(response.data.status !== 500){
            navigate(`/home/${response.data.userid} `);
            onClear();
            onUnShow();
            setbuttonLoading(false);
           }else{
             setErrormsg(response.data.message);
             setbuttonLoading(false);
           }        
        }
      })
      .catch(function (error) {
        console.log("errorrrr", error);
        setbuttonLoading(false); 
      });
  };


  return (
    <>
        {/* <Routes>
        <Route
          path="/pay/:id"
          element={<Payment Loader={Loader} unLoader={unLoader} />}
        />
        <Route
          path="/track/:id"
          element={<Track Loader={Loader} unLoader={unLoader} />}
        />
        <Route
          path="/success/:id"
          element={<Success Loader={Loader} unLoader={unLoader} />}
        />
        <Route path="/complete/" element={<Klumpsuccess />} />
      </Routes>
*/}
      {authModal.show  ? (
        <div className="navright" style={{ width: authModal.width, height:"100vh", justifyContent:"center", alignItems:"center", display:"flex", flexDirection:"column" }}>

      <div className="times">
            <span> <FaTimes onClick={() => onHideAuthModal()} className="icons" style={{  marginTop: "5px",  marginLeft: "90%",  fontSize: "1.2em", }} /> </span>
          </div>

          <div className="items">
            {/*  first box */}
            <div className="checkout-first-box">
              <ul>
                <li><img src={logo} alt="afrimama" className="footer-logo" /> </li>
                <li> <p> Signup or Login get access to your bought items </p> </li>
              </ul>
            </div>
            <div className="subtotal-container">
                 
                  <div className="form">
                    
                        <div className="form-container">
                      
                         
                          { showRegisterPage ? (  //SIGNUP PAGE
                            <>
                             <p className="contact-info"> Welcome, to Grittystore</p>
                          <form onSubmit={handleRegisterSubmit}>   
                          <div className="errorinfo"></div>
                          <div className="flexnameboxa">
                            <div className="namebox">
                              <label htmlFor="Name">FirstName: </label>
                              <input type="text" name="firstname" value={inputs.firstname || ""} onChange={handleChange} />
                            </div>

                            <div className="namebox">
                              <label htmlFor="Name">LastName: </label>
                              <input type="text" name="lastname" value={inputs.lastname || ""} onChange={handleChange} />
                            </div>
                          </div>

                          <div className="flexnameboxb">
                            <div className="namebox">
                              <label htmlFor="address">State </label>
                              <select name="state" onChange={handleChange} >
                                {options.map((option) => ( <option key={option} value={option} onChange={handleChange} > {option} </option> ))}
                              </select>
                            </div>

                            <div className="namebox">
                              <label htmlFor="email">Email Address</label>
                              <input type="email" name="email" value={inputs.email || ""} onChange={handleChange} />
                            </div>
                          </div>

                          <div className="namebox">
                              <label htmlFor="address">Local Government </label>
                              <select name="lga" onChange={handleChange} >
                                {localgov.map((lga) => ( <option key={lga} value={lga} onChange={handleChange} > {lga} </option> ))}
                              </select>
                            </div>
                          
{/* 
                          <div className="flexnameboxb">
                            <div className="namebox">
                              <label htmlFor="phono_no">Phone No</label>
                              <input type="number" name="phone" value={inputs.phone || ""} onChange={handleChange} />
                            </div>

                            <div className="namebox">
                              <label htmlFor="address">Local Government </label>
                              <select name="lga" onChange={handleChange} >
                                {localgov.map((lga) => ( <option key={lga} value={lga} onChange={handleChange} > {lga} </option> ))}
                              </select>
                            </div>
                          </div> */}

                          <div className="namebox">
                            <label htmlFor="address"> Password </label>
                            <input type="text" name="password" value={inputs.password || ""} onChange={handleChange} />
                          </div>

                         
                          <div className="namebox">
                            <label htmlFor="address"> Confirm Password </label>
                            <input type="text" name="confirmpass" value={inputs.confirmpass || ""} onChange={handleChange} />
                          </div>

                          

                          <div className="namebox">
                           
                             <div style={{ color: "#FF6600" }}> {Errormsg} </div>  
                             <button type="submit" className="checkout-btn">Sign up  </button>                       
                          </div>

                          <div className="have-acount">Already have an account ?  <span onClick={onShowLoginPage} style={{fontWeight:"400"}}>Log in </span> </div>
                         </form>
                          </> 
                          ) : (   //LOGIN PAGE
                          <>
                          <p className="contact-info">Login, to Grittystore</p>
                          <form onSubmit={handleLoginSubmit}>
                           <div className="namebox">
                            <label htmlFor="address">Email or  Mobile No </label>
                            <input type="text" name="uniqueid" value={inputs.uniqueid || ""} onChange={handleChange} />
                          </div>

                         
                          <div className="namebox">
                            <label htmlFor="address">Password</label>
                            <input type="text" name="referral" value={inputs.referral || ""} onChange={handleChange} />
                          </div>
      
                          <div className="namebox">
                    
                             <div style={{ color: "#FF6600" }}> {Errormsg} </div>  
                             <button type="submit" className="checkout-btn"> {buttonloading ? ( <div class="loader"></div> ) : (<span>Login</span>) } </button>                       
                          </div>

                           <div className="have-acount"> New User ?  <span onClick={onShowRegisterPage} style={{fontWeight:"400"}}> Sign up </span> </div>
                           </form>
                          </>
                          ) }
                        </div>
                   
                  </div> 
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
 
 export default AuthModalBox;