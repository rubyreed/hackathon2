import React, {useContext} from "react";
import {Link, Outlet, useNavigate} from "react-router-dom";
import {AuthContext} from "../providers/AuthProvider";



const NavBar = () => {
  let nav = useNavigate();

  const { authenticated, handleLogout } = useContext(AuthContext);
  const renderAuthLinks = () => {
    if (authenticated) {
      return <button onClick={() => handleLogout(nav)}>Logout</button>;
    }
  return (
    <div style={styles.loggedIn}>
        <Link style={styles.link} to="/profile">Profile</Link>
        <Link style={styles.link} to="/shoppinglist">Shopping List</Link>
        <Link style={styles.link} to="/recipebook">Recipe Book</Link>
    </div>
    )
  }
    return(
      <div style={styles.container}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/public">Public</Link>
        <Link style={styles.link} to="/protected">Protected</Link>
        {authenticated && <Link to="/recipebook" style={styles.link}>My Recipe Book</Link>}
        <Link style={styles.link} to="/aboutus">About Us</Link>
        <Link style={styles.link} to="/register">Register</Link>
        <Link style={styles.link} to="/login">Login</Link>
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