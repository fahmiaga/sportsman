import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./Route";
import VideoContent from "./pages/VideoContent";
import Profile from "./pages/Profile";
// import _ from "lodash";
import AdminContent from "./pages/AdminContent";
import AdminDashboard from "./pages/AdminDashboard";
import ContactUs from "./pages/ContactPage";

function App() {
  const token = localStorage.getItem("token");

  return (
    <div>
      <BrowserRouter>
        <Switch>
          {token !== null
            ? privateRoutes.map((route, index) => (
                <Route
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                  key={index}
                />
              ))
            : publicRoutes.map((route, index) => (
                <Route
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                  key={index}
                />
              ))}

          <Route path="/videos-content/:id" component={VideoContent} />
          <Route path="/profile" component={Profile} />
          <Route path="/admin-content" component={AdminContent} />
          <Route path="/admin-dashboard" component={AdminDashboard} />
          <Route path="/contact-us" component={ContactUs} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
