import Announcement from '../components/Announcement'
import AppBar  from '../components/Appbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Remove , Add} from '@mui/icons-material'

const Product = () => {
  return (
    <div>
      <AppBar/>
      <Announcement/>
      <div className='flex  my-10 mx-10'>
         <img src="https://i.ibb.co/S6qMxwr/jean.jpg" className='flex-1 object-cover h-[80vh]'  />
         <div className='flex-1 ml-11'>
            <div className='flex flex-col'>
                <div className='font-light text-3xl pb-6'>Denim jumpsuit</div>
                <div className='pb-6'>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Totam illo dicta maxime
                    labore hic. Sunt, itaque sequi quo rerum 
                    vero porro amet, unde dolorem optio, esse 
                    adipisci hic. A, facere?
                </div>
                <div className='font-light text-4xl pb-6 '>$20</div>
                    <div className='flex mb-6'>
                        <div className='mr-3'>Colour </div>
                        <ColourFilter colour="black"/>
                        <ColourFilter colour="blue"/>
                        <ColourFilter colour="green"/>
                        <div className='ml-9'>Size</div>
                        <select className=' text-sm p-1 border border-gray-300 rounded ml-2'>
                            
                            <option selected>XS</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                        </select>
                    </div>
                <div className='flex items-center '>
                    <Remove/>
                    <div className=' flex border w-7 h-7  items-center justify-center'>1</div>
                    <Add/>
                    <button className='ml-10 border border-2 border-teal-500  p-2 hover:bg-customPink  '> Add to cart</button>
                </div>    

           </div>
         </div>

      </div>
      <Newsletter/>
      <Footer/>

    </div>
  )
}

const ColourFilter =({colour}) =>{
    return( <div style={{ backgroundColor: colour }} className="rounded-full h-5 w-5 mr-2">

    </div>)
}

export default Product
