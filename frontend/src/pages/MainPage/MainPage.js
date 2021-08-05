import styles from "./MainPage.module.css";
import SearchBar from "../../components/SearchBar";
import UsersContainer from "../../components/UsersContainer";
import SignupFormPage from "../../components/SignupFormPage";
const MainPage = () => {
  return (
    <div className={styles.mainPageContainer}>
      <h2 className={styles.heading}>Search Music</h2>
      <SearchBar />
      <SignupFormPage />
      {/* <UsersContainer /> */}
    </div>
  );
};

export default MainPage;
