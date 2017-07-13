import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
    return <div>Yo</div>;
}

// take this component's rendered HTML and put
// it on the page (on the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
