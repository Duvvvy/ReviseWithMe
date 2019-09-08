import React, {Component} from "react";
import "./App.css";

import {Comment} from "./model/Comment";
import {NewComment} from "./components/NewComment";
import {CommentsList} from "./components/CommentsList";

interface State {
  newComment: Comment;
  comments: Comment[];
}

class App extends Component<{}, State> {
  state = {
    newComment: {
      id: 1,
      title: "",
      description: ""
    },
    comments: []
  };  
  
  render() {
    return (
      <div>
        <h2>Comment test</h2>
        <NewComment
          comment={this.state.newComment}
          onAdd={this.addComment}
          onChange={this.handleCommentChange}
          onChange2={this.handleCommentChange2}
        />
        <CommentsList comments={this.state.comments} onDelete={this.deleteComment} />
      </div>
    );
  }

  private addComment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.setState(previousState => ({
      newComment: {
        id: previousState.newComment.id + 1,
        title: "",
        description: ""
      },
      comments: [...previousState.comments, previousState.newComment]
    }));
  };

  private handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newComment: {
        ...this.state.newComment,
        title: event.target.value
      }
    });
  };

  private handleCommentChange2 = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({
      newComment: {
        ...this.state.newComment,
        description: event.target.value
      }
    });
  };

  private deleteComment = (commentToDelete: Comment) => {
    this.setState(previousState => ({
      comments: [
      ...previousState.comments.filter(comment => comment.id !== commentToDelete.id)
      ]
    }));
  };
}

export default App;