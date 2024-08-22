import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React from 'react';
import { sliderItems } from '../data';
const Slider = () => {
  
    const [slideIndex,setSlideIndex] = React.useState(0);
    const handleClick = (direction)=>{
       
            if (direction === 'left') {
                setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
            } else {
                setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
            }
    };

  return (
    <div className="h-screen relative mx-2 bg-slate-100 py-2 overflow-hidden">
        <ArrowsLeft  onClick={()=>handleClick("left")} />
        <ArrowsRight  onClick={()=>handleClick("right")}/>
    <div className='flex flex-row transition-transform duration-300 ease-in-out'
                style={{ transform: `translateX(-${slideIndex * 100}vw)` }}>
        {sliderItems.map((item)=>(
             <div className={`flex flex-shrink-0 w-screen`} key={item.id}>
             <div className='flex flex-1 px-5'>
                 <img src={item.img} alt="dog bed" />
             </div>
             <div className='flex flex-1'>
                 <div className='flex justify-center flex-col'>
                     <div className="flex justify-center">
                         <div className='max-w-lg"'>
                             <div className='text-5xl font-extrabold'>
                                 {item.title}
                             </div>
                             <div className='max-w-md text-xl font-semibold text-left mt-4'>
                                 {item.desc}
                             </div>
                             <div>
                                 <button className='max-w-md font-light mt-5 text-black border border-black text-m px-1 py-1'>SHOP NOW</button>
                             </div>
                          </div>
                     </div>
                 </div>
                 
             </div>
         </div>
        ))}
       
    </div>
        
       
    </div>
  )
}

const ArrowsLeft= ({onClick})=>{
    return <div className='absolute top-[50%] transform -translate-y-1/2 cursor-pointer z-20' onClick={onClick} >
         <ArrowBackIosIcon className='z-0'/>
    </div>
}
const ArrowsRight= ({onClick})=>{
    return <div className='absolute top-[50%] left-[96%] transform -translate-y-1/2 cursor-pointer z-20'onClick={onClick}>
         <ArrowForwardIosIcon/>
    </div>
}




export default Slider

