import React from 'react';
import '../Styles/App.css';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
          <Menu />
            <Switch>
              <Route path="/" exact component= {Home} />  
              <Route path="/Home" component= {Home} />
              <Route path="/About" component= {About} />
              <Route path="/contact" component= {Contact} />
            </Switch>
      </div>
    </BrowserRouter>
    
  );
}
const Home = () => {
  return (
      <div className="contactstyle">
          <h2>Welcome to Home Page</h2>
      </div>
  );
}

export default App;
