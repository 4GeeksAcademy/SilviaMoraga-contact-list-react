const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			info: "prueba de info",
			contactApiUrl: "https://playground.4geeks.com/contact",
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			changeInfo: () => {
				setStore({ info: "nuevo valor" });
			},
			getAllContacts: () => {
				const store = getStore();
				fetch(store.contactApiUrl + "/agendas/SilviaMoraga/contacts")
					.then((response) => {
						return response.json();
					})
					.then((data) => {
						setStore({ contacts: data.contacts })
					})
					.catch(() => { });
			},
			getContact: (idContact) => {
				fetch("https://playground.4geeks.com/contact/agendas/SilviaMoraga/contacts/", {
					method: "GET",
				})
					.then(response => response.json())
					.then(data => {
						console.log(data);
						data.contacts.forEach((objeto) => {
							if (objeto.id == idContact) {
								document.getElementById("name").value = objeto.name;
								document.getElementById("phone").value = objeto.phone;
								document.getElementById("email").value = objeto.email;
								document.getElementById("address").value = objeto.address;
							}
						});
					})
					.catch((err) => { err })
			},
			createAgenda: () => {
				fetch("https://playground.4geeks.com/contact/agendas/SilviaMoraga", {
					method: "POST",
					body: JSON.stringify({}),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(data => {
						console.log(data);
					})
					.catch(err => console.error(err));
			}
		}
	};
};

export default getState;
