import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Upload.module.css";
import { useState, useEffect } from "react";
import { createSong } from '../../store/song'
import { useHistory } from 'react-router';
import { useParams } from "react-router";



const Upload = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const[title, setTitle] = useState('')
    const[url, setUrl] = useState("");
    const[userId, setUserId] = useState('')
    const[fileUpload, setFileUpload] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        const song = {
          title,
          url,
          userId,
        }
      const addedSong = dispatch(createSong(song));//!createSong
      if(addedSong)
       history.push(`/songs/${addedSong.id}`) //? go to song page
    }

    useEffect(()=> {

    },[dispatch])

    return (
      <div className="song-form-container">
        <form onSubmit={onSubmit}>
          <div>
            <input
              name="song-link"
              type="text"
              value={fileUpload}
              onChange={(e) => setFileUpload(e.target.value)}
              required
            />

            <input type="file" name="songUpload"></input>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}


export default Upload;
