import { Link, Outlet, ReactLocation, Router } from "react-location";
import "./App.css";
import { Homepage } from "./pages/Homepage";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function App({ location }: { location: ReactLocation }) {
  return (
    <Router
      location={location}
      routes={[
        { path: "/", element: <Homepage /> },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ]}
    >
      <nav className="navbar navbar-light">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            conduit
          </a>
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              {/* Add "active" class when you're on that page */}
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="">
                <i className="ion-compose"></i>&nbsp;New Article
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                <i className="ion-gear-a"></i>&nbsp;Settings
              </a>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Sign in
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </Router>
  );
}

export default App;
