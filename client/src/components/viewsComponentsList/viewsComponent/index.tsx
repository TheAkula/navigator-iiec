import { Link } from "react-router-dom";
import { StyledViewsComponent } from "./styled";
import { REWithChildren } from "../../../../types";

type ViewsComponentProps = REWithChildren & {
  path: string;
};

const ViewsComponent = ({ path, children }: ViewsComponentProps) => {
  return (
    <StyledViewsComponent>
      <Link to={path} className="link">
        {children}
      </Link>
    </StyledViewsComponent>
  );
};

export default ViewsComponent;
