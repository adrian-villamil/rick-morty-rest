import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const CardWrapper = styled.div`
  display: flex;
  width: fit-content;
  background-color: #2F4858;
  border-radius: 10px;
  overflow: hidden;
  margin: 5px;
`;

export const Img = styled.img`
  width: 220px;
`;

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 220px;
  overflow-wrap: break-word;
  & p, & h3 {
    color: #00A17D;
    text-align: center;
  }
`;

export const Link = styled(LinkRouter)`
  text-decoration: none;
  color: rgb(72, 168, 27);
  font-size: 1.3em;
  font-weight: 700;
  text-align: center;
  &:hover {
    color: rgb(139, 207, 33);
  } 
`;