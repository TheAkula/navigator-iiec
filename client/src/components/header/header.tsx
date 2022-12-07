import { StyledHeader, StyledNavigation, StyledNavigationItem, StyledAddress, StyledLogo } from "./styled";
import Marker from "../../assets/images/map 1.svg";
import LogoImage from "../../assets/images/logo.svg";
import { headerMenuData } from "./types";

export const Header = () => {
  return (
    <StyledHeader>

      <StyledLogo>
        <img src={LogoImage} alt="Навигатор 2.0" />
      </StyledLogo>

      <StyledNavigation>
        {headerMenuData?.map(el => (
          <StyledNavigationItem key={el.id} to={el.path}>{el.title}</StyledNavigationItem>
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
  );
};

