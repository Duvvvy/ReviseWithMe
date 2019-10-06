import React, {FunctionComponent} from "react";
import {Comment} from "../model/Comment";
import "../App.css";

interface Props {
    comment: Comment;
    onDelete: (comment: Comment) => void;
}

export const CommentListItem: FunctionComponent<Props> = ({comment, onDelete}) => {
    const onClick = () => {
        onDelete(comment);
    };
    return (
        <div id="comments">
            
            <div id="title">
                {comment.title} 
            </div>

            <div id="description">
                {comment.description}
            </div>
            <button className= 'btn-primary' onClick={onClick}>Delete Comment</button>
        </div>
    );
};