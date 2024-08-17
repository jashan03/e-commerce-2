import React from 'react'
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
const Footer = () => {
  return (
    <div className='flex flex-row mb-4'>
        <div className='flex flex-1 flex-col p-4'>
            <div className='flex mb-3 font-extrabold text-lg'> Happy Tails <PetsOutlinedIcon/></div>
            <div className='flex mb-3'> There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly believable.</div>
            <div className='flex mb-2 space-x-4'>
                    <FacebookIcon sx={{ height:"30px" ,width:"30px" }} className='bg-facebook-blue text-white rounded-full p-1'/>
                    <InstagramIcon sx={{ height:"30px" ,width:"30px" }} className='bg-instagram-pink text-white rounded-full p-1'/>
                    <TwitterIcon sx={{ height:"30px" ,width:"30px"}} className='bg-twitter-blue text-white rounded-full p-1'/>
                    <PinterestIcon sx={{ height:"30px" ,width:"30px" }} className='bg-pinterest-red text-white rounded-full p-1'/>

            </div>
        </div>   
        <div className='flex flex-1 flex-col p-4'>
                <div className='mb-2 font-extrabold text-lg'>Useful Links</div>
                <div className='flex flex-wrap'>
                    <div className='w-1/2'>
                        <div>Home</div>
                        <div>Cart</div>
                        <div>Man Fashion</div>
                        <div>Woman Fashion</div>
                        <div>Accessories</div>
                    </div>
                    <div className='w-1/2'>
                        <div>My Account</div>
                        <div>Order Tracking</div>
                        <div>Wishlist</div>
                        <div>Terms</div>
                    </div>
                </div>
        </div>

        <div className='flex flex-1 p-4 flex-col'>
            <div className='mb-3 font-extrabold text-lg'>Contact</div>
            <div className='mb-3'><LocationOnIcon className='mr-2'/>622 Dixie Path , South Tobinchester 98336</div>
            <div className='mb-3'><PhoneIcon className='mr-2'/> +1 234 56 78</div>
            <div className='mb-3'><MailOutlineOutlinedIcon className='mr-2'/> contact@lama.dev</div>
            <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="payment"  className='h-[30px] w-[200px]'/>
        </div>
      
    </div>
  )
}

export default Footer
