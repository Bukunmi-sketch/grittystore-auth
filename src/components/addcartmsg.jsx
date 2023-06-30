import React from 'react'
import { FaCheck, FaMarker, FaTicketAlt } from 'react-icons/fa';


function Addmsg({message, hideMessage, msgdisplay}) {
    
    const font={
         fontFamily:"DM sans"
    }
    return ( 
        <div className="details-displayed" style={{ display: msgdisplay.display, background:"transparent" }}>

        <div className="details-content" style={{ backgroundColor:"#ccc", width:"160px" }}>
             <div className="modal-header " style={{ backgroundColor:"#000"}}>
                 <h2>Message</h2>
             </div>
            <div className="modal-content-p">
               <p>{message} <FaCheck/> </p>
            </div>
        </div>
    
     </div>


     );
}

export default Addmsg;