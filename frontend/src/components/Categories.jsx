import React from 'react';
import { categories } from '../data';
import CategoryItem from './CategoryItem';

const Categories = () => {
  return (
    <div className='flex flex-1 h-[70vh]'>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Categories;
