import React, { Props } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import editNote from './components/edit';
import dropDownList from './components/dropDown';
import addNote from './components/add';
import removeNote from './components/remove';
import note from './components/note';

class NoteBoard extends React.Component {
  constructor(props : any)  {
    super(props);
  }
  render() {
    return (  
      <div className='App '> 
        <div className='App-header'>Revise With Me</div>
        <div className='App'>
          <div className='App-menubar'><button className='App-menubar'>Menu Bar </button></div>
          { addNote() }
          { editNote() }
          { removeNote() }
          { dropDownList()  }
        </div>
        <div>
          { note()  }
          { note()  }
          { note()  }
          { note()  }
          { note()  }
        </div>
      </div>
    );
  }
}
// ========================================
ReactDOM.render (
  <NoteBoard />,
  document.getElementById('root')
);
