import React from 'react';
import {items} from './NotesView';

const details = [{}]

function searchingFor(term) {
    return function (x) {
        return (x.title.toLowerCase().includes(term.toLowerCase())
            || x.description.toLowerCase().includes(term.toLowerCase())
            || !term)
    }
}


export class SearchNote extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            details: items,
            term: ' Search notes...'
        }
        this.searchHandler = this.searchHandler.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event)  {
        this.setState({
            term:' '
        })
    }

    searchHandler(event) {
        if (!event.target.value)    {
            this.setState({
                details: items,
                term: ' Search notes...'
            })
        }
        else{
        this.setState({
            details: items,
            term: event.target.value
        })}
    }

    displayNote(term, person)   {
        if (term !== " " )    {
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
                <input id='Search-Notes'type="text"
                    onChange={this.searchHandler}
                    onClick={this.handleClick}
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