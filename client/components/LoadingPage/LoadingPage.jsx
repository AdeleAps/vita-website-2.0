import styles from "./LoadingPage.module.scss";
import PuffLoader from "react-spinners/PuffLoader";

const LoadingPage = () => {

  return (
    <div className={styles.loadingPage}>
      <PuffLoader
        aria-label="Loading Animation"
        color="#290023"
      />
    </div>
  );
};
export default LoadingPage;
