import styled from "styled-components";

export const StyledContextMenu = styled.div`
  width: 200px;
  z-index: 200;
  position: absolute;
  background: #f7f7f7;
  border: 1px solid #aeaeae;
  box-shadow: 3px 3px 10px -6px black;

  .context-menu-block {
    height: 30px;
    border-bottom: 1px solid #aeaeae;
    display: flex;
    align-items: center;
    padding-left: 10px;
    width: 100%;

    span {
      font-size: 14px;
    }

    :last-child {
      border-bottom: none;
    }

    :hover {
      background-color: #ededed;
    }
  }
`;
