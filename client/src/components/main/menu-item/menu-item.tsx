import React from 'react'
import { MenuItemType } from '../types'
import { StyledMenuA, StyledMenuLink } from './styled'

interface Props {
    path: string
    children?: React.ReactNode
    state?: { [key: string]: string | boolean | number }
    changePath?: (p: string, ext: string) => void
    roleLinks?: MenuItemType
}

export const MenuItem = ({ path, children, roleLinks = MenuItemType.Link, changePath, state }: Props) => {
    const changeHandler = () => {
        changePath!(path, '')
    }

    return (
        <>
            {roleLinks === MenuItemType.Link && <StyledMenuLink to={path}>{children}</StyledMenuLink>}
            {roleLinks === MenuItemType.ExternalRef && <StyledMenuA href={path} target='_blank'>{children}</StyledMenuA>}
            {roleLinks === MenuItemType.FileManager && <StyledMenuLink
                to={path ?? '/'}
                state={state ?? ''}
                onClick={state && changeHandler}>
                {children}
            </StyledMenuLink>}
        </>
    )
}
