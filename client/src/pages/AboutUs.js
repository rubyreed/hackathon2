import React from "react";
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const programmers = [
  {
    name: "Asher Bay", 
    blurb: "Asher is the API king!"
  },
{
  name: "Madeline Armstrong", 
  blurb: "Madeline is an expert at Figma and all things styling."
},
{
  name: "John Leosco", 
  blurb: "John's favorite activity is a hackathon!"
},
{
  name: "Ruby Reed", 
  blurb: "Ruby likes a nice cup of tea while she codes."
},
{
  name: "Sky Lin", 
  blurb: "Sky's mini Aussie helps her code often."
}
]

const AboutUs = () => {

  const renderProgrammers = () =>{
    return programmers.map((developer)=>{
      return(
        <Card style ={{
          width: "25rem",
          boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
          margin: "5px",
          height: "15rem"
          }}>
          <CardContent>
          <Typography style={{fontSize:40}}>
            {developer.name}
          </Typography>   
          <Typography>
            {developer.blurb}
          </Typography>
          </CardContent>
        </Card>
      )
    })
  };

  return (
    <Container>
      <h1 style={{margin:"50px", fontSize:50}}>About Us</h1>
      <div style={{display:"flex", justifyContent:"space-between", margin:"20px"}}>
        {renderProgrammers()}
        </div>
    </Container>
  )
}

export default AboutUs;