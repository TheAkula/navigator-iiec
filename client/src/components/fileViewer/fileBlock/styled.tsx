import styled from 'styled-components'

interface StyledFileBlockProps {
  selected?: boolean
}

export const StyledFileBlock = styled.a<StyledFileBlockProps>`
  display: grid;
  grid-template-columns: 1fr 150px 140px 120px;
  align-items: center;
  padding: 5px 0;
  border-bottom: 2px solid #c9c9c9;
  text-decoration: none;
  color: currentColor;
  background-color: ${({ selected }) => selected ? '#8fcef37e' : 'inherit'};

  > div {
    padding: 0px 10px;
  }

  :hover {
    background-color: #bee7ff7e;
  }

  span {
    font-size: 14px;
    color: #6d6d6d;
  }

  .main-inf {
    padding-left: 5px;
    display: flex;
    gap: 15px;
    align-items: center;

    span {
      font-size: 16px;
      color: black;
    }

    input {
      border: 1px solid #6d6d6d;
    }
  }

  .image-container {
    width: 24px;
    height: 24px;

    img {
      height: 100%;
    }
  }
`
