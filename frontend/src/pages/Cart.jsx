import React from 'react'
import App from '../App'
import Appbar from '../components/Appbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'



const Cart = () => {
  return (
    <div>
      <Appbar/>
      <Announcement/>
      <div className='flex flex-col p-7 w-[100%] '>
        <div className='flex justify-center items-center font-light text-3xl '>YOUR BAG</div>
        <div className='flex justify-between items-center'>
                <button className='flex border-l border-b-2 border-t border-r-2 border-black p-1'>Continue shopping</button>
                <div className='space-x-2 flex'>
                    <div className='underline underline-offset-2'>Shopping bag</div>
                    <div className='underline underline-offset-2'>You whishlist</div>
                </div>
                <button className='flex text-white bg-black p-1'>Checkout now</button>
        </div>
        <div className=' flex justify-between mt-4'>
                <div className='flex flex-col flex-1'>
                <CardItem/>
                <CardItem/>
                
                
                </div>
                

            
                
                <div className='flex flex-col w-[30vw] h-[60vh] border border-gray-200 rounded-lg justify-center p-4 space-y-4'>
                    <div className='font-light text-3xl '>ORDER SUMMARY</div>
                    <div className='flex justify-between '>
                        <div>Subtotal</div>
                        <div>$ 80</div>
                    </div>
                    <div className='flex justify-between'>
                        <div>Estimated Shipping</div>
                        <div>$ 80</div>
                    </div>
                    <div className='flex justify-between'>
                        <div>Shipping discount</div>
                        <div>$ 80</div>
                    </div>
                    <div className='flex justify-between font-semibold text-lg'>
                        <div>Total</div>
                        <div>$ 80</div>
                    </div>
                    <button className='bg-black text-white p-1'>Checkout now</button>
                </div>
        </div>
        
       
      </div>
      <Footer/>
    </div>
  )
}

const ColourFilter =({colour}) =>{
    return( <div style={{ backgroundColor: colour }} className="rounded-full h-5 w-5 mr-2">

    </div>)
}

const CardItem = () =>{
    return (<div className='flex flex-1 border-b border-gray-300 pb-4 '>
       
           
    <img  className='flex w-[200px]' src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt="" />
    <div className='flex justify-between flex-1 mr-20'> 
            <div className='flex flex-col ml-6 justify-center space-y-3'> 
                
                <div className='flex'>
                    <div className='font-bold mr-1'>Product:</div>
                    <div>Jessi thunder shoes</div>
                </div>

                <div className='flex'>
                    <div className='font-bold mr-1'>id:</div>
                    <div>6467588578</div>
                </div>

                <div className='flex'>
                    <div><ColourFilter colour="black"/></div>
                    
                </div>

                <div className='flex'>
                    <div className='font-bold mr-1'>Size :</div>
                    <div>26.6</div>
                </div>
        </div>
            
       
        <div className='flex flex-col justify-center items-center space-y-5'>
                <div className=' flex space-x-1 items-center'>
                    <Add/>
                    <div className='text-2xl font-semibold'>2</div>
                    <Remove/>
                </div>
                <div className='text-3xl font-light'>$ 30</div>
        </div>
        
        
    </div>
    
 </div>

 
 )
}

export default Cart
