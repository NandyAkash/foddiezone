import './App.css';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Price from './components/Pricing/Price'
import Authentication from './pages/Authentication/Authentication';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
          <Route path="/authentication">
            <Authentication />
          </Route>
          <Route path="/price">
            <Price />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
      </Switch>
      </Router>
      
      <Footer />
    </div>
  );
}

export default App;
