import { getUsers, getUsersUsername} from "../../store/users";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./UsersPage.css";
import usersReducer from "../../store/users";
import UserRow from "../UserRow";
const AllUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => Object.values(state.users));
  console.log(users, 'users>>>>>>>>><<<<<<<<<<<<<<')


  useEffect(() => {
    dispatch(getUsersUsername());
  }, [dispatch]);

  return (
    <div className="outermost_div">
      <div id="songs-container" className="songs_container">
        <div id="hold-ptag">
          <p id="all-song-text" className="all_song_text">
            Hello and Welcome to the Song Page Check out some of our communities
            recently uploaded music!
          </p>
        </div>
        <ul className="user_list">
          {users.map((user) => (
            <Link to={`/users/${user?.id}`}>
              <div id="user-id" className="user-id" key={user?.id}></div>
              <div id="title-h3">{user?.username}</div>
            </Link>
          ))}
        </ul>
        <div className="image_two">{"hello"}</div>
      </div>
    </div>
  );
};

export default AllUsers;
