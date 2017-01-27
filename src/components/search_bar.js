//  This is a class based component
import React from 'react';

const SearchBar = React.createClass({
    getInitialState() {
        return {
            term: ''
        }; // Sets our state to be blank text initially
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
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
});

export default SearchBar;