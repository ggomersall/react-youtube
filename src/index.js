import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from  './components/video_list';

const API_KEY = 'AIzaSyDXP4oTTT1GCoDBHWSB-HDP_c-nUiMu0Fs';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos }); 
            // above is the same as writing this.setState({ videos: videos }); - but in ES6
        });

    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

// take this component generated html and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));