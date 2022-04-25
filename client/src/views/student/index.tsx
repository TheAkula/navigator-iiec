import ViewsComponentsList from "../../components/viewsComponentsList";
import ViewsComponent from "../../components/viewsComponentsList/viewsComponent";

const Student = () => {
  return (
    <ViewsComponentsList>
      <ViewsComponent path="/">Где хранить файлы?</ViewsComponent>
      <ViewsComponent path="/">Документы студентов до 06.2017</ViewsComponent>
      <ViewsComponent path="/">Документы студентов с 09.2017</ViewsComponent>
      <ViewsComponent path="/">Образовательные ресурсы</ViewsComponent>
      <ViewsComponent path="/">
        Материалы для самостоятельной работы
      </ViewsComponent>
      <ViewsComponent path="/">Тестирование</ViewsComponent>
      <ViewsComponent path="/">
        Профессиональный конкурс WorldSkills
      </ViewsComponent>
      <ViewsComponent path="/">Сайт олимпиады IT-Planet</ViewsComponent>
      <ViewsComponent path="/">Micrisoft для студентов</ViewsComponent>
    </ViewsComponentsList>
  );
};

export default Student;
