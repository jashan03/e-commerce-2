import React from 'react'
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='flex flex-row mb-4'>
        <div className='flex flex-1 flex-col p-4'>
            <div className='flex mb-3 font-extrabold text-lg'> Happy Tails <PetsOutlinedIcon/></div>
            <div className='flex mb-3'> There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly believable.</div>
            <div className='flex mb-2 space-x-4'>
                    
                    <SocialIcons></SocialIcons>
            </div>
        </div>   
        <div className='flex flex-1 flex-col p-4'>
                <div className='mb-2 font-extrabold text-lg '>Useful Links</div>
                <div className='flex flex-wrap'>
                    <div className='flex-1'>
                        <Link to='/'><div>Home</div></Link>
                        <Link to='/cart'><div>Cart</div></Link>
                        <Link to='/'><div>Treats</div></Link>
                        <Link to='/'><div>Grooming Care</div></Link>
                        <Link to='/'><div>Accessories</div></Link>
                    </div>
                    <div className='flex-1'>
                        <Link to='/'><div>My Account</div></Link>
                        <Link to='/'><div>Order Tracking</div></Link>
                        <Link to='/'><div>Wishlist</div></Link>
                        <Link to='/'><div>Terms</div></Link>
                    </div>
                </div>
        </div>

        <div className='flex flex-1 p-4 flex-col'>
            <div className='mb-3 font-extrabold text-lg'>Contact</div>
            <div className='mb-3'><LocationOnIcon className='mr-2'/>145 Maple Avenue, East Elmwood, 47209</div>
            <div className='mb-3'><PhoneIcon className='mr-2'/> +1 234 56 78</div>
            <div className='mb-3'><MailOutlineOutlinedIcon className='mr-2'/> contact@.devs</div>
            <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="payment"  className='h-[30px] w-[200px]'/>
        </div>
      
    </div>
  )
}

// for opening these links in a new tab 
const socialLinks = [
  { href: "https://www.facebook.com/", Icon: FacebookIcon, bg: "bg-facebook-blue" },
  { href: "https://www.instagram.com/", Icon: InstagramIcon, bg: "bg-instagram-pink" },
  { href: "https://x.com/?lang=en", Icon: TwitterIcon, bg: "bg-twitter-blue" },
  { href: "https://in.pinterest.com/", Icon: PinterestIcon, bg: "bg-pinterest-red" }
];

// to apply security attributes , norefferer n noopener in a concise manner
const SocialIcons = () => (
  <div className="flex space-x-2">
    {socialLinks.map(({ href, Icon, bg }, index) => (
      <a key={index} href={href} target="_blank" rel="noopener noreferrer">
        <Icon sx={{ height: 30, width: 30 }} className={`${bg} text-white rounded-full p-1`} />
      </a>
    ))}
  </div>
);


export default Footer

