import Footer from "../Footer";
import Navbar from "../Navbar";
import TopBanner from "../TopBanner";

interface Props {
  children: JSX.Element | JSX.Element[];
}
function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <TopBanner />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
