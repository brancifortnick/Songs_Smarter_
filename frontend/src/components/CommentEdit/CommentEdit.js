import React, { useState } from "react";
import { useSelector, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editComment } from "../../store/comment";

const CommentEdit = ({ id }) => {
  const dispatch = useDispatch();
  // let { id } = useParams()
  // const userId = useSelector(state=> state.session?.user)
  const [edit, setEdit] = useState(false);
  const [comment, setComment] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(editComment(Number(id)));
  };

  return (
    <div className="edit_button">
      <button type="submit" name="button-edit" onClick={() => setEdit(!edit)}>
        edit here
      </button>
      <form onSubmit={onSubmit} className="edit-form">
        <input
          className="comment_input"
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Comment here..."
        ></input>
        <button
          id='button_save'
          onClick={(e) => setComment(e.target.value)}
          type="submit"
          name="button-save"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default CommentEdit;
