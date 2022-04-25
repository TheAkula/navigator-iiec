import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavigationItem = styled(NavLink)`
  height: 100%;
  width: 255px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  text-decoration: none;
  color: #fff;

  &.active {
    background-color: #007ec5;
  }

  :hover {
    background-color: #007ec5;
  }

  @media screen and (max-width: 1620px) {
    width: 180px;
  }
`;
