import React from 'react'
import Foooterlogo from './Imgs/Foooterlogo.svg'

const Footer = () => {
  return (
    <>
    <div ClassName="footer" id='footer'>
  <div ClassName="area" id='area'>
    <div ClassName="left2" id='left2'>
      <img src={Foooterlogo} alt=""/>
      <h1>CODE HELP</h1>
      <h2>The Ultimate Guide To Ace SDE Interviews</h2>
      
    </div>
    <div ClassName="midsections" id='midsections'>
      <div ClassName="middleone" id='middleone'>
        <h2>Menu</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cources</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div ClassName="middletwo" id='middletwo'>
        <h2>Services</h2>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Refund & Cancleation policy</li>
        </ul>
      </div>
    </div>
    <div ClassName="right2" id='right2'>
      <h2>GET IN TOUCH</h2>
      <h3>Email: support@codehelp.in</h3>
    </div>
  </div>
  <div ClassName="copyright" id='copyright'>
    <h5>Copyright © 2023 Sorting Code Help Technologies Pvt Ltd. All Rights Reserved.</h5>
  </div>
</div>
    
    </>
  )
}

export default Footer