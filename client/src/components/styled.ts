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
  background-color: rgba(255, 255, 255, 0.44);
  width: 100vw;
`

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: calc(100vh - 80px);
`
