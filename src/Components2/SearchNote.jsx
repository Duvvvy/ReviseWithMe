import React from 'react';
import {items} from './NotesView';

const details = [{}]

function searchingFor(term) {
    return function (x) {
        if (term !== null) {
        return (x.title.toLowerCase().includes(term.toLowerCase())
            || x.description.toLowerCase().includes(term.toLowerCase())
            || !term)
        }
    }   
}


export class SearchNote extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            details: items,
            term: null
        }
        this.searchHandler = this.searchHandler.bind(this);
    }

    searchHandler(event) {
        this.setState({
            details: items,
            term: event.target.value
        })
    }

    displayNote(term, person)   {
        if (term === "") {
            this.setState({term:null})
        }
        if (term !== null)    {
            return(
                <div key={person.noteID}>
                    <p>Look at note "{person.title}"</p>
                </div>
                )
        }
    }

    render() {
        const { term, details } = this.state;
        return (
            <div>
                <input id='Search-Notes'type="text" placeholder='Search Notes...'
                    onChange={this.searchHandler}
                    value={term}
                />
                <div>
                    {
                        details.filter(searchingFor(term)).map(person =>
                            this.displayNote(term, person)
                        )
                    }
                </div>
            </div>
        )
    }
}