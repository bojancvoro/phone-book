import React from "react";
import Contact from "./contact";

const ContactList = (props) => {
    return (
        <div>
            <h3>Your contacts</h3>
            {props.contactsToDisplay.map((contact, i) => {
                return (
                    <Contact 
                        contact={contact} 
                        key={i}
                        handleRemoveContact={props.handleRemoveContact}
                        />
                );
            })}
            {/* change key to tel number */}
        </div>
    );
}

export default ContactList;