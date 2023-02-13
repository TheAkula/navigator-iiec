import { useState } from 'react'
import styled from 'styled-components'
import { ILinkItem } from '../../../types'
import { LinkItem } from '../../link-item'
import { StyledViewsComponent } from './styled'

interface Props {
  link: ILinkItem
}

export const RenderItem = ({ link }: Props) => {

  const [isVisibleList, setIsVisibleList] = useState(false)

  const renderList = (title: string) => {
    return (
      <ListText>{title}</ListText>
    )
  }

  const renderItem = (title: string) => {

    return (
      <>
        <StyledViewsComponent onClick={() => setIsVisibleList(!isVisibleList)}>{title}</StyledViewsComponent>
        <WrapperList>
          {
            isVisibleList && link.listSelect?.map((el) => (
              <LinkItem link={el} renderItem={renderList} />
            ))
          }
        </WrapperList>
      </>
    )
  }

  return <LinkItem link={link} renderItem={renderItem} />
}

const WrapperList = styled.div`
  margin-bottom: 10px;
`

const ListText = styled.p`
  padding: 0 0 5px 10px;

  :hover {
    color: #018ddc;
  }
`
