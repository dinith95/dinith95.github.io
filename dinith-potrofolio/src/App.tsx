import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Journey from './components/Journey/Journey';
import ScrollDownArrow from './components/ScrollDownArrow/ScrollDownArrow';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <Profile />
      </main>
      <Journey />
      <ScrollDownArrow />
    </div>
  );
}

export default App;
