import React, { Props } from 'react';
import ReactDOM from 'react-dom';
import note from './note';
import setText from './note';

export default function dropDownList() { 
  return (
      <select>
        <option onClick={dateClick} >Date</option>
        <option>Time</option>
        <option>Favourites</option>
      </select>
    );
  }

  function dateClick()  {
    return (
      setText()
    );
  }