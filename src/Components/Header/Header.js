// import React from 'react'

function Header(props) {
  return (
    <div className='Header'>
      <div className="header-left">
        <i className="far fa-address-card"></i>
        <h1>Contacts</h1>
      </div>
      <div className="header-right" onClick={e => props.addContact()}>
        <i className="fas fa-plus"></i>
      </div>
    </div>
  )
}

export default Header
