import { createContext, ReactNode, useContext, useState } from 'react'

export enum ContextMenuMode {
  FILE,
  WORKSPACE,
}

interface ContextMenuContextValue {
  mode: ContextMenuMode
  coords: [number, number]
  show: boolean
  setContextMenuMode: (mode: ContextMenuMode) => void
  setShowContextMenu: (show: boolean) => void
  setCoords: (position: [number, number]) => void
}

const ContextMenuContext = createContext<ContextMenuContextValue>({
  mode: ContextMenuMode.WORKSPACE,
  show: false,
  coords: [0, 0],
  /* eslint-disable @typescript-eslint/no-empty-function */
  setContextMenuMode: () => { },
  setShowContextMenu: () => { },
  setCoords: () => { },
  /* eslint-enable @typescript-eslint/no-empty-function */
})

interface Props {
  children: ReactNode
}

export const ContextMenuContextProvider = ({ children }: Props) => {
  const [mode, setMode] = useState<ContextMenuMode>(ContextMenuMode.WORKSPACE)
  const [show, setShow] = useState(false)
  const [coords, setContextMenuCoords] = useState<[number, number]>([
    0, 0,
  ])

  const setShowContextMenu = (show: boolean) => {
    setShow(show)
  }

  const setContextMenuMode = (mode: ContextMenuMode) => {
    setMode(mode)
  }

  const setCoords = (coords: [number, number]) => {
    setContextMenuCoords(coords)
  }

  return <ContextMenuContext.Provider value={{
    mode,
    show,
    coords,
    setCoords,
    setContextMenuMode,
    setShowContextMenu
  }}>{children}</ContextMenuContext.Provider>
}

export const useContextMenuContext = () => useContext(ContextMenuContext)