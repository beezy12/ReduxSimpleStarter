import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/searchbar';

const API_KEY = 'AIzaSyAL2i7aRbNuz-v5efXdDDuAB6gZN4m4Bhg';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// take this component's rendered HTML and put
// it on the page (on the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
