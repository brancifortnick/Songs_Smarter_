import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AllComments from "../AllComments";
import { getOneSong } from '../../store/song';
import DeleteSong from "../DeleteSong";
//! import edit update and delete components//

const SingleSong = () => {
    const dispatch = useDispatch();
    const song = useSelector(state => state.song);
    console.log(song,'_____________________________')
    useEffect(()=> {

        dispatch(getOneSong(song))
    },[dispatch, song])

        return (
          <div><h1>
            {song.title}
           </h1>
            <DeleteSong />
            <AllComments />
          </div>
        );

}
export default SingleSong;
