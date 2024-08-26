
import './App.css'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Pay from './pages/Pay'
import Success from './pages/Success'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <Router>
   <div>
     <Routes>
      <Route path='/pay' element={<Pay />}></Route>
      <Route path='/success' element={<Success />}/>
      <Route path='/home' element={<Product/>}/>
     </Routes>
   </div>
   </Router>
  )
}

export default App
