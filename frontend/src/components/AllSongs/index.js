import { getAllSongs } from "../../store/song";
import React, { useEffect } from "react";
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router'
import { useSelector, useDispatch } from "react-redux";
import './AllSongs.css'
    // const {id} = useParams();
const AllSongs = () => {
    const dispatch = useDispatch();
    const songs = useSelector(state => Object.values(state.song))



    useEffect(()=> {
        dispatch(getAllSongs())
    },[dispatch])



    return (
      <div id="songsContainer">
        <ul>
          {songs.map((song) => (
            <Link to={`/song/${song?.id}`}>
              <div key={song?.id}>{song?.title}</div>
            </Link>
          ))}
        </ul>
      </div>
    );
};

export default AllSongs;
