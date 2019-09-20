import {Comment} from "../model/Comment";
import React, {FunctionComponent} from "react";
import "../App.css";

interface Props {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChange2: (event:React.ChangeEvent<HTMLTextAreaElement>) => void;
    onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
    comment: Comment;
}

export const NewComment: FunctionComponent<Props> = ({
    onChange, onAdd, comment, onChange2
}) => (
    <form onSubmit = {onAdd}>
        <div id="comment_form">
            <div>
                <input onChange={onChange} value={comment.title} placeholder="Title" id="title"/>
            </div>
        
            <div>
                <textarea onChange={onChange2} value={comment.description} placeholder="Comment" id="comment_textfield"/>
            </div>
        
            <div>
                <button type= "submit" id="add_comment_button">Add Comment</button>
            </div>
        </div>
    </form>
);