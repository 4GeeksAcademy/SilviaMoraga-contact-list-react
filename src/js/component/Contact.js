import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

const Contact = ({ name, email, phone, address, idContact }) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    function deleteContact(idContact) {
        fetch("https://playground.4geeks.com/contact/agendas/SilviaMoraga/contacts/" + idContact, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                console.log(response);
                if (response.ok === true)
                    actions.getAllContacts();
            })
            .catch((err) => { err })
    }


    return (
        <div className='container d-flex justify-content-between m-3'>
            <div className='p-2 m-3'>
                <img src='https://cdn3.emoji.gg/emojis/6290-harold.png' className='rounded-circle' style={{ height: "150px", width: "150px" }} />
            </div>

            <div className='p-2'>
                <h4 style={{ color: 'black' }}>{name}</h4>
                <p><i className="fa-solid fa-envelope m-1" style={{ color: 'grey' }} /> {email}</p>
                <p><i className="fa-solid fa-phone m-1" style={{ color: 'grey' }} /> {phone}</p>
                <p><i className="fa-solid fa-location-dot m-1" style={{ color: 'grey' }} /> {address}</p>
            </div>

            <div className='mx-3 ms-auto p-2'>
                <button className='btn btn-warning m-3' onClick={() => {
                    navigate("/edit-contact/" + idContact);
                }}><i className="fa-regular fa-pen-to-square" /></button>


                <button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#deleteModal">
                    <i className="fa-solid fa-trash" />
                </button>

                <div className="modal fade" id="deleteModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="deleteModalLabel">Are you sure?</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                If you delete this thing the entire universe will go down!
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Oh no!</button>
                                <button type="button" class="btn btn-primary" onClick={() => deleteContact(idContact)} data-bs-dismiss="modal">Yes baby!</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Contact