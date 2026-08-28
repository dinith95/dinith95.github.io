import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Education from './components/Education/Education';
import ScrollDownArrow from './components/ScrollDownArrow/ScrollDownArrow';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <Profile />
      </main>
      <Education />
      <ScrollDownArrow />
    </div>
  );
}

export default App;
