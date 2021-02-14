import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact patch="/" component={LandingPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
