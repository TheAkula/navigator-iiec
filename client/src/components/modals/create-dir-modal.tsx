import { useState } from 'react'
import { useFileViewerContext } from '../../context/file-viewer-context'

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
      <input
        id="dir-name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <button onClick={onAgree}>Ок</button>
        <button onClick={onCancel}>Отмена</button>
      </div>
    </>
  )
}
