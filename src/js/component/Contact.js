import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router-dom';

const Contact = ({ name, email, phone, address, idContact }) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [selectedContact, setSelectedContact] = useState(-1);
    console.log(selectedContact);
    

    const handleSelected = (idContact) => {
        console.log(idContact);
        
        actions.deleteContact(idContact);
    };

    return (
        <div className='container d-flex justify-content-between m-3'>
            <div className='p-2 m-3'>
                <img src='https://cdn3.emoji.gg/emojis/6290-harold.png' className='rounded-circle' style={{ height: "150px", width: "150px" }} alt="Contact" />
            </div>
            <div className='p-2'>
                <h4 style={{ color: 'black' }}>{name}</h4>
                <p><i className="fa-solid fa-envelope m-1" style={{ color: 'grey' }} /> {email}</p>
                <p><i className="fa-solid fa-phone m-1" style={{ color: 'grey' }} /> {phone}</p>
                <p><i className="fa-solid fa-location-dot m-1" style={{ color: 'grey' }} /> {address}</p>
            </div>
            <div className='mx-3 ms-auto p-2'>
                <button className='btn btn-warning m-3' onClick={() => navigate("/edit-contact/" + idContact)}>
                    <i className="fa-regular fa-pen-to-square" />
                </button>
                <button type='button' className='btn btn-danger' data-bs-toggle="modal" data-bs-target={`#deleteModal${idContact}`}>
                    <i className="fa-solid fa-trash" />
                </button>
                
                <div className="modal fade" id={`deleteModal${idContact}`} data-bs-backdrop="static" aria-labelledby="deleteModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="deleteModalLabel">Are you sure?</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                If you delete this contact, it cannot be undone!
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => {handleSelected(idContact)}}>Yes, delete it!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;