import React, { useState } from "react";
import "./style.css";
import ResponsivePagination from "react-responsive-pagination";

function Pagination({ totalPages, fetchMoviesByPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  function handlePageChange(page) {
    setCurrentPage(page);
    fetchMoviesByPage(page);
    window.scroll({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }
  return (
    <ResponsivePagination
      total={totalPages}
      current={currentPage}
      onPageChange={(page) => handlePageChange(page)}
      className="pagination-container d-flex justify-content-center align-items-center"
      pageItemClassName="pagination-item"
      pageLinkClassName="pagination-link"
      activeItemClassName="pagination-active "
      disabledItemClassName="pagination-disabled"
      previousClassName=""
      nextClassName=""
      previousLabel={<span className="fa-solid fa-chevron-left"></span>}
      nextLabel={<span className="fa-solid fa-chevron-right"></span>}
    />
  );
}

export default Pagination;
