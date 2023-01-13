import {
  StyledHeader,
  StyledNavigation,
  StyledNavigationItem,
  StyledAddress,
} from './styled'
import Marker from '../../assets/images/map 1.svg'
import LogoImage from '../../assets/images/logo.svg'
import { headerMenuData } from './types'
import {
  MainMode,
  useFileViewerContext,
} from '../../context/file-viewer-context'
import { StyledLogo } from '../styled'

export const Header = () => {
  const { updateMode } = useFileViewerContext()

  const onClick = () => {
    updateMode(MainMode.ROUTES)
  }

  return (
    <StyledHeader>
      <StyledLogo>
        <img src={LogoImage} alt="Навигатор 2.0" />
      </StyledLogo>

      <StyledNavigation>
        {headerMenuData?.map((el) => (
          <StyledNavigationItem onClick={onClick} key={el.id} to={el.path}>
            {el.title}
          </StyledNavigationItem>
        ))}
      </StyledNavigation>

      <StyledAddress>
        <img src={Marker} alt="marker" />
        <p>
          ул. Ленина, 68, Ижевск,
          <br /> республика Удмуртия, 426004
        </p>
      </StyledAddress>
    </StyledHeader>
  )
}
