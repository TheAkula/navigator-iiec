import styled from "styled-components";

export const StyledBackgroundLogo = styled.div`
  position: absolute;
  top: 50%;
  width: calc(100% - 100% * 0.09375 * 2 + 4px);
  left: calc(100% * 0.09375 + 2px);
  transform: translateY(-50%);
  z-index: -10;

  img {
    width: 100%;
  }
`;
