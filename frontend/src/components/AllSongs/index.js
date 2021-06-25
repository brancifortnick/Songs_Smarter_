import { getAllSongs } from "../../store/song";
import React, { useEffect } from "react";
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
      <div>
        <ul>
          {songs.map((song) => (
            <ul key={song.id}>{song.title}</ul>
          ))}
          hi
        </ul>
      </div>
    );
};

export default AllSongs;
