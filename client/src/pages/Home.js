import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
  const auth = useContext(AuthContext);
 
  return (
    <div>
      <header>Home!</header>
      <p>Authenticated? {JSON.stringify(auth)}</p>
      <Link to={`/profile`}></Link>
    </div>
  );
};

export default Home;
