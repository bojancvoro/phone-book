import React from "react";

const Contact = (props) => {
    return (
        <div>
            <p>
                Name: {props.contact.firstName}
                Last Name: {props.contact.lastName}
                Telepnone Number: {props.contact.telephoneNumber}
            </p>
            <button
                onClick={(e) => props.handleRemoveContact(props.contact.telephoneNumber)}
            >Delete Contact</button>
        </div>
    );
}

export default Contact;