import { StyledNavigation } from "./styled";
import NavigationItem from "./navigationItem";

const Navigation = () => {
  return (
    <StyledNavigation>
      <NavigationItem path="/">Главная</NavigationItem>
      <NavigationItem path="/requests">Заявки</NavigationItem>
      <NavigationItem path="/our-pride">Наша гордость</NavigationItem>
      <NavigationItem path="/student">Студенту</NavigationItem>
    </StyledNavigation>
  );
};

export default Navigation;
