import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import EachItem from './eachitem';
import pica from '../Images/smallproduct.png'
import { motion, AnimatePresence } from "framer-motion";


function Homeitems( { product , onAdd ,onShow} ) {

    const imagestyle={
        width:'100%',
        borderRadius:"4px",
        height:"150px",
        border:"2px solid white"
        
     }
  
     const imagebox={
        border:"1px solid red"
     } 

 //const linkurl="http://localhost/New/Grittystore/Images/Product-img/";
 const linkurl="http://grittystore.onlinewebshop.net/endpoint/Images/product-img/";

    return ( 
      <AnimatePresence>
      <motion.div
          key="div"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}  className="each-user">
          
           <div className="content-box">
              <div className="imagebox" >
                 <img src={`${linkurl}${product.product_picture}`} alt={ product.product_picture } style={ imagestyle } />
              </div>
            </div>

            <div className='detailsbox'>
               <div className="productname"> { product.product_name} </div>  
           </div> 

               <div className="desc-box">
                    <p className="product-brand">{ product.brand }</p>
                    <p className="price">${ parseFloat(product.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }  </p>
               </div>
        
        <div className="cart-action-box">                            
            <button  type="button" onClick={ ()=>onAdd(product) }  className="addcartbtn" > Add to cart </button>          
            <Link to={`eachitem/${product.id}` } className="menu-item" >   <button type="button" className="justbtn" > view details  </button>  </Link>     
        </div>
        </motion.div>
        </AnimatePresence>
     );
}

export default Homeitems;