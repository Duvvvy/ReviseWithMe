import React from 'react';
import ReactDOM from 'react-dom';
import NotesView from './Components/NotesView';
import {mount} from "enzyme";


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NotesView notesArray={{}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("should load a notes data into state memory when the respective card is clicked", () => {
    const wrapper = mount(<NotesView notesArray={{}}/>)
    //const noteOne = wrapper.find(this.openImage())
})

