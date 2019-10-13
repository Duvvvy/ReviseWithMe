import React from "react";
import Highlighter from "react-highlight-words";

interface Props {
    text: string;
    hightlightText: string[];
}


export class HighlightParse extends React.Component <Props> {
    constructor(Props: any) {
      super(Props); 
    }

    render(){
        return(
            <div id="parsed">
            <Highlighter
                highlightClassName="HighlightClass"
                searchWords={this.props.hightlightText}
                autoEscape={true}
                textToHighlight={this.props.text}
            />
            {this.props.text}


        </div>
        )
    }
}

//export default HighlightParse;