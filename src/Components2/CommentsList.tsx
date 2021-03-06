import React, {FunctionComponent} from "react";

import {Comment} from "../model/Comment";
import {CommentListItem} from "./CommentListItem";

interface Props {
    comments: Comment[];
    onDelete: (comment: Comment) => void;
}

//exporting to the comment list which shows the comment
export const CommentsList: FunctionComponent<Props> = ({comments, onDelete}) => {
    return (
        <ul>
        {
            comments.map((comment) => (
            <CommentListItem comment={comment} onDelete={onDelete} />
        ))}
    </ul>
    );
};
