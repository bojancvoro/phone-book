import React from "react";

const Search = (props) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    return (
        <div>
            <input
                type="text"
                placeholder="Search Contacts by Last Name"
                autoComplete="off"
                onChange={props.handleTakeSearchInput}
            ></input>
            <div>
                {alphabet.map((letter, i) => {
                    return (
                        <button 
                            key={i} onClick={(e) => props.handleSearchContactsByLetter(letter)}
                        >{letter.toUpperCase()}</button>
                    );
                })}
            </div>
        </div>
    );
}

export default Search;