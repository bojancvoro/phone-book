import React from "react";

const Form = () => {
    return (
        <div>
            <form>
                <input type="text" placeholder="First Name" autoComplete="off" required></input>
                <input type="text" placeholder="Last Name" autoComplete="off" required></input>
                <input type="number" placeholder="Telephone Number" autoComplete="off" required></input>
                <input type="submit" value="Add Contact"></input>
            </form>
        </div>
    );
}

export default Form;