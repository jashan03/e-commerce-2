import React from 'react'
import { Link } from 'react-router-dom'

const CategoryItem = ({item}) => {
  return (
    
      <div className='relative w-full h-full px-1 py-2'>
        <Link to={`/products/${item.cat}`}>
            <img src={item.img} className='object-cover h-full w-full p-2'/>
            <div className='flex flex-col absolute top-0 left-0 w-full h-full items-center justify-center '>
              <div className='text-white text-3xl font-bold mb-2'  style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.9)' }}>
                  {item.title}
              </div>
              <div className='bg-white text-black px-4 py-1 '>
                  <button>SHOP NOW</button>
              </div>

            </div>
        </Link>
      </div>
    
  )
}

export default CategoryItem
