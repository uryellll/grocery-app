import React, { useState, useEffect } from 'react'
import './ProductsPage.css'
import {
  changeCategory,
  fetchProducts,
  filterProducts,
} from '../../redux/Shopping/Actions/shoppingActions'
import { useSelector, useDispatch } from 'react-redux'
import Products from './Products/Products'
import Pagination from '../../Components/Pagination/Pagination'

const ProductsPage = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.shop.products)
  const category = useSelector((state) => state.shop.category)
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(10)

  if (products.length === 0) {
    dispatch(fetchProducts())
  }

  function handlePageNumber(number) {
    setCurrentPage(number)
  }

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  )

  return (
    <div className="wrapper">
      <div className="product-header">
        <h1>Our Products</h1>
      </div>
      <div className="products-container">
        <div className="top-bar">
          <div className="filter">
            <select name="category" id="category">
              <option value="" disabled defaultValue>
                Select category
              </option>
              <option value="">All products</option>
              <option value="vegetable">Vegetables</option>
              <option value="fruit">Fruits</option>
              <option value="grain">Grains</option>
              <option value="spice">Spices</option>
            </select>
          </div>
          <div className="search">
            <input type="text" placeholder=" What are you looking for? " />
            <button className="search-btn" type="submit">
              Search
            </button>
          </div>
        </div>
        <div className="products-list">
          <div>
            <Products products={currentProducts} />
            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={products.length}
              handlePageNumber={handlePageNumber}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
