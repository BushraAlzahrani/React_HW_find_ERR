import React, { useState, useEffect } from "react";
import {Button} from "react-bootstrap"

function About() {

const [open, setOpen ] = useState(false)
const [text, setText] = useState("")


  React.useEffect(() => {
    setText(`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
     when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
     It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
       and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`);

  }, [open]);
 


  function showText() {
    setOpen(open => !open);
  } 
  return (
    <div>
           <h1>
          
            About
        </h1>
        <p>   {open? text:null} </p>
        <Button onClick={showText} variant="info" size="lg">
          <h3>Show More</h3>
        </Button>

    </div>
  );
}

export default About;
