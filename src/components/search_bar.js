//  This is a class based component
import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' }; // Sets our state to be blank text initially
    }

    render() {
        return(
            <div className="search-bar">
                <input
                    value={this.state.term} //receives its value from state change -> makes it controlled component
                    onChange={ event => this.onInputChange(event.target.value)} />
            </div>
        );
        
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
};

export default SearchBar;