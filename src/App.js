import "./App.css";
import Home from "./components/Home";
import Register from "./components/Register";
import Dog from "./components/Dog";
import NoPage from "./components/NoPage";
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom"

function App() {
  return (
  <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <header>
          <Link className="Logo" to="/">
            <img src={process.env.PUBLIC_URL + "/images/doggy-daycare.png"} alt="logo" />
            <h2>Doggy Daycare</h2>
          </Link>
        </header>

        <main>
        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route exact path="/register"> <Register /> </Route>
          <Route exact path="/dog/:chipNumber"> <Dog /> </Route>
          <Route path="*"> <NoPage /> </Route>
        </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
