import Header from './components/Header';
import Profile from './components/Profile';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <Profile />
      </main>
    </div>
  );
}

export default App;
