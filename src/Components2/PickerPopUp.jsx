import React from 'react';  
import { SliderPicker } from 'react-color';

class PickerPopUp extends React.Component {  
    render() {  
        return (  
        <div className='popup'>  
            <div className='popup-inner'>  
                <h1>Pick a colour</h1> 
                <SliderPicker onChange={this.props.handleChangeComplete} color={this.props.noteColour}/>
            </div>  
            <button className="btn-primary" onClick={this.props.closePopup}>close me</button>  
        </div>  
        );      
    }     
}  

export default PickerPopUp;