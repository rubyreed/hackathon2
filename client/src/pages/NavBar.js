import React, {useContext} from "react";
import {Link, Outlet, useNavigate} from "react-router-dom";
import {AuthContext} from "../providers/AuthProvider";
import logo from "./foodielogo.png";



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
        <button style={styles.buttonLink} onClick={() => handleLogout(nav)}>Logout</button>
      </>
    )}
  return (
    <>
        <Link style={styles.link} to="/register">Register</Link>
        <Link style={styles.link} to="/login">Login</Link>
    </>
    )
  };
    return(
      <div style={styles.container}>
      <img style={{height:"50px", width:"60px", marginRight:"300px"}} src={logo} alt="logo"/>
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
  },
  buttonLink: {
    textDecoration: "none",
    margin: "10px",
    color: "white",
    border: '0px',
    backgroundColor: '#6B9A55',
    fontSize: '16px',
}
}

export default NavBar;