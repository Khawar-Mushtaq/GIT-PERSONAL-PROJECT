import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import MainNav from './navbar/MainNav';
import ProductCard from './Card/ProductCard';
import Register from './userfrontend/Register';
import Login from './userfrontend/Login';
function App() {
  return (
    <div className="App">
     
     <Routes>
      <Route path='/MainPage' element={<MainNav/>}/>
      <Route path='/Home' element={<ProductCard/>}/>
      <Route path='/user/Registerform' element={<Register/>}/>
      <Route path='/user/login' element={<Login/>}/>
     </Routes>
     
    </div>
  );
}

export default App;
