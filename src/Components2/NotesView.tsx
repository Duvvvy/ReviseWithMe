import React from 'react';
import { Modal, ModalHeader, ModalBody} from 'reactstrap';
import { TextField, TextareaAutosize} from '@material-ui/core';
import { Formik, Form} from 'formik';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {Comment} from "../model/Comment";	
import {NewComment} from "./NewComment";	
import {CommentsList} from "./CommentsList";
import { YoutubeViewer } from './YoutubeViewer';
import { SearchNote } from './SearchNote';
import SortView from './SortView';
import PickerPopUp from './PickerPopUp';
import { getCurrentDate, getCurrentTime } from './GetDateTime';

interface IState{
  isModalOpen: boolean,
  isCreationModalOpen: boolean,
  isHighlighted: boolean,
  title: string,
  description: string,
  body: string,
  date: String,
  time: String,
  currentCard: number,
  currentImageBase64: any,
  ratio: number,
  key: string,
  newComment: Comment,	
  comments: any[],
  src: string,
  srcV: string,
  noteColour: string,
  isPickerOpen: boolean,
  isDrawerOpen: boolean
}

interface Values {
  title: string;
  description: string;
  date: string;
  time: string;
  src: string;
  srcV: string;
  comments: any[]
  noteColour: string;
}

const initialState = {
  isModalOpen: false,
  isCreationModalOpen: false,
  isHighlighted: false,
  title: "",
  description: "",
  body: "depreciated",
  date: getCurrentDate(),
  time: getCurrentTime(),
  currentCard: -1,
  currentImageBase64: 0,
  ratio: 1,
  key: "textArea.time",
  src: "",
  newComment: {	
    id: 0,	
    title: "",	
    description: ""	
  },	
  comments: [],
  srcV: "",
  noteColour: '#F6F5F3',
  isPickerOpen: false,
  isDrawerOpen: false
}

interface IProps{
  notesArray: any
}

let tempColour:string

export var items = [
  {
    title: "test note title 1",
    body: "test body 1",
    description: "test note description 1",
    date: "1st of testuary",
    time: "11am",
    noteID: "n1",
    src: "https://i.imgur.com/o3j9qSk.jpg",
    srcV: "https://www.youtube.com/watch?v=Gs069dndIYk",
    comments: [],
    noteColour: '#F6F5F3'
  },
  {
    title: "test note title 2",
    body: "test body 2",
    description: `test note description 2, 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit rhoncus egestas. Donec sapien ante, aliquam cursus diam gravida, varius pharetra sapien. Donec non pharetra velit. Morbi nec suscipit orci. Nunc dui tortor, pulvinar sit amet mattis ac, aliquam ut dui. Donec aliquet ut turpis maximus mollis. Sed pellentesque ligula at neque rhoncus pretium. Donec tincidunt magna neque, imperdiet suscipit justo sodales ac.

Aenean tempus, justo ac dictum mollis, urna nibh venenatis orci, non vulputate dolor massa a mauris. Morbi egestas interdum massa, ac vestibulum ante. Nullam id luctus mi. Nam cursus porttitor mauris. Cras a quam sit amet mi sagittis interdum eu nec odio. Integer ex odio, feugiat consectetur libero eu, auctor condimentum neque. In facilisis augue nec dui faucibus, a congue nulla iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque aliquam vestibulum ipsum. Nullam tempus viverra commodo. Maecenas aliquet nisl a odio bibendum, et pulvinar lorem fringilla. Curabitur vitae libero leo. Fusce facilisis tortor sed ullamcorper suscipit.

Aenean sed leo cursus, ultrices ante id, molestie sem. Donec venenatis arcu sed lectus suscipit, nec aliquam dolor malesuada. Nam semper vitae felis a vestibulum. Quisque vitae facilisis felis, id tincidunt dolor. Vestibulum blandit, ipsum a egestas porta, lorem felis fermentum turpis, ultrices imperdiet eros mauris vitae mauris. Nunc vitae sem at leo elementum fermentum non nec ante. Morbi consequat quam urna, at eleifend arcu auctor quis.
    
    `,
    date: "2nd of testuary",
    time: "12am",
    noteID: "n2",
    src: "https://i.imgur.com/0kCZcQv.jpg",
    srcV: "",
    comments: [{}],
    noteColour: '#c4fffe'
  },
  {
    title: "test note title 3",
    body: "test body 3",
    description: "test note description 3",
    date: "3rd of testuary",
    time: "3pm",
    noteID: "n3",
    src: "https://i.imgur.com/8SFJ8Xl.jpg",
    srcV: "", 
    comments: [],
    noteColour: '#F6F5F3'
  },
  {
    title: "test note title 4",
    body: "test body 4",
    description: "test note description 4",
    date: "4th of testuary",
    time: "4pm",
    noteID: "n4",
    src: "https://i.imgur.com/EhdZZ0R.jpg",
    srcV: "", 
    comments: [],
    noteColour: '#F6F5F3'
  }
];

