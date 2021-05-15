import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./pages/Home";
// import Projects from "./pages/Projects";
import NavB from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <NavB />
        <Switch>
          {/* <Route exact path="/">
            <Home />
          </Route> */}
          {/* <Route exact path="/home" component={Home}>
            <Home />
          </Route> */}
          {/* <Route exact path="/projects" component={Projects}>
            <Projects />
          </Route> */}
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
