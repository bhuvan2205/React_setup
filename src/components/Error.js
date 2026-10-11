import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="error">
      <h1>Oops!</h1>
      <p>
        Error: <strong>{error.status}</strong> {error.statusText}
      </p>
      <Link to="/">
        <button className="button">Go to Home Page</button>
      </Link>
    </div>
  );
};

export default Error;
