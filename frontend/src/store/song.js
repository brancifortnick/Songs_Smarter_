import { csrfFetch } from "./csrf";

//*constants*//
const GET_SONG = "songs/GET_SONG";
const ADD_SONG = "songs/ADD_SONG";
const UPDATE_SONG = "songs/UPDATE_SONG";
const DELETE_SONG = "songs/DELETE_SONG";
const GET_ONE_SONG = "songs/GET_ONE_SONG";
//*           action-creators              *//

const getSongs = (songs) => ({
  type: GET_SONG,
  songs,
});

const addSong = (song) => ({
  type: ADD_SONG,
  song,
});

const updateSong = (update) => ({
  type: UPDATE_SONG,
  update,
});

const removeSong = (id) => ({
  type: DELETE_SONG,
  id,
});

const getSong = (song) => ({
  type: GET_ONE_SONG,
  song,
});

//*                Thunks---          *//

export const getOneSong = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/songs/${id}`);
  if (res.ok) {
    const song = await res.json();
    dispatch(getSong(song));
    return song;
  }
};
//*          get all songs              *//

export const getAllSongs = () => async (dispatch) => {
  const res = await csrfFetch("/api/songs");
  // const data = await res.json();
  if (res.ok) {
    const songs = await res.json();
    dispatch(getSongs(songs));
    return songs;
  }
};

//*       add song                *//

export const createSong = (song) => async (dispatch) => {
  const { userId, title, url } = song;

  const res = await csrfFetch("/api/songs/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, title, url }),
  });

  if (res.ok) {
    const song = await res.json();
    dispatch(addSong(song));
  }
};

//*         edit a song         *//

// export const replaceSong = (update, remove, userId) => async (dispatch) => {
//     const data = JSON.stringify({
//       update,
//       remove,
//       userId,
//     });
//     const res = await csrfFetch("api/song/add", {
//       method: "PUT",
//       body: data,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     if (res.ok) {
//       const update = await res.json();
//       dispatch(updateSong(update));
//     }
//   };

export const deleteSong = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/songs/delete/${id}`, {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      dispatch(removeSong(id));
    }
};

//*            initialState               *//

const initialState = {};

//*         reducer          *//

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONG: {
      const allSongs = {};
      action.songs.forEach((song) => {
        allSongs[song.id] = song;
      });
      return allSongs;
    }
    case GET_ONE_SONG: {
      const oneSong = { ...action.song };
      return oneSong;
    }
    case ADD_SONG: {
      const newState = { ...state };
      newState[action.song] = action.song;
      return newState;
      // }
      // case UPDATE_SONG: {
      //     const newState = {...state}
      //     newState[action.song] = action.song;
    }
    case DELETE_SONG: {
      const newState = { ...state };
      delete newState[action.id];
      return newState;
    }
    default:
      return state;
  }
};

export default songsReducer;
