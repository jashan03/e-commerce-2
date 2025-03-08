import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';

const ProductItem = ({ item }) => {
  return (
    <div className="relative flex flex-col items-center bg-[#e6e6fa] p-2 rounded-lg shadow-md hover:shadow-lg transition-all">
    {/* Product image with object-contain : needs w-full h-full to remove any white trailing spaces */}

      <img src={item.img} className=" w-full h-full object-contain" alt="product" /> 
      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 hover:bg-opacity-30 transition-all ease-in duration-300 group">
        <div className="flex space-x-2 opacity-0 group-hover:opacity-100">
          <Link to={`/product/${item._id}`}>
            <ShoppingCartOutlinedIcon
              sx={{ height: "40px", width: "40px" }}
              className="p-2 rounded-full bg-white transition-all duration-500 ease-in-out hover:bg-[#e9f5f5] hover:scale-110"
            />
          </Link>
          <Link to={`/product/${item._id}`}>
            <SearchOutlinedIcon
              sx={{ height: "40px", width: "40px" }}
              className="p-2 rounded-full bg-white transition-all duration-500 ease-in-out hover:bg-[#e9f5f5] hover:scale-110"
            />
          </Link>
          <FavoriteBorderOutlinedIcon
            sx={{ height: "40px", width: "40px" }}
            className="p-2 rounded-full bg-white duration-500 ease-in-out hover:bg-[#e9f5f5] hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};


export default ProductItem
