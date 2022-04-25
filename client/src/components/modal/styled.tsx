import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 40px;
  z-index: 200;

  p {
    text-align: center;
  }

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100%;
  z-index: 100;
`;
