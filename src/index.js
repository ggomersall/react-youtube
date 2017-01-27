//  this is a functional component
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDXP4oTTT1GCoDBHWSB-HDP_c-nUiMu0Fs';

// Create new component and this component should produce
// some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// take this component generated html and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));