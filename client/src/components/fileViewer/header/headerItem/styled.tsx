import styled from 'styled-components'

interface StyledHeaderItemProps {
  active: boolean;
  reverse: boolean;
}

export const StyledHeaderItem = styled.div<StyledHeaderItemProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px 10px;
  position: relative;
  justify-content: space-between;

  span {
    color: #6d6d6d;
    font-size: 14px;
  }

  .arrow {
    display: ${(props) => (props.active ? 'block' : 'none')};
    transform: ${(props) => (!props.reverse ? 'rotate(180deg)' : '')};
    width: 14px;
    height: 14px;
  }

  :hover {
    background-color: #dedede;
  }
`
