import React, {useContext} from "react";
import {Link, Outlet, useNavigate} from "react-router-dom";
import {AuthContext} from "../providers/AuthProvider";



const NavBar = () => {
  let nav = useNavigate();

  const { authenticated, handleLogout } = useContext(AuthContext);
  const renderAuthLinks = () => {
    if (authenticated) {
      return (
      <>
        <Link style={styles.link} to="/shoppinglists">Shopping List</Link>
        <Link style={styles.link} to="/recipebook">Recipe Book</Link>
        <Link style={styles.link} to="/profile">Profile</Link>
        <button onClick={() => handleLogout(nav)}>Logout</button>
      </>
    )}
  return (
    <>
        <button><Link to="/register">Register</Link></button>
        <button><Link to="/login">Login</Link></button>
    </>
    )
  };
    return(
      <div style={styles.container}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/aboutus">About Us</Link>
        {renderAuthLinks()}
      <div>
        <Outlet/>
      </div>
    </div>
  )
};

const styles = {
  container: {
      margin: "0px",
      padding: "10px",
      justifyContent: "center",
      backgroundColor: "#6B9A55",
      display: "flex",
      flexDirection: "row",
  },
  link: {
      textDecoration: "none",
      margin: "10px 20px",
      color: "white",
      fontSize: "18px"
  },
  loggedIn: {
      padding: "10px 0px 0px 0px",
  }
}

export default NavBar;