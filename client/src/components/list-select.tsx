export { }
// import { useState } from 'react'
// import styled from 'styled-components'
// import { ListItem } from '../types'

// interface Props {
//   values: ListItem[] | undefined
// }

// export const ListSelect = ({ values }: Props) => {
//   const [isShowSelect, setIsShowSelect] = useState(false)

//   return (
//     <>
//       <LinkItem link={link} renderItem={renderItem} />

//     </>
//   )
// }


// // const SelectContainer = styled.div`
// //     position: relative;
// //     margin: 0;
// // `

// // const SelectLabelButton = styled.button`
// //     border: 1px solid #C9C9C9;
// //     border-radius: 4px;
// //     width: 100%;
// //     background-color: #fff;
// //     align-items: center;
// //     justify-content: space-between;
// //     display: flex;
// //     justify-content: space-between;
// //     align-items: center;
// //     min-height: 35px;
// //     cursor: pointer;
// //     padding: 10px 12px;
// //     transition: 0.3s ease;
// //     &:hover {
// //         background-color: #eee;
// //     }
// // `

// // const SelectLabel = styled.p`
// //     font-weight: 500;
// //     font-size: 13px;
// //     line-height: 15px;
// //     color: #000000;
// // `

// // interface DropdownStyled {
// //   isVisible: boolean
// // }

// // const DropdownStyle = styled.div<DropdownStyled>`
// //     position: absolute;
// //     top: 35px;
// //     left: 0;
// //     max-height: 40vmax;
// //     min-width: 10rem;
// //     display: flex;
// //     flex-direction: column;
// //     border-radius: 0 4px; 
// //     background: #fafafa;
// //     border: 1px solid #C9C9C9;
// //     transition: max-height 0.2s ease;
// //     overflow: scroll;
// //     ${(p) =>
// //     p.isVisible !== true &&
// //     css`
// //     max-height: 40px;
// //     visibility: hidden;
// //     `}
// // `

// // interface DropdownItemStyled {
// //   active: boolean
// // }

// // const DropdownItem = styled.div<DropdownItemStyled>`
// //     display: flex;
// //     align-items: center;
// //     width: 100%;
// //     padding: 10px 12px;
// //     font-size: 0.9rem;
// //     font-weight: 400;
// //     color: #333;
// //     border-radius: 0.3rem;
// //     cursor: pointer;
// //     ${(p) =>
// //     p.active &&
// //     css`
// //     color: #166edc;
// //     font-weight: 500;
// //     `}
// //     &:hover, :focus, :focus:hover {
// //         background-color: #daf2ff;
// //         outline: none;
// //     }
// // `

// // interface ArrowStyled {
// //   active: boolean
// // }

// // const ArrowImage = styled.img<ArrowStyled>`
// //     transition: 0.3s ease all;
// //     transform: ${({ active }) => active ? 'rotate(180deg)' : 'rotate(0)'};
// // `