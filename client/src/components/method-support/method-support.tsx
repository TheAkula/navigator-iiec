import { methodSupportData, selectChoiceData } from './types'
import { Block, BlocksWrapper, CenterBlock } from '../../components'
import styled from 'styled-components'
import { Select } from '../select'
import { ViewsComponentsList } from '../views'
import { MethodSupportItem } from './method-support-item'
import { useState } from 'react'
import { FileViewer } from '../fileViewer/file-viewer'
import { useFileViewerContext } from '../../context/file-viewer-context'

export const MethodSupport = () => {
  const { path } = useFileViewerContext()
  const [value, setValue] = useState(selectChoiceData[0].value.toString())

  const chosed = selectChoiceData.find((d) => d.value.toString() === value)

  return (
    <BlocksWrapper>
      <Block title="Меню">
        <ul>
          {chosed && methodSupportData.map((item) => (
            <MethodSupportItem key={item.title} item={item} chosedType={chosed} />
          ))}
        </ul>
      </Block>
      <CenterBlock>
        <ViewsComponentsList>

          <ChoiceText>Выберите специальность:</ChoiceText>

          <Select
            value={value.toString()}
            values={selectChoiceData.map(d => (
              {
                value: d.value.toString(),
                title: d.title
              }
            ))}
            onChange={(v) => setValue(v)}
          />

          {!!path.length && <FileViewer />}
        </ViewsComponentsList>
      </CenterBlock>
    </BlocksWrapper>
  )
}

const ChoiceText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  margin-bottom: 10px;
`
