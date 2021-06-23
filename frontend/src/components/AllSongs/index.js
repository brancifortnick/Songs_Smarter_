import { getAllSongs } from "../../store/song";
import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


const AllSongs = () => {
    const dispatch = useDispatch();
    const songs = useSelector(state=> Object.values(state.songs))

    useEffect(()=> {
        dispatch(getAllSongs())
    },[dispatch])

    return(
        <div>
            <h2>This Worked</h2>
        </div>
    )
};

export default AllSongs;
