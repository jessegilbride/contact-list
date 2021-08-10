// import { useEffect } from 'react'
import { useHistory } from "react-router-dom";

function AddContact() {

  const history = useHistory()
  
  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log('form submitted')
    history.push('/')
  }

  const handleFormCancellation = (e) => {
    // I don't think I want to prevent the 'reset', so not adding preventDefault()
    console.log('form cancelled')
    history.push('/')
  }

  return (
    <div>
      <h1>Create Contact</h1>
      <form onSubmit={e => handleFormSubmit(e)}>
        <div>
          <label htmlFor='lastName'></label>
          <input type='text' name='firstName' id='firstName' placeholder='First Name' /><br />
          <input type='text' name='lastName' id='lastName' placeholder='Last Name' required /><br />
          <span>(last name is required)</span>
        </div>
        <div>
          <label htmlFor='phone'></label>
          <input type='tel' name='phone' id='phone' />
        </div>
        <div>
          <label htmlFor='email'></label>
          <input type='email' name='email' id='email' />
        </div>
        <div>
          <label htmlFor='avatar'></label>
          <input type='file' name='avatar' id='avatar' accept="image/png, image/jpeg, image/jpg" />
        </div>
        <button type='reset' onClick={handleFormCancellation}>Cancel</button>
        <button type='submit'>Add </button>
      </form>
    </div>
  )
}

export default AddContact
