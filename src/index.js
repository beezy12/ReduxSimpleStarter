import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar';
import VideoList from './components/videoList';
const API_KEY = 'AIzaSyAL2i7aRbNuz-v5efXdDDuAB6gZN4m4Bhg';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'stoicism'}, (videos) => {
            this.setState({ videos });
            // this is new es6 syntax, the same as setting state to {videos: videos}.
            // we set this in the constructor because we want to see a list of videos every time the
            // ...app is started
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

// take this component's rendered HTML and put
// it on the page (on the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
