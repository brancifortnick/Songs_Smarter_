import styles from "./MainPage.module.css";
import SearchBar from "../../components/SearchBar";
import UsersContainer from "../../components/UsersContainer";
import SignupFormPage from "../../components/SignupFormPage";
import LoginFormPage from "../../components/LoginFormPage";
const MainPage = () => {
  return (
    <div className={styles.mainPageContainer}>
      <h2 className={styles.heading}></h2>
      <SignupFormPage />
      <LoginFormPage />
      {/* <UsersContainer /> */}
    </div>
  );
};

export default MainPage;
