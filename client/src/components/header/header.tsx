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

interface Props {
  isShowMenu?: boolean
  children: React.ReactNode
}

export const Header = ({ isShowMenu = true, children }: Props) => {
  const { updateMode } = useFileViewerContext()

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

      {children}

    </StyledHeader >
  )
}
