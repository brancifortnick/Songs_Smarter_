import { useEffect, useState, useHistory } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getComments } from "../../store/comment";
import DeleteComment from "../CommentDelete";
import CommentEdit from "../CommentEdit";
import "./AllComments.css";


const AllComments = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => Object.values(state.comment));

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);
  let count = 0;
  return (
    <div>
      <form className="form-container">
        <div className="all_comments">
          <div id="comment_text">
            {comments.map((comment) => (
              <div type='text' className="comment_body" key={comment?.id}>
               <div className='comment-text-div' type='text'>{comment?.songId + ")."} {comment?.body}</div>
                <div className="comment_id">
                  <CommentEdit CommentId={comment} />
                </div>
                <div className="delete_button">
                  <DeleteComment commentId={comment?.id} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};
export default AllComments;
