import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from  './components/video_list';
import VideoDetail from './components/video_details';

const API_KEY = 'AIzaSyDXP4oTTT1GCoDBHWSB-HDP_c-nUiMu0Fs';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0] // this sets inital video as first one in array on load
            });
            // above is the same as writing this.setState({ videos: videos }); - but in ES6
        });
    }

    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={ term => this.videoSearch(term) } />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={ selectedVideo => this.setState({selectedVideo}) } // passing down to video_list, which we then can pass to video_list_item
                    videos={ this.state.videos } />
            </div>
        );
    }
}

// take this component generated html and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));