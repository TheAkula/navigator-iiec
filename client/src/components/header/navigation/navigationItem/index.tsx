import { StyledNavigationItem } from "./styled";

interface NavigationItemProps {
  children: string;
  path: string;
}

const NavigationItem = ({ children, path }: NavigationItemProps) => {
  return (
    <StyledNavigationItem to={path}>
      <span>{children}</span>
    </StyledNavigationItem>
  );
};

export default NavigationItem;
