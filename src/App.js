import React from "react";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
  <>
    <BrowserRouter>
        <Switch>
          <Route exact patch="/" component={LandingPage} />
        </Switch>
      </BrowserRouter>
      <Footer />
  </>
  )
}

export default App;
