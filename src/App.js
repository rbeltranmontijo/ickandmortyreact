import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Episodios from "./pages/Episodios";
import Personajes from "./pages/Personajes";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  // console.log(process.env.REACT_APP_URL);
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Episodios} />
          <Route exact path="/:id" component={Episodios} />
          <Route exact path="/personajes/:id" component={Personajes} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
