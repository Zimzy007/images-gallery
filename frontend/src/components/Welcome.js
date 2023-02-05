import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Welcome = () => {

return (
    <Card style={{ width: "40rem", alignContent: 'center', paddingLeft: '0rem' }}>     
       <Card.Body>
        <Card.Title>Images Gallery</Card.Title>
        <Card.Text>
          This is a simple application that retrieves photos using Unsplash api.
        </Card.Text>
        <Button variant="primary" href="https://unsplash.com" target="_blank">Learn more</Button>
       </Card.Body>
    </Card>
  );
};
export default Welcome;