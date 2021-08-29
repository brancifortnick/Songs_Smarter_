import { getAllSongs } from "../../store/song";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./AllSongs.css";
const AllSongs = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => Object.values(state.song));

  let count = 0;

  useEffect(() => {
    dispatch(getAllSongs());
  }, [dispatch]);

  return (
    <div id="songsContainer">
      <ul className="song_list">
        {songs.map(song => (
          <Link to={`/song/${song?.id}`}>
            <div id="song-id" className="song-id" key={song?.id}></div>
            <div id="title-h3">
             {song?.title}
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default AllSongs;
