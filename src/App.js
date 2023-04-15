import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import './App.css';

import MyRoutes from "./pages";


function App() {
  return (
    <div className="App">
      <Header/>
      <MyRoutes/>
      <Footer/>  
    </div>
  );
}

export default App;
