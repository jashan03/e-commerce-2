import React from 'react'

const CategoryItem = ({item}) => {
  return (
    
      <div className=' relative flex flex-1 px-1 py-2'>
          <img src={item.img} className='object-cover w-[100%] h-[100%] '/>
          <div className='flex flex-col absolute top-0 left-0 w-full h-full items-center justify-center '>
            <div className='text-white text-xl font-bold mb-2'>
                {item.title}
            </div>
            <div className='bg-white text-black px-4 py-1 '>
                <button>SHOP NOW</button>
            </div>

          </div>
      </div>
    
  )
}

export default CategoryItem
