import React from 'react'
import styled from 'styled-components'
import { StyledMain, StyledMenu } from '../styled'
import { SpecialityChoice } from './speciality-choice'
import { methodSupportData } from './types'

export const MethodSupport = () => {
    return (
        <StyledMain>
            <StyledMenu>
                <h3>Меню</h3>
                <ul>
                    {methodSupportData?.map((item) => (
                        <MenuItem key={item.id}>{item.title}</MenuItem>
                    ))}
                </ul>
            </StyledMenu>

            <SpecialityChoice />
        </StyledMain>
    )
}

const MenuItem = styled.li`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
`