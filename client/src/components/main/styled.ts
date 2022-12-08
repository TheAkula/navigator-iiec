import styled from 'styled-components'

export const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 420px minmax(500px, 960px) 420px;
  gap: 30px;
  justify-content: center;
  max-width: 1920px;
  padding: 30px;
  margin: 0 auto;

  @media screen and (max-width: 1620px) {
    grid-template-columns: 340px minmax(500px, 960px) 340px;
  }
`

export const StyledMenu = styled.div`
  border: 2px solid #c9c9c9;
  border-radius: 8px 8px 0px 0px;
  background-color: #c3c3f333;
  padding-bottom: 15px;
  height: fit-content;
  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #009af1;
    margin-top: 30px;
    margin-left: 30px;
    margin-bottom: 15px;
  }
`
