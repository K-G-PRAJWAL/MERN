import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../src/components/screens/Home";
import Category from "../src/components/screens/Category";
import Single from "../src/components/screens/Single";
import Error from "../src/components/screens/Error";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/category">
            <Category />
          </Route>
          <Route path="/single">
            <Single />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
