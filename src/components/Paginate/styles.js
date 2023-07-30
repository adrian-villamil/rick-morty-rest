import styled from "styled-components";
import ReactPaginate from "react-paginate";

export const PaginateWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const ReactPagination = styled(ReactPaginate)`
  list-style-type: none;
  margin: 0;
  padding: 0;
  
  & li {
    float: left;
    margin: 0 4px;
  }
  
  & a {
    display: block;
    padding: 8px 16px;
    color: black;
    border: 1px solid #dddddd;
    cursor: pointer;
    transition: background-color .3s;

    &:hover:not(.selected > a) {
      background-color: #dddddd;
    }
  }

  & .selected > a {
    background-color: #4CAF50;
    color: white;
    border: 1px solid #4CAF50;
  }
`;