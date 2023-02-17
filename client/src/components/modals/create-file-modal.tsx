import { useState } from 'react'
import { useFileViewerContext } from '../../context/file-viewer-context'
import { BtnCancel, BtnCreate } from '../styled'
import { Input, WrapperBtns } from './styles'

interface Props {
  setShow: (show: boolean) => void
}

// TODO: add styles
export const CreateFileModal = ({ setShow }: Props) => {
  const { createFile } = useFileViewerContext()
  const [name, setName] = useState('')

  const onAgree = async () => {
    if (name.length) {
      await createFile(name)

      setName('')
      setShow(false)
    }
  }

  const onCancel = () => {
    setName('')
    setShow(false)
  }

  return (
    <>
      <label htmlFor="file-name">Имя файла</label>
      <br />
      <Input
        id="file-name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <WrapperBtns>
        <BtnCreate onClick={onAgree}>Создать</BtnCreate>
        <BtnCancel onClick={onCancel}>Отмена</BtnCancel>
      </WrapperBtns>
    </>
  )
}
