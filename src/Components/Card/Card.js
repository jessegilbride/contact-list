// import React from 'react'

function Card(props) {
  const contact = props.contactDetails
  const phoneNumberFormatting = (phone) => {
    if (typeof phone === 'number' && phone.toString().length === 10) {
      const first = phone.toString().slice(0,3)
      const second = phone.toString().slice(3,6)
      const third = phone.toString().slice(6)
      return `(${first}) ${second}-${third}`
    } else {
      return phone
    }
  }
  return (
    <div className='Card'>
      <div className='card-left'>
        <div className='contact-avatar'>
          <img src={contact.avatar} alt='' className='avatar' />
        </div>
        <div className='contact-info'>
          <div>
            <span className='lastName'>{contact.lastName}</span>, <span className='firstName'>{contact.firstName}</span>
          </div>
          <div>
            <span className='phone'>{phoneNumberFormatting(contact.phone)}</span>
          </div>
          <div>
            <span className='email'>{contact.email}</span>
          </div>
        </div>
      </div>
      <div className='card-right'>
        <i className="fas fa-comment-dots"></i>
      </div>
    </div>
  )
}

export default Card
