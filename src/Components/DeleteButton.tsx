import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class DeleteButton extends React.Component {
  submit = () => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure to delete this file?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => alert('File deleted')
        },
        {
          label: 'No',
          onClick: () => alert('Cancelled')
        }
      ]
    });
  };
  render() {
    return (<div className='container'>
      <button onClick={this.submit}>Delete</button>
    </div>);
  }
}

export default DeleteButton;