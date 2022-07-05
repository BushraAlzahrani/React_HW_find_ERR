import React, { useState  } from "react";
import CardData from "./CardData";
import { Container, Card, Button } from "react-bootstrap"

function Cards() {
 let [memeImage, setMemeImage] = useState();

  const myRandomEmg = () => {
    const memesArray = CardData.data.card;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMemeImage(url);
  };
  return (
    <div>
      <Container>
      <Button className='mt-5' variant="info" onClick={myRandomEmg}>Get a new image</Button>
     
        <Card style={{ width: '50rem' }} className="mt-3 mx-auto" >
          <Card.Img variant="top" src={memeImage} />
          </Card>
          </Container>
      
    </div>
  );
}

export default Cards;
