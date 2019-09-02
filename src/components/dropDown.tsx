import React, { Props } from 'react';
import ReactDOM from 'react-dom';

export default function dropDownList() {
    return (
      <select>
        <option>Date</option>
        <option>Time</option>
        <option>Favourites</option>
      </select>
    );
  }