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
          <ul className="profile-button-collection">
            {songs.map((song) => (
              <Link to={`/song/${song?.id}`}>
                <div key={song?.id}></div>
                  <h4 id='title-h3'>{song?.userId}{song?.title}</h4>

              </Link>
            ))}
          </ul>

      </div>
    );
};

export default AllSongs;
