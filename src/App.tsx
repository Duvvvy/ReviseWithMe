import React from 'react';
import './App.css';

import NotesView from "./Components2/NotesView";
import 'bootstrap/dist/css/bootstrap.min.css';


  const App: React.FC = () => {
    return (
      <div>
        <div className='App-header'> Revise with me </div>
        <NotesView notesArray={[]}></NotesView>
      </div>
    );
  }

  export default App;