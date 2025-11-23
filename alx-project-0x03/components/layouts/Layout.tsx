import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { type LayoutProps } from "@/interface";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
