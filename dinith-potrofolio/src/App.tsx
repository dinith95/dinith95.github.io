import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Avatar from './components/Avatar/Avatar';
import ScrollDownArrow from './components/ScrollDownArrow/ScrollDownArrow';
import About from './components/About/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <Profile />
        <Avatar />
        <ScrollDownArrow />
      </main>
      <About />
    </div>
  );
}

export default App;
