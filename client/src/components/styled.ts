import styled from 'styled-components'

export const StyledLogo = styled.div`
  width: 191px;
  height: 44px;

  img {
    height: 100%;
  }
`

export const Line = styled.div`
  height: 1px;
  background: #c9c9c9;
  width: 100%;
`

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: calc(100vh - 80px);
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

export const Separator = styled.div`
  background: #c9c9c9;
  width: 100%;
  height: 1px;
`
