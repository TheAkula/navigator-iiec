import styled from "styled-components";

export const StyledHeaderItem = styled.div.attrs((active) => {})`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px 10px;
  position: relative;

  span {
    color: #6d6d6d;
    font-size: 14px;
  }

  .arrow {
    display: ${(props) => (props.active ? "block" : "none")};
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%)
      ${(props) => (!props.reverse ? "rotate(180deg)" : "")};
    width: 14px;
    height: 14px;
    margin-top: ${(props) => (props.reverse ? "-2px" : "")};
  }

  :hover {
    background-color: #dedede;
  }
`;
