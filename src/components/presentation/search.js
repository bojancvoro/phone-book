import React from "react";

const Search = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    return (
        <div>
            <input type="text" placeholder="Search Contacts by Last Name" autoComplete="off"></input>
            <div>
               {alphabet.map((letter) => {
                   return <button>{letter.toUpperCase()}</button>
               })}
            </div>
        </div>
    );
}

export default Search;