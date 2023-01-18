import React from 'react'
import { BlockItem } from '../block-item'
import { Block, BlocksWrapper, CenterBlock } from '../blocks'
import { FileViewer } from '../fileViewer/file-viewer'
import { items } from './types'

export const ManageQuality = () => {
    return (
        <BlocksWrapper>
            <Block title="Меню">
                <ul>
                    {items.map((item) => (
                        <BlockItem key={item.title} link={item} />
                    ))}
                </ul>
            </Block>
            <CenterBlock>
                <FileViewer />
            </CenterBlock>
        </BlocksWrapper>
    )
}
