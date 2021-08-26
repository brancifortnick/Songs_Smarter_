// // Define Action Types as Constants
// const SET_USERS = "users/SET_USERS";
// // Define Action Creators
// const setUsers = (users) => ({
//   type: SET_USERS,
//   users,
// });
// // Define Thunks
// export const getUsers = () => async (dispatch) => {
//   const res = await fetch("/api/users");
//   const users = await res.json();
//   dispatch(setUsers(users));
// };
// // Define an initial state
// const initialState = {};
// // Define a reducer
// const usersReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_USERS:
//       const allUsers = { ...state };
//       action.users.forEach((user) => {
//         allUsers[user.id] = user;
//       });
//       return {
//         ...state,
//         ...allUsers,
//       };
//     default:
//       return state;
// //   }
// // };

// export default usersReducer;
