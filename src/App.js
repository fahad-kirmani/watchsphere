import './App.css';
import { Navbar } from './compnents/Navbar';
import Summary from './compnents/Summary';
import {Book} from './compnents/Book';
import { View } from './compnents/View';
import {
  BrowserRouter as Router, Route,Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<View/>}/>
    <Route exact path="/show" element={<Summary/>}/>
    <Route exact path="/form" element={<Book/>}/>
    </Routes>
    </Router>
  );
}

export default App;
