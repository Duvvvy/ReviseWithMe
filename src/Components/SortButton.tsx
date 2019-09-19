import React from 'react';
import setSortState from "./NotesView";

interface ITestState {
    selectedValue: string;
}

class SortButton extends React.Component<{}, ITestState> {

    constructor(props:any) {
        super(props);
        this.state = { selectedValue: "Date" };
    }

    change(event: React.FormEvent<HTMLSelectElement>) {
        var safeSearchTypeValue: string = event.currentTarget.value;
        const sort  = new setSortState(safeSearchTypeValue);
        // console.log(safeSearchTypeValue); // in chrome => B
        alert(safeSearchTypeValue);
        //change the key
        this.setState({
            selectedValue: safeSearchTypeValue
        });
    }   

    render() {
        return (
            <div>
                <select id="searchType" onChange={ e => this.change(e) } value={ this.state.selectedValue }>
                    <option value="Date">Date</option>
                    <option value="Title">Title</option>
                    <option value="Favorites">Favourite</option>
                </select>
                </div>
        );
    }
}
export default SortButton;