import {
  StyledHeader,
  StyledNavigation,
  StyledNavigationItem,
} from './styled'
import LogoImage from '../../assets/images/logo.svg'
import { headerMenuData } from './types'
import {
  MainMode,
  useFileViewerContext,
} from '../../context/file-viewer-context'
import { StyledLogo } from '../styled'
import { useContextUser } from '../../context/user-context'

interface Props {
  isShowMenu: boolean
}

export const Header = ({ isShowMenu }: Props) => {
  const { updateMode } = useFileViewerContext()
  const { currentUser } = useContextUser()

  const onClick = () => {
    updateMode(MainMode.ROUTES)
  }

  return (
    <StyledHeader>

      <StyledLogo>
        <img src={LogoImage} alt="Навигатор 2.0" />
      </StyledLogo>

      {isShowMenu && <StyledNavigation>
        {headerMenuData?.map((el) => (
          <StyledNavigationItem onClick={onClick} key={el.id} to={el.path}>
            {el.title}
          </StyledNavigationItem>
        ))}
      </StyledNavigation>}

    </StyledHeader >
  )
}
