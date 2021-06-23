import styles from "./MainPage.module.css";
import SearchBar from "../../components/SearchBar";
import UsersContainer from "../../components/UsersContainer";
// import AudioPlayer from '../../assets/AudioStems/audioplayer';

const MainPage = () => {
  return (
    <div>
      <h2 className={styles.heading}>Search For Artists</h2>
      <SearchBar />
      <UsersContainer />

    </div>
  );
};

export default MainPage;
