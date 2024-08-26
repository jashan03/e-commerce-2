
import StripeCheckout from 'react-stripe-checkout';
import { useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const KEY = import.meta.env.VITE_APP_STRIPE;

const Pay = () => {
    const navigate = useNavigate();
    const[stripeToken,setStripeToken] = useState(null); // returned after client payment
    const onToken = (token) => {
      setStripeToken(token)
  };

    useEffect(()=>{
          const makeRequest = async ()=>{
            try{
               const res = await axios.post(
                "http://localhost:5000/api/checkout/payment",
                {
                    tokenId:stripeToken.id,
                    amount:2000,
                });
                console.log(res.data)
                navigate('/success')
            }catch(err){
                console.log(err)
            }
          };
          stripeToken && makeRequest() // becoz when u are returning the div for the first time
          // the token is being set again as null , n somewhat the value is being 
          //reassigned hence the useEffect is called therefore to avoid calling the 
          //makeRequest funtion when the token== null we need to make sure that we only
          // call makeRequest when its not null
    },[stripeToken, navigate]) // include all hooks used as a dependency

  
  


  return (
    <div className="w-[50%] h-[50%] text-center">
      <StripeCheckout
        name="Happy tails"
        image="https://i.ibb.co/DG69bQ4/2.png"// Ensure this is a valid React element
        billingAddress// Ensure this is a boolean
        shippingAddress // Ensure this is a boolean
        description="Your total is $20" // Ensure this is a string
        amount={2000} // Ensure this is an integer representing cents
        token={onToken} // Ensure this is a function
        stripeKey={KEY} // Ensure this is a valid string (public key)
      >
        <button>Pay Now</button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
