import styles from "./MainPage.module.css";
import SearchBar from "../../components/SearchBar";
import UsersContainer from "../../components/UsersContainer";
import SongForm from "../../components/SongForm/SongForm";
import AllSongs from "../../components/AllSongs";
const MainPage = () => {
  return (
    <div className={styles.mainPageContainer}>
      <h2 className={styles.heading}>'Search for Artists'</h2>
      <SearchBar />
      <UsersContainer />
      <SongForm />
      <AllSongs />
    </div>
  );
};

export default MainPage;
