import React, { useContext, useState } from "react";
import EditUser from "../components/EditUser";
import { AuthContext } from "../providers/AuthProvider";


const Profile = () => {
  const auth = useContext(AuthContext);
  const [showEdit, setShowEdit] = useState(false);

  const toggleShowEdit = () =>{
    setShowEdit(!showEdit);
  };


  return (
    <div>
      <h1>My Profile</h1>
      <h3>Hey, {auth.name}!</h3>
      {/* <img src={auth.image} /> */}
      {/* <p>email: {auth.email}</p> */}
      <button onClick={() => setShowEdit(!showEdit)}>Edit Profile</button>
      { showEdit && <EditUser/>}

      
    </div>

  )
};

export default Profile;