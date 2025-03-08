import Announcement from '../components/Announcement'
import AppBar  from '../components/Appbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Remove , Add} from '@mui/icons-material'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { publicRequest } from '../requestMethods'
import { useCartActions} from '../recoil/cartRecoil';


const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2]

  const [product,setProduct] = useState({})
  const [defquantity,setdefQuantity] = useState(1);
  const [color,setColor] = useState("");
  const [size,setSize] = useState("");

  // const products = useRecoilValue(cartProducts); // Get the cart products from Recoil state
  // const quantity = useRecoilValue(cartQuantity); // Get the total quantity from Recoil state
  // const total = useRecoilValue(cartTotal); 
  const { addProduct } = useCartActions(); // Destructure the `addProduct` function from the cart actions

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (err) {
        console.error("Failed to fetch product:", err);
      }
    };
    getProduct();
  }, [id]);
  

  const handleQantity = (type)=>{
    if(type === "dec"){
      defquantity>1 && setdefQuantity(defquantity-1)
    }else{
      setdefQuantity(defquantity+1)
    }
  }

  const handleClick = () => {
    const newProduct = { ...product,
       quantity: defquantity ,
       color: product.color ? (color || product.color[0]) : null,
       size: size || product.size?.[0]
      };
    addProduct(newProduct);
  };

  return (
    <div>
      <AppBar/>
      <Announcement/>

      <div className='flex  my-10 '>
         <div className='flex flex-1'>
            <img src={product.img} className='h-full w-full object-contain'/>
         </div>
         <div className=' flex flex-1 ml-3'>
            <div className='flex flex-col  '>
                <div className='font-light text-3xl pb-6'>{product.title}</div>
                <div className='pb-6'>{product.desc} </div>
                <div className='font-light text-4xl pb-6'>$ {product.price}</div>
                    <div className='flex mb-6'>
                        <div className='mr-3'>Colour </div>
                        {product.color?.map((c)=>(
                             <ColourFilter
                             color={c}
                             key={c}
                             onClick={() => setColor(c)} // Update the selected color
                           />
                        ))}
                        <div className='ml-9'>Size</div>
                        <select onChange={(e)=>setSize(e.target.value)} className=' text-sm p-1 border border-gray-300 rounded ml-2'>
                            {product.size?.map((s)=>(
                                  <option key={s}>{s}</option>
                            ))}
                        </select>
                    </div>
                <div className='flex items-center '>
                    <Remove onClick={()=>handleQantity('dec')}/>
                    <div className=' flex border w-7 h-7  items-center justify-center'>{defquantity}</div>
                    <Add onClick={()=>handleQantity('inc')}/>
                    <button onClick={handleClick} className='ml-10 border border-2 border-teal-500  p-2 hover:bg-customPink  '> Add to cart</button>
                </div>    

           </div>
         </div>

      </div>

      <Newsletter/>
      <Footer/>

    </div>
  )
}

const ColourFilter = ({ color, onClick }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="rounded-full h-5 w-5 mr-2 cursor-pointer"
      onClick={onClick}
    />
  );
};

export default Product
