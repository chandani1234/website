import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from './../assets/bitcoin.png';
import image1 from './../assets/add-bitcoins.png';
import image2 from './../assets/buy-sell-bitcoins.png';

const Card1=() =>{
    return(
       <section class="card" style={{borderRadius:"25PX"}}>
          <div class="container">
  <div class="row">
    <div class="col-sm">
    <span class="icon">
          <img src={image}  style={{marginLeft:"-59px"}} />
          <div class="card-box-content">
              <h3 style={{fontWeight: "600",textTransform: "uppercase",fontSize: "18px"}}>Create an Account</h3>
              <p style={{marginRight: "48px"}}>Open an account with Dexdrone by fill the form for free.</p>
          </div>
          </span>
    </div>
    <div class="col-sm">
    <span class="icon">
          <img src={image1}  style={{marginLeft:"-59px"}} />
          <div class="card-box-content">
              <h3 style={{fontWeight: "600",textTransform: "uppercase",fontSize: "18px"}}>Create an Account</h3>
              <p style={{marginRight: "48px"}}>Open an account with Dexdrone by fill the form for free.</p>
          </div>
          </span>
    </div>
    <div class="col-sm">
    <span class="icon">
          <img src={image2}  style={{marginLeft:"-59px"}} />
          <div class="card-box-content">
              <h3 style={{fontWeight: "600",textTransform: "uppercase",fontSize: "18px"}}>Create an Account</h3>
              <p style={{marginRight: "48px"}}>Open an account with Dexdrone by fill the form for free.</p>
          </div>
          </span>
    </div>
  </div>
</div>
           
       </section>
    );
}
    export default Card1