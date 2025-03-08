import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React from 'react';
import {Link} from 'react-router-dom'
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
    <div className="lg:h-[85vh] sm:h-[60vh] relative bg-slate-100 py-2 px-2 overflow-hidden">
    <ArrowsLeft handleArrowClick={() => handleClick("left")} />
    <ArrowsRight handleArrowClick={() => handleClick("right")} />
    <div
        className="flex flex-row transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${slideIndex * 100}vw)` }}
    >
        {sliderItems.map((item) => (
            <div className={`flex flex-shrink-0 w-screen`} key={item.id}>
                <div className="flex flex-1 px-5">
                    <img
                        src={item.img}
                        className="object-contain w-full max-h-[85vh]"
                        alt="dog bed"
                    />
                </div>
                <div className="flex flex-1">
                    <div className="flex flex-col justify-center">
                        <div className="flex justify-center">
                            <div className='max-w-lg'>
                                <div className="text-5xl font-extrabold">
                                    {item.title}
                                </div>
                                <div className="max-w-md text-xl  text-left mt-4">
                                    {item.desc}
                                </div>
                                <div>
                                    <Link to='products/food'>
                                    <button className="max-w-md font-light mt-5 text-black border border-black text-m px-1 py-1">
                                        SHOP NOW
                                    </button>
                                    </Link>  
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

const ArrowsLeft= ({handleArrowClick})=>{
    return <div className='absolute top-[50%] transform -translate-y-1/2 cursor-pointer z-20 ' onClick={handleArrowClick} >
         <ArrowBackIosIcon className='z-0'/>
    </div>
}
const ArrowsRight= ({handleArrowClick})=>{
    return <div className='absolute top-[50%] left-[96%] transform -translate-y-1/2 cursor-pointer z-20'onClick={handleArrowClick}>
         <ArrowForwardIosIcon/>
    </div>
}




export default Slider

