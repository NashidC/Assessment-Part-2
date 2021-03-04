
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Cats from "./components/Cats"
import Dogs from './components/Dogs';


function App() {
  return (
    <div className="App">
      <Header />
      <Cats />
      <Dogs />
      <Footer />
    </div>
  );
}

export default App;
