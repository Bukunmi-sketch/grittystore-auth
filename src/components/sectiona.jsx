import React from 'react';
import first from '../Images/14.jpg'


function Sectiona({categories}) {
    const imagestyle={
       
        borderRadius:"4px",
        // height:"150px",
        border:"2px solid white"
        
     }
   // const linkurl="http://localhost/New/Grittystore/Images/category-img/";
    const linkurl="http://grittystore.onlinewebshop.net/endpoint/Images/category-img/";

    return ( 
        <>
        <section className="sectiona" style={{border:"1px solid transparent"}}>
           

           
            {/* <div className="boxa"> 
                 <div className="boxa-content">
                     <h1 className="Natural"> Buy Casual Shoes </h1>
                     <p>Are you tired of waiting for your salary before eating and making excellent Meals? <br />
                     Tired of constant market stress and delivery prices? If yes <br />
                     Afrimama is here for you .You can <span className='spanbold'> Buy Now,PAY LATER </span> & still enjoy free delivery </p>
                     <a href='#product'><button className='buy-now' > Shop Now</button> </a> 
                 </div>
            </div> */}

            <div className="top-content" >
                <h1 className="Natural"> FIND YOUR NEXT FAVORITE SHOE </h1>
                <p> Shop Our Collection Now </p>
                <a href='#product'><button className='buy-now' > Shop Now</button> </a> 
        
            </div>             
        </section>

        <section className="second-section">
             <h3> We Serve You The Best Product At Best Prices </h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam molestias officia commodi. Nemo maiores culpa saepe aut, debitis sunt aspernatur vel error repellendus suscipit, necessitatibus expedita? Repellendus mollitia a totam.</p>

             <div className="flex-container">
                 { categories.map( (category) =>
                 <div className="box-container">
                    <div className="box">
                         <img src={`${linkurl}${category.category_picture}`} className='box' alt={ category.product_picture } style={ imagestyle } />
                         <p style={{zIndex:"10", color:"blue",fontWeight:"bold", fontFamily:"DM sans"}}>{category.name}</p>
                    {/* <p>lorem ipsum dolor sit amet,</p> */}
                </div> 
                </div>
                 )         
              }
             </div>
        </section>

        </>
     );
}

export default Sectiona;