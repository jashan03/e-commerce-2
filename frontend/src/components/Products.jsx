import React, { useState,useEffect } from 'react'
import {popularProducts} from '../data'
import ProductItem from './ProductItem'
import axios from "axios"

const Products = ({cat,filters,sort}) => {
  const [products,setProducts]= useState([]);
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(()=>{
    const getProducts = async ()=>{
      try{ // if not cat then home page
        const res = await axios.get(
          cat
          ? `http://localhost:5000/api/products?category=${cat}`
          : "http://localhost:5000/api/products"
        );
       
       setProducts(res.data)
      }catch(err){
        
      }
    }
    getProducts()
  },[cat])

  useEffect(()=>{
   
    
    cat && setFilteredProducts(
         products.filter((item)=>
          Object.entries(filters).every(([key,value])=> //every = all condition of filter have to be meet 
        item[key].includes(value)
        )
      )
    )
  },[products,cat,filters])

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <div className='flex flex-wrap px-1 space-x-4'>
       {cat
        ? filteredProducts.map((item) => <ProductItem item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <ProductItem item={item} key={item.id} />)}
    </div>
  )
}

export default Products
