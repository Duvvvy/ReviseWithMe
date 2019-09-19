import React from 'react';
import { Modal, ModalHeader, ModalBody} from 'reactstrap';

var items = [
  {
    title: "test note title 1",
    body: "test body 1",
    description: "test note description 1",
    date: "1st of testuary",
    time: "11am",
    noteID: "n1",
    src: "https://i.imgur.com/o3j9qSk.jpg"
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
    src: "https://i.imgur.com/0kCZcQv.jpg"
},
{
    title: "test note title 3",
    body: "test body 3",
    description: "test note description 3",
    date: "3rd of testuary",
    time: "3pm",
    noteID: "n3",
    src: "https://i.imgur.com/8SFJ8Xl.jpg" 
},
{
    title: "test note title 4",
    body: "test body 4",
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

}

class NotesView extends React.Component <IProps, IState> {
  constructor(IProps: any) {
    super(IProps); 

    this.state = {
        ...initialState
    }
  }

  async openImage(index:number) {
    console.log(index);
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
        description: items[index].description
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
                <p >{items[index].date}</p>
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
          <ModalBody id='modal-body'>
              <p id='note-body'>
                {this.state.description}
              </p>
          </ModalBody>
        </Modal>
      </div>
    )
  }
  
 


}

export default NotesView;
