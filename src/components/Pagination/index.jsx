import { Button, PaginationWrapper } from "./styles";

const Pagination = ({ previousPage, nextPage, toPreviousPage, toNextPage }) => {
  return (
    <PaginationWrapper>
      <Button
        onClick={toPreviousPage}
        disabled={!previousPage}
      >
        Previous
      </Button>
      <Button
        onClick={toNextPage}
        disabled={!nextPage}
      >
        Next
      </Button>
    </PaginationWrapper>
  );
};

export { Pagination };