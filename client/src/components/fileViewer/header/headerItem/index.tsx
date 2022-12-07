import { StyledHeaderItem } from "./styled";
import { SortType } from "../../";
import { FileType } from "../../../main";
import { ArrowIcon } from "../../../../icons";

type HeaderItemProps = {
  clicked: (type: keyof FileType) => void;
  type: keyof FileType;
  sortType: SortType;
  children: React.ReactNode
}

const HeaderItem = ({ children, clicked, type, sortType }: HeaderItemProps) => {
  const onClickedHandler = () => {
    clicked(type);
  };

  return (
    <StyledHeaderItem
      onClick={onClickedHandler}
      active={sortType.name === type}
      reverse={sortType.reverse}
    >
      <span>{children}</span>
      {sortType.name === type && (
        <div className="arrow">
          <ArrowIcon />
        </div>
      )}
    </StyledHeaderItem>
  );
};

export default HeaderItem;
