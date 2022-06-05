import React from 'react'
// import logo from "./images/logo.png"

function Logo({width}) {
    let logoStyle = {
        
    }
  return (
    <div>
        <div className="logo-container">
            <div className="lines" style={{width:width}}>
                <img src="images/logo.png" alt="" className='logo-image'/>
            </div>
        </div>
    </div>
  )
}

export default Logo