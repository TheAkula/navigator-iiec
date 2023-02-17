import styled from 'styled-components'

export const Location = () => {
  return (
    <>
      <StyledLocation>
        <img alt="location" src="images/map 1.svg" />
        <Desc>
          ул. Ленина, 68, Ижевск,
          <br /> республика Удмуртия, 426004
        </Desc>
      </StyledLocation>
    </>
  )
}

const StyledLocation = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

const Desc = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
`
