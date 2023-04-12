import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;
  border: 1px solid rgb(0, 162, 255);
  border-radius: 8px;
  margin: 0 5px;
  font-size: 1.2em;
  background-color: #005261;
  transition: background-color 0.3s;
  &:enabled:hover {
    background-color: #008299;
    cursor: pointer;
  }
`;