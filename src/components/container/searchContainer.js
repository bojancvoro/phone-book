import React, { Component } from "react";
import Search from "../presentation/search";

class SearchContainer extends Component {
    handleTakeSearchInput = (e) => {
        const searchTerm = e.target.value;
        this.props.handleSearchContactsByLastName(searchTerm);
    }

    render() {
        return (
            <div>
                <Search
                    handleTakeSearchInput={this.handleTakeSearchInput}
                    handleSearchContactsByLetter={this.props.handleSearchContactsByLetter}
                />
            </div>
        );
    }
}

export default SearchContainer;