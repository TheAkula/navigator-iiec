import { Line, StyledLogo } from '../styled'
import styled from 'styled-components'
import { dataFooter } from './types'

export const Footer = () => {
  return (
    <>
      <StyledFooter>
        <Wrapper>
          <StyledLogo>
            <img src="images/logo.svg" alt="Навигатор 2.0" />
          </StyledLogo>
          <StyledFooterMenu>
            {dataFooter?.map((el) => (
              <StyledMenuItem href={el.href} target="_blank" key={el.id}>
                {el.item}
              </StyledMenuItem>
            ))}
          </StyledFooterMenu>
        </Wrapper>

        <Line />
      </StyledFooter>
    </>
  )
}

const StyledFooter = styled.footer`
  text-align: center;
  background-color: #018ddc;
`

const StyledFooterMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 45px 20px;
`

const StyledMenuItem = styled.a`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
`
