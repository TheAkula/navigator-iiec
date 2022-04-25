import { StyledLogo } from "./styled";
import LogoImage from "../../../assets/images/logo.svg";

const Logo = () => {
  return (
    <StyledLogo>
      <img src={LogoImage} alt="Навигатор 2.0" />
    </StyledLogo>
  );
};

export default Logo;
