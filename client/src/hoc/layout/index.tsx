import Header from "../../components/header";
import Main from "../../components/main";
import Footer from "../../components/footer";
import { LayoutWrapper } from "./styled";

const Layout = () => {
  return (
    <div>
      <Header />
      <LayoutWrapper>
        <Main />
        <Footer />
      </LayoutWrapper>
    </div>
  );
};

export default Layout;
