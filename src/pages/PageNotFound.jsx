import { Link } from "react-router-dom";
import PageNotFoundStyles from "../styles/PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <div className={PageNotFoundStyles.container}>
      <h1>Oh no! Error 404</h1>
      <h1>Maybe a cat have eaten this page before you come :(</h1>
      <Link to="/" className={PageNotFoundStyles.link}>
        Back to dashboard ?
      </Link>
    </div>
  );
};

export default PageNotFound;
