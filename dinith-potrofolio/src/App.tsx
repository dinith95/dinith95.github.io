import { useEffect } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Journey from './components/Journey/Journey';
import ScrollDownArrow from './components/ScrollDownArrow/ScrollDownArrow';
import './App.css';

/** Start each route at the top of the page, like a normal page load. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <Profile />
      <Journey />
      <ScrollDownArrow />
    </>
  );
}

function NotFoundPage() {
  return (
    <section className="App-notfound">
      <h1>Page not found</h1>
      <p>
        That page doesn't exist. <Link to="/">Back to home</Link>
      </p>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <main className="App-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
