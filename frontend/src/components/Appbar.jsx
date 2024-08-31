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
    <div className='flex justify-between px-7 py-4'>
        <div className='flex space-x-4'>
            <div>LNG</div>
            <div className='border border-slate-300 mb-2'>
                <input type='text' placeholder='Search'></input>
                <Search style={{color:"gray", fontSize:20}}></Search>
            </div> 
            
        </div>    
        <div className='flex text-2xl font-extrabold'>
              <div className='text-center'> Happy Tails</div>
              <div> <PetsOutlinedIcon/></div>
        </div>
        <div className='flex space-x-4'>
              <div><button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-1.5 text-center ">Register</button></div>
              <div><button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-1.5 text-center ">Signin</button></div>
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