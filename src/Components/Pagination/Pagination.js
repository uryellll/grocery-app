import React from 'react'
import './Pagination.css'

const Pagination = ({ productsPerPage, totalProducts, handlePageNumber }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="pagination-container">
      {pageNumbers.map((number) => (
        <button
          key={number}
          className="pageNumber-btn"
          onClick={() => handlePageNumber(number)}
        >
          {number}
        </button>
      ))}
    </div>
  )
}

export default Pagination
