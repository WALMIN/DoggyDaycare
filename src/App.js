import './App.css';
import { useState } from 'react';
import Home from './components/Home';
import Dogs from './components/Dogs';

function App() {
  const HOME = 'home', DOGS = 'dogs';
  const [currentScreen, setCurrentScreen] = useState(DOGS);

  let content = null;
  switch(currentScreen) {
    case HOME:
      content = <Home />

      break;

    case DOGS:
      content = <Dogs />

      break;

    default:
      content = <Home />

  }

  return (
    <div className="App">
      <header className="Header">
        <h2>Doggy Daycare</h2>
        <nav>
          <button onClick={ () => setCurrentScreen(HOME) }>Home</button>
          <button onClick={ () => setCurrentScreen(DOGS) }>Dogs</button>
        </nav>
      </header>
      <main>
        {content}
      </main>
    </div>
  );
}

export default App;
