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
    },[dispatch])

    return (
      <div>
        <form className="form-container">
          <div className="all_comments">
            <ol id="comment_text">
              {comments.map(comment => (
                <div
                className='comment_body'
                key={comment?.id}>
                  {comment?.body}
                  <div className='comment_id'>
                  <CommentEdit id={comment?.id} />
                  </div>
                  <div className='delete_button'>
                  <DeleteComment commentId={comment?.id} />
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
