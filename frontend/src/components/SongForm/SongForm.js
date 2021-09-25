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
          <h1 className={styles.uploadtext}>| Upload Here |</h1>
            <input
              className={styles.linkinput}
              name="url"
              placeholder="Link..."
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <input
              className={styles.titleinput}
              name="title"
              type="text"
              placeholder="Title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
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
