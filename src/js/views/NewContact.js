import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import { useNavigate } from 'react-router-dom'

const NewContact = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  function createContact() {
    fetch("https://playground.4geeks.com/contact/agendas/SilviaMoraga/contacts", {
      method: "POST",
      body: JSON.stringify({
        "name": document.getElementById("name").value,
        "phone": document.getElementById("phone").value,
        "email": document.getElementById("email").value,
        "address": document.getElementById("address").value
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        actions.getAllContacts();
      })
      .catch((err) => { err })

    navigate('/');
  }

  return (
      <div className="container mt-5">
        <h3 className='text-center mb-5'>Add new contact</h3>
        <div className="mb-3">
          <label className="form-label">Full name</label>
          <input type="text" className="form-control" id="name" placeholder='Full Name' />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder='Enter email' />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input type="tel" className="form-control" id="phone" placeholder='Enter phone' />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Address</label>
          <input className="form-control" id="address" placeholder='Enter address' />
        </div>
        <button type="submit" className="container btn btn-primary"
          onClick={() => {
            createContact();
          }}>Create contact</button>
        <a href="/">or get back to contacts</a>
      </div>
  )
}

export default NewContact