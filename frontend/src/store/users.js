// Define Action Types as Constants
const SET_USERS = "users/SET_USERS";
const GET_USERNAME = 'users/GET_USERNAME'
// Define Action Creators
const setUsers = (users) => ({
  type: SET_USERS,
  users,
});
const getUsername = (username) => ({
  type: GET_USERNAME,
  username,
})
// Define Thunks
export const getUsers = () => async (dispatch) => {
  const res = await fetch("/api/users");
  const users = await res.json();
  dispatch(setUsers(users));
};

export const getUsersUsername = (user) => async (dispatch) => {
  const res = await fetch(`/api/users/${user?.username}`);
  const username = await res.json();
  dispatch(getUsername(username));
};


// Define an initial state
const initialState = {};
// Define a reducer
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      const allUsers = {...state};
      action.users.forEach((user) => {
        allUsers[user.id] = user;
      });
      case GET_USERNAME:
        const userNames = { ...state };
        action.users.forEach((user) => {
          userNames[user.username] = user.username;
        });
      return {
        ...state,
        ...allUsers,
      };
    default:
      return state;
  }
};

export default usersReducer;
