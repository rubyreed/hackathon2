import React, { useContext, useState } from "react";
import EditUser from "../components/EditUser";
import { AuthContext } from "../providers/AuthProvider";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Profile = () => {
  const auth = useContext(AuthContext);
  const [showEdit, setShowEdit] = useState(false);



  const toggleShowEdit = () =>{
    setShowEdit(!showEdit);
  };



  return (
    <div>
      <Card sx={{ minWidth: 275, maxWidth: 400 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            My Info
          </Typography>
          <Typography variant="h5" component="div">
            <strong>Name:</strong> {auth.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <strong>Email: </strong> {auth.email} 
          </Typography>

        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
    // <div>
    //   <h1>My Profile</h1>
    //   {auth.name && <h3>Hey, {auth.name}!</h3>}
    //   {/* <img src={auth.image} /> */}
    //   {/* <p>email: {auth.email}</p> */}
    //   <button onClick={() => setShowEdit(!showEdit)}>Edit Profile</button>
    //   { showEdit && <EditUser/>}
    // </div>

  )
};

export default Profile;

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

// export default function BasicCard() {
//   return (
    
//   );
// }