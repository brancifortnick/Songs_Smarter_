import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AllComments from "../AllComments";
import { getOneSong } from "../../store/song";
import DeleteSong from "../DeleteSong";
import CommentCreate from "../CommentCreate/CommentCreate";
import "./SingleSong.css";
import DeleteComment from "../CommentDelete";
import SongForm from "../SongForm/SongForm";
//! import edit update and delete components//

const SingleSong = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  let song = useSelector((state) => Object.values(state?.song));
  song = song[0];

  const openInNewTab = () => {
    const newWindow = window.open(song?.url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  useEffect(() => {
    dispatch(getOneSong(Number(id)));
  }, [dispatch]);

  return (
    <div className="audio-photo">
      <div id="single-song">
        <h2 className="song-title">{song?.title}</h2>
        <button className="button" onClick={openInNewTab}>
          <h2 id="song-title" className="song-title">
            {song?.title}
          </h2>
          Listen here...
          <div>Delete your song</div>
        </button>
        <DeleteSong />
      </div>

      <div className='create_comment'>
        <CommentCreate />
      </div>
      <div className='all_comments'>
        <AllComments />
      </div>
    </div>
  );
};
export default SingleSong;
