import React, { useState } from 'react'
import Header from "../Header/Header";
import Search from "../Search/Search";
import CardList from "../CardList/CardList";
import contacts from "../../contacts";
import './App.css';

function App() {
  
  const addContact = (e) => {
    // future feature: show a modal with form to add a contact
    alert('add a contact')
  }

  let sortedContacts = contacts.sort((a, b) => {
    let personA = a.lastName
    let personB = b.lastName
    if (personA < personB) return -1
    if (personA > personB) return 1
    return 0
  })

  const [searchInput, setSearchInput] = useState('')

  return (
    <div className="App">
      <div className='fixed-top'>
        <Header addContact={addContact} />
        <Search onSearch={setSearchInput} />
      </div>
      <CardList searchTerm={searchInput} contacts={sortedContacts} />
    </div>
  );
}

export default App;
