// import React from 'react'
import { Link, Route } from "react-router-dom";

function Header(props) {
  return (
    <div className='Header'>
      <div className="header-left">
        <i className="far fa-address-card"></i>
        <h1>Contacts</h1>
      </div>
      {/* <div className="header-right" onClick={e => props.addContact()}> */}
      <Link to='/add-contact' className='link'>
        <div className="header-right">
          <i className="fas fa-plus"></i>
        </div>
      </Link>
    </div>
  )
}

export default Header
