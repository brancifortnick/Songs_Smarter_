import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useParams} from 'react-router';
import { deleteComment } from '../../store/comment';
import './CommentDelete.css'



const DeleteComment = (id) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const deleteEvent = async(e) => {
        e.preventDefault();
        await dispatch(deleteComment(id))
        console.log('deleted comment', id)
        history.push('/');
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
