import ViewsComponentsList from "../../components/viewsComponentsList";
import ViewsComponent from "../../components/viewsComponentsList/viewsComponent";

const OurPride = () => {
  return (
    <ViewsComponentsList>
      <ViewsComponent path="/">2006-2007</ViewsComponent>
      <ViewsComponent path="/">2007-2008</ViewsComponent>
      <ViewsComponent path="/">2009-2010</ViewsComponent>
      <ViewsComponent path="/">Персональные стипендианты</ViewsComponent>
    </ViewsComponentsList>
  );
};

export default OurPride;
