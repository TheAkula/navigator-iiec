import { StyledMain, StyledMenu } from './styled'
import { MainMenu } from './main-menu'
import { leftSidebarData } from './menu-types'
import { MenuItem } from './menu-item'
import { rightSidebarData } from './additionally-types'

export const Main = () => {
  return (
    <StyledMain>
      <StyledMenu>
        <h3>Меню</h3>
        <ul>
          {leftSidebarData?.map((el) => (
            <MenuItem key={el.id} roleLinks={el.roleLinks} path={el.path}>
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
            <MenuItem key={el.id} path={el.path} roleLinks={el.roleLinks}>
              <img src={el.imgUrl} alt="icon" />
              <p>{el.title}</p>
            </MenuItem>
          ))}
        </ul>
      </StyledMenu>
    </StyledMain>
  )
}
