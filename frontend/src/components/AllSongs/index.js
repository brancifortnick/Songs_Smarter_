import { getAllSongs } from "../../store/song";
import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


const AllSongs = () => {
    const dispatch = useDispatch();
    // const {id} = useParams();

    const songs = useSelector(state => Object.values(state.songs))
    console.log(songs, "___________________________________________")
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
