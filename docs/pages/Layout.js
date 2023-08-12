import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/Layout.css";
//import "../styles/Cursor.css";
//import Cursor from "../components/Cursor"

const Layout = () => {
  //const [onHoverable, setOnHoverable] = useState(false);
  return (
    <div className="Layout">
      <header>
        <div id="logo">
          <h1 style={{ fontWeight: "900" }}>zhaoYang.</h1>
          <h1 style={{ fontWeight: "200" }}>Kuah()</h1>
        </div>
        <nav>
          <ul className="horizontal-list">
            <li>
              <Link className="no-decoration nav-link" to="/">Home</Link>
            </li>
            <li>
              <Link className="no-decoration nav-link" to="/my-projects">My Projects</Link>
            </li>
            <li>
              <Link className="no-decoration nav-link" to="/my-music">My Music</Link>
            </li>
          </ul>
        </nav >
      </header>
      <Outlet />
      {//<Cursor onHoverable={onHoverable} />
      }
    </div>
  )
};

export default Layout;