import React from 'react'

function Header() {
  return (
    <>
    <div className="header">
        <div className="nav">
            <img className='logo' src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" alt="" />
            <div className="div">
                <button className='button1'>English <img className='langbtn' src="https://cdn-icons-png.flaticon.com/512/58/58931.pnghttp://dmconsulting.net/wp-content/uploads/2017/09/Drop-down-arrow-icon-rounded.pnghttps://dmconsulting.net/wp-content/uploads/2017/09/Drop-down-arrow-icon-rounded.pnghttpshttps://static.vecteezy.com/system/resources/previews/019/858/503/original/dropdown-flat-color-outline-icon-free-png.png://cdn1.iconfinder.com/data/icons/pixel-perfect-at-16px-volume-2/16/5001-512.png" alt="" /></button>
                <button className='button2'>Sign In</button>
            </div>
        </div>
        <div className="header-content">
          <h1>Unlimited movies, TV shows and more</h1>
          <h3>Starts at ₹149. Cancel at any time.</h3>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <div class="input-container">
      <input type="email" placeholder="Email address" id="email-input" required/>
        <button class="cta-button" id="signup-button">Get Started</button>
    </div>
        </div>
    </div>
      
    </>
  )
}

export default Header
