import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useParams} from 'react-router';
import commentReducer from '../../store/comment';
import { deleteSong } from '../../store/song';
import usersReducer from '../../store/users';



const DeleteSong = () => {
    const history = useHistory();
    const { id } = useParams();


    const dispatch = useDispatch();
    const deleteEvent = async(e) => {
        e.preventDefault();
        dispatch(deleteSong(Number(id)))
        history.push('/');
    }

    return (
        <div>
            <button
            className='delete_button'
            onClick={deleteEvent}
            disabled={!!false}
            >
            Delete Song
            </button>
        </div>
    )
}

export default DeleteSong;
