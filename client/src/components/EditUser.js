import {useContext, useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";


const EditUser= (props) => {
  const {auth} = useContext(AuthContext);
  const [email, setEmail] = useState("")
  const [image, setImage] = useState("")
  const [name, setName] = useState("")
  const [id, setId] = useState("")
  const navigate = useNavigate();


  useEffect(() => {
    getData();
  }, [])

  // const getData = () => {
  //   setEmail(`${auth.email}`)
  //   console.log(auth.email)
  //   setImage(`${auth.image}`)
  //   setName(`${auth.name}`)
  //   setId(`${auth.id}`)
  // }
  const getData = async () => {
    console.log(auth)
    // let res = await axios.get(`/api/users/${params.id}`)
    // name ? setName(auth.name) : setName("")
    // setEmail(auth.email)
    // setImage(auth.image)
    // setId(auth.id)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({email, image, name})
    // return auth.handleEdit({email, image, name, id}, navigate);
  };



  return (
    <div>
      {JSON.stringify(name)}
      <h2>Edit My Profile</h2>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input 
        value={name} 
        onChange={(e)=>{setName(e.target.value);}}/>
        <p>Email</p>
        <input 
        value={email} 
        onChange={(e)=>{setEmail(e.target.value);}}/>
        <p>Image</p>
        <input 
        value={image} 
        onChange={(e)=>{setImage(e.target.value);}}/>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default EditUser;
