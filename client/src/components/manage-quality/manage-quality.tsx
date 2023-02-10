import { Block, BlocksWrapper, CenterBlock } from '../blocks'
import { FileViewer } from '../fileViewer/file-viewer'
import { MainLinkItem } from '../main-link-item'
import { items } from './types'

export const ManageQuality = () => {
  return (
    <BlocksWrapper>
      <Block title="Меню">
        <ul>
          {items.map((item) => (
            <MainLinkItem key={item.title} link={item} />
          ))}
        </ul>
      </Block>
      <CenterBlock>
        <FileViewer />
      </CenterBlock>
    </BlocksWrapper>
  )
}
