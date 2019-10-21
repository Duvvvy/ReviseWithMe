import React from 'react';  
import { SliderPicker } from 'react-color';

class PickerPopUp extends React.Component {  
    render() {  
        return (  
        <div className='popup'>  
            <div className='popup-inner'>  
                <h3>Pick a colour</h3> 
                <SliderPicker onChange={this.props.changeTempColour} onChangeComplete={this.props.changeTempColour} color={this.props.noteColour}/>
            </div>  
            <button className="btn-primary" onClick={this.props.saveColour}>Save</button>
            <button className="btn-primary" onClick={this.props.cancelColour}>Cancel</button>  
        </div>  
        );      
    }      
}  
export default PickerPopUp;