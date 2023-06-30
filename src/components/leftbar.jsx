import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { FaCartPlus,FaBars,  FaTimes, FaSearch, FaUser, FaUserCircle, FaUserAlt, FaRegUserCircle } from "react-icons/fa";
import pica from '../Images/smallproduct.png'
import logo from '../Images/afrimamalogo.png'

function Leftbar( { cartdisplay, onDisplay, onShow,  onUnDisplay, categories }) {

   const navigate= useNavigate();

     return ( 
         <div className="leftnav" >
                       {/* style={{ width: cartdisplay.width }} */}
                  <ul  className='leftnav-cont'>
                      <li className="closebar">
                        <ion-icon name="close-outline" onClick={()=>onUnDisplay()} className='icons'></ion-icon>
                      </li>      

                       <h3>Categories</h3>   
                       {  categories.map( (category) =>  <li> <Link to={`category/${category.name}` } className="menu-item" onClick={()=>onUnDisplay()}> {category.name} </Link>  </li>  )
                      
                      }  
                        <h3>Sections</h3>    
                        <li> <Link to='/' className="menu-item" onClick={()=>onUnDisplay()}> Shop </Link>  </li> 
                       
                       <li> <Link to='/product' className="menu-item" onClick={()=>onUnDisplay()} > Products </Link> </li>
                       <li> <Link to='/Team' className="menu-item"  onClick={()=>onUnDisplay() } > Contact us </Link>  </li>
                       <li> <Link to='/about' className="menu-item" onClick={()=>onUnDisplay()}> About us </Link>  </li>

                        <h3>Supports</h3>    
                        <li> <Link to='/' className="menu-item" onClick={()=>onUnDisplay()}> Home </Link>  </li> 
                       
                       <li> <Link to='/product' className="menu-item" onClick={()=>onUnDisplay()} > Brands  </Link> </li>
                       <li> <Link to='/Team' className="menu-item"  onClick={()=>onUnDisplay() } > Contact us </Link>  </li>
                       <li> <Link to='/about' className="menu-item" onClick={()=>onUnDisplay()}> About us </Link>  </li>    

               </ul>  
                               
         </div>      
      );
    }
 
 export default Leftbar;