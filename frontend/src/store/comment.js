import {csrfFetch} from './csrf';

//*action creators//
//*reducer//
//*thunks//
//*initial state//


//*         Constants           *//


const GET_COMMENT = "comments/GET_COMMENT"
const CREATE_COMMENT = 'comments/CREATE_COMMENT';
const EDIT_COMMENT = 'comments/EDIT_COMMENT';
const DELETE_COMMENT = 'comments/DELETE_COMMENT';



//*           action-creators              *//


const get = (comments) => ({
  type: GET_COMMENT,
  payload: comments,
});


// const create = (addComment )=> ({
//     type: CREATE_COMMENT,
//     payload: addComment,
// });

// const edit = (commentEdit) => ({
//     type: EDIT_DELETE,
//     payload: commentEdit
// });

// const remove = (commentId) => ({
//     type: DELETE_COMMENT,
//     payload: commentId,
// });


//*            thunks            *//
//*        get the comments      *//

export const getComments = () => async(dispatch)=> {
    const res = await csrfFetch('/api/comment/all');
    if(res.ok){
        const comments = await res.json();
        dispatch(get(comments))
    }
}

//*        add/create comment                *//

// export const createComment = (addComment) => async(dispatch) => {
//     addComment = JSON.stringify(addComment);

//     const res = await csrfFetch('api/comment',{
//         method: "POST",
//         body: addComment,
//         headers: {
//             "Content-Type": "application/json",
//         }
//     });

//        if(res.ok) {
//         const comment = await res.json();
//            dispatch(create(comment))
//        }
//     };

// //*         edit              *//

// export const editComment = (commentEdit, commentId, userId) => async (dispatch)=> {
//     const data = JSON.stringify({
//         commentEdit,
//         commentId,
//          userId,
//      });
//      const res = await csrfFetch('api/comment', {
//          method: "PUT",
//          body: data,
//          headers: {
//              "Content-Type": "application/json",
//          }
//      });
//      if(res.ok){
//          const comment = await res.json();
//          dispatch(edit(comment))
//      }
// }

// //*     delete       *//

// export const deleteComment = (commentId, userId ) => async(dispatch)=> {
//     const res = await csrfFetch('api/comment', {
//         method: "DELETE",
//             body: JSON.stringify({
//                 commentId,
//                 userId,
//             }),
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     });
//         if(res.ok){
//             const comment = await res.json();
//                dispatch(remove(comment))
//         }
// };


//*            initialState               *//

const initialState = {}

//*         reducer          *//

const commentReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_COMMENT: {
            const allComments = {...state};
            action.payload.forEach(comment=> {
                allComments[comment.id] = comment;
            })
            return allComments;
        };
        // case CREATE_COMMENT: {
        //     const newState = {...state}
        //     newState[action.addComment] = action.addComment;
        //     return newState
        // }
        // case EDIT_COMMENT: {
        //     const newState = {...state}
        //     newState[action.payload] = action.payload;
        //     return newState;
        // }
        // case DELETE_COMMENT: {
        //     const newState = {...state}
        //     delete newState[action.commentId]
        //     return newState;
        // }
        default:
            return state;
    }
};
export default commentReducer;
