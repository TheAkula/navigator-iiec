import styled from 'styled-components'

export const FileViewerContent = styled.div`
  overflow-y: auto;
  height: calc(100% - 62.5px);
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.light_grey};
    border-radius: 5px;
  }

  ::-webkit-scrollbar:horizontal {
    height: 6px;
    background-color: #f5f5f5;
  }
  ::-webkit-scrollbar-thumb:horizontal {
    background-color: ${({ theme }) => theme.colors.light_grey};
    border-radius: 5px;
  }
`
