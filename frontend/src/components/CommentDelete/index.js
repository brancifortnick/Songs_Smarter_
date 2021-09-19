import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useParams} from 'react-router';
import { deleteComment } from '../../store/comment';
import './CommentDelete.css'



const DeleteComment = ({commentId}) => {
  // console.log(commentId)
    const dispatch = useDispatch();
    const history = useHistory();
    const {id} = useParams();

    const deleteEvent = async(e) => {
        e.preventDefault();
        await dispatch(deleteComment(commentId))

        history.push(`/song/${id}`);
    }

    return (
      <div>
        <form className="deleteFormContainer">
          <div className="delete-wrapper">
            <button className="delete-comment" onClick={deleteEvent}>
              Delete
            </button>
          </div>
        </form>
      </div>
    );
}

export default DeleteComment;
