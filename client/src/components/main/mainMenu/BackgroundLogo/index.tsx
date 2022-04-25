import { StyledBackgroundLogo } from "./styled";
import BigLogo from "../../../../assets/images/logo 1.svg";

const BackgroundLogo = () => {
  return (
    <StyledBackgroundLogo>
      <img src={BigLogo} alt="НАВИГАТОР 2.0" />
    </StyledBackgroundLogo>
  );
};

export default BackgroundLogo;
