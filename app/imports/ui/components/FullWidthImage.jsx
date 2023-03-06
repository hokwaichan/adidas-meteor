import React from 'react';
import { Image, Carousel } from 'react-bootstrap';

const FullWidthImage = () => (
  <Carousel>
    <Carousel.Item>
      <Image className="d-block w-100" src="/images/poster1.png" alt="First slide" />
      <Carousel.Caption>
        <h3>1</h3>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <Image className="d-block w-100" src="/images/poster2.png" alt="Second slide" />
      <Carousel.Caption>
        <h3>2</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

  /* (Single image)
    <Row className="justify-content-center">
       <Image className="pt-1" src="poster1.png" alt="Adidas-homepage"/>
    </Row>
  */
);

export default FullWidthImage;
