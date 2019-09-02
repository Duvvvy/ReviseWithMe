import React, { Props } from 'react';
import ReactDOM from 'react-dom';

export default function note()  {
    return (
      <button>
        <textarea readOnly disabled>This is a test note</textarea>
      </button>
    );
  }