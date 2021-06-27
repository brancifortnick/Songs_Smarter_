import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AllComments from "../AllComments";
import { getOneSong } from '../../store/song';
import DeleteSong from "../DeleteSong";
import CommentCreate from "../CommentCreate/CommentCreate";
import  "./SingleSong.css";
import DeleteComment from "../CommentDelete";
//! import edit update and delete components//

const SingleSong = () => {
    const dispatch = useDispatch();
    const { id } = useParams()
    const song = useSelector(state => Object.values(state.song));
    // console.log(song,'_____________________________')

    // const blue = songs.filter((song)=> {
    //     if(song.id === id)
    //     return song;
    // })
    useEffect(()=> {

        dispatch(getOneSong(Number(id)))
    },[dispatch, id])

        return (
          <div className='audio-photo'>
            <div id="single-song">
              {/* <h1>{song[0].title}</h1> */}
              <DeleteSong />
            </div>
            <div>
              <CommentCreate />
            </div>
            <div>
              <AllComments />
            </div>
          </div>
        );

}
export default SingleSong;
