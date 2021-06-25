import { csrfFetch } from "./csrf";


//*constants*//
const GET_SONGS = 'songs/GET_SONGS';
const ADD_SONG = 'songs/ADD_SONG';
const UPDATE_SONG = 'songs/UPDATE_SONG';
const DELETE_SONG = 'comments/DELETE_SONG';

//*           action-creators              *//


const getSongs = (songs) => ({
    type: GET_SONGS,
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

const removeSong = (remove) => ({
  type: DELETE_SONG,
  remove,
});


//*                Thunks---          *//
//*          get all songs              *//


export const getAllSongs = () => async(dispatch)=> {
    const res = await csrfFetch('/api/songs');
    // const data = await res.json();
    if(res.ok){
        const songs = await res.json()
        dispatch(getSongs(songs));
    }
};

//*       add song                *//

export const createSong = (song) => async(dispatch) => {
  const {userId, title, link, artist} = song;
     console.log(song)
    const res = await csrfFetch('api/songs', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({userId, title, link, artist})
    });

    if(res.ok) {
        const song = await res.json();
        dispatch(addSong(song))
    }
};

//*         edit a song         *//

export const replaceSong = (update, remove, userId) => async (dispatch) => {
    const data = JSON.stringify({
      update,
      remove,
      userId,
    });
    const res = await csrfFetch("api/song/add", {
      method: "PUT",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const update = await res.json();
      dispatch(updateSong(update));
    }
  };

export const deleteSong = (remove, userId) => async(dispatch)=> {
    const res = await csrfFetch("api/song", {
      method: "DELETE",
        body: JSON.stringify({
            remove,
            userId,
        }),
      headers: {
        "Content-Type": "application/json",
      },
    });
        if (res.ok) {
            const remove = await res.json();
                dispatch(removeSong(remove));
        }
};




//*            initialState               *//

const initialState = {};

//*         reducer          *//

const songsReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_SONGS: {
            const allSongs = {};
              action.songs.forEach(song => {
                allSongs[song.id] = song;
            })
                return allSongs;
        };
        case ADD_SONG: {
            const newState = {...state}
            newState[action.song] = action.song;
                return newState
        }
        case UPDATE_SONG: {
            const newState = {...state}
            newState[action.song] = action.song;
        }
        case DELETE_SONG: {
            const newState = {...state}
            delete newState[action.remove]
            return newState;
        }
            default:
                return state;
    }
};

export default songsReducer;
