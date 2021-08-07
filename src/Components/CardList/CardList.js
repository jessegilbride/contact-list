// import { useState } from 'react'
import Card from "../Card/Card";

function CardList(props) {
  const filteredContacts = props.contacts.filter(contact => {
    const searchTerm = props.searchTerm.toLowerCase()
    return contact.lastName.toLowerCase().includes(searchTerm) || contact.firstName.toLowerCase().includes(searchTerm)
  })

  let counter = 0
  // const [contactKeyCount, updateContactKeyCount] = useState(0)
  let contactList = filteredContacts.map(contact => {
    // let contactKey = contactKeyCount
    // updateContactKeyCount(contactKey + 1)

    let contactKey = counter
    counter++
    return <Card contactDetails={contact} key={contactKey} />
  })

  return (
    <div className='CardList'>
      {contactList}
    </div>
  )
}
export default CardList
