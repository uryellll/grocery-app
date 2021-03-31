import React from 'react'
import GroceryCard from '../../../Components/GroceryCard/GroceryCard'
import './Products.css'

const Products = ({ products, loading }) => {
  if (loading) {
    return <h1>Loading products...</h1>
  }

  return (
    <div className="list-wrapper">
      <div className="products">
        {products.map((item) => (
          <GroceryCard key={Math.random()} productData={item} />
        ))}
      </div>
    </div>
  )
}

export default Products
