import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useParams} from 'react-router';
import { deleteComment } from '../../store/comment';
import './CommentDelete.css'



const DeleteComment = ({commentId}) => {
  console.log(commentId)
    const dispatch = useDispatch();
    const history = useHistory();
    const {id} = useParams();

    const deleteEvent = async(e) => {
        e.preventDefault();
        console.log('deleted comment', commentId, Number(id), "____SONGID")
        await dispatch(deleteComment(commentId))

        history.push(`/song/${id}`);
    }

    return (
      <form className="deleteFormContainer">
        <div className="delete-wrapper">
          <button className="delete-comment" onClick={deleteEvent}>
            Delete Comment
          </button>
        </div>
      </form>
    );
}

export default DeleteComment;
