import { Carousel } from "react-bootstrap";
const Carousellor = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/paneer-butter-masala-cheese-cottage-curry-served-with-rice-laccha-paratha_466689-73715.jpg?w=740&t=st=1654093498~exp=1654094098~hmac=86da5b7d6cdb92b9e958ea52c2b6413a134f58a23309cce80a7c5adfba7bd820 slide&bg=373940"
            alt="Order Online"
          />
          <Carousel.Caption>
            <h3>Order Food Online</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/top-view-food-frame-with-copy-space_23-2148723447.jpg?w=740&t=st=1654093570~exp=1654094170~hmac=43fa15d45042ae25a958f34d1e9321b8162f9e28a5f3e9e134cd7161bc5a4985 slide&bg=282c34"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Enjoy Delicious Food</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?w=740&t=st=1654093569~exp=1654094169~hmac=004c6456d0e720b8c9b3885c1b63d1365306b933ecf6178197aa647fb87636d2 slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Free Home Delivery</h3>
            <p>FLAT 20% OFF</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Carousellor;
