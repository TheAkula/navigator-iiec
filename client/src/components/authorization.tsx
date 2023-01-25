import { useNavigate } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { useContextUser } from '../context/user-context'


export const Authorization = () => {
    const navigate = useNavigate()

    const logoutAccount = () => {

        localStorage.removeItem('token')
        navigate('/login')
    }

    const token = useContextUser()

    return (
        <>
            <StyledBtns>
                {token && <div onClick={logoutAccount}>
                    <ButtonExit>
                        Выйти
                    </ButtonExit>
                </div>}

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

const ButtonExit = styled.button`
  ${stylesBtn}
  border: none;
  background-color: #ff5353;
`

const StyledBtns = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`