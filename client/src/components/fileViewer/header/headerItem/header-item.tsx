import { StyledHeaderItem } from './styled'
import { ArrowIcon } from '../../../../icons'
import { Filter, FilterState } from '../../../../context/file-viewer-context'

type HeaderItemProps = {
  clicked: (type: Filter) => void;
  type: Filter;
  sortType: [FilterState, number];
  children: React.ReactNode;
  active: boolean;
};

export const HeaderItem = ({
  children,
  clicked,
  type,
  sortType,
  active,
}: HeaderItemProps) => {
  const onClickedHandler = () => {
    clicked(type)
  }

  return (
    <StyledHeaderItem
      active={active}
      reverse={sortType[0] === FilterState.DESC}
      onClick={onClickedHandler}
    >
      <span>{children}</span>
      {active && (
        <div className="arrow">
          <ArrowIcon />
        </div>
      )}
    </StyledHeaderItem>
  )
}
