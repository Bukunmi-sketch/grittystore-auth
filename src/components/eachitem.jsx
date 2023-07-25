import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../css/eachitem.css";
import Itemheader from "./itemheader";

function EachItem({ onAdd, onRemove }) {
  const navigate = useNavigate();
  const { productid } = useParams();

  const [product, setProducts] = useState([]);

  const imagestyle = {
    width: "100%",
    borderRadius: "4px",
    height: "490px",
    border: "2px solid pink",
  };

  useEffect(() => {
    getProductDetails();
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log("productid", productid);
  }, []);

  console.log("productid", productid);

  async function getProductDetails() {
 //   const API = `http://localhost/New/Grittystore/Api/productdetails.php?id=${productid}`;
     const API=`http://afrimamafarms.onlinewebshop.net/endpoint/Api/productdetails.php?id=${productid}`;
    const res = await axios.get(API, {
      headers: {
        "content-type": "application/json",
      },
    });
    setProducts(res.data);
    console.log("product", res.data);
    console.log("product", product);
    // console.log("response", res);
  }

 // const linkurl = "http://localhost/New/Grittystore/Images/Product-img/";
   const linkurl = "http://afrimamafarms.onlinewebshop.net/endpoint/Images/product-img/";

  return (
    <>
      <div className="each-item-app">

        <div className="imagebox">
          <img
            src={`${linkurl}${product.product_picture}`}
            alt={product.product_picture}

          />
        </div>

        <div className="item-content-box">
          <div className="item-productname"> {product.product_name} </div>

          <div className="brand-price">
            <p className="product-brand">{product.brand}</p>
            <p className="price">${product.price} </p>
          </div>

          <div className="product-brand">Category : {product.category} </div>

          <div className="action-button">
            <button onClick={() => onAdd(product)} className="add"> + </button>
            <button onClick={() => onRemove(product)} className="remove" > - </button>
          </div>
          
          <div className="flex-col">
            <div className="quantity"> {product.qty} x {product.price} </div>
          </div>


          <div className="item-desc">
            <p> {product.description}</p>
          </div>

          
          <div className="item-action-box">
            <button type="button" onClick={() => onAdd(product)} className="item-addcartbtn" > Add to cart </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EachItem;
