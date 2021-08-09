import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { uuid } from 'uuidv4';
import './App.css';

// Import application components
import Header from './header';
import AddContact from './addContact';
import ContactList from './contactList';
import ContactDetails from './contactDetails';

function App() {

  // Data Storage Key
  const LOCAL_STORAGE_KEY = 'contacts';

  // State - Reach Hooks
  const [contacts, setContacts] = useState([]);

  // Adding the contact details to state via add contact component
  const addContactHandler = (contact) => {
    setContacts([...contacts, {id : uuid(), ...contact}]);
  };

  // Removing the contact details from state via add contact list component
  const removeContactHandler = (id) => {
    const newContactsList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactsList);
  };

  // Get
  useEffect(() => {
    const retrivedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrivedContacts) setContacts(retrivedContacts)
  },[]);

  // Store
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);

  return (
    <div>
        <Router>
          <Header />
          <Switch>
            <Route 
              path='/' 
              exact 
              render={(props)=>(
                <ContactList 
                  {...props} 
                  contacts={contacts} 
                  removeContactHandler={removeContactHandler}
                />
              )}
            />
            <Route 
              path='/add'  
              render={(props)=>(
                <AddContact 
                  {...props} 
                  addContactHandler={addContactHandler}
                />
              )}
            />
            <Route path='/details/:id' component={ContactDetails}/>
          </Switch>
        </Router>
     </div>
  );
}

export default App;