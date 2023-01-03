import './Pagination.css';

const Pagination = ({ previousPage, nextPage, toPreviousPage, toNextPage }) => {
  return (
    <div className="Pagination">
      <button
        className='pagination-button'
        onClick={toPreviousPage}
        disabled={!previousPage}
      >
        Previous
      </button>
      <button
        className='pagination-button'
        onClick={toNextPage}
        disabled={!nextPage}
      >
        Next
      </button>
    </div>
  );
};

export { Pagination };