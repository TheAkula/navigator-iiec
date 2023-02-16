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

  const renderItem = (link: ILinkItem) => {

    return (
      <div>
        <StyledViewsComponent onClick={() => setIsVisibleList(prev => !prev)}>{link.title}</StyledViewsComponent>
        <WrapperList>
          {
            isVisibleList && link.listSelect && <InnerBlock>
              {link.listSelect.map((el) => (
                <RenderItem key={el.title} link={el} />
              ))}
            </InnerBlock>
          }
        </WrapperList>
      </div>
    )
  }

  return <LinkItem link={link} renderItem={renderItem} />
}

const InnerBlock = styled.div`
  padding-left: 10px;
`

const WrapperList = styled.div`
  margin-bottom: 10px;
`

