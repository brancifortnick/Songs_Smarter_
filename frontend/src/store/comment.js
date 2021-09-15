import { csrfFetch } from "./csrf";

//*action creators//
//*reducer//
//*thunks//
//*initial state//

//*         Constants           *//

const GET_COMMENT = "comment/GET_COMMENT";
const CREATE_COMMENT = "comment/CREATE_COMMENT";
const EDIT_COMMENT = "comment/EDIT_COMMENT";
const DELETE_COMMENT = "comment/DELETE_COMMENT";

//*           action-creators              *//

const get = (comment) => ({
  type: GET_COMMENT,
  payload: comment,
});

const create = (comment) => ({
  type: CREATE_COMMENT,
  payload: comment,
});

const edit = (comment) => ({
  type: EDIT_COMMENT,
  payload: comment,
});

const remove = (id) => ({
  type: DELETE_COMMENT,
  id,
});

//*            thunks            *//
//*        get the comments      *//

export const getComments = () => async (dispatch) => {
  const res = await csrfFetch("/api/comment/all", {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
    },
  });
  if (res.ok) {
    const comments = await res.json();
    dispatch(get(comments));
    return comments;
  }
};

//*        add/create comment                *//

export const createComment = (comment) => async (dispatch) => {
  const res = await csrfFetch("/api/comment/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  });

  if (res.ok) {
    const comment = await res.json();
    dispatch(create(comment));
    return comment;
  }
};

// //*         edit              *//

export const editComment = (commentId, comment) => async (dispatch) => {
  console.log(commentId, "_________commentId________");
  const data = JSON.stringify({
    commentId,
    comment, //comment should be body?
  });
  const res = await csrfFetch(`/api/comment/${commentId}`, {
    method: "PUT",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.ok) {
    const comment = await res.json();
    dispatch(edit(comment));
  }
};

// //*     delete       *//

export const deleteComment = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/comment/delete/${id}`, {
    method: "DELETE",
    body: JSON.stringify({ id }),
  });
  if (res.ok) {
    dispatch(remove(id));
    return res;
  }
};

//*            initialState               *//

const initialState = {};

//*         reducer          *//

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENT: {
      const allComments = {};
      action.payload.forEach((comment) => {
        allComments[comment.id] = comment;
      });
      return allComments;
    }
    case CREATE_COMMENT: {
      const newState = { ...state };
      newState[action.comment] = action.comment;
      return newState;
    }
    case EDIT_COMMENT: {
      const newState = { ...state };
      newState[action.payload] = action.payload;
      return newState;
    }
    case DELETE_COMMENT: {
      const newState = { ...state };
      delete newState[action.id];
      return newState;
    }

    default:
      return state;
  }
};
export default commentReducer;
