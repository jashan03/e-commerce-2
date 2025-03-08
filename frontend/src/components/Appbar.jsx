import React from 'react'
import Search from '@mui/icons-material/Search';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { cartQuantity} from '../recoil/cartRecoil';
import { Link } from 'react-router-dom';

const Appbar = () => {

  const quantity = useRecoilValue(cartQuantity);
  

  return (
    <div className='flex justify-between px-7 py-4 shadow-lg '>
        <div className='flex'>
            <div className='flex justify-between items-center border border-slate-300 mb-2 px-1'>
                <input type='text' placeholder='Search' className='w-full sm:w-3/4 md:w-1/2 lg:w-full' ></input>
                <Search style={{color:"gray", fontSize:20}}></Search>
            </div> 
            
        </div>    
        <div className='flex text-2xl font-extrabold'>
          <Link to="/">
              <div className='text-center'> Happy Tails</div>
          </Link>    
              <div> <PetsOutlinedIcon/></div>
        </div>
        <div className='flex space-x-4'>
          <Link to='register'>
              <div><button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-1.5 text-center ">Register</button></div>
              </Link>
              <Link to='login'>
              <div><button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-1.5 text-center ">Signin</button></div>
              </Link>
              <Link to="/cart">
              <Badge badgeContent={quantity} color="primary">
                <div><ShoppingCartOutlinedIcon/></div>
              </Badge>
              </Link>
        </div>
    </div>
  )
}

export default Appbar