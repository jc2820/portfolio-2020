import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
//import * as SC from "./App.style";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import TechStack from "./components/TechStack/TeckStack";
import Projects from "./components/Projects/Projects";
import Error from "./components/Error/Error";

const App = () => {
  return (
    <main>
      <Header />
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={About} exact />
          <Route path="/techStack" component={TechStack} />
          <Route path="/projects" component={Projects} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default App;
