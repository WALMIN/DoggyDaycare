import "./App.css";
import { useState } from "react";
import Home from "./components/Home";
import Register from "./components/Register";
import {Route, BrowserRouter as Router, Link} from "react-router-dom"

function App() {
  const HOME = "home", REGISTER = "register";
  const [currentScreen, setCurrentScreen] = useState(HOME);

  let content = null;
  switch(currentScreen) {
    case HOME:
      content = <Home />

      break;

    case REGISTER:
      content = <Register />

      break;

    default:
      content = <Home />

  }

  return (
    <Router>
      <div className="App">
        <header>
          <Link className="Logo" to="/">
            <img src="images/doggy-daycare.png" />
            <h2>Doggy Daycare</h2>
          </Link>
        </header>

        <main>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
        </main>
      </div>
    </Router>
  );
}

export default App;
