import logo from './logo.svg';
import './App.css';
import Home from "./Home"
import FirstApi from "./FirstApi"
import SecondApi from "./SecondApi"
import Navbar from "./Navbar"
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Route path="/" component={Home} />
          <Route path="/firstApi" component={FirstApi} />
          <Route path="/secondApi" component={SecondApi} />
        </div>
      </div>
    </Router>

  );
}

export default App;
