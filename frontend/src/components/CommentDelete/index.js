import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useParams} from 'react-router';
import { deleteComment } from '../../store/comment';



const DeleteComment = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();


    const deleteEvent = async(e) => {
        e.preventDefault();
        dispatch(deleteComment(Number(id)))
        history.push('/');
    }

    return (
        <div>
            <button onClick={deleteEvent}>
                Delete Comment
            </button>
        </div>
    )
}

export default DeleteComment;
