import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './pages/home/Home';
import { Store } from './pages/store/Store';
import About from './pages/about/About';
import NavBar from './components/navBar/NavBar';
import { Container } from 'react-bootstrap';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {
  return (
    <ShoppingCartProvider>
    <Container className="mb-4">
     <Router>
      <NavBar />
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/about' element={<About />} />
      </Routes>
     </Router>
    </Container>
    </ShoppingCartProvider>
  );
}

export default App;
