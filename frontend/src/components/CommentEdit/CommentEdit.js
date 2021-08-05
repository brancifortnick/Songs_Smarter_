import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { editComment } from "../../store/comment";


const CommentEdit = ({ id }) => {
  const dispatch = useDispatch()

  const [edit, setEdit] = useState(false);
  const [ comment, setComment] = useState('')
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('editCOmoment about to be hit with ,', id , comment)
        dispatch(editComment(id, comment))
    }

console.log('comment', comment)
  return (
    <div className='edit_button'>
      <button type="submit" name="button-edit" onClick={() => setEdit(!edit)}>
        Edit
      </button>
      <form onSubmit={onSubmit} className="edit-form">
        <input type="textarea" value={comment} onChange={e => setComment(e.target.value)}></input>
        <button type="submit" name="button-save">
          Save
        </button>
      </form>
    </div>
  );
};

export default CommentEdit;
