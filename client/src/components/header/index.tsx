import { StyledHeader } from "./styled";
import Logo from "./logo";
import Navigation from "./navigation";
import Address from "./address";

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Navigation />
      <Address />
    </StyledHeader>
  );
};

export default Header;
