import React, { Component } from "react";
import Form from "../presentation/form";

class FormContainer extends Component {
    handleTakeFormInputs = (e) => {
        e.preventDefault();
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const telephoneNumber = e.target.telephoneNumber.value;
        this.props.handleAddContact(firstName, lastName, telephoneNumber);
    }

    render() {
        return (
            <Form handleTakeFormInputs={this.handleTakeFormInputs} />
        );
    }
}


export default FormContainer;