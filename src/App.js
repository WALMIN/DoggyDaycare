import "./App.css";
import Home from "./components/Home";
import Dogs from "./components/Dogs";
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
          <Route path="/DoggyDaycare" exact> <Home /> </Route>
          <Route path="/DoggyDaycare/register"> <Dogs /> </Route>
          <Route path="/DoggyDaycare/dog/:chipNumber"> <Dog /> </Route>
          <Route path="*"> <NoPage /> </Route>
        </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
