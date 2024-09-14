
import './App.css'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Pay from './pages/Pay'
import Success from './pages/Success'
import Blog from './pages/Blog'
import { BrowserRouter as Router, Route, Routes , Navigate } from 'react-router-dom';
import Logout from './pages/Logout'
import { useRecoilValue } from 'recoil'
import { currentUserState } from './recoil/userRecoil'

function App() {
  //place generic routes after or use 'exactly' keyword
  //products/:category  -- the catgeory is necessary to mention just /poducts returns 404

  /*In React Router v6, useNavigate is a hook that allows you to 
  programmatically navigate to different routes within your components. 
  The Navigate component, on the other hand, is used within your JSX to
   conditionally redirect based on some logic (e.g., whether the user
    is authenticated).*/

  /*Use useNavigate: When you need to navigate in response to an event (e.g., button click).
    Use Navigate: When you need to perform conditional redirection within your 
    JSX based on some state or props. */  
  
  const user = useRecoilValue(currentUserState);

  return (
    <Router>
    <div>  
     <Routes>
        <Route path='/products/:category' element={<ProductList />}/> 
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/' element={<Home />}></Route> 
        
        <Route path='/cart' element={<Cart />}/>
        <Route path='/success' element={<Success />}/>
        <Route path='/login'  element={user ? <Navigate to="/" /> : <Login />}/>
        <Route path='/register' element={user ? <Navigate to="/" /> : <Register />}/>
        <Route path='/blogs/:id' element={<Blog />}/>
        <Route path='/logout' element={<Logout />}/>
       
     </Routes>
     </div>
   </Router>
  )
}

export default App
