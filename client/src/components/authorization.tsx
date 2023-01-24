import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const Authorization = () => {
    const logoutAccount = () => {
        localStorage.removeItem('token')
    }

    return (
        <>
            <StyledBtns>
                <Link to='login'>
                    <ButtonAuth>
                        Войти
                    </ButtonAuth>
                </Link>
                <Link to='login' onClick={logoutAccount}>
                    <ButtonExit>
                        Выйти
                    </ButtonExit>
                </Link>
            </StyledBtns>
        </>
    )
}

const stylesBtn = css`
  cursor: pointer;
  border-radius: 5px;
  padding: 10px 30px;
  font-size: 16px;
  color: white;
`

const ButtonAuth = styled.button`
  ${stylesBtn}
  background-color: #009af1;
  border: 1px solid white;
`

const ButtonExit = styled.button`
  ${stylesBtn}
  border: none;
  background-color: #ff5353;
`

export const StyledBtns = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`