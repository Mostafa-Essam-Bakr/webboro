

import Carousel from 'react-bootstrap/Carousel';

import img9 from "../Assets/image9.webp"
import img10 from "../Assets/image10.webp"
import img11 from "../Assets/image11.webp"


function IndividualIntervalsExample() {
  return (
    <Carousel className='slidimg'>
<Carousel.Item interval={3000}>
      < img src={img10} style={{width:"100%" , height:"400px"}}/>
        <Carousel.Caption>
          <h3>Relaxing hotel</h3>
          <p>Enjoy the Red Sea and the stunning views</p>
        </Carousel.Caption>
      </Carousel.Item>  

      <Carousel.Item interval={3000}>
        < img src={img9} style={{width:"100%" , height:"400px"}}/>
        <Carousel.Caption>
          <h3>Egyptian pharaonic hotel</h3>
          <p>A struggle with the Pharaonic civilizations and ancient Egypt</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
      < img src={img11} style={{width:"100%" , height:"400px"}}/>
        <Carousel.Caption>
          <h3>Ancient pyramids</h3>
          <p>
          Make trips and book about the Pharaonic pyramidsl
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;