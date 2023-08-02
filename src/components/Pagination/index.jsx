import { ReactPagination, PaginateWrapper } from "./styles";

export const Pagination = ({ pageCount, onPageChange, currentPage }) => {
  const handlePageChange = (data) => {
    onPageChange(data.selected + 1);
  };
  return (
    <PaginateWrapper>
      <ReactPagination
        previousLabel='&laquo;'
        nextLabel='&raquo;'
        breakLabel='...'
        pageCount={pageCount}
        forcePage={Number(currentPage) - 1}
        onPageChange={handlePageChange}
      />
    </PaginateWrapper>
  );
};