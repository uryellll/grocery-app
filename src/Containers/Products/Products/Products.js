import React from 'react'
import GroceryCard from '../../../Components/GroceryCard/GroceryCard'
import './Products.css'

const Products = ({ products }) => {
  return (
    <div className="list-wrapper">
      <div className="products">
        {products.map((item, index) => (
          <GroceryCard key={index} productData={item} />
        ))}
      </div>
    </div>
  )
}

export default Products
