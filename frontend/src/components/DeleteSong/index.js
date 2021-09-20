import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { deleteSong } from "../../store/song";

const DeleteSong = () => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();

  const deleteEvent = async (e) => {
    e.preventDefault();
    dispatch(deleteSong(Number(id)));
    history.push(`/song/${id}`);
  };

  return (
    <div>
      <button
        className="delete_button"
        onClick={deleteEvent}
        // disabled={!!false}
      >
        Remove Song
      </button>
    </div>
  );
};

export default DeleteSong;
