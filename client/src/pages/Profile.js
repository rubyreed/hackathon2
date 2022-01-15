import React, { useContext } from "react";
import EditUser from "../components/EditUser";
import { AuthContext } from "../providers/AuthProvider";

const Profile = () => {
  const auth = useContext(AuthContext);


  return (
    <div>
      <h1>Profile</h1>
      <h3>Hey, {auth.name}!</h3>
      <img src={auth.image} />
      <p>email: {auth.email}</p>
      <EditUser/>
    </div>
  )
}

export default Profile;