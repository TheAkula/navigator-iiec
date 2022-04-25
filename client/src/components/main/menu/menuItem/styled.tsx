import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledMenuA = styled.a`
  display: flex;
  gap: 10px;
  padding: 15px 0 15px 30px;
  text-decoration: none;
  align-items: center;
  cursor: pointer;
  text-decoration: none;

  p {
    font-size: 16px;
    line-height: 18.75px;
    color: #333333;
  }

  :hover {
    background-color: #daf2ff;

    p {
      font-weight: 500;
    }
  }
`;

export const StyledMenuLink = styled(Link)`
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

    p {
      font-weight: 500;
    }
  }
`;

export const StyledMenuItem = styled.div`
  display: flex;
  gap: 10px;
  padding: 15px 0 15px 30px;
  text-decoration: none;
  align-items: center;
  cursor: pointer;

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

    p {
      font-weight: 500;
    }
  }
`;
