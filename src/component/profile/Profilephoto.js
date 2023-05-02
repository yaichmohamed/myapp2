import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import i1  from '../../imagee/1.jpg'
const Profilephoto = () => {
  return (
    <div style={{ display : 'flex', justifyContent : 'center', marginTop : '50px'}}>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={i1} />
      <Card.Body>
        <Card.Title>Cristiano Ronaldo</Card.Title>
        <Card.Text>
         
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Profilephoto
