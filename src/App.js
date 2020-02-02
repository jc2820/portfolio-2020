import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";

import About from "./components/About/About";
import TechStack from "./components/TechStack/TeckStack";
import Projects from "./components/Projects/Projects";
import Error from "./components/Error/Error";

const App = () => {
  return (
    <main>
      <Header />
      <Switch>
        <Route path="/" component={About} exact />
        <Route path="/techStack" component={TechStack} />
        <Route path="/projects" component={Projects} />
        <Route component={Error} />
      </Switch>
    </main>
  );
};

export default App;
