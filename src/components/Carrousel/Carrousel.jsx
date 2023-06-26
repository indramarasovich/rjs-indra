import Carousel from 'react-bootstrap/Carousel';
import "./Carrousel.css" 

function Carrousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fepa10-1.fna.fbcdn.net/v/t39.30808-6/292088043_457058403088610_5600072529346339764_n.png?stp=dst-png_p480x480&_nc_cat=108&cb=99be929b-3346023f&ccb=1-7&_nc_sid=e3f864&_nc_ohc=gRIlCGYCQ0AAX-lQJ26&_nc_ht=scontent.fepa10-1.fna&oh=00_AfAcdjRXB_F7g0dKQkBB1rq4pILg8ZyCeGUrg2Vtb60-fw&oe=649D1170"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fepa10-1.fna.fbcdn.net/v/t1.6435-9/83297137_902068980212754_4154660743188316160_n.png?_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=e3f864&_nc_ohc=2uiFEFqWabsAX-dbIx7&_nc_ht=scontent.fepa10-1.fna&oh=00_AfDrfHYo8lqlVFS8-1CxA0xFFkFHMVv8f8Oo3gFZpdghMQ&oe=64BFE0F7"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fepa10-2.fna.fbcdn.net/v/t1.6435-9/83666715_902068973546088_8609356902263947264_n.jpg?_nc_cat=111&cb=99be929b-3346023f&ccb=1-7&_nc_sid=e3f864&_nc_ohc=SZC_4LGebJ0AX_xoOic&_nc_ht=scontent.fepa10-2.fna&oh=00_AfCKE4libuM6yoF8SVqYt6JF5qWYjGPPdATpBS5kTFpUNA&oe=64BFFA18"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;