import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./SongForm.module.css";
import { useSelector, useDispatch } from "react-redux";
import { createSong } from "../../store/song";
import styles from "./SongForm.module.css";

const SongForm = () => {
  const history = useHistory();

  let user = useSelector(state => state.session.user);
  let userId = user.id;
  const dispatch = useDispatch();
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const song = { userId, title, url };
    dispatch(createSong(song));
    history.push('/song');
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={submitForm} className={styles.formContainer}>
        <div className={styles.formInputWrapper}>
          {/* <label>Artist</label>
          <input
            name="artist"
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          /> */}
          <div id="song_form_outterdiv">
            <input
              name="url"
              placeholder="ie: https://soundcloud.com/.."
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />

            <input
              name="title"
              type="text"
              placeholder="Title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <button
          placeholder=""
          className={styles.button}
          type="submit"
          name="song-submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SongForm;
