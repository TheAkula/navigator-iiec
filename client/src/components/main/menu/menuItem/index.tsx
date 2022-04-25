import { StyledMenuItem, StyledMenuLink, StyledMenuA } from "./styled";
import { REWithChildren } from "../../../../../types";

type MenuItemProps = {
  path: string;
  imgUrl: string;
  isLink?: boolean;
  changePath?: (p: string, ext: string) => void;
  state?: { [key: string]: any };
  to?: string;
} & REWithChildren;

const MenuItem = ({
  path,
  children,
  imgUrl,
  changePath,
  isLink,
  state,
  to,
}: MenuItemProps) => {
  const onClicked = () => {
    changePath!(path, "");
  };

  const item = isLink ? (
    <StyledMenuLink
      to={to!}
      state={state}
      onClick={state ? onClicked : undefined}
    >
      <img src={imgUrl} alt="icon" />
      <p>{children}</p>
    </StyledMenuLink>
  ) : changePath ? (
    <StyledMenuItem onClick={onClicked}>
      <img src={imgUrl} alt="icon" />
      <p>{children}</p>
    </StyledMenuItem>
  ) : (
    <StyledMenuA href={path} target="_blank">
      <img src={imgUrl} alt="icon" />
      <p>{children}</p>
    </StyledMenuA>
  );

  return item;
};

export default MenuItem;
