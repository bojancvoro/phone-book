import React, { Component } from "react";
import Header from "../presentation/header";
import FormContainer from "./formContainer";
import SearchContainer from "./searchContainer";
import ContactList from "../presentation/contactList";

class PhoneBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [{ firstName: "jon", lastName: "smith", telephoneNumber: 222 }],
            contactsToDisplay: [{ firstName: "jon", lastName: "smith", telephoneNumber: 222 }]
        }
    }

    handleAddContact = (firstName, lastName, telephoneNumber) => {
        this.setState(() => {
            return { 
                contacts: [...this.state.contacts, { firstName, lastName, telephoneNumber }],
                contactsToDisplay: [...this.state.contactsToDisplay, { firstName, lastName, telephoneNumber }]
            }
        });
    }

    handleSearchContactsByLastName = (searchTerm) => {
        const matches = this.state.contacts.filter((contact) => {
            return contact.lastName.includes(searchTerm);
        });
        this.setState(() => {
            return { contactsToDisplay: matches }
        });
    }

    handleSearchContactsByLetter = (letter) => {
        const matches = this.state.contacts.filter((contact) => {
            return contact.lastName[0] === letter;
        });
        this.setState(() => {
            return { contactsToDisplay: matches }
        });
    }

    handleRemoveContact = (telephoneNumber) => {
        const contactsToKeep = this.state.contacts.filter((contact) => {
            return contact.telephoneNumber !== telephoneNumber;
        });
        this.setState(() => {
            return {
                contacts: contactsToKeep,
                contactsToDisplay: contactsToKeep
            }
        });
    }

    render() {
        return (
            <div>
                <Header />
                <FormContainer
                    handleAddContact={this.handleAddContact}
                />
                <SearchContainer
                    handleSearchContactsByLastName={this.handleSearchContactsByLastName}
                    handleSearchContactsByLetter={this.handleSearchContactsByLetter}
                />
                <ContactList
                    contactsToDisplay={this.state.contactsToDisplay}
                    handleRemoveContact={this.handleRemoveContact}
                />
            </div>
        );
    }
}

export default PhoneBook;