import React, {FunctionComponent} from "react";

import {Comment} from "../model/Comment";
import {CommentListItem} from "./CommentListItem";

interface Props {
    comments: Comment[];
    onDelete: (comment: Comment) => void;
}

export const CommentsList: FunctionComponent<Props> = ({comments, onDelete}) => (
    <ul>
        {comments.map(comment => (
            <CommentListItem comment={comment} onDelete={onDelete} />
        ))}
    </ul>
);
