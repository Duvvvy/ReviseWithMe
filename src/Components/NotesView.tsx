import React from 'react';
import { Modal, ModalHeader, ModalBody} from 'reactstrap';




interface IState{
  isModalOpen: boolean,
  title: String,
  description: String,
  body: string,
  date: String,
  time: number,
  currentCard: number,
  currentImageBase64: any,
  ratio: number
}

const initialState = {
  isModalOpen: false,
  title: "no title",
  description: "no description",
  body: "no body",
  date: "not long ago?",
  time: 0,
  currentCard: 0,
  currentImageBase64: 0,
  ratio: 1
}

interface IProps{
  notesArray: any

}

var items: { map: (arg0: (textArea: any, index: any) => JSX.Element) => React.ReactNode; };

class NotesView extends React.Component <IProps, IState> {
  constructor(IProps: any) {
    super(IProps); 
    items = this.props.notesArray;

    this.state = {
        ...initialState
    }
  }

  async openImage(index:number) {
    console.log(index);
    const image = this.props.notesArray[index];
      const base_image = new Image();
      base_image.src = image.src;
      const base64 = await this.getBase64Image(image.src);
      const ratio = await (base_image.width / base_image.height);
      this.setState({
        currentCard: index,
        currentImageBase64: base64,
        isModalOpen: true,
        ratio: ratio,
        title: this.props.notesArray[index].title,
        body: this.props.notesArray[index].body,
        description: this.props.notesArray[index].description
      })
      console.log(this.state)
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
    return (
      <div>
        <div className="main-content">
          <div className="content">
            {items.map((textArea, index) => (
              <div className="image-holder" key={textArea.title}>
                <p >{this.props.notesArray[index].date}</p>
                <p>{this.props.notesArray[index].description}</p>
                <span className="bottom-caption"
                  onClick={() => this.openImage(index)}
                >
                  {this.props.notesArray[index].title}
                </span>
                <p id='note-title'>
                </p>
              </div>
            ))}
          </div>
        </div>
        <Modal className="meme-modal" isOpen={this.state.isModalOpen} size="lg">
          <ModalHeader toggle={this.toggle}>{this.state.title}</ModalHeader>
          <ModalBody id='modal-body'>
              <p id='note-body'>
                {this.state.description}
              </p>
              <button onClick={()=> 
                {
                  delete this.props.notesArray[this.state.currentCard]
                  this.toggle()
                }
              }
              >delete note</button>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default NotesView;
