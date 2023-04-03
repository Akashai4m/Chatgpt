
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Brands from './Components/Brands';
import Gpt from './Components/Gpt';
import Future from './Components/Future';
import Gaming from './Components/Gaming';
import Register from './Components/Register';
import Ai from './Components/Ai';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="wholebg">
     <Navbar/><br/>
     <Header/>
      <Brands/>
    <Gpt/>
     <Future/>
     <Gaming/>
     <Register/>
     <Ai/>
     <Footer/> 
    </div>
  );
}

export default App;
