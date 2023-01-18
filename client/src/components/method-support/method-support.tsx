import React from 'react'
import { methodSupportData, selectChoiceData } from './types'
import { Block, BlockItem, BlocksWrapper, CenterBlock } from '../../components'
import styled from 'styled-components'
import { Select } from '../select'

export const MethodSupport = () => {


    return (
        <>
            <BlocksWrapper>
                <Block title="Меню">
                    <ul>
                        {methodSupportData.map((item) => (
                            <BlockItem key={item.id} link={item} />
                        ))}
                    </ul>
                </Block>
                <CenterBlock>
                    <ChoiceText>Выберите специальность:</ChoiceText>

                    <Select label="10.02.05 Обеспечение информационной безопасности автоматизированных систем" values={selectChoiceData} />
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