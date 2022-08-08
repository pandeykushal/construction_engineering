import React from 'react'
import './banner.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from "./image/banner.jpg"
import banner1 from "./image/banner1.jpg"
export const Banner = () => {
  return (
<>



<div className="bg-whiter">
{" "}

<div className="banner">

  <div className="row" style={{paddingTop:"90px"}}>
  <hr  className="line"   style={{width:"100%",color:"red",zIndex:"9999"}} />

  <div className="col-sm-6" style={{ paddingLeft: "5px" }}>
  
      <img
        className="img-fluid"
        src={banner1}
        alt="Service_Image"
        width="500px"
        // height="500px"
      />
    </div>
    <div className="col-sm-6">
           <h1
      className='Dis'  style={{ paddingLeft: "20px",paddingTop:"4rem" }}      >
        Best It Service Provider  & Engineering Consulting Firm 
             </h1>
          </div>

         
    
  </div>
</div>
</div>

</>

  )
}
export default Banner ;