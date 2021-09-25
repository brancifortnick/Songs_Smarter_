import { getAllSongs } from "../../store/song";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./AllSongs.css";


const AllSongs = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => Object.values(state.song));
  useEffect(() => {
    dispatch(getAllSongs());
  }, [dispatch]);

  return (
    <div className="outermost_div">
      <div className="songs_container">
        <div id="hold-ptag">
          <p className="p_text">
            Check out some of our communities most recently uploaded music.
            <br />
          </p>
        </div>
        <ul className="song_list">
          {songs.map((song) => (
            <Link to={`/song/${song?.id}`}>
              <div id="song-id" className="song-id" key={song?.id}></div>
              <div className="all_songs" type="text">
                {song?.title}
              </div>
            </Link>
          ))}
        </ul>
        {/* <div className="additional_div">{"hello"}</div> */}
      </div>
    </div>
  );
};

export default AllSongs;
