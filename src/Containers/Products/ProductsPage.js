import React, { useState } from 'react'
import './ProductsPage.css'
import {
  changeCategory,
  filterProducts,
} from '../../redux/Shopping/shoppingActions'
import { useSelector, useDispatch } from 'react-redux'
import Products from './Products/Products'
import Pagination from '../../Components/Pagination/Pagination'
import GroceryCard from '../../Components/GroceryCard/GroceryCard'

const ProductsPage = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.shop.displayedProducts)
  const category = useSelector((state) => state.shop.category)
  const [searching, setSearching] = useState(false)
  const [findItem, setFindItem] = useState('')
  const [foundItem, setFoundItem] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(12)

  function selectCategory(e) {
    const { value } = e.target
    dispatch(changeCategory(value))
    dispatch(filterProducts(value))
  }

  function handleSearch(e) {
    e.preventDefault()
    if (e.target.value === '') {
      setSearching(false)
      setFindItem(e.target.value)
    } else {
      setSearching(true)
      setFindItem(e.target.value)
      searchItem()
    }
  }

  function searchItem() {
    const searchResult = products.filter(
      (item) => item.name.toLowerCase().indexOf(findItem) > -1,
    )
    setFoundItem(searchResult)
  }

  function handlePageNumber(number) {
    setCurrentPage(number)
  }

  const itemFound = foundItem.map((item) => (
    <GroceryCard key={Math.random()} productData={item} />
  ))
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
            <select
              name="category"
              id="category"
              onChange={(e) => selectCategory(e)}
              value={category}
            >
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
            <input
              type="text"
              placeholder=" What are you looking for? "
              value={findItem}
              onChange={handleSearch}
            />
            <button
              className="search-btn"
              type="submit"
              onClick={(e) => searchItem(e)}
            >
              Search
            </button>
          </div>
        </div>
        <div className="products-list">
          {searching ? (
            <div className="list-wrapper">
              <div className="products">{itemFound}</div>
            </div>
          ) : (
            <div>
              <Products products={currentProducts} />
              <Pagination
                productsPerPage={productsPerPage}
                totalProducts={products.length}
                handlePageNumber={handlePageNumber}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
