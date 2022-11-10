import React, { BrowserRouter, Route, Switch ,Link,Routes } from "react-router-dom";
import Signin from "./Components/SignIn";
import Home from "./Components/home";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/Signin">Signin</Link>
            </li>
          </ul>
        </nav>
        <Routes>
        <Route path="/Signin">
          <Signin />
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
