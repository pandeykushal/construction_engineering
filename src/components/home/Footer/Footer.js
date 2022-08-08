import React from 'react'
import './footer.css'
import { AiTwotonePhone ,AiTwotoneHome,AiTwotoneMail} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footermain">
    <div className="footerflexbox">
    <div className="flexbox1">
      <h2>Engineering Consulting</h2>
      <p>We the team of experts <br /> are there to help you</p>
      <p className='para'>Follow us on</p>
      <div className="footericon">
      <img  className='footerImage' src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-3-1.png" alt="" />
      <img className='footerImage' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="" />
      <img className='footerImage' src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" alt="" />
     <img className='footerImage' src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" alt="" />
      </div>
    </div>
    <div className="flexbox2 ">
    <h2>Useful Links</h2>
    <p>Our Official Blog</p>
    <p className='para'>Official Portal of Government of Nepal</p>
    <p className='para'>Department of Transport Management</p>
    <p className='para'>Rupandehi Municipality office</p>
    <p></p>
    </div>
    <div className="flexbox3">
    <h2>Contact</h2>
     <p><AiTwotonePhone className='footercall'style={{transform:"rotate(90deg)"}} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp; &nbsp; &nbsp;+977 9849263457  </p>
     <p> <AiTwotoneHome className='footerhome' />&nbsp; &nbsp; &nbsp;Shitalnagar, Devdaha-7  </p>
     <p><AiTwotoneMail className='footeremail' />&nbsp; &nbsp;&nbsp; &nbsp; info@neutroline.com   </p>
    </div>
    <div className="flexbox4  ">© 2022 Engineering Consultancy Pvt.Ltd. All Rights Reserved.</div>
    </div>
    </div>
  )
}

export default Footer