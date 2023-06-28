import React from 'react'
import corn from "../Images/cornmaize.png"
import cocoa from "../Images/cocoayam.png"
import rice from "../Images/rice.png"
import banana from "../Images/banana.png"
import leg from "../Images/leg.jpg"
import chat from "../Images/Chatscreenshot.png"
import egusi from "../Images/egusi.png"
import semoegusi from "../Images/semoegusi.png"
import chefs from "../Images/chefscooking.png"
import van from "../icon/free-delivery.png"
import secured from "../icon/credit-card(1).png"
import support from "../icon/24-hours-support.png"
import exchange from "../icon/exchange.png"


function Sectionb() {
    return ( 
        <>
         
        <section className="support-section">
             <h3> We Serve You The Best Product At Best Prices </h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam molestias officia commodi. Nemo maiores culpa saepe aut, debitis sunt aspernatur vel error repellendus suscipit, necessitatibus expedita? Repellendus mollitia a totam.</p>

             <div className="support-flex-container">
                <div className="boxa">
                    <img src={van} alt="" />
                    <p>Free delivery</p>
                    <p>lorem ipsum dolor sit amet,</p>
                </div>

                <div className="boxa">
                    <img src={secured} alt="" />
                    <p>Secured Payments</p>
                    <p>lorem ipsum dolor sit amet,</p>
                </div>

                <div className="boxa">
                    <img src={support} alt="" />
                    <p>24/7 Online Support</p>
                    <p>lorem ipsum dolor sit amet,</p>
                </div>

                <div className="boxa">
                    <img src={exchange} alt="" />
                    <p>exchange</p>
                    <p>lorem ipsum dolor sit amet,</p>
                </div>
             </div>
        </section>

        <section className="visit-us">
             <p>Visit Our Support Center</p>
             
        </section>
        </>
     );
}

export default Sectionb;