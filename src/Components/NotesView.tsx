import React from 'react';
import { Modal, ModalHeader, ModalBody} from 'reactstrap';

const debugDBImages = [
  {
    title: "test note title 1",
    description: "test note description 1",
    date: "1st of testuary",
    time: "11am",
    noteID: "n1",
    src: "https://i.imgur.com/o3j9qSk.jpg"
},
{
    title: "test note title 2",
    description: "test note description 2",
    date: "2nd of testuary",
    time: "12am",
    noteID: "n2",
    src: "https://i.imgur.com/0kCZcQv.jpg"
},
{
    title: "test note title 3",
    description: "test note description 3",
    date: "3rd of testuary",
    time: "3pm",
    noteID: "n3",
    src: "https://i.imgur.com/8SFJ8Xl.jpg" 
},
{
    title: "test note title 4",
    description: "test note description 4",
    date: "4th of testuary",
    time: "4pm",
    noteID: "n4",
    src: "https://i.imgur.com/EhdZZ0R.jpg"
}
];


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

interface IProps{

}

class NotesView extends React.Component <IProps, IState> {
  constructor(IProps: any) {
    super(IProps); 

    this.state = {
        ...initialState
    }
  }

  async openImage(index:number) {
    const image = debugDBImages[index];
      const base_image = new Image();
      base_image.src = image.src;
      const base64 = await this.getBase64Image(image.src);
      const ratio = await (base_image.width / base_image.height);
      this.setState(() => ({
        currentImage: index,
        currentImageBase64: base64,
        ratio: ratio,
        ...initialState
      }), () => this.toggle());
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


  toggle = () => {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen
    }));
  }



render() {
    const textStyle = {
      fontFamily: "helvetica",
      fontSize: "50px",
      textTransform: "none",
      fill: "#FFF",
      stroke: "#000",
      userSelect: "none"
    }

    return (
      <div>
        <div className="main-content">
          <div className="content">
            {debugDBImages.map((image, index) => (
              <div className="image-holder" key={image.src}>
                <span 
                  className="bottom-caption"
                  onClick={() => this.openImage(index)}
                >Test Note title</span>
                <p 
                  id='clickable test'
                  
                
                
                >test note body elemtns abcd test test test</p>
              </div>
            ))}
          </div>
        </div>
        <Modal className="meme-modal" isOpen={this.state.isModalOpen} size="lg">
          <ModalHeader toggle={this.toggle}>Make-a-Meme</ModalHeader>
          <ModalBody>
              <p id='note-body'>test note text</p>
            <div className="meme-text-input">
              <button onClick={() => console.log("button clicked")} className="btn btn-primary">Download</button>
            </div>
          </ModalBody>
        </Modal>
      </div>
    )
  }
  
 


}

export default NotesView;
