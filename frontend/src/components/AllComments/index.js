import { useEffect, useState, useHistory } from "react"
import { useSelector, useDispatch} from "react-redux"
import { getComments} from '../../store/comment';
import DeleteComment from '../CommentDelete';
import CommentEdit from '../CommentEdit'
import './AllComments.css';
import SingleSong from '../SingleSong/index';

const AllComments = () => {
    const dispatch = useDispatch();
    const comments = useSelector(state=> Object.values(state.comment))
    useEffect(()=> {
        dispatch(getComments())
    },[dispatch, DeleteComment])

    return (
      <div>
        <form className="form-container">
          <div className="all_comments">
            <ol id="comment-text">
              {comments.map(comment => (
                <div key={comment?.id}>
                  {comment?.body}
                  <div>
                  <DeleteComment commentId={comment?.id} />
                  </div>
                  <div>
                  <CommentEdit id={comment?.id} />
                  </div>
                </div>
              ))}
            </ol>
          </div>
        </form>
      </div>
    );

}
export default AllComments;
