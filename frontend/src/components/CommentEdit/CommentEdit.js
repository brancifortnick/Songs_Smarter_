import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editComment } from "../../store/comment";

const CommentEdit = ({commentId}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  let { id } = useParams();
  const userId = useSelector((state) => state.session.user?.id);
  // const songId = useSelector((state) => Object.values(state.comment?.songId));
  // const body = useSelector((state) => Object.values(state.comment?.body));

  const [edit, setEdit] = useState(false);
  const [comment, setComment] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const commentPayload = {
    commentId,
      userId,
      // songId,
      // body,
    };
    console.log(commentPayload, "THIS IS THE COMMENT PAYLOAD FROM THE COMMENT EDIT COMPONENT")
    await dispatch(editComment(commentPayload));
    setEdit(true);
    history.push(`/song/${id}`);
  };

  return (
    <div className="edit_button">
      <button type="button" name="button-edit" onClick={() => setEdit(!edit)}>
        Edit
      </button>
      <form onSubmit={onSubmit} className="edit-form">
        {edit ? (
          <div>
            <input
              className="comment_input"
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder='Edit'
            ></input>
            <button type="submit" className="save_button" >Save</button> //!fix this stufff
          </div>
        ) : (
          <p> {""} </p>
        )}
      </form>
    </div>
  );
};

export default CommentEdit;
