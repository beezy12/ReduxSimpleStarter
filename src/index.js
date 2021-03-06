import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';
const API_KEY = 'AIzaSyAL2i7aRbNuz-v5efXdDDuAB6gZN4m4Bhg';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('stoicism');
    };

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            console.log('checking out the vids', videos);
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }


    // **** IMPORTANT: the 'onVideoSelect' is a callback that we are passing down as a prop through to
    // ...videoListItem. Whenever that function is called down in the child, it sets the state up here, in
    // ...the parent.
    // debounce just slows down the search. you can only call the search function once every 3 seconds
    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos} />
            </div>
        );
    }
}

// take this component's rendered HTML and put
// it on the page (on the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
