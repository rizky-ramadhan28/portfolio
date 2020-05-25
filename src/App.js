import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.component";
import ContactPage from "./pages/contact/contact.component";
import ProjectCollections from "./components/project-collection/project-collection.component";
import NotFoundPage from "./pages/not-found/not-found.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container mt-5 mb-5">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/projects" component={ProjectCollections} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/portfolio" component={Homepage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
