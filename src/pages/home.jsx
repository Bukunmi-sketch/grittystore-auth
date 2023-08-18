import React from 'react';
import Homeitems from '../components/item';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaArrowCircleDown, FaArrowCircleRight, FaCartPlus } from "react-icons/fa";
import productChef from '../Images/productschef.png'

import Cookies from 'js-cookie'


function Home({ products, onAdd, onCheck, onSearch, searchterm, onShow, deny, message }) {
  const navigate = useNavigate();


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, [])


  useEffect(() => {
    const UserToken = Cookies.get('token');
    if (!UserToken) {
      navigate('/');
    }
  }, [navigate]);


  if (loading) {
    return <div class="loader" style={{ margin: "50vh auto" }}></div>
  }

  // If page is not in loading state, display page.
  else {

    return (
      <div className="home-container" style={{marginTop:"70px"}}>

        {/* <section className="product-section-img">
       
          <img src={productChef} alt=""  />
                   <div className="absolute-text">
                      <span>FREE DELIVERY</span>
                      <button>All Products</button> 
                   </div>
        </section> */}
        <div className="about">
          <input type="search" name="" id="" value={searchterm} placeholder="search..." onChange={(e) => onSearch(e.target.value)} />

        </div>


        <div className="userbox">

          {products.filter((product) => {
            if (searchterm == '') {
              return product;
            }
            else if ((product == '')) {
              { product === 0 && <div>Your cart is empty </div> }
            }


            else if (product.product_name.toLowerCase().includes(searchterm.toLowerCase()) || product.description.toLowerCase().includes(searchterm.toLowerCase())) {
              return product;
            }
            else {
              <button>{searchterm}</button>;
            }
          }).map((product, key) => (<Homeitems key={product.id} onShow={onShow} onAdd={onAdd} onCheck={onCheck} product={product} />))
          }

        </div>
        {message == "unable to fetch product, reload this page" ? (
          <div className="morebtn">
            <button className="more">  {message} </button>
          </div>
        )
          : (
            <div className="morebtn">
              <button onClick={() => { navigate("/products") }} className="more">    More Products  <FaArrowCircleRight />  </button>
            </div>
          )}


      </div>
    );

  }
}

export default Home;