import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector, useStore } from "react-redux";
import AllComments from "../AllComments";
import { getOneSong } from "../../store/song";
import DeleteSong from "../DeleteSong";
import CommentCreate from "../CommentCreate/CommentCreate";
import { getUsers } from "../../store/users";
import "./SingleSong.css";


const SingleSong = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  let song = useSelector(state => (state.song));

  const openInNewTab = () => {
    const newWindow = window.open(song?.url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  useEffect(() => {
    dispatch(getOneSong());
  }, [dispatch]);

  // useEffect(()=> {
  //   dispatch(getUsers());
  // },[dispatch])
  return (
    <div className="audio_outter_div">
      <div id="single-song">
        <h2 className="song-title">{song?.title}</h2>
        <button className="single_song_button" onClick={openInNewTab}>
          Listen
        </button>
        {/* <DeleteSong /> */}
      </div>

      <div className='create_comment'>
        <CommentCreate />
      </div>
      <div className='comment_component_container'>
        <AllComments />
      </div>
    </div>
  );
};
export default SingleSong;
