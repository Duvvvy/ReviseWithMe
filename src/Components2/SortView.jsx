import React from 'react';
import {items} from './NotesView';

export default class SortView extends React.Component    {
    constructor(props)  {
        super(props);
        this.state = {
            sortState:"lastUpdate",
            previewState:"",
            newItems:items
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event)  {
        if (event.target.value === "title")  {
            //sort notes by title
            this.setState({
                sortState:"title",
                previewState:"viewing by title..."
            })
            items.sort(function (a, b) {
                if (a.title < b.title) { return -1; }
                if (a.title > b.title) { return 1; }
                return 0;
            })
        }
        else if (event.target.value === "lastUpdate") {
            //sort notes by date
            this.setState({
                sortState:"date",
                previewState:"viewing by date..."
            })
            items.sort(function (a, b) {
                if (a.date < b.date) { return -1; }
                if (a.date > b.date) { return 1; }
                return 0;
            })
        }
        else    {
            //sort notes by favourite
            this.setState({
                sortState:"favourite",
                previewState:"viewing by favourite..."
            })
            // this can be used after it gets merged later
            // const favouriteNotes = items.fliter((item) => {
            //     return (item.isFavourite === true)
            // })
            // const notFavNotes = items.filter((item) =>  {
            //     return (item.isFavourite === false)
            // })
            // const newItems = favouriteNotes + notFavNotes
        }
    }

    render()    {
        return(
            <div>
                <div>
                    <select className="select" onChange={this.handleChange} >
                        <option value="lastUpdate">Date</option>
                        <option value="title">Title</option>
                        <option value="favourite">Favourite</option>
                    </select>
                </div>
                <div>
                    {this.state.previewState}
                </div>
            </div>
        );
    }
}