
import React, { useState } from 'react';
import Appbar from '../components/Appbar'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement'
import { useLocation} from 'react-router-dom'


const ProductList = () => {
  
  const location = useLocation();
  const cat = location.pathname.split("/")[2] //eg "/category/product/123" --> ["", "category", "product", "123"]
  const [filters,setFilters] = useState({}) //empty object -> will contain color n 
  const [sort,setSort] = useState("newest")

  const handleFilters = (e)=>{
    setFilters({ // to preserve any prec key value pairs
      ...filters ,
       [e.target.name]:e.target.value
      })
  }

  return (
    <div>
      <Appbar></Appbar>
      <Announcement></Announcement>
      <div className='flex flex-col mx-3'>
        <div className='flex font-extrabold text-2xl mb-7 mt-4 uppercase'>{cat}</div>
        <div className='flex justify-between mb-2'>
            <div className='flex justify-center items-center'>
                <div className=' flex font-bold text-md mr-2'>Filter Products:</div>
                <select  name="color" onChange={handleFilters} className='text-sm p-1 border border-gray-300 rounded mr-2' >
                    <option className=" flex ">
                     Color
                    </option>
                    <option>white</option>
                    <option>black</option>
                    <option>red</option>
                    <option>blue</option>
                    <option>yellow</option>
                    <option>green</option>
                </select>
                <select  name="size" onChange={handleFilters}  className=' text-sm p-1 border border-gray-300 rounded'>
                    <option  className=" flex">
                     Size
                    </option>
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                </select>
            </div>
            <div className='flex justify-center items-center'>
                <div className=' flex font-bold text-md mr-2 '>Filter Products:</div>
                <select onChange={(e)=>{setSort(e.target.value)}} className='text-sm p-1 border border-gray-300 rounded'>
                    <option value='newest'>Newest</option>
                    <option value='asc'>Price (asc)</option>
                    <option value='desc'>Price (desc)</option>
                </select>
            </div>
            
        </div>
      </div>
      <div className='flex flex-wrap'>
      <Products cat={cat} filters={filters} sort={sort}></Products>
      </div>
      <Newsletter></Newsletter>
      <Footer/>
    
    </div>
  )
}

export default ProductList