import "./App.css";
import Home from "./components/Home";
import Register from "./components/Register";
import {Route, BrowserRouter as Router, Link} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Link className="Logo" to="/">
            <img src="images/doggy-daycare.png" alt="logo" />
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
