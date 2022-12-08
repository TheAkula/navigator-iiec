import React from "react";
import { MenuItemType } from "../types";
import { StyledMenuA, StyledMenuLink } from "./styled";

interface Props {
  path: string[] | string;
  children?: React.ReactNode;
  state?: { [key: string]: string | boolean | number };
  changePath: (p: string[]) => void;
  roleLinks: MenuItemType;
}

export const MenuItem = ({
  path,
  children,
  roleLinks,
  changePath,
  state,
}: Props) => {
  const stringPath = Array.isArray(path) ? path.join() : path;

  const changeHandler = () => {
    if (Array.isArray(path)) {
      changePath(path);
    }
  };

  return (
    <>
      {roleLinks === MenuItemType.Link && (
        <StyledMenuLink to={stringPath}>{children}</StyledMenuLink>
      )}
      {roleLinks === MenuItemType.ExternalRef && (
        <StyledMenuA href={stringPath} target="_blank">
          {children}
        </StyledMenuA>
      )}
      {roleLinks === MenuItemType.FileManager && (
        <StyledMenuLink
          to={stringPath ?? "/"}
          state={state ?? ""}
          onClick={changeHandler}
        >
          {children}
        </StyledMenuLink>
      )}
    </>
  );
};
