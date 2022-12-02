import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from "./components/Contact";

function App() {
  return (
    <Router basename={process.env.NODE_ENV === 'production'?'/reactjs-deploy': ''}>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;



// echo "# test" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/AMQIsmail/test.git
// git push -u origin main