export class NotesView extends React.Component <IProps, IState> {
  constructor(IProps: any) {
    super(IProps); 
    this.state = {
        ...initialState,
    }
    this.highlightClick = this.highlightClick.bind(this);
  }

  addComment = (event: React.FormEvent<HTMLFormElement>) => {	
    event.preventDefault();
    if(this.state.newComment.title === '' && this.state.newComment.description === '')
    {
      alert("Comment title and/or description is empty")
    }
    else
    {
      this.state.comments.push(this.state.newComment)
      this.setState({	
        newComment: {	
          id: this.state.newComment.id + 1,	
          title: "",
          description: ""	
        },	
        comments: this.state.comments
      });	
      items[this.state.currentCard].comments = this.state.comments
    }
  };	
  
  handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {	
    this.setState({	
      newComment: {	
        ...this.state.newComment,	
        title: event.target.value	
      }	
    });
  };	
  
  handleCommentChange2 = (event: React.ChangeEvent<HTMLTextAreaElement>) => {	
    this.setState({	
      newComment: {	
        ...this.state.newComment,	
        description: event.target.value	
      }	
    });
  };	
  
 deleteComment = (commentToDelete: Comment) => {	
  let idToRemove = 0
  for(let i = 0; i < this.state.comments.length; i++)
  {
    if(this.state.comments[i].id === commentToDelete.id)
    {
      idToRemove = i
    }
  }
  this.state.comments.splice(idToRemove, 1)
  this.setState({	
    comments: this.state.comments	
  });
    items[this.state.currentCard].comments = this.state.comments
  };

  async openImage(index:number) {
    const image = items[index];
      const base_image = new Image();
      base_image.src = image.src;
      const base64 = await this.getBase64Image(image.src);
      const ratio = await (base_image.width / base_image.height);
      this.setState({
        currentCard: index,
        currentImageBase64: base64,
        isModalOpen: true,
        ratio: ratio,
        title: items[index].title,
        body: items[index].body,
        description: items[index].description,
        comments: items[index].comments,
        src: items[index].src,
        srcV: items[index].srcV,
        noteColour: items[index].noteColour
      })
    }

