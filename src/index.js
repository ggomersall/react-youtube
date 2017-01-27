import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDXP4oTTT1GCoDBHWSB-HDP_c-nUiMu0Fs';

// downwards flow data
// is the most parent component that fetches data

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
    console.log(data);
});

class App extends Component {
    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}

// take this component generated html and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));