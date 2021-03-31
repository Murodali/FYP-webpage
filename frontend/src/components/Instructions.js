import React from 'react'
import "../App.css"
import {Card,Button} from "react-bootstrap"
import SignUp from "./InstructionsImages/signup-icon.png"
import Search  from "./InstructionsImages/search-icon.png"
import appointment from "./InstructionsImages/appointment.png"
function Instructions() {
    return (
     
    
  <div className="row pt-5 bg-light">

    
    <div className="col order-firs col-lg-3 col-md-6 col-sm-9 mx-auto p-auto m-auto">


    <Card className=" text-black  ml-3 no-borders" >
  <Card.Img src={SignUp} alt="Card image" className="img-fluid card-img  mx-auto" />
  <Card.ImgOverlay>
    
 
  </Card.ImgOverlay>
  <Card.Title className="text-center">Sign UP</Card.Title>
</Card>
    </div>
    <div className="col order-firs col-lg-3 col-md-6 col-sm-9 mx-auto p-auto m-auto">
    <Card className=" text-black m-3 no-borders">
  <Card.Img src={Search} alt="Card image" className="img-fluid mx-auto" />
  <Card.ImgOverlay>
   

  </Card.ImgOverlay>
  <Card.Title className="text-center">Search for doctor</Card.Title>
</Card>


</div>

<div className="col order-firs col-lg-3 col-md-6 col-sm-9 mx-auto p-auto m-auto">

<Card className=" text-black m-3 no-borders">
  <Card.Img src={appointment} alt="Card image" className="img-fluid mx-auto" />
  <Card.ImgOverlay>
   
  
   
  </Card.ImgOverlay>
  <Card.Title className="text-center">Book an appointment</Card.Title>
</Card>

</div>

    </div>


     


            
        
    )
}

export default Instructions
