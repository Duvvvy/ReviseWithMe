import React, { Props } from 'react';
import ReactDOM from 'react-dom';

var said = "Hello there";

export default function note()  {
    return (
      <button>
        <textarea readOnly disabled rows={4} cols={40} >{ said }</textarea>
      </button>
    );
  }

  export function setText(props : any)  {
    return (
      said ="This is some text" + props
      
    );
  }