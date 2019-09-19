import React from 'react';

const items = [
    {
        title: "test note title 1",
        description: "test note description 1",
        date: "1st of testuary",
        time: "11am",
        noteID: "n1" 
    },
    {
        title: "test note title 2",
        description: "test note description 2",
        date: "2nd of testuary",
        time: "12am",
        noteID: "n2" 
    },
    {
        title: "test note title 3",
        description: "test note description 3",
        date: "3rd of testuary",
        time: "3pm",
        noteID: "n3" 
    },
    {
        title: "test note title 4",
        description: "test note description 4",
        date: "4th of testuary",
        time: "4pm",
        noteID: "n4" 
    },


]


interface IProps{

}

interface IState{
    isModalOpen: boolean,
    title: String,
    description: String,
    date: String,
    time: number,
    currentCard: number,
}

const initialState = {
    isModalOpen: false,
    title: "no title",
    description: "no description",
    date: "not long ago?",
    time: 0,
    currentCard: 0,
}

class notesView extends React.Component <IProps, IState> {
    constructor(IProps: any) {
      super(IProps); 

      this.state = {
          ...initialState
      }
    }
    
}