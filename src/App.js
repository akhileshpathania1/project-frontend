import Menu from "./menu";
import Login from "./login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./signup";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cart from "./cart";
import Home from "./home";
import Userprofile from "./userprofile";
import Checkout from "./checkout";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/home" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/userprofile" element={<Userprofile />} />
        </Routes>
      </Router>
    </div>
  );
}
