import { Footer, Main, Header } from "../components";
import { LayoutWrapper } from "./styled";

export const Layout = () => {
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

