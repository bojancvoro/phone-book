import React, { Component } from "react";
import Header from "../presentation/header";
import FormContainer from "./formContainer";
import SearchContainer from "./searchContainer";
import ContactList from "../presentation/contactList";

class PhoneBook extends Component {
    render() {
        return (
            <div>
                <Header />
                <FormContainer />
                <SearchContainer />
                <ContactList />
            </div>
        );
    }
}

export default PhoneBook;