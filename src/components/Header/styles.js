import styled from "styled-components";
import { NavLink as NavLinkRouter } from "react-router-dom";

export const HeaderWrapper = styled.header`
  box-shadow: 0 0 2px rgb(0, 0, 0);
`;

export const NavLink = styled(NavLinkRouter)`
  color: black;
  text-decoration: none;
  font-size: 17px;
  font-weight: 500;
  padding: 14px 16px;
  float: left;
  &:hover, &.active {
    background-color: rgb(151, 206, 76);
  }
`;

export const NavIcon = styled.img`
  width: 60px;
  &:hover {
    background-color: rgb(255, 255, 255);
  }
`;