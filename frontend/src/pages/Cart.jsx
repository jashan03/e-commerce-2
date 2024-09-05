import React from 'react'
import Appbar from '../components/Appbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'
import { useRecoilValue } from 'recoil';
import {cartProducts, cartTotal} from '../recoil/cartRecoil'
import StripeCheckout from 'react-stripe-checkout';
import { useState,useEffect} from 'react';
import {useNavigate, Link} from 'react-router-dom'
import { userRequest } from '../requestMethods'

const KEY = import.meta.env.VITE_APP_STRIPE;

const Cart = () => {
    const navigate = useNavigate();
    const[stripeToken,setStripeToken] = useState(null); // returned after client payment
    const products = useRecoilValue(cartProducts); 
    const total  = useRecoilValue(cartTotal)


    const onToken = (token) => {
        setStripeToken(token)
    };

    useEffect(()=>{
        const makeRequest = async ()=>{
          try{
             const res = await userRequest.post(
              "/checkout/payment",
              {
                  tokenId:stripeToken.id,
                  amount:2000,
              });
              
              navigate('/success', {data:res.data})
          }catch(err){
              console.log(err)
          }
        };
        stripeToken && total >=1 && makeRequest() // becoz when u are returning the div for the first time
       // During the initial render of a component, any useEffect hook will run after the component has rendered. 
       // This is true regardless of whether there has been a state change or not.
  },[stripeToken, navigate]) // include all hooks used as a dependency

    
  return (
    <div>
      <Appbar/>
      <Announcement/>
      <div className='flex flex-col p-7 w-[100%] '>
        <div className='flex justify-center items-center font-light text-3xl '>YOUR BAG</div>
        <div className='flex justify-between items-center '>
            
                <div className='space-x-2 flex'>
                    <div className='underline underline-offset-2 font-semibold'>Shopping bag</div>
                    <div className='underline underline-offset-2 font-semibold'>You whishlist</div>
                </div>
                <Link to='/'>
                <button className='flex border-l border-b-2 border-t border-r-2 border-black p-1'>Continue shopping</button>
                </Link>   
        </div>
        <div className=' flex justify-between mt-4'>
                <div className='flex flex-col flex-1'>
                {products.map((product) => (
              <CardItem key={product.id} product={product} />
            ))}
                
                
                </div>
                

            
                
                <div className='flex flex-col w-[30vw] h-[60vh] border border-gray-200 rounded-lg justify-center p-4 space-y-4'>
                    <div className='font-light text-3xl '>ORDER SUMMARY</div>
                    <div className='flex justify-between '>
                        <div>Subtotal</div>
                        <div>{total}</div>
                    </div>
                    <div className='flex justify-between'>
                        <div>Estimated Shipping</div>
                        <div>$ 80</div>
                    </div>
                    <div className='flex justify-between'>
                        <div>Shipping discount</div>
                        <div>$ -80</div>
                    </div>
                    <div className='flex justify-between font-semibold text-lg'>
                        <div>Total</div>
                        <div>{total}</div>
                    </div>
                    <StripeCheckout
                        name="Happy tails"
                        image="https://i.ibb.co/DG69bQ4/2.png"// Ensure this is a valid React element
                        billingAddress// Ensure this is a boolean
                        shippingAddress // Ensure this is a boolean
                        description={`Yout total is $${total}`} // Ensure this is a string
                        amount={total * 100} // Ensure this is an integer representing cents
                        token={onToken} // Ensure this is a function
                        stripeKey={KEY} // Ensure this is a valid string (public key)
                    >
                        <button className='bg-black text-white w-full p-2 hover:bg-gray-800'>CHECKOUT NOW</button>
                    </StripeCheckout>
                </div>
        </div>
        
       
      </div>
      <Footer/>
    </div>
  )
}

const ColourFilter =({color}) =>{
    return( <div style={{ backgroundColor: color }} className="rounded-full h-5 w-5 mr-2">

    </div>)
}

const CardItem = ({product}) =>{
    console.log(product.id)
    return (<div className='flex flex-1 border-b border-gray-300 pb-4 '>
       
           
    <img  className='flex w-[200px]' src={product.img} alt="" />
    <div className='flex justify-between flex-1 mr-20'> 
            <div className='flex flex-col ml-6 justify-center space-y-3'> 
                
                <div className='flex'>
                    <div className='font-bold mr-1'>Product:</div>
                    <div>{product.title}</div>
                </div>

                <div className='flex'>
                    <div className='font-bold mr-1'>id:</div>
                    <div>{product._id}</div>
                </div>

                <div className='flex'>
                    <div><ColourFilter color={product.color}/></div>
                    
                </div>

                <div className='flex'>
                    <div className='font-bold mr-1'>Size :</div>
                    <div>{product.size}</div>
                </div>
        </div>
            
       
        <div className='flex flex-col justify-center items-center space-y-5'>
                <div className=' flex space-x-1 items-center'>
                    <Add/>
                    <div className='text-2xl font-semibold'>{product.quantity}</div>
                    <Remove/>
                </div>
                <div className='text-3xl font-light'>$ {product.price * product.quantity}</div>
        </div>
        
        
    </div>
    
 </div>

 
 )
}

export default Cart
