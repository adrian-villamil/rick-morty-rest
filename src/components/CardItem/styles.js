import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

const getStatusColor = (status) => {
  if (status === 'Alive') {
    return '#66bb6a';
  }
  if (status === 'Dead') {
    return '#f44336';
  }
  return '#303030';
};

export const CardWrapper = styled.div`
  width: 250px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 5px 5px 0 0;
`;

export const CardContent = styled.div`
  padding: 5px 16px;
  overflow-wrap: break-word;
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

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Span = styled.span`
  padding: 5px 0;
  & + span {
    padding: 5px 8px;
    border: 2px solid ${props => getStatusColor(props.status)};
    border-radius: 15px;
    color: ${props => getStatusColor(props.status)};
  }
`;