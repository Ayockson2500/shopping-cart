import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { Store } from "./pages/store/Store";
import About from "./pages/about/About";
import NavBar from "./components/navBar/NavBar";
import { Container } from "react-bootstrap";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import CheckOut from "./pages/checkOut/CheckOut";
import ShoppingtCart from "./components/ShoppingtCart";

function App() {
  return (
    <ShoppingCartProvider>
      <Container className="mb-4">
        <NavBar />
        <ShoppingtCart />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
