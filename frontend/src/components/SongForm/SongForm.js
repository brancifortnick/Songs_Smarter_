import React, { useEffect, useState } from 'react';
import { useHistory} from 'react-router';
import './SongForm.module.css'
import { useSelector, useDispatch } from 'react-redux';
// import { Redirect, Link } from 'react-router-dom';
import { createSong} from '../../store/song';
import {useParams} from 'react-router';

   const SongForm = () => {
        const {id} = useParams()
        let user = useSelector(state=> state.session.user)
        let userId = id;
        const dispatch = useDispatch();
        const[artist, setArtist] = useState('');
        const[link, setLink] = useState('');
        const[title, setTitle] = useState('');


        const submitForm = (e) => {
            e.preventDefault();
            dispatch(createSong({userId, title, link, artist}))

        }



        return (
          <div>
            <form onSubmit={submitForm} className="form-container">
              <div className="form-inpuit-wrapper">
                <label>Artist</label>
                <input
                  name="artist"
                  type="text"
                  value={artist}
                  onChange={(e) => setArtist(e.target.value)}
                />
                <label>Link</label>
                <input
                  name="link"
                  type="text"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
                <label>Title</label>
                <input name='title' type='text' value={title} onChange={(e)=> setTitle(e.target.value)}/>
              </div>
              <button type='submit' name='song-submit'>Submit</button>
            </form>
          </div>
        );
    };


export default SongForm;
