import { REWithChildren } from "../../../../../types";
import { StyledHeaderItem } from "./styled";
import { SortType } from "../../";
import { FileType } from "../../../main";
import Arrow from "../../../svgComponents/arrow";

type HeaderItemProps = {
  clicked: (type: keyof FileType) => void;
  type: keyof FileType;
  sortType: SortType;
} & REWithChildren;

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
          <Arrow />
        </div>
      )}
    </StyledHeaderItem>
  );
};

export default HeaderItem;
