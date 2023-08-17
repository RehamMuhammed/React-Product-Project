import logo from './logo.svg';
// import './App.css';
import './components/ProductCard.css'
import './components/ProductList.css'
import './components/Navbar.css'
import ProductCard from './components/ProductCard';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
    <Navbar/>
    {/* <ProductCard/> */}
    <ProductList/>
    </div>
  );
}

export default App;
