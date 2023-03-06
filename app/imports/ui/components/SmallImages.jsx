import React from 'react';
import { Container, Navbar, Image } from 'react-bootstrap';

const SmallImages = () => (
  <Container>
    <Navbar fluid className="justify-content-center py-3">
      <Image className="px-2" src="/images/image1.png" alt="Image1" width="200px" />
      <Image className="px-2" src="/images/image2.png" alt="Image2" width="200px" />
      <Image className="px-2" src="/images/image3.png" alt="Image3" width="200px" />
      <Image className="px-2" src="/images/image4.png" alt="Image4" width="200px" />
    </Navbar>
  </Container>
);

export default SmallImages;
