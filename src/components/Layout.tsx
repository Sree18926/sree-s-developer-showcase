import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <ScrollProgress />
    <Navbar />
    <main className="min-h-[calc(100vh-72px)]">{children}</main>
    <Footer />
  </>
);

export default Layout;
