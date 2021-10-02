import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SongForm from "./components/SongForm";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import MainPage from "./pages/MainPage";
import AllSongs from "./components/AllSongs";

import AllComments from "./components/AllComments";
import SingleSong from "./components/SingleSong";
import CommentDelete from "./components/CommentDelete";
import UserRow from "./components/UserRow";
import UsersContainer from "./components/UsersContainer";
import UsersPage from "./components/UsersPage/UsersPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/song/:id">
            <SingleSong />
          </Route>
          <Route path="/upload">
            <SongForm />
          </Route>
          <Route path="/song">
            <AllSongs />
            <Route path="/users/:id">
              <UsersContainer />
              <UserRow />
              {/* <UsersPage /> */}
            </Route>
          </Route>
          {/* <Route path="/add-songs">
            <SongForm />
          </Route> */}
        </Switch>
      )}
    </>
  );
}

export default App;
