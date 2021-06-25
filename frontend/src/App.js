import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SongForm from './components/SongForm';
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import MainPage from "./pages/MainPage";
import AllSongs from './components/AllSongs';
// import Player from './components/AudioPlayer';
import Upload from './components/Upload';
import AllComments from "./components/AllComments";
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
          <Route path='/song'>
            <AllSongs />
          </Route>
          <Route path='/upload'>
            <Upload />
          </Route>
          <Route path='/comments'>
            <AllComments />
          </Route>
          <Route path='/add-songs'>
            <SongForm />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