    async getBase64Image(url: any) {
      const response = await fetch(url);
      const blob = await response.blob();
      const reader = new FileReader();
      await new Promise((resolve, reject) => {
        reader.onload = resolve;
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
      return reader.result;
      }

  //toggle to open model
  toggle = () => {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen
    }));
  }

  //refresh state
  refresh = () => {
    this.setState({
        ...initialState
    })
    //this.saveToCookie(items);
  }

  //pop up to display to confirm delete
  confirmDelete = () => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure to delete this file?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            //delete items[this.state.currentCard]
            items.splice(this.state.currentCard, 1);
            this.refresh()
            alert('File deleted')
          }
        },
        {
          label: 'No',
          onClick: () => {
            alert('Cancelled')
          }
        }
      ]
    });
  };

  //toggle note creation model top open
  toggleCreationModal = () =>{
    this.setState((prevState) => ({
      isCreationModalOpen: !prevState.isCreationModalOpen
    }));
  }

  openCreationModal(){
    this.refresh()
    this.toggleCreationModal()
  }

  //save notes
  saveNote(values: Values){
    console.log(this.state.srcV)
    items.push(
      {
        title: values.title,
        description: values.description,
        body: "depreciated",
        date: getCurrentDate(),
        time: getCurrentTime(),
        noteID: "unassigned",
        src: values.src,
        comments: this.state.comments,
        srcV: values.srcV,
        noteColour: values.noteColour
      });
      this.refresh()
  }

  saveToCookie(arr:any){
    var json_str = JSON.stringify(arr);
    //Cookies.name('mycookie');
    document.cookie = "myCookie = " + json_str;
    console.log(json_str);
    console.log("saved")
  }

  readFromCookie(){
    console.log(items);
    items = JSON.parse(document.cookie.slice(9));
    console.log(items);
    this.refresh();
    
  }
  highlightClick(event:any)  {
    if (this.state.isHighlighted)  {
    this.setState({
      isHighlighted:false,
    });
  }
  else  {
    this.setState({
      isHighlighted:true,
    });
  }
  }
  
  highlightText()  {
    
    if (this.state.isHighlighted)  {
    return (

      <b>{this.state.description}</b>      
    )
    }
    else {
      return(
        <div>{this.state.description}</div>
        )
   }
  }

  backgroundColour(color: string) {
    const backgroundColour = {
      backgroundColor: color
    } as React.CSSProperties
    return backgroundColour
  }

  togglePicker() {
    this.setState({
      isPickerOpen: !this.state.isPickerOpen
    })
  }

  handleChangeColour = () => {
    this.setState({
      noteColour: tempColour
    }, () => items[this.state.currentCard].noteColour = this.state.noteColour);
  };

  callToggleAndChangeColour() {
    this.handleChangeColour()
    this.togglePicker()
  }

  changeTempColour = (color:any) => {
    tempColour = color.hex
  }
  
  toggleDrawer = () => {
    this.setState({
      isDrawerOpen: !this.state.isDrawerOpen
    })
  }

  drawerA() {
    if(this.state.isDrawerOpen){
      return "none"
    }
    else
    {
      return ""
    }
  }

  drawerB() {
    if(this.state.isDrawerOpen){
      return ""
    }
    else
    {
      return "none"
    }
  }

  drawerStyle() {
    const drawer = {
      display: this.drawerA()
    } as React.CSSProperties
    return drawer
  }

  drawerStyleOpenClose() {
    const drawer = {
      display: this.drawerB()
    } as React.CSSProperties
    return drawer
  }

