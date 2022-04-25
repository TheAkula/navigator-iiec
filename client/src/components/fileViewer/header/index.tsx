import { StyledHeader } from "./styled";
import HeaderItem from "./headerItem";
import { FileType, SortType } from "../index";

interface HeaderProps {
  clicked: (type: keyof FileType) => void;
  sortType: SortType;
}

const Header = ({ clicked, sortType }: HeaderProps) => {
  return (
    <StyledHeader>
      <HeaderItem sortType={sortType} type="title" clicked={clicked}>
        Имя
      </HeaderItem>
      <HeaderItem sortType={sortType} type="mtime" clicked={clicked}>
        Дата изменения
      </HeaderItem>
      <HeaderItem sortType={sortType} type="ext" clicked={clicked}>
        Тип
      </HeaderItem>
      <HeaderItem sortType={sortType} type="size" clicked={clicked}>
        Размер
      </HeaderItem>
    </StyledHeader>
  );
};

export default Header;
