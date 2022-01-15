import {useContext, useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import ImageUpload from "./ImageUpload";


const EditUser= (props) => {
  const [email, setEmail] = useState("")
  const [image, setImage] = useState("")
  const [name, setName] = useState("")
  const [id, setId] = useState("")
  const navigate = useNavigate();
  const auth = useContext(AuthContext);



  useEffect(() => {
    getData();
  }, [])

  const getData = () => {
    setEmail(`${auth.email}`)
    {auth.image && setImage(`${auth.image}`)}
    {auth.name && setName(`${auth.name}`)}
    setId(`${auth.id}`)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.handleEdit({email, image, name, id}, navigate);
    refreshPage()
  };

  function refreshPage(){
    window.location.reload(false);
  };


  return (
    <div>
      <h2>Edit My Profile</h2>
      {/* <ImageUpload id={auth.id}/> */}
      <form onSubmit={handleSubmit}>
      {/* <p>{auth.id}</p> */}
        <p>Name</p>
        <input 
        value={name} 
        onChange={(e)=>{setName(e.target.value);}}/>
        <p>Email</p>
        <input 
        value={email} 
        onChange={(e)=>{setEmail(e.target.value);}}/>
        {/* <p>Image</p> */}
        {/* <input 
        value={image} 
        onChange={(e)=>{setImage(e.target.value);}}/> */}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default EditUser;
