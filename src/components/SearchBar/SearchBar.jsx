import React from 'react';

class SearchBar extends React.Component {

    constructor(props) {
        super(props); 

        this.state = {
            query: '',
            results: {},
            loading: false,
            message: ''
        }
    }

    render() {
        return(
            <div>
                <input type="text"/>
            </div>
        )
    }
}

export default SearchBar;