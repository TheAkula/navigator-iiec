import { Line, StyledLogo } from '../styled'
import LogoImage from '../../assets/images/logo.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { dataFooter } from './types'

export const Footer = () => {
  return (
    <>
      <StyledFooter>
        <Wrapper>
          <StyledLogo><img src={LogoImage} alt="Навигатор 2.0" /></StyledLogo>
          <StyledFooterMenu>
            {dataFooter?.map((el) => (
              <StyledMenuItem to={el.href} key={el.id}>
                {el.item}
              </StyledMenuItem>
            ))}
          </StyledFooterMenu>
        </Wrapper>

        <Line />
        <DesignedWrapper>
          <DesignedText>©Design by Artyom Sergunin</DesignedText>

        </DesignedWrapper>
      </StyledFooter >

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

const StyledMenuItem = styled(Link)`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
`

const DesignedWrapper = styled.div`
  padding: 15px 0 10px;
`

const DesignedText = styled.span`
  color: white;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
`