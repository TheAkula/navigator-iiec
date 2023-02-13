import { useFileViewerContext } from '../../context/file-viewer-context'
import { Block, BlocksWrapper, CenterBlock } from '../blocks'
import { FileViewer } from '../fileViewer/file-viewer'
import { MainLinkItem } from '../main-link-item'
import { items } from './types'

export const ManageQuality = () => {
  const { path } = useFileViewerContext()

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
        {!!path.length && <FileViewer />}
      </CenterBlock>
    </BlocksWrapper>
  )
}
