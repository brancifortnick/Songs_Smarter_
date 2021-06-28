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
        <div id="single-song">
          <h2></h2>
          <ul id='comment-text'>
            {comments.map((comment) => (
              <div key={comment?.id}>
                {comment?.body}

                <DeleteComment commentId={comment?.id} />
                <CommentEdit id={comment?.id} />
              </div>
            ))}
          </ul>
        </div>
      </div>
    );

}
export default AllComments;
