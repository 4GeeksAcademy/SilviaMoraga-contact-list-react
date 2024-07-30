import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import Contact from "../component/Contact";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-5">
			<h1>Silvia's contact list</h1>
			<Link to="/new-contact" className="d-flex justify-content-end mb-3">
				<button className="btn btn-success">Create new contact</button>
			</Link>

			{
				store.contacts.map((contact, index, value) => {
					return (
						<div className="card">
							<Contact key={index}
								name={contact.name}
								email={contact.email}
								phone={contact.phone}
								address={contact.address}
								idContact={contact.id}
							/>
						</div>
					)
				})
			}
		</div>
	)
};
