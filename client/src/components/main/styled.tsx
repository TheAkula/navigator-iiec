import styled from "styled-components";

export const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 420px minmax(500px, 960px) 420px;
  gap: 30px;
  justify-content: center;
  max-width: 1920px;
  padding: 30px;
  margin: 0 auto;

  @media screen and (max-width: 1620px) {
    grid-template-columns: 360px minmax(500px, 960px) 360px;
  }
`;
