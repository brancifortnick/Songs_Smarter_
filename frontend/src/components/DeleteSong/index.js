import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useParams} from 'react-router';
import { deleteSong } from '../../store/song';



const DeleteSong = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();


    const deleteEvent = async(e) => {
        e.preventDefault();
        dispatch(deleteSong(Number(id)))
        history.push('/');
    }

    return (
        <div>
            <button
            className='delete_button'
            onClick={deleteEvent}>
                Delete Song
            </button>
        </div>
    )
}

export default DeleteSong;
