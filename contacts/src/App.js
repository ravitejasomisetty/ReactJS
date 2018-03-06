import React, { Component } from 'react';
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact'
import {Route} from 'react-router'

class App extends Component {

  state = {contacts : []}

  componentDidMount(){
    ContactsAPI.getAll().then(contacts => {
      this.setState({contacts: contacts})
    })
  }

removeContact = (contact) => {
  ContactsAPI.remove(contact)
  this.setState((state) => {
    return {contacts: state.contacts.filter((c) => c.id !== contact.id)
  }})
}

  render() {
    return (
      <div>
      <Route exact path='/' render={() => (
        <ListContacts contacts = {this.state.contacts}
        onDeleteContact = {this.removeContact} />)}/>
      <Route path='/create' component={CreateContact}/>
      </div>
    )
  }
}

export default App;