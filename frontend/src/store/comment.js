import {csrfFetch} from './csrf';

//*action creators//
//*reducer//
//*thunks//
//*initial state//


//*         action           *//


const GET = "comments/GET"
const CREATE = 'comments/CREATE';
const EDIT = 'comments/EDIT';
const DELETE = 'comments/DELETE';



//*           action-creators              *//


const get = (commentList) => ({
  type: GET,
  commentList,
});


const create = addComment => ({
    type: CREATE,
    addComment,
});

const edit = commentEdit => ({
    type: EDIT,
    commentEdit
});

const remove = commentId => ({
    type: DELETE,
    commentId,
});



//*        get the comments      *//

export const getComments = () => async(dispatch)=> {
    const res = await csrfFetch(`/api/comment`)
    if(res.ok){
        const comments = await res.json()
        dispatch(get(comments))
    }
}

//*        add/create comment                *//

export const createComment = (addComment) => async(dispatch) => {
    addComment = JSON.stringify(addComment);

    const data = await csrfFetch('api/comment',{
        method: "POST",
        body: addComment,
        headers: {
            "Content-Type": "application/json",
        }
    });
       if(data.ok) {
          const comment = await res.json();
           dispatch(create(comment))
       }
    };

//*         edit              *//

export const editComment = (commentEdit, commentId, userId) => async (dispatch)=> {
    const data = JSON.stringify({
        commentEdit,
        commentId,
         userId,
     });
     const res = await csrfFetch('api/comment', {
         method: "PUT",
         body: data,
         headers: {
             "Content-Type": "application/json",
         }
     });
     if(res.ok){
         const comment = await res.json();
         dispatch(edit(comment))
     }
}

//*     delete       *//

export const deleteComment = (commentId, userId ) => async(dispatch)=> {
    const data = await csrfFetch('api/comment', {
        method: "DELETE",
        body: JSON.stringify({
            commentId,
            userId,
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    });
        if(data.ok){
            const comment = await res.json();
               dispatch(remove(comment))
        }
};


//*            initialState               *//

const initialState = {}

//*         reducer          *//

const commentReducer = (state = initialState, action) => {
    switch(action.type){
        case GET: {
            const allComments = {};
            action.commentList.forEach(comment=> {
                allComments[comment.id] = comment;
            })
            return allComments;
        };
        case Create: {
            const newState = {...state}
            newState[action.addComment] = action.addComment;
            return newState
        }
        case EDIT: {
            const newState = {...state}
            newState[action.addComment] = action.addComment;
            return newState;
        }
        case REMOVE: {
            const newState = {...state}
            delete newState[action.commentId]
            return newState;
        }
        default:
            return state;
    }
};
export default commentReducer;
