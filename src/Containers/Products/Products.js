import React, { useState } from 'react'
import './Products.css'
import GroceryCard from '../../Components/GroceryCard/GroceryCard'
import { changeCategory } from '../../redux/Shopping/shoppingActions'
import { useSelector, useDispatch } from 'react-redux'

const Products = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.shop.products)
  const category = useSelector((state) => state.shop.category)
  const [searching, setSearching] = useState(false)
  const [findItem, setFindItem] = useState('')
  const [foundItem, setFoundItem] = useState([])

  function selectCategory(e) {
    const { value } = e.target
    dispatch(changeCategory(value))
  }

  function handleSearch(e) {
    e.preventDefault()
    if (e.target.value === '') {
      setSearching(false)
      setFindItem(e.target.value)
      console.log('not searching')
    } else {
      setSearching(true)
      setFindItem(e.target.value)
      searchItem()
    }
  }

  function searchItem() {
    console.log(`searching ${findItem}`)
    const searchResult = products.filter(
      (item) => item.name.toLowerCase().indexOf(findItem) > -1,
    )
    setFoundItem(searchResult)
  }

  const searchResult = foundItem.map((item) => (
    <GroceryCard key={item.id} productData={item} />
  ))
  const filterProducts = products.filter((item) => item.type === category)
  const filteredProductList = filterProducts.map((item) => (
    <GroceryCard key={item.id} productData={item} />
  ))
  const fullProductList = products.map((item) => (
    <GroceryCard key={item.id} productData={item} />
  ))

  console.log(foundItem)

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
          {searching
            ? searchResult
            : category === ''
            ? fullProductList
            : filteredProductList}
        </div>
      </div>
    </div>
  )
}

export default Products
