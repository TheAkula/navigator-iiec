import { useState } from 'react'
import { useFileViewerContext } from '../../context/file-viewer-context'
import { BtnCancel, BtnCreate } from '../styled'
import { Input, WrapperBtns } from './styles'

interface Props {
  setShow: (show: boolean) => void
}

// TODO: add styles
export const CreateDirModal = ({ setShow }: Props) => {
  const { createDir } = useFileViewerContext()
  const [name, setName] = useState('')

  const onAgree = async () => {
    if (name.length) {
      await createDir(name)

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
      <label htmlFor="dir-name">Имя папки</label>
      <br />
      <Input
        id="dir-name"
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

