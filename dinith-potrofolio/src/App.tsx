import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Avatar from './components/Avatar/Avatar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <Profile />
        <Avatar />
      </main>
    </div>
  );
}

export default App;
