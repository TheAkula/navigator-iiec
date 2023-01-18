import React, { useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import arrow from '../assets/images/arrow.svg'

interface Props {
    label: string
    values: string[]
    onChange?: (v: string) => void
}

export const Select = ({
    label,
    values,
    onChange
}: Props) => {
    const [currentValue, setCurrentValue] = useState('')
    const [open, setOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleValueChange = (value: string) => {
        setCurrentValue(value)
    }

    const handleChange = (value: string) => {
        handleValueChange(value)

        if (onChange) {
            onChange(value)
        }
        handleClose()
    }

    // useEffect(() => {
    //     /**
    //      * Alert if clicked on outside of element
    //      */
    //     function handleClickOutside(event: any) {
    //         if (dropdownRef.current && !dropdownRef.current.contains(event.target) && open) {
    //             alert('You clicked outside of me!')
    //         }
    //     }
    //     // Bind the event listener
    //     document.addEventListener('mousedown', handleClickOutside)


    //     return () => {
    //         // Unbind the event listener on clean up
    //         document.removeEventListener('mousedown', handleClickOutside)
    //     }
    // }, [dropdownRef])


    return (
        <SelectContainer>
            <SelectLabelButton onClick={handleOpen}>
                <SelectLabel>{currentValue !== '' ? currentValue : label}</SelectLabel>
                <ArrowImage active={open} src={arrow} alt='arrow' />
            </SelectLabelButton>
            <DropdownStyle isVisible={open} ref={dropdownRef}>
                {values.map((value, index) => (
                    <DropdownItem
                        onClick={() => handleChange(value)}
                        active={value === currentValue}
                        key={index}>
                        {value}
                    </DropdownItem>
                ))}
            </DropdownStyle>
        </SelectContainer>
    )
}

const SelectContainer = styled.div`
    position: relative;
    margin: 0;
`

const SelectLabelButton = styled.button`
    border: 1px solid #C9C9C9;
    border-radius: 4px;
    width: 100%;
    background-color: #fff;
    align-items: center;
    justify-content: space-between;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 35px;
    cursor: pointer;
    padding: 10px 12px;
    transition: 0.3s ease;
    &:hover {
    background-color: #eee;
    }
`

const SelectLabel = styled.p`
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    color: #000000;
`

interface DropdownStyled {
    isVisible: boolean
}

const DropdownStyle = styled.div<DropdownStyled>`
    position: absolute;
    top: 35px;
    left: 0;
    max-height: 40vmax;
    min-width: 10rem;
    display: flex;
    flex-direction: column;
    border-radius: 0 4px; 
    background: #fafafa;
    border: 1px solid #C9C9C9;
    transition: max-height 0.2s ease;
    overflow: scroll;
    ${(p) =>
        p.isVisible !== true &&
        css`
    max-height: 40px;
    visibility: hidden;
    `}
`

interface DropdownItemStyled {
    active: boolean
}

const DropdownItem = styled.div<DropdownItemStyled>`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 12px;
    font-size: 0.9rem;
    font-weight: 400;
    color: #333;
    border-radius: 0.3rem;
    cursor: pointer;
    ${(p) =>
        p.active &&
        css`
    color: #166edc;
    font-weight: 500;
    `}
    &:hover, :focus, :focus:hover {
    background-color: #166edc;
    color: #fafafa;
    outline: none;
    }
`

interface ArrowStyled {
    active: boolean
}

const ArrowImage = styled.img<ArrowStyled>`
    transition: 0.3s ease all;
    transform: ${({ active }) => active ? 'rotate(180deg)' : 'rotate(0)'};
`