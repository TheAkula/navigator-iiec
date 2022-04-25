import ViewsComponentsList from "../../components/viewsComponentsList";
import ViewsComponent from "../../components/viewsComponentsList/viewsComponent";

const Requests = () => {
  return (
    <ViewsComponentsList>
      <ViewsComponent path="/">Компьютеры, оргтехника</ViewsComponent>
      <ViewsComponent path="/">Электрик, Сантехник, Плотник</ViewsComponent>
      <ViewsComponent path="/">Закупки</ViewsComponent>
    </ViewsComponentsList>
  );
};

export default Requests;
