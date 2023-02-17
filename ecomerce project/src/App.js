import logo from './logo.svg';
import './App.css';
import LoginForm from './Userpage/LoginForm';
import Register from './Userpage/Register';
import { Route,Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider, } from 'react-query'
import LoginAdmin from './Admin/LoginAdmin';
import RegisterAdmin from './Admin/RegisterAdmin';
import AddProduct from './Admin/AddProduct';
import ViewProduct from './Userpage/ViewProduct';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/login' element={<LoginForm/>}/>
      <Route path='/login/register' element={<Register/>}/>
      <Route path='/loginadmin' element={<LoginAdmin/>}/>
      <Route path='/registeradmin' element={<RegisterAdmin/>}/>
      <Route path='/addproduct' element={<AddProduct/>}/>
      <Route path='/getproduct' element={<ViewProduct/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
