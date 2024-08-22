
import React from 'react'
import Appbar from '../components/Appbar'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement'

const ProductList = () => {
  return (
    <div>
      <Appbar></Appbar>
      <Announcement></Announcement>
      <div className='flex flex-col mx-3'>
        <div className='flex font-extrabold text-2xl mb-7 mt-4'>Dresses</div>
        <div className='flex justify-between mb-2'>
            <div className='flex justify-center items-center'>
                <div className=' flex font-bold text-md mr-2'>Filter Products:</div>
                <select className='text-sm p-1 border border-gray-300 rounded mr-2' >
                    <option disabled selected className=" flex ">
                     Color
                    </option>
                    <option>White</option>
                    <option>Black</option>
                    <option>Red</option>
                    <option>Blue</option>
                    <option>Yellow</option>
                    <option>Green</option>
                </select>
                <select className=' text-sm p-1 border border-gray-300 rounded'>
                    <option disabled selected className=" flex">
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
                <select className='text-sm p-1 border border-gray-300 rounded'>
                    <option selected>Newest</option>
                    <option>Price (asc)</option>
                    <option>Price (desc)</option>
                </select>
            </div>
            
        </div>
      </div>
      <Products></Products>
      <Newsletter></Newsletter>
      <Footer/>
    
    </div>
  )
}

export default ProductList