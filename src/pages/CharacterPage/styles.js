import styled from "styled-components";

export const DivWrapper = styled.div`
  width: 60%;
  height: 100vh;
  margin: auto;
  background-color: white;
`;

export const Table = styled.table`
  width: 600px;
  border-collapse: collapse;
  &, th, td {
    border: 1px solid black;
  }

  th, td {
    height: 40px;
  }
`;