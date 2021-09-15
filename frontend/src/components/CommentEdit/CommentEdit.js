import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editComment } from "../../store/comment";

const CommentEdit = ({ id }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  // let { id } = useParams();
  const userId = useSelector((state) => state.session.user?.id);
  // const songId = useSelector((state) => Object.values(state.comment?.songId));
  // const body = useSelector((state) => Object.values(state.comment?.body));

  const [edit, setEdit] = useState(false);
  const [comment, setComment] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const commentPayload = {
      id,
      userId,
      // songId,
      // body,
    };
    await dispatch(editComment(commentPayload));
    history.push(`/song/${id}`);
  };

  return (
    <div className="edit_button">
      {/* <button type="submit" name="button-edit" onClick={() => setEdit(!edit)}>
        edit here
      </button> */}
      <form onSubmit={onSubmit} className="edit-form">
        {/* <input
          className="comment_input"
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Comment here..."
        ></input> */}
      </form>
    </div>
  );
};

export default CommentEdit;