render() {
    return (
      <div className="main">
        <div className = "topbar">
          <button className = "btn-primary" onClick={this.toggleDrawer} style={this.drawerStyleOpenClose()}>=</button>
          <div id="mySidenav" className="sidenav" style={this.drawerStyle()}>
            <li className = "drawer"><button className = 'btn-sidenav' onClick={this.toggleDrawer}>X</button></li>
            <li className = "drawer"><button className='btn-sidenav' onClick={()=>{this.readFromCookie()}}>Load from cookie</button></li>
            <li className = "drawer"><button className='btn-sidenav' onClick={()=>{this.saveToCookie(items)}}>Save to cookie</button></li>
            <li className = "drawer"><button className='btn-sidenav'
              onClick={()=> {
              this.openCreationModal()
              console.log(this.state)
              console.log("working")
            }
              }>+</button></li>
              <li className = "drawer"><button className='btn-sidenav' onClick={() => {
              console.log(items[0].title) 
              this.refresh()}
              }>Refresh</button></li>
            <div>
            <SortView/>
            </div>
            <div className= "scroll">
              <SearchNote/>
            </div>
          </div>
        </div>

        <div className="main-content">
          <div className="content">
            {items.map((textArea, index) => (
              <div className="image-holder" key={textArea.title} style={this.backgroundColour(items[index].noteColour)}>
                <p >{items[index].date}, {items[index].time}</p>
                <p>{items[index].description}</p>
                <span className="bottom-caption"
                  onClick={() => this.openImage(index)}
                >
                  {items[index].title}
                </span>
                <p id='note-title'>
                </p>
              </div>
            ))}
          </div>
        </div>
        <Modal className="meme-modal" isOpen={this.state.isModalOpen} size="lg">
          <ModalHeader toggle={this.toggle}>{this.state.title}</ModalHeader>
          <ModalBody id='modal-body' style={this.backgroundColour(this.state.noteColour)}>
              <p id='note-body'>
                <div><img alt={this.state.src} id='ImageInModal' src={this.state.src}></img></div> 
                {this.state.description} 
              </p>
              
              <YoutubeViewer srcV={this.state.srcV}></YoutubeViewer>

              <div className = "comment-in-note">
                <NewComment
                comment={this.state.newComment}
                onAdd={this.addComment}
                onChange={this.handleCommentChange}
                onChange2={this.handleCommentChange2}
                />
                <CommentsList comments={this.state.comments}
                onDelete={this.deleteComment} />
              </div>

              <button className="btn-primary" onClick={()=> 
                {
                  this.confirmDelete()
                  this.toggle()
                }
              }
              >Delete Note</button>
              <button className="btn-primary" onClick={()=>
                {
                  this.toggle();
                  this.toggleCreationModal();
                }
              }
              >Edit Note</button>

              <button className="btn-primary" onClick={this.togglePicker.bind(this)}>Change Colour</button>
                <Modal className="colourPickerPopUp" isOpen={this.state.isPickerOpen} size="1g">
                  <ModalBody id='modal-body'>
                    <PickerPopUp
                      saveColour={this.callToggleAndChangeColour.bind(this)}
                      changeTempColour={this.changeTempColour}
                      cancelColour={this.togglePicker.bind(this)}  
                      noteColour={this.state.noteColour}
                    />
                  </ModalBody>
                </Modal>
            </ModalBody>
        </Modal>

        <Modal className="meme-modal" isOpen={this.state.isCreationModalOpen} size="lg">
            <ModalHeader toggle={this.toggleCreationModal}>{this.state.title}</ModalHeader>
              <ModalBody id='modal-body'>
                <Formik initialValues={{title: this.state.title, description: this.state.description, date: '', time: '', src: this.state.src, comments: this.state.comments, srcV: this.state.srcV, noteColour: this.state.noteColour}} 
                onSubmit={values => {
                this.saveNote(values)
                }}
                > 
                {({values, handleChange, handleBlur}) => 
                  <Form>
                    <div>
                      <TextField 
                      className = "text"
                      placeholder="Title"
                      name="title" 
                      value={values.title} 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      />
                    </div>
                    <div>
                      <TextareaAutosize
                          className = "text" 
                          rows={20}
                          rowsMax={20}
                          placeholder="Add notes"
                          name="description" 
                          value={values.description} 
                          onChange={handleChange}
                          onBlur={handleBlur}
                      />
                    </div>
                    <div>
                      <TextField 
                      className = "text"
                      placeholder="Image Link"
                      name="src" 
                      value={values.src} 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      />
                    </div>
                    <div>
                      <TextField
                      className = "text"
                      placeholder="Youtube Link"
                      name="srcV"
                      value={values.srcV}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      />
                    </div>

                    <button className="btn-primary" type="submit" onClick={()=>{delete items[this.state.currentCard]}}>Confirm</button>
                    <button className="btn-primary" onClick={ this.highlightClick }>Highlight</button>
                    <button className="btn-primary" onClick={()=> 
                    {
                      this.confirmDelete()
                     this.toggleCreationModal()
                    }}
                    > Delete Note</button>

                    <div>
                      {this.highlightText()}
                    </div>
                  </Form>
                  }
                </Formik>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default NotesView;