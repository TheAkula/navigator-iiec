import { StyledHeader } from "./styled";
import { HeaderItem } from "./headerItem/header-item";
import { FileViewerFilter, Filter } from "../../../context/file-viewer";

interface HeaderProps {
  clicked: (type: Filter) => void;
  filters: FileViewerFilter;
}

const Header = ({ clicked, filters }: HeaderProps) => {
  return (
    <StyledHeader>
      <HeaderItem
        sortType={filters[Filter.TITLE]}
        type={Filter.TITLE}
        clicked={clicked}
        active={filters[Filter.TITLE][1] === 0}
      >
        Имя
      </HeaderItem>
      <HeaderItem
        sortType={filters[Filter.TIME]}
        type={Filter.TIME}
        clicked={clicked}
        active={filters[Filter.TIME][1] === 0}
      >
        Дата изменения
      </HeaderItem>
      <HeaderItem
        sortType={filters[Filter.EXT]}
        type={Filter.EXT}
        clicked={clicked}
        active={filters[Filter.EXT][1] === 0}
      >
        Тип
      </HeaderItem>
      <HeaderItem
        sortType={filters[Filter.SIZE]}
        type={Filter.SIZE}
        clicked={clicked}
        active={filters[Filter.SIZE][1] === 0}
      >
        Размер
      </HeaderItem>
    </StyledHeader>
  )
}

export default Header
