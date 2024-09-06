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
          ? `https://e-commerce-2-sigma.vercel.app/api/products?category=${cat}`
          : "https://e-commerce-2-sigma.vercel.app/api/products"
        );
       
       setProducts(res.data)
      }catch(err){
        
      }
    }
    getProducts()
  },[cat])

  useEffect(() => {
    if (cat) {
      setFilteredProducts(
        products.filter((item) => {
          // If no filters are chosen, display all products in the category
          const filterEntries = Object.entries(filters);
          const filterLength = filterEntries.length;
  
          if (!filterLength) {
            return true;
          }
  
          // Count the number of filter conditions met
          const conditionsMet = filterEntries.filter(([key, value]) =>
            item[key].includes(value)
          ).length;
  
          // Set required conditions based on a portion of the total filters
          const requiredConditions = Math.ceil(filterLength / 2); // e.g., half of the filters must be met
          return conditionsMet >= requiredConditions;
        })
      );
    }
  }, [products, cat, filters]);
  

  

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
    <div className='flex flex-wrap gap-2'>
       {cat
        ? filteredProducts.map((item) => <ProductItem item={item} key={item.id} />)
        : products
            .slice(0, 7)
            .map((item) => <ProductItem item={item} key={item.id} />)}
    </div>
  )
}

export default Products
