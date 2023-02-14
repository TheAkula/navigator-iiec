import { methodSupportData, selectChoiceData } from './types'
import { Block, BlocksWrapper, CenterBlock } from '../../components'
import styled from 'styled-components'
import { Select } from '../select'
import { MainLinkItem } from '../main-link-item'
import { ViewsComponentsList } from '../views'

export const MethodSupport = () => {
  return (
    <>
      <BlocksWrapper>
        <Block title="Меню">
          <ul>
            {methodSupportData.map((item) => (
              <MainLinkItem key={item.title} link={item} />
            ))}
          </ul>
        </Block>
      <CenterBlock>
			<ViewsComponentsList>

      <ChoiceText>Выберите специальность:</ChoiceText>

      <Select
    label={selectChoiceData[0]}
    values={selectChoiceData}
      />
		</ViewsComponentsList>
      </CenterBlock>
      </BlocksWrapper>
    </>
  )
}

const ChoiceText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  margin-bottom: 10px;
`
