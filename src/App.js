import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import './App.css';
import Shop from "./pages/Shop";
import Blog from './pages/Blog';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home/> */}
      {/* <Shop/> */}
      <Blog/>
      <Footer/>
      

    </div>
  );
}

export default App;
