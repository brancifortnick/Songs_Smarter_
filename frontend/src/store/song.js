import { csrfFetch } from "./csrf";


//*constants*//
const GET_SONGS = 'songs/GET_SONGS'; //!case


// get1song
// add1song
// 1update
// 1delete

//*action creators


const getSongs = (songs) => ({
    type: GET_SONGS,
    songs, //!<====payload
});



//*Thunks---can not console log inside of thunks*//

export const getAllSongs = () => async(dispatch)=> {
    const res = await csrfFetch('/api/song');
    const data = await res.json();
    if(res.ok){
        dispatch(getSongs(data));
    }
};



//*  initial state
const initialState = {};
//*reducers

const songsReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_SONGS: {
            const allSongs = {...state};
              action.songs.forEach((song)=> {
                allSongs[song.id] = song;
            })
            console.log(allSongs, "###########----from reducer")
            return allSongs;
        }
        default:
            return state;
    }
};

export default songsReducer;
