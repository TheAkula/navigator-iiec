import { useState } from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import { setAuthToken } from '../../api/init'
import { login } from '../../api/login'
import { Separator } from '../styled'

export const Auth = () => {
    const [valuesForm, setValuesForm] = useState({
        username: '',
        password: '',
    })

    const [errors, setErrors] = useState({ username: '', password: '' })
    const navigate = useNavigate()

    const onUpdateField = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValuesForm(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const checkedError = () => {
        let isError = false

        if (!(valuesForm.password || valuesForm.username)) {
            isError = true
        }

        return isError
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (checkedError()) {
            setErrors({
                username: 'Введите логин',
                password: 'Введите пароль'
            })
        } else {
            login({
                login: valuesForm.username,
                password: valuesForm.password
            }).then(response => {
                const token = response.data.token

                localStorage.setItem('token', JSON.stringify(token))

                setAuthToken(token)
                navigate('/')
            })
        }
    }

    return (
        <Wrapper>
            <Content>
                <Container>
                    <Title>АВТОРИЗАЦИЯ</Title>
                </Container>
                <Separator />
                <Container>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <WrapperFields>
                            <WrapperField>
                                <Input name='username' required placeholder='Логин' value={valuesForm.username} type="text" onChange={(e) => onUpdateField(e)} />
                                <ErrorMessage>{errors.username && errors.username}</ErrorMessage>
                            </WrapperField>
                            <WrapperField>
                                <Input name='password' required placeholder='Пароль' value={valuesForm.password} type="text" onChange={(e) => onUpdateField(e)} />
                                <ErrorMessage>{errors.password && errors.password}</ErrorMessage>
                            </WrapperField>
                            <Button type='submit'>ВОЙТИ</Button>
                        </WrapperFields>
                    </form>
                </Container>
            </Content>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    background-color:#F3F3FD;
    height: 100%;
    width: 100%;
`

const Content = styled.div`
    background: #FFFFFF;
    border: 1px solid #C9C9C9;
    border-radius: 8px;
    max-width: 555px;
    margin: 60px auto 0;
`

const Container = styled.div`
    padding: 25px;
`

const Title = styled.h3`
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #009AF1;
    text-transform: uppercase;
`

const WrapperFields = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
`

const Input = styled.input`
    height: 61px;
    border: 1px solid #C9C9C9;
    border-radius: 8px;
    padding: 20px;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    &::placeholder {
        color: #C9C9C9;
    }
`

const Button = styled.button`
    background: #009AF1;
    border-radius: 8px;
    height: 61px;
    width: 100%;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #FFFFFF;
    border: none;
    font-family: 'Roboto';
    cursor: pointer;
`

const WrapperField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const ErrorMessage = styled.p`
    color: red;
`