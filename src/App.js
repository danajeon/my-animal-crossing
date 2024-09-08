import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Island } from './components/Island';
import { Villagers } from './components/Villagers';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Island />
      <Villagers />
    </div>
  );
}

export default App;