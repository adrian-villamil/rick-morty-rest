import styled from "styled-components";
import { AiOutlineSearch } from 'react-icons/ai';

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  position: relative;
  width: 90%;
  margin: 20px;
`;

export const SearchIcon = styled(AiOutlineSearch)`
  position: absolute;
  left: 9px;
  top: 50%;
  font-size: 25px;
  color: gray;
  transform: translateY(-50%);
`;

export const Input = styled.input`
  padding: 10px 10px 10px 38px;
  color: gray;
  font-size: 17px;
  border: 2px solid grey;
  border-radius: 5px;
  width: 100%;
  background: #f1f1f1;
  &, & ~ ${SearchIcon} {
    transition: 0.3s ease-in-out;
  }
  &:focus {
    outline-color: rgb(151, 206, 76);
  }
  &:focus ~ ${SearchIcon} {
    color: rgb(151, 206, 76);
  }
`;