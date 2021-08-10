import React, { useState } from 'react'
import { Route, Switch, Link } from "react-router-dom";

import Header from "../Header/Header";
import Search from "../Search/Search";
import CardList from "../CardList/CardList";
import contacts from "../../contacts";
import './App.css';
import AddContact from '../AddContact/AddContact';
import ViewContact from '../ViewContact/ViewContact';

function App() {
  
  const addContact = (e) => { // use this to handle useEffect() for POST?
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

        <Header addContact={addContact} />

        <Switch>
          <Route path="/add-contact">
            <AddContact />
          </Route>
          <Route path="/view-contact">
            <ViewContact />
          </Route>
          <Route path="/">
            <Search onSearch={setSearchInput} />
            <CardList searchTerm={searchInput} contacts={sortedContacts} />
          </Route>
        </Switch>

      </div>
  );
}

export default App;
