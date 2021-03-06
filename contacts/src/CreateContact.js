import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import serializeForm from 'form-serialize'
import PropTypes from 'prop-types'

class CreateContact extends Component {
	handleSubmit  = (e) => {
		e.preventDefault()
		const values = serializeForm(e.target, {hash: true})

		this.props.onCreateContact(values)
	}

  render() {
    return (
    <div>
      <Link className='close-create-contact' to = '/'>Close</Link>
      <form className='create-contact-form' onSubmit={this.handleSubmit}>
      	<div className='create-contact-details'>
      		<input type='text' name='name' placeholder='Name'/>
      		<input type='text' name='email' placeholder='Email'/>
      		<button>Add Contact</button>
      	</div>
      </form>
    </div>
    )
  }
}

CreateContact.propTypes={
	onCreateContact: PropTypes.func.isRequired
}

export default CreateContact