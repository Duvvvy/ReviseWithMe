import React from 'react';
import './App.css';
import NotesView from "./Components/NotesView";
import 'bootstrap/dist/css/bootstrap.min.css';


const App: React.FC = () => {
  return (
    <div>
      <NotesView></NotesView>
    </div>
  );
}

export default App;
