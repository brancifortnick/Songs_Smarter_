import React, { useEffect, useState } from 'react';
import { useHistory} from 'react-router';
import './SongForm.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { createSong} from '../../store/song';
import {useParams} from 'react-router';
import styles from "./SongForm.module.css";
   const SongForm = () => {
     const history = useHistory()
        const {id} = useParams()
        let user = useSelector(state=> state.session.user)
        let userId = user.id;
        const dispatch = useDispatch();
        const[artist, setArtist] = useState('');
        const[link, setLink] = useState('');
        const[title, setTitle] = useState('');


        const submitForm = (e) => {
            e.preventDefault();
            const song = { userId, title, link, artist };
            dispatch(createSong(song))
            history.push(`/song/${userId}`)
        }



        return (
          <div className={styles.formContainer}>
            <form onSubmit={submitForm} className={styles.formContainer}>
              <div className="form-input-wrapper">
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
