import { StyledMenu } from "./styled";
import { REWithChildren } from "../../../../types";

type MenuProps = {
  title?: string;
  itemClicked?: () => void;
  children: any;
  className?: string;
} & REWithChildren;

const Menu = ({ className, title, children }: MenuProps) => {
  return (
    <StyledMenu className={className || ""}>
      {title && <h3>{title}</h3>}
      <ul>{children}</ul>
    </StyledMenu>
  );
};

export default Menu;
