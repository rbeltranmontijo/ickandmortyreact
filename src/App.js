import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Episodios from "./pages/Episodios";

const App = () => {
  return (
    <Switch>
      <Route exact path="/:id" component={Episodios} />
      <Route exact path="/productos/nuevo" component={NuevoProducto} />
    </Switch>
  );
};

export default App;
