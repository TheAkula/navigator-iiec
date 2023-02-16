import styled from 'styled-components'
import { ILinkItem } from '../types'
import { LinkItem, LinkItemProps } from './link-item'

type Props = Omit<LinkItemProps, 'renderItem'> & {
  img?: string
}

export const MainLinkItem = ({ img, link }: Props) => {
  const renderItem = (link: ILinkItem) => {
    const itemContent = (
      <>
        {img && <img src={img} alt={link.title} />}
        <ItemTitle>{link.title}</ItemTitle>
      </>
    )

    return <Wrapper>{itemContent}</Wrapper>
  }

  return <LinkItem link={link} renderItem={renderItem} />
}

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  padding: 15px 0 15px 30px;
  text-decoration: none;
  align-items: center;
  cursor: pointer;
  text-decoration: none;

  :hover {
    background-color: #daf2ff;
  }
`

const ItemTitle = styled.p`
  font-size: 16px;
  line-height: 18.75px;
  color: #333333;
`
