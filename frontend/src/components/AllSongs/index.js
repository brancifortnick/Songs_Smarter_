import { getAllSongs } from "../../store/song";
import React, { useEffect } from "react";
import { useHistory } from 'react-router'
import { useSelector, useDispatch } from "react-redux";


const AllSongs = () => {
    const dispatch = useDispatch();
    // const {id} = useParams();

    const songs = useSelector(state => Object.values(state.song))
    console.log(songs)
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
