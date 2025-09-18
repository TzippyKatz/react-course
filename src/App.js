import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <SideBar />
      <Footer />
    </div>
  );
}

export default App;
