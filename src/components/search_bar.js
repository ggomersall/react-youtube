//  This is a class based component
import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' }; // Sets our state to be blank text initially
    }

    render() {
        return(
            <div>
                <input 
                    value={this.state.term} //receives its value from state change -> makes it controlled component
                    onChange={ event => this.setState({ term: event.target.value })} />
            </div>
        );
        
    }
};

export default SearchBar;