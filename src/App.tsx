import React from 'react';
import './App.css';
import NotesView from "./Components/NotesView";
import SortButton from "./Components/SortButton";
import 'bootstrap/dist/css/bootstrap.min.css';


const App: React.FC = () => {
  return (
    <div>
      <div className='App-header'> Revise with me </div>
      <SortButton></SortButton>
      <NotesView></NotesView>
    </div>
  );
}

export default App;
