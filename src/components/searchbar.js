// by writing the Component in curly braces here, it's the same thing as saying:
// const Component = React.Component;
import React, { Component } from 'react';

// don't have to write "extends React.Component" because I am pulling out 'Component' above.
// As opposed to functional components, class-based components allow me to handle state
// and require a 'render'. start off with a functional component, and make it a class if you need it.
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} />
            </div>
        );
    }
}

export default SearchBar;
