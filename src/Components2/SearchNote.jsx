import React from 'react';
import NotesView, {items} from './NotesView';

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
        var viewer = new NotesView();
        if (term === "") {
            this.setState({term:null})
        }
        if (term !== null)    {
            return(
                <div>

                <div className="content">
            {details.map((textArea, index) => (
              <div className="image-holder" key={textArea.noteID}>
                <p >{person.date}</p>
                <p>{person.description}</p>
                <span className="bottom-caption"
                  onClick={() =>
                        viewer.openImage(index)
                    }
                >
                  {person.title}
                </span>
                <p id='note-title'>
                </p>
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
                        details.filter(searchingFor(term)).map(person =>
                            this.displayNote(term, person)
                        )
                    }
                </div>
            </div>
        )
    }
}