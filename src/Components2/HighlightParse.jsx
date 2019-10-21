import React from "react";
import Highlighter from 'react-highlight-words';

class HighlightParse extends React.Component {

    render(){
        console.log(this.props.hightlightText)
        return(
            <div id="parsed">
            <Highlighter
                highlightClassName="HighlightClass"
                searchWords={this.props.hightlightText}
                autoEscape={true}
                textToHighlight={this.props.text}
            />
        </div>
        )
    }
}

export default HighlightParse;