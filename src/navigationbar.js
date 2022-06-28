import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Navigate } from "react-router";
const Navigationbar = () => {
  const itemsadded = useSelector((state) => state.itemsadded);
  let navigate = useNavigate();

  return (
    <div>
      <Navbar bg="light" expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Brand
            style={{ fontWeight: "bold" }}
            href="#"
            onClick={() => navigate("/home")}
          >
            Zomato
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1" onClick={() => navigate("/home")}>
                Home
              </Nav.Link>
              <Nav.Link href="#action1" onClick={() => navigate("/menu")}>
                Menu
              </Nav.Link>
              <Nav.Link href="#" onClick={() => navigate("/userprofile")}>
                User Profile{" "}
              </Nav.Link>
            </Nav>
            <button
              className="btn btn-outline-dark"
              type="submit"
              onClick={() => navigate("/cart")}
            >
              <i className="bi-cart-fill me-1" />
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">
                {itemsadded.length}
              </span>
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Navigationbar;
