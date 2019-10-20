import React from 'react';
import NotesView, {items} from './NotesView';
import '../App.css';

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

    displayNote(term, note)   {
        var viewer = new NotesView();
        if (term === "") {
            this.setState({term:null})
        }
        if (term !== null)    {
            return(
                <div className='searchbar'>
                    <div className="content">
                        {details.map((textArea, index) => (
                        <div className="image-holder" key={textArea.noteID}>
                            <p >{note.date}</p>
                            <p>{note.description}</p>
                            <span className="bottom-caption"
                                onClick={() =>  
                                    viewer.openImage(index)
                                }
                            >
                                {note.title}
                            </span>
                            <p id='note-title'></p>
                        </div>
                        ))}
                    </div>
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
                        details.filter(searchingFor(term)).map(note =>
                            this.displayNote(term, note)
                        )
                    }
                </div>
            </div>
        )
    }
}