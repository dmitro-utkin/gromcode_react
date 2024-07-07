import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const isPrevPageAvailable = currentPage !== 1;
  const isNextPageAvailable = currentPage !== totalPages;

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={!isPrevPageAvailable || currentPage === 1}>
        ←
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button className="btn" onClick={goNext} disabled={!isNextPageAvailable || totalItems % itemsPerPage === 0}>
        →
      </button>
    </div>
  );
};

export default Pagination;
