import styles from "./MainPage.module.css";
import SearchBar from "../../components/SearchBar";
import UsersContainer from "../../components/UsersContainer";
import usersReducer from "../../store/users";
import SignupFormPage from "../../components/SignupFormPage";

const MainPage = () => {
  return (
    <div className={styles.mainPageContainer}>
      <h2 className={styles.heading}></h2>
      <SignupFormPage />
    </div>
  );
};

export default MainPage;
