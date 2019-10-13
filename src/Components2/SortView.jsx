import React from 'react';

export const sortBy = (props) => (
    this.sortState
)  


export default class SortView extends React.Component    {
    constructor(props)  {
        super(props);
        this.state = {
            sortState:"title",
            previewState:""
        }
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event)  {
        if (event.target.value === "title")  {
            //sort notes by title
            this.setState({
                sortState:"title",
                previewState:"view by title..."
            })
        }
        else if (event.target.value === "lastUpdate") {
            //sort notes by date
            this.setState({
                sortState:"date",
                previewState:"view by date..."
            })
        }
        else    {
            //sort notes by favourite
            this.setState({
                sortState:"favourite",
                previewState:"view by favourite..."
            })
        }
    }

    render()    {
        return(
            <div>
                <div>
                    <select name="select" onChange={this.handleChange} >
                        <option value="title">Title</option>
                        <option value="lastUpdate">Updated Last</option>
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