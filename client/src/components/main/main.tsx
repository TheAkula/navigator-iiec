import { StyledMain, StyledMenu } from './styled'
import { MainMenu } from './main-menu'
import { leftSidebarData } from './menu-types'
import { MenuItem } from './menu-item'
import { rightSidebarData } from './additionally-types'
import { useFileViewerContext } from '../../context/file-viewer-context'

export const Main = () => {
  const { openDirectory } = useFileViewerContext()

  const onChangePath = (path: string[]) => {
    openDirectory(path)
  }

  return (
    <StyledMain>
      <StyledMenu>
        <h3>Меню</h3>
        <ul>
          {leftSidebarData?.map((el) => (
            <MenuItem
              key={el.id}
              roleLinks={el.roleLinks}
              path={el.path}
              changePath={onChangePath}
            >
              <img src={el.imgUrl} alt="icon" />
              <p>{el.title}</p>
            </MenuItem>
          ))}
        </ul>
      </StyledMenu>

      <MainMenu />

      <StyledMenu>
        <h3>Меню</h3>
        <ul>
          {rightSidebarData?.map((el) => (
            <MenuItem
              key={el.id}
              path={el.path}
              roleLinks={el.roleLinks}
              changePath={onChangePath}
              state={{ showFileViewer: true }}
            >
              <img src={el.imgUrl} alt="icon" />
              <p>{el.title}</p>
            </MenuItem>
          ))}
        </ul>
      </StyledMenu>
    </StyledMain>
  )
}
