import "./App.css";
import Home from "./components/Home";
import Dogs from "./components/Dogs";
import Dog from "./components/Dog";
import { Route, BrowserRouter as Router, Link } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Link className="Logo" to="/">
            <img src="/images/doggy-daycare.png" alt="logo" />
            <h2>Doggy Daycare</h2>
          </Link>
        </header>

        <main>
          <Route path="/" exact> <Home /> </Route>
          <Route path="/register"> <Dogs /> </Route>
          <Route path="/dog/:chipNumber"> <Dog /> </Route>
        </main>
      </div>
    </Router>
  );
}

export default App;
