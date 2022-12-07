import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const sharedStyle = css`
  display: flex;
  gap: 10px;
  padding: 15px 0 15px 30px;
  text-decoration: none;
  align-items: center;
  cursor: pointer;
  text-decoration: none;

  img {
    stroke: #333333;
  }

  p {
    font-size: 16px;
    line-height: 18.75px;
    color: #333333;
  }

  :hover {
    background-color: #daf2ff;
  }
`

export const StyledMenuA = styled.a`
  ${sharedStyle}
`;

export const StyledMenuLink = styled(Link)`
  ${sharedStyle}
`;

