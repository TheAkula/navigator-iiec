import { MouseEventHandler, useState } from 'react'
import styled from 'styled-components'
import { useFileViewerContext } from '../../context/file-viewer-context'
import { IMenuItem, Spec, MenuItemType, MenuItemPlace } from './types'

interface Props {
  item: IMenuItem
  chosedType: Spec
}

export const MethodSupportItem = ({ item, chosedType }: Props) => {
  const { openDirectory } = useFileViewerContext()
  const [show, setShow] = useState(false)

  const clickHandler: MouseEventHandler = async (e) => {
    e.stopPropagation()

    if (item.type === MenuItemType.LIST) {
      setShow(prev => !prev)
    } else {
      let p = item.value

      if (!p) return

      if (item.type === MenuItemType.DEPENDENT
        && !Array.isArray(p)
        && typeof p === 'object') {
        p = p[chosedType.type]
      }

      if (item.place === MenuItemPlace.RELATIVE) {
        if (Array.isArray(p)) {
          p = [...chosedType.value, ...p]
        } else if (typeof p === 'string') {
          p = [...chosedType.value, p]
        }
      }

      if (Array.isArray(p)) {
        await openDirectory(p)
      }
    }
  }

  return (
    <Block>
      <Wrapper onClick={clickHandler}>
        <ItemTitle>{item.title}</ItemTitle>
      </Wrapper>
      {item.type === MenuItemType.LIST
        && show
        && item.items
        && (
          <InnerBlock>
            {item.items.map((it) => <MethodSupportItem key={it.title} item={it} chosedType={chosedType} />)}
          </InnerBlock>
        )}
    </Block>
  )
}

const Block = styled.div`
  
`

const InnerBlock = styled.div`
padding-left: 10px;
`

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
