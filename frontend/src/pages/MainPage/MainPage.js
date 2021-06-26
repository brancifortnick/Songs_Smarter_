import styles from "./MainPage.module.css";
import SearchBar from "../../components/SearchBar";
import UsersContainer from "../../components/UsersContainer";


const MainPage = () => {
  return (
    <div className={styles.mainPageContainer}>
      <h2 className={styles.heading}>'Search for Artists'</h2>
      <SearchBar />
      <UsersContainer />

    </div>
  );
};

export default MainPage;
