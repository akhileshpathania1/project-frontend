import { Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import cards from "./cards.css";
const Cards = () => {
  let navigate = useNavigate();
  return (
    <div>
      <div
        className="Cards"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <a
          onClick={() => {
            navigate("/menu");
          }}
        >
          <Card style={{ width: "18rem", margin: "5px" }}>
            <Card.Img
              variant="top"
              src="https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?t=st=1654093158~exp=1654093758~hmac=e58d14d37a7df1969c7186b9d71412a7f63cb7b3bbe087e0abdf0c1d79049261&w=360"
            />
            <Card.Body>
              <Card.Title>Order Online</Card.Title>
              <Card.Text>Stay Home and Order Food</Card.Text>
            </Card.Body>
          </Card>
        </a>
        <a
          onClick={() => {
            navigate("/menu");
          }}
        >
          <Card style={{ width: "18rem", margin: "5px" }}>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80"
            />
            <Card.Body>
              <Card.Title>Dining Out</Card.Title>
              <Card.Text>View the City's favourite Dining</Card.Text>
            </Card.Body>
          </Card>
        </a>
        <a
          onClick={() => {
            navigate("/menu");
          }}
        >
          <Card style={{ width: "18rem", margin: "5px" }}>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body>
              <Card.Title>Pro and Pro Plus</Card.Title>
              <Card.Text>Enjoy limitless Dining Privileges</Card.Text>
            </Card.Body>
          </Card>
        </a>
      </div>
    </div>
  );
};
export default Cards;
