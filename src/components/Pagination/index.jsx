import { ReactPagination, PaginateWrapper } from "./styles";

export const Pagination = ({ pageCount, onPageChange }) => {
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
        onPageChange={handlePageChange}
      />
    </PaginateWrapper>
  );
};