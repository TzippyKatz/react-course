import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import About from './components/About';
import Grandfother from './components/GrandFother';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/ex' element={<Grandfother />} />
        </Routes>

        <SideBar />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
